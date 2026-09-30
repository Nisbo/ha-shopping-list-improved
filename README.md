# 🛒 Improved Shopping List Card

`ha-shopping-list-improved`

A feature-rich Home Assistant Lovelace card for shopping lists, general To-do lists, and lightweight inventory tracking.

[![Open your Home Assistant instance and open this repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Nisbo&repository=ha-shopping-list-improved&category=plugin)

**[Open the complete Wiki](https://github.com/Nisbo/ha-shopping-list-improved/wiki)** · [Installation](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Installation) · [Visual editor reference](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Visual-Editor-Reference) · [YAML reference](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Configuration-Reference)

> [!NOTE]
> Some screenshots were created with older card versions. They remain here to illustrate the available layouts and features.

## About the card

The project started because the original Home Assistant Shopping List was too limited for my use case. Other solutions either did not provide the workflow I wanted or required too much maintenance. The result has grown into one card with three distinct modes:

| Mode | Intended use | Main features |
| --- | --- | --- |
| **Shopping list** | Groceries and reusable shopping lists | Quantities, categories, chips, dishes, EAN lookup, exports and notifications |
| **To-do** | Tasks and appointments | Due dates, recurrence, warnings and date filters |
| **Inventory** | Stock tracking | Stock-in, stock-out, registration, correction, minimum stock and separate EAN variants |

The card uses Home Assistant To-do entities as its storage. Changes remain visible to Home Assistant and other clients. Categories, quantities, recurrence, and Inventory metadata can use card-specific formatting in item names or descriptions. Other clients may therefore display the raw values that this card presents in a cleaner form.

![36BEAE63-5A5B-4642-8118-FBF62A201483_1_201_a](https://github.com/user-attachments/assets/9f98127a-df6b-44e2-8444-6d429d04a505)

| Shopping List | Inventory Freezer | To-do Mode |
| --- | --- | --- |
| ![2E0EACF1-6EEF-4C61-A3CC-5676A5C2CC3C_1_102_o](https://github.com/user-attachments/assets/3393b1b0-080d-4ae8-b314-e01df944cbee) | ![2B4BB96F-5A97-4C13-BE6D-890148E3B3D5_1_102_o](https://github.com/user-attachments/assets/10a7f29c-de68-4e18-9ece-52aee948a00b) | ![8ADA2EC3-1224-4808-A196-1CD7C969D82B_1_102_o](https://github.com/user-attachments/assets/ecb45659-e31e-4b4b-832f-5348fe494863) |
| <img width="511" height="868" alt="grafik" src="https://github.com/user-attachments/assets/6b101d82-13e2-4c2b-946d-cd19277698ab" /> | <img width="359" height="445" alt="grafik" src="https://github.com/user-attachments/assets/7f26a41b-eef1-41da-b61c-c2dc6a001bf1" /> <img width="232" height="272" alt="grafik" src="https://github.com/user-attachments/assets/01a1a797-3839-4ee2-ac26-f3f54d381fff" /> | <img width="507" height="910" alt="grafik" src="https://github.com/user-attachments/assets/5a3f93a6-342f-4ec2-a9c8-d3e366691213" /> |

## Features

- Three modes for Shopping lists, To-do lists, and Inventory.
- Quantities, plus/minus controls, descriptions, multiple sorting methods, filtering, and suggestions.
- Local, global, and dynamic categories with optional icons, colors, counters, and hidden-header display modes.
- Browser, configured, global, category, and dish chips with responsive placement.
- Dishes for adding a configurable group of products together.
- To-do due dates, recurring intervals, warning thresholds, next-due information, and date filters.
- Inventory booking modes for stock-in, stock-out, registration, and deliberate stock correction.
- Separate EAN and manual stock variants with an optional grouped display and shared group minimum.
- Configurable Inventory highlighting, minimum-stock filters, category status, and short-term booking Undo.
- Manual EAN entry, HTTPS camera scanning, and supported Bluetooth scanner events.
- Local EAN files, Open Food Facts lookup, and a shared Home Assistant EAN product database.
- A persistent local scan queue and optional ISL transfer queue between different cards and lists.
- Optional scripts for structured EAN workflow events and successful list changes.
- HTML and PDF export plus manual and automatic Home Assistant notifications.
- Responsive chip layouts, Bubble Card support, configurable font sizes, colors, and custom CSS.
- Built-in German, English, Spanish, and French translations with regional language fallback.

Detailed behavior, requirements, examples, and every available option are maintained in the **[Wiki](https://github.com/Nisbo/ha-shopping-list-improved/wiki)**.

## Installation

### HACS

Use the quick-install button at the top of this page or search for **Improved Shopping List Card** under **HACS → Frontend**.

After installation, reload the Home Assistant frontend and add **Improved Shopping List Card** to a dashboard.

### Manual installation

Manual installation and resource registration are described on the **[Installation wiki page](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Installation)**.

Home Assistant **2026.6.0 or newer** is required.

## Documentation

- [Getting started and installation](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Installation)
- [Card configuration](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Card-Configuration)
- [Complete visual editor reference](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Visual-Editor-Reference)
- [Complete YAML configuration reference](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Configuration-Reference)
- [Shopping-list mode](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Shopping-List-Mode)
- [To-do mode](https://github.com/Nisbo/ha-shopping-list-improved/wiki/To-do-Mode)
- [Inventory mode](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Inventory-Mode)
- [Categories](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Categories)
- [Chips and suggestions](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Chips)
- [EAN scanner and manual EAN input](https://github.com/Nisbo/ha-shopping-list-improved/wiki/EAN-Scanner)
- [EAN product database](https://github.com/Nisbo/ha-shopping-list-improved/wiki/EAN-Product-Database)
- [ISL transfer list](https://github.com/Nisbo/ha-shopping-list-improved/wiki/EAN-Transfer)
- [Troubleshooting](https://github.com/Nisbo/ha-shopping-list-improved/wiki/Troubleshooting)

## Screenshots

The following screenshots are retained from the previous README. Some show older versions of the editor or card, so use the Wiki for current names and settings.

<details>
<summary><strong>Categories</strong></summary>

<img width="503" height="677" alt="grafik" src="https://github.com/user-attachments/assets/524c95cb-6de0-49f1-80b1-a34d24db92a7" />

<img width="360" height="311" alt="grafik" src="https://github.com/user-attachments/assets/2a421d24-887e-43dc-ab41-1304c67f31d4" />

<img width="619" height="301" alt="grafik" src="https://github.com/user-attachments/assets/6f439e08-e0da-4dab-adc8-ec86fc7b4758" />

</details>

<details>
<summary><strong>Dishes and chips</strong></summary>

<img width="638" height="586" alt="grafik" src="https://github.com/user-attachments/assets/d9981563-b34e-41e1-b4bf-defb2caf8061" />

<img width="604" height="509" alt="grafik" src="https://github.com/user-attachments/assets/37b4255b-3b0c-4386-856f-e89a4904282c" />

<img width="481" height="606" alt="grafik" src="https://github.com/user-attachments/assets/6d8c62c5-436a-4343-9462-a1a1d4db942c" />

</details>

<details>
<summary><strong>HTML and PDF export</strong></summary>

<img width="514" height="361" alt="grafik" src="https://github.com/user-attachments/assets/7c4ac691-281d-4d8f-a867-f687f3e6f4c2" />

<img width="504" height="415" alt="grafik" src="https://github.com/user-attachments/assets/1eddf1cc-cc7a-4731-9537-49298a4704db" />

<img width="480" height="793" alt="grafik" src="https://github.com/user-attachments/assets/9772ec6e-8586-47c0-a142-320ba4464228" />

<img width="736" height="809" alt="grafik" src="https://github.com/user-attachments/assets/73c78186-192e-4f09-913c-43ea9abd0c00" />

</details>

<details>
<summary><strong>QR camera scanner</strong></summary>

<img width="577" height="97" alt="grafik" src="https://github.com/user-attachments/assets/c7e8c1b2-02aa-4c77-b331-b4134989b8ce" />

<img width="548" height="293" alt="grafik" src="https://github.com/user-attachments/assets/202ab31f-7767-47a0-b0bf-c5052f128b59" />

<img width="527" height="508" alt="grafik" src="https://github.com/user-attachments/assets/a11c1da6-e9e3-47ac-89d8-1f5d9677836a" />

<img width="646" height="143" alt="grafik" src="https://github.com/user-attachments/assets/51c8c5a9-f62e-4ce8-962d-37150b67e212" />

</details>

<details>
<summary><strong>Additional card and editor views</strong></summary>

<img width="1613" height="946" alt="grafik" src="https://github.com/user-attachments/assets/62ee8518-3714-4f72-9d50-4158f9ce2526" />

| Mobile View | Config Editor |
| --- | --- |
| English | German |
| ![C7515C5E-3769-40FE-AA6B-D57B7259C420_1_102_o](https://github.com/user-attachments/assets/decf6cd0-c3db-4355-adfe-2f29d26fbc66) | ![73778741-17BF-44F2-A49C-2E3B343E96C5_1_102_o](https://github.com/user-attachments/assets/dc2c9a5f-6500-49b3-99c6-a2bc996e494e) |

<img width="618" height="719" alt="grafik" src="https://github.com/user-attachments/assets/abcdebef-c2dd-45b8-b8a0-90973e572433" />

<img width="236" height="272" alt="grafik" src="https://github.com/user-attachments/assets/dfa1ffa3-52c6-4c29-ba90-9d7c05c5407a" />

<img width="351" height="399" alt="grafik" src="https://github.com/user-attachments/assets/e414db2d-ec7f-4cb9-8d2e-b53bff04fd30" />

<img width="349" height="300" alt="grafik" src="https://github.com/user-attachments/assets/a64a63f2-bc8a-4130-8a5c-63a6cb30360d" />

<img width="499" height="873" alt="grafik" src="https://github.com/user-attachments/assets/c9eccaec-fbdc-49d8-83f3-c0975bad69df" />

</details>

## Feedback and contributions

Bug reports, ideas, translations, and pull requests are welcome through [GitHub Issues](https://github.com/Nisbo/ha-shopping-list-improved/issues) and [Pull Requests](https://github.com/Nisbo/ha-shopping-list-improved/pulls).

## License

This project is distributed under the terms in [LICENSE](LICENSE).
