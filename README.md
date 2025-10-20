# ha-shopping-list-improved

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




<img width="1613" height="946" alt="grafik" src="https://github.com/user-attachments/assets/62ee8518-3714-4f72-9d50-4158f9ce2526" />

<img width="531" height="894" alt="grafik" src="https://github.com/user-attachments/assets/25ea5ae9-2774-48c2-84bc-1f1fb9eb2869" />

<img width="1013" height="1832" alt="grafik" src="https://github.com/user-attachments/assets/eaca367a-0356-4b21-afb1-82f3e8d3fe08" />
<img width="1007" height="862" alt="grafik" src="https://github.com/user-attachments/assets/475c3d9c-f845-4ba2-a330-2a992fb3c60d" />
