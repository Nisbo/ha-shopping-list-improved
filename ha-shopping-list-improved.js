/*
 * Improved Shopping List Card
 * Version: 1.1.0
 * @description Improved Shopping List Card for Home Assistant.
 * @author Nisbo
 * @license MIT
  ha-shopping-list-improved.js
*/

const TRANSLATIONS = {
    de: {
        "card.description"                              : "Verbesserte Einkaufsliste mit alphabetischer Sortierung, Vorlagen zum Hinzufügen, Mengenangaben vorne oder hinten, anpassbare Chip-Position und plus/minus Buttons zur Mengenänderung.",

        "editor.placeholders.quantity"                  : "Anzahl",
        "editor.placeholders.item"                      : "Artikel...",
        "editor.labels.add_button"                      : "Hinzufügen",
        "editor.labels.clear_button"                    : "Erledigte löschen",
        "editor.labels.no_items"                        : "Keine Einträge",
        "editor.labels.confirm_remove"                  : "‘{item}’ aus der Liste entfernen ?",
        "editor.labels.complete_btn"                    : "Markieren als erledigt",
        "editor.labels.plus_btn"                        : "Menge erhöhen",
        "editor.labels.minus_btn"                       : "Menge verringern oder löschen",
        "editor.labels.confirm_remove"                  : "Item entfernen: {item}?",
        "editor.labels.confirm_clear_done"              : "Alle als erledigt markierten Artikel löschen?",
        "editor.labels.confirm_remove_history"          : "Chip '{item}' aus History löschen?",
        "editor.labels.chip_highlighted"                : "Hervorgehobener Chip",
        "editor.labels.chip_standard"                   : "Standard-Chip",
        "editor.labels.alert_cannot_delete_standard"    : "Dieser Standard-Chip kann nicht gelöscht werden",

		"editor.options.chips_position.auto"            : "Automatisch (abhängig von Bildschirmgröße)",
		"editor.options.chips_position.bottom"          : "Immer unten",
		"editor.options.chips_position.right"           : "Immer rechts",
		"editor.options.chips_position.full"            : "Rechts, mehrspaltig (nur Panel-Mode)",
		"editor.options.chip_click.single"              : "Klick",
		"editor.options.chip_click.dblclick"            : "Doppelklick",
		"editor.options.chip_merge.combined"            : "Standard und Browser-Chips kombinieren (Standard)",
		"editor.options.chip_merge.standard_first"      : "Standard-Chips zuerst",
		"editor.options.chip_merge.browser_first"       : "Browser-Chips zuerst",
		"editor.options.quantity.beginning"             : "Anzahl vorne z.B. '10x Butter'",
		"editor.options.quantity.end"                   : "Anzahl hinten z.B. 'Butter (10)'",
		"editor.options.acknowledged.show"              : "Erledigte Artikel anzeigen",
		"editor.options.acknowledged.hide"              : "Erledigte Artikel ausblenden",
		"editor.options.acknowledged.end"               : "Erledigte Artikel am Ende anzeigen",
        "editor.defaults.sub_text"                      : "Tipp: Nutze die Chips, um Artikel erneut hinzuzufügen.",
		
        "editor.labels.highlight_words"                 : "Hervorgehobene Wörter",
        "editor.labels.highlight_color"                 : "Farbe für Hervorhebung",
        "editor.labels.chip_merge"                      : "Chips kombinieren",
        "editor.labels.local_chips"                     : "Lokale Chips erlauben?",
        "editor.labels.chip_font_size"                  : "Schriftgröße der Chips (px)",
        "editor.labels.chip_color"                      : "Farbe der Lokalen (Browser) Chips",
        "editor.labels.chip_color_default"              : "Farbe der Standard Chips",
        "editor.labels.list_font_size"                  : "Schriftgröße der Listeneinträge (px)",
        "editor.labels.chips_width"                     : "Breite der Chips (nur bei 'full')",
        "editor.labels.chips_position"                  : "Position der Chips",
        "editor.labels.quantity"                        : "Position der Artikelanzahl",
        "editor.labels.acknowledged"                    : "Erledigte Artikel",
        "editor.labels.chip_click"                      : "Verhalten beim Klick auf einen Chip",
        "editor.labels.show_quantity_box"               : "Anzahlfeld anzeigen",
        "editor.labels.show_submit_button"              : "Hinzufügen-Button anzeigen",
        "editor.labels.show_input_mask"                 : "Eingabe-Maske anzeigen",
        "editor.labels.show_quantity_one"               : "Anzahl 1 anzeigen",
        "editor.labels.sub_text"                        : "Hinweistext unter der Eingabe",
        "editor.labels.chips"                           : "Standard-Chips (Komma oder Semikolon getrennt)",

		"editor.helpers.highlight_words"                : "Liste von Wörtern, die in Chips farblich (Hintergrund) hervorgehoben werden sollen. Kann als Komma oder Semikolon-Liste eingegeben werden, z.B. 'Butter,Bananen,Mehl'.",
        "editor.helpers.highlight_color"                : "Hex- oder rgba-Farbcode für die hervorgehobenen Wörter. Beispiel: '#D9534F', 'rgba(255,0,0,0.5)', 'red'.",
        "editor.helpers.chip_merge"                     : "Legt fest, wie Standard- und Browser-Chips zusammen angezeigt werden.",
        "editor.helpers.list_font_size"                 : "Legt die Schriftgröße für die Artikel in der Liste fest. Standard: 14px.",
        "editor.helpers.chip_font_size"                 : "Legt die Schriftgröße der Schnell-Auswahl-Chips fest. Standard: 12px.",
        "editor.helpers.chip_color"                     : "Hex- oder rgba-Farbcode eingeben, z. B. ‘#2196f3’, '#6464644D' oder ‘rgba(100,100,100,0.3)’",
        "editor.helpers.chip_color_default"             : "Hex- oder rgba-Farbcode eingeben, z. B. ‘#2196f3’, '#6464644D' oder ‘rgba(100,100,255,0.3)’",
        "editor.helpers.local_chips"                    : "Lokale Chips werden nur im Browser gespeichert und sind nicht auf anderen Geräten verfügbar.",
        "editor.helpers.chips_width"                    : "Breite der Chip-Box in Pixeln. Wirkt nur bei 'chips_position' = 'full'.",
        "editor.helpers.chips_position"                 : "Legt fest, wo die Chips angezeigt werden (Auto: abhängig von der Bildschirmgröße).",
        "editor.helpers.quantity"                       : "Legt fest, ob die Anzahl vor ('10x Butter') oder hinter ('Butter (10)') steht.",
        "editor.helpers.acknowledged"                   : "Steuert, ob erledigte Artikel angezeigt werden.",
        "editor.helpers.chip_click"                     : "Bestimmt, ob Chips per Klick oder Doppelklick hinzugefügt werden.",
        "editor.helpers.show_quantity_box"              : "Zeigt das Eingabefeld für die Anzahl (oben links) an.",
        "editor.helpers.show_submit_button"             : "Zeigt den Hinzufügen-Button an oder nicht.",
        "editor.helpers.show_input_mask"                : "Zeigt die komplette Eingabemaske an oder nicht.",
        "editor.helpers.show_quantity_one"              : "Zeigt auch Anzahl 1 an (sonst nur Name).",
        "editor.helpers.sub_text"                       : "Text unter dem Eingabefeld zur Erklärung oder Tipps.",
        "editor.helpers.chips"                          : "Definiert Standard-Chips, z.B. 'Milch,Eier,Brot'."
    },

    en: {
        "card.description"                              : "Improved shopping list with alphabetical sorting, templates for adding items, quantity at start or end, customizable chip position, and plus/minus buttons to adjust quantity.",

        "editor.placeholders.quantity"                  : "Quantity",
        "editor.placeholders.item"                      : "Item...",
        "editor.labels.add_button"                      : "Add",
        "editor.labels.clear_button"                    : "Clear completed",
        "editor.labels.no_items"                        : "No items",
        "editor.labels.confirm_remove"                  : "Remove ‘{item}’ from the list?",
        "editor.labels.complete_btn"                    : "Mark as done",
        "editor.labels.plus_btn"                        : "Increase quantity",
        "editor.labels.minus_btn"                       : "Decrease quantity or remove",
        "editor.labels.confirm_remove"                  : "Remove item: {item}?",
        "editor.labels.confirm_clear_done"              : "Delete all completed items?",
        "editor.labels.confirm_remove_history"          : "Delete chip '{item}' from history?",
        "editor.labels.chip_highlighted"                : "Highlighted Chip",
        "editor.labels.chip_standard"                   : "Standard chip",
        "editor.labels.alert_cannot_delete_standard"    : "This standard chip cannot be deleted",

		"editor.options.chips_position.auto"            : "Automatic (depends on screen size)",
		"editor.options.chips_position.bottom"          : "Always at bottom",
		"editor.options.chips_position.right"           : "Always at right",
		"editor.options.chips_position.full"            : "Right, multi-column (panel mode only)",
		"editor.options.chip_click.single"              : "Click",
		"editor.options.chip_click.dblclick"            : "Double-click",
		"editor.options.chip_merge.combined"            : "Combine standard and browser chips (default)",
		"editor.options.chip_merge.standard_first"      : "Standard chips first",
		"editor.options.chip_merge.browser_first"       : "Browser chips first",
		"editor.options.quantity.beginning"             : "Quantity at beginning, e.g. '10x Butter'",
		"editor.options.quantity.end"                   : "Quantity at end, e.g. 'Butter (10)'",
		"editor.options.acknowledged.show"              : "Show completed items",
		"editor.options.acknowledged.hide"              : "Hide completed items",
		"editor.options.acknowledged.end"               : "Show completed items at the end",
        "editor.defaults.sub_text"                      : "Hint: Use chips to quickly add items again.",
		
        "editor.labels.highlight_words"                 : "Highlight words",
        "editor.labels.highlight_color"                 : "Highlight color",
        "editor.labels.chip_merge"                      : "Combine chips",
        "editor.labels.local_chips"                     : "Allow local chips?",
        "editor.labels.chip_font_size"                  : "Chip font size (px)",
        "editor.labels.chip_color"                      : "Color of local (browser) chips",
        "editor.labels.chip_color_default"              : "Color of standard chips",
        "editor.labels.list_font_size"                  : "List item font size (px)",
        "editor.labels.chips_width"                     : "Chip width (only for 'full')",
        "editor.labels.chips_position"                  : "Chip position",
        "editor.labels.quantity"                        : "Position of item quantity",
        "editor.labels.acknowledged"                    : "Completed items",
        "editor.labels.chip_click"                      : "Chip click behavior",
        "editor.labels.show_quantity_box"               : "Show quantity box",
        "editor.labels.show_submit_button"              : "Show add button",
        "editor.labels.show_input_mask"                 : "Show input mask",
        "editor.labels.show_quantity_one"               : "Show quantity 1",
        "editor.labels.sub_text"                        : "Hint text below the input field",
        "editor.labels.chips"                           : "Default chips (comma or semicolon separated)",

		"editor.helpers.highlight_words"                : "List of words that should be highlighted in chips (by background). Enter as comma- or semicolon-separated list, e.g. 'Butter,Bananas,Flour'.",
		"editor.helpers.highlight_color"                : "Hex or rgba color code for highlighted words. Examples: '#D9534F', 'rgba(255,0,0,0.5)', 'red'.",
		"editor.helpers.chip_merge"                     : "Determines how standard and browser chips are combined and displayed.",
		"editor.helpers.list_font_size"                 : "Sets the font size for items in the list. Default: 14px.",
		"editor.helpers.chip_font_size"                 : "Sets the font size for the quick-selection chips. Default: 12px.",
		"editor.helpers.chip_color"                     : "Hex or rgba color code for local (browser) chips, e.g. '#2196f3' or 'rgba(100,100,100,0.3)'.",
		"editor.helpers.chip_color_default"             : "Hex or rgba color code for standard chips, e.g. '#2196f3' or 'rgba(100,100,255,0.3)'.",
		"editor.helpers.local_chips"                    : "Local chips are stored only in the browser and are not synced to other devices. They will be lost when the browser cache is cleared.",
		"editor.helpers.chips_width"                    : "Width of the chip container in pixels. Only applies when 'chips_position' is set to 'full' (Panel mode).",
		"editor.helpers.chips_position"                 : "Controls where chips are displayed (auto: bottom on phones, right on desktop/tablet, or use fixed positions).",
		"editor.helpers.quantity"                       : "Determines whether quantity is shown at the start ('10× Butter') or at the end ('Butter (10)'). Affects new entries only.",
		"editor.helpers.acknowledged"                   : "Controls how completed (checked) items are displayed: shown, hidden, or moved to the end.",
		"editor.helpers.chip_click"                     : "Determines whether chips add items on single-click or double-click. Repeated clicks increase quantity by 1.",
		"editor.helpers.show_quantity_box"              : "Shows the small quantity input box (top left) or hides it.",
		"editor.helpers.show_submit_button"             : "Shows the Add button. If hidden, press Enter to add an item.",
		"editor.helpers.show_input_mask"                : "Shows the full input mask (quantity + text + add button). Useful to restrict input to predefined chips.",
		"editor.helpers.show_quantity_one"              : "Also display quantity '1'. If disabled, quantity 1 is omitted for new items.",
		"editor.helpers.sub_text"                       : "Text shown below the input field for tips or explanations. HTML is allowed. Use a single space to hide the field.",
		"editor.helpers.chips"                          : "Defines default chips, e.g. 'Milk,Eggs,Bread'."
    }
};

