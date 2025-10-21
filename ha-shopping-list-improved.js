/*
 * Improved Shopping List Card
 * Version: 1.0.0
 * @description Verbesserte Shopping List Card für Home Assistant.
 * @author Nisbo
 * @license MIT
  ha-shopping-list-improved.js
*/

class HaShoppingListImproved extends HTMLElement {
    constructor(){
        super();
        this._onAdd = this._onAdd.bind(this);
        this._clearCompleted = this._clearCompleted.bind(this);
    }

    /**
     * Übersetzung
     * @param {string} key Pfad zur Übersetzung, z.B. "editor.labels.chip_merge"
     */
    localize(key) {
        const lang = (document.documentElement.lang || "en").split("-")[0];
        const translations = window.loadCardTranslations?.("ha-shopping-list-improved") || {};
        let value = key.split('.').reduce((obj, k) => (obj || {})[k], translations[lang]);
        return value || key; // fallback: key selbst
    }
	
    set hass(hass) {
        this._hass = hass;
        this.render();
    }

	setConfig(config){
	    this._config = config || {};

        this._quantityPosition      = (config.quantity === "beginning") ? "beginning" : "end";
        this._acknowledgedMode      = ["hide", "end"].includes(config.acknowledged) ? config.acknowledged : "show";
        this._chipClick             = (config.chip_click === "dblclick") ? "dblclick" : "click";
        this._showQuantitySelection = (config.show_quantity_box === false) ? false : true;
        this._showSubmitButton      = (config.show_submit_button === false) ? false : true;
        this._showInputMask         = (config.show_input_mask === false) ? false : true;
        this._subText               = (config.sub_text === undefined) ? "Tipp: Nutze die Chips, um Artikel erneut hinzuzufügen." : config.sub_text;
        this._showQuantityOne       = (config.show_quantity_one === true) ? true : false;
        this._allowLocalChips       = (config.local_chips === false) ? false : true;
        this._chipPosition          = ["bottom", "right", "full", "auto"].includes(config.chips_position) ? config.chips_position : "auto";
        this._chipWidth             = this._chipPosition === "full" && typeof config.chips_width === "number" ? `${config.chips_width}px` : "250px";
        this._listFontSize          = config.list_font_size || 14; // Standard: 14px
        this._chipFontSize          = config.chip_font_size || 12; // Standard: 12px
        this._chipColor             = config.chip_color || "rgba(100,100,100,0.3)"; // Standardfarbe
        this._chipColorDefault      = config.chip_color_default || "rgba(100,100,255,0.3)";
        this._chipMergeMode         = ["combined", "standard_first", "browser_first"].includes(config.chip_merge) ? config.chip_merge : "combined";
        this._highlightColor        = config.highlight_color || "#D9534F";

        if (typeof config.highlight_words === "string") {
            this._highlightWords = config.highlight_words.split(/\s*[,;]\s*/).filter(c => c);
        } else if (Array.isArray(config.highlight_words)) {
            this._highlightWords = config.highlight_words;
        } else {
            this._highlightWords = [];
        }

        if (Array.isArray(config.chips)) {
            this._defaultChips = config.chips;
        } else if (typeof config.chips === "string") {
            this._defaultChips = config.chips.split(/\s*[,;]\s*/).filter(c => c);
        } else {
            this._defaultChips = [];
        }
    }

    // Provide default configuration when a new card is added.
    static getStubConfig() {
        return {
            chips_position: "auto",
            quantity: "end",
            acknowledged: "show",
            chip_click: "single",
            sub_text: "Tipp: Nutze die Chips, um Artikel erneut hinzuzufügen.",
            chip_merge: "combined"
        };
    }

