/* Improved Shopping List Card */
const version = "2.2.0-BETA-8";
/*
 * @description Improved Shopping List Card for Home Assistant.
 * @author Nisbo
 * @license MIT
 * ha-shopping-list-improved.js
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
        "ui.common.dynamic_category"                    : "Neue (dynamische) Kategorie",
        "ui.common.loading_list"           				: "Lade Liste...",

        "ui.message.quantity_increased"                 : "Anzahl erhöht",
        "ui.message.quantity_decreased"                 : "Anzahl verringert",
        "ui.message.edited"                             : "Artikel bearbeitet",
        "ui.message.item_added"                         : "Artikel hinzugefügt",
        "ui.message.item_removed"                       : "Artikel entfernt",
        "ui.message.sent"                               : "Nachricht gesendet",

        "ui.admin.options"                              : "Admin Optionen",
        "ui.admin.options.browser_chips"                : "Browser Chips",
        "ui.admin.options.browser_chips_copy"           : "Kopieren",
        "ui.admin.options.browser_chips_delete"         : "Browser Chips löschen",
        "ui.admin.options.browser_chips_delete_con"     : "Möchten Sie wirklich alle Browser Chips löschen ?",
        "ui.admin.options.dynamic_categories"           : "Dynamische Kategorien",
        "ui.admin.options.dynamic_categories_copy"      : "Kopieren",
        "ui.admin.options.dynamic_categories_include"   : "Inklusive Artikel",
        "ui.admin.options.manual_assigned"              : "Manuell zugewiesene Artikel",
        "ui.admin.options.manual_assigned_copy"         : "Kopieren",
        "ui.admin.options.manual_assigned_include"      : "Inklusive bereits konfigurierte Artikel",

        "ui.todo.general"                               : "Allgemein",
        "ui.todo.hours"                                 : "Stunden",
        "ui.todo.days"                                  : "Tage",
        "ui.todo.months"                                : "Monate",
        "ui.todo.due_every"                             : "Fälligkeit alle:",
        "ui.todo.next_due"                              : "Nächste Fälligkeit:",
        "ui.todo.remove_due"                            : "Fälligkeitsdatum entfernen",
        "ui.todo.next_due"                              : "Nächste Fälligkeit setzen",
        "ui.todo.next_due_now"                          : "Nächste Fälligkeit ab jetzt setzen",
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
        "ui.todo.set.completed.true"                    : "Als erledigt markieren",
        "ui.todo.set.completed.false"                   : "Erledigt entfernen",
        "ui.labels.alert_item_exists_todo"              : "Der Artikel '{item}' existiert bereits in der To-Do-Liste.", 
		
        "editor.placeholders.quantity"                  : "Anzahl",
        "editor.placeholders.item"                      : "Artikel...",
        "editor.labels.show_message_button"             : "Nachrichten-Button anzeigen",
        "editor.labels.notify_entity"                   : "Notify-Entität",
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
        "editor.labels.show_cat_next_due"               : "Nächste Fälligkeit in Kategorie anzeigen ?",
        "editor.labels.cat_double_sized_icon"           : "Größeres Icon anzeigen ?",
        "editor.labels.show_cat_exclamation_mark"       : "Ausrufezeichen für fällige Einträge",
        "editor.labels.show_title_exclamation_mark"     : "Ausrufezeichen für fällige Einträge",
        "editor.labels.show_cat_popup"                  : "PopUp für Kategorien anzeigen ?",
		"editor.labels.category_merge_mode" 			: "Kategorie-Merge-Modus",
		"editor.labels.dishes" 							: "Gerichte",
        "editor.labels.mode"                            : "Modus",
        "editor.labels.font.sizes"                      : "Schriftgrößen",
        "editor.labels.colors"                          : "Farbeinstellungen",
        "editor.labels.category.options"                : "Kategorien",
        "editor.labels.export.options"                  : "Export-Optionen",
        "editor.labels.message.options"                 : "Benachrichtigungen",
        "editor.labels.dishes.options"                  : "Gerichte",
        "editor.labels.chips.options"                   : "Chips",
        "editor.labels.item.options"                    : "Artikel",
        "editor.labels.general.options"                 : "Allgemeine Einstellungen",
        "editor.labels.input_row_position"              : "Position der Eingabemaske",
        "editor.labels.allow_dynamic_categories"        : "Dynamische Kategorien erlauben",
        "editor.labels.show_admin_button"               : "Admin-Button anzeigen",
        "editor.labels.notify_on_change"                : "Bei Änderungen benachrichtigen",
        "editor.labels.notify_on_change_all"            : "Immer die komplette Liste schicken",
        "editor.labels.notify_on_change_time"           : "Zeit bevor eine Benachrichtigung verschickt wird",
        "editor.labels.notify_entity_smtp"              : "Name des SMTP-Notify-Eintrags",
        
		"editor.options.chips_position.auto"            : "Automatisch Rechts / Unten (abhängig von Bildschirmgröße)",
		"editor.options.chips_position.auto_panel"      : "Automatisch Panel / Unten (abhängig von Bildschirmgröße)",
		"editor.options.chips_position.bottom"          : "Immer unten",
		"editor.options.chips_position.right"           : "Immer rechts",
		"editor.options.chips_position.full"            : "Rechts, mehrspaltig (nur Panel-Mode)",
        "editor.options.chips_position.none"            : "Keine Chips (Chips ausblenden)",
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

        "editor.options.category_merge.local_only"                          : "[1] Nur lokale Kategorien (Standard)",
        "editor.options.category_merge.global_only"                         : "[1] Nur globale Kategorien (aus Textdatei)",
        "editor.options.category_merge.dynamic_only"                        : "[1] Nur dynamische Kategorien",

        "editor.options.category_merge.local_only_sorted"                   : "[1] Nur lokale Kategorien (sortiert)",
        "editor.options.category_merge.global_only_sorted"                  : "[1] Nur globale Kategorien (sortiert)",
        "editor.options.category_merge.dynamic_only_sorted"                 : "[1] Nur dynamische Kategorien (sortiert)",

        "editor.options.category_merge.local_global"                        : "[2] Lokal → Global",
        "editor.options.category_merge.local_dynamic"                       : "[2] Lokal → Dynamisch",
        "editor.options.category_merge.global_dynamic"                      : "[2] Global → Dynamisch",
        "editor.options.category_merge.global_local"                        : "[2] Global → Lokal",
        "editor.options.category_merge.dynamic_local"                       : "[2] Dynamisch → Lokal",
        "editor.options.category_merge.dynamic_global"                      : "[2] Dynamisch → Global",

        "editor.options.category_merge.local_global_sorted"                 : "[2] Lokal → Global (sortiert)",
        "editor.options.category_merge.local_dynamic_sorted"                : "[2] Lokal → Dynamisch (sortiert)",
        "editor.options.category_merge.global_dynamic_sorted"               : "[2] Global → Dynamisch (sortiert)",
        "editor.options.category_merge.global_local_sorted"                 : "[2] Global → Lokal (sortiert)",
        "editor.options.category_merge.dynamic_local_sorted"                : "[2] Dynamisch → Lokal (sortiert)",
        "editor.options.category_merge.dynamic_global_sorted"               : "[2] Dynamisch → Global (sortiert)",

        "editor.options.category_merge.local_global_sorted_total"           : "[2] Lokal + Global (komplett sortiert)",
        "editor.options.category_merge.local_dynamic_sorted_total"          : "[2] Lokal + Dynamisch (komplett sortiert)",
        "editor.options.category_merge.global_dynamic_sorted_total"         : "[2] Global + Dynamisch (komplett sortiert)",
        "editor.options.category_merge.global_local_sorted_total"           : "[2] Global + Lokal (komplett sortiert)",
        "editor.options.category_merge.dynamic_local_sorted_total"          : "[2] Dynamisch + Lokal (komplett sortiert)",
        "editor.options.category_merge.dynamic_global_sorted_total"         : "[2] Dynamisch + Global (komplett sortiert)",

        "editor.options.category_merge.local_global_dynamic"                : "[3] Lokal → Global → Dynamisch",
        "editor.options.category_merge.local_dynamic_global"                : "[3] Lokal → Dynamisch → Global",
        "editor.options.category_merge.global_local_dynamic"                : "[3] Global → Lokal → Dynamisch",
        "editor.options.category_merge.global_dynamic_local"                : "[3] Global → Dynamisch → Lokal",
        "editor.options.category_merge.dynamic_local_global"                : "[3] Dynamisch → Lokal → Global",
        "editor.options.category_merge.dynamic_global_local"                : "[3] Dynamisch → Global → Lokal",

        "editor.options.category_merge.local_global_dynamic_sorted"         : "[3] Lokal → Global → Dynamisch (sortiert)",
        "editor.options.category_merge.local_dynamic_global_sorted"         : "[3] Lokal → Dynamisch → Global (sortiert)",
        "editor.options.category_merge.global_local_dynamic_sorted"         : "[3] Global → Lokal → Dynamisch (sortiert)",
        "editor.options.category_merge.global_dynamic_local_sorted"         : "[3] Global → Dynamisch → Lokal (sortiert)",
        "editor.options.category_merge.dynamic_local_global_sorted"         : "[3] Dynamisch → Lokal → Global (sortiert)",
        "editor.options.category_merge.dynamic_global_local_sorted"         : "[3] Dynamisch → Global → Lokal (sortiert)",

        "editor.options.category_merge.local_global_dynamic_sorted_total"   : "[3] Lokal + Global + Dynamisch (komplett sortiert)",
        "editor.options.category_merge.local_dynamic_global_sorted_total"   : "[3] Lokal + Dynamisch + Global (komplett sortiert)",
        "editor.options.category_merge.global_local_dynamic_sorted_total"   : "[3] Global + Lokal + Dynamisch (komplett sortiert)",
        "editor.options.category_merge.global_dynamic_local_sorted_total"   : "[3] Global + Dynamisch + Lokal (komplett sortiert)",
        "editor.options.category_merge.dynamic_local_global_sorted_total"   : "[3] Dynamisch + Lokal + Global (komplett sortiert)",
        "editor.options.category_merge.dynamic_global_local_sorted_total"   : "[3] Dynamisch + Global + Lokal (komplett sortiert)",

        "editor.options.mode.shopping"                  : "Einkaufsliste",
        "editor.options.mode.todo"                      : "To-Do-Liste",
        "editor.options.inputrow.top"                   : "Oben",
        "editor.options.inputrow.bottom"                : "Unten",
		
        "editor.labels.entity"                          : "To-Do-Liste (Entität)",
        "editor.helpers.mode"                           : "Legt fest, wie die Liste verwendet wird. Im Modus „Einkaufsliste“ stehen erweiterte Funktionen zur originalen Einkaufsliste zur Verfügung, jedoch ohne Fälligkeiten. Im Modus „To-Do-Liste“ können zusätzlich Fälligkeitsdaten gesetzt und verwaltet werden, die Bedienung unterscheidet sich dabei leicht. Hinweis: Die originale Home Assistant Einkaufsliste mit der Entität 'Einkaufsliste' unterstützt keine Fälligkeiten. Zusätzlich gibt es im To-Do-Modus keine Anzahleingabe, keine Plus- und Minus-Buttons, keine Export-Buttons sowie keinen Button, um erledigte Einträge zu löschen.",
        "editor.labels.highlight_words"                 : "Hervorgehobene Wörter",
        "editor.labels.chips_with_cat_color"            : "Farbe der Kategorien nutzen",
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
        "editor.labels.title_font_size"                 : "Schriftgröße vom Titel (px)",
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
        "editor.labels.ean_file"                        : "Path zur Textdatei mit der lokalen EAN Liste",
		"editor.labels.category_file"                   : "Path zur Textdatei mit den Globalen Kategorien",
        "editor.labels.title"                           : "Titel",
        "editor.labels.title_icon"                      : "Titel-Icon",
        "editor.labels.todo_yellow_m"                   : "Warnschwelle für Intervalle in Monaten",
        "editor.labels.todo_yellow_d"                   : "Warnschwelle für Intervalle in Tagen",
        "editor.labels.todo_yellow_h"                   : "Warnschwelle für Intervalle in Stunden",
        "editor.labels.todo_yellow_s"                   : "Warnschwelle für fällige Aufgaben ohne Zeitangabe",
        "editor.labels.todo_warning_thresholds"         : "Warnschwellen für ToDo-Modus",
        "editor.labels.show_title_info"                 : "Nächste Fälligkeit im ToDo-Modus anzeigen",
        "editor.labels.show_title_info_icon"            : "Icon für nächste Fälligkeit anzeigen",

        "editor.helpers.show_title_info"                : "Zeigt im ToDo-Modus, sofern ein Titel angegeben wurde, die nächste Fälligkeit aller Einträge aller Kategorien unter dem Titel an. Abgelaufene Einträge werden hier nicht angezeigt, diese werden durch ein Ausrufezeichen rechts vom Namen angezeigt.",
        "editor.helpers.show_title_info_icon"           : "Zeigt vor dem Fälligkeitsdatum als optische Hervorhebung ein Kalender-Icon an.",
        "editor.helpers.todo_warning_thresholds"        : "Konfiguration der Warnschwellen im ToDo-Modus. Die Werte sind in Minuten anzugeben und bestimmen, wann Aufgaben als „bald fällig“ markiert werden.",
        "editor.helpers.todo_yellow_m"                  : "Warnschwelle für Intervalle in Monaten, definiert in Minuten (Standard: 1440 = 24 Stunden)",
        "editor.helpers.todo_yellow_d"                  : "Warnschwelle für Intervalle in Tagen, definiert in Minuten (Standard: 120 = 2 Stunden)",
        "editor.helpers.todo_yellow_h"                  : "Warnschwelle für Intervalle in Stunden, definiert in Minuten (Standard: 10)",
        "editor.helpers.todo_yellow_s"                  : "Warnschwelle für fällige Aufgaben ohne Zeitangabe, definiert in Minuten (Standard: 120 = 2 Stunden)",
        "editor.helpers.title"                          : "Der Titel für die Karte. Leerlassen, um ihn auszublenden",
        "editor.helpers.input_row_position"             : "Legt fest, ob die Eingabemaske (Anzahl, Artikel, Button) oberhalb oder unterhalb der Einträge angezeigt wird.",
        "editor.helpers.allow_dynamic_categories"       : "Dynamische Kategorien ermöglichen es, von außerhalb der Karte (z. B. über Automationen im Format: ‘@Kategorie@ Artikel’) Artikel Kategorien zuzuordnen, die nicht definiert sind. Außerdem können beim Hinzufügen über die Karte neue Kategorien erstellt werden. Diese Kategorien bleiben bestehen, bis der letzte Artikel in der Kategorie entfernt wurde.",
        "editor.helpers.show_message_button"            : "Zeigt im Modus 'Einkaufsliste' einen Nachrichten-Button an, über den die Liste z.B. per Email oder Telegram (über 'notify') gesendet werden kann. Dazu muss die Notify-Entität unter dem Punkt Benachrichtigungen konfiguriert werden.",
        "editor.helpers.notify_entity"                  : "Die Notify-Entität, die verwendet wird, um die Liste zu senden, wenn z.B. der Nachrichten-Button gedrückt wird. Beispiel: 'notify.mobile_app_mein_telefon' oder 'notify.telegram'. Die Benachrichtigungen enthalten HTML Formattierungen, um die Lesbarkeit zu verbessern. Stelle sicher, dass die verwendete Notify-Entität HTML-Formattierungen unterstützt. Benachrichtigungen über die SMTP Platform, sind in der Auswahl nicht vorhanden und müssen separat konfiguriert werden.",
        "editor.helpers.show_admin_button"              : "Zeigt einen Admin-Button an, wodurch die Optionen zum Kopieren von Browser Chips / Artikeln / Kategorien genutzt werden können.",
        "editor.helpers.notify_on_change"               : "Sendet eine Benachrichtigung über die konfigurierte Notify-Entität, sobald ein Artikel hinzugefügt, bearbeitet oder entfernt wurde.",
        "editor.helpers.notify_on_change_all"           : "Standardmäßig wird nur der hinzugefügte, bearbeitete oder entfernte Artikel in der Benachrichtigung erwähnt. Wenn diese Option aktiviert ist, wird zusätzlich die komplette Liste gesendet.",
        "editor.helpers.notify_on_change_time"          : "Legt fest (in Sekunden), wie lange gewartet wird, bevor eine Benachrichtigung (komplette Liste) gesendet wird. Dies ist nützlich, wenn mehrere Änderungen in kurzer Zeit vorgenommen werden, um zu vermeiden, dass zu viele Benachrichtigungen gesendet werden. Um diese Funktion zu deaktivieren '0' (Null) eingeben.",
        "editor.helpers.notify_entity_smtp"             : "Name der SMTP-Notify-Plattform (aus der configuration.yaml), die für den Versand von HTML-E-Mail-Benachrichtigungen genutzt wird. Wichtig: Hier ist nur der Name der Notify-Plattform gemeint den ihr als 'name: meinName' angegeben habt, z.B. 'email_notification', nicht die vollständige Entität wie 'notify.email_notification'.",
        "editor.helpers.title_icon"                     : "Zeigt vor dem Titel das ausgewählte Icon an.",
        "editor.helpers.font.sizes"                     : "Legt die Schriftgrößen für die Liste, Kategorien und Chips fest.",
        "editor.helpers.colors"                         : "Legt die Farbeinstellungen für die Chips fest.",
        "editor.helpers.category.options"               : "Hier kannst du Kategorien konfigurieren, die in der Einkaufs- und ToDo-liste verwendet werden. Du kannst lokale Kategorien (hier in der Karte) definieren oder eine Textdatei mit globalen Kategorien laden. Weitere Informationen zum Aufbau der Kategorien findest du in der Dokumentation.",
        "editor.helpers.export.options"                 : "Hier kannst du die Export-Optionen konfigurieren.",
        "editor.helpers.message.options"                : "Hier kannst du einstellen, wie das Nachrichtensystem funktioniert und welche Notify-Entität verwendet wird, um die Liste zu senden. Das Nachrichtensystem funktioniert nur im Modus 'Einkaufsliste'.",
        "editor.helpers.dishes.options"                 : "Hier kannst du Gerichte konfigurieren, die in der Einkaufsliste verwendet werden. Mit dieser Funktion kannst du mehrere Artikel auf einmal hinzufügen.",
        "editor.helpers.chips.options"                  : "Hier kannst du die Chip-Optionen konfigurieren. Chips sind Schnell-Auswahl-Buttons, mit denen du häufig verwendete Artikel schnell zur Liste hinzufügen kannst.",
        "editor.helpers.item.options"                   : "Hier kannst du die Einstellungen für die Artikel in der Liste konfigurieren.",
        "editor.helpers.general.options"                : "Hier kannst du allgemeine Einstellungen für die Karte konfigurieren.",
        "editor.helpers.entity"                         : "Wenn keine Entität ausgewählt wurde, wird automatisch die Standard-Einkaufsliste von Home Assistant verwendet. Diese hat allerdings keine Fälligkeits-Funktion und sollte somit nur im Modus 'Einkaufsliste' und nicht im Modus 'To-Do-Liste' verwendet werden.",
		"editor.helpers.highlight_words"                : "Liste von Wörtern, die in Chips farblich (Hintergrund) hervorgehoben werden sollen. Kann als Komma oder Semikolon-Liste eingegeben werden, z.B. 'Butter,Bananen,Mehl'.",
        "editor.helpers.chips_with_cat_color"           : "Sofern ein Chip einer Kategorie als 'item' zugewiesen wurde und für die Kategorie eine Farbe angegeben wurde, wird der Chip in der Farbe der Kategorie angezeigt. Die Reihenfolge, wie die Farben vergeben werden: Highlight > Kategorie > Global > Standard > Browser.",
        "editor.helpers.highlight_color"                : "Hex- oder rgba-Farbcode für die hervorgehobenen Wörter. Beispiel: '#D9534F', 'rgba(255,0,0,0.5)', 'red'.",
        "editor.helpers.chip_merge"                     : "Legt fest, wie Globale-, Standard- und Browser-Chips zusammen angezeigt werden.",
        "editor.helpers.list_font_size"                 : "Legt die Schriftgröße für die Artikel in der Liste fest. Standard: 14px.",
		"editor.helpers.cat_font_size"                  : "Legt die Schriftgröße für die Kategorien in der Liste fest. Standard: 16px.",
        "editor.helpers.title_font_size"                : "Legt die Schriftgröße für den Titel fest. Standard: 16px.",
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
        "editor.helpers.ean_file"                       : "Beispiel: /local/ean.txt, wenn die Datei im www-Ordner liegt. Pro Zeile muss ein Eintrag im Format 'EAN Name' stehen, z. B. '1234567890123 Test-Artikel'. Unterstützt werden die EAN-Formate EAN-8, UPC (12), EAN-13 und GS1-14.",
        "editor.helpers.chip_file"                      : "Beispiel: /local/chips.txt, wenn die Datei im www-Ordner liegt. Pro Zeile muss ein Chip eingetragen werden.",
        "editor.helpers.category_file"                  : "Beispiel: /local/categories.txt, wenn die Datei im www-Ordner liegt. Für den Aufbau der Datei, bitte in die Dokumentation gucken.",
		"editor.helpers.category_merge_mode"            : "Wähle, wie lokale, globale und dynamische Kategorien zusammengeführt werden sollen. 'local_only' zeigt nur die lokal definierten Kategorien, 'global_only' nur die globalen Kategorien und 'dynamic_only' nur die dynamischen Kategorien. Die anderen Optionen kombinieren zwei oder alle drei Varianten auf unterschiedliche Weise. Die Priorität, in der Kategorien zusammengeführt werden, entspricht der Reihenfolge der Begriffe von links nach rechts.",
        "editor.helpers.bubble_card"                    : "Aktiviere diese Option, wenn Du die Karte in der Bubble PopUp Card verwenden möchtest. In der Bubble Card müssen `background_update: true` und `close_by_clicking_outside: false` gesetzt sein, damit die Karte korrekt funktioniert.",
        "editor.helpers.show_cat_exclamation_mark"      : "Zeigt im To-Do Mode im Titel und in der Kategorie ein Ausrufezeichen an, sofern es in der Kategorie fällige Einträge gibt.",
        "editor.helpers.show_title_exclamation_mark"    : "Zeigt im To-Do Mode im Titel ein Ausrufezeichen an, sofern es in einer Kategorie fällige Einträge gibt.",
        "editor.helpers.show_cat_count"                 : "Wenn diese Option aktiviert ist, wird die Anzahl der Artikel in jeder Kategorie neben dem Kategorienamen angezeigt. Im ToDo Modus wird die Anzahl ivertiert angezeigt. Die Anzahl vor dem '/' umfasst somit nur die noch nicht fälligen Einträge. (Beispiel: 3/5 bedeutet, dass von 5 Einträgen 3 noch nicht fällig sind.) So kann man z.B. bei (5/5) einfach sehen, dass aktuell keine Einträge zu erledigen sind.",
        "editor.helpers.show_cat_next_due"              : "Wenn diese Option aktiviert ist, wird im To-Do Modus das nächste Fälligkeitsdatum unter dem Kategorienamen angezeigt. So kann man auf einen Blick sehen, wann der nächste Eintrag in dieser Kategorie fällig ist.",
        "editor.helpers.cat_double_sized_icon"          : "Wenn die nächste Fälligkeit angezeigt wird, kann mit dieser Option das Icon vergrößert werden, damit es optisch besser passt.",
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
        "ui.common.dynamic_category"                    : "New (dynamic) Category",
        "ui.common.loading_list"           				: "Loading list...",

        "ui.message.quantity_increased"                 : "Quantity increased",
        "ui.message.quantity_decreased"                 : "Quantity decreased",
        "ui.message.edited"                             : "Item edited",
        "ui.message.item_added"                         : "Item added",
        "ui.message.item_removed"                       : "Item removed",
        "ui.message.sent"                               : "Message sent",

        "ui.admin.options"                              : "Admin Options",
        "ui.admin.options.browser_chips"                : "Browser Chips",
        "ui.admin.options.browser_chips_copy"           : "Copy",
        "ui.admin.options.browser_chips_delete"         : "Delete Browser Chips",
        "ui.admin.options.browser_chips_delete_con"     : "Are you sure you want to delete all Browser Chips ?",
        "ui.admin.options.dynamic_categories"           : "Dynamic Categories",
        "ui.admin.options.dynamic_categories_copy"      : "Copy",
        "ui.admin.options.dynamic_categories_include"   : "Include items",
        "ui.admin.options.manual_assigned"              : "Manually Assigned Items",
        "ui.admin.options.manual_assigned_copy"         : "Copy",
        "ui.admin.options.manual_assigned_include"      : "Include already configured items",

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
        "ui.todo.set.completed.true"                    : "Mark as completed",
        "ui.todo.set.completed.false"                   : "Unmark completed",
        "ui.labels.alert_item_exists_todo"              : "The item '{item}' already exists in the To-Do list.", 

        "editor.placeholders.quantity"                  : "Quantity",
        "editor.placeholders.item"                      : "Item...",
        "editor.labels.show_message_button"             : "Show message button",
        "editor.labels.notify_entity"                   : "Notify-Entity",
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
        "editor.labels.show_cat_count"                  : "Show item count in categories ?",
        "editor.labels.show_cat_next_due"               : "Show next due in category ?",
        "editor.labels.cat_double_sized_icon"           : "Show bigger Icon ?",
        "editor.labels.show_cat_exclamation_mark"       : "Show an exclamation mark for due items",
        "editor.labels.show_title_exclamation_mark"     : "Show an exclamation mark for due items",
        "editor.labels.show_cat_popup"                  : "Show Category PopUp?",
		"editor.labels.category_merge_mode" 			: "Category merge mode",
		"editor.labels.dishes" 							: "Dishes",
        "editor.labels.mode"                            : "Mode",
        "editor.labels.font.sizes"                      : "Font sizes",
        "editor.labels.colors"                          : "Color settings",
        "editor.labels.category.options"                : "Categories",
        "editor.labels.export.options"                  : "Export options",
        "editor.labels.message.options"                 : "Notifications",
        "editor.labels.dishes.options"                  : "Dishes",
        "editor.labels.chips.options"                   : "Chips",
        "editor.labels.item.options"                    : "Items",
        "editor.labels.general.options"                 : "General settings",
        "editor.labels.input_row_position"              : "Input row position",
        "editor.labels.allow_dynamic_categories"        : "Allow dynamic Categories",
        "editor.labels.show_admin_button"               : "Show admin options button",
        "editor.labels.notify_on_change"                : "Notify on change",
        "editor.labels.notify_on_change_all"            : "Send always full list",
        "editor.labels.notify_on_change_time"           : "Time before sending notifications",
        "editor.labels.notify_entity_smtp"              : "Name of your SMTP-Notify-Entity",

		"editor.options.chips_position.auto"            : "Automatic Right / Bottom (depends on screen size)",
		"editor.options.chips_position.auto_panel"      : "Automatic Panel / Bottom (depends on screen size)",
		"editor.options.chips_position.bottom"          : "Always at bottom",
		"editor.options.chips_position.right"           : "Always at right",
		"editor.options.chips_position.full"            : "Right, multi-column (panel mode only)",
        "editor.options.chips_position.none"            : "No chips (hide chips)",
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

        "editor.options.category_merge.local_only"                          : "[1] Only Local Categories (default)",
        "editor.options.category_merge.global_only"                         : "[1] Only Global Categories (from file)",
        "editor.options.category_merge.dynamic_only"                        : "[1] Only Dynamic Categories",

        "editor.options.category_merge.local_only_sorted"                   : "[1] Only Local Categories (sorted)",
        "editor.options.category_merge.global_only_sorted"                  : "[1] Only Global Categories (sorted)",
        "editor.options.category_merge.dynamic_only_sorted"                 : "[1] Only Dynamic Categories (sorted)",

        "editor.options.category_merge.local_global"                        : "[2] Local → Global",
        "editor.options.category_merge.local_dynamic"                       : "[2] Local → Dynamic",
        "editor.options.category_merge.global_dynamic"                      : "[2] Global → Dynamic",
        "editor.options.category_merge.global_local"                        : "[2] Global → Local",
        "editor.options.category_merge.dynamic_local"                       : "[2] Dynamic → Local",
        "editor.options.category_merge.dynamic_global"                      : "[2] Dynamic → Global",

        "editor.options.category_merge.local_global_sorted"                 : "[2] Local → Global (sorted)",
        "editor.options.category_merge.local_dynamic_sorted"                : "[2] Local → Dynamic (sorted)",
        "editor.options.category_merge.global_dynamic_sorted"               : "[2] Global → Dynamic (sorted)",
        "editor.options.category_merge.global_local_sorted"                 : "[2] Global → Local (sorted)",
        "editor.options.category_merge.dynamic_local_sorted"                : "[2] Dynamic → Local (sorted)",
        "editor.options.category_merge.dynamic_global_sorted"               : "[2] Dynamic → Global (sorted)",

        "editor.options.category_merge.local_global_sorted_total"           : "[2] Local + Global (fully sorted)",
        "editor.options.category_merge.local_dynamic_sorted_total"          : "[2] Local + Dynamic (fully sorted)",
        "editor.options.category_merge.global_dynamic_sorted_total"         : "[2] Global + Dynamic (fully sorted)",
        "editor.options.category_merge.global_local_sorted_total"           : "[2] Global + Local (fully sorted)",
        "editor.options.category_merge.dynamic_local_sorted_total"          : "[2] Dynamic + Local (fully sorted)",
        "editor.options.category_merge.dynamic_global_sorted_total"         : "[2] Dynamic + Global (fully sorted)",

        "editor.options.category_merge.local_global_dynamic"                : "[3] Local → Global → Dynamic",
        "editor.options.category_merge.local_dynamic_global"                : "[3] Local → Dynamic → Global",
        "editor.options.category_merge.global_local_dynamic"                : "[3] Global → Local → Dynamic",
        "editor.options.category_merge.global_dynamic_local"                : "[3] Global → Dynamic → Local",
        "editor.options.category_merge.dynamic_local_global"                : "[3] Dynamic → Local → Global",
        "editor.options.category_merge.dynamic_global_local"                : "[3] Dynamic → Global → Local",

        "editor.options.category_merge.local_global_dynamic_sorted"         : "[3] Local → Global → Dynamic (sorted)",
        "editor.options.category_merge.local_dynamic_global_sorted"         : "[3] Local → Dynamic → Global (sorted)",
        "editor.options.category_merge.global_local_dynamic_sorted"         : "[3] Global → Local → Dynamic (sorted)",
        "editor.options.category_merge.global_dynamic_local_sorted"         : "[3] Global → Dynamic → Local (sorted)",
        "editor.options.category_merge.dynamic_local_global_sorted"         : "[3] Dynamic → Local → Global (sorted)",
        "editor.options.category_merge.dynamic_global_local_sorted"         : "[3] Dynamic → Global → Local (sorted)",

        "editor.options.category_merge.local_global_dynamic_sorted_total"   : "[3] Local + Global + Dynamic (fully sorted)",
        "editor.options.category_merge.local_dynamic_global_sorted_total"   : "[3] Local + Dynamic + Global (fully sorted)",
        "editor.options.category_merge.global_local_dynamic_sorted_total"   : "[3] Global + Local + Dynamic (fully sorted)",
        "editor.options.category_merge.global_dynamic_local_sorted_total"   : "[3] Global + Dynamic + Local (fully sorted)",
        "editor.options.category_merge.dynamic_local_global_sorted_total"   : "[3] Dynamic + Local + Global (fully sorted)",
        "editor.options.category_merge.dynamic_global_local_sorted_total"   : "[3] Dynamic + Global + Local (fully sorted)",

        "editor.options.mode.shopping"                  : "Shopping list",
        "editor.options.mode.todo"                      : "To-do list",
        "editor.options.inputrow.top"                   : "Top",
        "editor.options.inputrow.bottom"                : "Bottom",

        "editor.labels.entity"                          : "To-Do-List (Entity)",
        "editor.labels.highlight_words"                 : "Highlight words",
        "editor.labels.chips_with_cat_color"            : "Use category colors",
        "editor.labels.highlight_color"                 : "Highlight color",
        "editor.labels.chip_merge"                      : "Combine chips",
        "editor.labels.local_chips"                     : "Allow local chips?",
        "editor.labels.chip_font_size"                  : "Chip font size (px)",
        "editor.labels.chip_color"                      : "Color of local (browser) chips",
		"editor.labels.chip_color_global"               : "Color of global (text file) chips",
        "editor.labels.chip_color_default"              : "Color of standard chips",
		"editor.labels.chip_color_dish"              	: "Color of dishes chips",
        "editor.labels.list_font_size"                  : "List item font size (px)",
        "editor.labels.title_font_size"                 : "Title font size (px)",
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
        "editor.labels.ean_file"                        : "Path to the text file with the local EAN list",
		"editor.labels.category_file"                   : "Path to the text file with the global categories",
        "editor.labels.title"                           : "Title",
        "editor.labels.title_icon"                      : "Title Icon",
        "editor.labels.todo_yellow_m"                   : "Warning threshold for intervals in months",
        "editor.labels.todo_yellow_d"                   : "Warning threshold for intervals in days",
        "editor.labels.todo_yellow_h"                   : "Warning threshold for intervals in hours",
        "editor.labels.todo_yellow_s"                   : "Warning threshold for due dates without time",
        "editor.labels.todo_warning_thresholds"         : "Warning thresholds for ToDo mode",
        "editor.labels.show_title_info"                 : "Show next due date in ToDo mode",
        "editor.labels.show_title_info_icon"            : "Show icon for next due date",

        "editor.helpers.show_title_info"                : "Displays the next due date of all items from all categories under the title when in ToDo mode, provided a title is set. Expired items are not shown here; they are indicated by an exclamation mark to the right of the name.",
        "editor.helpers.show_title_info_icon"           : "Displays a calendar icon before the due date as a visual highlight.",
        "editor.helpers.todo_warning_thresholds"        : "Configuration of warning thresholds in ToDo mode. Values are specified in minutes and determine when tasks are marked as “due soon”.",
        "editor.helpers.todo_yellow_m"                  : "Warning threshold for intervals in months, defined in minutes (Default: 1440 = 24 hours)",
        "editor.helpers.todo_yellow_d"                  : "Warning threshold for intervals in days, defined in minutes (Default: 120 = 2 hours)",
        "editor.helpers.todo_yellow_h"                  : "Warning threshold for intervals in hours, defined in minutes (Default: 10)",
        "editor.helpers.todo_yellow_s"                  : "Warning threshold for due dates without time, defined in minutes (Default: 120 = 2 hours)",
        "editor.helpers.title"                          : "The title for the card. Leave empty to hide it",
        "editor.helpers.input_row_position"             : "Determines whether the input mask (quantity, item, button) is displayed above or below the entries.",
        "editor.helpers.allow_dynamic_categories"       : "Dynamic categories make it possible to assign items to categories that are not predefined, even from outside the card (e.g. through automations in the format: ‘@Category@ Item’). Additionally, new categories can be created when adding items through the card. These categories remain available until the last item in the category has been removed.",
        "editor.helpers.show_message_button"            : "Displays (in Shopping List Mode) a message button that allows sending the list via email, Telegram (using 'notify'), or similar. The notify entity must be configured under the Notifications section.",
        "editor.helpers.notify_entity"                  : "The notify entity used e.g. to send the list when the message button is pressed. This entity must be configured in Home Assistant beforehand (e.g. 'notify.mobile_app_xyz' or 'notify.telegram'). Notifications include HTML formatting to improve readability. Make sure the configured notify entity supports HTML formatting. Notifications via SMTP platform are not included here; for SMTP, use the 'notify_entity_smtp' option.",
        "editor.helpers.show_admin_button"              : "Displays an admin options button, which opens a dialog to copy browser chips, dynamic categories, and manually assigned items.", 
        "editor.helpers.notify_on_change"               : "Sends a notification via the configured notify entity whenever an item is added, edited, or removed.",
        "editor.helpers.notify_on_change_all"           : "Sends also the entire list with each notification, rather than just the changed item.",
        "editor.helpers.notify_on_change_time"          : "Defines (in seconds) how long to wait before sending a notification (entire list). This is useful when multiple changes are made in a short time to avoid sending too many notifications. Enter '0' (zero) to disable this feature.",
        "editor.helpers.notify_entity_smtp"             : "Name of the SMTP notify platform (from configuration.yaml) used for sending HTML email notifications. Important: Only the name of the notify platform you set as 'name: myName' is meant here, e.g. 'email_notification', not the full entity like 'notify.email_notification'.",
        "editor.helpers.title_icon"                     : "Displays the selected icon before the title.",
        "editor.helpers.font.sizes"                     : "Defines the font sizes for the list, categories, and chips.",
        "editor.helpers.colors"                         : "Defines the color settings for the chips.",
        "editor.helpers.category.options"               : "Here you can configure categories used in the shopping and to-do list. You can define local categories (here in the card) or load a text file with global categories. For more information on the structure of the categories, please refer to the documentation.",
        "editor.helpers.export.options"                 : "Here you can configure the export options.",
        "editor.helpers.message.options"                : "Here you can configure how the message system works and which notify entity is used to send the list. The notification system only works in 'Shopping List' mode.",
        "editor.helpers.dishes.options"                 : "Here you can configure dishes used in the shopping list. This feature allows you to add multiple items at once.",
        "editor.helpers.chips.options"                  : "Here you can configure the chip options. Chips are quick-selection buttons that allow you to quickly add frequently used items to the list.",
        "editor.helpers.item.options"                   : "Here you can configure the settings for the items in the list.",
        "editor.helpers.general.options"                : "Here you can configure general settings for the card.",
        "editor.helpers.entity"                         : "If no Entity is selected, Home Assistant's default shopping list will be used automatically. However, this list does not have a due date function and should therefore only be used in 'Shopping List' mode, not in 'To-Do List' mode.",
        "editor.helpers.mode"                           : "Defines how the list is used. In 'Shopping List' mode, extended functions for the original shopping list are available, but without due dates. In 'To-Do List' mode, due dates can additionally be set and managed, with slightly different handling. Note: The original Home Assistant shopping list entity 'Shopping List' does not support due dates. In To-Do mode, there is also no quantity input, no plus or minus buttons, no export buttons, and no button to delete completed entries.",
        "editor.helpers.highlight_words"                : "List of words that should be highlighted in chips (by background). Enter as comma- or semicolon-separated list, e.g. 'Butter,Bananas,Flour'.",
		"editor.helpers.chips_with_cat_color"           : "If a chip is assigned as an 'item' to a category and that category has a color defined, the chip will be displayed in the category's color. The order of color priority is: Highlight > Category > Global > Standard > Browser.",
        "editor.helpers.highlight_color"                : "Hex or rgba color code for highlighted words. Examples: '#D9534F', 'rgba(255,0,0,0.5)', 'red'.",
		"editor.helpers.chip_merge"                     : "Determines how global, standard and browser chips are combined and displayed.",
		"editor.helpers.list_font_size"                 : "Sets the font size for items in the list. Default: 14px.",
        "editor.helpers.title_font_size"                : "Sets the font size for the title. Default: 16px.",
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
        "editor.helpers.ean_file"                       : "Example: /local/ean.txt, if the file is located in the www folder. Each line must contain an entry in the format 'EAN Name', e.g. '1234567890123 Test Item'. Supports EAN formats EAN-8, UPC (12), EAN-13, and GS1-14.",
        "editor.helpers.category_file"                  : "Example: /local/categories.txt if the file is located in the www folder. For file format, refer to the documentation.",
        "editor.helpers.category_merge_mode"            : "Choose how local, global and dynamic categories should be merged. 'local_only' shows only the locally defined categories, 'global_only' shows only the global categories, and 'dynamic_only' shows only the dynamic categories. All other options combine two or all three types in different ways. The priority in which categories are merged follows the order in which they appear from left to right.",
		"editor.helpers.bubble_card"                    : "Enable this option if you want to use the card in the Bubble PopUp Card. In the Bubble Card, `background_update: true` and `close_by_clicking_outside: false` must be set for the card to function correctly.",
        "editor.helpers.show_cat_exclamation_mark"      : "Shows an exclamation mark in the category while in To-Do mode if there are due items in that category.",
        "editor.helpers.show_title_exclamation_mark"    : "Shows an exclamation mark in the title while in To-Do mode if there are due items in any category.",       
        "editor.helpers.show_cat_next_due"              : "If this option is enabled, the next due date will be displayed under the category name in To-Do mode. This way, you can see at a glance when the next item in this category is due.",
        "editor.helpers.cat_double_sized_icon"          : "If the next due date is displayed, this option allows enlarging the icon so that it fits better visually.",
        "editor.helpers.show_cat_count"                 : "If this option is enabled, the number of items in each category will be displayed next to the category name. In To-Do mode, the count is shown inverted. Thus, the number before the '/' only includes the entries that are not yet due. (Example: 3/5 means that out of 5 entries, 3 are not yet due.) This way, for example, at (5/5) you can easily see that there are currently no entries to be done.",
        "editor.helpers.show_cat_popup"                 : "If this option is enabled, a pop-up will appear when adding a new item, allowing you to select a category for the item.",
        "editor.helpers.longlived_token"                : "A long-lived access token for persistent authentication with Home Assistant. It can be created in the user profile under 'Security → Long-Lived Access Tokens'. Warning: Treat this token confidentially as it grants full access to your system. Also note that if HTTP is used instead of HTTPS, the token is transmitted unencrypted and is therefore insecure.",
        "editor.helpers.external_url"                   : "The (external) URL of your Home Assistant installation (e.g. 'https://my-ha.duckdns.org:8123'). This is required if you use the export function to synchronize items later with Home Assistant. If you do not provide a URL here, the URL from which the dashboard was accessed during export will be used.",
		"editor.helpers.categories"                     : "Categories allow you to automatically group items. Each category starts with - name: <CategoryName> and contains a list of keywords under items. Example: - name: Fruits items: - Strawberries - Plums - Pears - Bananas. Optionally, each category can have an icon (e.g., mdi:apple) and a background color bgcolor (e.g., #247645). Any item that matches one of the keywords will be automatically assigned to this category. When creating a new card, a default template is added for reference.",
		"editor.helpers.dishes"							: "With dishes you can add multiple items at once. Each dish starts with - name: <Dish> and contains a list of items under 'items'. Example: - name: McDonalds items: - Cheeseburger - BigMac (2) - Fries - Hamburger (4). Each dish can optionally have a background color (bgcolor, e.g. #247645). For more information about the structure, please check the documentation."
    }
};

let debugMode = false;

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

// smaller fontsize
function getSmallerFontSize(size, smallerby = 0.8, defaultSize = 14) {
    const baseFontSize = size || defaultSize;
    const smallerFontSize = Math.round(baseFontSize * smallerby);
    return smallerFontSize;
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
        this._messageCache = "";

        this.sendMessageTimer = null;
        this._sendMessageDelay = 30; // 30 Seconds

        console.log(
            "%cImproved Shopping List Card %cv" + version,
            "color:#fff;background:#2196f3;padding:2px 6px;border-radius:3px;",
            "color:#fff;background:#4caf50;padding:2px 6px;border-radius:3px;"
        );
    }

    set hass(hass) {
        this._hass = hass;
        this.render();

        if(!this._firstStartDone){
            this._firstStartDone = true;
		    this._refresh();
        }
    }
    
	setConfig(config){
	    this._config = config || {};

        // Entity
        const entity = config.entity || getDefaultShoppingListEntity(document.querySelector("home-assistant")?.hass);
        this._entity = entity || null;
        if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Used Entity:", this._entity);

        this._title                 = config.title || "";
        this._titleIcon             = config.title_icon || "";
        this._showTitleInfo         = (config.show_title_info === false) ? false : true;
        this._showTitleInfoIcon     = (config.show_title_info_icon === false) ? false : true;
        this._quantityPosition      = (config.quantity === "beginning") ? "beginning" : "end";
        this._inputRowPosition      = (config.input_row_position === "bottom") ? "bottom" : "top";
        this._acknowledgedMode      = ["hide", "end"].includes(config.acknowledged) ? config.acknowledged : "show";
        this._chipClick             = (config.chip_click === "dblclick") ? "dblclick" : "click";
        this._showQuantitySelection = (config.show_quantity_box === false) ? false : true;
        this._showSubmitButton      = (config.show_submit_button === false) ? false : true;
		this._showPlusMinus      	= (config.show_plus_minus === false) ? false : true;
        this._showInputMask         = (config.show_input_mask === false) ? false : true;
        this._subText               = (config.sub_text === undefined) ? translate("editor.defaults.sub_text") : config.sub_text;
        this._showQuantityOne       = (config.show_quantity_one === true) ? true : false;
        this._allowLocalChips       = (config.local_chips === false) ? false : true;
        this._chipPosition          = ["bottom", "right", "full", "auto", "auto_panel", "none"].includes(config.chips_position) ? config.chips_position : "auto";
		this._chipWidth             = (["full", "auto_panel"].includes(this._chipPosition) && typeof config.chips_width === "number") ? `${config.chips_width}px` : "300px";
        this._listFontSize          = config.list_font_size  || 14; // Standard: 14px
		this._catFontSize           = config.cat_font_size   || 16; // Standard: 16px
        this._chipFontSize          = config.chip_font_size  || 12; // Standard: 12px
        this._titleFontSize         = config.title_font_size || 16; // Standard: 16px
        this._chipColor             = config.chip_color      || "rgba(100,100,100,0.3)";
        this._chipColorDefault      = config.chip_color_default || "rgba(100,100,255,0.3)";
		this._chipGlobalColor		= config.chip_color_global || "rgba(100,100,100,0.3)";
		this._chipColorDish 		= config.chip_color_dish || "#745E3D";
        this._chipMergeMode         = ["combined", "standard_first", "browser_first", "global_combined", "global_only"].includes(config.chip_merge) ? config.chip_merge : "combined";
        this._chipsWithCatColor     = (config.chips_with_cat_color === false) ? false : true;
        this._highlightColor        = config.highlight_color || "#D9534F";
        this._showCatPopUp          = (config.show_cat_popup === false) ? false : true;
        this._showCatCount          = (config.show_cat_count === false) ? false : true;
        this._showCatNextDue        = (config.show_cat_next_due === false) ? false : true;
        this._doubleSizedIcon       = (config.cat_double_sized_icon === false) ? false : true;
        this._showCatExclamation    = (config.show_cat_exclamation_mark === false) ? false : true;
        this._showTitleExclamation  = (config.show_title_exclamation_mark === false) ? false : true;
        this._showExportButton      = (config.show_export_button === true) ? true : false;
        this._showExportButtonPdf   = (config.show_export_button_pdf === true) ? true : false;
        this._showAdminButton       = (config.show_admin_button === false) ? false : true;
        this._showMessageButton     = (config.show_message_button === true) ? true : false;
        this._showClearButton       = (config.show_clear_button === false) ? false : true;
        this._longLivedToken        = config.longlived_token || "";
        this._externalUrl           = config.external_url || "";
        this._bubbleCardMode        = (config.bubble_card === true) ? true : false;
        this._chipFile              = config.chip_file || "";
        this._eanFile               = config.ean_file || "";
		this._categoryFile          = config.category_file || "";
        this._allowDynamicCats      = (config.allow_dynamic_categories === true) ? true : false;
        this._listReloadTime        = Math.min(Math.max(config.list_reload_time || 10, 1), 3600) * 1000; // in seconds, min 1s, max 1h
        this._notifyEntity          = config.notify_entity || "";
        this._notifyOnChangeEna     = (config.notify_on_change === true) ? true : false;
        this._notifyOnChangeAll     = (config.notify_on_change_all === true) ? true : false;
        this._sendMessageDelay      = config.notify_on_change_time || 0;
        this._notifyEntitySMTP      = config.notify_entity_smtp || "";
        debugMode                   = (config.debug_mode === true) ? true : false;
        
        const allowedModes = [
            // 1 Cat
            "local_only", "standard_only", // old
            "global_only",
            "dynamic_only",

            "local_only_sorted",
            "global_only_sorted",
            "dynamic_only_sorted",

            // 2 Cats
            "local_global", "local_first", // old
            "local_dynamic",
            "global_dynamic",
            "global_local", "global_first", // old
            "dynamic_local",
            "dynamic_global",

            "local_global_sorted",
            "local_dynamic_sorted",
            "global_dynamic_sorted",
            "global_local_sorted",
            "dynamic_local_sorted",
            "dynamic_global_sorted",

            "local_global_sorted_total", "global_combined", // old
            "local_dynamic_sorted_total",
            "global_dynamic_sorted_total",
            "global_local_sorted_total",
            "dynamic_local_sorted_total",
            "dynamic_global_sorted_total",

            // 3 Cats
            "local_global_dynamic",
            "local_dynamic_global",
            "global_local_dynamic",
            "global_dynamic_local",
            "dynamic_local_global",
            "dynamic_global_local",

            "local_global_dynamic_sorted",
            "local_dynamic_global_sorted",
            "global_local_dynamic_sorted",
            "global_dynamic_local_sorted",
            "dynamic_local_global_sorted",
            "dynamic_global_local_sorted",

            "local_global_dynamic_sorted_total",
            "local_dynamic_global_sorted_total",
            "global_local_dynamic_sorted_total",
            "global_dynamic_local_sorted_total",
            "dynamic_local_global_sorted_total",
            "dynamic_global_local_sorted_total",
        ];

        this._categoryMergeMode     = allowedModes.includes(config.category_merge_mode) ? config.category_merge_mode : "local_only";
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
            this._showMessageButton     = false;
            //this._showClearButton       = false;
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

        // load local EAN
        this._localEAN = [];
        this._loadLocalEANFromFile();
    }

    // Start / Restart Send Message Timer
    _resetSendMessageTimer() {
        if (this.sendMessageTimer) {
            clearTimeout(this.sendMessageTimer);
        }

        this.sendMessageTimer = setTimeout(() => {
            this.sendMessageTimer = null;
            this._sendMessage();
        }, this._sendMessageDelay * 1000);
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
	
    // Local EAN
    async _loadLocalEANFromFile() {
        if (!this._eanFile || !this._eanFile.trim()) {
            if(debugMode) console.info("[ha-shopping-list-improved] No path specified for local EAN, skipping load.");
            return;
        }

        try {
            const path = this._eanFile.trim() + "?" + new Date().getTime();
            const response = await fetch(path);
            if (!response.ok) throw new Error("Error loading file for local EAN");
            const text = await response.text();

            // Parsing
            this._localEAN = text
                .split(/\r?\n/)
                .map(line => line.trim())
                .filter(line => line.length > 0)
                .map(line => {
                    const [ean, ...nameParts] = line.split(/\s+/);
                    return {
                        ean,
                        name: nameParts.join(' ')
                    };
                });

            if (debugMode) console.info("[ha-shopping-list-improved] local EAN loaded:", this._localEAN);

            this._renderHistory(); // rerun to apply global chips
        } catch (err) {
            console.warn("[ha-shopping-list-improved] Unable to load local EAN:", err);
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
			const blocks = text.split(/\n(?=\[)/);

			for (const block of blocks) {
				const nameMatch = block.match(/^\[(.+?)\]/);
				if (!nameMatch) continue;

				const name = nameMatch[1].trim();
				const iconMatch = block.match(/icon\s*=\s*(.+)/);
				const bgcolorMatch = block.match(/bgcolor\s*=\s*(.+)/);
				const itemsMatch = block.match(/items\s*=\s*(.+)/);
                const isDynamic = false;

				const category = {
					name,
					icon: iconMatch ? iconMatch[1].trim() : "",
					bgcolor: bgcolorMatch ? bgcolorMatch[1].trim() : "",
                    isDynamic,
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
            input_row_position: "top",
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
            // Entity Selection
            {
                name: "entity",
                required: false,
                selector: {
                    entity: {
                        domain: ["todo"] // only entities with domain "todo"
                    }
                },
            },

            // General Settings
            {
                type: 'expandable',
                label: 'general.options',
                icon: 'mdi:cog-outline',
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
                    { name: "title", selector: { text: {} }, default: ""},
                    { name: "title_icon", selector: { icon: {} }, default: ""},
                    { name: "show_title_info", selector: { boolean: {} }, default: true },
                    { name: "show_title_info_icon", selector: { boolean: {} }, default: true },
                    { name: "show_title_exclamation_mark", selector: { boolean: {} }, default: true },
                    {
                        name: "input_row_position",
                        selector: {
                            select: {
                                mode: "dropdown",
                                options: [
                                    { value: "top", label: translate("editor.options.inputrow.top") },
                                    { value: "bottom", label: translate("editor.options.inputrow.bottom") }
                                ]
                            }
                        },
                        default: "top"
                    },
                    { name: "show_quantity_box", selector: { boolean: {} }, default: true },
                    { name: "show_input_mask", selector: { boolean: {} }, default: true },
                    { name: "show_submit_button", selector: { boolean: {} }, default: true },
                    { name: "show_qrscan_button", selector: { boolean: {} }, default: false },
                    { name: "show_admin_button", selector: { boolean: {} }, default: true },
                    { name: "show_message_button", selector: { boolean: {} }, default: false },
                    { name: "sub_text", selector: { text: {} }, default: " "},
                    { name: "bubble_card", selector: { boolean: {} }, default: false }
                ]
            },

            // Item Options
            {
                type: 'expandable',
                label: 'item.options',
                icon: 'mdi:format-list-checks',
                schema: [
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
                    { name: "show_plus_minus", selector: { boolean: {} }, default: true },
                    { name: "show_quantity_one", selector: { boolean: {} }, default: false },
                    {
                        name: "ean_file",
                        selector: { text: {} },
                        default: ""
                    },
                    {
                        type: 'expandable',
                        label: 'todo_warning_thresholds',
                        icon: 'mdi:alarm-light',
                        schema: [
                            {
                                name: "todo_yellow_m",
                                selector: { number: { min: 1, max: 300000, step: 1 } },
                                default: 1440
                            },
                            {
                                name: "todo_yellow_d",
                                selector: { number: { min: 1, max: 300000, step: 1 } },
                                default: 120
                            },
                            {
                                name: "todo_yellow_h",
                                selector: { number: { min: 1, max: 300000, step: 1 } },
                                default: 10
                            },
                            {
                                name: "todo_yellow_s",
                                selector: { number: { min: 1, max: 300000, step: 1 } },
                                default: 120
                            }
                        ]
                    }
                ]
            },

            // Chips
            {
                type: 'expandable',
                label: 'chips.options',
                icon: 'mdi:shape-outline',
                schema: [
                    { name: "local_chips", selector: { boolean: {} }, default: true },
                    {
                        name: "chips_position",
                        selector: {
                            select: {
                                options: [
                                    { value: "auto", label: translate("editor.options.chips_position.auto") },
                                    { value: "auto_panel", label: translate("editor.options.chips_position.auto_panel") },
                                    { value: "bottom", label: translate("editor.options.chips_position.bottom") },
                                    { value: "right", label: translate("editor.options.chips_position.right") },
                                    { value: "full", label: translate("editor.options.chips_position.full") },
                                    { value: "none", label: translate("editor.options.chips_position.none") }
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
                    { name: "chips",           selector: { text: {} }, default: "" },
                    { name: "highlight_words", selector: { text: {} }, default: "" },
                    { name: "chips_with_cat_color", selector: { boolean: {} }, default: true },
                    { name: "chip_file",       selector: { text: {} }, default: "" }
                ]
            },

            // Category Options
            {
            type: 'expandable',
            label: 'category.options',
            icon: 'mdi:format-list-bulleted',
            schema: [
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
                    { name: "show_cat_popup", selector: { boolean: {} }, default: true },
                    { name: "show_cat_count", selector: { boolean: {} }, default: true },
                    { name: "show_cat_next_due", selector: { boolean: {} }, default: true },
                    { name: "cat_double_sized_icon", selector: { boolean: {} }, default: true },
                    { name: "show_cat_exclamation_mark", selector: { boolean: {} }, default: true },
                    { name: "allow_dynamic_categories", selector: { boolean: {} }, default: false },    
                    {
                        name: "category_merge_mode",
                        label: translate("editor.labels.category_merge_mode"),
                        selector: {
                            select: {
                                mode: "dropdown",
                                options: [
                                    // 1-Cat
                                    { value: "local_only",      label: translate("editor.options.category_merge.local_only") },
                                    { value: "local_only_sorted", label: translate("editor.options.category_merge.local_only_sorted") },
                                    { value: "global_only",     label: translate("editor.options.category_merge.global_only") },
                                    { value: "global_only_sorted", label: translate("editor.options.category_merge.global_only_sorted") },
                                    { value: "dynamic_only",    label: translate("editor.options.category_merge.dynamic_only") },
                                    { value: "dynamic_only_sorted", label: translate("editor.options.category_merge.dynamic_only_sorted") },

                                    // 2-Cat
                                    { value: "local_global",    label: translate("editor.options.category_merge.local_global") },
                                    { value: "local_global_sorted",   label: translate("editor.options.category_merge.local_global_sorted") },
                                    { value: "local_global_sorted_total",   label: translate("editor.options.category_merge.local_global_sorted_total") },

                                    { value: "local_dynamic",   label: translate("editor.options.category_merge.local_dynamic") },
                                    { value: "local_dynamic_sorted",  label: translate("editor.options.category_merge.local_dynamic_sorted") },
                                    { value: "local_dynamic_sorted_total",  label: translate("editor.options.category_merge.local_dynamic_sorted_total") },

                                    { value: "global_dynamic",  label: translate("editor.options.category_merge.global_dynamic") },
                                    { value: "global_dynamic_sorted", label: translate("editor.options.category_merge.global_dynamic_sorted") },
                                    { value: "global_dynamic_sorted_total", label: translate("editor.options.category_merge.global_dynamic_sorted_total") },

                                    { value: "global_local",    label: translate("editor.options.category_merge.global_local") },
                                    { value: "global_local_sorted",   label: translate("editor.options.category_merge.global_local_sorted") },
                                    { value: "global_local_sorted_total",   label: translate("editor.options.category_merge.global_local_sorted_total") },

                                    { value: "dynamic_local",   label: translate("editor.options.category_merge.dynamic_local") },
                                    { value: "dynamic_local_sorted",  label: translate("editor.options.category_merge.dynamic_local_sorted") },
                                    { value: "dynamic_local_sorted_total",  label: translate("editor.options.category_merge.dynamic_local_sorted_total") },

                                    { value: "dynamic_global",  label: translate("editor.options.category_merge.dynamic_global") },
                                    { value: "dynamic_global_sorted", label: translate("editor.options.category_merge.dynamic_global_sorted") },
                                    { value: "dynamic_global_sorted_total", label: translate("editor.options.category_merge.dynamic_global_sorted_total") },

                                    // 3-Cat
                                    { value: "local_global_dynamic", label: translate("editor.options.category_merge.local_global_dynamic") },
                                    { value: "local_global_dynamic_sorted", label: translate("editor.options.category_merge.local_global_dynamic_sorted") },
                                    { value: "local_global_dynamic_sorted_total", label: translate("editor.options.category_merge.local_global_dynamic_sorted_total") },
                                    { value: "local_dynamic_global", label: translate("editor.options.category_merge.local_dynamic_global") },
                                    { value: "local_dynamic_global_sorted", label: translate("editor.options.category_merge.local_dynamic_global_sorted") },
                                    { value: "local_dynamic_global_sorted_total", label: translate("editor.options.category_merge.local_dynamic_global_sorted_total") },
                                    { value: "global_local_dynamic", label: translate("editor.options.category_merge.global_local_dynamic") },
                                    { value: "global_local_dynamic_sorted", label: translate("editor.options.category_merge.global_local_dynamic_sorted") },
                                    { value: "global_local_dynamic_sorted_total", label: translate("editor.options.category_merge.global_local_dynamic_sorted_total") },
                                    { value: "global_dynamic_local", label: translate("editor.options.category_merge.global_dynamic_local") },
                                    { value: "global_dynamic_local_sorted", label: translate("editor.options.category_merge.global_dynamic_local_sorted") },
                                    { value: "global_dynamic_local_sorted_total", label: translate("editor.options.category_merge.global_dynamic_local_sorted_total") },
                                    { value: "dynamic_local_global", label: translate("editor.options.category_merge.dynamic_local_global") },
                                    { value: "dynamic_local_global_sorted", label: translate("editor.options.category_merge.dynamic_local_global_sorted") },
                                    { value: "dynamic_local_global_sorted_total", label: translate("editor.options.category_merge.dynamic_local_global_sorted_total") },
                                    { value: "dynamic_global_local", label: translate("editor.options.category_merge.dynamic_global_local") },
                                    { value: "dynamic_global_local_sorted", label: translate("editor.options.category_merge.dynamic_global_local_sorted") },
                                    { value: "dynamic_global_local_sorted_total", label: translate("editor.options.category_merge.dynamic_global_local_sorted_total") }
                                ]
                            }
                        }
                    },
                    {
                        name: "category_file",
                        selector: { text: {} },
                        default: ""
                    }
                ]
            },

            // Dishes Options
            {
                type: 'expandable',
                label: 'dishes.options',
                icon: 'mdi:food-fork-drink',
                schema: [
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
                    }
                ]
            },

            // Font Sizes
            {
                type: 'expandable',
                label: 'font.sizes',
                icon: 'mdi:format-size',
                schema: [
                    {
                        name: "title_font_size",
                        selector: { number: { min: 8, max: 30, step: 1 } },
                        default: 16
                    },
                    {
                        name: "cat_font_size",
                        selector: { number: { min: 8, max: 30, step: 1 } },
                        default: 16
                    },
                    {
                        name: "list_font_size",
                        selector: { number: { min: 8, max: 30, step: 1 } },
                        default: 14
                    },
                    {
                        name: "chip_font_size",
                        selector: { number: { min: 8, max: 30, step: 1 } },
                        default: 12
                    }
                ]
            },

            // Color Options
            {
                type: 'expandable',
                label: 'colors',
                icon: 'mdi:format-color-fill',
                schema: [
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
                        name: "chip_color_global",
                        selector: { text: {} },
                        default: "rgba(100,100,100,0.3)"
                    },                    
                    {
                        name: "highlight_color",
                        selector: { text: {} },
                        default: "red"
                    },
                    {
                        name: "chip_color_dish",
                        selector: { text: {} },
                        default: "rgba(100,100,100,0.3)"
                    }
                ]
            },

            // Export Options
            {
                type: 'expandable',
                label: 'export.options',
                icon: 'mdi:file-export',
                schema: [           
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
                    }
                ]
            },

            // Message Options
            {
                type: 'expandable',
                label: 'message.options',
                icon: 'mdi:message-badge',
                schema: [       
                    {
                        name: "notify_entity",
                        required: false,
                        selector: {
                            entity: {
                                domain: ["notify"] // only entities with domain "notify"
                            }
                        }
                    },
                    {
                        name: "notify_entity_smtp",
                        required: false,
                        selector: { text: {} },
                    },
                    { name: "notify_on_change", selector: { boolean: {} }, default: false },
                    { name: "notify_on_change_all", selector: { boolean: {} }, default: false },
                    {
                        name: "notify_on_change_time",
                        selector: { number: { min: 0, max: 300, step: 1 } },
                        default: 0
                    },
                ]
            }
            ],

            computeLabel: (schema) => {
                if (!schema.name) {
                    return translate(`editor.labels.${schema.label}`);
                }
                return translate(`editor.labels.${schema.name}`);
            },

            computeHelper: (schema) => {
                if (!schema.name) {
                    return translate(`editor.helpers.${schema.label}`);
                }

                return translate(`editor.helpers.${schema.name}`);
            },

            assertConfig: (config) => {
                if (config.notify_on_change_time !== undefined && isNaN(Number(config.notify_on_change_time))) {
                    throw new Error('Configuration error: "notify_on_change_time" must be a valid number between 0 and 300.');
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

        // subscribe HA WebSocket Events, but store the unsubscribe function
        if (this._hass?.connection?.subscribeEvents) {
            this._unsubEvents = this._hass.connection.subscribeEvents(
                () => this._refresh(),
                "shopping_list_updated"
            );

            if(debugMode) console.debug("[ha-shopping-list-improved] WS subscribed to shopping_list_updated events. ", this._entity);
        }

        // Timer for ToDo Time till next due updates
        if(this._mode === "todo"){
            this._timeInterval = setInterval(() => {
                this._updateTimes();
            }, this._listReloadTime); // every xx seconds, standard --> 10 seconds            
        } else {
            // Check after 5 seconds once if not in ToDo mode
            setTimeout(() => {
                this._updateTimes();
            }, 5000);
        }
    }

    disconnectedCallback() {
        this._stopScan();

        if (typeof this._unsubEvents === "function") {
            try {
                this._unsubEvents();
            } catch(e) {
                console.warn("[ha-shopping-list-improved] WS unsubscribe failed:", e);
            }
        }

        if (this._timeInterval) {
            clearInterval(this._timeInterval);
            this._timeInterval = null;
        }

        if (this.sendMessageTimer) {
            clearTimeout(this.sendMessageTimer);
            this.sendMessageTimer = null;
        }

        this._unsubEvents = null;
        this._firstStartDone = false;
    }

    _updateTimes() {
        if(!this._items || this._items.length === 0) {
            if(debugMode) console.debug("[ha-shopping-list-improved] Runninng _refresh() because there were no items for:", this._entity);
            this._refresh(); // if the items are not loaded, try to refresh from HA
        } else {
            if(debugMode) console.debug("[ha-shopping-list-improved] List rendered");
            this._renderList(); // render list to update time displays in ToDo mode            
        }
    }

    _addDynamicCategories(itemsArray) {
        if (!itemsArray || !Array.isArray(itemsArray)) return;
        if(!this._allowDynamicCats) return;

        if(debugMode) console.debug("[ha-shopping-list-improved] _addDynamicCategories() called: ", itemsArray);

        // get the cats again to avoid already merged (with dynamic) cats
        if (this._config.categories) {
            this._categories = this._parseCategories(this._config.categories);
        } else {
            this._categories = [];
        }

        if(debugMode) console.debug("[ha-shopping-list-improved] _addDynamicCategories() this._categories: ", this._categories);
        const existingCategories = (this._categories || [])
            .filter(c => c.isDynamic !== true)  // only static categories
            .map(c => c.name.toLowerCase());

        if(debugMode) console.debug("[ha-shopping-list-improved] _addDynamicCategories() existingCategories: ", existingCategories);
        for (const item of itemsArray) {
            const name = this._getCategory(item.name);
            if (!name || name === "none") continue;

            const lowerName = name.toLowerCase();

            if (existingCategories.includes(lowerName)) continue;
            if(debugMode) console.debug(`Dynamic Category added: ${name}`);

            this._categories.push({
                name,
                items: [],
                icon: null,
                bgcolor: null,
                isDynamic: true
            });

            existingCategories.push(lowerName);
        }

        this._renderHistory(); // rerun if needed
    }

    _getDynamicCategories() {
        if (!Array.isArray(this._categories)) return [];
        if(debugMode) console.debug("[ha-shopping-list-improved] _getDynamicCategories() called: ", this._categories);

        return this._categories.filter(c => c.isDynamic === true);
    }

    _getLocalCategories() {
        if (!Array.isArray(this._categories)) return [];
        if(debugMode) console.debug("[ha-shopping-list-improved] _getLocalCategories() called: ", this._categories);

        return this._categories.filter(c => c.isDynamic === false);
    }

    _parseCategories(categoriesArray) {
        const categories = [];

        for (const cat of categoriesArray) {
            const name = cat.name || "(no category)";
            const items = Array.isArray(cat.items) ? cat.items : [];
            const icon = cat.icon || null;        // optional Icon
            const bgcolor = cat.bgcolor || null;  // optional bgcolor
            const isDynamic = false;

            if(debugMode) console.log(`Category ${name}: ${items.length ? items.join(", ") : "(empty)"}, icon: ${icon}, bgcolor: ${bgcolor}`);

            categories.push({
                name,
                items,
                icon,
                isDynamic,
                bgcolor
            });
        }
        if(debugMode) console.debug(`Categories builded: `, categories);
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
            .hidden {display: none !important;}

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

            /* None: Hide Chips */
            .list-history-container.none {
                /* Hide Chips */
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
            .cardname {
                display: flex;
                align-items: center;   /* <<< sorgt für perfekte vertikale Ausrichtung */
                gap: 6px;              /* Abstand zwischen Icon und Text */
                font-weight: bold;
                font-size: ${this._titleFontSize}px;
                margin-bottom:8px;
                color: var(--primary-text-color);
                cursor: pointer;
            }
            .cardname-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: ${this._titleFontSize}px;
                height: ${this._titleFontSize}px;
                cursor: pointer;
                color: var(--primary-text-color);
            }
            .cardname-alert {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: ${this._titleFontSize}px;
                height: ${this._titleFontSize}px;
                color: var(--primary-text-color);
            }

            .cardname-alert-desc {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: ${getSmallerFontSize(this._titleFontSize, 0.7, 14) }px;
                color: var(--secondary-text-color);
                margin-top: -12px;
            }

            .input-position {
                display: flex;
                flex-direction: column;
                flex: 1 1 auto;
                min-width: 0;
            }

            .cardname-alert-desc-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: ${getSmallerFontSize(this._titleFontSize, 0.7, 14) }px;
                height: ${getSmallerFontSize(this._titleFontSize, 0.7, 14) }px;
                color: var(--secondary-text-color);
                margin-top: -12px;
            }

            .collapsed .content {
                display: none;
            }
        `;

        this._shadow.innerHTML = `
            <div class="card">
                <div class="cardname ${this._title ? '' : 'hidden'}" id="cardtitle">
                    <ha-icon id="titleicon" ${this._titleIcon ? ' class="cardname-icon"' : ' class="hidden"'} icon="${this._titleIcon}"></ha-icon>
                    ${this._title}
                    <span id="titlealert" class="hidden cardname-alert">\u26A0</span>
                </div>

                <div class="cardname ${this._title ? '' : 'hidden'}" id="cardtitledesc">
                    <ha-icon id="titleicondesc" class="hidden cardname-alert-desc-icon" icon="mdi:calendar-clock"></ha-icon>
                    <span id="titlealertdesc" class="hidden cardname-alert-desc">innerHTML</span>
                </div>

                <div id="collapsible">
                    <div id="inputRow" class="input-row ${this._showInputMask ? '' : 'hidden'}">
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
                        ${this._subText }
                    </div>

                    <div id="containerClass" class="${containerClass}">
                        <div id="inputPosition" class="input-position">
                            <ul id="list"><li>${translate("ui.common.loading_list")}</li></ul>
                        </div>
                        <div class="history" id="history"></div>
                    </div>

                    <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                        ${this._showMessageButton   ? `<button id="msgBtn" style="font-size:18px; background:none; border:none; cursor:pointer;">&#x2709;&#xFE0F;</button> ` : ``}
                        ${this._showAdminButton     ? `<button id="adminBtn" style="font-size:18px; background:none; border:none; cursor:pointer;">&#x2699;&#xFE0F;</button> ` : ``}
                        ${this._showExportButtonPdf ? `<button id="pdfBtn">${translate("ui.common.export_pdf")}</button> &#160;`  : ``}
                        ${this._showExportButton    ? `<button id="downloadBtn">${translate("ui.common.export")}</button> &#160;` : ``}
                        ${this._showClearButton     ? `<button id="clearBtn">${translate("editor.labels.clear_button")}</button>` : ``}
                    </div>
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
        if (this._title)               this._shadow.getElementById('cardtitle').addEventListener('click', () => this._collapse());
        if (this._title)               this._shadow.getElementById('cardtitledesc').addEventListener('click', () => this._collapse());
        if (this._showAdminButton)     this._shadow.getElementById('adminBtn').addEventListener('click', () => this._adminOptions());
        if (this._showMessageButton)   this._shadow.getElementById('msgBtn').addEventListener('click', () => this._notifyButtonPressed());

        this._listEl             = this._shadow.getElementById('list');
        this._historyEl          = this._shadow.getElementById('history');
        this._inputEl            = this._shadow.getElementById('itemInput');
        this._qtyEl              = this._shadow.getElementById('quantitySelect');
        this._titleAlert         = this._shadow.getElementById('titlealert');
        this._titleAlertDesc     = this._shadow.getElementById('titlealertdesc');
        this._titleAlertDescIcon = this._shadow.getElementById('titleicondesc');

        this._renderHistory();
		
		// Bubble Card WorkAround
        if(this._bubbleCardMode){
            requestAnimationFrame(() => {
                const card = this._shadow.querySelector('.card');
                card.style.minHeight = window.outerHeight + "px";

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

        // Input Row Positioning
        this._positionInputRow() ;
        window.addEventListener('resize', () => {
            this._positionInputRow();
        });
    }


// Admin Options Popup
async _adminOptions() {
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

        // Popup
        const popup = document.createElement('div');
        popup.style.background = 'var(--card-background-color, white)';
        popup.style.padding = '16px';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        popup.style.maxWidth = '420px';
        popup.style.width = '90%';
        popup.style.textAlign = 'center';
        popup.style.fontFamily = 'var(--ha-card-font-family, Roboto, sans-serif)';
        popup.style.color = 'var(--primary-text-color, black)';
        popup.style.pointerEvents = 'auto';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.gap = '20px';

        // Title
        const title = document.createElement('h2');
        title.textContent = translate("ui.admin.options");
        title.style.margin = '0 0 4px 0';
        title.style.fontSize = '20px';
        popup.appendChild(title);

        // Browser Chips
        const block1Container = document.createElement('div');
        block1Container.style.textAlign = 'left';

        const block1Label = document.createElement('label');
        block1Label.textContent = translate("ui.admin.options.browser_chips");
        block1Label.style.fontWeight = '600';
        block1Label.style.display = 'block';
        block1Label.style.marginBottom = '4px';

        const block1Textarea = document.createElement('textarea');
        block1Textarea.style.width = '100%';
        block1Textarea.style.height = '90px';
        block1Textarea.style.boxSizing = 'border-box';
        block1Textarea.style.padding = '10px';
        block1Textarea.style.resize = 'vertical';
        block1Textarea.style.border = '1px solid var(--divider-color, #ccc)';
        block1Textarea.style.borderRadius = '4px';
        block1Textarea.style.fontSize = '14px';

        // Buttons container
        const block1Buttons = document.createElement('div');
        block1Buttons.style.marginTop = '6px';
        block1Buttons.style.display = 'flex';
        block1Buttons.style.gap = '8px';

        // Copy Browser Chips Button
        const block1CopyBtn = document.createElement('button');
        block1CopyBtn.textContent = translate("ui.admin.options.browser_chips_copy");
        block1CopyBtn.style.backgroundColor = 'var(--primary-color, #03A9F4)';
        block1CopyBtn.style.color = 'white';
        block1CopyBtn.style.border = 'none';
        block1CopyBtn.style.padding = '6px 12px';
        block1CopyBtn.style.borderRadius = '4px';
        block1CopyBtn.style.cursor = 'pointer';

        block1CopyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block1Textarea.value);
                block1CopyBtn.style.filter = "brightness(0.8)";
                setTimeout(() => (block1CopyBtn.style.filter = ""), 200);
            } catch {
                // Fallback
                const ta = document.createElement('textarea');
                ta.value = block1Textarea.value;
                document.body.appendChild(ta);
                ta.select();
                try {
                    const success = document.execCommand('copy');
                    if (!success) throw new Error('execCommand copy failed');
                        block1CopyBtn.style.filter = "brightness(0.8)";
                        setTimeout(() => (block1CopyBtn.style.filter = ""), 200);
                } catch {
                    alert("Copy failed – Clipboard API not available?");
                }
                document.body.removeChild(ta);
            }
        });

        // Delete Browser Chips Button
        const block1DeleteBtn = document.createElement('button');
        block1DeleteBtn.textContent = translate("ui.admin.options.browser_chips_delete");
        block1DeleteBtn.style.backgroundColor = 'var(--warn-color, #f44336)';
        block1DeleteBtn.style.color = 'white';
        block1DeleteBtn.style.border = 'none';
        block1DeleteBtn.style.padding = '6px 12px';
        block1DeleteBtn.style.borderRadius = '4px';
        block1DeleteBtn.style.cursor = 'pointer';

        block1DeleteBtn.addEventListener('click', async () => {

        if (!this.confirmPopup(translate("ui.admin.options.browser_chips_delete_con"))) return;
            // Clear history array and localStorage, update textarea
            this._previous = [];
            this._saveHistory();
            this._renderHistory();
            block1Textarea.value = "";
        });

        block1Buttons.appendChild(block1CopyBtn);
        block1Buttons.appendChild(block1DeleteBtn);

        block1Container.appendChild(block1Label);
        block1Container.appendChild(block1Textarea);
        block1Container.appendChild(block1Buttons);

        // Dynamic Categories
        const block2Container = document.createElement('div');
        block2Container.style.textAlign = 'left';

        const block2Label = document.createElement('label');
        block2Label.textContent = translate("ui.admin.options.dynamic_categories");
        block2Label.style.fontWeight = '600';
        block2Label.style.display = 'block';
        block2Label.style.marginBottom = '4px';

        const block2Textarea = document.createElement('textarea');
        block2Textarea.style.width = '100%';
        block2Textarea.style.height = '90px';
        block2Textarea.style.boxSizing = 'border-box';
        block2Textarea.style.padding = '10px';
        block2Textarea.style.resize = 'vertical';
        block2Textarea.style.border = '1px solid var(--divider-color, #ccc)';
        block2Textarea.style.borderRadius = '4px';
        block2Textarea.style.fontSize = '14px';

        const block2CopyBtn = document.createElement('button');
        block2CopyBtn.textContent = translate("ui.admin.options.dynamic_categories_copy");
        block2CopyBtn.style.marginTop = '6px';
        block2CopyBtn.style.backgroundColor = 'var(--primary-color, #03A9F4)';
        block2CopyBtn.style.color = 'white';
        block2CopyBtn.style.border = 'none';
        block2CopyBtn.style.padding = '6px 12px';
        block2CopyBtn.style.borderRadius = '4px';
        block2CopyBtn.style.cursor = 'pointer';

        block2CopyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block2Textarea.value);
                block2CopyBtn.style.filter = "brightness(0.8)";
                setTimeout(() => (block2CopyBtn.style.filter = ""), 200);
            } catch {
                const ta = document.createElement('textarea');
                ta.value = block2Textarea.value;
                document.body.appendChild(ta);
                ta.select();
                try {
                    const success = document.execCommand('copy');
                    if (!success) throw new Error('execCommand copy failed');
                    block2CopyBtn.style.filter = "brightness(0.8)";
                    setTimeout(() => (block2CopyBtn.style.filter = ""), 200);
                } catch {
                    alert("Copy failed – Clipboard API not available?");
                }
                document.body.removeChild(ta);
            }
        });

        // Append label + textarea
        block2Container.appendChild(block2Label);
        block2Container.appendChild(block2Textarea);

        // Buttons container for block2 (copy + checkbox side-by-side)
        const block2Controls = document.createElement('div');
        block2Controls.style.display = 'flex';
        block2Controls.style.alignItems = 'center';
        block2Controls.style.gap = '8px';
        block2Controls.style.marginTop = '6px';

        block2Controls.appendChild(block2CopyBtn);

        // Checkbox: Include Items
        const includeItemsContainer = document.createElement('div');
        includeItemsContainer.style.display = 'flex';
        includeItemsContainer.style.alignItems = 'center';
        includeItemsContainer.style.gap = '6px';

        const includeItemsCheckbox = document.createElement('input');
        includeItemsCheckbox.type = 'checkbox';
        includeItemsCheckbox.id = 'includeItemsCheckbox';

        const includeItemsLabel = document.createElement('label');
        includeItemsLabel.setAttribute('for', 'includeItemsCheckbox');
        includeItemsLabel.textContent = translate("ui.admin.options.dynamic_categories_include");

        includeItemsContainer.appendChild(includeItemsCheckbox);
        includeItemsContainer.appendChild(includeItemsLabel);

        block2Controls.appendChild(includeItemsContainer);
        block2Container.appendChild(block2Controls);

        // --- Block 3: Manual Assigned Items ---
        const block3Container = document.createElement('div');
        block3Container.style.textAlign = 'left';

        const block3Label = document.createElement('label');
        block3Label.textContent = translate("ui.admin.options.manual_assigned");
        block3Label.style.fontWeight = '600';
        block3Label.style.display = 'block';
        block3Label.style.marginBottom = '4px';

        const block3Textarea = document.createElement('textarea');
        block3Textarea.style.width = '100%';
        block3Textarea.style.height = '90px';
        block3Textarea.style.boxSizing = 'border-box';
        block3Textarea.style.padding = '10px';
        block3Textarea.style.resize = 'vertical';
        block3Textarea.style.border = '1px solid var(--divider-color, #ccc)';
        block3Textarea.style.borderRadius = '4px';
        block3Textarea.style.fontSize = '14px';

        // Buttons container side-by-side for block3 buttons
        const block3Buttons = document.createElement('div');
        block3Buttons.style.marginTop = '6px';
        block3Buttons.style.display = 'flex';
        block3Buttons.style.gap = '8px';

        // Copy Manual Assigned Items Button
        const block3CopyBtn = document.createElement('button');
        block3CopyBtn.textContent = translate("ui.admin.options.manual_assigned_copy");
        block3CopyBtn.style.backgroundColor = 'var(--primary-color, #03A9F4)';
        block3CopyBtn.style.color = 'white';
        block3CopyBtn.style.border = 'none';
        block3CopyBtn.style.padding = '6px 12px';
        block3CopyBtn.style.borderRadius = '4px';
        block3CopyBtn.style.cursor = 'pointer';

        block3CopyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block3Textarea.value);
                block3CopyBtn.style.filter = "brightness(0.8)";
                setTimeout(() => (block3CopyBtn.style.filter = ""), 200);
            } catch {
                const ta = document.createElement('textarea');
                ta.value = block3Textarea.value;
                document.body.appendChild(ta);
                ta.select();
                try {
                    const success = document.execCommand('copy');
                    if (!success) throw new Error('execCommand copy failed');
                    block3CopyBtn.style.filter = "brightness(0.8)";
                    setTimeout(() => (block3CopyBtn.style.filter = ""), 200);
                } catch {
                    alert("Copy failed – Clipboard API not available?");
                }
                document.body.removeChild(ta);
            }
        });

        // Toggle Checkbox: Include Defined Items
        const includeDefinedContainer = document.createElement("div");
        includeDefinedContainer.style.display = "flex";
        includeDefinedContainer.style.alignItems = "center";
        includeDefinedContainer.style.gap = "6px";

        const includeDefinedCheckbox = document.createElement("input");
        includeDefinedCheckbox.type = "checkbox";
        includeDefinedCheckbox.id = "includeDefinedCheckbox";

        const includeDefinedLabel = document.createElement("label");
        includeDefinedLabel.setAttribute("for", "includeDefinedCheckbox");
        includeDefinedLabel.textContent = translate("ui.admin.options.manual_assigned_include");

        includeDefinedCheckbox.addEventListener("change", () => {
            const val = includeDefinedCheckbox.checked;
            /*
            includeDefinedLabel.textContent = val
                ? "Include only new items"
                : "Include already defined items";
            */
            this._includeDefined = val;
            computeManualItems(val);
        });

        includeDefinedContainer.appendChild(includeDefinedCheckbox);
        includeDefinedContainer.appendChild(includeDefinedLabel);

        block3Buttons.appendChild(block3CopyBtn);
        block3Buttons.appendChild(includeDefinedContainer);

        block3Container.appendChild(block3Label);
        block3Container.appendChild(block3Textarea);
        block3Container.appendChild(block3Buttons);

        // Add all blocks to popup
        popup.appendChild(block1Container);
        popup.appendChild(block2Container);
        popup.appendChild(block3Container);

        // --- Fill Browser Chips ---
        const browserChips = this._loadHistory();
        if (Array.isArray(browserChips)) {
            block1Textarea.value = browserChips.join(", ");
        }

        // --- Fill Dynamic Categories ---
        try {
            const dynamicCats = this._getDynamicCategories() || [];

            const formatted = dynamicCats
                .map(cat => `- name: ${cat.name}`)
                .join("\n");

            block2Textarea.value = formatted;
        } catch (e) {
            block2Textarea.value = "Error reading categories.";
            console.error(e);
        }

        const localCats = this._getLocalCategories() || [];
        const dynamicCats = this._getDynamicCategories() || [];
        const globalCats = this._globalCategories || [];

        function isCategoryDynamic(catName) {
            return dynamicCats.some(dc => dc.name === catName);
        }

        function isItemInCategories(itemName, categories) {
            return categories.some(cat => cat.items && cat.items.includes(itemName));
        }

        // computeDynamicCategories
        const computeDynamicCategories = (includeItems) => {
            const dynamicCatsList = this._getDynamicCategories() || [];
            const items = Array.isArray(this._items) ? this._items : [];

            if (!includeItems) {
                const formatted = dynamicCatsList
                    .map(cat => `- name: ${cat.name}`)
                    .join("\n");
                block2Textarea.value = formatted || "";
                return;
            }

            const grouped = {};

            for (const it of items) {
                const catName = this._getCategory(it.name);
                if (!catName || catName === "none") continue;

                // only dynamic cats
                if (!dynamicCatsList.some(dc => dc.name === catName)) continue;

                const itemName = this._getNameOnly(it.name);
                if (!grouped[catName]) grouped[catName] = [];
                // avoid duplicates
                if (!grouped[catName].includes(itemName)) grouped[catName].push(itemName);
            }

            // Format:
            // - name: Cat
            //   items:
            //     - Item1
            //     - Item2
            const formatted = dynamicCatsList.map(dc => {
                const catItems = grouped[dc.name] || [];
                if (catItems.length === 0) {
                    return `- name: ${dc.name}\n  items: []`;
                }
                const itemsFormatted = catItems.map(it => `    - ${it}`).join("\n");
                return `- name: ${dc.name}\n  items:\n${itemsFormatted}`;
            }).join("\n");

            block2Textarea.value = formatted || "";
        };

        includeItemsCheckbox.addEventListener('change', () => {
            const include = includeItemsCheckbox.checked;
            computeDynamicCategories(include);
        });

        // initial fill (default: without Items)
        computeDynamicCategories(false);

        this._includeDefined = false;

        const computeManualItems = (includeDefined) => {
            const manualAssignedItems = [];

            function findCategoryByName(catName) {
                return (
                    localCats.find(c => c.name === catName) ||
                    globalCats.find(c => c.name === catName) ||
                    dynamicCats.find(c => c.name === catName) ||
                    { name: catName }
                );
            }

            for (const item of this._items) {
                const catName = this._getCategory(item.name);
                if (!catName || catName === "none") continue;
                if (isCategoryDynamic(catName)) continue;

                const itemName = this._getNameOnly(item.name);

                const inLocal = isItemInCategories(itemName, localCats);
                const inGlobal = isItemInCategories(itemName, globalCats);

                if (includeDefined) {
                    manualAssignedItems.push({ name: itemName, category: findCategoryByName(catName) });
                } else {
                    if (!inLocal && !inGlobal) {
                        manualAssignedItems.push({ name: itemName, category: findCategoryByName(catName) });
                    }
                }
            }

            const grouped = manualAssignedItems.reduce((acc, curr) => {
                const catName = curr.category.name || curr.category;
                if (!acc[catName]) acc[catName] = [];
                acc[catName].push(curr.name);
                return acc;
            }, {});

            const originalOrder = [
                ...localCats.map(c => c.name),
                ...globalCats.map(c => c.name)
            ];

            const formattedManualItems = originalOrder
                .map(catName => {
                    const items = grouped[catName] || [];

                    let catObj = manualAssignedItems.find(i =>
                        (i.category.name || i.category) === catName
                    )?.category;

                    // if no items are assigned to this category
                    if (!catObj) {
                        catObj =
                            localCats.find(c => c.name === catName) ||
                            globalCats.find(c => c.name === catName) ||
                            null;
                    }

                    const extraLines = [];
                    if (catObj && this._includeDefined) {
                        if (catObj.icon) extraLines.push(`  icon: ${catObj.icon}`);
                        if (catObj.bgcolor) extraLines.push(`  bgcolor: "${catObj.bgcolor}"`);
                    }
                    const extraProps = extraLines.join("\n");

                    // with items
                    if (items.length > 0) {
                        const itemsFormatted = items.map(item => `    - ${item}`).join("\n");
                        return extraProps
                            ? `- name: ${catName}\n${extraProps}\n  items:\n${itemsFormatted}`
                            : `- name: ${catName}\n  items:\n${itemsFormatted}`;
                    }

                    // without items
                    if (this._includeDefined) {
                        return extraProps ? `- name: ${catName}\n${extraProps}` : `- name: ${catName}`;
                    }

                    return "";
                })
                .filter(Boolean)
                .join("\n");

            block3Textarea.value = formattedManualItems || "";
        };

        let includeDefined = false;
        computeManualItems(includeDefined);

        // Close Button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = translate("ui.common.close");
        closeBtn.style.backgroundColor = 'var(--secondary-background-color, #eee)';
        closeBtn.style.border = 'none';
        closeBtn.style.padding = '8px 16px';
        closeBtn.style.borderRadius = '4px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.marginTop = '10px';

        closeBtn.addEventListener('click', () => {
            document.body.removeChild(overlay);
            resolve(true);
        });

        popup.appendChild(closeBtn);

        // Append popup and overlay
        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        // Close on overlay click outside popup
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
                resolve(null);
            }
        });

        // Close on ESC key
        window.addEventListener('keydown', function handler(e) {
            if (e.key === "Escape") {
                window.removeEventListener('keydown', handler);
                if (document.body.contains(overlay)) document.body.removeChild(overlay);
                resolve(null);
            }
        });
    });
}

    // Input Row Positioning
    _positionInputRow() {
        if (this._inputRowPosition === 'top') return;
        const inputRow = this._shadow.getElementById("inputRow");
        const listEl = this._shadow.getElementById("list");
        const historyEl = this._shadow.getElementById("history");
        const container = historyEl.parentElement;
        const chipPosition = this._chipPosition;
        const windowWidth = window.innerWidth;

        if (inputRow && listEl && historyEl && container) {
            if (chipPosition === 'bottom' || chipPosition === 'none') {
            if (inputRow.parentElement !== container) {
                inputRow.remove();
                listEl.insertAdjacentElement('afterend', inputRow);
            }
            } else if (chipPosition === 'right' || chipPosition === 'panel' 
                    || (chipPosition === 'auto_panel' && windowWidth >= 700)
                    || (chipPosition === 'auto' && windowWidth >= 700)) {
                if (inputRow.parentElement === container) {
                    container.removeChild(inputRow);
                }
                inputRow.remove();
                listEl.insertAdjacentElement('afterend', inputRow);
            } else if (chipPosition === 'auto_panel' && windowWidth < 700 || chipPosition === 'auto' && windowWidth < 700) {
                if (inputRow.parentElement !== container) {
                    inputRow.remove();
                    listEl.insertAdjacentElement('afterend', inputRow);
                }
            }
        }
    }

	// EAN
	async _checkEAN(text) {
        // 1st localEAN check - EAN-8, UPC (12), EAN-13 er GS1-14
        const eanRegexL = /^\d{8}$|^\d{12}$|^\d{13}$|^\d{14}$/;
        if (!eanRegexL.test(text)) {
            return { name: text, brands: null, imageUrl: null };
        }

        if (this._localEAN && Array.isArray(this._localEAN)) {
            const localEntry = this._localEAN.find(entry => entry.ean === text);
            if (localEntry) {
                if (debugMode) console.log("[EAN] Local entry found:", localEntry);
                return {
                    name: localEntry.name,
                    brands: null,
                    imageUrl: null
                };
            }
        }

        // 2nd internet EAN check
        const eanRegex = /^\d{13}$/;
        if (!eanRegex.test(text)) {
            return { name: text, brands: null, imageUrl: null };
        }        

        const url = `https://world.openfoodfacts.org/api/v2/product/${text}.json`;

        try {
            const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
                "User-Agent": "Home Assistant - Custom Card (Improved Shopping List v2.2.0)"
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
        if(debugMode) console.debug("[ha-shopping-list-improved] _refresh() called");

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
            
            // after we have the items, extract dynamic categories from items
            this._addDynamicCategories(this._items);

            this._renderList();
        } catch (err) {
            console.error("[ha-shopping-list-improved]: unable to load items via API", err);
        }
    }

    _collapse() {
        const container = this._shadow.getElementById("collapsible");
        const storageKey = this._entity + "_collapsed";

        const isHidden = container.classList.toggle("hidden");
        localStorage.setItem(storageKey, isHidden ? "true" : "false");
    }

    _renderList() {
        if(debugMode) console.info("[ha-shopping-list-improved] _renderList() called");
        this._messageCache = "";

        if (!this._hass) return;
        if (!this._listEl) return;

        this._listEl.innerHTML = '';
        if (!this._items.length) {
            this._listEl.innerHTML = `<li class="small">${translate("editor.labels.no_items")}</li>`;
            return;
        }

        this._titleAlert.classList.add("hidden");
        this._titleAlertDesc.classList.add("hidden");
        this._titleAlertDescIcon.classList.add("hidden");

        let nearestDueDateGlobalObj = null;

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
            let nearestDueDate = null;
            let nearestDueDateObj = null;

            if (this._mode === "todo") {
                const now = new Date();
                done = uncategorized.filter(i => {
                    //if (!i.due) return true;
                    if (i.complete) return true;
                    const dueDate = new Date(i.due);
                    return dueDate >= now;
                }).length;

                const futureItemsWithDue = uncategorized
                    .filter(i => !i.complete) 
                    .filter(i => i.due)
                    .map(i => ({
                        dueDate: new Date(i.due),
                        dueString: i.due
                    }))
                    .filter(d => d.dueDate > now);

                if (futureItemsWithDue.length > 0) {
                    const nextItem = futureItemsWithDue.reduce((earliest, current) =>
                        current.dueDate < earliest.dueDate ? current : earliest
                    );

                    nearestDueDateObj = {
                        dueDate: nextItem.dueDate,
                        dueString: nextItem.dueString
                    };

                    if (nearestDueDateObj) {
                        if (
                            !nearestDueDateGlobalObj ||
                            nearestDueDateObj.dueDate < nearestDueDateGlobalObj.dueDate
                        ) {
                            nearestDueDateGlobalObj = nearestDueDateObj;
                        }
                    }

                    nearestDueDate = this._formatDueDate(nextItem.dueDate, nextItem.dueString);
                }

            } else {
                done = uncategorized.filter(i => i.complete).length;
            }
            
            if(debugMode) console.log("WithOutCategory - Nearest Due Date (formatted):", nearestDueDate);

            const storageKey = `${this._entity}_category_no_category`;
            const collapsed = localStorage.getItem(storageKey) === 'true';

            const liCat = document.createElement('li');
            liCat.classList.add('category-header');
            liCat.style.padding = '4px 8px';
            liCat.style.borderRadius = '4px';
            liCat.style.cursor = 'pointer';
            liCat.style.userSelect = 'none';

            const container = document.createElement('div');
            container.style.display = 'inline-flex';
            container.style.alignItems = 'center';
            container.style.gap = '6px';

            // Icon for uncategorized
            const catIcon = "mdi:folder-question";

            if (catIcon) {
                // doubleSizedIcon
                const base = this._catFontSize;
                const size = this._doubleSizedIcon && this._mode === "todo" && this._showCatNextDue ? base * 1.6 : base;

                const iconEl = document.createElement('ha-icon');
                iconEl.setAttribute('icon', catIcon);
                iconEl.style.width = `${size}px`;
                iconEl.style.height = `${size}px`;
                iconEl.style.setProperty('--mdc-icon-size', `${size}px`);
                iconEl.style.display = 'inline-flex';
                iconEl.style.alignItems = 'center';
                iconEl.style.justifyContent = 'center';
                iconEl.style.flexShrink = '0';

                container.appendChild(iconEl);
            }

            // Textcontainer with Name + Count + nearestDueDate
            const textContainer = document.createElement('div');
            textContainer.style.display = 'flex';
            textContainer.style.flexDirection = 'column';

            const firstRow = document.createElement('div');
            firstRow.style.display = 'flex';
            firstRow.style.justifyContent = 'flex-start';
            firstRow.style.alignItems = 'center';

            const nameDiv = document.createElement('div');
            nameDiv.textContent = translate("ui.todo.general");
            firstRow.appendChild(nameDiv);

            if (this._showCatCount) {
                const doneDiv = document.createElement('div');
                doneDiv.textContent = `(${done}/${total})`;
                doneDiv.style.marginLeft = '8px';
                doneDiv.style.whiteSpace = 'nowrap';
                firstRow.appendChild(doneDiv);
            }

            if (this._mode === "todo" && done < total && this._showCatExclamation) {
                const warningEl = document.createElement('span');
                warningEl.textContent = ' \u26A0';
                warningEl.style.marginLeft = '8px';
                firstRow.appendChild(warningEl);
            }

            textContainer.appendChild(firstRow);

            if (this._mode === "todo" && nearestDueDate && this._showCatNextDue ) {
                const smallerFontSize = getSmallerFontSize(this._catFontSize, 0.8, 14);

                const dueDiv = document.createElement('div');
                dueDiv.style.fontSize = smallerFontSize + 'px';
                dueDiv.style.color = 'var(--secondary-text-color)';
                dueDiv.style.marginTop = '-7px';
                dueDiv.style.display = 'flex';
                dueDiv.style.alignItems = 'center';
                dueDiv.style.gap = '6px';

                const icon = document.createElement('ha-icon');
                icon.setAttribute('icon', 'mdi:calendar-clock');
                icon.style.verticalAlign = 'middle';
                icon.style.fontSize = smallerFontSize + 'px';
                icon.style.setProperty('--mdc-icon-size', smallerFontSize + 'px');

                dueDiv.appendChild(icon);
                dueDiv.appendChild(document.createTextNode(nearestDueDate));

                textContainer.appendChild(dueDiv);
            }

            container.appendChild(textContainer);

            if (this._mode === "todo" && done < total && this._showCatExclamation) {
                const warningEl = document.createElement('span');
                warningEl.textContent = ' \u26A0';
                //container.appendChild(warningEl);
            }

            if (this._mode === "todo" && done < total && this._showTitleExclamation) {
                this._titleAlert.classList.remove("hidden");
            }

            liCat.appendChild(container);
            this._listEl.appendChild(liCat);

            const itemsContainer = document.createElement('div');
            itemsContainer.style.margin = '4px 0 12px 0';
            itemsContainer.style.display = collapsed ? 'none' : 'block';

            // Add also to message list aka this._messageCache
            this._messageCache += `\n<b><u>${translate("ui.todo.general")}</u></b>\n`;

            uncategorized.forEach(item => {
                this._renderItem(item, itemsContainer);

                let nameOnly = this._getNameOnly(item.name);
                let qty = this._getQuantity(item.name);
                let displayName = nameOnly;

                if (qty > 1 || this._showQuantityOne) {
                    displayName = this._quantityPosition === "beginning"
                        ? `${qty}× ${nameOnly}`
                        : `${nameOnly} (${qty})`;
                }

                this._messageCache += `- ${item.complete ? `<s>${displayName}</s>` : displayName}\n`;
            });

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
                let nearestDueDate = null;
                let nearestDueDateObj = null;

                if (this._mode === "todo") {
                    const now = new Date();

                    done = catItems.filter(i => {
                        if (i.complete) return true;
                        //if (!i.due) return true;
                        const dueDate = new Date(i.due);
                        return dueDate >= now;
                    }).length;

                    const futureItemsWithDue = catItems
                        .filter(i => !i.complete) 
                        .filter(i => i.due)
                        .map(i => ({ 
                            dueDate: new Date(i.due), 
                            dueString: i.due 
                        }))
                        .filter(d => d.dueDate > now);

                    if (futureItemsWithDue.length > 0) {
                        const nextItem = futureItemsWithDue.reduce((earliest, current) =>
                            current.dueDate < earliest.dueDate ? current : earliest
                        );

                        nearestDueDateObj = {
                            dueDate: nextItem.dueDate,
                            dueString: nextItem.dueString
                        };

                        if (nearestDueDateObj) {
                            if (
                                !nearestDueDateGlobalObj ||
                                nearestDueDateObj.dueDate < nearestDueDateGlobalObj.dueDate
                            ) {
                                nearestDueDateGlobalObj = nearestDueDateObj;
                            }
                        }

                        nearestDueDate = this._formatDueDate(nextItem.dueDate, nextItem.dueString);
                    }
                } else {
                    done = catItems.filter(i => i.complete).length;
                }

                if(debugMode) console.log("WithCategory - Nearest Due Date (formatted):", nearestDueDate);

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
                    // doubleSizedIcon
                    const base = this._catFontSize;
                    const size = this._doubleSizedIcon && this._mode === "todo" && this._showCatNextDue ? base * 1.6 : base;

                    const iconEl = document.createElement('ha-icon');
                    iconEl.setAttribute('icon', cat.icon);
                    iconEl.style.width = `${size}px`;
                    iconEl.style.height = `${size}px`;
                    iconEl.style.setProperty('--mdc-icon-size', `${size}px`);
                    iconEl.style.display = 'inline-flex';
                    iconEl.style.alignItems = 'center';
                    iconEl.style.justifyContent = 'center';
                    iconEl.style.flexShrink = '0';

                    container.appendChild(iconEl);
                }

                const textContainer = document.createElement('div');
                textContainer.style.display = 'flex';
                textContainer.style.flexDirection = 'column';

                const firstRow = document.createElement('div');
                firstRow.style.display = 'flex';
                firstRow.style.justifyContent = 'flex-start';
                firstRow.style.alignItems = 'center';

                const nameDiv = document.createElement('div');
                nameDiv.textContent = cat.name;

                firstRow.appendChild(nameDiv);

                if (this._showCatCount) {
                    const doneDiv = document.createElement('div');
                    doneDiv.textContent = `(${done}/${total})`;
                    doneDiv.style.marginLeft = '8px';
                    doneDiv.style.whiteSpace = 'nowrap';
                    firstRow.appendChild(doneDiv);
                }

                if (this._mode === "todo" && done < total && this._showCatExclamation) {
                    const warningEl = document.createElement('span');
                    warningEl.textContent = ' \u26A0';
                    warningEl.style.marginLeft = '8px';
                    firstRow.appendChild(warningEl);
                }

                textContainer.appendChild(firstRow);
                
                if (this._mode === "todo" && nearestDueDate &&  this._showCatNextDue) {
                    const smallerFontSize = getSmallerFontSize(this._catFontSize, 0.8, 14);

                    const dueDiv = document.createElement('div');
                    dueDiv.style.fontSize = smallerFontSize + 'px';
                    dueDiv.style.color = 'var(--secondary-text-color)';
                    dueDiv.style.marginTop = '-7px';
                    dueDiv.style.display = 'flex';
                    dueDiv.style.alignItems = 'center';
                    dueDiv.style.gap = '6px';

                    const icon = document.createElement('ha-icon');
                    icon.setAttribute('icon', 'mdi:calendar-clock');
                    icon.style.verticalAlign = 'middle';
                    icon.style.fontSize = smallerFontSize + 'px';
                    icon.style.setProperty('--mdc-icon-size', smallerFontSize + 'px');

                    dueDiv.appendChild(icon);
                    dueDiv.appendChild(document.createTextNode(nearestDueDate));

                    textContainer.appendChild(dueDiv);
                }

                container.appendChild(textContainer);

                // Show icon if done < total in todo mode
                if (this._mode === "todo" && done < total && this._showCatExclamation) {
                    const warningEl = document.createElement('span');
                    warningEl.textContent = ' \u26A0';
                    //container.appendChild(warningEl);
                }

                if (this._mode === "todo" && done < total && this._showTitleExclamation) {
                    this._titleAlert.classList.remove("hidden");
                }

                liCat.appendChild(container);
                this._listEl.appendChild(liCat);

                const itemsContainer = document.createElement('div');
                itemsContainer.style.margin = '4px 0 12px 0';
                itemsContainer.style.display = collapsed ? 'none' : 'block';

                // Add also to message list aka this._messageCache
                this._messageCache += `\n<b><u>${cat.name}</u></b>\n`;

                catItems.forEach(item => {
                    this._renderItem(item, itemsContainer, cat);

                    let nameOnly = this._getNameOnly(item.name);
                    let qty = this._getQuantity(item.name);
                    let displayName = nameOnly;

                    if (qty > 1 || this._showQuantityOne) {
                        displayName = this._quantityPosition === "beginning"
                            ? `${qty}× ${nameOnly}`
                            : `${nameOnly} (${qty})`;
                    }

                    this._messageCache += `- ${item.complete ? `<s>${displayName}</s>` : displayName}\n`;
                });

                this._listEl.appendChild(itemsContainer);

                liCat.addEventListener('click', () => {
                    const isCollapsed = itemsContainer.style.display === 'none';
                    itemsContainer.style.display = isCollapsed ? 'block' : 'none';
                    localStorage.setItem(storageKey, isCollapsed ? 'false' : 'true');
                });
            }
        });

        if (nearestDueDateGlobalObj) {
            if (this._showTitleInfo) {
                if (this._showTitleInfoIcon) this._titleAlertDescIcon.classList.remove("hidden");
                this._titleAlertDesc.classList.remove("hidden");

                const formattedGlobal = this._formatDueDate(
                    nearestDueDateGlobalObj.dueDate,
                    nearestDueDateGlobalObj.dueString
                );

                if(debugMode) console.log("Next global due date: ", formattedGlobal);

                this._titleAlertDesc.textContent = formattedGlobal;    
            }
        }
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

    // local date-time format
    _formatDueDate(dueDate, dueString, locale) {
        const userLocale = locale || this._hass?.language || navigator.language || 'de-DE';

        if(debugMode) console.log("User locale for due date formatting:", userLocale);
        if(debugMode) console.log("User locale (hass) for due date formatting:", this._hass?.language);
        if(debugMode) console.log("User locale (navigator) for due date formatting:", navigator.language);
        
        const uses12HourFormat = (locale) => {
            const dtf = new Intl.DateTimeFormat(locale, { hour: 'numeric' });
            return dtf.resolvedOptions().hour12;
        };

        const is12Hour = uses12HourFormat(userLocale);

        const hasTime = dueString.includes('T') && dueString.includes(':');

        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            ...(hasTime ? { hour: '2-digit', minute: '2-digit', hour12: is12Hour } : {})
        };

        return dueDate.toLocaleString(userLocale, options);
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
            popup.style.maxWidth = '330px';
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

            // Own Categorie in Allow Dynamic Cat Mode
            const dynamicCategory = document.createElement('ha-textfield');
            dynamicCategory.type = 'input';
            dynamicCategory.value = '';
            dynamicCategory.style.width = '100%';
            dynamicCategory.style.padding = '6px 8px';
            dynamicCategory.style.marginBottom = '12px';
            dynamicCategory.style.border = '1px solid var(--divider-color, #ccc)';
            dynamicCategory.style.borderRadius = '4px';
            dynamicCategory.style.fontSize = '14px';
            dynamicCategory.style.boxSizing = 'border-box';
            //dynamicCategory.placeholder = 'Insert the name for the dynamic category...';
            dynamicCategory.label = translate("ui.common.dynamic_category");

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
            if(this._allowDynamicCats) popup.appendChild(dynamicCategory);
            
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

				// Chip selection for paste function
				function selectCategoryChip(categoryName) {
					Array.from(catContainer.children).forEach(c => {
						const cBg = c._chip.dataset.bgcolor || 'var(--secondary-background-color)';
						c._chip.style.background = cBg;
						c._chip.style.boxShadow = 'none';
						c._chip.style.transform = 'translateY(0)';
						c._chip.style.color = 'var(--primary-text-color)';
						c._underline.style.background = 'transparent';
					});

					let targetChipWrapper;

					if (categoryName === "none") {
						targetChipWrapper = catContainer.children[0];
					} else {
						targetChipWrapper = Array.from(catContainer.children).find(c => {
							const span = c._chip.querySelector('span');
							return span && span.textContent === categoryName;
						});
					}

					if (targetChipWrapper) {
						const bgColor = targetChipWrapper._chip.dataset.bgcolor || 'var(--secondary-background-color)';
						selectedCategory = categoryName;
						targetChipWrapper._chip.style.background = bgColor;
						targetChipWrapper._chip.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.4)';
						targetChipWrapper._chip.style.transform = 'translateY(1px)';
						targetChipWrapper._chip.style.color = 'white';
						targetChipWrapper._underline.style.background = bgColor || 'var(--primary-color)';
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
				dueDateInput.style.width = '130px';
				dueDateInput.style.height = '34px';

				dueTimeInput = document.createElement('input');
				dueTimeInput.type = 'time';
				dueTimeInput.style.width = '80px';
				dueTimeInput.style.height = '34px';

				// Copy / Paste Button animation
				if (!document.getElementById('btn-pressed-style')) {
				  const style = document.createElement('style');
				  style.id = 'btn-pressed-style';
				  style.textContent = `
					.btn-pressed {
					  filter: brightness(0.7);
					  transition: filter 0.2s ease;
					}
				  `;
				  document.head.appendChild(style);
				}

				function animateButtonPress(btn) {
				  btn.classList.add('btn-pressed');
				  setTimeout(() => {
					btn.classList.remove('btn-pressed');
				  }, 400);
				}

				// Copy Button
				const copyBtn = document.createElement('button');
				copyBtn.title = 'Copy date & time';
				copyBtn.style.cursor = 'pointer';
				copyBtn.style.border = 'none';
				copyBtn.style.background = 'transparent';
				copyBtn.style.padding = '4px';

				// Icon
				const copyIcon = document.createElement('ha-icon');
				copyIcon.setAttribute('icon', 'mdi:content-copy');
				copyBtn.appendChild(copyIcon);

				// Paste Button
				const pasteBtn = document.createElement('button');
				pasteBtn.title = 'Paste date & time';
				pasteBtn.style.cursor = 'pointer';
				pasteBtn.style.border = 'none';
				pasteBtn.style.background = 'transparent';
				pasteBtn.style.padding = '4px';

				// Icon
				const pasteIcon = document.createElement('ha-icon');
				pasteIcon.setAttribute('icon', 'mdi:content-paste');
				pasteBtn.appendChild(pasteIcon);

				// Copy action: localStorage
				copyBtn.addEventListener('click', () => {
					animateButtonPress(copyBtn);
					const copyObj = {
						date: dueDateInput.value || '',
						time: dueTimeInput.value || '',
						intervalInput: intervalInput.value || '',
						intervalUnitSelect: intervalUnitSelect.value || '',
						selectedCategory: selectedCategory || 'none'
					};
					try {
						localStorage.setItem('dueDateTimeData', JSON.stringify(copyObj));
						if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Saved due date/time to localStorage:", copyObj);
					} catch (e) {
						alert('Saving to localStorage failed');
					}
				});

				// Paste action: localStorage
				pasteBtn.addEventListener('click', () => {
					animateButtonPress(pasteBtn);
					try {
						const storedText = localStorage.getItem('dueDateTimeData');
						if (!storedText) {
							alert('No saved date/time data found in localStorage');
							return;
						}
						const obj = JSON.parse(storedText);
						if(obj.date !== undefined && obj.time !== undefined) {
							dueDateInput.value = obj.date;
							dueTimeInput.value = obj.time;
							intervalInput.value = obj.intervalInput || '';
							intervalUnitSelect.value = obj.intervalUnitSelect || '';
							
							if (obj.selectedCategory !== undefined) {
								// select the chip - optically
								selectCategoryChip(obj.selectedCategory);
								selectedCategory = obj.selectedCategory;
							}							
							
							if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Loaded due date/time from localStorage:", obj);
						} else {
							alert('Saved data in localStorage is invalid');
						}
					} catch(e) {
						alert('Failed to read/parse localStorage data');
					}
				});

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
				dueRow.appendChild(copyBtn);
				dueRow.appendChild(pasteBtn);
				container.appendChild(dueRow);

                popup.appendChild(container);
            }

            popup.appendChild(btnContainer);
            overlay.appendChild(popup);
            document.body.appendChild(overlay);

            // Focus the input when popup opens
            setTimeout(() => {
                const realInput = input.renderRoot?.querySelector("input");
                if (realInput) realInput.focus();
            }, 50);

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

            okBtn.addEventListener('click', () => {
                let finalName = input.value.trim();

                if (this._allowDynamicCats && dynamicCategory.value.trim() && finalName && finalName.trim()) {
                    selectedCategory = dynamicCategory.value.trim();
                }

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
        if(debugMode) console.info("[ha-shopping-list-improved] _renderItem() called");

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
            intervalDiv.style.color = 'var(--secondary-text-color)';

            firstRow.appendChild(nameDiv);
            firstRow.appendChild(intervalDiv);
            nameSpan.appendChild(firstRow);

            // DueDate
            const dueDate = new Date(item.due);
            const now = new Date();

            const formattedDate = this._formatDueDate(dueDate, item.due);

            const smallerFontSize = getSmallerFontSize(this._listFontSize, 0.8, 14);

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
                        dueDiv.style.color = 'var(--secondary-text-color)';
                    }
                } else {
                    dueDiv.style.color = 'var(--secondary-text-color)';
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

        // EDIT
        nameSpan.addEventListener('dblclick', () => this._handleEditItem(item));

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
                await this._notifyOnChange(translate("ui.message.quantity_increased") + ": " + nameOnly +  ` (${newQty})`);
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
                    await this._notifyOnChange(translate("ui.message.quantity_decreased") + ": " + nameOnly +  ` (${newQty})`);
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

    // save edited item
    async _handleEditItem(item) {
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
            
            const nameOnly = this._getNameOnly(newName);
            const newQty = this._getQuantity(newName);

            await this._refresh();
            await this._notifyOnChange(translate("ui.message.edited") + ": " + nameOnly +  ` (${newQty})`);
        } catch (err) {
            console.error('[ha-shopping-list-improved] Unable to rename item:', err);
        }
    }

    // add new item
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
            let msgNameOnly = "";
            let msgTask = "";
            let msgQty = "";

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

                msgNameOnly = inputName;
                msgTask = translate("ui.message.quantity_increased");
                msgQty = newQty;

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

                msgNameOnly = inputName;
                msgTask = translate("ui.message.item_added");
                msgQty = inputQty;

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
            await this._notifyOnChange(`${msgTask}: ${msgNameOnly} (${msgQty})`);
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

        if(debugMode) console.debug("ITEM: ", item);

        let completedStatusSwitch = null;
        if (item.complete) {
            completedStatusSwitch = translate("ui.todo.set.completed.false");
        } else {
            completedStatusSwitch = translate("ui.todo.set.completed.true");
        }

        const options = [
            { id: 'remove_due',   label: translate("ui.todo.remove_due"),   value: 'remove', disabled: disabled },
            { id: 'next_due',     label: translate("ui.todo.next_due"),     value: 'next',   disabled: disabled, checked: !disabled },
            { id: 'next_due_now', label: translate("ui.todo.next_due_now"), value: 'now',    disabled: disabled },
            { id: 'edit',         label: translate("ui.todo.edit"),         value: 'edit' },
            { id: 'delete',       label: translate("ui.todo.delete"),       value: 'delete', checked: disabled },
            { id: 'done',         label: completedStatusSwitch,             value: 'done' },
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
            } else if (selected === 'done') {
                await this._toggleComplete(item, true);

                document.body.removeChild(overlay);
                return;
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
                await this._handleEditItem(item);

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
                    await this._refresh();
                    await this._notifyOnChange();
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
                    await this._notifyOnChange();
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

    async _toggleComplete(item, toggleInToDoMode = false) {
        if (!this._entity) return;

        // ToDo Mode
        if (this._mode === "todo" && !toggleInToDoMode) {
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
            await this._notifyOnChange();
        } catch (err) {
            console.error("[ha-shopping-list-improved] Toggle complete failed", err);
        }
    }

    async _removeItem(item) {
        if (!this._entity) return;

		const itemNameOnly = this._getNameOnly(item.name);
        const itemQtyOnly  = this._getQuantity(item.name);
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
            await this._notifyOnChange(translate("ui.message.item_removed") + ": " + itemNameOnly +  ` (${itemQtyOnly})`);
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
            await this._notifyOnChange();
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
        if(debugMode) console.info("[ha-shopping-list-improved] _renderHistory() called");
if (!this._historyEl) {
    console.warn("[ha-shopping-list-improved] _historyEl NOT found");
    return;
}
        // collapable by title click
        const storageKey = this._entity + "_collapsed";
        const stored = localStorage.getItem(storageKey);

        if (stored === "true") {
            this._shadow.getElementById("collapsible").classList.add("hidden");
        }

		// Category Merge logic
        const mergeMode   = this._categoryMergeMode || "local_only";
        const localCats   = this._getLocalCategories();
        const globalCats  = Array.isArray(this._globalCategories) ? this._globalCategories : [];
        const dynamicCats = this._getDynamicCategories();
        const merged      = mergeCategories(mergeMode, localCats, globalCats, dynamicCats);
        this._categories  = merged;

		if (debugMode) {
            console.info("[ha-shopping-list-improved] Dynamic categories:", dynamicCats);
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
            if (this._chipPosition === 'none') return;
            const chip = document.createElement('div');
            chip.className = 'chip';
            chip.textContent = chipText;

            // check if chip is assigned to a category
            const catWithBg = this._categories?.find(
                c => c.bgcolor && c.items?.some(item => item.toLowerCase() === chipText.toLowerCase())
            );

			// Color Priority: Highlight > Category > Global > Standard > Local
			 if (this._highlightWords.some(word => word.toLowerCase() === chipText.toLowerCase())) {
				chip.style.background = this._highlightColor;
				chip.title = translate("editor.labels.chip_highlighted");
			} else if (catWithBg && this._chipsWithCatColor) {
                chip.style.background = catWithBg.bgcolor;
                chip.title = `${translate("editor.labels.category_color")}: ${catWithBg.name}`;
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

            // not valid
            if (cleanHex.length !== 6) {
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

    async _notifyButtonPressed(){
        if (this._mode !== "shopping") return; // not in ToDo Mode
        if ((!this._notifyEntity || !this._notifyEntity.trim()) && (!this._notifyEntitySMTP || !this._notifyEntitySMTP.trim())) {
            return;
        }
        await this._sendMessage();
        this.confirmPopup(translate("ui.message.sent"), true);
    }

    async _notifyOnChange(info = ""){
        if (this._notifyOnChangeEna !== true) return;
        if (this._mode !== "shopping") return; // not in ToDo Mode

        if(this._sendMessageDelay > 0){
            this._resetSendMessageTimer();
        }else{
            await this._sendMessage(info);
        }
    }

    async _sendMessage(info = ""){
        if (!this._hass || !this._hass.connection) return;

        if ((!this._notifyEntity || !this._notifyEntity.trim()) && (!this._notifyEntitySMTP || !this._notifyEntitySMTP.trim())) {
            return;
        }

        if (this._mode !== "shopping") return; // not in ToDo Mode

        // generate the message
        let message = "";
        if (info && info.trim()) {
            message += `${info.trim()}`;
        }

        const stateObj = this._hass.states[this._entity];
        const name = stateObj?.attributes?.friendly_name;

        if (this._notifyOnChangeAll && info && info.trim()){
            message = `${info.trim()}\n${this._messageCache}`;
        } else if (info && info.trim()){
            message = `${info.trim()}`;
        } else {
            message = this._messageCache;
        }
        
        // Standard Notification via 'real' notify 'send_message' service
        if (this._notifyEntity && this._notifyEntity.trim()) {
            await this._hass.connection.sendMessagePromise({
                type: "call_service",
                domain: "notify",
                service: "send_message",
                target: {
                    entity_id: this._notifyEntity
                },
                service_data: {
                    title: name,
                    message: message
                }
            });
        }

        //SMTP HTML Notification via custom notify service
        if (this._notifyEntitySMTP && this._notifyEntitySMTP.trim()) {
            await this._hass.connection.sendMessagePromise({
                type: "call_service",
                domain: "notify",
                service: this._notifyEntitySMTP, //"email_notification", 
                service_data: {
                    title: name,
                    message: "You have to enable HTML view",
                    data: {
                        html: message.replace(/\n/g, "<br>")
                    }
                }
            });
        }
    }

    _addToHistory(name){
        name = (name || '').trim();
        if(!name) return;

        const nameLower = name.toLowerCase();

        if (this._defaultChips?.some(chip => chip.toLowerCase() === nameLower) || !this._allowLocalChips) {
            if(debugMode) console.debug("[ha-shopping-list-improved][DEBUG] Name is already in DefaultChips (case-insensitive):", name);
            return;
        }

        const idx = this._previous.findIndex(x => x.toLowerCase() === nameLower);

        if(idx !== -1){
            const original = this._previous[idx];
            this._previous.splice(idx,1);
            this._previous.unshift(original);
        } else {
            this._previous.unshift(name);
        }

        this._previous = this._previous.slice(0,2000);
        this._saveHistory();
        this._renderHistory();
    }

	render(){ if (!this._hass) return; }
}


// removes Items from arr2, if they are in arr1 (via Name lowercase)
function filterUnique(arr1, arr2) {
    const names1 = new Set(arr1.map(c => c.name.toLowerCase()));
    return arr2.filter(c => !names1.has(c.name.toLowerCase()));
}

// sort array by name (case-insensitive)
function sortByName(arr) {
    return [...arr].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

/**
 * Merge Categories
 * @param {string} mergeMode
 * @param {Array} localCats
 * @param {Array} globalCats
 * @param {Array} dynamicCats
 * @returns {Array} merged categories
 */
function mergeCategories(mergeMode, localCats, globalCats, dynamicCats) {
    // Single source helpers
    const sortedLocal   = sortByName(localCats);
    const sortedGlobal  = sortByName(globalCats);
    const sortedDynamic = sortByName(dynamicCats);

    switch (mergeMode) {
        // 1-Cat
        case "standard_only": // old
        case "local_only": return [...localCats];
        case "global_only": return [...globalCats];
        case "dynamic_only": return [...dynamicCats];

        case "local_only_sorted": return sortedLocal;
        case "global_only_sorted": return sortedGlobal;
        case "dynamic_only_sorted": return sortedDynamic;

        // 2-Cat
        case "local_first": // old
        case "local_global":
            return [...localCats, ...filterUnique(localCats, globalCats)];
        case "local_dynamic":
            return [...localCats, ...filterUnique(localCats, dynamicCats)];
        case "dynamic_local":
            return [...dynamicCats, ...filterUnique(dynamicCats, localCats)];
        case "global_dynamic":
            return [...globalCats, ...filterUnique(globalCats, dynamicCats)];
        case "dynamic_global":
            return [...dynamicCats, ...filterUnique(dynamicCats, globalCats)];
        case "global_first": // old
        case "global_local":
            return [...globalCats, ...filterUnique(globalCats, localCats)];

        case "local_global_sorted":
            return [...sortedLocal, ...filterUnique(sortedLocal, sortedGlobal)];
        case "local_dynamic_sorted":
            return [...sortedLocal, ...filterUnique(sortedLocal, sortedDynamic)];
        case "dynamic_local_sorted":
            return [...sortedDynamic, ...filterUnique(sortedDynamic, sortedLocal)];
        case "global_dynamic_sorted":
            return [...sortedGlobal, ...filterUnique(sortedGlobal, sortedDynamic)];
        case "dynamic_global_sorted":
            return [...sortedDynamic, ...filterUnique(sortedDynamic, sortedGlobal)];
        case "global_local_sorted":
            return [...sortedGlobal, ...filterUnique(sortedGlobal, sortedLocal)];

        case "global_combined": // old
        case "local_global_sorted_total": {
            const all = [...localCats, ...filterUnique(localCats, globalCats)];
            return sortByName(all);
        }
        case "local_dynamic_sorted_total": {
            const all = [...localCats, ...filterUnique(localCats, dynamicCats)];
            return sortByName(all);
        }
        
        case "dynamic_local_sorted_total": {
            const all = [...dynamicCats, ...filterUnique(dynamicCats, localCats)];
            return sortByName(all);
        }
        case "global_dynamic_sorted_total": {
            const all = [...globalCats, ...filterUnique(globalCats, dynamicCats)];
            return sortByName(all);
        }
        
        case "dynamic_global_sorted_total": {
            const all = [...dynamicCats, ...filterUnique(dynamicCats, globalCats)];
            return sortByName(all);
        }

        case "global_local_sorted_total": {
            const all = [...globalCats, ...filterUnique(globalCats, localCats)];
            return sortByName(all);
        }

        // 3-Cat
        case "local_global_dynamic":
            return [
                ...localCats,
                ...filterUnique(localCats, globalCats),
                ...filterUnique([...localCats, ...globalCats], dynamicCats),
            ];
        case "local_dynamic_global":
            return [
                ...localCats,
                ...filterUnique(localCats, dynamicCats),
                ...filterUnique([...localCats, ...dynamicCats], globalCats),
            ];
        case "global_dynamic_local":
            return [
                ...globalCats,
                ...filterUnique(globalCats, dynamicCats),
                ...filterUnique([...globalCats, ...dynamicCats], localCats),
            ];
        case "global_local_dynamic":
            return [
                ...globalCats,
                ...filterUnique(globalCats, localCats),
                ...filterUnique([...globalCats, ...localCats], dynamicCats),
            ];
        case "dynamic_local_global":
            return [
                ...dynamicCats,
                ...filterUnique(dynamicCats, localCats),
                ...filterUnique([...dynamicCats, ...localCats], globalCats),
            ];
        case "dynamic_global_local":
            return [
                ...dynamicCats,
                ...filterUnique(dynamicCats, globalCats),
                ...filterUnique([...dynamicCats, ...globalCats], localCats),
            ];

        case "local_global_dynamic_sorted":
            return [
                ...sortedLocal,
                ...filterUnique(sortedLocal, sortedGlobal),
                ...filterUnique([...sortedLocal, ...sortedGlobal], sortedDynamic),
            ];
        case "local_dynamic_global_sorted":
            return [
                ...sortedLocal,
                ...filterUnique(sortedLocal, sortedDynamic),
                ...filterUnique([...sortedLocal, ...sortedDynamic], sortedGlobal),
            ];
        case "global_dynamic_local_sorted":
            return [
                ...sortedGlobal,
                ...filterUnique(sortedGlobal, sortedDynamic),
                ...filterUnique([...sortedGlobal, ...sortedDynamic], sortedLocal),
            ];
        case "global_local_dynamic_sorted":
            return [
                ...sortedGlobal,
                ...filterUnique(sortedGlobal, sortedLocal),
                ...filterUnique([...sortedGlobal, ...sortedLocal], sortedDynamic),
            ];
        case "dynamic_local_global_sorted":
            return [
                ...sortedDynamic,
                ...filterUnique(sortedDynamic, sortedLocal),
                ...filterUnique([...sortedDynamic, ...sortedLocal], sortedGlobal),
            ];
        case "dynamic_global_local_sorted":
            return [
                ...sortedDynamic,
                ...filterUnique(sortedDynamic, sortedGlobal),
                ...filterUnique([...sortedDynamic, ...sortedGlobal], sortedLocal),
            ];

        case "local_global_dynamic_sorted_total":
            return sortByName([
                ...localCats,
                ...filterUnique(localCats, globalCats),
                ...filterUnique([...localCats, ...globalCats], dynamicCats),
            ]);

        case "local_dynamic_global_sorted_total":
            return sortByName([
                ...localCats,
                ...filterUnique(localCats, dynamicCats),
                ...filterUnique([...localCats, ...dynamicCats], globalCats),
            ]);
        case "global_dynamic_local_sorted_total":
            return sortByName([
                ...globalCats,
                ...filterUnique(globalCats, dynamicCats),
                ...filterUnique([...globalCats, ...dynamicCats], localCats),
            ]);
        case "global_local_dynamic_sorted_total":
            return sortByName([
                ...globalCats,
                ...filterUnique(globalCats, localCats),
                ...filterUnique([...globalCats, ...localCats], dynamicCats),
            ]);
        case "dynamic_local_global_sorted_total":
            return sortByName([
                ...dynamicCats,
                ...filterUnique(dynamicCats, localCats),
                ...filterUnique([...dynamicCats, ...localCats], globalCats),
            ]);
        case "dynamic_global_local_sorted_total":
            return sortByName([
                ...dynamicCats,
                ...filterUnique(dynamicCats, globalCats),
                ...filterUnique([...dynamicCats, ...globalCats], localCats),
            ]);

        default:
            return [...localCats];
    }
}


customElements.define('ha-shopping-list-improved', HaShoppingListImproved);

window.customCards = window.customCards || [];
window.customCards.push({ 
	type: 'ha-shopping-list-improved', 
	name: 'Improved Shopping List', 
	preview: true, 
	description: translate("card.description")
});
