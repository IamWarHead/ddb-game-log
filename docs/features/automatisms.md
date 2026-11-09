---
title: Automatisms (experimental)
parent: Features
nav_order: 7
---

# Automatisms (experimental)

**Tier:** PRO. **Status:** experimental.

{: .warning }
This feature is experimental. It works, but it may change or break in any release. Please report problems, see [Feedback]({{ '/feedback.html' | relative_url }}).

| What | Tier |
| --- | --- |
| Spell area templates | PRO |
| Apply activity effects from cards | PRO |
| Usage buttons on cards (save with DC, place template, consume/refund) | PRO |

Relayed D&D Beyond rolls can drive the usual dnd5e follow-ups, so you do not click everything twice: once on D&D Beyond and once in Foundry.

Everything here is **off by default**. The switches are in **Gamelog Config → Rolls & cards → Automatisms**, one per feature, so you can turn on only what you want.

## Spell area templates

The first roll of a spell or ability with an area (Fireball, Breath Weapon) opens template placement on the scene.

- **Who places:** the player who cast it, when they are online; the GM otherwise. You can also set it to always the GM.
- **Targets:** the tokens inside the placed template become the card's targets and the Foundry targets of the caster's player. You can turn this off to place templates without touching targets.
- **Removal:** keep, remove at the next turn, or remove at the next round. The last two need a running combat.
- A card keeps a **Place template** button (with usage buttons on), so a cancelled or missed placement can be repeated from the card.
- Private rolls (to DM / to self) never place templates, so the table does not see a hidden cast.

{: .note }
Spells with **no roll at all** (Bless, Web, Shield of Faith) send nothing to the game log, so no card and no template. There is nothing to key off — this is how D&D Beyond works, not a bug.

## Apply activity effects

Cards of activities that apply effects (Bless, Faerie Fire, Vicious Mockery) show dnd5e's own effects tray. The GM picks targets and applies the effect from there.

Same note as above: activities without a roll produce no card, so there is no tray either.

## Usage buttons

Cards show the matched activity's buttons, where dnd5e would show them:

- **Saving throw with DC** for the targeted tokens (everyone can click for their own tokens).
- **Place template** (GM).
- **Consume / refund** uses, spell slots and resources (GM).

While Midi-QoL handles saves and damage, the save buttons stay hidden so nothing is rolled twice.

## With other modules

- **Midi-QoL** keeps applying damage and requesting saves; automatisms stay out of its way.
- **JB2A + Automated Animations**: when a template is placed for the roll, Automated Animations plays the animation from the template itself, so the animation is not doubled.

## Known limits

- Everything needs the roll matched to an item on a linked actor. Unmatched rolls behave as before.
- Consume/refund works for activity and item uses, spell slots and attribute resources, with plain amounts only.
- Template removal by turn or round does nothing outside a running combat.
- Templates without a caster player online are placed by the GM; the player's old targets cannot be cleared in that case, because only a player's own browser can change them.
- Without PRO the section is shown locked, see [Tiers]({{ '/tiers.html' | relative_url }}).