    // Editor Configuration
    static getConfigForm() {
    return {
        schema: [
            { 
                name: "chips_position", 
                selector: { 
                select: { 
                    options: [
                    { value: "auto", label: "Automatisch (abhängig von Bildschirmgröße)" },
                    { value: "bottom", label: "Immer unten" },
                    { value: "right", label: "Immer rechts" },
                    { value: "full", label: "Rechts, mehrspaltig (nur Panel-Mode)" }
                    ] 
                } 
                }, 
                default: "auto"
            },
            {
                name: "chips_width",
                selector: { number: { min: 100, max: 800, step: 10 } },
                default: 300
            },
            { 
                name: "chip_click", 
                selector: { 
                select: { 
                    options: [
                    { value: "single", label: "Klick" },
                    { value: "dblclick", label: "Doppelklick" }
                    ]
                } 
                }, 
                default: "single"
            },
            {
                name: "chip_merge",
                selector: {
                    select: {
                        options: [
                            { value: "combined", label: "Standard und Browser-Chips kombinieren (Standard)" },
                            { value: "standard_first", label: "Standard-Chips zuerst" },
                            { value: "browser_first", label: "Browser-Chips zuerst" }
                        ]
                    }
                },
                default: "combined"
            },
            { name: "chips", selector: { text: {} }, default: "" },
            { name: "highlight_words", selector: { text: {} }, default: "" },

            { name: "list_font_size", selector: { number: { min: 8, max: 30, step: 1 } }, default: 14},
            { name: "chip_font_size", selector: { number: { min: 8, max: 30, step: 1 } }, default: 12},
            {
                name: "chip_color",
                selector: { text: {} },
                default: "rgba(100,100,100,0.3)"
            },
            {
                name: "chip_color_default",
                selector: { text: {} },
                default: "rgba(100,100,255,0.3)"  
            },
            {
                name: "highlight_color",
                selector: { text: {} },
                default: "red"
            },
            { 
                name: "quantity", 
                selector: { 
                select: { 
                    options: [
                    { value: "beginning", label: "Anzahl vorne z.B. '10x Butter'" },
                    { value: "end", label: "Anzahl hinten z.B. 'Butter (10)'" }
                    ]
                } 
                }, 
                default: "end"
            },
            { 
                name: "acknowledged", 
                selector: { 
                select: { 
                    options: [
                    { value: "show", label: "Erledigte Artikel anzeigen" },
                    { value: "hide", label: "Erledigte Artikel ausblenden" },
                    { value: "end", label: "Erledigte Artikel am Ende anzeigen" }
                    ]
                } 
                }, 
                default: "show"
            },
            { name: "local_chips", selector: { boolean: {} }, default: true },
            { name: "show_quantity_box", selector: { boolean: {} }, default: true },
            { name: "show_submit_button", selector: { boolean: {} }, default: true },
            { name: "show_input_mask", selector: { boolean: {} }, default: true },
            { name: "show_quantity_one", selector: { boolean: {} }, default: false },
            { name: "sub_text", selector: { text: {} }, default: " "}
            ],

            computeLabel: (schema) => {
                switch (schema.name) {
                    case "highlight_words": return "Hervorgehobene Wörter";
                    case "highlight_color": return "Farbe für Hervorhebung";

			        case "chip_merge": return this.localize("editor.labels.chip_merge");
			        case "local_chips": return this.localize("editor.labels.local_chips");
			        case "chip_font_size": return this.localize("editor.labels.chip_font_size");
			        case "chip_color": return this.localize("editor.labels.chip_color");
			        case "chip_color_default": return this.localize("editor.labels.chip_color_default");
			        case "highlight_words": return this.localize("editor.labels.highlight_words");

                    case "list_font_size": return "Schriftgröße der Listeneinträge (px)";
                    case "chips_width": return "Breite der Chips (nur bei 'full')";
                    case "chips_position": return "Position der Chips";
                    case "quantity": return "Position der Artikelanzahl";
                    case "acknowledged": return "Erledigte Artikel";
                    case "chip_click": return "Verhalten beim Klick auf einen Chip";
                    case "show_quantity_box": return "Anzahlfeld anzeigen";
                    case "show_submit_button": return "Hinzufügen-Button anzeigen";
                    case "show_input_mask": return "Eingabe-Maske anzeigen";
                    case "show_quantity_one": return "Anzahl 1 anzeigen";
                    case "sub_text": return "Hinweistext unter der Eingabe";
                    case "chips": return "Standard-Chips (Komma oder Semikolon getrennt)";
                }
                return undefined;
            },

            computeHelper: (schema) => {
                switch (schema.name) {
                    case "highlight_words": return "Liste von Wörtern, die in Chips farblich (Hintergrund) hervorgehoben werden sollen. Kann als Komma oder Semikolon-Liste eingegeben werden, z.B. 'Butter,Bananen,Mehl'.";
                    case "highlight_color": return "Hex- oder rgba-Farbcode für die hervorgehobenen Wörter. Beispiel: '#D9534F', 'rgba(255,0,0,0.5)', 'red'.";
                    case "chip_merge": return "Legt fest, wie Standard- und Browser-Chips zusammen angezeigt werden.";
                    case "list_font_size": return "Legt die Schriftgröße für die Artikel in der Liste fest. Standard: 14px.";
                    case "chip_font_size": return "Legt die Schriftgröße der Schnell-Auswahl-Chips fest. Standard: 12px.";
                    case "chip_color": return "Hex- oder rgba-Farbcode eingeben, z. B. ‘#2196f3’, '#6464644D' oder ‘rgba(100,100,100,0.3)’";
                    case "chip_color_default": return "Hex- oder rgba-Farbcode eingeben, z. B. ‘#2196f3’, '#6464644D' oder ‘rgba(100,100,255,0.3)’";
                    case "local_chips": return "Lokale Chips werden nur im Browser gespeichert und sind nicht auf anderen Geräten verfügbar. Desweiteren verschwinden sie, wenn der Browsercache gelöscht wird.";
                    case "chips_width": return "Breite der Chip-Box in Pixeln. Wirkt nur, wenn 'chips_position' auf 'full' (Für Panel Mode / 1 Karte pro Seite) gesetzt ist.";
                    case "chips_position": return "Legt fest, wo die Chips angezeigt werden (Auto: Ist abhänging von der Bildschirmgröße. Beim Handy 'unten', bei PC und Tablet werden die Chips 'rechts' angezeigt.)";
                    case "quantity": return "Legt fest, ob die Anzahl vor ('10x Butter') oder hinter ('Butter (10)') dem Artikel steht. Dies wirkt sich nur auf neue Einträge aus.";
                    case "acknowledged": return "Steuert, wo bzw ob erledigte Artikel angezeigt werden.";
                    case "chip_click": return "Bestimmt, ob Chips (Artikel) per Klick oder Doppelklick hinzugefügt werden. Tipp: Jeder weitere Klick/Doppelklick auf einen Chip erhöht die Anzahl um 1. Standard-Chips haben zur besseren Unterscheidung einen blauen Hintergrund.";
                    case "show_quantity_box": return "Zeigt das Eingabefeld für die Anzahl (oben links) an oder nicht.";
                    case "show_submit_button": return "Zeigt den Hinzufügen-Button an oder nicht. Wenn der Button ausgeblendet ist, kann man den Artikel mit ENTER hinzufügen.";
                    case "show_input_mask": return "Zeigt die komplette Eingabe-Maske an oder nicht. So kann man z.B. die Einträge auf eine vordefinierte Liste (Chips) an Artikeln beschränken.";
                    case "show_quantity_one": return "Zeigt auch Anzahl 1 an (Sonst wird bei Anzahl 1 nur der Name vom Artikel angezeigt. Dies wirkt sich nur auf neue Einträge aus.)";
                    case "sub_text": return "Text unter dem Eingabefeld zur Erklärung oder Tipps. HTML ist erlaubt. Tipp: Trage ein Leerzeichen ein, um das Feld auszublenden.";
                    case "chips": return "Definiert Standard-Chips, z.B. 'Milch,Eier,Brot'.";
                }
                return undefined;
            },

            assertConfig: (config) => {
                if (config.other_option) {
                    throw new Error("'other_option' ist nicht erlaubt.");
                }
            }
        };
    }

