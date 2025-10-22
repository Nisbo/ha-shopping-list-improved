# 🛒 Improved Shopping List Card (`ha-shopping-list-improved`)

## 📖 🇩🇪 Vorwort / 🇬🇧 Foreword

### 🇩🇪 Deutsch
Wie ist dieses Add-on entstanden? Ganz einfach: Ich habe eine Möglichkeit gesucht, meine Einkaufsliste direkt über **Home Assistant** zu führen. Die eingebaute Liste ist leider sehr rudimentär. Dann habe ich **Tandoor** ausprobiert – ganz nett, aber es bot nicht das, was ich wollte. Ein weiteres Shopping-List-Add-on gab es zwar, aber dessen Pflege war zu umständlich, und für jeden Artikel musste man eine eigene Karte anlegen.

Im Endeffekt blieb mir also nichts anderes übrig, als selbst etwas zu programmieren.  
Die größte Herausforderung dabei war: **der WAF musste erhalten bleiben 😄**

---

### 🇬🇧 English
How did this add-on come about? Simple: I was looking for a way to manage my shopping list directly through **Home Assistant**. The built-in list is unfortunately very basic. Then I tried **Tandoor** – quite nice, but it didn’t offer what I wanted. There was another shopping list add-on, but maintaining it was cumbersome, and you had to create a separate card for every item.

In the end, I had no choice but to develop something myself.  
The biggest challenge was: **keeping the WAF intact 😄**

---

## 💡 🇩🇪 Was ist die *Improved Shopping List Card*? / 🇬🇧 What is the *Improved Shopping List Card*?

### 🇩🇪 Deutsch
Die **Improved Shopping List Card** ist eine Karte für Home Assistant,  
die die originale Einkaufsliste deutlich verbessert und die Bedienung um ein Vielfaches vereinfacht.

> ⚠️ **Hinweis:**  
> Diese Karte basiert auf der **originalen Home Assistant Einkaufsliste** (`shopping_list`) und nutzt deren Datenstruktur.  
> Alle Einträge, die du in dieser Karte hinzufügst, erscheinen auch in der Standard-Einkaufsliste – und umgekehrt.

---

### 🇬🇧 English
The **Improved Shopping List Card** is a card for Home Assistant,  
which significantly improves the original shopping list and makes it much easier to use.

> ⚠️ **Note:**  
> This card is based on the **original Home Assistant shopping list** (`shopping_list`) and uses its data structure.  
> All items you add in this card will also appear in the standard shopping list – and vice versa.


---

