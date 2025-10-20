# Improved Shopping List Card (ha-shopping-list-improved)


# 🛒 Improved Shopping List Card (`ha-shopping-list-improved`)

## 📖 Vorwort
Wie ist dieses Add-on entstanden? Ganz einfach: Ich habe eine Möglichkeit gesucht, meine Einkaufsliste direkt über **Home Assistant** zu führen.  
Die eingebaute Liste ist leider sehr rudimentär. Dann habe ich **Tandoor** ausprobiert – ganz nett, aber es bot nicht das, was ich wollte.  
Ein weiteres Shopping-List-Add-on gab es zwar, aber dessen Pflege war zu umständlich, und für jeden Artikel musste man eine eigene Karte anlegen.

Im Endeffekt blieb mir also nichts anderes übrig, als selbst etwas zu programmieren.  
Die größte Herausforderung dabei war: **der WAF musste erhalten bleiben 😄**

---

## 💡 Was ist die *Improved Shopping List Card*?
Die **Improved Shopping List Card** ist eine erweiterte Karte für Home Assistant,  
die die originale Einkaufsliste deutlich verbessert und die Bedienung um ein Vielfaches vereinfacht.

---

## ⚙️ Funktionsübersicht

## Vorwort
Wie ist das Addon entstanden? Ganz einfach, ich habe eine Möglichkeit gesucht meine Einkaufsliste über Home Assistant zu führen.
Die eingebaute Liste ist leider nur ganz rudimentär. Hatte es dann mit Tandoor versucht. Dieses ist zwar ganz nett, aber bietet nicht das was ich wollte.
Es gab noch ein weiteres Shoppinglist Addon, aber das war in der Pflege zu kompliziert und die jeden Artikel musste man eine eigene Karte anlegen.

Im Endeffekt blieb mir also nicht anderes übrig, als selbst was zu programmieren. Herrausforderung hierbei war, dass der WAF erhalten bleibt. :D 

## Was ist Improved Shopping List Card ?
Improved Shopping List Card ist eine Karte für Home Assistant, welche die originale Einkaufsliste von Home Assistant in der Hinsicht erweitert, dass die Nutzung um ein vielfaches vereinfacht bzw verbessert wurde.

### Was kann Improved Shopping List Card ?
- Anzeige als normale Karte oder als Panel (Seite mit nur einer Karte)
- Alphabetische Sortierung der Einträge
- Möglichkeit gekaufte (erledigte) Artikel auszublenden, ans Ende zu verschieben bzw in der Sortierung zu belassen
- Gekaufte Artikel werden farblich markiert
- Möglichkeit mittels + und - die Anzahl zu ändern
- Chips um Artikel schnell wieder hinzuzufügen
- Lokale (Browser) und Standard Chips (über die Config)
- Highlighting für spezielle Chips
- Entfernen von Artikeln
- Einstellbares Design (Chipsfarbe, Schriftgröße, Position der Chips)

Schaut euch am die Screenshots weiter unten an, um zu sehen, was so alles möglich ist.

# Installation HACS
[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Nisbo&repository=ha-shopping-list-improved&category=plugin)


| Parameter               | Typ           | Standardwert                     | Beschreibung                                                                                     |
|-------------------------|---------------|---------------------------------|-------------------------------------------------------------------------------------------------|
| `chips_position`        | `string`      | `"auto"`                         | Position der Chips: `auto`, `right`, `bottom`, `full`.                                          |
| `chips_width`           | `number`      | `250`                            | Breite vom Chips-Bereich in Pixel, nur relevant bei `chips_position: "full"`.                           |
| `quantity`              | `string`      | `"end"`                          | Position der Mengenangabe: `beginning` oder `end`.                                              |
| `acknowledged`          | `string`      | `"show"`                         | Anzeigen/Ausblenden von erledigten Artikeln: `show`, `hide`, `end`.                             |
| `chip_click`            | `string`      | `"dblclick"`                     | Reaktion auf Klick: `"click"` für einfachen Klick, `"dblclick"` für Doppelklick.               |
| `sub_text`              | `string`      | `"Tipp: Nutze die Chips, um Artikel erneut hinzuzufügen."` | Hilfstext unter der Eingabeleiste.                                |
| `chip_merge`            | `string`      | `"combined"`                     | Reihenfolge der Chips: `combined`, `standard_first`, `browser_first`.                           |
| `chip_font_size`        | `number`      | `12`                             | Schriftgröße der Chips in Pixel.                                                                |
| `list_font_size`        | `number`      | `14`                             | Schriftgröße der Listeneinträge in Pixel.                                                      |
| `chip_color`            | `string`      | `"rgba(100,100,100,0.3)"`       | Farbe der lokalen (Browser) Chips.                                                              |
| `chip_color_default`    | `string`      | `"rgba(100,100,255,0.3)"`       | Farbe der Standard-Chips.                                                                       |
| `highlight_words`       | `array`       | `[]`                             | Liste von Schlüsselwörtern, die hervorgehoben werden, wenn sie in einem Chip vorkommen. Entweder als Komma oder Semikolon-getrennte Liste.      |
| `highlight_color`       | `string`      | `"rgba(255,80,80,0.8)"`         | Farbe für hervorgehobene Schlüsselwörter.                                                      |
| `local_chips`           | `boolean`     | `true`                           | Ob lokale (Browser-)Chips erlaubt sind.                                                        |
| `chips`                 | `string`      | `[]`                            | Standard-Chips, entweder als Komma oder Semikolon-getrennte Liste.                          |




# Beispiel für eine Panel Ansicht (Eine Karte pro Seite)
```
type: custom:ha-shopping-list-improved
quantity: beginning
acknowledged: end
chips: >-
  Butter, Pepsi, Bier, Schweppes, Honig Senf Sauce, Lachs, Red Bull, Zahnpasta,
  Meerrettich, Olivenöl, Brötchen, Käse, Salami, Spülmittel, Klopapier, Salat,
  MiFri, Ketchup, Rucola, Advocado, Obatzter, Limes, TroFu, NaFu, Milch,
  Zahnpasta, Pizza, Sahne, Schmand, Fond, Eier, Sekt, Vodka, Mett, Zwiebeln,
  Kartoffeln
chip_click: single
show_quantity_box: true
show_quantity_one: false
show_submit_button: true
show_input_mask: true
sub_text: Ich habe <u>Hunger</u>, lass uns einkaufen gehen. &#128516;
chips_position: full
local_chips: true
chips_width: 400
list_font_size: 21
chip_font_size: 16
chip_merge: combined
highlight_words: Butter, Brötchen, Eier, Pepsi

```



<img width="1613" height="946" alt="grafik" src="https://github.com/user-attachments/assets/62ee8518-3714-4f72-9d50-4158f9ce2526" />

<img width="531" height="894" alt="grafik" src="https://github.com/user-attachments/assets/25ea5ae9-2774-48c2-84bc-1f1fb9eb2869" />

<img width="1013" height="1832" alt="grafik" src="https://github.com/user-attachments/assets/eaca367a-0356-4b21-afb1-82f3e8d3fe08" />
<img width="1007" height="862" alt="grafik" src="https://github.com/user-attachments/assets/475c3d9c-f845-4ba2-a330-2a992fb3c60d" />
