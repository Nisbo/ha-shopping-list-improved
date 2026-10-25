// Run with Node.js: node tests/category-chip-collapse.cjs [optional-card-file]
const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const path=require('node:path');
let Card,clock=0,next=0,timers=new Map(),store=new Map();
class El {constructor(){this.style={};this.children=[];this.events={};this.classList={add(){},remove(){}};}set innerHTML(v){this.children=[];}appendChild(el){this.children.push(el);}addEventListener(name,fn){this.events[name]=fn;}click(){this.events.click?.();}}
const c={HTMLElement:class{},console,localStorage:{getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v)},
setTimeout(fn,ms){const id=++next;timers.set(id,{fn,at:clock+ms});return id;},clearTimeout:id=>timers.delete(id),clearInterval(){},
document:{querySelector:()=>null,createElement:()=>new El()},window:{},customElements:{define(n,x){Card=x;}}};
vm.createContext(c);vm.runInContext(fs.readFileSync(process.argv[2] || path.join(__dirname,'..','ha-shopping-list-improved.js'),'utf8'),c);
function reset(){store.clear();timers.clear();clock=0;}
function tick(ms){clock+=ms;for(const [id,t] of [...timers])if(t.at<=clock){timers.delete(id);t.fn();}}
const cats=[{name:'Fruit',items:['Apple']},{name:'Drinks',items:['Milk']}];
function card(){const x=Object.create(Card.prototype);Object.assign(x,{_entity:'todo.test',_historyEl:new El(),_showCategoryChips:true,_categoryChipCollapseTimeout:5,_categoryChipCollapseTimer:null,_categoryChipContents:[],_categories:cats,_getLocalCategories:()=>cats,_getDynamicCategories:()=>[],_shadow:{getElementById:()=>new El()},_inputEl:{value:''},_chipPosition:'bottom',_dishes:[],_notificationTimers:new Map(),_pendingNotificationChanges:new Map(),_loadGlobalChipsFromFile(){},_loadGlobalCategoriesFromFile(){},_loadLocalEANFromFile(){},_getTodoFilterStorageKey:()=> 'filter'});return x;}
function pass(name,fn){reset();try{fn();console.log('PASS',name);}catch(e){console.log('FAIL',name,':',e.message);process.exitCode=1;}}
pass('default 0 keeps categories expanded',()=>{let x=card();x._categoryChipCollapseTimeout=0;x._renderHistory();x._historyEl.children[0].click();tick(6000);assert.equal(x._categoryChipContents[0].content.style.display,'flex');});
pass('5 seconds collapses all and saves state',()=>{let x=card();x._renderHistory();x._historyEl.children[0].click();x._historyEl.children[2].click();tick(5000);assert(x._categoryChipContents.every(y=>y.content.style.display==='none'));assert.equal(store.get('todo.test_category_collapsed_Drinks'),'true');});
pass('second expand restarts deadline',()=>{let x=card();x._renderHistory();x._historyEl.children[0].click();tick(4000);x._historyEl.children[2].click();tick(1000);assert.equal(x._categoryChipContents[0].content.style.display,'flex');tick(4000);assert.equal(x._categoryChipContents[0].content.style.display,'none');});
pass('background rerender preserves running deadline',()=>{let x=card();x._renderHistory();x._historyEl.children[0].click();tick(4000);x._renderHistory();tick(1000);assert.equal(x._categoryChipContents[0].content.style.display,'none');});
pass('expanded state after reload starts timer',()=>{store.set('todo.test_category_collapsed_Fruit','false');let x=card();x._renderHistory();tick(5000);assert.equal(store.get('todo.test_category_collapsed_Fruit'),'true');});
pass('changing timeout to 0 cancels existing countdown',()=>{let x=card();x._renderHistory();x._historyEl.children[0].click();x.setConfig({entity:'todo.test',show_category_chips:true,category_chips_collapse_timeout:0});tick(5000);assert.equal(store.get('todo.test_category_collapsed_Fruit'),'false');});
pass('filtered-out expanded category also collapses',()=>{let x=card();x._renderHistory();x._historyEl.children[0].click();x._historyEl.children[2].click();x._allowFilterChips=true;x._inputEl.value='Apple';x._renderHistory();tick(5000);assert.equal(store.get('todo.test_category_collapsed_Drinks'),'true');});

pass('configured timeout clamps negative, fractional and oversized values',()=>{
 let x=card();
 for(const [input,expected] of [[-1,0],[5.9,5],[9999,3600],['bad',0]]){
  x.setConfig({entity:'todo.test',category_chips_collapse_timeout:input});
  assert.equal(x._categoryChipCollapseTimeout,expected);
 }
});
pass('new timeout replaces an old countdown when the card renders',()=>{
 let x=card();x._renderHistory();x._historyEl.children[0].click();tick(4000);
 x.setConfig({entity:'todo.test',show_category_chips:true,category_chips_collapse_timeout:10});
 x._renderHistory();tick(1000);assert.equal(store.get('todo.test_category_collapsed_Fruit'),'false');
 tick(9000);assert.equal(store.get('todo.test_category_collapsed_Fruit'),'true');
});
pass('disabling category chips clears the timer and stale element references',()=>{
 let x=card();x._renderHistory();x._historyEl.children[0].click();
 x.setConfig({entity:'todo.test',show_category_chips:false,category_chips_collapse_timeout:5});
 assert.equal(timers.size,0);assert.equal(x._categoryChipContents.length,0);
 tick(5000);assert.equal(store.get('todo.test_category_collapsed_Fruit'),'false');
});
pass('switching lists does not let the old countdown change the new list',()=>{
 let x=card();x._renderHistory();x._historyEl.children[0].click();
 x.setConfig({entity:'todo.other',show_category_chips:true,category_chips_collapse_timeout:5});
 tick(5000);assert.equal(store.get('todo.other_category_collapsed_Fruit'),undefined);
});
pass('collapse does not create stored state for dynamic or empty categories',()=>{
 let x=card();x._categories=[...cats,{name:'Dynamic',items:['Test'],isDynamic:true},{name:'Empty',items:[]}];
 x._collapseAllCategoryChips();
 assert.equal(store.get('todo.test_category_collapsed_Dynamic'),undefined);
 assert.equal(store.get('todo.test_category_collapsed_Empty'),undefined);
});