    getCardSize(){
        return 3;
    }

	connectedCallback() {
        // Shadow DOM nur einmal erstellen
        if (!this._shadow) {
            this._shadow = this.attachShadow({ mode: 'open' });
        } else {
            // Bestehenden Shadow DOM leeren, damit beim Hot-Reload neu gerendert wird
            this._shadow.innerHTML = '';
        }

        // Items & History initialisieren
        this._items = [];
        this._previous = this._loadHistory();

        // Skeleton rendern (HTML + Styles)
        this._renderSkeleton();
        this._refresh();

        // Event-Listener für externe Updates
        this._eventListener = (e) => {
            if (e.detail && e.detail.action) this._refresh();
        };

	    window.addEventListener('shopping_list_updated', this._eventListener);

        // HA Events abonnieren
        if (this._hass?.connection?.subscribeEvents) {
            this._hass.connection.subscribeEvents(() => this._refresh(), "shopping_list_updated");
        }
	}

    disconnectedCallback() {
        window.removeEventListener('shopping_list_updated', this._eventListener);
    }

    _renderSkeleton() {
        const style = document.createElement('style');
        // _chipPosition = "auto" | "bottom" | "right"
        const containerClass = `list-history-container ${this._chipPosition}`;


        style.textContent = `
            :host { font-family: var(--font-family, Roboto, Noto, sans-serif); display:block; }
            .card { background: var(--card-background-color, var(--ha-card-background, #1c1c1c)); color: var(--primary-text-color); padding: 12px; border-radius: 8px; box-shadow: var(--ha-card-box-shadow); }
            .input-row { display:flex; gap:8px; align-items:center; margin-bottom:8px; }
            input[type="text"]{ flex:1; padding:8px; border-radius:4px; border:1px solid var(--divider-color);} 
            select { padding:6px; border-radius:4px; }
            .quantityselect { padding:8px; border-radius:4px; border:1px solid var(--divider-color); width:40px; }
            button { padding:6px 10px; border-radius:6px; border:none; cursor:pointer; }
            button.primary{ background: var(--primary-color); color: white; }
            ul { list-style:none; padding:0; margin:0; }
            li { display:flex; align-items:center; justify-content:space-between; padding:8px; border-radius:6px; margin-bottom:6px; }
            li.done .name { text-decoration: line-through; opacity:0.6; }
            li.green { background: rgba(76,175,80,0.12); }
            .left { display:flex; gap:8px; align-items:center; flex:1 }
            .name { font-size: ${this._listFontSize}px; }
            .actions { display:flex; gap:6px; }
            .chip {
                background: ${this._chipColor};
                color: var(--primary-text-color);
                padding: 6px 8px;
                border-radius: 999px;
                cursor: pointer;
                transition: background 0.3s;
                text-align: center;
                font-size: ${this._chipFontSize}px;
            }
            .chip:hover {
                background: var(--primary-color);
                color: var(--text-primary-color, #fff);
            }
            .small { font-size:12px; }
            .hidden {display: none;}

            .list-history-container {
                display: flex;
                gap: 12px;
                flex-direction: column; /* default: Chips unten */
            }

            #list {
                flex: 1;
                overflow-y: auto;
            }

            /* Default: horizontal fließend unten */
            .history {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                overflow-y: auto;
            }

            /* Auto: Chips rechts bei großen Screens */
            @media (min-width: 700px) {
                .list-history-container.auto {
                flex-direction: row;
                align-items: flex-start;
                }
                .list-history-container.auto .history {
                flex-direction: column;
                overflow-y: auto;
                margin-top: 0;
                flex-wrap: nowrap;
                }
            }

            /* Right: Immer rechts (untereinander) */
            .list-history-container.right {
                flex-direction: row;
                align-items: flex-start;
            }
            .list-history-container.right .history {
                flex-direction: column;
                overflow-y: auto;
                margin-top: 0;
                flex-wrap: nowrap;
            }

            /* Bottom: Immer unten */
            .list-history-container.bottom {
                flex-direction: column;
            }

            /* Full: Immer rechts, mehrspaltig */
            .list-history-container.full {
                flex-direction: row;
                align-items: flex-start;
            }
            .list-history-container.full .history {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap; /* Zeilenumbruch */
                align-content: flex-start;
                gap: 6px;
                margin-top: 0;
                overflow-y: auto;
                width: var(--chips-width, ${this._chipWidth});
            }
        `;

        this._shadow.innerHTML = `
            <div class="card">
                <div class="input-row ${this._showInputMask ? '' : 'hidden'}">
                    ${this._showQuantitySelection
                    ?   `
                        <input list="quantityOptions" class="quantityselect" id="quantitySelect" placeholder="Anzahl">
                        <datalist id="quantityOptions">
                            <option value="1"><option value="2"><option value="3"><option value="4"><option value="5">
                            <option value="6"><option value="7"><option value="8"><option value="9"><option value="10">
                            <option value="15"><option value="20">
                        </datalist>
                        `
                    :   `
                        <input type="hidden" id="quantitySelect" value="1">
                        `
                    }
                    <input id="itemInput" type="text" placeholder="Artikel..." autocomplete="off">
                    <button id="addBtn" class="primary ${this._showSubmitButton ? '' : 'hidden'}">Hinzufügen</button>
                </div>

                <div class="small">
                    ${ this._subText }
                </div>

                <div class="${containerClass}">
                    <ul id="list"></ul>
                    <div class="history" id="history"></div>
                </div>

                <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                    <button id="clearBtn">Erledigte löschen</button>
                </div>
            </div>
        `;

        this._shadow.appendChild(style);

        this._shadow.getElementById('addBtn').addEventListener('click', this._onAdd);
        this._shadow.getElementById('itemInput').addEventListener('keydown', (e)=>{ if (e.key === 'Enter') this._onAdd(); });
        this._shadow.getElementById('clearBtn').addEventListener('click', this._clearCompleted);

        this._listEl = this._shadow.getElementById('list');
        this._historyEl = this._shadow.getElementById('history');
        this._inputEl = this._shadow.getElementById('itemInput');
        this._qtyEl = this._shadow.getElementById('quantitySelect');

        this._renderHistory();
    }

