---
title: Discord
parent: Features
nav_order: 5
---

# Discord

**Tier:** PRO.

Gamelog can post public rolls to a Discord channel.

| What | Tier |
| --- | --- |
| Discord relay of public rolls | PRO |

Only public rolls are posted. Rolls that stay private on D&D Beyond (to DM or to self) are never posted, and the server checks that again before it posts.

{% include screenshot.html src="discord-message.png" alt="A relayed roll in a Discord channel" %}

## Set it up

1. In Discord, create a webhook for the channel (channel settings, Integrations, Webhooks) and copy its URL.
2. In Foundry, open **Gamelog Config → Integrations → Discord**.
3. Paste the webhook URL and save.

{% include screenshot.html src="discord-config-1.png" alt="Discord section of the Integrations page" %}

{% include screenshot.html src="discord-config-2.png" alt="Discord section once the webhook is saved" %}

{: .note }
A webhook URL lets anyone post to your channel. Do not share it and do not show it in screenshots.

{: .note }
Upgrading from version 2 can give your world a new identifier, and the webhook belongs to the old one. If posts stop after the upgrade, set the webhook again here, see [Troubleshooting]({{ '/troubleshooting.html' | relative_url }}#upgraded-from-v2).

## Who can change it

A Foundry world belongs to the first D&D Beyond account that connected it. Other accounts can still relay rolls, but cannot use or change the world's Discord webhook. See [Troubleshooting]({{ '/troubleshooting.html' | relative_url }}#this-world-is-registered-to-another-dd-beyond-account).

## If you delete the webhook

If you delete the webhook in Discord, rolls are no longer posted. Foundry tells you so. Set a new webhook in **Gamelog Config → Integrations → Discord**.
