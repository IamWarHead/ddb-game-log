---
title: Install
nav_order: 2
---

# Install

## Requirements

- Foundry VTT v13 or newer (v13 is the minimum, v14 is verified).
- Game system dnd5e 5.0.0 or newer.
- A D&D Beyond account that is the DM of the campaign you want to connect.
- A Patreon membership if you want features above the Free tier, see [Tiers]({{ '/tiers.html' | relative_url }}).

## Install

1. In Foundry, open **Add-on Modules** and click **Install Module**.
2. Search for **DDB Gamelog** and click **Install**.
3. Open your world, go to **Game Settings → Manage Modules**, enable **DDB Gamelog** and save.

To install from the manifest instead, paste this URL into the **Manifest URL** field at the bottom of the install dialog:

```text
https://github.com/IamWarHead/ddb-game-log/releases/latest/download/module.json
```

{% include screenshot.html src="install-manifest.png" alt="Foundry install dialog with the manifest URL" %}

Next: [First steps]({{ '/first-steps.html' | relative_url }}).

## Coming from version 2 {#coming-from-version-2}

Version 3 and the v2 module share the same module id, so Foundry can hold only one of them at a time. If **DDB Gamelog** is already installed, remove it before you install version 3.

1. Back up your world, or make a copy with **Duplicate World** in Foundry's **Game Worlds** list. Version 3 writes to your actors (hit points, conditions, initiative, combats) when you use the character sync, and that is not something you can undo in the middle of a session.
2. Close your world, so no world has the module active.
3. In **Add-on Modules**, find **DDB Gamelog** and uninstall it.
4. Restart Foundry if it still lists the old version.
5. Install version 3 as described above.

Uninstalling does not touch your world. Your v2 settings and character links stay in it, and version 3 reads them once when it first starts.

{: .warning }
Do not install version 3 over v2 without uninstalling first. Foundry may keep the old files, and you end up with a module that half updates and fails in ways nobody can reproduce.

Things that changed:

- **The cobalt cookie moves.** v2 kept it in the world. Version 3 keeps it only in the GM browser that relays rolls and clears the copy in the world, so it is no longer sent to your players. Paste your cobalt once more in **Gamelog Config → Connection**, see [First steps]({{ '/first-steps.html' | relative_url }}).
- **Link Patreon again.** Your world may ask you to link Patreon once more. That is expected and takes one click. Your membership and the tiers you held in the past belong to your Patreon account, so nothing is lost, see [First steps]({{ '/first-steps.html' | relative_url }}#link-patreon).
- **More is free.** Roll result breakdown, targeted rolls and roll privacy are free for everyone in version 3. See [Tiers]({{ '/tiers.html' | relative_url }}).
- **Modules that rely on version 2.** Modules that rebuild v2's behaviour, such as the DDB Bridge tweaks, are not needed for what Gamelog now does on its own, see [Automatisms]({{ '/features/automatisms.html' | relative_url }}). The module warns you once if it finds one that only supports v2.

## Language

The module follows Foundry's own language setting, under **Game Settings → Configure Settings → Core**. English, French, Hungarian, Portuguese (Brazil) and Spanish are available; anything not translated falls back to English.

More languages are on the way, and the translation files will be opened up so the community can add its own. If you would like to translate Gamelog into your language, say so on [Discord](https://discord.com/invite/HSTtrphyFg) and you will be told how once it opens.

## Update

Update **DDB Gamelog** like any other module: open **Add-on Modules** in Foundry and update it. Check the [Changelog]({{ '/changelog.html' | relative_url }}) to see what changed.

The module shows its version on its Debug page: **Gamelog Config → Debug panel**.

If the module tells you that your version is no longer supported, update it.

The module also tells you when a newer version is out: the GM gets a popup, and **Gamelog Config** shows a green banner at the top of every page until you update. Players never see either. Under **Gamelog Config → General → Interface** you choose whether the popup shows once per release (the default) or every time Foundry loads.