const debugMode = false;

// Detect HA-Language via home-assistant element
function detectLanguage() {
    const hass = document.querySelector("home-assistant")?.hass;
    const lang = hass?.language || "en"; // Fallback to Englisch
    if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] HA language:", hass?.language, "=> used language:", lang);
    return lang;
}


// translate-Funktion 
function translate(key) {
    const lang = detectLanguage();
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) return TRANSLATIONS[lang][key];
    if (TRANSLATIONS["en"][key]) return TRANSLATIONS["en"][key]; // Fallback Englisch
    return key;
}


class HaShoppingListImproved extends HTMLElement {
    constructor(){
        super();
        this._onAdd = this._onAdd.bind(this);
        this._clearCompleted = this._clearCompleted.bind(this);
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
        this._subText               = (config.sub_text === undefined) ? translate("editor.defaults.sub_text") : config.sub_text;
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
            sub_text: translate("editor.defaults.sub_text"),
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
                            { value: "auto", label: translate("editor.options.chips_position.auto") },
                            { value: "bottom", label: translate("editor.options.chips_position.bottom") },
                            { value: "right", label: translate("editor.options.chips_position.right") },
                            { value: "full", label: translate("editor.options.chips_position.full") }
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
                            { value: "single", label: translate("editor.options.chip_click.single") },
                            { value: "dblclick", label: translate("editor.options.chip_click.dblclick") }
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
                            { value: "combined", label: translate("editor.options.chip_merge.combined") },
                            { value: "standard_first", label: translate("editor.options.chip_merge.standard_first") },
                            { value: "browser_first", label: translate("editor.options.chip_merge.browser_first") }
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
                            { value: "beginning", label: translate("editor.options.quantity.beginning") },
                            { value: "end", label: translate("editor.options.quantity.end") }
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
                            { value: "show", label: translate("editor.options.acknowledged.show") },
                            { value: "hide", label: translate("editor.options.acknowledged.hide") },
                            { value: "end", label: translate("editor.options.acknowledged.end") }
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
                return translate(`editor.labels.${schema.name}`);
            },