    async _refresh() {
        try {
            const res = await this._hass.callApi("GET", "shopping_list");
            const items = Array.isArray(res) ? res : [];

            this._items = items.map(i => ({
                name: (i.name || "").trim(),
                complete: !!i.complete,
                id: i.id
            }));

            // Sortierung: alphabetisch nach Name, Menge ignorieren
            this._items.sort((a, b) => {
                let nameA = a.name;
                let nameB = b.name;

                if (this._quantityPosition === "beginning") {
                    nameA = nameA.replace(/^(\d+)×\s*/, '');
                    nameB = nameB.replace(/^(\d+)×\s*/, '');
                } else {
                    nameA = nameA.replace(/\s*\(\d+\)$/, '');
                    nameB = nameB.replace(/\s*\(\d+\)$/, '');
                }

                return nameA.toLowerCase().localeCompare(nameB.toLowerCase(), undefined, { sensitivity: 'base' });
            });

            console.debug("[DEBUG] Geladene Items:", this._items.map(i => i.name));
            
            // acknowledged-Logik
            if (this._acknowledgedMode === "hide") {
                this._items = this._items.filter(i => !i.complete);
            } else if (this._acknowledgedMode === "end") {
                const done = this._items.filter(i => i.complete);
                const notDone = this._items.filter(i => !i.complete);
                this._items = [...notDone, ...done];
            }     
            
            this._renderList();
        } catch (err) {
            console.error("ShoppingList: konnte Items nicht laden via API", err);
        }
    }

