---
title: Changelog
nav_order: 10
---

# Changelog

Newest first. Update the module in Foundry to get a release, see [Install]({{ '/install.html' | relative_url }}#update). The history of version 2 is in the [CHANGELOG.md](https://github.com/IamWarHead/ddb-game-log/blob/master/CHANGELOG.md) of the repository.

## Version 3.0.0

Version 3 is a complete rewrite of the module and its server. Coming from version 2? Read [Coming from version 2]({{ '/install.html' | relative_url }}#coming-from-version-2) first: uninstall v2, then install v3.

**Rolls**

- Real dnd5e rolls in chat, with kept and dropped dice and critical hits and fumbles as D&D Beyond decided them, on dnd5e 5 and 6.
- Foundry v13 and v14.
- Roll result breakdown, targeted rolls and roll privacy are now free for everyone.
- Hit and miss against the targets, and damage and healing you apply from the card.
- Chat cards with item and spell links, card themes, player colours and character avatars.

**Characters**

- Live character updates from D&D Beyond: hit points, temporary hit points, armor class, exhaustion, inspiration, death saves, experience, class levels, resistances, immunities, vulnerabilities and conditions (PRO).
- Character linking by hand, or automatically for characters made with ddb-importer.
- Monster rolls and rolls from the D&D Beyond player app (PRO).

**New**

- **Automatisms (PRO, experimental).** Spell templates, an effect tray and usage buttons on cards, so you no longer need the DDB Bridge tweaks.
- **D&D Beyond combat tracker in Foundry (PRO, experimental).**
- **Statistics.** Party at a glance, highlights and a character table (Basic); monsters, checks, combat, luck, charts, awards, session history, export, import and a session recap, also for players (PRO).
- **Roll history import from D&D Beyond (PRO).**
- **Discord relay** of public rolls and the session recap (PRO).
- **Midi-QoL integration** (PRO, experimental), Dice So Nice, JB2A and Automated Animations.
- **Gamelog Config**, one window for the connection, characters, integrations, statistics and support, in English, French, Hungarian, Brazilian Portuguese and Spanish.
- **Legendary Patrons** page, and a notice when a newer version is out.

**Security**

- The cobalt cookie stays in the GM's browser. It is no longer stored in the world and never reaches your players.
- A Foundry world belongs to the first D&D Beyond account that connects it. Others cannot use or change its Patreon link or Discord webhook.
- Patreon login finishes on the Gamelog server, so it also works in the Foundry desktop app and without a popup.
