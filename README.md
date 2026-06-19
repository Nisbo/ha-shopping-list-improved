# 🛒 Improved Shopping List Card
`ha-shopping-list-improved`

> ⚠️ Some screenshots may still be from older versions of the card.

### The card is now also available in HACS, search for `Improved Shopping List Card` or use the link below to add it as a custom repository.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Nisbo&repository=ha-shopping-list-improved&category=plugin)


# 📖 Foreword

How did this add-on come about? Simple: I was looking for a way to manage my shopping list directly through **Home Assistant**. The built-in list is unfortunately very basic. Then I tried **Tandoor** – quite nice, but it didn’t offer what I wanted. There was another shopping list add-on, but maintaining it was cumbersome, and you had to create a separate card for every item.

In the end, I had no choice but to develop something myself.  
The biggest challenge was: **keeping the WAF intact 😄**

Now with version 2.x it is much more than a simple shopping list.

---

# 💡 What is the *Improved Shopping List Card*?

The **Improved Shopping List Card** is a card for Home Assistant,  
which significantly improves the original ToDo lists and makes them much easier to use.

You have a **Shopping List** mode and a **ToDo** mode for different use cases.

> ⚠️ **Note:**  
> This card is based on the **original Home Assistant ToDo lists** and uses its data structure.  
> All items you add in this card will also appear in the related ToDo list – and vice versa.  
> If you change anything outside the card, this can lead to problems within the card.
>
> Some advanced information, such as categories or recurring intervals, is stored inside the item name.  
> The card hides this formatting in its own UI, but other cards or Home Assistant views may show the raw item name.

---