    _renderList() {
        this._listEl.innerHTML = '';
        if (!this._items.length) {
            this._listEl.innerHTML = '<li class="small">Keine Einträge</li>';
            return;
        }

        // acknowledged-Filter
        let itemsToRender = [...this._items];
        const ack = this._config?.acknowledged;
        if (ack === 'hide') {
            itemsToRender = itemsToRender.filter(i => !i.complete);
        } else if (ack === 'end') {
            itemsToRender.sort((a, b) => {
                if (a.complete && !b.complete) return 1;
                if (!a.complete && b.complete) return -1;
                return 0;
            });
        }

        itemsToRender.forEach(item => {
            const li = document.createElement('li');
            li.dataset.name = item.name;
            if (item.complete) li.classList.add('done', 'green');

            const left = document.createElement('div');
            left.className = 'left';

            // Erledigt Checkbox / Haken
            const completeBtn = document.createElement('button');
            completeBtn.innerHTML = item.complete ? '\u2714' : '\u2610';
            completeBtn.title = 'Markieren als erledigt';
            completeBtn.style.cursor = 'pointer';
            completeBtn.style.border = 'none';
            completeBtn.style.background = 'transparent';
            completeBtn.style.fontSize = '16px';
            completeBtn.style.marginRight = '8px';
            completeBtn.addEventListener('click', async () => { await this._toggleComplete(item); });

            const nameSpan = document.createElement('div');
            nameSpan.className = 'name';
            nameSpan.textContent = item.name;

            // Bearbeiten-Funktion
            nameSpan.addEventListener('dblclick', () => {
                if (item.complete) return;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = item.name;
                input.style.flex = '1';
                input.style.fontSize = '14px';
                input.style.padding = '2px 4px';
                nameSpan.replaceWith(input);
                input.focus();

                const cancelEdit = () => { input.replaceWith(nameSpan); };

                input.addEventListener('keydown', async (e) => {
                    if (e.key === 'Escape') cancelEdit();
                    else if (e.key === 'Enter') await saveEdit();
                });

                input.addEventListener('blur', async () => { await saveEdit(); });

                const saveEdit = async () => {
                    const newValue = input.value.trim();
                    if (!newValue || newValue === item.name) { cancelEdit(); return; }

                    const matchQty = item.name.match(/^(\d+)×\s*/) || item.name.match(/\((\d+)\)$/);
                    let quantity = 1;
                    if (matchQty) quantity = parseInt(matchQty[1], 10);

                    const baseName = newValue.replace(/^(\d+)×\s*/, '').replace(/\s*\(\d+\)$/, '').trim();
                    const formatted = (this._quantityPosition === 'beginning' && quantity > 1)
                    ? `${quantity}× ${baseName}`
                    : (quantity > 1 ? `${baseName} (${quantity})` : baseName);

                    try {
                        await this._hass.callService('shopping_list', 'remove_item', { name: item.name });
                        await this._hass.callService('shopping_list', 'add_item', { name: formatted });
                        await this._refresh();
                    } catch (err) {
                        console.error('Bearbeiten fehlgeschlagen:', err);
                    }
                };
            });

            left.appendChild(completeBtn);
            left.appendChild(nameSpan);

            // Aktionen: Plus und Minus (evtl. Mülleimer)
            const actions = document.createElement('div');
            actions.className = 'actions';

            const plusBtn = document.createElement('button');
            plusBtn.innerHTML = '+';
            plusBtn.title = 'Menge erhöhen';
            plusBtn.style.border = 'none';
            plusBtn.style.background = 'transparent';
            plusBtn.style.cursor = 'pointer';
            plusBtn.style.fontSize = '18px';
            plusBtn.style.marginLeft = '8px';
            plusBtn.addEventListener('click', async () => {
                if (plusBtn._processing) return;   // Klick ignorieren, wenn gerade busy
                plusBtn._processing = true;

                // Anzahl vorne oder hinten entfernen und Anzahl ermitteln
                let nameOnly = item.name.replace(/^(\d+)×\s*/, '').replace(/\s*\(\d+\)$/, '').trim();
                let currentQty = 1;
                const match = item.name.match(/^(\d+)×\s*/) || item.name.match(/\((\d+)\)$/);
                if (match) currentQty = parseInt(match[1], 10);

                // Neue Anzahl (alt +1)
                const newQty = currentQty + 1;
                const formatted = (this._quantityPosition === "beginning")
                    ? `${newQty}× ${nameOnly}`
                    : `${nameOnly} (${newQty})`;

                try {
                    await this._hass.callService('shopping_list', 'remove_item', { name: item.name });
                    await this._hass.callService('shopping_list', 'add_item', { name: formatted });
                    await this._refresh();
                } catch (err) {
                    console.error('Fehler beim Erhöhen der Menge:', err);
                }

                plusBtn._processing = false;
            });

            const minusBtn = document.createElement('button');
            minusBtn.innerHTML = '−';
            minusBtn.title = 'Menge verringern oder löschen';
            minusBtn.style.border = 'none';
            minusBtn.style.background = 'transparent';
            minusBtn.style.cursor = 'pointer';
            minusBtn.style.fontSize = '18px';
            minusBtn.style.marginLeft = '4px';
            minusBtn.addEventListener('click', async () => {
                if (minusBtn._processing) return;
                minusBtn._processing = true;

                // Anzahl vorne oder hinten entfernen und Anzahl ermitteln
                let nameOnly = item.name.replace(/^(\d+)×\s*/, '').replace(/\s*\(\d+\)$/, '').trim();
                let currentQty = 1;
                const match = item.name.match(/^(\d+)×\s*/) || item.name.match(/\((\d+)\)$/);
                if (match) currentQty = parseInt(match[1], 10);

                // Bereits Einträge vorhanden
                if (currentQty > 1) {
                    // Neue Anzahl (alt -1)
                    const newQty = currentQty - 1;
                    const showQty = newQty > 1 || this._showQuantityOne; // Anzahl nur anzeigen wenn >1 oder explizit erlaubt

                    let formatted;
                    if (showQty) {
                        formatted = (this._quantityPosition === 'beginning')
                        ? `${newQty}× ${nameOnly}`
                        : `${nameOnly} (${newQty})`;
                    } else {
                        formatted = nameOnly;
                    }
            
                    try {
                        await this._hass.callService('shopping_list', 'remove_item', { name: item.name });
                        await this._hass.callService('shopping_list', 'add_item', { name: formatted });
                        await this._refresh();
                    } catch (err) {
                        console.error('Fehler beim Verringern der Menge:', err);
                    }
                } else {
                    if (confirm(`'${nameOnly}' aus der Liste entfernen ?`)) {
                        try {
                            await this._hass.callService('shopping_list', 'remove_item', { name: item.name });
                            await this._refresh();
                        } catch (err) {
                            console.error('Fehler beim Löschen:', err);
                        }
                    }
                }

                minusBtn._processing = false;
            });

            actions.appendChild(plusBtn);
            actions.appendChild(minusBtn);

            li.appendChild(left);
            li.appendChild(actions);
            this._listEl.appendChild(li);
        });
    }

