---
title: Changelog
nav_order: 10
---

# Changelog

Newest first. Update the module in Foundry to get a release, see [Install]({{ '/install.html' | relative_url }}#update). The history of version 2 is in the [CHANGELOG.md](https://github.com/IamWarHead/ddb-game-log/blob/master/CHANGELOG.md) of the repository.

## Version 3.2.0

- **Plans & benefits.** **Compare the plans** on the **Connection** page opens the welcome tour on its **Membership** step, to see what Basic, PRO and MAX include and where your membership stands, see [First steps]({{ '/first-steps.html' | relative_url }}#welcome-tour).
- **Welcome tour section.** The **Overview** page has a **Welcome tour** section of its own, with an **Open the tour** button.
- **What's new button.** The module version card of the **Debug panel** has a **What's new** button (GM only).
- **Tier badges.** The plans of the welcome tour carry a tier badge, and the plans included in your membership are marked as such.
- Fixed: opening the welcome tour while it is already open brings it to the front.
- Fixed: no error when a pending roll card is removed while the chat panel is hidden.

## Version 3.1.0

- **Welcome tour.** On the first start the GM gets a short tour: what DDB Gamelog does, a quick start checklist that ticks itself off, your membership and what each plan includes. Reopen it any time with **Welcome tour** on the **Overview** page, see [First steps]({{ '/first-steps.html' | relative_url }}#welcome-tour).
- **What's new.** After an update the welcome window shows what changed since the version you last ran.
- **Update highlights.** The update notice in Gamelog Config now lists the highlights of the new version.
- **Gamelog notification bar.** The module's messages show in a bar of their own, with a choice of position and how long they stay. Switch it off to use Foundry's notifications, see [First steps]({{ '/first-steps.html' | relative_url }}#notifications).
- The Support page's documentation button is now called **Module documentation**.

## Version 3.0.0

Version 3 is a complete rewrite of the module and its server. Coming from version 2? Read [Coming from version 2]({{ '/install.html' | relative_url }}#coming-from-version-2) first: uninstall v2, then install v3.

**Rolls**

- Real dnd5e rolls in chat, with kept and dropped dice and critical hits and fumbles as D&D Beyond decided them, on dnd5e 5 and 6.
- Foundry v13 and v14.
- Roll result breakdown, targeted rolls and roll privacy are now free for everyone.
- Hit and miss against the targets, and damage and healing you apply from the card.
- Chat cards with item and spell links, card themes, player colours and character avatars.
- **Avrae rolls (PRO, experimental).** Rolls made with the Avrae Discord bot that D&D Beyond shows in its game log can appear as cards. Off by default, see **Show Avrae rolls** on the **Rolls & cards** page.

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
