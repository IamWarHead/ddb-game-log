---
title: First steps
nav_order: 3
---

# First steps: connect your world

You do these steps once, as the GM, in the browser you normally use for Foundry. Open **Game Settings → Configure Settings → D&D Beyond Gamelog → Open Gamelog Config** and go to the **Connection** page.

{: .note }
Once the module is active, GMs also get a **dragon button** in the sidebar, above the Settings tab, that opens Gamelog Config directly. You can switch it off under **Gamelog Config → General → Interface → Gamelog button in the sidebar**. The setting is remembered per browser.

{% include screenshot.html src="sidebar-button.png" alt="The Gamelog button above the Settings tab in the sidebar" %}

{% include screenshot.html src="connection.png" alt="Connection page" %}

## 1. Log in to D&D Beyond with your cobalt cookie

The cobalt cookie is a small piece of text that D&D Beyond gives your browser when you log in. It is called `CobaltSession`. Gamelog uses it to read your game log on your behalf.

To copy it:

1. Log in on [dndbeyond.com](https://www.dndbeyond.com).
2. Open your browser's developer tools (F12).
3. In Chrome, go to **Application**. In Firefox, go to **Storage**.
4. Open **Cookies**, then `https://www.dndbeyond.com`.
5. Copy the value of `CobaltSession`.
6. In Gamelog Config → Connection, paste it into the cobalt cookie field and click **Connect**.

{% include screenshot.html src="cobalt-cookie.png" alt="Cobalt cookie in the browser developer tools" %}

{: .note }
The cookie is stored only in this GM browser. It is never sent to your players and never shared. Treat it like a password: do not post it in Discord or in a screenshot.

{: .warning }
**Do not log out of D&D Beyond.** Logging out ends that session, and D&D Beyond hands out a new `CobaltSession` the next time you log in. The value Gamelog stored is dead from that moment, so rolls stop arriving until you copy the new one and connect again. Closing the browser or the tab is fine; only logging out breaks it.

Only one GM browser relays D&D Beyond rolls at a time. The browser that relays is the one that holds your D&D Beyond credentials. If you have a second GM, only one of you should connect. The **Overview** page tells you whether this browser or another GM's browser relays. See [Only one GM relays]({{ '/troubleshooting.html' | relative_url }}#relaying-gm).

## 2. Pick your campaign

After you log in, your D&D Beyond campaigns appear on the Connection page. Pick the campaign whose game log should feed this world. You must be the DM of that campaign.

If your campaign is not listed, use **Reload the list**, or paste the campaign link instead.

{% include screenshot.html src="campaign-picker.png" alt="Campaign picker" %}

A Foundry world belongs to the first D&D Beyond account that connects it. If you connect a world that another account connected first, see [Troubleshooting]({{ '/troubleshooting.html' | relative_url }}#this-world-is-registered-to-another-dd-beyond-account).

## 3. Link Patreon {#link-patreon}

Linking Patreon unlocks Basic, PRO or MAX features in this world. You can skip this step: the Free tier works without it, see [Tiers]({{ '/tiers.html' | relative_url }}).

On the Connection page, use the membership section to log in with Patreon. When it works, the page shows that the world is linked to your membership and its tier. Changes on Patreon apply within seconds.

{% include screenshot.html src="patreon-link-before.png" alt="Membership section before linking Patreon" %}

{% include screenshot.html src="patreon-link-after.png" alt="Membership section after linking Patreon" %}

{: .note }
No login window? Some browsers block it, and the Foundry **desktop app** never opens one. The page then shows an **Open the Patreon login** link with a copy button – use either, in any browser. The login finishes on the Gamelog server, so your world is linked the moment you are done, even if you logged in on another device. See [Troubleshooting]({{ '/troubleshooting.html' | relative_url }}#patreon-window).

{: .note }
Coming from version 2? Your world may ask you to link Patreon again, even though it was linked before. That is expected and takes one click. Your membership and the tiers you held in the past belong to your Patreon account, not to the world, so nothing is lost.

## 4. Link your characters

Your players' characters should be linked to their D&D Beyond characters, so rolls land on the right actor. See [Character linking]({{ '/features/character-linking.html' | relative_url }}).

## Check that it works

Roll something on D&D Beyond in the campaign you picked. A card should appear in Foundry chat. If not, see [Troubleshooting]({{ '/troubleshooting.html' | relative_url }}).