	async _onAdd(){
        if (this._addingBusy) {
            console.warn("[DEBUG] Klick ignoriert: noch busy (Add)");
            return;
        }
	    this._addingBusy = true;

	    try {
            let inputName = this._inputEl.value.trim();
            if (!inputName) return;
            let inputQty = parseInt(this._qtyEl.value, 10) || 1;
            const quantityPosition = this._quantityPosition; // "beginning" oder "end"

            console.debug("[DEBUG] Hinzufügen:", inputName, "Menge:", inputQty);
            console.debug("[DEBUG] Aktuelle this._items:", this._items);

            if (!Array.isArray(this._items)) this._items = [];

            // Prüfen ob Item bereits existiert
            const existing = this._items.find(i => {
                let nameClean = i.name;
                if (quantityPosition === "beginning") {
                    nameClean = nameClean.replace(/^(\d+)×\s*/, '');
                } else {
                    nameClean = nameClean.replace(/\s*\(\d+\)$/, '');
                }
                return nameClean.trim().toLowerCase() === inputName.toLowerCase();
            });

		    let finalName = inputName;

            if (existing) {
                console.debug("[DEBUG] Existierendes Item gefunden:", existing.name);

                let currentQty = 1;
                if (quantityPosition === "beginning") {
                    const match = existing.name.match(/^(\d+)×\s*/);
                    if (match) currentQty = parseInt(match[1], 10);
                } else {
                    const match = existing.name.match(/\((\d+)\)$/);
                    if (match) currentQty = parseInt(match[1], 10);
                }

                const newQty = currentQty + inputQty;

                // Menge anzeigen nur wenn >1 oder explizit erlaubt (showQuantityOne)
                const showQty = newQty > 1 || this._showQuantityOne;

                if (showQty) {
                    if (quantityPosition === "beginning") {
                        finalName = `${newQty}× ${inputName}`;
                    } else {
                        finalName = `${inputName} (${newQty})`;
                    }
                } else {
                    finalName = inputName;
                }

                // Altes Item entfernen
                try {
                    await this._hass.callService("shopping_list", "remove_item", { name: existing.name });
                    console.debug("[DEBUG] Altes Item entfernt:", existing.name);
                } catch (err) {
                    console.error("[DEBUG] Fehler beim Entfernen:", err);
                }
            } else if (inputQty > 1 || this._showQuantityOne) {
                if (quantityPosition === "beginning") {
                    finalName = `${inputQty}× ${inputName}`;
                } else {
                    finalName = `${inputName} (${inputQty})`;
                }
            }

            // Neues/aktualisiertes Item hinzufügen
            try {
                await this._hass.callService("shopping_list","add_item",{ name: finalName });
                console.debug("[DEBUG] Neues Item hinzugefügt:", finalName);
                this._addToHistory(inputName);
                this._inputEl.value = '';
                this._qtyEl.value = '';
                await this._refresh();
            } catch(err){
                console.error("[DEBUG] Fehler beim Hinzufügen:", err);
            }

        } finally {
            this._addingBusy = false;
        }
	}

