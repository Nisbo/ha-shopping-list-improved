# Improved Shopping List Card 3.3.0

Version 3.3.0 adds automatic collapsing of expanded category chips.

## Highlights

- New option `category_chips_collapse_timeout` (visual editor: "Auto-collapse category chips (seconds)") collapses all expanded category chips after the configured number of seconds.
- Expanding a category restarts the countdown. Categories that are still expanded when the card loads also collapse after the timeout.
- `0` (default) disables automatic collapsing, so existing cards keep their current behavior. The maximum value is 3600 seconds.
- Editor label and help text are available in German, English, Spanish, and French.

The complete configuration and workflow documentation is available in the [Wiki](https://github.com/Nisbo/ha-shopping-list-improved/wiki).