![36BEAE63-5A5B-4642-8118-FBF62A201483_1_201_a](https://github.com/user-attachments/assets/9f98127a-df6b-44e2-8444-6d429d04a505)


| Shopping List | Inventary Freezer | ToDo Mode |
| ---- | ----- | ----- |
|   ![2E0EACF1-6EEF-4C61-A3CC-5676A5C2CC3C_1_102_o](https://github.com/user-attachments/assets/3393b1b0-080d-4ae8-b314-e01df944cbee) |   ![2B4BB96F-5A97-4C13-BE6D-890148E3B3D5_1_102_o](https://github.com/user-attachments/assets/10a7f29c-de68-4e18-9ece-52aee948a00b)   |  ![8ADA2EC3-1224-4808-A196-1CD7C969D82B_1_102_o](https://github.com/user-attachments/assets/ecb45659-e31e-4b4b-832f-5348fe494863) |
| <img width="511" height="868" alt="grafik" src="https://github.com/user-attachments/assets/6b101d82-13e2-4c2b-946d-cd19277698ab" /> | <img width="359" height="445" alt="grafik" src="https://github.com/user-attachments/assets/7f26a41b-eef1-41da-b61c-c2dc6a001bf1" /> <img width="232" height="272" alt="grafik" src="https://github.com/user-attachments/assets/01a1a797-3839-4ee2-ac26-f3f54d381fff" /> | <img width="507" height="910" alt="grafik" src="https://github.com/user-attachments/assets/5a3f93a6-342f-4ec2-a9c8-d3e366691213" />  |



---

# ⚙️ Features

Since I prefer spending my time coding rather than writing documentation, I asked ChatGPT to create this feature overview based on the translation variables. It turned out quite well — even if some parts sound a bit funny. 😄

### 🛒 Shopping & To-Do List Modes  
- Switch between **Shopping List** and **To-Do List** mode.  
- In **To-Do Mode**, you can set and manage **due dates**, recurring intervals, and automatic next-due calculations.  
- In **Shopping Mode**, you get quantity controls, export buttons, and advanced chip handling.
- The card uses Home Assistant's original ToDo entities as backend.

### 🧩 Layout & Display  
- Display as a **standard card** or in **panel mode** (full-width page view).  
- Optional **Bubble Card workaround mode** for special popup/layout use cases.
- Configurable sorting: alphabetical, manual drag-and-drop, or no additional sorting. 
- Choose how **completed items** appear: shown, hidden, or moved to the end.  
- **Color highlighting** for completed or custom keywords (e.g., *Butter*, *Bananas*).  
- Adjustable **font sizes** for title, list items, category headers, and chips.  
- Optional **category counters** showing number of items per category.
- Optionally hide category counters when all items in a category are completed.
- Optional title icon and title information for ToDo due dates.
- Optional custom CSS code for advanced styling.

### 🏷️ Categories & Dishes  
- Automatically group items using **categories** from editor configuration (in YAML) or external text file.  
- Categories can have a **name**, **icon**, and **background color**.
- Categories can also define a custom **text color**.
- Supports **merge modes** between local, global, and dynamic categories.
- Dynamic categories can be created from manually assigned items.
- In ToDo Mode, categories can show the next due date and warning indicators.
- Add entire **dishes** (sets of items) with one click — e.g., “Pizza Night” adds all required ingredients at once.
- When adding a dish, you can select or deselect individual ingredients before adding them.

### 💡 Chips (Quick Add Buttons)  
- Add frequently used items with **one click** using chips.  
- Combine **standard (editor)**, **local (browser)**, and **global (text-file)** chips.  
- Define how chips are merged (combined, prioritized, or global only).  
- Choose **chip placement** (auto, right, bottom, multi-column, or hidden).  
- Optional **color customization** for each chip type (default, local, global, dishes, important).  
- Supports **click** or **double-click** behavior for adding items.
- Optional **category chips** generated from configured category items.
- Optional filtering of chips while typing in the input field.
- Local browser chips are not duplicated when a matching category chip already exists.

### ➕ Item Management  
- Quickly **increase or decrease quantities** via + and − buttons (shopping mode only).  
- Show quantity **before** or **after** the item name (“10× Butter” / “Butter (10)”).  
- Optionally show or hide the **quantity input field** and **Add button**.  
- Optionally show quantity `1` for single items.
- Optional input filter for list items.
- Optional suggestions/autocomplete while typing.
- Remove individual or completed items with confirmation dialogs.
- The delete confirmation popup can be disabled.

### Item Descriptions
- Optional support for item descriptions on compatible Home Assistant To-do entities.
- Description fields are available in the add and edit dialogs when the selected entity supports descriptions.
- Descriptions can be shown below the item name with `show_descriptions: true`.
- The default Home Assistant shopping list entity does not support descriptions.

### Sorting Modes
- Alphabetical sorting with `sort_mode: alpha`.
- Manual drag-and-drop sorting within categories with `sort_mode: manual`.
- Unsorted/default entity order with `sort_mode: none`.
- Existing `sort_items` configurations are still supported as a legacy fallback.

### 🔎 Suggestions / Autocomplete
- Optional suggestions while typing in the input field.
- Suggestions are based on configured category items.
- Search is diacritic-insensitive, e.g. `cafe` can match `Café`.
- Multi-word search is supported.
- Suggestions support keyboard navigation and mouse selection.
- Completed hidden items can optionally be included while searching.

### 🗓️ To-Do Due Dates & Recurrence  
- Add **due dates** and **due times** for To-Do entries.  
- Configure **recurring intervals** (e.g., every 3 days, every 2 months).  
- **Automatically calculate** remaining time until the next due date.  
- Visual **color warnings** for upcoming or overdue tasks (configurable thresholds).  
- Optional “Set next due date”, “Set next due date from now”, or “Remove due date” actions.
- Optional warning indicators in category headers and in the card title.
- Copy and paste due date/time, interval, and category data inside the ToDo popup.

### 📦 Import, Export & Sync (Shopping List Mode only)
- This feature is designed to use the shopping list in places without network. It is not perfect, but better than nothing.
- **HTML Export** and **PDF Export** buttons for offline use.  
- Sync changes directly (only HTML) with **Home Assistant** (only to HA) or use **offline lists**.  
- Requires **long-lived access token** and optional **external https URL** for full export functionality.  
- Manually update, by pressing the sync button, the associated Home Assistant entity when you have network again. (only HTML)

> ⚠️ **Security note:**  
> Treat the token confidentially as it grants access to your Home Assistant system.  
> If HTTP is used instead of HTTPS, the token is transmitted unencrypted and is therefore insecure.

### 📱 Advanced Features  
- Built-in **QR / EAN-13 Scanner** to quickly add multiple items via QR code (HTTPS required for camera access).  
- Supports QR codes with one or multiple items, one item per line.
- Quantities can be specified in parentheses, e.g. `Bananas (6)`.
- EAN lookup can use **Open Food Facts** for food products.
- Optional local EAN file for custom product names and overrides.
- Local EAN file supports **EAN-8, UPC (12), EAN-13, and GS1-14**.
- Works with **global text files** for chips and categories (`/local/chips.txt`, `/local/categories.txt`).   
- Fully localized in **English** 🇬🇧 and **German** 🇩🇪.
- Debug logging can be enabled explicitly with `debug_mode: true`.

> 💡 **Tip:**  
> Check the screenshots below to see what’s possible!

---

# Installation HACS
[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Nisbo&repository=ha-shopping-list-improved&category=plugin)


# Advanced Configuration / Information

# Categories (via config editor)

Categories are stored in the item name in the format `@Category@ Item (2)`.
The card itself will not display this formatting, but if you use other add-ons or cards for the same To-Do list, you will see it.

You can define categories in the config editor

<img width="503" height="677" alt="grafik" src="https://github.com/user-attachments/assets/524c95cb-6de0-49f1-80b1-a34d24db92a7" />


this has to be done in YAML code e.g.
```
- name: Fruit
  items:
    - Strawberries
    - Plums
    - Pears
    - Bananas
- name: Vegetables
  icon: mdi:apple
  bgcolor: "#247645"
  items:
    - Avocado
    - Arugula
- name: Household Items
  bgcolor: darkblue
  icon: mdi:basket
  items:
    - Sponge
    - Dish Soap
- name: Meat
  icon: mdi:food-steak
  bgcolor: "#FF4040"
  items:
    - Chicken Breast Fillet
    - Schnitzel
- name: Beverages
  bgcolor: "#528B8B"
  icon: mdi:bottle-soda
  items:
    - Sparkling Wine
    - Beer
```
If you add an item that belongs to a defined category, it will be automatically assigned to that category.
If you add an item that is not in any defined category, a popup (which can be disabled) will appear allowing you to assign the item to a category.
If you rename or remove a category all manually (to this category) assigned items (changed via edit option) will not show up anymore in the list.

<img width="360" height="311" alt="grafik" src="https://github.com/user-attachments/assets/2a421d24-887e-43dc-ab41-1304c67f31d4" />

If you want to change the category later, double-click on the item.


### Global Categories
With this feature, you can save categories in a text file (e.g., via the file editor), and these categories will optionally be available in all cards.
You can also merge the Global Categories with the Standard Categories.

<img width="619" height="301" alt="grafik" src="https://github.com/user-attachments/assets/6f439e08-e0da-4dab-adc8-ec86fc7b4758" />


In the input field, you need to specify the path to the categories file. Including the leading `/` !
Example: `/local/categories.txt` if the file is named `categories.txt` and located in the `www` folder. And yes, `local` points to the www folder.

Text file Format:
```
[Fruits]
icon = mdi:apple
bgcolor = #247645
items = Apples, Plums, Pears, Bananas

[Beverages]
icon = mdi:bottle-soda
bgcolor = #528B8B
items = Beer, Sparkling Wine, Cola
```

You might also need to add the `www` folder (or your specific folder) to the `allowlist_external_dirs` in your `configuration.yaml` and restart Home Assistant afterwards:

```
# Loads default set of integrations. Do not remove.
default_config:

# add your path to the file here
homeassistant:
  allowlist_external_dirs:
    - "/config/www/"
```


# Dishes

<img width="638" height="586" alt="grafik" src="https://github.com/user-attachments/assets/d9981563-b34e-41e1-b4bf-defb2caf8061" />

<img width="604" height="509" alt="grafik" src="https://github.com/user-attachments/assets/37b4255b-3b0c-4386-856f-e89a4904282c" />

With dishes you can add multiple items at once. Each dish starts with - name: <Dish> and contains a list of items under 'items'. Example: - name: McDonalds items: - Cheeseburger - BigMac (2) - Fries - Hamburger (4). Each dish can optionally have a background color (bgcolor, e.g. #247645). Dishes will be always added at the end of the other chips.

```
- name: McDonalds
  bgcolor: #000000
  items:
    - Hamburger (2)
    - Cheeseburger (3)
    - BigMac
    - French Fries
- name: Burger King
  items:
    - French Fries (2)
    - BigKing
```



# Global Chips

With this feature, you can save chips in a text file (e.g., via the file editor), and these chips will optionally be available in all cards.
You can also merge the Global Chips with the Standard and Browser Chips.

<img width="481" height="606" alt="grafik" src="https://github.com/user-attachments/assets/6d8c62c5-436a-4343-9462-a1a1d4db942c" />

In the input field, you need to specify the path to the chips file. Including the leading `/`.
Example: `/local/chips.txt` if the file is named `chips.txt` and located in the `www` folder. And yes, `local` points to the www folder.
Each chip must be placed on a separate line.

You might also need to add the `www` folder (or your specific folder) to the `allowlist_external_dirs` in your `configuration.yaml` and restart Home Assistant afterwards:

```
# Loads default set of integrations. Do not remove.
default_config:

# add your path to the file here
homeassistant:
  allowlist_external_dirs:
    - "/config/www/"
```

Example `chips.txt` - One chip per line.
```
Bananas
Pears
Apples
Beer
```






# Export as HTML file (only in Shopping List Mode)

This allows you to use your shopping list offline (e.g., when you don’t have network access in the supermarket).
If you wish, you can assign a long-lived access token to your profile to enable the sync function.


The sync function allows you to easily (push the button in the offline export) synchronize your offline list to Home Assistant (note: synchronization only works one way — from the offline list to Home Assistant).
How it works: Click the export button, open the saved HTML file in your browser, check your items, and when you’re back at home (or within network range when using an external URL), click the sync button. If your browser clears the cache when you close it, syncing may not work correctly. Warning: Treat the token confidentially as it grants (full) access to your system. Also note that if HTTP is used instead of HTTPS, the token is transmitted unencrypted and is therefore insecure.


**Using the html export file on an iPhone**
Shortly after finishing this feature, I realized that there is no official way to open a locally stored HTML file on my iPhone (shame on you, Apple). 
You need an additional app such as HTML Viewer Q:
https://apps.apple.com/de/app/html-viewer-q/id810042973


Config:

<img width="514" height="361" alt="grafik" src="https://github.com/user-attachments/assets/7c4ac691-281d-4d8f-a867-f687f3e6f4c2" />

Export Button:

<img width="504" height="415" alt="grafik" src="https://github.com/user-attachments/assets/1eddf1cc-cc7a-4731-9537-49298a4704db" />


Offline List:

<img width="480" height="793" alt="grafik" src="https://github.com/user-attachments/assets/9772ec6e-8586-47c0-a142-320ba4464228" />



# PDF Export (only in Shopping List Mode)

Generate and download the list as a PDF document with checkboxes. You can check/uncheck items within the PDF, but currently there is no synchronization option with Home Assistant.

<img width="736" height="809" alt="grafik" src="https://github.com/user-attachments/assets/73c78186-192e-4f09-913c-43ea9abd0c00" />





# QR Code Scanner 
Allows scanning one or multiple items at once via QR code. 

> [!IMPORTANT]
> You must access Home Assistant via a **https://** connection for the QR scanner to work.

QR Button

<img width="577" height="97" alt="grafik" src="https://github.com/user-attachments/assets/c7e8c1b2-02aa-4c77-b331-b4134989b8ce" />

You have to allow camera access

<img width="548" height="293" alt="grafik" src="https://github.com/user-attachments/assets/202ab31f-7767-47a0-b0bf-c5052f128b59" />

Scan the code. If the scan was successfully, the scan window will disappear.

<img width="527" height="508" alt="grafik" src="https://github.com/user-attachments/assets/a11c1da6-e9e3-47ac-89d8-1f5d9677836a" />

Configuration option:

<img width="646" height="143" alt="grafik" src="https://github.com/user-attachments/assets/51c8c5a9-f62e-4ce8-962d-37150b67e212" />


For multiple items, each item must be on a separate line. Quantities can be specified in parentheses, e.g., `Bananas (6)`. 



### Generate your QR Codes in this format
If you want to add bananes
```
bananas
```

If you want to add 6 bananas at once
```
bananas (6)
```

if you want to add more items like for a dish
```
bananas (6)
plums (33)
apples (2)
peach
beer
```


You can generate QR Codes here:
https://goqr.me/de/








# EAN Code Reader

This feature currently supports **EAN-13 barcodes**, limited to **food products only**.  
The reason is simple — there is no free global EAN database available, except for the **Open Food Facts** project:  
🔗 [https://world.openfoodfacts.org](https://world.openfoodfacts.org)

In the future, I might add support for a **local EAN list** (similar to the local categories or local chips feature).

### How to use
The feature is automatically triggered when:
- an **EAN-13 barcode** is scanned using the camera (https required), **or**
- an **EAN-13 number** is entered manually into the input field.

You can test it by entering this example code: **4337256383165**

# Local EAN file

You can use a local EAN file to define your own product names.
Supported formats: `EAN-8, UPC (12), EAN-13, and GS1-14.`

If a scanned or typed EAN is found in this local file, it will be used instead of querying the online database.
This also allows you to override product names from the online source.

The feature is automatically triggered when:
- an **EAN-8, UPC (12), EAN-13, and GS1-14 barcode** is scanned using the camera (https required), **or**
- an **EAN-8, UPC (12), EAN-13, and GS1-14** is entered manually into the input field.

Each line in the file must follow the format:
`EAN Name`

Example:
```
1234567890121 Test Item 1
1234567890122 Test Item 2
1234567890123 Test Item 3
```

Example Path: `/local/ean.txt`, if the file is located in the www folder.

To use this, you might also need to add the `www` folder (or your specific folder) to the `allowlist_external_dirs` in your `configuration.yaml` and restart Home Assistant afterwards:

```
# Loads default set of integrations. Do not remove.
default_config:

# add your path to the file here
homeassistant:
  allowlist_external_dirs:
    - "/config/www/"
```








# Configuration of Warning Thresholds for ToDo Due Dates

In **ToDo Mode**, you can configure when upcoming tasks are visually marked as “due soon” based on configurable warning thresholds. These thresholds are defined in minutes and differ depending on the type of interval or due date format:

| Configuration Parameter | Description                                         | Default Value (Minutes) |
|-------------------------|-----------------------------------------------------|------------------------|
| `todo_yellow_m`         | Warning threshold for intervals in **months**       | 1440 (24 hours)        |
| `todo_yellow_d`         | Warning threshold for intervals in **days**         | 120  (2 hours)         |
| `todo_yellow_h`         | Warning threshold for intervals in **hours**        | 10 (10 minutes)        |
| `todo_yellow_s`         | Warning threshold for due dates **without time**    | 120 (2 hours)          |

If the remaining time until the due date is within the configured threshold, the task will be highlighted in orange to remind you in time.

### Example Configuration

```
todo_yellow_m: 2880  # 2 days (in minutes) for monthly intervals
todo_yellow_d: 240   # 4 hours for daily intervals
todo_yellow_h: 15    # 15 minutes for hourly intervals
todo_yellow_s: 60    # 1 hour for dates without time
```





# Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `entity` | `string` | auto-detected To-do entity | Home Assistant To-do entity used by the card. If omitted, the card tries to auto-detect a suitable `todo.*` entity. |
| `mode` | `string` | `"shopping"` | Mode of the card: `"shopping"` or `"todo"`. |
| `title` | `string` | `""` | Title of the card. Leave empty to hide the title. |
| `title_icon` | `string` | `""` | Optional icon shown before the title, e.g. `mdi:cart`. |
| `show_title_info` | `boolean` | `true` | Shows next due date information below the title in To-do Mode. |
| `show_title_info_icon` | `boolean` | `true` | Shows an icon before the title due-date information. |
| `show_title_exclamation_mark` | `boolean` | `true` | Shows an exclamation mark in the title when due To-do entries exist. |
| `input_row_position` | `string` | `"top"` | Position of the input row: `"top"` or `"bottom"`. |
| `option_row_position` | `string` | `"bottom"` | Position of the option/export/action row: `"top"` or `"bottom"`. |
| `quantity` | `string` | `"end"` | Position of the quantity: `"beginning"` or `"end"`. |
| `acknowledged` | `string` | `"show"` | Show/hide completed items: `"show"`, `"hide"`, or `"end"`. |
| `sort_items` | `boolean` | `true` | Legacy option. Use `sort_mode` instead. `true` equals `sort_mode: alpha`, `false` equals `sort_mode: none`. |
| `sort_mode` | `string` | `"alpha"` | Defines how items are sorted: `alpha` sorts alphabetically, `manual` enables drag-and-drop sorting within a category, and `none` keeps the list order without additional sorting. |
| `show_descriptions` | `boolean` | `false` | Shows item descriptions below the item name if the selected To-do entity supports descriptions. The default Home Assistant shopping list does not support descriptions. |
| `acknowledge_deletion` | `boolean` | `true` | Shows a confirmation popup before deleting items. |
| `show_quantity_box` | `boolean` | `true` | Shows the quantity input field. |
| `show_submit_button` | `boolean` | `true` | Shows the submit/add button. |
| `show_plus_minus` | `boolean` | `true` | Shows plus and minus buttons for quantity adjustment in Shopping Mode. |
| `show_input_mask` | `boolean` | `true` | Shows the input row. |
| `show_quantity_one` | `boolean` | `false` | Shows quantity `1` by default. |
| `show_clear_button` | `boolean` | `true` | Shows the button to clear completed items. |
| `show_admin_button` | `boolean` | `true` | Shows the admin options button. |
| `show_message_button` | `boolean` | `false` | Shows the notification/message button in Shopping Mode. |
| `show_qrscan_button` | `boolean` | `false` | Shows the QR scanner button. Requires HTTPS for camera access. |
| `sub_text` | `string` | `"Tip: Use chips to quickly re-add items."` | Helper text displayed below the input field. |
| `bubble_card` | `boolean` | `false` | Enables the Bubble Card workaround mode. |
| `allow_filter` | `boolean` | `false` | Enables filtering list items while typing in the input field. |
| `allow_suggestions` | `boolean` | `false` | Enables suggestions/autocomplete while typing. |
| `show_done_hidden_items_in_search` | `boolean` | `true` | Also shows completed/hidden items while searching. |
| `capitalize_first_letter` | `boolean` | `false` | Automatically capitalizes the first letter of newly added items. |
| `ean_file` | `string` | `""` | File path for a local EAN list. |
| `chips_position` | `string` | `"auto"` | Position of the chips: `"auto"`, `"auto_panel"`, `"right"`, `"bottom"`, `"full"`, or `"none"`. |
| `chips_width` | `number` | `300` | Width of the chips area in pixels, only relevant when `chips_position` is `"full"` or `"auto_panel"`. |
| `chip_click` | `string` | `"single"` | Chip click behavior: `"single"` for single click, `"dblclick"` for double click. |
| `chip_merge` | `string` | `"combined"` | Order of chips: `"combined"`, `"standard_first"`, `"browser_first"`, `"global_combined"`, or `"global_only"`. |
| `local_chips` | `boolean` | `true` | Enables or disables local browser chips. |
| `chips` | `string` / `array` | `""` | Default chips, either as array or comma-/semicolon-separated string. |
| `highlight_words` | `string` / `array` | `""` | List of keywords to highlight in chips, either as array or comma-/semicolon-separated string. |
| `show_category_chips` | `boolean` | `false` | Generates chips from category items. |
| `chips_with_cat_color` | `boolean` | `true` | Uses category colors for category-related chips where available. |
| `allow_filter_chips` | `boolean` | `false` | Filters chips while typing in the input field. |
| `chip_file` | `string` | `""` | File path for an external/global chip definitions file. |
| `categories` | `object` / YAML | unset | Category configuration. Categories can define `name`, `items`, `icon`, `bgcolor`, and optional `color`. |
| `show_cat_popup` | `boolean` | `true` | Shows popup for category selection when adding uncategorized items. |
| `show_cat_count` | `boolean` | `true` | Shows the count of done/total items per category. |
| `hide_cat_count_all_done` | `boolean` | `false` | Hides the category count when all items in the category are completed. |
| `show_cat_next_due` | `boolean` | `true` | Shows the next due date in category headers in To-do Mode. |
| `cat_double_sized_icon` | `boolean` | `true` | Shows larger category icons in To-do Mode when next-due information is displayed. |
| `show_cat_exclamation_mark` | `boolean` | `true` | Shows an exclamation mark in category headers when due To-do entries exist. |
| `allow_dynamic_categories` | `boolean` | `false` | Allows dynamically created categories from manually assigned items. |
| `category_file` | `string` | `""` | File path for an external/global category definitions file. |
| `category_merge_mode` | `string` | `"local_only"` | Category merging mode for local, global, and dynamic categories. Examples: `local_only`, `global_only`, `dynamic_only`, `local_global`, `global_local`, `local_global_dynamic`. Add `_sorted` to sort each source or `_sorted_total` to sort the complete merged result. |
| `dishes` | `object` / YAML | unset | Dish configuration. Each dish can define `name`, `items`, and optional `bgcolor`. |
| `title_font_size` | `number` | `16` | Font size of the title in pixels. |
| `cat_font_size` | `number` | `16` | Font size of category headers in pixels. |
| `list_font_size` | `number` | `14` | Font size of list items in pixels. |
| `chip_font_size` | `number` | `12` | Font size of chips in pixels. |
| `chip_color` | `string` | `"rgba(100,100,100,0.3)"` | Color for local browser chips. Supports CSS color values. |
| `chip_color_default` | `string` | `"rgba(100,100,255,0.3)"` | Color for standard/default chips. Supports CSS color values. |
| `chip_color_global` | `string` | `"rgba(100,100,100,0.3)"` | Color for global chips. Supports CSS color values. |
| `chip_color_dish` | `string` | `"#745E3D"` | Color for dish chips. Supports CSS color values. |
| `highlight_color` | `string` | `"#D9534F"` | Color used for highlighted keywords. Supports CSS color values. |
| `own_css` | `string` | `""` | Custom CSS code injected into the card. Invalid CSS may break the card layout. |
| `show_export_button` | `boolean` | `false` | Shows the HTML export button in Shopping Mode. |
| `show_export_button_pdf` | `boolean` | `false` | Shows the PDF export button in Shopping Mode. |
| `longlived_token` | `string` | `""` | Long-lived access token used by the exported HTML file for sync back to Home Assistant. |
| `external_url` | `string` | `""` | External Home Assistant URL used by the exported HTML file for sync. |
| `notify_entity` | `string` | `""` | Home Assistant notify entity used for sending list notifications. |
| `notify_entity_smtp` | `string` | `""` | SMTP notify service name for HTML email notifications. |
| `notify_on_change` | `boolean` | `false` | Sends notifications when items are added, edited, or removed. |
| `notify_on_change_all` | `boolean` | `false` | Sends the full list with change notifications. |
| `notify_on_done` | `boolean` | `false` | Sends notifications when items are marked as done. |
| `notify_on_change_time` | `number` | `0` | Delay in seconds before sending change notifications. Useful to group multiple changes. |
| `todo_yellow_m` | `number` | `1440` | To-do Mode: warning threshold in minutes for monthly intervals. |
| `todo_yellow_d` | `number` | `120` | To-do Mode: warning threshold in minutes for daily intervals. |
| `todo_yellow_h` | `number` | `10` | To-do Mode: warning threshold in minutes for hourly intervals. |
| `todo_yellow_s` | `number` | `120` | To-do Mode: warning threshold in minutes for due dates without time. |
| `list_reload_time` | `number` | `10` | To-do Mode refresh interval in seconds for updating due-time displays. Minimum `1`, maximum `3600`. |
| `debug_mode` | `boolean` | `false` | Enables additional debug output in the browser console. Should normally stay disabled. |



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


### Config Editor

| Mobile View | Config Editor |
| ---- | ----- |
| in English | in German |
| ![C7515C5E-3769-40FE-AA6B-D57B7259C420_1_102_o](https://github.com/user-attachments/assets/decf6cd0-c3db-4355-adfe-2f29d26fbc66) | ![73778741-17BF-44F2-A49C-2E3B343E96C5_1_102_o](https://github.com/user-attachments/assets/dc2c9a5f-6500-49b3-99c6-a2bc996e494e) | 


<img width="618" height="719" alt="grafik" src="https://github.com/user-attachments/assets/abcdebef-c2dd-45b8-b8a0-90973e572433" />

<img width="236" height="272" alt="grafik" src="https://github.com/user-attachments/assets/dfa1ffa3-52c6-4c29-ba90-9d7c05c5407a" />

<img width="351" height="399" alt="grafik" src="https://github.com/user-attachments/assets/e414db2d-ec7f-4cb9-8d2e-b53bff04fd30" />

<img width="349" height="300" alt="grafik" src="https://github.com/user-attachments/assets/a64a63f2-bc8a-4130-8a5c-63a6cb30360d" />

<img width="499" height="873" alt="grafik" src="https://github.com/user-attachments/assets/c9eccaec-fbdc-49d8-83f3-c0975bad69df" />