![36BEAE63-5A5B-4642-8118-FBF62A201483_1_201_a](https://github.com/user-attachments/assets/9f98127a-df6b-44e2-8444-6d429d04a505)

| Mobile View | in German |
| ---- | ----- |
| ![17721741-9434-47A2-BB8F-FB2D2811C039_1_102_o](https://github.com/user-attachments/assets/5916d87d-f18a-4b5f-96ad-a9fbd0d0fbac) | ![FD780BD5-35D2-4686-9AA6-00CC4EBF05F3_1_102_o](https://github.com/user-attachments/assets/4762f5b5-2851-41fd-ba65-5495808c1134) |



---

## ⚙️ 🇩🇪 Funktionsübersicht / 🇬🇧 Features

### 🇩🇪 Deutsch
- 🧩 Anzeige als **normale Karte** oder im **Panel-Mode** (Seite mit nur einer Karte)  
- 🔤 **Alphabetische Sortierung** der Einträge  
- 👀 Möglichkeit, **erledigte Artikel auszublenden**, ans Ende zu verschieben oder in der Sortierung zu belassen  
- 🎨 **Farbige Markierung** erledigter Artikel  
- ➕ **Anzahl ändern** über + und −  
- 🏷️ **Chips** zum schnellen Hinzufügen häufig genutzter Artikel  
- 🌐 Unterstützung für **Standard- (Config)** und **lokale (Browser-)Chips**  
- ✴️ **Highlighting** für spezielle Artikel (z. B. *Butter*, *Bananen*, *Mehl*)  
- 🗑️ **Einfaches Entfernen** von Artikeln durch den Minus Button  
- ⚙️ **Anpassbares Design**: Farben, Schriftgrößen, Chip-Positionen u. v. m.

> 💡 **Tipp:**  
> Schau dir die Screenshots weiter unten an, um zu sehen, was alles möglich ist!

---

### 🇬🇧 English
- 🧩 Display as a **normal card** or in **panel mode** (page with only one card)  
- 🔤 **Alphabetical sorting** of items  
- 👀 Ability to **hide completed items**, move them to the end, or leave them in the order  
- 🎨 **Colored marking** of completed items  
- ➕ **Change quantity** via + and − buttons  
- 🏷️ **Chips** for quickly adding frequently used items  
- 🌐 Support for **standard (config)** and **local (browser) chips**  
- ✴️ **Highlighting** for specific items (e.g., *butter*, *bananas*, *flour*)  
- 🗑️ **Easy removal** of items using the minus button  
- ⚙️ **Customizable design**: colors, font sizes, chip positions, and more

> 💡 **Tip:**  
> Check the screenshots below to see what’s possible!


---

## ❌ 🇩🇪 Was geht (noch) nicht? / 🇬🇧 Limitations

### 🇩🇪 Deutsch
- Kategorien für Shops (hier fehlt mir noch die Idee, wie ich das am besten umsetze)  
- Alle Artikel (nicht nur die erledigten) auf einmal löschen

### 🇬🇧 English
- Categories for shops (still figuring out the best way to implement this)  
- Delete all items at once (not just completed ones)


---

# Installation HACS
[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Nisbo&repository=ha-shopping-list-improved&category=plugin)

# Parameter

| Parameter               | Type          | Default                          | Description                                                                                     |
|-------------------------|---------------|---------------------------------|-------------------------------------------------------------------------------------------------|
| `chips_position`        | `string`      | `"auto"`                         | Position of the chips: `auto`, `right`, `bottom`, `full`.                                       |
| `chips_width`           | `number`      | `250`                            | Width of the chips area in pixels, only relevant when `chips_position: "full"`.                |
| `quantity`              | `string`      | `"end"`                          | Position of the quantity: `beginning` or `end`.                                                |
| `acknowledged`          | `string`      | `"show"`                         | Show/hide completed items: `show`, `hide`, `end`.                                              |
| `chip_click`            | `string`      | `"single"`                       | Click behavior: `"single"` for single click, `"dblclick"` for double click.                   |
| `sub_text`              | `string`      | `"Tip: Use chips to quickly re-add items."` | Helper text below the input field.                                           |
| `chip_merge`            | `string`      | `"combined"`                     | Order of chips: `combined`, `standard_first`, `browser_first`.                                 |
| `chip_font_size`        | `number`      | `12`                             | Font size of the chips in pixels.                                                              |
| `list_font_size`        | `number`      | `14`                             | Font size of the list items in pixels.                                                        |
| `chip_color`            | `string`      | `"rgba(100,100,100,0.3)"`       | Color of local (browser) chips. Supports rgba and HEX.                                         |
| `chip_color_default`    | `string`      | `"rgba(100,100,255,0.3)"`       | Color of standard chips. Supports rgba and HEX.                                                |
| `highlight_words`       | `string`       | ` `                             | List of keywords to highlight when present in a chip. Comma- or semicolon-separated list.     |
| `highlight_color`       | `string`      | `"rgba(255,80,80,0.8)"`         | Color for highlighted keywords. Supports rgba and HEX.                                         |
| `local_chips`           | `boolean`     | `true`                           | Whether local (browser) chips are allowed.                                                     |
| `chips`                 | `string`      | ` `                             | Default chips, as a comma- or semicolon-separated list.                                        |



# Example

Panel
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

Mobile View

```
type: custom:ha-shopping-list-improved
quantity: beginning
acknowledged: show
chip_click: single
show_quantity_box: true
show_quantity_one: false
show_submit_button: true
show_input_mask: true
chips_position: bottom
chips: >-
  Butter, Pepsi, Bier, Lachs, Olivenöl, Brötchen, Käse, Salami, Spülmittel,
  Klopapier, Salat, MiFri, Ketchup, Rucola, Advocado, Obatzter, Limes, TroFu,
  NaFu, Milch, Zahnpasta, Pizza, Sahne, Schmand, Fond, Eier, Sekt, Vodka, Mett,
  Zwiebeln, Kartoffeln
highlight_words: Butter, Eier, NaFu, TroFu
chip_merge: combined
chips_width: 300
list_font_size: 14
chip_font_size: 12
local_chips: true
chip_color: rgba(100,100,100,0.3)
highlight_color: "#D9534F"
chip_color_default: rgba(100,100,255,0.3)
sub_text: "Hint: Use chips to quickly add items again."

```


## 📷 Screenshots


<img width="1613" height="946" alt="grafik" src="https://github.com/user-attachments/assets/62ee8518-3714-4f72-9d50-4158f9ce2526" />

| | |
| --- | --- | 
| <img width="531" height="894" alt="grafik" src="https://github.com/user-attachments/assets/25ea5ae9-2774-48c2-84bc-1f1fb9eb2869" /> | <img width="513" height="940" alt="grafik" src="https://github.com/user-attachments/assets/da3be606-1df6-4a31-96f9-5e159387b542" /> |
| 🇬🇧 Configuration  | 🇩🇪 Konfiguration | 
| <img width="521" height="1728" alt="grafik" src="https://github.com/user-attachments/assets/1ce6ac25-ec3b-4c59-a189-dc8d9b4c8691" /> | <img width="522" height="1705" alt="grafik" src="https://github.com/user-attachments/assets/e80794cd-4a5c-4989-877f-6f491e02dfa6" /> | 
| <img width="521" height="738" alt="grafik" src="https://github.com/user-attachments/assets/4824d683-ef85-4fa2-a946-d15b6bc8ff95" /> | <img width="519" height="703" alt="grafik" src="https://github.com/user-attachments/assets/3f61606b-4f7d-43e6-bbb5-de40048c2f56" /> | 

<img width="1013" height="1832" alt="grafik" src="https://github.com/user-attachments/assets/eaca367a-0356-4b21-afb1-82f3e8d3fe08" />
<img width="1007" height="862" alt="grafik" src="https://github.com/user-attachments/assets/475c3d9c-f845-4ba2-a330-2a992fb3c60d" />