    async _toggleComplete(item){
        try {
        if (item.complete){
            await this._hass.callService('shopping_list','incomplete_item',{ name: item.name });
        } else {
            await this._hass.callService('shopping_list','complete_item',{ name: item.name });
        }
        await this._refresh();
        } catch(err) { 
            console.error('Toggle complete failed', err); 
        }
    }

    async _removeItem(item){
        if (!confirm(`Item entfernen: ${item.name}?`)) return;
        try{
            await this._hass.callService('shopping_list','remove_item',{ name: item.name });
            await this._refresh();
        } catch(err) { 
            console.error('Remove failed', err); 
        }
    }

    async _clearCompleted(){
        if (!confirm('Alle als erledigt markierten Artikel löschen?')) return;
        try{
            await this._hass.callService('shopping_list','clear_completed_items',{});
            await this._refresh();
        } catch(err) { 
            console.error('Clear failed', err); 
        }
    }

	_renderHistory() {
        this._historyEl.innerHTML = '';

        const localChips = this._previous || [];
        const defaultChips = this._defaultChips || [];
        let combined = [];

        switch (this._chipMergeMode) {
            case "combined":
                combined = [...defaultChips, ...localChips.filter(c => !defaultChips.includes(c))];
                combined.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                break;

            case "standard_first":
                const sortedDefaults = [...defaultChips].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                const sortedLocal   = [...localChips].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                combined = [...sortedDefaults, ...sortedLocal.filter(c => !defaultChips.includes(c))];
                break;

            case "browser_first":
                const sortedLocalFirst = [...localChips].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                const sortedDefaultsFirst = [...defaultChips].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                combined = [...sortedLocalFirst, ...sortedDefaultsFirst.filter(c => !localChips.includes(c))];
                break;
        }

        combined.slice(0, 400).forEach(chipText => {
            const chip = document.createElement('div');
            chip.className = 'chip';
            chip.textContent = chipText;

            // Priorität der Farben: Highlight > Standard > Lokal
            if (this._highlightWords.some(word => word.toLowerCase() === chipText.toLowerCase())) {
                chip.style.background = this._highlightColor;
                chip.title = 'Hervorgehobenes Wort';
            } else if (this._defaultChips?.includes(chipText)) {
                chip.style.background = this._chipColorDefault;
                chip.title = 'Standard-Chip';
            } else {
                chip.style.background = this._chipColor;
            }

            // Klick- oder Doppelklick-Logik
            const clickEvent = this._chipClick === 'click' ? 'click' : 'dblclick';
            chip.addEventListener(clickEvent, async () => {
                if (this._addingBusy) return;

                const name = chipText.trim();
                const existingItem = this._items.find(i => {
                    const nameClean = i.name.replace(/^(\d+)×\s*/, '').replace(/\s*\(\d+\)$/, '').trim();
                    return nameClean.toLowerCase() === name.toLowerCase();
                });

                if (!existingItem) {
                    // Noch nicht vorhanden: hinzufügen
                    this._inputEl.value = name;
                    this._qtyEl.value = '';
                    await this._onAdd();
                    this._inputEl.value = ""; // Feld leeren nach Hinzufügen
                } else {
                    // Bereits vorhanden: Menge erhöhen um 1
                    let currentQty = 1;
                    const matchQty = existingItem.name.match(/^(\d+)×\s*/) || existingItem.name.match(/\((\d+)\)$/);
                    if (matchQty) currentQty = parseInt(matchQty[1], 10);

                    const newQty = currentQty + 1;
                    let formatted;
                    if (this._quantityPosition === 'beginning') {
                        formatted = `${newQty}× ${name}`;
                    } else {
                        formatted = `${name} (${newQty})`;
                    }

                    this._inputEl.value = ""; // Feld leeren nach Hinzufügen
                    this._qtyEl.value = '';

                    try {
                        this._addingBusy = true;
                        await this._hass.callService('shopping_list', 'remove_item', { name: existingItem.name });
                        await this._hass.callService('shopping_list', 'add_item', { name: formatted });
                        await this._refresh();
                    } catch (err) {
                        console.error('Fehler beim Erhöhen der Menge:', err);
                    } finally {
                        this._addingBusy = false;
                    }
                }
            });

            // Longpress zum Löschen für lokale History
            if (localChips.includes(chipText)) {
                let timer;
                chip.addEventListener('mousedown', e => { timer = setTimeout(() => this._removeHistoryItem(chipText), 2000); });
                chip.addEventListener('touchstart', e => { timer = setTimeout(() => this._removeHistoryItem(chipText), 2000); });
                chip.addEventListener('mouseup', e => { clearTimeout(timer); });
                chip.addEventListener('mouseleave', e => { clearTimeout(timer); });
                chip.addEventListener('touchend', e => { clearTimeout(timer); });
            } else {
                let timer;
                chip.addEventListener('mousedown', e => { timer = setTimeout(() => alert("Dieser Standard-Chip kann nicht gelöscht werden"), 5000); });
                chip.addEventListener('touchstart', e => { timer = setTimeout(() => alert("Dieser Standard-Chip kann nicht gelöscht werden"), 5000); });
                chip.addEventListener('mouseup', e => { clearTimeout(timer); });
                chip.addEventListener('mouseleave', e => { clearTimeout(timer); });
                chip.addEventListener('touchend', e => { clearTimeout(timer); });
            }

            this._historyEl.appendChild(chip);
        });
	}

