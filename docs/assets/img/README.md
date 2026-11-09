# Screenshots

Pages include the images below via `{% include screenshot.html src="<name>.png" alt="…" %}`. Add the files here as PNG with exactly these names. Until a file exists, the page simply leaves the image out.

| File | What to capture | Used on |
| --- | --- | --- |
| `install-manifest.png` | Foundry "Install Module" dialog with the manifest URL filled in | install |
| `connection.png` | Gamelog Config, Connection page | first-steps |
| `cobalt-cookie.png` | Browser developer tools, cookie list, `CobaltSession` selected, value hidden | first-steps |
| `campaign-picker.png` | Campaign list on the Connection page | first-steps |
| `patreon-link-before.png` | Membership section before linking Patreon | first-steps |
| `patreon-link-after.png` | Membership section after linking Patreon | first-steps |
| `rolls-card.png` | A finished roll card in Foundry chat | features/rolls-and-chat-cards |
| `pending-card.png` | A pending ("rolling…") card | features/rolls-and-chat-cards |
| `card-themes.png` | Two or more card themes next to each other | features/card-look |
| `character-linking.png` | Characters page, character linking list | features/character-linking |
| `damage-card.png` | A damage or healing card with the apply buttons | features/character-sync |
| `discord-config-1.png` | Integrations page, Discord section, webhook hidden | features/discord |
| `discord-config-2.png` | Discord section once the webhook is saved | features/discord |
| `discord-message.png` | A relayed roll in a Discord channel | features/discord |
| `combat-tracker-1.png` | The encounter list in the load dialog | features/combat-tracker |
| `combat-tracker-2.png` | Foundry combat tracker with a loaded D&D Beyond encounter | features/combat-tracker |
| `statistics-overview.png` | Statistics, Overview tab with highlights and the character table | features/statistics |
| `statistics-checks.png` | Statistics, Checks & saves tab with skills and saves | features/statistics |
| `statistics-combat-1.png` | Statistics, Combat tab with the attack and damage table | features/statistics |
| `statistics-combat-2.png` | Statistics, Combat tab scrolled down: combat charts, healing and death saves | features/statistics |
| `statistics-luck-1.png` | Statistics, Luck tab with the selectors and luck per character | features/statistics |
| `statistics-luck-2.png` | Statistics, Luck tab scrolled down: luck awards (switch on) and the d20 distribution | features/statistics |
| `statistics-settings.png` | Statistics, Settings tab | features/statistics |
| `statistics-player-button.png` | The "My dice statistics" button next to the chat input (player view) | features/statistics |
| `statistics-player.png` | The player's "My statistics" window | features/statistics |
| `statistics-recap-card.png` | A session recap card in Foundry chat | features/statistics |
| `statistics-recap-discord.png` | The session recap embed in a Discord channel | features/statistics |
| `statistics-sessions-recap.png` | Statistics, Sessions tab scrolled down: Current session and Session recap | features/statistics |
| `statistics-sessions.png` | Statistics, Sessions tab with history and the current session | features/statistics |
| `statistics-import.png` | Statistics, Settings tab, "Import and export" section (export, from D&D Beyond, from file) | features/statistics |
| `sidebar-button.png` | The sidebar tab column with the dragon button above the Settings tab | first-steps |
| `general-page.png` | Gamelog Config, General page | features/rolls-and-chat-cards |
| `legendary-patrons.png` | Gamelog Config, Legendary Patrons page with a few names on the list | features/legendary-patrons |
| `integrations.png` | Gamelog Config, Integrations page | integrations |
| `debug-panel.png` | Gamelog Config, Debug panel | troubleshooting |

## Naming

- Lowercase, words separated by hyphens, `.png`.
- The name describes the content, not the page.

## Never show these in a screenshot

Crop or blur before you commit:

- Installation ids.
- Cobalt cookies (`CobaltSession`).
- Discord webhook URLs.
- Email addresses.
- Other players' names. Use test accounts or blur the names.

Also check the browser tab bar, bookmarks and the support report for the same items.