            computeHelper: (schema) => {
                return translate(`editor.helpers.${schema.name}`);
            },

            assertConfig: (config) => {
                if (config.other_option) {
                    throw new Error("'other_option' is not allowed.");
                }
            }
        };
    }

    getCardSize(){
        return 3;
    }

	connectedCallback() {
        // Shadow DOM - create only once
        if (!this._shadow) {
            this._shadow = this.attachShadow({ mode: 'open' });
        } else {
            // Clear Shadow DOM, to allow new rendering while hot reloading
            this._shadow.innerHTML = '';
        }

        // Items & History
        this._items = [];
        this._previous = this._loadHistory();

        // render Skeleton (HTML + Styles)
        this._renderSkeleton();
        this._refresh();

        // Event-Listener for external Updates
        this._eventListener = (e) => {
            if (e.detail && e.detail.action) this._refresh();
        };

	    window.addEventListener('shopping_list_updated', this._eventListener);

        // subscribe HA Events
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
                flex-direction: column; /* default: Chips bottom */
            }

            #list {
                flex: 1;
                overflow-y: auto;
            }

            /* Default: bottom */
            .history {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                overflow-y: auto;
            }

            /* Auto: Chips right if size > 700px */
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

            /* Right: Always right (in rows) */
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

            /* Bottom: Always bottom */
            .list-history-container.bottom {
                flex-direction: column;
            }

            /* Full: Always right (multi column) */
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
                        <input list="quantityOptions" class="quantityselect" id="quantitySelect" placeholder="${translate("editor.placeholders.quantity")}">
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
                    <input id="itemInput" type="text" placeholder="${translate("editor.placeholders.item")}" autocomplete="off">
                    <button id="addBtn" class="primary ${this._showSubmitButton ? '' : 'hidden'}">${translate("editor.labels.add_button")}</button>
                </div>

                <div class="small">
                    ${ this._subText }
                </div>

                <div class="${containerClass}">
                    <ul id="list"></ul>
                    <div class="history" id="history"></div>
                </div>

                <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                    <button id="clearBtn">${translate("editor.labels.clear_button")}</button>
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

            // Sort function: A --> Z, ignore quantity
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

            if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Loaded Items:", this._items.map(i => i.name));
            
            // acknowledged-Logic
            if (this._acknowledgedMode === "hide") {
                this._items = this._items.filter(i => !i.complete);
            } else if (this._acknowledgedMode === "end") {
                const done = this._items.filter(i => i.complete);
                const notDone = this._items.filter(i => !i.complete);
                this._items = [...notDone, ...done];
            }     
            
            this._renderList();
        } catch (err) {
            console.error("[ha-shopping-list-improved]: unable to load items via API", err);
        }
    }

    _renderList() {
        this._listEl.innerHTML = '';
        if (!this._items.length) {
            this._listEl.innerHTML = `<li class="small">${translate("editor.labels.no_items")}</li>`;
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

            // Acknowledged Checkbox / hook
            const completeBtn = document.createElement('button');
            completeBtn.innerHTML = item.complete ? '\u2714' : '\u2610';
            completeBtn.title = translate("editor.labels.complete_btn");
            completeBtn.style.cursor = 'pointer';
            completeBtn.style.border = 'none';
            completeBtn.style.background = 'transparent';
            completeBtn.style.fontSize = '16px';
            completeBtn.style.marginRight = '8px';
            completeBtn.addEventListener('click', async () => { await this._toggleComplete(item); });

            const nameSpan = document.createElement('div');
            nameSpan.className = 'name';
            nameSpan.textContent = item.name;

            // Edit-Function
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
                        console.error('[ha-shopping-list-improved] Edit failed:', err);
                    }
                };
            });

            left.appendChild(completeBtn);
            left.appendChild(nameSpan);

            // Actions: Plus or Minus
            const actions = document.createElement('div');
            actions.className = 'actions';

            const plusBtn = document.createElement('button');
            plusBtn.innerHTML = '+';
            plusBtn.title = translate("editor.labels.plus_btn");
            plusBtn.style.border = 'none';
            plusBtn.style.background = 'transparent';
            plusBtn.style.cursor = 'pointer';
            plusBtn.style.fontSize = '18px';
            plusBtn.style.marginLeft = '8px';
            plusBtn.addEventListener('click', async () => {
                if (plusBtn._processing) return;   // ignore click, if busy
                plusBtn._processing = true;

                // remove and count current quantity
                let nameOnly = item.name.replace(/^(\d+)×\s*/, '').replace(/\s*\(\d+\)$/, '').trim();
                let currentQty = 1;
                const match = item.name.match(/^(\d+)×\s*/) || item.name.match(/\((\d+)\)$/);
                if (match) currentQty = parseInt(match[1], 10);

                // new quantity (old +1)
                const newQty = currentQty + 1;
                const formatted = (this._quantityPosition === "beginning")
                    ? `${newQty}× ${nameOnly}`
                    : `${nameOnly} (${newQty})`;

                try {
                    await this._hass.callService('shopping_list', 'remove_item', { name: item.name });
                    await this._hass.callService('shopping_list', 'add_item', { name: formatted });
                    await this._refresh();
                } catch (err) {
                    console.error('[ha-shopping-list-improved] Unable to increase the quantity:', err);
                }

                plusBtn._processing = false;
            });

            const minusBtn = document.createElement('button');
            minusBtn.innerHTML = '−';
            minusBtn.title = translate("editor.labels.minus_btn");
            minusBtn.style.border = 'none';
            minusBtn.style.background = 'transparent';
            minusBtn.style.cursor = 'pointer';
            minusBtn.style.fontSize = '18px';
            minusBtn.style.marginLeft = '4px';
            minusBtn.addEventListener('click', async () => {
                if (minusBtn._processing) return;
                minusBtn._processing = true;

                // remove and count current quantity
                let nameOnly = item.name.replace(/^(\d+)×\s*/, '').replace(/\s*\(\d+\)$/, '').trim();
                let currentQty = 1;
                const match = item.name.match(/^(\d+)×\s*/) || item.name.match(/\((\d+)\)$/);
                if (match) currentQty = parseInt(match[1], 10);

                // if there are already more than 1, reduce quantity
                if (currentQty > 1) {
                    // new quantity (old -1)
                    const newQty = currentQty - 1;
                    const showQty = newQty > 1 || this._showQuantityOne; // show quantity only if >1 or if configured

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
                        console.error('[ha-shopping-list-improved] Unable to decrease quantity:', err);
                    }
                } else {
                    const msg = translate("editor.labels.confirm_remove").replace("{item}", nameOnly);
                    if (confirm(msg)) {
                        try {
                            await this._hass.callService('shopping_list', 'remove_item', { name: item.name });
                            await this._refresh();
                        } catch (err) {
                            console.error('[ha-shopping-list-improved] Unable to remove :', err);
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
            console.warn("[ha-shopping-list-improved][DEBUG] Click ignored: busy (Add)");
            return;
        }
	    this._addingBusy = true;

	    try {
            let inputName = this._inputEl.value.trim();
            if (!inputName) return;
            let inputQty = parseInt(this._qtyEl.value, 10) || 1;
            const quantityPosition = this._quantityPosition; // "beginning" or "end"

            if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Add:", inputName, "Quantity:", inputQty);
            if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Count Items: this._items:", this._items);

            if (!Array.isArray(this._items)) this._items = [];

            // check if item excists (ignore quantity in name)
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
                if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Found existing Item:", existing.name);

                let currentQty = 1;
                if (quantityPosition === "beginning") {
                    const match = existing.name.match(/^(\d+)×\s*/);
                    if (match) currentQty = parseInt(match[1], 10);
                } else {
                    const match = existing.name.match(/\((\d+)\)$/);
                    if (match) currentQty = parseInt(match[1], 10);
                }

                const newQty = currentQty + inputQty;

                // show quantity only if >1 or if configured
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

                // remove old Item
                try {
                    await this._hass.callService("shopping_list", "remove_item", { name: existing.name });
                    if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] OLd Item removed:", existing.name);
                } catch (err) {
                    console.error("[ha-shopping-list-improved] Error while removing:", err);
                }
            } else if (inputQty > 1 || this._showQuantityOne) {
                if (quantityPosition === "beginning") {
                    finalName = `${inputQty}× ${inputName}`;
                } else {
                    finalName = `${inputName} (${inputQty})`;
                }
            }

            // Add new/updated Item
            try {
                await this._hass.callService("shopping_list","add_item",{ name: finalName });
                if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] New Item added:", finalName);
                this._addToHistory(inputName);
                this._inputEl.value = '';
                this._qtyEl.value = '';
                await this._refresh();
            } catch(err){
                console.error("[ha-shopping-list-improved] Unable to add:", err);
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
            console.error('[ha-shopping-list-improved] Toggle complete failed', err); 
        }
    }

    async _removeItem(item){
        const msgRemove = translate("editor.labels.confirm_remove").replace("{item}", item.name);
        if (!confirm(msgRemove)) return;
        try{
            await this._hass.callService('shopping_list','remove_item',{ name: item.name });
            await this._refresh();
        } catch(err) { 
            console.error('[ha-shopping-list-improved] Remove failed', err); 
        }
    }

    async _clearCompleted(){
        if (!confirm(translate("editor.labels.confirm_clear_done"))) return;
        try{
            await this._hass.callService('shopping_list','clear_completed_items',{});
            await this._refresh();
        } catch(err) { 
            console.error('[ha-shopping-list-improved] Clear failed', err); 
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

            // Color Priority: Highlight > Standard > Local
            if (this._highlightWords.some(word => word.toLowerCase() === chipText.toLowerCase())) {
                chip.style.background = this._highlightColor;
                chip.title = translate("editor.labels.chip_highlighted");
            } else if (this._defaultChips?.includes(chipText)) {
                chip.style.background = this._chipColorDefault;
                chip.title = translate("editor.labels.chip_standard");
            } else {
                chip.style.background = this._chipColor;
            }

            // Click or Double-Click-Logic
            const clickEvent = this._chipClick === 'click' ? 'click' : 'dblclick';
            chip.addEventListener(clickEvent, async () => {
                if (this._addingBusy) return;

                const name = chipText.trim();
                const existingItem = this._items.find(i => {
                    const nameClean = i.name.replace(/^(\d+)×\s*/, '').replace(/\s*\(\d+\)$/, '').trim();
                    return nameClean.toLowerCase() === name.toLowerCase();
                });

                if (!existingItem) {
                    // not exists --> add new
                    this._inputEl.value = name;
                    this._qtyEl.value = '';
                    await this._onAdd();
                    this._inputEl.value = ""; // clear field after adding
                } else {
                    // exists --> increase quantity by 1
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

                    this._inputEl.value = ""; // clear field after adding
                    this._qtyEl.value = '';

                    try {
                        this._addingBusy = true;
                        await this._hass.callService('shopping_list', 'remove_item', { name: existingItem.name });
                        await this._hass.callService('shopping_list', 'add_item', { name: formatted });
                        await this._refresh();
                    } catch (err) {
                        console.error('[ha-shopping-list-improved] Error while increasing quantity:', err);
                    } finally {
                        this._addingBusy = false;
                    }
                }
            });

            // Longpress to delete local History
            if (localChips.includes(chipText)) {
                let timer;
                chip.addEventListener('mousedown', e => { timer = setTimeout(() => this._removeHistoryItem(chipText), 2000); });
                chip.addEventListener('touchstart', e => { timer = setTimeout(() => this._removeHistoryItem(chipText), 2000); });
                chip.addEventListener('mouseup', e => { clearTimeout(timer); });
                chip.addEventListener('mouseleave', e => { clearTimeout(timer); });
                chip.addEventListener('touchend', e => { clearTimeout(timer); });
            } else {
                let timer;
                chip.addEventListener('mousedown', e => { timer = setTimeout(() => alert(translate("editor.labels.alert_cannot_delete_standard")), 5000); });
                chip.addEventListener('touchstart', e => { timer = setTimeout(() => alert(translate("editor.labels.alert_cannot_delete_standard")), 5000); });
                chip.addEventListener('mouseup', e => { clearTimeout(timer); });
                chip.addEventListener('mouseleave', e => { clearTimeout(timer); });
                chip.addEventListener('touchend', e => { clearTimeout(timer); });
            }

            this._historyEl.appendChild(chip);
        });
	}

    _removeHistoryItem(name){
        const msgHistory = translate("editor.labels.confirm_remove_history").replace("{item}", name);
        if (!confirm(msgHistory)) return;
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
        
        // Dont add Standard-Chips to local History
        if (this._defaultChips?.includes(name) || !this._allowLocalChips) return;
        
        const idx = this._previous.findIndex(x=> x.toLowerCase() === name.toLowerCase());
        if(idx!==-1) this._previous.splice(idx,1);
        this._previous.unshift(name);
        this._previous = this._previous.slice(0,200);
        this._saveHistory();
        this._renderHistory();
    }
    

	// Wait that Home Assistant is firering the shopping_list_updated-Event
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

            // Fallback: after Timeout continue
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
	description: translate("card.description")
});
