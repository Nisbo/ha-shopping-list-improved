/*
 * Improved Shopping List Card
 * Version: 1.2.0
 * @description Improved Shopping List Card for Home Assistant.
 * @author Nisbo
 * @license MIT
  ha-shopping-list-improved.js
*/

const TRANSLATIONS = {
    de: {
        "card.description"                              : "Verbesserte Einkaufsliste mit alphabetischer Sortierung, Vorlagen zum Hinzufügen, Mengenangaben vorne oder hinten, anpassbare Chip-Position und plus/minus Buttons zur Mengenänderung.",
		
		"ui.common.yes"                  				: "Ja",
		"ui.common.no"                  				: "Nein",
		"ui.common.ok"                  				: "OK",
		"ui.common.cancel"                  			: "Abbrechen",
		"ui.common.edit_item"                  			: "Artikel bearbeiten",
        "ui.common.add_item"                  			: "Artikel hinzufügen",
        "ui.common.no_cat"                  			: "Keine",
		"ui.common.delete"                  			: "Löschen",
        "ui.common.sync_to_ha"                  		: "Änderungen an Home Assistant senden",
        "ui.common.sync"                  		        : "Synchronisiere...",
        "ui.common.sync_finished"                       : "Synchronisation abgeschlossen!",
        "ui.common.sync_error"                          : "Fehler bei Synchronisation:",
        "ui.common.sync_without_category"               : "Ohne Kategorie",
        "ui.common.sync_offline_list"                   : "Offline-Einkaufsliste",
        "ui.common.sync_created"                        : "erstellt am",
        "ui.common.export"                              : "HTML Export",
        "ui.common.export_pdf"                          : "PDF Export",
		"ui.common.close"                          		: "Schließen",

        "ui.todo.general"                               : "Allgemein",
        "ui.todo.hours"                                 : "Stunden",
        "ui.todo.days"                                  : "Tage",
        "ui.todo.months"                                : "Monate",
        "ui.todo.due_every"                             : "Fälligkeit alle:",
        "ui.todo.next_due"                              : "Nächste Fälligkeit:",
        "ui.todo.remove_due"                            : "Fälligkeitsdatum entfernen",
        "ui.todo.next_due"                              : "nächste Fälligkeit setzen",
        "ui.todo.next_due_now"                          : "nächste Fälligkeit ab jetzt setzen",
        "ui.todo.edit"                                  : "Eintrag bearbeiten",
        "ui.todo.delete"                                : "Eintrag löschen",
        "ui.todo.interval_once"                         : "Einmalig",
        "ui.todo.due_label"                             : "Fällig",
        "ui.todo.select_action"                         : "Wähle eine Aktion für diesen Eintrag:",
        "ui.todo.list.year"                             : "Jahr",
        "ui.todo.list.years"                            : "Jahre",
        "ui.todo.list.month"                            : "Monat",
        "ui.todo.list.months"                           : "Monate",
        "ui.todo.list.day"                              : "Tag",
        "ui.todo.list.days"                             : "Tage",
        "ui.todo.list.hour"                             : "Stunde",
        "ui.todo.list.hours"                            : "Stunden",
        "ui.todo.list.minute"                           : "Minute",
        "ui.todo.list.minutes"                          : "Minuten",
        "ui.labels.alert_item_exists_todo"              : "Der Artikel '{item}' existiert bereits in der To-Do-Liste.", 
		
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
		"editor.labels.chip_global"						: "Globaler Chip",
        "editor.labels.alert_cannot_delete_standard"    : "Dieser Standard-Chip kann nicht gelöscht werden",
		"editor.labels.alert_no_valid_ean"    			: "Keine gültige EAN oder Produkt gefunden!",
		"editor.labels.categories"                   	: "Kategorien",
        "editor.labels.show_cat_count"                  : "Artikelanzahl in Kategorien anzeigen ?",
        "editor.labels.show_cat_popup"                  : "PopUp für Kategorien anzeigen ?",
		"editor.labels.category_merge_mode" 			: "Kategorie-Merge-Modus",
		"editor.labels.dishes" 							: "Gerichte",
        "editor.labels.mode"                            : "Modus",
        
		"editor.options.chips_position.auto"            : "Automatisch Rechts / Unten (abhängig von Bildschirmgröße)",
		"editor.options.chips_position.auto_panel"      : "Automatisch Panel / Unten (abhängig von Bildschirmgröße)",
		"editor.options.chips_position.bottom"          : "Immer unten",
		"editor.options.chips_position.right"           : "Immer rechts",
		"editor.options.chips_position.full"            : "Rechts, mehrspaltig (nur Panel-Mode)",
		"editor.options.chip_click.single"              : "Klick",
		"editor.options.chip_click.dblclick"            : "Doppelklick",
		"editor.options.chip_merge.combined"            : "Standard und Browser-Chips kombinieren (Standard)",
		"editor.options.chip_merge.standard_first"      : "Standard-Chips zuerst, dann Browser-Chips",
		"editor.options.chip_merge.browser_first"       : "Browser-Chips zuerst, dann Standard-Chips",
        "editor.options.chip_merge.global_only"         : "Nur globale Chips (aus Textdatei",
        "editor.options.chip_merge.global_combined"     : "Alle Chips kombiniert (Globale, Standard, Browser)",
		"editor.options.quantity.beginning"             : "Anzahl vorne z.B. '10x Butter'",
		"editor.options.quantity.end"                   : "Anzahl hinten z.B. 'Butter (10)'",
		"editor.options.acknowledged.show"              : "Erledigte Artikel anzeigen",
		"editor.options.acknowledged.hide"              : "Erledigte Artikel ausblenden",
		"editor.options.acknowledged.end"               : "Erledigte Artikel am Ende der Kategorie anzeigen",
        "editor.defaults.sub_text"                      : "Tipp: Nutze die Chips, um Artikel erneut hinzuzufügen.",
		"editor.options.category_merge.standard_only"   : "Nur lokale Kategorien (Standard)",
		"editor.options.category_merge.global_only"     : "Nur globale Kategorien (aus Textdatei)",
		"editor.options.category_merge.local_first"     : "Lokale Kategorien zuerst, dann globale",
		"editor.options.category_merge.global_first"    : "Globale Kategorien zuerst, dann lokale",
		"editor.options.category_merge.global_combined" : "Alle Kategorien kombiniert und alphabetisch sortiert",
        "editor.options.mode.shopping"                  : "Einkaufsliste",
        "editor.options.mode.todo"                      : "To-Do-Liste",
		
        "editor.labels.entity"                          : "To-Do-Liste",
        "editor.helpers.mode"                           : "Legt fest, wie die Liste verwendet wird. Im Modus „Einkaufsliste“ stehen erweiterte Funktionen zur originalen Einkaufsliste zur Verfügung, jedoch ohne Fälligkeiten. Im Modus „To-Do-Liste“ können zusätzlich Fälligkeitsdaten gesetzt und verwaltet werden, die Bedienung unterscheidet sich dabei leicht. Hinweis: Die originale Home Assistant Einkaufsliste mit der Entität 'Einkaufsliste' unterstützt keine Fälligkeiten. Zusätzlich gibt es im To-Do-Modus keine Anzahleingabe, keine Plus- und Minus-Buttons, keine Export-Buttons sowie keinen Button, um erledigte Einträge zu löschen.",
        "editor.labels.highlight_words"                 : "Hervorgehobene Wörter",
        "editor.labels.highlight_color"                 : "Farbe für Hervorhebung",
        "editor.labels.chip_merge"                      : "Chips kombinieren",
        "editor.labels.local_chips"                     : "Lokale Chips erlauben?",
        "editor.labels.chip_font_size"                  : "Schriftgröße der Chips (px)",
        "editor.labels.chip_color"                      : "Farbe der Lokalen (Browser) Chips",
		"editor.labels.chip_color_global"               : "Farbe der Globalen (Textdatei) Chips",
        "editor.labels.chip_color_default"              : "Farbe der Standard Chips",
		"editor.labels.chip_color_dish"              	: "Farbe der Chips für Gerichte",
        "editor.labels.list_font_size"                  : "Schriftgröße der Listeneinträge (px)",
		"editor.labels.cat_font_size"                   : "Schriftgröße der Kategorien (px)",
        "editor.labels.chips_width"                     : "Breite der Chips im '(Auto) Panel Mode'",
        "editor.labels.chips_position"                  : "Position der Chips",
        "editor.labels.quantity"                        : "Position der Artikelanzahl",
        "editor.labels.acknowledged"                    : "Erledigte Artikel",
        "editor.labels.chip_click"                      : "Verhalten beim Klick auf einen Chip",
        "editor.labels.show_quantity_box"               : "Anzahlfeld anzeigen",
        "editor.labels.show_submit_button"              : "Hinzufügen-Button anzeigen",
		"editor.labels.show_qrscan_button"    			: "QR-Scanner-Button anzeigen (nur mit https)",
        "editor.labels.show_export_button_pdf"          : "PDF Export-Button anzeigen",
        "editor.labels.show_export_button"              : "HTML Export-Button anzeigen",
        "editor.labels.show_input_mask"                 : "Eingabe-Maske anzeigen",
		"editor.labels.show_plus_minus"                 : "Plus / Minus Buttons anzeigen (Nur im Modus 'Einkaufsliste')",
        "editor.labels.show_quantity_one"               : "Anzahl 1 anzeigen",
        "editor.labels.sub_text"                        : "Hinweistext unter der Eingabe",
        "editor.labels.chips"                           : "Standard-Chips (Komma oder Semikolon getrennt)",
        "editor.labels.longlived_token"                 : "Langlebiger Zugriffstoken (für den Zugriff via Export-Datei)",
        "editor.labels.external_url"                    : "(Externe) URL von Home Assistant (für den Zugriff via Export-Datei)",
        "editor.labels.bubble_card"                     : "Bubble PopUp Card - Mode",
        "editor.labels.chip_file"                       : "Path zur Textdatei mit den Globalen Chips",
		"editor.labels.category_file"                   : "Path zur Textdatei mit den Globalen Kategorien",

        "editor.helpers.entity"                         : "Wenn keine To-Do-Liste ausgewählt wurde, wird automatisch die Standard-Einkaufsliste von Home Assistant verwendet.",
		"editor.helpers.highlight_words"                : "Liste von Wörtern, die in Chips farblich (Hintergrund) hervorgehoben werden sollen. Kann als Komma oder Semikolon-Liste eingegeben werden, z.B. 'Butter,Bananen,Mehl'.",
        "editor.helpers.highlight_color"                : "Hex- oder rgba-Farbcode für die hervorgehobenen Wörter. Beispiel: '#D9534F', 'rgba(255,0,0,0.5)', 'red'.",
        "editor.helpers.chip_merge"                     : "Legt fest, wie Globale-, Standard- und Browser-Chips zusammen angezeigt werden.",
        "editor.helpers.list_font_size"                 : "Legt die Schriftgröße für die Artikel in der Liste fest. Standard: 14px.",
		"editor.helpers.cat_font_size"                  : "Legt die Schriftgröße für die Kategorien in der Liste fest. STandard: 16px.",
        "editor.helpers.chip_font_size"                 : "Legt die Schriftgröße der Schnell-Auswahl-Chips fest. Standard: 12px.",
        "editor.helpers.chip_color"                     : "Hex- oder rgba-Farbcode eingeben, z. B. ‘#2196f3’, '#6464644D' oder ‘rgba(100,100,100,0.3)’",
		"editor.helpers.chip_color_global"              : "Hex- oder rgba-Farbcode eingeben, z. B. ‘#2196f3’, '#6464644D' oder ‘rgba(100,100,100,0.3)’",
        "editor.helpers.chip_color_default"             : "Hex- oder rgba-Farbcode eingeben, z. B. ‘#2196f3’, '#6464644D' oder ‘rgba(100,100,255,0.3)’",
		"editor.helpers.chip_color_dish"             	: "Hex- oder rgba-Farbcode eingeben, z. B. ‘#745E3D’, '#6464644D' oder ‘rgba(100,100,255,0.3)’",
        "editor.helpers.local_chips"                    : "Lokale Chips werden nur im Browser gespeichert und sind nicht auf anderen Geräten verfügbar.",
        "editor.helpers.chips_width"                    : "Breite der Chip-Box in Pixeln. Nur für '(Auto) Panel Mode'.",
        "editor.helpers.chips_position"                 : "Legt fest, wo die Chips angezeigt werden (Auto: abhängig von der Bildschirmgröße).",
        "editor.helpers.quantity"                       : "Legt fest, ob die Anzahl vor ('10x Butter') oder hinter ('Butter (10)') steht.",
        "editor.helpers.acknowledged"                   : "Steuert, ob erledigte Artikel angezeigt werden.",
        "editor.helpers.chip_click"                     : "Bestimmt, ob Chips per Klick oder Doppelklick hinzugefügt werden.",
        "editor.helpers.show_quantity_box"              : "Zeigt das Eingabefeld für die Anzahl (oben links) an.",
        "editor.helpers.show_submit_button"             : "Zeigt den Hinzufügen-Button an oder nicht.",
		"editor.helpers.show_qrscan_button"   			: "Zeigt den QR-Scanner-Button an. Damit können ein oder mehrere Artikel gleichzeitig per QR-Code gescannt werden. Bei mehreren Artikeln müssen diese jeweils in einer neuen Zeile stehen. Mengenangaben können in Klammern angegeben werden, z. B. 'Bananen (6)'. Funktioniert nur, wenn man über https:// auf Home Assistant zugreift.",
        "editor.helpers.show_export_button_pdf"         : "Zeigt den PDF Export-Button unten an. Mit der PDF-Export-Funktion kannst du die aktuelle Einkaufsliste als PDF-Datei herunterladen und offline verwenden.",
        "editor.helpers.show_export_button"             : "Zeigt den HTML Export-Button unten an. Mit der HTML-Export-Funktion kannst du die aktuelle Einkaufsliste als HTML-Datei herunterladen und offline verwenden.",
        "editor.helpers.show_input_mask"                : "Zeigt die komplette Eingabemaske an oder nicht.",
		"editor.helpers.show_plus_minus"                : "Zeigt die Plus / Minus Buttons zum Erhöhen oder Verringern der Anzahl an oder nicht. Im Modus 'To-Do-Liste' sind diese Buttons nicht verfügbar.",
        "editor.helpers.show_quantity_one"              : "Zeigt auch Anzahl 1 an (sonst nur Name).",
        "editor.helpers.sub_text"                       : "Text unter dem Eingabefeld zur Erklärung oder Tipps.",
        "editor.helpers.chips"                          : "Definiert Standard-Chips, z.B. 'Milch,Eier,Brot'.",
        "editor.helpers.chip_file"                      : "Beispiel: /local/chips.txt, wenn die Datei im www-Ordner liegt. Pro Zeile muss ein Chip eingetragen werden.",
        "editor.helpers.category_file"                  : "Beispiel: /local/categories.txt, wenn die Datei im www-Ordner liegt. Für den Aufbau der Datei, bitte in die Dokumentation gucken.",
		"editor.helpers.category_merge_mode"			: "Wähle, wie globale und lokale Kategorien zusammengeführt werden sollen. „Standard_only“ zeigt nur die lokal definierten Kategorien, „global_only“ nur die globalen Kategorien. Die anderen Optionen kombinieren beide auf verschiedene Weise.",
        "editor.helpers.bubble_card"                    : "Aktiviere diese Option, wenn Du die Karte in der Bubble PopUp Card verwenden möchtest. In der Bubble Card müssen `background_update: true` und `close_by_clicking_outside: false` gesetzt sein, damit die Karte korrekt funktioniert.",
        "editor.helpers.show_cat_count"                 : "Wenn diese Option aktiviert ist, wird die Anzahl der Artikel in jeder Kategorie neben dem Kategorienamen angezeigt. Im ToDo Modus wird die Anzahl ivertiert angezeigt. Die Anzahl vor dem '/' umfasst somit nur die noch nicht fälligen Einträge. (Beispiel: 3/5 bedeutet, dass von 5 Einträgen 3 noch nicht fällig sind.) So kann man z.B. bei (5/5) einfach sehen, dass aktuell keine Einträge zu erledigen sind.",
        "editor.helpers.show_cat_popup"                 : "Wenn diese Option aktiviert ist, erscheint beim Hinzufügen eines neuen Artikels ein Pop-up, in dem man eine Kategorie auswählen kann.",
        "editor.helpers.longlived_token"                : "Ein Zugriffstoken zur dauerhaften Authentifizierung bei Home Assistant. Er kann im Benutzerprofil unter ‚Sicherheit → Langlebige Zugriffstoken‘ erstellt werden. Achtung: Behandle diesen Token vertraulich, da er vollen Zugriff auf dein System ermöglicht. Beachte außerdem, dass er bei Verwendung von HTTP statt HTTPS unverschlüsselt übertragen wird und somit unsicher ist.",
        "editor.helpers.external_url"                   : "Die (externe) URL deiner Home Assistant-Installation (z. B. 'https://mein-ha.duckdns.org:8123'). Wird benötigt, wenn du die Export-Funktion verwendest, um später die Artikel mit Home Assistant synchronisieren zu können. Wenn du hier keine URL angibst, wird die URL verwendet, über die das Dashboard beim Export aufgerufen wird.",
		"editor.helpers.categories"                     : "Mit Kategorien kannst du Artikel automatisch gruppieren. Jede Kategorie beginnt mit - name: <Kategoriename> und enthält darunter eine Liste von Stichwörtern unter items. Beispiel: - name: Obst items: - Erdbeeren - Pflaumen - Birnen - Bananen. Optional kann jede Kategorie ein icon (z.B. mdi:apple) und eine Hintergrundfarbe bgcolor (z.B. #247645) haben. Jeder Artikel, der eines der Stichwörter enthält, wird automatisch dieser Kategorie zugeordnet. Beim Erstellen einer neuen Karte wird eine Standardvorlage hinzugefügt, an der man sich orientieren kann.",
		"editor.helpers.dishes"							: "Mit Gerichte kannst du mehrere Artikel auf einmal hinzufügen. Jedes Gericht beginnt mit - name: <Gericht> und enthält darunter eine Liste von Artikeln unter items. Beispiel: - name: McDonalds items: - Cheeseburger - BigMac (2) - Pommes - Hamburger (4). Optional kann jedes Gericht eine Hintergrundfarbe (bgcolor, z. B. #247645) haben. Für mehr Informationen über den Aufbau, bitte in die Dokumentation schauen."
    },

    en: {
        "card.description"                              : "Improved shopping list with alphabetical sorting, templates for adding items, quantity at start or end, customizable chip position, and plus/minus buttons to adjust quantity.",

		"ui.common.yes"                  				: "Yes",
		"ui.common.no"                  				: "No",
		"ui.common.ok"                  				: "OK",
		"ui.common.cancel"                  			: "Cancel",
		"ui.common.edit_item"							: "Edit item",
        "ui.common.add_item"                  			: "Add item",
        "ui.common.no_cat"                  			: "none",
		"ui.common.delete"                  			: "Delete",
        "ui.common.sync_to_ha"                          : "Send changes to Home Assistant",
        "ui.common.sync"                                : "Synchronizing...",
        "ui.common.sync_finished"                       : "Synchronization completed!",
        "ui.common.sync_error"                          : "Error during synchronization:",
        "ui.common.sync_without_category"               : "Without category",
        "ui.common.sync_offline_list"                   : "Offline shopping list",
        "ui.common.sync_created"                        : "created on",
        "ui.common.export"                              : "HTML Export",
        "ui.common.export_pdf"                          : "PDF Export",
		"ui.common.close"                          		: "Close",

        "ui.todo.general"                               : "General",
        "ui.todo.hours"                                 : "Hours",
        "ui.todo.days"                                  : "Days",
        "ui.todo.months"                                : "Months",
        "ui.todo.due_every"                             : "Due every:",
        "ui.todo.next_due"                              : "Next due:",
        "ui.todo.remove_due"                            : "Remove due date",
        "ui.todo.next_due"                              : "Set next due date",
        "ui.todo.next_due_now"                          : "Set next due date from now",
        "ui.todo.edit"                                  : "Edit entry",
        "ui.todo.delete"                                : "Delete entry",
        "ui.todo.interval_once"                         : "One-time",
        "ui.todo.due_label"                             : "Due",
        "ui.todo.select_action"                         : "Select an action for this item:",
        "ui.todo.list.year"                             : "Year",
        "ui.todo.list.years"                            : "Years",
        "ui.todo.list.month"                            : "Month",
        "ui.todo.list.months"                           : "Months",
        "ui.todo.list.day"                              : "Day",
        "ui.todo.list.days"                             : "Days",
        "ui.todo.list.hour"                             : "Hour",
        "ui.todo.list.hours"                            : "Hours",
        "ui.todo.list.minute"                           : "Minute",
        "ui.todo.list.minutes"                          : "Minutes",
        "ui.labels.alert_item_exists_todo"              : "The item '{item}' already exists in the To-Do list.", 

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
		"editor.labels.chip_global"						: "Global Chip",
        "editor.labels.alert_cannot_delete_standard"    : "This standard chip cannot be deleted",
		"editor.labels.alert_no_valid_ean"    			: "No valid EAN or Product found!",
		"editor.labels.categories"                   	: "Categories",
        "editor.labels.show_cat_count"                  : "Show item count in categories ?  ",
        "editor.labels.show_cat_popup"                  : "Show Category PopUp?",
		"editor.labels.category_merge_mode" 			: "Category merge mode",
		"editor.labels.dishes" 							: "Dishes",
        "editor.labels.mode"                            : "Mode",

		"editor.options.chips_position.auto"            : "Automatic Right / Bottom (depends on screen size)",
		"editor.options.chips_position.auto_panel"      : "Automatic Panel / Bottom (depends on screen size)",
		"editor.options.chips_position.bottom"          : "Always at bottom",
		"editor.options.chips_position.right"           : "Always at right",
		"editor.options.chips_position.full"            : "Right, multi-column (panel mode only)",
		"editor.options.chip_click.single"              : "Click",
		"editor.options.chip_click.dblclick"            : "Double-click",
        "editor.options.chip_merge.combined"            : "Combine standard and browser chips (default)",
        "editor.options.chip_merge.standard_first"      : "Standard chips first, then browser chips",
        "editor.options.chip_merge.browser_first"       : "Browser chips first, then standard chips",
        "editor.options.chip_merge.global_only"         : "Global chips only (from text file)",
        "editor.options.chip_merge.global_combined"     : "All chips combined (global, standard, browser)",
		"editor.options.quantity.beginning"             : "Quantity at beginning, e.g. '10x Butter'",
		"editor.options.quantity.end"                   : "Quantity at end, e.g. 'Butter (10)'",
		"editor.options.acknowledged.show"              : "Show completed items",
		"editor.options.acknowledged.hide"              : "Hide completed items",
		"editor.options.acknowledged.end"               : "Show completed items at the end of the category",
        "editor.defaults.sub_text"                      : "Hint: Use chips to quickly add items again.",
		"editor.options.category_merge.standard_only"   : "Local categories only (default)",
		"editor.options.category_merge.global_only"     : "Global categories only (from text file)",
		"editor.options.category_merge.local_first"     : "Local categories first, then global",
		"editor.options.category_merge.global_first"    : "Global categories first, then local",
		"editor.options.category_merge.global_combined" : "All categories combined and sorted alphabetically",
        "editor.options.mode.shopping"                  : "Shopping list",
        "editor.options.mode.todo"                      : "To-do list",

        "editor.labels.entity"                          : "To-Do-List",
        "editor.labels.highlight_words"                 : "Highlight words",
        "editor.labels.highlight_color"                 : "Highlight color",
        "editor.labels.chip_merge"                      : "Combine chips",
        "editor.labels.local_chips"                     : "Allow local chips?",
        "editor.labels.chip_font_size"                  : "Chip font size (px)",
        "editor.labels.chip_color"                      : "Color of local (browser) chips",
		"editor.labels.chip_color_global"               : "Color of global (text file) chips",
        "editor.labels.chip_color_default"              : "Color of standard chips",
		"editor.labels.chip_color_dish"              	: "Color of dishes chips",
        "editor.labels.list_font_size"                  : "List item font size (px)",
		"editor.labels.cat_font_size"                   : "Category font size (px)",
        "editor.labels.chips_width"                     : "Chip width - Only for '(Auto) Panel Mode'",
        "editor.labels.chips_position"                  : "Chip position",
        "editor.labels.quantity"                        : "Position of item quantity",
        "editor.labels.acknowledged"                    : "Completed items",
        "editor.labels.chip_click"                      : "Chip click behavior",
        "editor.labels.show_quantity_box"               : "Show quantity box",
        "editor.labels.show_submit_button"              : "Show add button",
		"editor.labels.show_qrscan_button"    			: "Show QR Scanner Button (only with https)",
        "editor.labels.show_export_button_pdf"          : "Show PDF Export button",
        "editor.labels.show_export_button"              : "Show HTML Export button",
        "editor.labels.show_input_mask"                 : "Show input mask",
		"editor.labels.show_plus_minus"                 : "Show Plus / Minus Buttons (Only in 'Shopping List' mode)",
        "editor.labels.show_quantity_one"               : "Show quantity 1",
        "editor.labels.sub_text"                        : "Hint text below the input field",
        "editor.labels.chips"                           : "Default chips (comma or semicolon separated)",
        "editor.labels.longlived_token"                 : "Long-Lived Access Token (for access via export file)",
        "editor.labels.external_url"                    : "(External) URL of Home Assistant (for access via export file)",
        "editor.labels.bubble_card"                     : "Bubble PopUp Card - Mode",
        "editor.labels.chip_file"                       : "Path to the text file with the global chips",
		"editor.labels.category_file"                   : "Path to the text file with the global categories",

        "editor.helpers.entity"                         : "If no To-Do list is selected, Home Assistant's default shopping list will be used automatically.",
        "editor.helpers.mode"                           : "Defines how the list is used. In 'Shopping List' mode, extended functions for the original shopping list are available, but without due dates. In 'To-Do List' mode, due dates can additionally be set and managed, with slightly different handling. Note: The original Home Assistant shopping list entity 'Shopping List' does not support due dates. In To-Do mode, there is also no quantity input, no plus or minus buttons, no export buttons, and no button to delete completed entries.",
        "editor.helpers.highlight_words"                : "List of words that should be highlighted in chips (by background). Enter as comma- or semicolon-separated list, e.g. 'Butter,Bananas,Flour'.",
		"editor.helpers.highlight_color"                : "Hex or rgba color code for highlighted words. Examples: '#D9534F', 'rgba(255,0,0,0.5)', 'red'.",
		"editor.helpers.chip_merge"                     : "Determines how global, standard and browser chips are combined and displayed.",
		"editor.helpers.list_font_size"                 : "Sets the font size for items in the list. Default: 14px.",
		"editor.helpers.cat_font_size"                  : "Sets the font size for categories in the list. Default: 16px.",
		"editor.helpers.chip_font_size"                 : "Sets the font size for the quick-selection chips. Default: 12px.",
		"editor.helpers.chip_color"                     : "Hex or rgba color code for local (browser) chips, e.g. '#2196f3' or 'rgba(100,100,100,0.3)'.",
		"editor.helpers.chip_color_global"              : "Hex or rgba color code for global (text file) chips, e.g. '#2196f3' or 'rgba(100,100,100,0.3)'.",
		"editor.helpers.chip_color_default"             : "Hex or rgba color code for standard chips, e.g. '#2196f3' or 'rgba(100,100,255,0.3)'.",
		"editor.helpers.chip_color_dish"             	: "Hex or rgba color code for dishes chips, e.g. '#745E3D' or 'rgba(100,100,255,0.3)'.",
		"editor.helpers.local_chips"                    : "Local chips are stored only in the browser and are not synced to other devices. They will be lost when the browser cache is cleared.",
		"editor.helpers.chips_width"                    : "Width of the chip container in pixels. Only applies when '(Auto) Panel Mode' is selected.",
		"editor.helpers.chips_position"                 : "Controls where chips are displayed (auto: bottom on phones, right on desktop/tablet, or use fixed positions).",
		"editor.helpers.quantity"                       : "Determines whether quantity is shown at the start ('10× Butter') or at the end ('Butter (10)'). Affects new entries only.",
		"editor.helpers.acknowledged"                   : "Controls how completed (checked) items are displayed: shown, hidden, or moved to the end.",
		"editor.helpers.chip_click"                     : "Determines whether chips add items on single-click or double-click. Repeated clicks increase quantity by 1.",
		"editor.helpers.show_quantity_box"              : "Shows the small quantity input box (top left) or hides it.",
		"editor.helpers.show_submit_button"             : "Shows the Add button. If hidden, press Enter to add an item.",
		"editor.helpers.show_qrscan_button"   			: "Displays the QR scanner button. Allows scanning one or multiple items at once via QR code. For multiple items, each item must be on a separate line. Quantities can be specified in parentheses, e.g., 'Bananas (6)'. You must access Home Assistant via a https:// connection.",
        "editor.helpers.show_export_button_pdf"         : "Shows the PDF Export button on the bottom. With the PDF-Export function, you can download the current todo list as an PDF file for offline use.",
        "editor.helpers.show_export_button"             : "Shows the HTML Export button on the bottom. With the HTML-Export function, you can download the current todo list as an HTML file for offline use.",
		"editor.helpers.show_input_mask"                : "Shows the full input mask (quantity + text + add button). Useful to restrict input to predefined chips.",
		"editor.helpers.show_plus_minus"                : "Shows the Plus / Minus Buttons to increase / decrease the quantity. (Not available in 'To-Do List' mode).",
		"editor.helpers.show_quantity_one"              : "Also display quantity '1'. If disabled, quantity 1 is omitted for new items.",
		"editor.helpers.sub_text"                       : "Text shown below the input field for tips or explanations. HTML is allowed. Use a single space to hide the field.",
		"editor.helpers.chips"                          : "Defines default chips, e.g. 'Milk,Eggs,Bread'.",
        "editor.helpers.chip_file"                      : "Example: /local/chips.txt if the file is located in the www folder. One chip per line is required.",
        "editor.helpers.category_file"                  : "Example: /local/categories.txt if the file is located in the www folder. For file format, refer to the documentation.",
        "editor.helpers.category_merge_mode"			: "Choose how global and local categories should be merged. “standard_only” shows only local categories, “global_only” only global categories. Other options combine both in different ways.",
		"editor.helpers.bubble_card"                    : "Enable this option if you want to use the card in the Bubble PopUp Card. In the Bubble Card, `background_update: true` and `close_by_clicking_outside: false` must be set for the card to function correctly.",
        "editor.helpers.show_cat_count"                 : "If this option is enabled, the number of items in each category will be displayed next to the category name. In To-Do mode, the count is shown inverted. Thus, the number before the '/' only includes the entries that are not yet due. (Example: 3/5 means that out of 5 entries, 3 are not yet due.) This way, for example, at (5/5) you can easily see that there are currently no entries to be done.",
        "editor.helpers.show_cat_popup"                 : "If this option is enabled, a pop-up will appear when adding a new item, allowing you to select a category for the item.",
        "editor.helpers.longlived_token"                : "A long-lived access token for persistent authentication with Home Assistant. It can be created in the user profile under 'Security → Long-Lived Access Tokens'. Warning: Treat this token confidentially as it grants full access to your system. Also note that if HTTP is used instead of HTTPS, the token is transmitted unencrypted and is therefore insecure.",
        "editor.helpers.external_url"                   : "The (external) URL of your Home Assistant installation (e.g. 'https://my-ha.duckdns.org:8123'). This is required if you use the export function to synchronize items later with Home Assistant. If you do not provide a URL here, the URL from which the dashboard was accessed during export will be used.",
		"editor.helpers.categories"                     : "Categories allow you to automatically group items. Each category starts with - name: <CategoryName> and contains a list of keywords under items. Example: - name: Fruits items: - Strawberries - Plums - Pears - Bananas. Optionally, each category can have an icon (e.g., mdi:apple) and a background color bgcolor (e.g., #247645). Any item that matches one of the keywords will be automatically assigned to this category. When creating a new card, a default template is added for reference.",
		"editor.helpers.dishes"							: "With dishes you can add multiple items at once. Each dish starts with - name: <Dish> and contains a list of items under 'items'. Example: - name: McDonalds items: - Cheeseburger - BigMac (2) - Fries - Hamburger (4). Each dish can optionally have a background color (bgcolor, e.g. #247645). For more information about the structure, please check the documentation."
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


// translate-Function 
function translate(key) {
    const lang = detectLanguage();
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) return TRANSLATIONS[lang][key];
    if (TRANSLATIONS["en"][key]) return TRANSLATIONS["en"][key]; // Fallback Englisch
    return key;
}


// determine the default Shopping List entity
function getDefaultShoppingListEntity(hass) {
    // Filter all todo-entities
    const todoEntities = Object.values(hass.states).filter(s => s.entity_id.startsWith("todo."));

    if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Found todo-entities:");
    todoEntities.forEach(s => {
        if(debugMode) console.debug(`  ${s.entity_id} - attributes:`, s.attributes);
    });

    // Try to find the HA standard list
    // Criteria: supported_features = 15 (bitwise - only the 4 standard functions of the original Shopping List)
    const systemList = todoEntities.find(s => s.attributes?.supported_features === 15);

    if (systemList) {
        if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Selected standard list (system):", systemList.entity_id);
        return systemList.entity_id;
    }

    // Fallback: use the first todo-entity
    const fallback = todoEntities[0]?.entity_id || null;
    if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Fallback standard list:", fallback);
    return fallback;
}


class HaShoppingListImproved extends HTMLElement {
    constructor(){
        super();
        this._onAdd = this._onAdd.bind(this);
        this._clearCompleted = this._clearCompleted.bind(this);
    }

    set hass(hass) {
        this._hass = hass;
        //this._loadGlobalChipsFromFile();
        this.render();
		this._refresh();
    }
    
	setConfig(config){
	    this._config = config || {};

        // Entity
        const entity = config.entity || getDefaultShoppingListEntity(document.querySelector("home-assistant")?.hass);
        this._entity = entity || null;
        if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Verwendete Entity:", this._entity);

        this._quantityPosition      = (config.quantity === "beginning") ? "beginning" : "end";
        this._acknowledgedMode      = ["hide", "end"].includes(config.acknowledged) ? config.acknowledged : "show";
        this._chipClick             = (config.chip_click === "dblclick") ? "dblclick" : "click";
        this._showQuantitySelection = (config.show_quantity_box === false) ? false : true;
        this._showSubmitButton      = (config.show_submit_button === false) ? false : true;
		this._showPlusMinus      	= (config.show_plus_minus === false) ? false : true;
        this._showInputMask         = (config.show_input_mask === false) ? false : true;
        this._subText               = (config.sub_text === undefined) ? translate("editor.defaults.sub_text") : config.sub_text;
        this._showQuantityOne       = (config.show_quantity_one === true) ? true : false;
        this._allowLocalChips       = (config.local_chips === false) ? false : true;
        this._chipPosition          = ["bottom", "right", "full", "auto", "auto_panel"].includes(config.chips_position) ? config.chips_position : "auto";
		this._chipWidth             = (["full", "auto_panel"].includes(this._chipPosition) && typeof config.chips_width === "number") ? `${config.chips_width}px` : "300px";
        this._listFontSize          = config.list_font_size || 14; // Standard: 14px
		this._catFontSize           = config.cat_font_size  || 16; // Standard: 16px
        this._chipFontSize          = config.chip_font_size || 12; // Standard: 12px
        this._chipColor             = config.chip_color     || "rgba(100,100,100,0.3)";
        this._chipColorDefault      = config.chip_color_default || "rgba(100,100,255,0.3)";
		this._chipGlobalColor		= config.chip_color_global || "rgba(100,100,100,0.3)";
		this._chipColorDish 		= config.chip_color_dish || "#745E3D";
        this._chipMergeMode         = ["combined", "standard_first", "browser_first", "global_combined", "global_only"].includes(config.chip_merge) ? config.chip_merge : "combined";
        this._highlightColor        = config.highlight_color || "#D9534F";
        this._showCatPopUp          = (config.show_cat_popup === false) ? false : true;
        this._showCatCount          = (config.show_cat_count === false) ? false : true;
        this._showExportButton      = (config.show_export_button === true) ? true : false;
        this._showExportButtonPdf   = (config.show_export_button_pdf === true) ? true : false;
        this._showClearButton       = (config.show_clear_button === false) ? false : true;
        this._longLivedToken        = config.longlived_token || "";
        this._externalUrl           = config.external_url || "";
        this._bubbleCardMode        = (config.bubble_card === true) ? true : false;
        this._chipFile              = config.chip_file || "";
		this._categoryFile          = config.category_file || "";
		this._categoryMergeMode		= ["standard_only", "global_only", "local_first", "global_first", "global_combined"].includes(config.category_merge_mode) ? config.category_merge_mode : "standard_only";
		this._showQrScanButton      = (config.show_qrscan_button === true) ? true : false;
		this._mode                  = (config.mode === "todo") ? "todo" : "shopping";
        this._todoYellowM           = config.todo_yellow_m || 1440; // Months. 24 hours
        this._todoYellowD           = config.todo_yellow_d || 120;  // Days     2 hours
        this._todoYellowH           = config.todo_yellow_h || 10;   // Hours   10 Minutes
        this._todoYellowS           = config.todo_yellow_s || 120;  // Date only 2 hours

        // Hide Quantity Selection, bottom buttons in To-Do Mode
        if (this._mode === "todo") {
            this._showQuantitySelection = false;
            this._showExportButton      = false;
            this._showExportButtonPdf   = false;
            this._showClearButton       = false;
        }

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
        
        // parse categories
		if (config.categories) {
			this._categories = this._parseCategories(config.categories);
		} else {
			this._categories = [];
		}
		
		// parse dishes _parseDishes(dishesArray)
		if (config.dishes) {
			this._dishes = this._parseDishes(config.dishes);
		} else {
			this._dishes = [];
		}

        // load Global Chips
        this._globalChips = [];
        this._loadGlobalChipsFromFile();
		
		// load Global Categories
		this._globalCategories = [];
        this._loadGlobalCategoriesFromFile();
    }

    // Global Chips
    async _loadGlobalChipsFromFile() {
        if (!this._chipFile || !this._chipFile.trim()) {
            if(debugMode) console.info("[ha-shopping-list-improved] No path specified for global chips, skipping load.");
            return;
        }

        try {
            const path = this._chipFile.trim() + "?" + new Date().getTime();
            const response = await fetch(path);
            if (!response.ok) throw new Error("Error loading file for global chips");
            const text = await response.text();
            this._globalChips = text
                .split(/\r?\n/)
                .map(c => c.trim())
                .filter(c => c);

            if (debugMode) console.info("[ha-shopping-list-improved] Global chips loaded:", this._globalChips);

            this._renderHistory(); // rerun to apply global chips
        } catch (err) {
            console.warn("[ha-shopping-list-improved] Unable to load global chips:", err);
        }
    }
	
	// Global Categories
	async _loadGlobalCategoriesFromFile() {
		if (!this._categoryFile || !this._categoryFile.trim()) {
			if (debugMode) console.info("[ha-shopping-list-improved] No path specified for global categories, skipping load.");
			return;
		}

		try {
			const path = this._categoryFile.trim() + "?" + new Date().getTime();
			const response = await fetch(path);
			if (!response.ok) throw new Error("Error loading file for global categories");
			const text = await response.text();

			const categories = [];
			const blocks = text.split(/\n(?=\[)/); // Split by new category section

			for (const block of blocks) {
				const nameMatch = block.match(/^\[(.+?)\]/);
				if (!nameMatch) continue;

				const name = nameMatch[1].trim();
				const iconMatch = block.match(/icon\s*=\s*(.+)/);
				const bgcolorMatch = block.match(/bgcolor\s*=\s*(.+)/);
				const itemsMatch = block.match(/items\s*=\s*(.+)/);

				const category = {
					name,
					icon: iconMatch ? iconMatch[1].trim() : "",
					bgcolor: bgcolorMatch ? bgcolorMatch[1].trim() : "",
					items: itemsMatch ? itemsMatch[1].split(/\s*,\s*/).filter(i => i) : []
				};
				categories.push(category);
			}

			this._globalCategories = categories;
			if(debugMode) console.info("[ha-shopping-list-improved] Global categories loaded:", categories);

			this._renderHistory(); // rerun if needed
		} catch (err) {
			console.warn("[ha-shopping-list-improved] Unable to load global categories:", err);
		}
	}

    // Provide default configuration when a new card is added.
    static getStubConfig() {
        return {
            entity: getDefaultShoppingListEntity(document.querySelector("home-assistant")?.hass),
            chips_position: "auto",
            quantity: "end",
            acknowledged: "show",
            mode: "shopping",
            chip_click: "single",
            sub_text: translate("editor.defaults.sub_text"),
            chip_merge: "combined",
			categories: [
							{
								name: "Category 1",
								items: ["Item A", "Item B", "Item C", "Item F"]
							},
							{
								name: "Category 2",
                                icon: "mdi:apple",
                                bgcolor: "#247645",
								items: ["Item D", "Item E"]
							}
						]
        };
    }

    // Editor Configuration
    static getConfigForm() {
    return {
        schema: [
            {
                name: "mode",
                label: translate("editor.labels.mode"),
                selector: {
                    select: {
                        mode: "dropdown",
                        options: [
                            { value: "shopping", label: translate("editor.options.mode.shopping") },
                            { value: "todo",     label: translate("editor.options.mode.todo") }
                        ]
                    }
                },
                default: "shopping"
            },
            {
                name: "entity",
                required: false,
                selector: {
                    entity: {
                        domain: ["todo"] // only entities with domain "todo"
                    }
                },
            },
            {
                name: "chips_position",
                selector: {
                    select: {
                        options: [
                            { value: "auto", label: translate("editor.options.chips_position.auto") },
							{ value: "auto_panel", label: translate("editor.options.chips_position.auto_panel") },
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
                            { value: "browser_first", label: translate("editor.options.chip_merge.browser_first") },

                            { value: "global_only", label: translate("editor.options.chip_merge.global_only") },
                            { value: "global_combined", label: translate("editor.options.chip_merge.global_combined") }
                        ]
                    }
                },
                default: "combined"
            },
            { name: "chips", selector: { text: {} }, default: "" },
            { name: "highlight_words", selector: { text: {} }, default: "" },

            {
                name: "chip_file",
                selector: { text: {} },
                default: ""
            },

			{ name: "cat_font_size",  selector: { number: { min: 8, max: 30, step: 1 } }, default: 16},
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
                name: "chip_color_global",
                selector: { text: {} },
                default: "rgba(100,100,100,0.3)"
            },
			
			{
                name: "chip_color_dish",
                selector: { text: {} },
                default: "rgba(100,100,100,0.3)"
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
			{ name: "show_qrscan_button", selector: { boolean: {} }, default: false },
            { name: "show_input_mask", selector: { boolean: {} }, default: true },
			{ name: "show_plus_minus", selector: { boolean: {} }, default: true },
            { name: "show_quantity_one", selector: { boolean: {} }, default: false },
            { name: "sub_text", selector: { text: {} }, default: " "},
            { name: "show_cat_popup", selector: { boolean: {} }, default: true },
            { name: "show_cat_count", selector: { boolean: {} }, default: true },
            {
                name: "categories",
                required: false,
                selector: {
                    object: {
                        properties: {
                            "category1": { type: "string", name: "Only a placeholder" },
                            "items1": { type: "text", name: "to let HA fall back to yaml mode" }
                        }
                    }
                }
            },
			
			{
				name: "category_merge_mode",
				label: translate("editor.labels.category_merge_mode"),
				selector: {
					select: {
						mode: "dropdown",
						options: [
							{ value: "standard_only",   label: translate("editor.options.category_merge.standard_only") },
							{ value: "global_only",     label: translate("editor.options.category_merge.global_only") },
							{ value: "local_first",     label: translate("editor.options.category_merge.local_first") },
							{ value: "global_first",    label: translate("editor.options.category_merge.global_first") },
							{ value: "global_combined", label: translate("editor.options.category_merge.global_combined") }
						]
					}
				}
			},

            {
                name: "category_file",
                selector: { text: {} },
                default: ""
            },

            {
                name: "dishes",
                required: false,
                selector: {
                    object: {
                        properties: {
                            "category1": { type: "string", name: "Only a placeholder" },
                            "items1": { type: "text", name: "to let HA fall back to yaml mode" }
                        }
                    }
                }
            },

            { name: "show_export_button_pdf", selector: { boolean: {} }, default: false },
            { name: "show_export_button", selector: { boolean: {} }, default: false },
            {
                name: "longlived_token",
                selector: { text: {} },
                default: ""
            },
            {
                name: "external_url",
                selector: { text: {} },
                default: ""
            },
            { name: "bubble_card", selector: { boolean: {} }, default: false }
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
        //this._refresh(); // moved to set hass to ensure availability of hass

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
		this._stopScan();
        window.removeEventListener('shopping_list_updated', this._eventListener);
    }

    _parseCategories(categoriesArray) {
        const categories = [];

        for (const cat of categoriesArray) {
            const name = cat.name || "(no category)";
            const items = Array.isArray(cat.items) ? cat.items : [];
            const icon = cat.icon || null;        // optional Icon
            const bgcolor = cat.bgcolor || null;  // optional bgcolor

            if(debugMode) console.log(`Category ${name}: ${items.length ? items.join(", ") : "(empty)"}, icon: ${icon}, bgcolor: ${bgcolor}`);

            categories.push({
                name,
                items,
                icon,
                bgcolor
            });
        }

        return categories;
    }
	
	_parseDishes(dishesArray) {
        const dishes = [];

        for (const dish of dishesArray) {
            const name = dish.name || "(no dish)";
            const items = Array.isArray(dish.items) ? dish.items : [];
            const bgcolor = dish.bgcolor || null;  // optional bgcolor

            if(debugMode) console.log(`Dish ${name}: ${items.length ? items.join(", ") : "(empty)"}, bgcolor: ${bgcolor}`);

            dishes.push({
                name,
                items,
                bgcolor
            });
        }

        return dishes;
    }

    _renderSkeleton() {
        if (!this._hass) return;
        const style = document.createElement('style');
        // _chipPosition = "auto" | "bottom" | "right" | "auto_panel"
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

            /* Category */
            li.category-header {
                font-weight: 700;
                opacity: 1;
                background: rgba(0, 0, 0, 0.06);
                border-left: 3px solid rgba(0, 0, 0, 0.2);
                padding-left: 8px;
                margin-top: 12px;
                margin-bottom: 6px;
                font-size: ${this._catFontSize}px;
                border-radius: 4px;
            }

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
			
			/* Auto Panel: Chips right if size > 700px, otherwise bottom */
			@media (min-width: 700px) {
				.list-history-container.auto_panel {
					flex-direction: row;
					align-items: flex-start;
				}
				.list-history-container.auto_panel .history {
							display: flex;
							flex-direction: row;
							flex-wrap: wrap;
							align-content: flex-start;
							gap: 6px;
							margin-top: 0;
							overflow-y: auto;
							width: var(--chips-width, ${this._chipWidth});
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
                flex-wrap: wrap;
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
					<ha-icon id="qrScanBtn" ${this._showQrScanButton ? '' : ' class="hidden"'}" icon="mdi:qrcode-scan" style="
						cursor: pointer;
						width: 24px;
						height: 24px;
						vertical-align: middle;
					"></ha-icon>
                </div>
                <div class="small">
                    ${ this._subText }
                </div>

                <div class="${containerClass}">
                    <ul id="list"></ul>
                    <div class="history" id="history"></div>
                </div>

                <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                    ${this._showExportButtonPdf ? `<button id="pdfBtn">${translate("ui.common.export_pdf")}</button> &#160;` : ``}
                    ${this._showExportButton ? `<button id="downloadBtn">${translate("ui.common.export")}</button> &#160;` : ``}
                    ${this._showClearButton ? `<button id="clearBtn">${translate("editor.labels.clear_button")}</button>` : ``}
                </div>
            </div>
        `;

        this._shadow.appendChild(style);

        this._shadow.getElementById('addBtn').addEventListener('click', this._onAdd);
        this._shadow.getElementById('itemInput').addEventListener('keydown', (e)=>{ if (e.key === 'Enter') this._onAdd(); });
        if (this._showClearButton)     this._shadow.getElementById('clearBtn').addEventListener('click', this._clearCompleted);
        if (this._showExportButton)    this._shadow.getElementById('downloadBtn').addEventListener('click', () => {this._exportOfflineList();});
        if (this._showExportButtonPdf) this._shadow.getElementById('pdfBtn').addEventListener('click', () => {this._exportPdfList();});
		if (this._showQrScanButton)    this._shadow.getElementById('qrScanBtn').addEventListener('click', () => this._startScan());

        this._listEl    = this._shadow.getElementById('list');
        this._historyEl = this._shadow.getElementById('history');
        this._inputEl   = this._shadow.getElementById('itemInput');
        this._qtyEl     = this._shadow.getElementById('quantitySelect');

        this._renderHistory();
		
		// Bubble Card WorkAround
        if(this._bubbleCardMode){
            requestAnimationFrame(() => {
                const card = this._shadow.querySelector('.card');
                card.style.minHeight = window.outerHeight + "px";//'520px';

                if(debugMode) console.debug("[ha-shopping-list-improved] window.outerHeight:", card.offsetHeight);
            });

            // responsive on window resize
            window.addEventListener('resize', () => {
                requestAnimationFrame(() => {
                    const card = this._shadow.querySelector('.card');
                    card.style.minHeight = window.outerHeight + "px";

                    if(debugMode) console.debug("[ha-shopping-list-improved] Resized: window.outerHeight:", window.outerHeight);
                });
            });
        }
    }

	// EAN
	async _checkEAN(text) {
        const eanRegex = /^\d{13}$/;
        if (!eanRegex.test(text)) {
            return { name: text, brands: null, imageUrl: null };
        }

        const url = `https://world.openfoodfacts.org/api/v2/product/${text}.json`;

        try {
            const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
                "User-Agent": "Home Assistant - Custom Card (Improved Shopping List v1.2.0)"
            }
            });

            if (!response.ok) {
                console.error(`HTTP error: ${response.status}`);
                return false;
            }

            const data = await response.json();

            if (data.status === 1 && data.product) {
            const p = data.product;

            const lang = detectLanguage();

            // Productname: local language -> English -> common Name
            const name =
                p[`product_name_${lang}`]?.trim() ||
                p.product_name_en?.trim() ||
                p.product_name?.trim() ||
                false;

            const brands = p.brands?.trim() || false;
            let imageUrl = p.image_front_thumb_url || false;

            if (debugMode) console.log("[Product]", { name, brands, imageUrl });

            return { name, brands, imageUrl };
            }

            return null;

        } catch (error) {
            console.error("Error trying EAN request :", error);
            return null;
        }
	}

	// QR-Scanner
	async _onScanSuccess(decodedText, decodedResult) {
		if (this._addingBusyQR) {
			if (debugMode) console.warn("[ha-shopping-list-improved][DEBUG] Scan ignored to avoid duplicates");
			return;
		}
		
		this._stopScan();
		
		this._addingBusyQR = true;

		if (debugMode) console.log(`Scan result: ${decodedText}`, decodedResult);

		const lines = decodedText
			.split(/\r?\n/)
			.map(line => line.trim())
			.filter(line => line);

		for (const line of lines) {
			const quantity = this._getQuantity(line);
			const name = this._getNameOnly(line);

			this._inputEl.value = name;
			this._qtyEl.value = quantity;

			await this._onAdd();
		}

		this._addingBusyQR = false;
	}

	async _startScan() {
		const wrapperDivId = `qr-wrapper-${this._entity}`;
		const scannerDivId = `qr-reader-${this._entity}`;

		let wrapperDiv = document.getElementById(wrapperDivId);
		if (!wrapperDiv) {
			wrapperDiv = document.createElement("div");
			wrapperDiv.id = wrapperDivId;

			wrapperDiv.style.position = "fixed";
			wrapperDiv.style.top = "50%";
			wrapperDiv.style.left = "50%";
			wrapperDiv.style.transform = "translate(-50%, -50%)";
			wrapperDiv.style.zIndex = "9999";
			wrapperDiv.style.backgroundColor = "var(--card-background-color, #fff)";
			wrapperDiv.style.borderRadius = "12px";
			wrapperDiv.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
			wrapperDiv.style.padding = "16px";
			wrapperDiv.style.display = "flex";
			wrapperDiv.style.flexDirection = "column";
			wrapperDiv.style.alignItems = "center";
			wrapperDiv.style.maxWidth = "90vw";
			document.body.appendChild(wrapperDiv);
		}

		// Scanner-Div
		let scannerDiv = document.getElementById(scannerDivId);
		if (!scannerDiv) {
			scannerDiv = document.createElement("div");
			scannerDiv.id = scannerDivId;
			scannerDiv.style.width = "400px";
			scannerDiv.style.maxWidth = "90vw";
			wrapperDiv.appendChild(scannerDiv);
		}

		// Close-Button
		if (!document.getElementById("qr-close-btn-styles")) {
			const style = document.createElement("style");
			style.id = "qr-close-btn-styles";
			style.textContent = `
				.qr-close-btn {
				  display: inline-flex;
				  align-items: center;
				  justify-content: center;
				  padding: 0 16px;
				  height: 36px;
				  font-size: 14px;
				  font-weight: 500;
				  border-radius: 4px;
				  border: none;
				  cursor: pointer;
				  background-color: var(--primary-color, #03a9f4);
				  color: var(--primary-text-color, #fff);
				  transition: background-color 0.2s;
				  margin-top: 12px;
				}
				.qr-close-btn:hover {
				  background-color: var(--primary-color-hover, #0288d1);
				}
			`;
			document.head.appendChild(style);
		}

		// Close-Button
		let closeButton = wrapperDiv.querySelector(".qr-close-btn");
		if (!closeButton) {
			closeButton = document.createElement("button");
			closeButton.textContent = translate("ui.common.close");
			closeButton.className = "qr-close-btn";
			closeButton.onclick = () => this._stopScan();
			wrapperDiv.appendChild(closeButton);
		}

		// load Html5QrcodeScanner
		if (!window.Html5QrcodeScanner && !window._html5QrcodeLoading) {
			window._html5QrcodeLoading = true;
			await new Promise((resolve, reject) => {
				const script = document.createElement("script");
				script.src = "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js";
				script.onload = resolve;
				script.onerror = reject;
				document.head.appendChild(script);
			});
		}

		if (!window.Html5QrcodeScanner) {
			console.error("Html5QrcodeScanner class not found!");
			return;
		}

		// start QR-Scanner
		const html5QrCodeScanner = new window.Html5QrcodeScanner(scannerDivId, {fps: 10, qrbox: 250, showTorchButton: true }, false);
		html5QrCodeScanner.render(decodedText => this._onScanSuccess(decodedText));

        // wait till rendering is finished
        setTimeout(() => {
            const btn = scannerDiv.querySelector("button");
            if (btn) {
                btn.style.fontSize = "24px";
                btn.style.padding = "10px 20px";
                btn.style.borderRadius = "8px";
                btn.className = "qr-close-btn";
            }
            // Link "Scan an Image File"
            const scanFileLink = scannerDiv.querySelector("div.html5-qrcode-file-input-wrapper > label");
            if (scanFileLink) {
                scanFileLink.style.fontSize = "20px";
                scanFileLink.style.fontWeight = "bold";
            }
            
            const scanFileSpan = document.getElementById("html5-qrcode-anchor-scan-type-change");
            if (scanFileSpan) {
                scanFileSpan.style.fontSize = "20px";
                scanFileSpan.style.fontWeight = "bold"; 
                scanFileSpan.className = "qr-close-btn";
                scanFileSpan.style.textDecoration = "none";
                scanFileSpan.style.display = "inline-flex";
                scanFileSpan.style.alignItems = "center"; 
                scanFileSpan.style.justifyContent = "center";
                scanFileSpan.style.height = "36px";
                scanFileSpan.style.padding = "0 16px";
            }
        }, 100);

        // Observer to monitor changes ion the DOM to detect changes in the buttons
        const observer = new MutationObserver(() => {
            const scanFileSpan = document.getElementById("html5-qrcode-anchor-scan-type-change");
            if (scanFileSpan) {
                // if "display: none" dont change to avaoid didplaying an displayed element
                const currentDisplay = getComputedStyle(scanFileSpan).display;
                if (currentDisplay !== "none") {
                    scanFileSpan.style.fontSize = "20px";
                    scanFileSpan.style.fontWeight = "bold";
                    scanFileSpan.style.textDecoration = "none";
                    scanFileSpan.style.display = "inline-flex";
                    scanFileSpan.style.alignItems = "center";
                    scanFileSpan.style.justifyContent = "center";
                    scanFileSpan.style.height = "36px";
                    scanFileSpan.style.padding = "0 16px";
                    scanFileSpan.className = "qr-close-btn";
                }
            }

            // html5-qrcode-button-camera-start
            const cameraStart = document.getElementById("html5-qrcode-button-camera-start");
            if (cameraStart) {
                const currentDisplay = getComputedStyle(cameraStart).display;
                if (currentDisplay !== "none") {
                    cameraStart.style.fontSize = "20px";
                    //cameraStart.style.fontWeight = "bold";
                    cameraStart.style.textDecoration = "none";
                    cameraStart.style.display = "inline-flex";
                    cameraStart.style.alignItems = "center";
                    cameraStart.style.justifyContent = "center";
                    cameraStart.style.height = "36px";
                    cameraStart.style.padding = "0 16px";
                    cameraStart.className = "qr-close-btn";
                }
            }	
            
            const btn = scannerDiv.querySelector("button");
            if (btn) {
                // html5-qrcode-anchor-scan-type-change
                btn.style.fontSize = "24px";
                btn.style.padding = "10px 20px";
                btn.style.borderRadius = "8px";
                btn.className = "qr-close-btn";
                
                //btn.style.display = "inline-flex";
                btn.style.alignItems = "center";
                btn.style.justifyContent = "center";
            }
        });

        // start observer for Scanner-Container
        observer.observe(scannerDiv, { childList: true, subtree: true });

		this._html5QrCodeScanner = html5QrCodeScanner;
		this._scannerDiv = scannerDiv;
		this._wrapperDiv = wrapperDiv;
	}

	_stopScan() {
		if (this._html5QrCodeScanner) {
			this._html5QrCodeScanner.clear()
				.then(() => {
					if (debugMode) console.log("QR-Scanner stopped.");
				})
				.catch(err => {
					console.error("Error while stopping Html5QrcodeScanner:", err);
				})
				.finally(() => {
					if (this._wrapperDiv) {
						this._wrapperDiv.remove();
						this._wrapperDiv = null;
					}
					this._scannerDiv = null;
					this._html5QrCodeScanner = null;
				});
		}
	}

    async _refresh() {
		if (!this._hass) return;

        try {
            /*
            const res = await this._hass.callApi("GET", "shopping_list");
            const items = Array.isArray(res) ? res : [];

            this._items = items.map(i => ({
                name: (i.name || "").trim(),
                complete: !!i.complete,
                id: i.id
            }));
            */

            const msg = {
                type: "call_service",
                domain: "todo",
                service: "get_items",
                target: { entity_id: this._entity },
                id: Date.now(),
                return_response: true
            };

            const wsResponse = await this._hass.connection.sendMessagePromise(msg);

            if (debugMode) console.debug("[ha-shopping-list-improved] Raw WS response:", wsResponse);

            const entityData = wsResponse.response?.[this._entity];

            if (!entityData || !Array.isArray(entityData.items)) {
                console.warn("[ha-shopping-list-improved] No valid todo items found in entity:", this._entity);
                this._items = [];
                this._renderList();
                return;
            }

            if (debugMode) console.debug("[ha-shopping-list-improved] Extracted todo items:", entityData.items);

            this._items = entityData.items.map(item => ({
                name: (item.summary || "").trim(),
                complete: item.status === "completed",
                id: item.uid,
                due: item.due || null
            }));

			// Sort function: A --> Z, ignore quantity and category
			this._items.sort((a, b) => {
				const nameA = this._getNameOnly(a.name);
				const nameB = this._getNameOnly(b.name);

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
        if (!this._hass) return;
        if (!this._listEl) return;

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

        // Articles without category
        const uncategorized = itemsToRender.filter(i => {
            const nameOnly = this._getNameOnly(i.name);
            const categoryFromName = this._getCategory(i.name);

            // Explizit @none@ as uncategorized
            if (categoryFromName && categoryFromName.toLowerCase() === 'none') return true;

            // Category in name found -> not uncategorized
            if (categoryFromName) return false;

            // Check if in any category config
            return !this._categories.some(c => 
                c.items.some(catItem => catItem.toLowerCase() === nameOnly.toLowerCase())
            );
        });
        /*
                if (uncategorized.length) {
                    uncategorized.forEach(item => this._renderItem(item, this._listEl));
                }
        */

        if (uncategorized.length) {
            const total = uncategorized.length;
            let done;

            if (this._mode === "todo") {
                const now = new Date();
                done = uncategorized.filter(i => {
                    if (!i.due) return true;
                    const dueDate = new Date(i.due);
                    return dueDate >= now;
                }).length;
            } else {
                done = uncategorized.filter(i => i.complete).length;
            }

            const storageKey = `${this._entity}_category_no_category`;
            const collapsed = localStorage.getItem(storageKey) === 'true';

            const liCat = document.createElement('li');
            liCat.classList.add('category-header');
            liCat.style.padding = '4px 8px';
            liCat.style.borderRadius = '4px';
            //liCat.style.backgroundColor = '#eee';
            liCat.style.cursor = 'pointer';
            liCat.style.userSelect = 'none';

            const container = document.createElement('div');
            container.style.display = 'inline-flex';
            container.style.alignItems = 'center';
            container.style.gap = '6px';

            const catIcon = "mdi:folder-question";
            if (catIcon) {
                const iconEl = document.createElement('ha-icon');
                iconEl.setAttribute('icon', catIcon);
                iconEl.style.width = `${this._catFontSize}px`;
                iconEl.style.height = `${this._catFontSize}px`;
                iconEl.style.display = 'inline-flex';
                iconEl.style.alignItems = 'center';
                iconEl.style.justifyContent = 'center';
                iconEl.style.flexShrink = '0';
                container.appendChild(iconEl);
            }

            const textEl = document.createElement('span');
            if (this._showCatCount) {
                textEl.textContent = `${translate("ui.todo.general")} (${done}/${total})`;
            } else {
                textEl.textContent = translate("ui.todo.general");
            }

            container.appendChild(textEl);

            if (this._mode === "todo" && done < total) {
                const warningEl = document.createElement('span');
                warningEl.textContent = ' \u26A0';
                container.appendChild(warningEl);
            }

            liCat.appendChild(container);
            this._listEl.appendChild(liCat);

            const itemsContainer = document.createElement('div');
            itemsContainer.style.margin = '4px 0 12px 0';
            itemsContainer.style.display = collapsed ? 'none' : 'block';

            uncategorized.forEach(item => this._renderItem(item, itemsContainer));
            this._listEl.appendChild(itemsContainer);

            liCat.addEventListener('click', () => {
                const isCollapsed = itemsContainer.style.display === 'none';
                itemsContainer.style.display = isCollapsed ? 'block' : 'none';
                localStorage.setItem(storageKey, isCollapsed ? 'false' : 'true');
            });
        }

        // Articles with category
        this._categories.forEach(cat => {
            const catItems = itemsToRender.filter(i => {
                const nameOnly = this._getNameOnly(i.name);
                const explicitCategory = this._getCategory(i.name);

                if (explicitCategory) {
                    return explicitCategory.toLowerCase() === cat.name.toLowerCase();
                }

                return cat.items.some(catItem => catItem.toLowerCase() === nameOnly.toLowerCase());
            });

            if (catItems.length) {
                const total = catItems.length;
                let done;

                if (this._mode === "todo") {
                    const now = new Date();
                    done = catItems.filter(i => {
                        if (!i.due) return true; // Items without due are considered done
                        const dueDate = new Date(i.due);
                        return dueDate >= now;
                    }).length;
                } else {
                    done = catItems.filter(i => i.complete).length;
                }

                const storageKey = `${this._entity}_category_${cat.name}`;
                const collapsed = localStorage.getItem(storageKey) === 'true';

                const liCat = document.createElement('li');
                liCat.classList.add('category-header');
                liCat.style.padding = '4px 8px';
                liCat.style.borderRadius = '4px';
                if (cat.bgcolor) liCat.style.backgroundColor = cat.bgcolor;
                liCat.style.cursor = 'pointer';
                liCat.style.userSelect = 'none';

                const container = document.createElement('div');
                container.style.display = 'inline-flex';
                container.style.alignItems = 'center';
                container.style.gap = '6px';

                if (cat.icon) {
                    const iconEl = document.createElement('ha-icon');
                    iconEl.setAttribute('icon', cat.icon);
                    iconEl.style.width = `${this._catFontSize}px`;
                    iconEl.style.height = `${this._catFontSize}px`;
                    iconEl.style.display = 'inline-flex';
                    iconEl.style.alignItems = 'center';
                    iconEl.style.justifyContent = 'center';
                    iconEl.style.flexShrink = '0';
                    container.appendChild(iconEl);
                }

                const textEl = document.createElement('span');
                if (this._showCatCount) {
                    if (this._mode === "todo") {
                        textEl.textContent = `${cat.name} (${done}/${total})`;
                    } else {
                        textEl.textContent = `${cat.name} (${done}/${total})`;
                    }
                } else {
                    textEl.textContent = cat.name;
                }
                container.appendChild(textEl);

                // Show icon if done < total in todo mode
                if (this._mode === "todo" && done < total) {
                    const warningEl = document.createElement('span');
                    warningEl.textContent = ' \u26A0';
                    container.appendChild(warningEl);
                }

                liCat.appendChild(container);
                this._listEl.appendChild(liCat);

                const itemsContainer = document.createElement('div');
                itemsContainer.style.margin = '4px 0 12px 0';
                itemsContainer.style.display = collapsed ? 'none' : 'block';

                catItems.forEach(item => this._renderItem(item, itemsContainer, cat));
                this._listEl.appendChild(itemsContainer);

                liCat.addEventListener('click', () => {
                    const isCollapsed = itemsContainer.style.display === 'none';
                    itemsContainer.style.display = isCollapsed ? 'block' : 'none';
                    localStorage.setItem(storageKey, isCollapsed ? 'false' : 'true');
                });
            }
        });
    }

    // Extract category, e.g. "@Obst@ 2× Apfel" -> "Obst"
    _getCategory(name) {
        const match = name.match(/^@(.+?)@\s*/);
        return match ? match[1] : null;
    }

    // Extract Quantity, e.g. "@Obst@ 2× Apfel" -> 2, "Apfel (3)" -> 3
    _getQuantity(name) {
        const nameWithoutCat = name.replace(/^@.+?@\s*/, '');
        const match = nameWithoutCat.match(/^(\d+)×\s*/) || nameWithoutCat.match(/\((\d+)\)$/);
        return match ? parseInt(match[1], 10) : 1;
    }

    // Extract the name without category and quantity
    _getNameOnly(name) {
        let n = name.replace(/^@.+?@\s*/, '');       // Category
        n = n.replace(/^(\d+)×\s*/, '');             // Quantity beginning
        n = n.replace(/\s*\(\d+\)$/, '');            // Quantity end
        n = n.replace(/\s*\{\{.*?\}\}\s*$/, '');     // Intervall {{…}}
        return n.trim();
    }

    // Intervall (e. g. "23D" from {{23D}})
    _getInterval(name) {
        const match = name.match(/\{\{\s*(\d+\s*[HDM])\s*\}\}/);
        return match ? match[1].trim() : null;
    }

    // Remove only Intervall {{…}}
    _removeInterval(name) {
        return name.replace(/\s*\{\{.*?\}\}\s*$/, '').trim();
    }

    // Edit PopUp for adding/editing items with category selection
    async editItemPopup(item, mode = "edit", imageUrl = false) {
        let currentName;
        let due;

        // check if item is object or string
        if (item && typeof item === 'object' && !Array.isArray(item)) {
            currentName = item.name || '';
            due = item.due || null;
        } else if (typeof item === 'string') {
            currentName = item;
        } else {
            currentName = '';
        }

        return new Promise((resolve) => {
            let currentCategory = null;
            let nameOnly = currentName;

            // 1. Check if an explicit category is present in the name
            const extractedCategory = this._getCategory(currentName);
            if (extractedCategory) {
                currentCategory = extractedCategory;
                nameOnly = this._getNameOnly(currentName);
            }

            // 2. If no explicit category, check if the item is assigned to a config category
            if (!currentCategory) {
                const normalizedName = this._getNameOnly(nameOnly).toLowerCase();

                for (const cat of this._categories) {
                    const match = cat.items.some(catItem => {
                        const normalizedItem = this._getNameOnly(catItem).toLowerCase();
                        return normalizedItem === normalizedName;
                    });

                    if (match) {
                        currentCategory = cat.name;
                        break;
                    }
                }
            }

            // 3. If still no category, set to "none"
            if (!currentCategory) {
                currentCategory = "none";
            }

            // Overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.4)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';
            overlay.style.pointerEvents = 'auto';

            // Popup
            const popup = document.createElement('div');
            popup.style.background = 'var(--card-background-color, white)';
            popup.style.padding = '16px';
            popup.style.borderRadius = '8px';
            popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            popup.style.maxWidth = '320px';
            popup.style.width = '90%';
            popup.style.textAlign = 'center';
            popup.style.fontFamily = 'var(--ha-card-font-family, Roboto, sans-serif)';
            popup.style.color = 'var(--primary-text-color, black)';
            popup.style.pointerEvents = 'auto';

            // EAN Image
            if (imageUrl) {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.style.maxWidth = '100%';
                img.style.marginBottom = '12px';
                img.style.borderRadius = '4px';
                popup.appendChild(img);
            }

            // Label
            const label = document.createElement('p');
            label.textContent = mode === "add"
                ? translate("ui.common.add_item")
                : translate("ui.common.edit_item");
            label.style.marginBottom = '8px';

            // Generate DisplayName with Quantity
            const qty = this._getQuantity(currentName);

            let displayName = this._getNameOnly(currentName);
            if (qty > 1 || this._showQuantityOne) {
                displayName = this._quantityPosition === "beginning"
                    ? `${qty}× ${displayName}`
                    : `${displayName} (${qty})`;
            }

            // Input
            const input = document.createElement('ha-textfield');
            input.type = 'input';
            input.value = displayName;
            input.style.width = '100%';
            input.style.padding = '6px 8px';
            input.style.marginBottom = '12px';
            input.style.border = '1px solid var(--divider-color, #ccc)';
            input.style.borderRadius = '4px';
            input.style.fontSize = '14px';
            input.style.boxSizing = 'border-box';

            // Category-Chips
            const catContainer = document.createElement('div');
            catContainer.style.display = 'flex';
            catContainer.style.flexWrap = 'wrap';
            catContainer.style.gap = '8px';
            catContainer.style.marginBottom = '12px';

            let selectedCategory = currentCategory;

            function createStyledChip(label, isSelected, bgColor, icon, onClick) {
                // Wrapper for Chip + Underline
                const chipWrapper = document.createElement('div');
                chipWrapper.style.display = 'flex';
                chipWrapper.style.flexDirection = 'column';
                chipWrapper.style.alignItems = 'center';
                chipWrapper.style.cursor = 'pointer';

                // Chip
                const chip = document.createElement('div');
                chip.style.display = 'inline-flex';
                chip.style.alignItems = 'center';
                chip.style.justifyContent = 'center';
                chip.style.padding = '4px 10px';
                chip.style.borderRadius = '16px';
                chip.style.fontSize = '13px';
                chip.style.border = '1px solid var(--divider-color, #ccc)';
                chip.style.background = bgColor || 'var(--secondary-background-color)';
                chip.style.color = 'var(--primary-text-color)';
                chip.style.gap = '6px';
                chip.style.lineHeight = '1.2';
                chip.style.minHeight = '24px';
                chip.style.boxSizing = 'border-box';

                // Icon
                if (icon) {
                    const iconEl = document.createElement('ha-icon');
                    iconEl.setAttribute('icon', icon);
                    iconEl.style.width = '14px';
                    iconEl.style.height = '14px';
                    iconEl.style.display = 'inline-flex';
                    iconEl.style.alignItems = 'center';
                    iconEl.style.justifyContent = 'center';
                    iconEl.style.flexShrink = '0';
                    chip.appendChild(iconEl);
                }

                // Text
                const textEl = document.createElement('span');
                textEl.textContent = label;
                chip.appendChild(textEl);

                // "deeper" selected" Chip
                if (isSelected) {
                    chip.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.4)';
                    chip.style.transform = 'translateY(1px)';
                    chip.style.color = 'white';
                }

                // Unterlinie
                const underline = document.createElement('div');
                underline.className = 'chip-underline';
                underline.style.height = '1px';
                underline.style.width = '80%';
                underline.style.marginTop = '5px';
                underline.style.background = isSelected ? (bgColor || 'var(--primary-color)') : 'transparent';
                underline.style.borderRadius = '2px';

                chipWrapper.appendChild(chip);
                chipWrapper.appendChild(underline);

                // Click handler
                chipWrapper.addEventListener('click', () => onClick(chipWrapper));

                chipWrapper._chip = chip;
                chipWrapper._underline = underline;

                return chipWrapper;
            }

            // No Category Chip
            const noCatChipWrapper = createStyledChip(
                translate("ui.common.no_cat"),
                selectedCategory === "none",
                'var(--secondary-background-color)',
                null,
                (wrapperEl) => {
                    selectedCategory = "none";

                    // reset all chips
                    Array.from(catContainer.children).forEach(c => {
                        c._chip.style.background = c._chip.dataset.bgcolor || 'var(--secondary-background-color)';
                        c._chip.style.boxShadow = 'none';
                        c._chip.style.transform = 'translateY(0)';
                        c._chip.style.color = 'var(--primary-text-color)';
                        c._underline.style.background = 'transparent';
                    });

                    // select current no category chip
                    wrapperEl._chip.style.background = 'var(--secondary-background-color)';
                    wrapperEl._chip.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.4)';
                    wrapperEl._chip.style.transform = 'translateY(1px)';
                    wrapperEl._chip.style.color = 'white';
                    wrapperEl._underline.style.background = 'var(--secondary-background-color)';
                }
            );

            noCatChipWrapper._chip.dataset.bgcolor = 'var(--secondary-background-color)';
            catContainer.appendChild(noCatChipWrapper);

            // Category Chips from Config
            const sortByName = false; // true = sort ABC, false = sort original order

            (this._categories || [])
                .slice()
                .sort((a, b) => {
                    if (!sortByName) return 0; // no sort
                    return a.name.localeCompare(b.name, 'de', { sensitivity: 'base' });
                })
                .forEach(cat => {
                    const chipWrapper = createStyledChip(
                        cat.name,
                        cat.name === selectedCategory,
                        cat.bgcolor,
                        cat.icon,
                        (wrapperEl) => {
                            // reset all chips
                            Array.from(catContainer.children).forEach(c => {
                                const cBg = c._chip.dataset.bgcolor || 'var(--secondary-background-color)';
                                c._chip.style.background = cBg;
                                c._chip.style.boxShadow = 'none';
                                c._chip.style.transform = 'translateY(0)';
                                c._chip.style.color = 'var(--primary-text-color)';
                                c._underline.style.background = 'transparent';
                            });

                            // select current chip
                            selectedCategory = cat.name;
                            wrapperEl._chip.style.background = cat.bgcolor || 'var(--secondary-background-color)';
                            wrapperEl._chip.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.4)';
                            wrapperEl._chip.style.transform = 'translateY(1px)';
                            wrapperEl._chip.style.color = 'white';
                            wrapperEl._underline.style.background = cat.bgcolor || 'var(--primary-color)';
                        }
                    );

                    chipWrapper._chip.dataset.bgcolor = cat.bgcolor || '';
                    catContainer.appendChild(chipWrapper);
                });

            // Buttons container
            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.alignItems = 'center';
            btnContainer.style.gap = '12px';
            btnContainer.style.width = '100%';
            btnContainer.style.marginTop = '8px';

            const leftButtons = document.createElement('div');
            leftButtons.style.display = 'flex';
            leftButtons.style.gap = '12px';
            leftButtons.style.alignItems = 'center';

            const rightArea = document.createElement('div');
            rightArea.style.display = 'flex';
            rightArea.style.alignItems = 'center';

            // OK and Cancel Buttons
            const okBtn = document.createElement('button');
            okBtn.textContent = translate("ui.common.ok");
            okBtn.style.backgroundColor = 'var(--primary-color, #03A9F4)';
            okBtn.style.color = 'white';
            okBtn.style.border = 'none';
            okBtn.style.padding = '6px 12px';
            okBtn.style.borderRadius = '4px';
            okBtn.style.cursor = 'pointer';

            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = translate("ui.common.cancel");
            cancelBtn.style.backgroundColor = 'var(--secondary-background-color, #eee)';
            cancelBtn.style.border = 'none';
            cancelBtn.style.padding = '6px 12px';
            cancelBtn.style.borderRadius = '4px';
            cancelBtn.style.cursor = 'pointer';

            leftButtons.appendChild(okBtn);
            leftButtons.appendChild(cancelBtn);

            // Delete Button only in edit mode
            if (mode === "edit") {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = translate("ui.common.delete");
                deleteBtn.style.backgroundColor = '#c62828';
                deleteBtn.style.color = 'white';
                deleteBtn.style.border = 'none';
                deleteBtn.style.padding = '6px 12px';
                deleteBtn.style.borderRadius = '4px';
                deleteBtn.style.cursor = 'pointer';

                deleteBtn.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                    resolve("__DELETE__");
                });

                btnContainer.style.justifyContent = 'space-between';
                btnContainer.appendChild(leftButtons);
                rightArea.appendChild(deleteBtn);
                btnContainer.appendChild(rightArea);
            } else {
                btnContainer.style.justifyContent = 'flex-end';
                btnContainer.appendChild(leftButtons);
            }

            // Combine all
            popup.appendChild(label);
            popup.appendChild(input);
            popup.appendChild(catContainer);
            
            // TooDo Mode
            let intervalInput;
            let intervalUnitSelect;
            let dueDateInput;
            let dueTimeInput;
            let currentInterval = this._getInterval(currentName);

            if (this._mode === "todo") {
                const container = document.createElement('div');
                container.style.display = 'flex';
                container.style.flexDirection = 'column';
                container.style.alignItems = 'flex-start';
                container.style.gap = '12px';
                container.style.marginBottom = '12px';

                // Intervall
                const intervalLabel = document.createElement('label');
                intervalLabel.textContent = translate("ui.todo.due_every");
                intervalLabel.style.fontWeight = '500';
                container.appendChild(intervalLabel);

                const intervalRow = document.createElement('div');
                intervalRow.style.display = 'flex';
                intervalRow.style.gap = '8px';
                intervalRow.style.alignItems = 'center';

                // ha-textfield
                intervalInput = document.createElement('ha-textfield');
                intervalInput.type = 'number';
                intervalInput.min = '1';
                intervalInput.value = '';
                intervalInput.style.width = '130px';
                intervalInput.setAttribute('outlined', '');

                // HA Select for interval
                intervalUnitSelect = document.createElement('ha-select');
                intervalUnitSelect.style.width = '120px';
                intervalUnitSelect.setAttribute('naturalMenuWidth', '');
                intervalUnitSelect.setAttribute('fixedMenuPosition', '');

                ['H', 'D', 'M'].forEach((unit, index) => {
                    const labels = [translate("ui.todo.hours"), translate("ui.todo.days"), translate("ui.todo.months")];
                    const option = document.createElement('mwc-list-item');
                    option.setAttribute('value', unit);
                    option.textContent = labels[index];
                    intervalUnitSelect.appendChild(option);
                });

                intervalRow.appendChild(intervalInput);
                intervalRow.appendChild(intervalUnitSelect);
                container.appendChild(intervalRow);

                // Format {{23D}} H = hours, D = Days, M = Mounths
                if (currentInterval) {
                    const match = currentInterval.match(/^(\d+)\s*([HDM])$/i);
                    if (match) {
                        const [, value, unit] = match;
                        intervalInput.value = value;
                        intervalUnitSelect.value = unit.toUpperCase();
                    }
                }

                // Date and Time Picker
                const dueDateLabel = document.createElement('label');
                dueDateLabel.textContent = translate("ui.todo.next_due");
                dueDateLabel.style.fontWeight = '500';
                container.appendChild(dueDateLabel);

                const dueRow = document.createElement('div');
                dueRow.style.display = 'flex';
                dueRow.style.gap = '8px';
                dueRow.style.alignItems = 'center';

                dueDateInput = document.createElement('input');
                dueDateInput.type = 'date';
                dueDateInput.class = 'mdc-text-field__input';
                dueDateInput.style.width = '150px';
                dueDateInput.style.height = '34px';

                dueTimeInput = document.createElement('input');
                dueTimeInput.type = 'time';
                dueTimeInput.style.width = '90px';
                dueTimeInput.style.height = '34px';

                // Format existing due date/time
                if (due) {
                    try {
                        if (due.length === 10) {
                            // only date --> Format "YYYY-MM-DD"
                            dueDateInput.value = due;
                            dueTimeInput.value = '';
                        } else {
                            const dt = new Date(due);
                            if (!isNaN(dt)) {
                                // date --> Format yyyy-MM-dd for input[type=date]
                                const yyyy = dt.getFullYear();
                                const mm = String(dt.getMonth() + 1).padStart(2, '0');
                                const dd = String(dt.getDate()).padStart(2, '0');
                                dueDateInput.value = `${yyyy}-${mm}-${dd}`;

                                // Time --> Format HH:mm for input[type=time]
                                const hh = String(dt.getHours()).padStart(2, '0');
                                const min = String(dt.getMinutes()).padStart(2, '0');

                                // if time = 00:00 --> empty time field
                                //if (hh === '00' && min === '00') {
                                //    dueTimeInput.value = '';
                                //} else {
                                //    dueTimeInput.value = `${hh}:${min}`;
                                //}

                                dueTimeInput.value = `${hh}:${min}`;
                            }
                        }
                    } catch (e) {
                        // Parsing error, use default empty values
                        dueDateInput.value = '';
                        dueTimeInput.value = '';
                    }
                }

                dueRow.appendChild(dueDateInput);
                dueRow.appendChild(dueTimeInput);
                container.appendChild(dueRow);

                popup.appendChild(container);
            }

            popup.appendChild(btnContainer);
            overlay.appendChild(popup);
            document.body.appendChild(overlay);

            // Click outside = cancel
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                    resolve(null);
                }
            });

            cancelBtn.addEventListener('click', () => {
                document.body.removeChild(overlay);
                resolve(null);
            });
            /*
            okBtn.addEventListener('click', () => {
                let finalName = input.value.trim();
                if (selectedCategory) {
                    finalName = `@${selectedCategory}@ ${finalName}`;
                }
                document.body.removeChild(overlay);
                resolve(finalName || null);
            });
            */

            okBtn.addEventListener('click', () => {
                let finalName = input.value.trim();
                if (selectedCategory) {
                    finalName = `@${selectedCategory}@ ${finalName}`;
                }

                let result = { name: finalName };

                if (this._mode === "todo") {
                    const intervalValue = intervalInput.value.trim();
                    const intervalUnit = intervalUnitSelect.value; // H, D or M

                    if (intervalValue && !isNaN(intervalValue) && intervalValue > 0 && ['H', 'D', 'M'].includes(intervalUnit)) {
                        result.name += ` {{${intervalValue}${intervalUnit}}}`;
                    }

                    const dueDateValue = dueDateInput.value;   // yyyy-mm-dd
                    const dueTimeValue = dueTimeInput.value;   // HH:MM

                    if (dueDateValue) {
                        if (dueTimeValue) {
                            result.due_datetime = `${dueDateValue} ${dueTimeValue}:00`;
                            if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] due_datetime", result.due_datetime);
                        } else {
                            result.due_date = dueDateValue;
                            if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] due_date", result.due_date);
                        }
                    } else {
                        if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] dueValue <empty>");
                    }
                }

                if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] finalName", result.name);
                document.body.removeChild(overlay);
                resolve(result);
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') okBtn.click();
                if (e.key === 'Escape') cancelBtn.click();
            });

            //input.focus();
            //input.select();
        });
    }

    _renderItem(item, parentEl) {
        const li = document.createElement('li');
        li.dataset.name = item.name;
        if (item.complete) li.classList.add('done', 'green');

        const left = document.createElement('div');
        left.className = 'left';

        // Complete Button
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = item.complete ? '\u2714' : '\u2610';
        completeBtn.title = translate("editor.labels.complete_btn");
        completeBtn.style.cursor = 'pointer';
        completeBtn.style.border = 'none';
        completeBtn.style.background = 'transparent';
        completeBtn.style.fontSize = '16px';
        completeBtn.style.marginRight = '8px';
        completeBtn.addEventListener('click', async () => { await this._toggleComplete(item); });

        // Name Span (Container)
        const nameSpan = document.createElement('div');
        nameSpan.className = 'name';

        const nameOnly = this._getNameOnly(item.name);
        const qty = this._getQuantity(item.name);
        let displayName = nameOnly;

        if (qty > 1 || this._showQuantityOne) {
            displayName = this._quantityPosition === "beginning"
                ? `${qty}× ${nameOnly}`
                : `${nameOnly} (${qty})`;
        }

        if (item.due && this._mode === "todo") {
            nameSpan.style.width = '100%';

            // Name + Intervall
            const firstRow = document.createElement('div');
            firstRow.style.display = 'flex';
            firstRow.style.justifyContent = 'space-between';
            firstRow.style.alignItems = 'center';

            const nameDiv = document.createElement('div');
            nameDiv.textContent = displayName;
            nameDiv.style.flex = '1';

            // Interval
            let interval = this._getInterval(item.name);
            const intervalText = interval ? `${interval}` : translate("ui.todo.interval_once");
            const intervalDiv = document.createElement('div');
            intervalDiv.textContent = intervalText;
            intervalDiv.style.whiteSpace = 'nowrap';
            intervalDiv.style.marginLeft = '12px';
            intervalDiv.style.textAlign = 'right';

            firstRow.appendChild(nameDiv);
            firstRow.appendChild(intervalDiv);
            nameSpan.appendChild(firstRow);

            // DueDate
            const dueDate = new Date(item.due);
            const now = new Date();

            const hasTime = item.due.includes('T') && item.due.includes(':');
            const userLocale = this._hass?.language || navigator.language || 'de-DE';

            function uses12HourFormat(locale) {
                const dtf = new Intl.DateTimeFormat(locale, { hour: 'numeric' });
                return dtf.resolvedOptions().hour12;
            }

            const is12Hour = uses12HourFormat(userLocale);

            const options = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                ...(hasTime ? { hour: '2-digit', minute: '2-digit', hour12: is12Hour } : {})
            };

            const formattedDate = dueDate.toLocaleString(userLocale, options);

            const baseFontSize = this._listFontSize;
            const smallerFontSize = Math.round(baseFontSize * 0.8);

            const dueDiv = document.createElement('div');
            dueDiv.style.fontSize = 'smaller';
            dueDiv.style.display = 'flex';
            dueDiv.style.justifyContent = 'space-between';
            dueDiv.style.alignItems = 'center';

            const dueLeft = document.createElement('div');
            dueLeft.style.display = 'flex';
            dueLeft.style.alignItems = 'center';

            const icon = document.createElement('ha-icon');
            icon.setAttribute('icon', 'mdi:calendar-clock');
            icon.style.verticalAlign = 'middle';
            icon.style.marginRight = '6px';
            icon.style.fontSize = smallerFontSize + 'px';
            icon.style.setProperty('--mdc-icon-size', smallerFontSize + 'px');

            dueLeft.appendChild(icon);
            dueLeft.appendChild(document.createTextNode(formattedDate));

            // time till due - right side
            const dueRight = document.createElement('div');
            dueRight.style.whiteSpace = 'nowrap';
            dueRight.style.marginLeft = '12px';
            dueRight.style.textAlign = 'right';

            const diffMs = dueDate - now;

            if (diffMs > 0) {
                const msInMinute = 1000 * 60;
                const msInHour = msInMinute * 60;
                const msInDay = msInHour * 24;
                const msInMonth = msInDay * 30;  // round about
                const msInYear = msInDay * 365;  // round about

                let remaining = diffMs;

                const years = Math.floor(remaining / msInYear);
                remaining %= msInYear;

                const months = Math.floor(remaining / msInMonth);
                remaining %= msInMonth;

                const days = Math.floor(remaining / msInDay);
                remaining %= msInDay;

                const hours = Math.floor(remaining / msInHour);
                remaining %= msInHour;

                const minutes = Math.floor(remaining / msInMinute);

                // Singular/Plural labels
                const timeLabels = {
                    year:   [translate("ui.todo.list.year"),   translate("ui.todo.list.years")],
                    month:  [translate("ui.todo.list.month"),  translate("ui.todo.list.months")],
                    day:    [translate("ui.todo.list.day"),    translate("ui.todo.list.days")],
                    hour:   [translate("ui.todo.list.hour"),   translate("ui.todo.list.hours")],
                    minute: [translate("ui.todo.list.minute"), translate("ui.todo.list.minutes")]
                };

                // helper for format time parts
                function formatTime(value, unit) {
                    const label = value === 1 ? timeLabels[unit][0] : timeLabels[unit][1];
                    return `${value} ${label}`;
                }

                // Filter only vaues > 0
                const timeParts = [
                    {value: years, unit: 'year'},
                    {value: months, unit: 'month'},
                    {value: days, unit: 'day'},
                    {value: hours, unit: 'hour'},
                    {value: minutes, unit: 'minute'},
                ].filter(part => part.value > 0);

                let displayParts = [];

                if (timeParts.length === 0) {
                    displayParts.push('0 Minuten');
                } else if (timeParts.length === 1) {
                    if (timeParts[0].unit === 'minute') {
                        displayParts.push(formatTime(timeParts[0].value, 'minute'));
                    } else {
                        displayParts.push(formatTime(timeParts[0].value, timeParts[0].unit));
                        // add next smaller unit if applicable
                        const unitsOrder = ['year', 'month', 'day', 'hour', 'minute'];
                        const idx = unitsOrder.indexOf(timeParts[0].unit);
                        if (idx + 1 < unitsOrder.length) {
                            const nextUnit = unitsOrder[idx + 1];
                            const nextPart = timeParts.find(p => p.unit === nextUnit);
                            if (nextPart) {
                                displayParts.push(formatTime(nextPart.value, nextUnit));
                            }
                        }
                    }
                } else {
                    displayParts.push(formatTime(timeParts[0].value, timeParts[0].unit));
                    displayParts.push(formatTime(timeParts[1].value, timeParts[1].unit));
                }

                dueRight.textContent = displayParts.join(' ');

                let remainingMinutes = null;

                // if item.due is a date string without time, interpret as midnight
                let dueDateTime = item.due ? new Date(item.due) : null;
                if (dueDateTime) {
                    // if time part is missing, set to midnight
                    if (/^\d{4}-\d{2}-\d{2}$/.test(item.due)) {
                        dueDateTime = new Date(item.due + "T00:00:00");
                    }
                    const now = new Date();
                    remainingMinutes = (dueDateTime - now) / (1000 * 60);
                }

                if (remainingMinutes !== null) {
                    let orangeThreshold = null;

                    if (!interval) {
                        orangeThreshold = this._todoYellowS;
                    } else if (interval.includes('D')) {
                        orangeThreshold = this._todoYellowD;
                    } else if (interval.includes('H')) {
                        orangeThreshold = this._todoYellowH;
                    } else if (interval.includes('M')) {
                        orangeThreshold = this._todoYellowM;
                    }

                    if (remainingMinutes > 0 && remainingMinutes <= orangeThreshold) {
                        dueDiv.style.color = '#f0ad4e';
                    } else if (remainingMinutes <= 0) {
                        dueDiv.style.color = '#d9534f';
                        dueRight.textContent = translate("ui.todo.due_label");
                    } else {
                        dueDiv.style.color = '';
                    }
                } else {
                    dueDiv.style.color = '';
                }
            } else {
                dueRight.textContent = translate("ui.todo.due_label");
                dueDiv.style.color = '#d9534f';
            }

            dueDiv.appendChild(dueLeft);
            dueDiv.appendChild(dueRight);

            nameSpan.appendChild(dueDiv);
        } else {
            // Shopping Mode
            nameSpan.textContent = displayName;
        }

        nameSpan.addEventListener('dblclick', async () => {

            if(debugMode) console.debug('[ha-shopping-list-improved] due:', item.due);

            const updatedItem = await this.editItemPopup(item, "edit", false);

            let newName = '';
            let dueDate = null;
            let dueDateTime = null;

            if (updatedItem && typeof updatedItem === 'object' && !Array.isArray(updatedItem)) {
                newName = updatedItem.name || '';

                if (updatedItem.due_datetime) {
                    dueDateTime = updatedItem.due_datetime;
                } else if (updatedItem.due_date) {
                    dueDate = updatedItem.due_date;
                }
            } else if (typeof updatedItem === 'string') {
                newName = updatedItem;
            }

            if (!newName) return; // || newName === item.name

            if (newName === "__DELETE__") {
                await this._removeItem(item);
                return;
            }

            // ServiceData
            const serviceData = {
                item: item.id,
                rename: newName,
            };

            if (dueDateTime) {
                serviceData.due_datetime = dueDateTime;
            } else if (dueDate) {
                serviceData.due_date = dueDate;
            }

            if(debugMode) console.debug('[ha-shopping-list-improved] serviceData:', serviceData);

            try {
                await this._hass.connection.sendMessagePromise({
                    type: "call_service",
                    domain: "todo",
                    service: "update_item",
                    target: { entity_id: this._entity },
                    service_data: serviceData,
                });
                await this._refresh();
            } catch (err) {
                console.error('[ha-shopping-list-improved] Unable to rename item:', err);
            }
        });

        left.appendChild(completeBtn);
        left.appendChild(nameSpan);

        const actions = document.createElement('div');
        actions.className = 'actions';

        // Plus-Button
        const plusBtn = document.createElement('button');
        plusBtn.innerHTML = '+';
        plusBtn.title = translate("editor.labels.plus_btn");
        plusBtn.style.border = 'none';
        plusBtn.style.background = 'transparent';
        plusBtn.style.cursor = 'pointer';
        plusBtn.style.fontSize = '18px';
        plusBtn.style.marginLeft = '8px';
        plusBtn.addEventListener('click', async () => {
            if (plusBtn._processing) return;
            plusBtn._processing = true;

            try {
                const nameOnly = this._getNameOnly(item.name);
                const category = this._getCategory(item.name);
                let currentQty = this._getQuantity(item.name);
                const newQty = currentQty + 1;

                const showQty = newQty > 1 || this._showQuantityOne;

                let formattedName = showQty
                    ? (this._quantityPosition === "beginning"
                        ? `${newQty}× ${nameOnly}`
                        : `${nameOnly} (${newQty})`)
                    : nameOnly;

                if (category) {
                    formattedName = `@${category}@ ${formattedName}`;
                }

                await this._hass.connection.sendMessagePromise({
                    type: "call_service",
                    domain: "todo",
                    service: "update_item",
                    target: { entity_id: this._entity },
                    service_data: { item: item.id, rename: formattedName }
                });
                await this._refresh();
            } catch (err) {
                console.error('[ha-shopping-list-improved] Plus button failed', err);
            }

            plusBtn._processing = false;
        });

        // Minus-Button
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

            try {
                const nameOnly = this._getNameOnly(item.name);
                const category = this._getCategory(item.name);
                let currentQty = this._getQuantity(item.name);

                if (currentQty > 1) {
                    const newQty = currentQty - 1;
                    const showQty = newQty > 1 || this._showQuantityOne;

                    let formattedName = showQty
                        ? (this._quantityPosition === 'beginning'
                            ? `${newQty}× ${nameOnly}`
                            : `${nameOnly} (${newQty})`)
                        : nameOnly;

                    if (category) {
                        formattedName = `@${category}@ ${formattedName}`;
                    }

                    await this._hass.connection.sendMessagePromise({
                        type: "call_service",
                        domain: "todo",
                        service: "update_item",
                        target: { entity_id: this._entity },
                        service_data: { item: item.id, rename: formattedName }
                    });
                    await this._refresh();
                } else {
                    await this._removeItem(item);
                }
            } catch (err) {
                console.error('[ha-shopping-list-improved] Minus button failed', err);
            }

            minusBtn._processing = false;
        });

		if (this._showPlusMinus && this._mode === "shopping") {
			actions.appendChild(plusBtn);
			actions.appendChild(minusBtn);
		}
		
        li.appendChild(left);
        li.appendChild(actions);
        parentEl.appendChild(li);
    }

    async _onAdd() {
        if (this._addingBusy) {
            console.warn("[ha-shopping-list-improved][DEBUG] Click ignored: busy (Add)");
            return;
        }
        this._addingBusy = true;

        try {
			let inputName = this._inputEl.value.trim();
			if (!inputName) return;

			// EAN check (13 digits)
			let imageUrl = false;
			let eanCheck = await this._checkEAN(inputName);

			if (!eanCheck) {
				await this.confirmPopup(translate("editor.labels.alert_no_valid_ean"), true);
			  
				this._addingBusy = false;
				return;
			} else {
				if (eanCheck.brands) {
					inputName = eanCheck.brands + " - " + eanCheck.name;
				} else {
					inputName = eanCheck.name;
				}
				
				imageUrl = eanCheck.imageUrl;

				if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Product name:", inputName);
				if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Brand:", eanCheck.brands);
				if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Thumbnail URL:", imageUrl);
			}

            let inputQty = parseInt(this._qtyEl.value, 10) || 1;
            const quantityPosition = this._quantityPosition; // "beginning" or "end"

            if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Add:", inputName, "Quantity:", inputQty);

            if (!Array.isArray(this._items)) this._items = [];

            const nameOnly = this._getNameOnly(inputName);

            // Check if the item already exists
            const existing = this._items.find(i => this._getNameOnly(i.name).toLowerCase() === nameOnly.toLowerCase());

            let assignedCategory = null;

            // 1. If the item exists, keep its current category
            if (existing) {
                const existingCat = this._getCategory(existing.name);
                if (existingCat) {
                    assignedCategory = existingCat;
                }
            }

            // 2. If there is an explicit category in the input, use it
            const explicitCategory = this._getCategory(inputName);
            if (explicitCategory) {
                assignedCategory = explicitCategory;
            }

            // 3. Only if no category is set yet, take the config category
            if (!assignedCategory) { // <-- only check for null, 'none' remains
                for (const cat of this._categories) {
                    if (cat.items.some(catItem => catItem.toLowerCase() === nameOnly.toLowerCase())) {
                        assignedCategory = cat.name;
                        break; // only the first matching category
                    }
                }
            }

            // 4. If still no category and popup enabled, ask the user
            let dueDate = null;
            let dueDateTime = null;
            let interval = null;
            if (!existing && !assignedCategory && this._showCatPopUp) {
                const updatedItem = await this.editItemPopup(inputName, "add", imageUrl);
                if (!updatedItem) {
                    this._addingBusy = false;
                    return;
                }

                let newName = '';
                // Check if updatedItem is an object
                if (updatedItem && typeof updatedItem === 'object' && !Array.isArray(updatedItem)) {
                    newName = updatedItem.name || '';
                    if (updatedItem.due_datetime) {
                        dueDateTime = updatedItem.due_datetime;
                    } else if (updatedItem.due_date) {
                        dueDate = updatedItem.due_date;
                    }

                    // intervall
                    interval = this._getInterval(updatedItem.name);
                    if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Create new --> interval:", interval);
                    if (interval) {
                        interval = ` {{${interval}}}`;
                    }
                } else if (typeof updatedItem === 'string') {
                    newName = updatedItem;
                }

                inputName = this._getNameOnly(newName);
                assignedCategory = this._getCategory(newName);
            }

			let finalName = inputName;

			if (existing) {
				if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Found existing Item:", existing.name);

                // in todo mode --> return
                if (this._mode === "todo") {
                    await this.confirmPopup(translate("ui.labels.alert_item_exists_todo").replace("{item}", nameOnly), true);
                    
                    this._addingBusy = false;
                    return;
                }

				let currentQty = this._getQuantity(existing.name) || 1;
				const newQty = currentQty + inputQty;
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

				const existingCat = this._getCategory(existing.name);
				const effectiveCat = assignedCategory || existingCat;
				if (effectiveCat) finalName = `@${effectiveCat}@ ${finalName}`;

				try {
					const updateMsg = {
						type: "call_service",
						domain: "todo",
						service: "update_item",
						target: { entity_id: this._entity },
						service_data: {
							item: existing.id,
							rename: finalName,
						},
					};
					if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Updating existing item:", updateMsg);
					await this._hass.connection.sendMessagePromise(updateMsg);
				} catch (err) {
					console.error("[ha-shopping-list-improved] Error while updating item:", err);
				}
			} else {
				// New Item
				if (inputQty > 1 || this._showQuantityOne) {
					if (quantityPosition === "beginning") {
						finalName = `${inputQty}× ${inputName}`;
					} else {
						finalName = `${inputName} (${inputQty})`;
					}
				}
				if (assignedCategory) {
					finalName = `@${assignedCategory}@ ${finalName}${interval || ''}`;
				}

                // Service Data
                const serviceData = {
                    item: finalName,
                };

                if (dueDateTime) {
                    serviceData.due_datetime = dueDateTime;
                } else if (dueDate) {
                    serviceData.due_date = dueDate;
                }               

				try {
					const addMsg = {
						type: "call_service",
						domain: "todo",
						service: "add_item",
						target: { entity_id: this._entity },
						service_data: serviceData,
					};
					if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Adding new item WS message:", addMsg);
					await this._hass.connection.sendMessagePromise(addMsg);
				} catch (err) {
					console.error("[ha-shopping-list-improved] Unable to add:", err);
				}
			}

			this._addToHistory(inputName);
			this._inputEl.value = '';
			this._qtyEl.value = '';
			await this._refresh();
        } finally {
            this._addingBusy = false;
        }
    }

    // ToDo Mode edit popup
    async _confirmToDoPopup(item) {
        // Overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.4)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';
        overlay.style.pointerEvents = 'auto';

        // Popup-Box
        const popup = document.createElement('div');
        popup.style.background = 'var(--card-background-color, white)';
        popup.style.padding = '16px';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        popup.style.maxWidth = '340px';
        popup.style.textAlign = 'left';
        popup.style.fontFamily = 'var(--ha-card-font-family, Roboto, sans-serif)';
        popup.style.color = 'var(--primary-text-color, black)';
        popup.style.pointerEvents = 'auto';

        // Message
        const msg = document.createElement('p');
        msg.textContent = this._getNameOnly(item.name);
        msg.style.marginBottom = '12px';
        msg.style.fontWeight = '500';
        msg.style.textAlign = 'center';
        msg.style.fontSize = '20px';
        popup.appendChild(msg);

        // Sub Message
        const subMsg = document.createElement('p');
        subMsg.textContent = translate("ui.todo.select_action");
        subMsg.style.margin = '8px 0';
        subMsg.style.fontSize = '0.9em';
        subMsg.style.color = 'var(--secondary-text-color, #666)';
        popup.appendChild(subMsg);

        // Radio Buttons
        let interval = this._getInterval(item.name); // "2D", "1M", "3H"
        let disabled = !interval;

        const options = [
            { id: 'remove_due',   label: translate("ui.todo.remove_due"),   value: 'remove', disabled: disabled },
            { id: 'next_due',     label: translate("ui.todo.next_due"),     value: 'next',   disabled: disabled, checked: !disabled },
            { id: 'next_due_now', label: translate("ui.todo.next_due_now"), value: 'now',    disabled: disabled },
            { id: 'edit',         label: translate("ui.todo.edit"),         value: 'edit' },
            { id: 'delete',       label: translate("ui.todo.delete"),       value: 'delete', checked: disabled },
        ];

        const radioContainer = document.createElement('div');
        radioContainer.style.display = 'flex';
        radioContainer.style.flexDirection = 'column';
        radioContainer.style.gap = '6px';
        radioContainer.style.marginBottom = '16px';

        options.forEach(opt => {
            const label = document.createElement('label');
            label.style.display = 'flex';
            label.style.alignItems = 'center';
            label.style.gap = '6px';
            label.style.cursor = opt.disabled ? 'not-allowed' : 'pointer';
            label.style.userSelect = 'none';
            label.style.opacity = opt.disabled ? '0.5' : '1.0';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'todo_action';
            input.value = opt.value;
            if (opt.checked) input.checked = true;
            if (opt.disabled) input.disabled = true;

            const span = document.createElement('span');
            span.textContent = opt.label;

            label.appendChild(input);
            label.appendChild(span);
            radioContainer.appendChild(label);
        });

        popup.appendChild(radioContainer);

        // Buttons
        const btnContainer = document.createElement('div');
        btnContainer.style.display = 'flex';
        btnContainer.style.justifyContent = 'center';
        btnContainer.style.gap = '12px';

        const yesBtn = document.createElement('button');
        yesBtn.textContent = translate("ui.common.ok");
        yesBtn.style.backgroundColor = 'var(--primary-color, #03A9F4)';
        yesBtn.style.color = 'white';
        yesBtn.style.border = 'none';
        yesBtn.style.padding = '8px 16px';
        yesBtn.style.borderRadius = '4px';
        yesBtn.style.cursor = 'pointer';

        const noBtn = document.createElement('button');
        noBtn.textContent = translate("ui.common.cancel");
        noBtn.style.backgroundColor = 'var(--secondary-background-color, #eee)';
        noBtn.style.border = 'none';
        noBtn.style.padding = '8px 16px';
        noBtn.style.borderRadius = '4px';
        noBtn.style.cursor = 'pointer';


        yesBtn.addEventListener('click', async () => {
            const selected = popup.querySelector('input[name="todo_action"]:checked')?.value || 'next';

            let dueDate = null;
            let dueDateTime = null;
            let currentDue = item.due ? item.due : null; // ISO or YYYY-MM-DD
            //let interval = this._getInterval(item.name); // "2D", "1M", "3H"

            const isDateOnlyString = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s);

            // Parse Interval like "2D", "3H", "1M"
            function parseShortInterval(str) {
                if (!str || typeof str !== 'string') return null;
                const m = str.trim().match(/^(\d+)\s*([HDMhdm])$/);
                if (!m) return null;
                return { value: parseInt(m[1], 10), unit: m[2].toUpperCase() }; // unit in 'H'|'D'|'M'
            }

            // add interval to a JS Date object (mutates copy)
            function addIntervalToDate(dateObj, value, unit) {
                const d = new Date(dateObj.getTime());
                if (unit === 'H') {
                    d.setHours(d.getHours() + value);
                } else if (unit === 'D') {
                    d.setDate(d.getDate() + value);
                } else if (unit === 'M') {
                    d.setMonth(d.getMonth() + value);
                }
                return d;
            }

            // Format: YYYY-MM-DD
            function formatDateOnly(d) {
                const y = d.getFullYear();
                const m = String(d.getMonth() + 1).padStart(2, '0');
                const day = String(d.getDate()).padStart(2, '0');
                return `${y}-${m}-${day}`;
            }

            // Format: YYYY-MM-DD HH:MM:SS (local, without TZ)
            function formatDateTime(d) {
                const y = d.getFullYear();
                const m = String(d.getMonth() + 1).padStart(2, '0');
                const day = String(d.getDate()).padStart(2, '0');
                const hh = String(d.getHours()).padStart(2, '0');
                const mm = String(d.getMinutes()).padStart(2, '0');
                const ss = String(d.getSeconds()).padStart(2, '0');
                return `${y}-${m}-${day} ${hh}:${mm}:${ss}`;
            }

            const parsed = parseShortInterval(interval); // {value, unit} or null

            // rules
            // if currentDue exists and date-only (YYYY-MM-DD)
            const currentDueIsDateOnly = currentDue && isDateOnlyString(currentDue);

            // if Intervall H is used and currentDue is date-only -> fallback to 1D
            let effectiveInterval = parsed;
            if (parsed) {
                if (currentDueIsDateOnly && parsed.unit === 'H') {
                    // use 1 day instead
                    effectiveInterval = { value: 1, unit: 'D' };
                }
            }

            const now = new Date();

            if (selected === 'remove') {
                // leave dueDate / dueDateTime null
                dueDate = null;
                dueDateTime = null;
            } else if (selected === 'next') {
                // current due + interval
                if (effectiveInterval && currentDue) {
                    if (currentDueIsDateOnly) {
                        // parse date-only into local midnight
                        const [y, mm, dd] = currentDue.split('-').map(n => parseInt(n, 10));
                        const base = new Date(y, mm - 1, dd, 0, 0, 0);
                        const next = addIntervalToDate(base, effectiveInterval.value, effectiveInterval.unit);
                        // if (D or M) use due_date
                        if (effectiveInterval.unit === 'D' || effectiveInterval.unit === 'M') {
                            dueDate = formatDateOnly(next);
                        } else {
                            // fallback: if H (shouldn't happen due to above), set datetime
                            dueDateTime = formatDateTime(next);
                        }
                    } else {
                        // currentDue has time (ISO)
                        // create Date from ISO (handles offsets)
                        const base = new Date(currentDue);
                        const next = addIntervalToDate(base, effectiveInterval.value, effectiveInterval.unit);
                        // set due_datetime
                        dueDateTime = formatDateTime(next);
                    }
                } else {
                    // no Intervall or no currentDue -> do nothing
                }
            } else if (selected === 'now') {
                // now + Intervall
                if (effectiveInterval) {
                    const next = addIntervalToDate(now, effectiveInterval.value, effectiveInterval.unit);
                    dueDateTime = formatDateTime(next);
                }
            } else if (selected === 'delete') {
                // Delete Item
                await this._removeItem(item);

                document.body.removeChild(overlay);
                return;
            } else if (selected === 'edit') {
                // Edit Item
                await this.editItemPopup(item, "edit", false);

                document.body.removeChild(overlay);
                return;
            }

            // ServiceData
            let serviceData = {
                item: item.id,
            };

            if (dueDateTime) {
                // "YYYY-MM-DD HH:MM:SS"
                serviceData.due_datetime = dueDateTime;
            } else if (dueDate) {
                serviceData.due_date = dueDate;
            }

            try {
                // as there is no option to set the due to an empty value we have to remove and readd the item
                if(selected === 'remove') {
                    const removeMsg = {
                        type: "call_service",
                        domain: "todo",
                        service: "remove_item",
                        target: { entity_id: this._entity },
                        service_data: {
                            item: item.id
                        }
                    };

                    if(debugMode) console.debug("[ha-shopping-list-improved] Sending removeItem WS message:", removeMsg);

                    await this._hass.connection.sendMessagePromise(removeMsg);

                    // Add the item again as a new item without due date
                    // Service Data
                    const serviceData = {
                        item: item.name,
                    };

                    const addMsg = {
                        type: "call_service",
                        domain: "todo",
                        service: "add_item",
                        target: { entity_id: this._entity },
                        service_data: serviceData,
                    };
                    if (debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Adding new item WS message:", addMsg);
                    await this._hass.connection.sendMessagePromise(addMsg);
                } else {
                    const msg = {
                        type: "call_service",
                        domain: "todo",
                        service: "update_item",
                        target: { entity_id: this._entity },
                        service_data: serviceData,
                    };

                    if(debugMode) console.debug("[ha-shopping-list-improved] Sending toggleComplete WS message:", msg);

                    await this._hass.connection.sendMessagePromise(msg);
                    await this._refresh();
                }
            } catch (err) {
                console.error("[ha-shopping-list-improved] Update ToDo failed", err);
            }

            document.body.removeChild(overlay);
        });

        noBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        btnContainer.appendChild(yesBtn);
        btnContainer.appendChild(noBtn);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });

        popup.appendChild(btnContainer);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }

    async _toggleComplete(item) {
        if (!this._entity) return;

        // ToDo Mode
        if (this._mode === "todo") {
            await this._confirmToDoPopup(item);
            return;
        }

        try {
            const newStatus = item.complete ? "needs_action" : "completed";

            const msg = {
                type: "call_service",
                domain: "todo",
                service: "update_item",
                target: { entity_id: this._entity },
                service_data: {
                    item: item.id,
                    status: newStatus
                }
            };

            if(debugMode) console.debug("[ha-shopping-list-improved] Sending toggleComplete WS message:", msg);

            await this._hass.connection.sendMessagePromise(msg);

            await this._refresh();
        } catch (err) {
            console.error("[ha-shopping-list-improved] Toggle complete failed", err);
        }
    }

    async _removeItem(item) {
        if (!this._entity) return;

		const itemNameOnly = this._getNameOnly(item.name);
		const msgRemove = translate("editor.labels.confirm_remove").replace("{item}", itemNameOnly);
    
		if (!(await this.confirmPopup(msgRemove))) {
            if(this._mode ===  "todo") await this._confirmToDoPopup(item);
            return;
        }

        try {
            const msg = {
                type: "call_service",
                domain: "todo",
                service: "remove_item",
                target: { entity_id: this._entity },
                service_data: {
                    item: item.id
                }
            };

            if(debugMode) console.debug("[ha-shopping-list-improved] Sending removeItem WS message:", msg);

            await this._hass.connection.sendMessagePromise(msg);

            await this._refresh();
        } catch (err) {
            console.error("[ha-shopping-list-improved] Remove failed", err);
        }
    }

    async _clearCompleted() {
        if (!this._entity) return;

        const msgConfirm = translate("editor.labels.confirm_clear_done");
		if (!(await this.confirmPopup(msgConfirm))) return;

        try {
            const msg = {
                type: "call_service",
                domain: "todo",
                service: "remove_completed_items",
                target: { entity_id: this._entity }
            };

            if(debugMode) console.debug("[ha-shopping-list-improved] Sending clearCompleted WS message:", msg);
            await this._hass.connection.sendMessagePromise(msg);

            await this._refresh();
        } catch (err) {
            console.error("[ha-shopping-list-improved] Clear completed failed", err);
        }
    }
	
    async confirmPopup(message, okOnly = false) {
        return new Promise((resolve) => {
            // Overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.4)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';
            overlay.style.pointerEvents = 'auto';

            // Popup-Box
            const popup = document.createElement('div');
            popup.style.background = 'var(--card-background-color, white)';
            popup.style.padding = '16px';
            popup.style.borderRadius = '8px';
            popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            popup.style.maxWidth = '320px';
            popup.style.textAlign = 'center';
            popup.style.fontFamily = 'var(--ha-card-font-family, Roboto, sans-serif)';
            popup.style.color = 'var(--primary-text-color, black)';
            popup.style.pointerEvents = 'auto';

            // Message
            const msg = document.createElement('p');
            msg.textContent = message;
            msg.style.marginBottom = '16px';

            // Buttons
            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.justifyContent = 'center';
            btnContainer.style.gap = '12px';

            if (okOnly) {
                const okBtn = document.createElement('button');
                okBtn.textContent = translate("ui.common.ok");
                okBtn.style.backgroundColor = 'var(--primary-color, #03A9F4)';
                okBtn.style.color = 'white';
                okBtn.style.border = 'none';
                okBtn.style.padding = '8px 16px';
                okBtn.style.borderRadius = '4px';
                okBtn.style.cursor = 'pointer';
                okBtn.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                    resolve(true);
                });
                btnContainer.appendChild(okBtn);
            } else {
                const yesBtn = document.createElement('button');
                yesBtn.textContent = translate("ui.common.yes");
                yesBtn.style.backgroundColor = 'var(--primary-color, #03A9F4)';
                yesBtn.style.color = 'white';
                yesBtn.style.border = 'none';
                yesBtn.style.padding = '8px 16px';
                yesBtn.style.borderRadius = '4px';
                yesBtn.style.cursor = 'pointer';

                const noBtn = document.createElement('button');
                noBtn.textContent = translate("ui.common.no");
                noBtn.style.backgroundColor = 'var(--secondary-background-color, #eee)';
                noBtn.style.border = 'none';
                noBtn.style.padding = '8px 16px';
                noBtn.style.borderRadius = '4px';
                noBtn.style.cursor = 'pointer';

                yesBtn.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                    resolve(true);
                });
                noBtn.addEventListener('click', () => {
                    document.body.removeChild(overlay);
                    resolve(false);
                });

                btnContainer.appendChild(yesBtn);
                btnContainer.appendChild(noBtn);

                // ckick on background closes with "No"
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        document.body.removeChild(overlay);
                        resolve(false);
                    }
                });
            }

            popup.appendChild(msg);
            popup.appendChild(btnContainer);
            overlay.appendChild(popup);
            document.body.appendChild(overlay);
        });
    }

	_renderHistory() {
		// Category Merge logic
		const mergeMode = this._categoryMergeMode || "standard_only";

		if(debugMode) console.info("[ha-shopping-list-improved] Category merge mode:", mergeMode);

		const localCats = Array.isArray(this._categories) ? this._categories : [];
		const globalCats = Array.isArray(this._globalCategories) ? this._globalCategories : [];
		let merged = [];

		switch (mergeMode) {
			case "standard_only":
				merged = [...localCats];
				break;

			case "global_only":
				merged = [...globalCats];
				break;

			case "local_first": {
				const existingNames = localCats.map(c => c.name.toLowerCase());
				merged = [
					...localCats,
					...globalCats.filter(gc => !existingNames.includes(gc.name.toLowerCase()))
				];
				break;
			}

			case "global_first": {
				const existingNames = globalCats.map(c => c.name.toLowerCase());
				merged = [
					...globalCats,
					...localCats.filter(lc => !existingNames.includes(lc.name.toLowerCase()))
				];
				break;
			}

			case "global_combined": {
				const all = [...localCats, ...globalCats];
				const unique = [];
				const names = new Set();
				for (const c of all) {
					const lower = c.name.toLowerCase();
					if (!names.has(lower)) {
						names.add(lower);
						unique.push(c);
					}
				}
				merged = unique.sort((a, b) =>
					a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
				);
				break;
			}

			default:
				merged = [...localCats];
				break;
		}

		this._categories = merged;

		if (debugMode) {
			console.info("[ha-shopping-list-improved] Local categories:", localCats);
			console.info("[ha-shopping-list-improved] Global categories:", globalCats);
			console.info("[ha-shopping-list-improved] All categories after merge:", this._categories);
		}

        this._historyEl.innerHTML = '';

        const localChips = this._previous || [];
        const defaultChips = this._defaultChips || [];
        const globalChips = this._globalChips || [];
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


            case "global_only":
                combined = [...globalChips];
                combined.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                break;

            case "global_combined":
                combined = [
                    ...globalChips,
                    ...defaultChips.filter(c => !globalChips.includes(c)),
                    ...localChips.filter(c => !globalChips.includes(c) && !defaultChips.includes(c))
                ];
                combined.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                break;

            default:
                // Fallback to combined
                combined = [...defaultChips, ...localChips.filter(c => !defaultChips.includes(c))];
                combined.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                break;
        }
		
        combined.forEach(chipText => {
            const chip = document.createElement('div');
            chip.className = 'chip';
            chip.textContent = chipText;

			// Color Priority: Highlight > Global > Standard > Local
			if (this._highlightWords.some(word => word.toLowerCase() === chipText.toLowerCase())) {
				chip.style.background = this._highlightColor;
				chip.title = translate("editor.labels.chip_highlighted");
			} else if (this._globalChips?.includes(chipText)) {
				chip.style.background = this._chipGlobalColor;
				chip.title = translate("editor.labels.chip_global");
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

                this._inputEl.value = chipText.trim();
                this._qtyEl.value = '';

                await this._onAdd();
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
				chip.addEventListener('mousedown', e => { 
					timer = setTimeout(async () => {
						await this.confirmPopup(
							translate("editor.labels.alert_cannot_delete_standard"),
							true
						);
					}, 5000); 
				});

				chip.addEventListener('touchstart', e => { 
					timer = setTimeout(async () => {
						await this.confirmPopup(
							translate("editor.labels.alert_cannot_delete_standard"),
							true
						);
					}, 5000); 
				});

                chip.addEventListener('mouseup', e => { clearTimeout(timer); });
                chip.addEventListener('mouseleave', e => { clearTimeout(timer); });
                chip.addEventListener('touchend', e => { clearTimeout(timer); });
            }

            this._historyEl.appendChild(chip);
        });
		
		// Add dishes
		const dishes = this._dishes || [];

		dishes.forEach(dish => {
			const chip = document.createElement('div');
			chip.className = 'chip';
			chip.textContent = dish.name || "(no dish)";
			chip.style.background = dish.bgcolor || this._chipColorDish; // fallback

			// Click or Double-Click-Logic
			const clickEvent = this._chipClick === 'click' ? 'click' : 'dblclick';
			chip.addEventListener(clickEvent, async () => {
				if (this._addingBusy) return;

				for (const item of dish.items) {
					const itemName = this._getNameOnly(item);
					const itemQuantity = this._getQuantity(item);

					this._inputEl.value = itemName;
					this._qtyEl.value = itemQuantity;

					await this._onAdd();
				}
			});

			this._historyEl.appendChild(chip);
		});
	}

    async _removeHistoryItem(name){
        const msgHistory = translate("editor.labels.confirm_remove_history").replace("{item}", name);
		if (!(await this.confirmPopup(msgHistory))) return;
        const idx = this._previous.findIndex(x=> x.toLowerCase()===name.toLowerCase());
        if (idx!==-1){ 
            this._previous.splice(idx,1); 
            this._saveHistory(); 
            this._renderHistory(); 
        }
    }
    
    // Export function
    _exportOfflineList() {
        const now = new Date();
        const formattedDate = now.toLocaleString();

        const categories = this._categories || [];
        const items = this._items || [];

        const entityId = this._entity || "default_list";

        const exportTimestamp = now.toISOString();

        const STORAGE_KEY = `offlineShoppingListStatus_${entityId}`;
        const STORAGE_TIMESTAMP_KEY = `offlineShoppingListTimestamp_${entityId}`;

        let baseUrl = this._externalUrl ? this._externalUrl.trim().replace(/\/$/, "") : window.location.origin;

        if (!/^https?:\/\//i.test(baseUrl)) {
            baseUrl = "http://" + baseUrl;
        }

        const token = this._longLivedToken || "";

        const itemsByCat = {};

        // Category handling
        const getCategoryForItem = (item) => {
            const nameOnly = this._getNameOnly(item.name);
            const explicitCategory = this._getCategory(item.name);
            if (explicitCategory) return explicitCategory;

            for (const cat of categories) {
                if (cat.items.some(catItem => catItem.toLowerCase() === nameOnly.toLowerCase())) {
                    return cat.name;
                }
            }

            // Fallback
            return item.category || "none";
        };

        for (const item of items) {
            const name = this._getNameOnly(item.name);
            const cat = getCategoryForItem(item);
            const quantity = this._getQuantity(item.name);
            const uid = item.id || null;

            if (!itemsByCat[cat]) itemsByCat[cat] = [];
            itemsByCat[cat].push({
                name,
                complete: item.complete,
                quantity,
                uid
            });
        }

        const allCats = [...categories.map(c => c.name), "none"];

        let html = `
            <!DOCTYPE html>
            <html lang="de">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${translate("ui.common.sync_offline_list")} - ${entityId}</title>
            <style>
                body {
                    font-family: "Roboto", sans-serif;
                    background: #f5f5f5;
                    margin: 0;
                    padding: 16px;
                }
                h1 {
                    text-align: center;
                    font-size: 20px;
                    margin-bottom: 8px;
                    color: #333;
                }
                h4 {
                    text-align: center;
                    font-size: 12px;
                    margin-bottom: 8px;
                    color: #333;
                }
                #sync-button {
                    display: block;
                    margin: 0 auto 16px auto;
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #0078d7;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                }
                #sync-button:disabled {
                    background-color: #999;
                    cursor: not-allowed;
                }
                .category {
                    background: white;
                    border-radius: 8px;
                    padding: 12px;
                    margin-bottom: 12px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .category-title {
                    font-weight: bold;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 4px 0;
                }
                input[type="checkbox"] {
                    width: 18px;
                    height: 18px;
                }
            </style>
            </head>
            <body>
            <h1>${translate("ui.common.sync_offline_list")}</h1>
            <h4>${entityId}</h4>
            <h4>${translate("ui.common.sync_created")} ${formattedDate}</h4>
            <button id="sync-button">${translate("ui.common.sync_to_ha")}</button>
            `;

    for (const catName of allCats) {
        const catItems = itemsByCat[catName];
        if (!catItems || catItems.length === 0) continue;

        const catCfg = categories.find(c => c.name === catName);
        const icon = ""; //catCfg?.icon ? `<ha-icon icon="${catCfg.icon}" style="width:16px;height:16px;"></ha-icon>` : "";
        const color = catCfg?.bgcolor || "#ccc";

        html += `
        <div class="category">
            <div class="category-title" style="color:${color};">
                ${icon}${catName === "none" ? translate("ui.common.sync_without_category") : catName}
            </div>
        `;

        for (const it of catItems) {
            const showQty = it.quantity > 1 || this._showQuantityOne;
            let nameText = it.name;
            if (showQty) {
                if (this._quantityPosition === "beginning") {
                    nameText = `${it.quantity}× ${it.name}`;
                } else {
                    nameText = `${it.name} (${it.quantity})`;
                }
            }

            html += `
            <div class="item" title="UUID: ${it.uid || 'n/a'}" data-uid="${it.uid || ''}">
                <input type="checkbox" data-complete="${it.complete}" ${it.complete ? "checked" : ""}>
                <span>${nameText}</span>
            </div>`;
        }
        html += `</div>`;
    }

    html += `
        <script>
        const EXPORT_TIMESTAMP = "${exportTimestamp}";
        const STORAGE_KEY = "${STORAGE_KEY}";
        const STORAGE_TIMESTAMP_KEY = "${STORAGE_TIMESTAMP_KEY}";

        const HA_BASE_URL = "${baseUrl}";
        const HA_ENTITY_ID = "${entityId}";
        const HA_TOKEN = "${token}";

        const savedTimestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);
        let savedStatus = {};

        if (savedTimestamp !== EXPORT_TIMESTAMP) {
            localStorage.removeItem(STORAGE_KEY);
            savedStatus = {};
            localStorage.setItem(STORAGE_TIMESTAMP_KEY, EXPORT_TIMESTAMP);
        } else {
            savedStatus = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        }

        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach((cb, idx) => {
            if (savedStatus.hasOwnProperty(idx)) {
            cb.checked = savedStatus[idx];
            } else {
            cb.checked = cb.getAttribute('data-complete') === "true";
            }
        });

        checkboxes.forEach((cb, idx) => {
            cb.addEventListener("change", () => {
            savedStatus[idx] = cb.checked;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(savedStatus));
            });
        });

        // WebSocket to HA
        async function sendToggle(uid, status) {
            return new Promise((resolve, reject) => {
            if (!uid) {
                reject("No UID for Item");
                return;
            }

            const wsUrl = HA_BASE_URL.replace(/^http/, 'ws') + "/api/websocket";
            const socket = new WebSocket(wsUrl);

            socket.onopen = () => {
                socket.send(JSON.stringify({ type: "auth", access_token: HA_TOKEN }));
            };

            socket.onmessage = (event) => {
                const msg = JSON.parse(event.data);

                if (msg.type === "auth_ok") {
                const newStatus = status ? "completed" : "needs_action";

                const serviceCall = {
                    id: 1,
                    type: "call_service",
                    domain: "todo",
                    service: "update_item",
                    target: { entity_id: HA_ENTITY_ID },
                    service_data: {
                    item: uid,
                    status: newStatus
                    }
                };
                socket.send(JSON.stringify(serviceCall));
                } else if (msg.type === "result") {
                if (msg.success) {
                    socket.close();
                    resolve();
                } else {
                    socket.close();
                    reject(msg.error?.message || "Service call failed");
                }
                } else if (msg.type === "auth_invalid") {
                socket.close();
                reject("Auth failed");
                }
            };

            socket.onerror = (err) => {
                reject("WebSocket Error: " + err.message);
            };

            socket.onclose = (ev) => {
                if (!ev.wasClean) {
                reject("WebSocket closed unexpectedly");
                }
            };
            });
        }

        // Sync Button
        const syncBtn = document.getElementById("sync-button");
        syncBtn.addEventListener("click", async () => {
            syncBtn.disabled = true;
            syncBtn.textContent = "${translate("ui.common.sync_to_ha")}";

            try {
            for (let i = 0; i < checkboxes.length; i++) {
                const cb = checkboxes[i];
                const itemDiv = cb.closest(".item");
                const uid = itemDiv.getAttribute("data-uid");
                await sendToggle(uid, cb.checked);
            }
            alert("${translate("ui.common.sync_finished")}");
            } catch (e) {
            alert("${translate("ui.common.sync_error")} " + e);
            } finally {
            syncBtn.disabled = false;
            syncBtn.textContent = "${translate("ui.common.sync_to_ha")}";
            }
        });
        </script>
        </body>
        </html>`;

        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `shopping-list-offline-${entityId}.html`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // PDF Export function
    async _exportPdfList() {
        // load pdf-lib, if not already done
        const { PDFDocument, rgb, StandardFonts } = await new Promise((resolve, reject) => {
            if (window.PDFLib) return resolve(window.PDFLib);
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js";
            script.onload = () => resolve(window.PDFLib);
            script.onerror = () => reject(new Error("pdf-lib load failed"));
            document.head.appendChild(script);
        });

        const now = new Date();
        const formattedDate = now.toLocaleString();
        const categories = this._categories || [];
        const items = this._items || [];
        const entityId = this._entity || "default_list";

        const getCategoryForItem = (item) => {
            const nameOnly = this._getNameOnly(item.name);
            const explicitCategory = this._getCategory(item.name);
            if (explicitCategory) return explicitCategory.toLowerCase();

            for (const cat of categories) {
            if (cat.items.some(catItem => catItem.toLowerCase() === nameOnly.toLowerCase())) {
                return cat.name.toLowerCase();
            }
            }

            return "none";
        };

        const itemsByCat = {};
        for (const item of items) {
            const cat = getCategoryForItem(item);
            if (!itemsByCat[cat]) itemsByCat[cat] = [];
            itemsByCat[cat].push({
            name: this._getNameOnly(item.name),
            complete: item.complete,
            quantity: this._getQuantity(item.name),
            uid: item.id || null,
            });
        }

        const allCats = [...categories.map(c => c.name.toLowerCase()), "none"];

        // ceate PDF
        const pdfDoc = await PDFDocument.create();

        // load font
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontSizeTitle = 18;
        const fontSizeNormal = 12;
        const margin = 40;
        let y = 750;

        // create page
        let page = pdfDoc.addPage([595, 842]); // A4 in pt (ca.)

        // Title
        page.drawText(`Shopping List - ${entityId}`, {
            x: margin,
            y,
            size: fontSizeTitle,
            font,
            color: rgb(0, 0, 0),
        });
        y -= 30;

        // Creation date
        page.drawText(`Erstellt: ${formattedDate}`, {
            x: margin,
            y,
            size: fontSizeNormal,
            font,
            color: rgb(0, 0, 0),
        });
        y -= 30;

        // Form
        const form = pdfDoc.getForm();

        for (const catName of allCats) {
            const catItems = itemsByCat[catName];
            if (!catItems || catItems.length === 0) continue;

            const catCfg = categories.find(c => c.name.toLowerCase() === catName);

            const displayCatName = catName === "none" ? "Ohne Kategorie" : (catCfg ? catCfg.name : catName);

            page.drawText(displayCatName, {
            x: margin,
            y,
            size: fontSizeNormal,
            font,
            color: catCfg && catCfg.bgcolor
                ? rgb(...hexToRgb(catCfg.bgcolor))  // hex to rgb
                : rgb(0, 0, 0),
            });
            y -= 20;

            for (const [i, it] of catItems.entries()) {
            // new page if needed
            if (y < 50) {
                page = pdfDoc.addPage([595, 842]);
                y = 800;
            }

            const showQty = it.quantity > 1 || this._showQuantityOne;
            let nameText = it.name;
            if (showQty) {
                if (this._quantityPosition === "beginning") {
                nameText = `${it.quantity}× ${it.name}`;
                } else {
                nameText = `${it.name} (${it.quantity})`;
                }
            }

            // Position Checkbox
            const boxX = margin;
            const boxY = y - 10;
            const boxSize = 15;

            const checkBox = form.createCheckBox(`checkbox_${catName}_${i}`);
            checkBox.addToPage(page, { x: boxX, y: boxY, width: boxSize, height: boxSize });
            if (it.complete) checkBox.check();

            page.drawText(nameText, {
                x: boxX + boxSize + 5,
                y: boxY + 2,
                size: fontSizeNormal,
                font,
                color: rgb(0, 0, 0),
            });

            y -= 25;
            }

            y -= 10;
        }

        // save PDF
        const pdfBytes = await pdfDoc.save();

        // Download
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `shopping-list-${entityId}.pdf`;
        a.click();
        URL.revokeObjectURL(url);

        // Hex to RGB helper
        function hexToRgb(color) {
            if (typeof color !== 'string') return [0, 0, 0, 1];

            // rgba or rgb
            const rgbaMatch = color.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([01]?\.?\d*))?\s*\)$/i);
            if (rgbaMatch) {
                const r = Math.min(255, parseInt(rgbaMatch[1], 10)) / 255;
                const g = Math.min(255, parseInt(rgbaMatch[2], 10)) / 255;
                const b = Math.min(255, parseInt(rgbaMatch[3], 10)) / 255;
                const a = rgbaMatch[4] !== undefined ? Math.min(1, Math.max(0, parseFloat(rgbaMatch[4]))) : 1;
                return [r, g, b, a];
            }

            // Hex
            let cleanHex = color.replace(/^#/, '').toLowerCase();
            if (cleanHex.length === 3) {
                cleanHex = cleanHex.split('').map(ch => ch + ch).join('');
            }

            if (cleanHex.length !== 6) {
                // Ungültiger Wert
                return [0, 0, 0, 1];
            }

            const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
            const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
            const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

            return [r, g, b, 1];
        }
    }

    // Local storage key for History, unique per to-do list
    _storageKey() {
        const entityId = this._entity || "default";
        return 'ha-shopping-list-improved-history-' + entityId;
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
        try{ localStorage.setItem(this._storageKey(), JSON.stringify(this._previous.slice(0,2000))); }catch(e){} 
    }

    _addToHistory(name){
        name = (name || '').trim();
        if(!name) return;
        
        // Dont add Standard-Chips to local History
        if (this._defaultChips?.includes(name) || !this._allowLocalChips) return;
        
        const idx = this._previous.findIndex(x=> x.toLowerCase() === name.toLowerCase());
        if(idx!==-1) this._previous.splice(idx,1);
        this._previous.unshift(name);
        this._previous = this._previous.slice(0,2000);
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