    _removeHistoryItem(name){
        if (!confirm(`Eintrag '${name}' aus History löschen?`)) return;
        const idx = this._previous.findIndex(x=> x.toLowerCase()===name.toLowerCase());
        if (idx!==-1){ 
            this._previous.splice(idx,1); 
            this._saveHistory(); 
            this._renderHistory(); 
        }
    }
    
    // Lookaler Speicer für History
    _storageKey(){ 
        return 'ha-shopping-list-improved-history'; 
    }
    _loadHistory(){ 
        try{ 
            const raw = localStorage.getItem(this._storageKey()); 
            return raw ? JSON.parse(raw) : []; 
        } catch(e) { 
            return []; 
        } 
    }
    _saveHistory(){ 
        try{ localStorage.setItem(this._storageKey(), JSON.stringify(this._previous.slice(0,200))); }catch(e){} 
    }
    _addToHistory(name){
        name = (name || '').trim();
        if(!name) return;
        
        // Standard-Chips nicht in lokale History aufnehmen
        if (this._defaultChips?.includes(name) || !this._allowLocalChips) return;
        
        const idx = this._previous.findIndex(x=> x.toLowerCase() === name.toLowerCase());
        if(idx!==-1) this._previous.splice(idx,1);
        this._previous.unshift(name);
        this._previous = this._previous.slice(0,200);
        this._saveHistory();
        this._renderHistory();
    }
    

	// Warte dass Home Assistant das shopping_list_updated-Event feuert.
	_waitForShoppingListUpdate(timeout = 1000) {
        return new Promise((resolve) => {
            let done = false;
            const finish = () => {
                if (!done) {
                    done = true;
                    resolve();
                    window.removeEventListener("shopping_list_updated", handler);
                }
            };

            const handler = () => finish();
            window.addEventListener("shopping_list_updated", handler);

            // Fallback: nach Timeout trotzdem weiter
            setTimeout(() => finish(), timeout);
        });
	}

	render(){ if (!this._hass) return; }
}

customElements.define('ha-shopping-list-improved', HaShoppingListImproved);

window.customCards = window.customCards || [];
window.customCards.push({ 
	type: 'ha-shopping-list-improved', 
	name: 'Improved Shopping List', 
	preview: true, 
	description: 'Verbesserte Einkaufsliste mit alphabetischer Sortierung von Einträgen und History, Vorlagen zum Hinzufügen, Mengenangaben vorne oder hinten, anpassbare Chip-Position und plus/minus Buttons zur Mengenänderung.'
});

