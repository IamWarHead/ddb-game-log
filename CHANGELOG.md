# Version history

## Version 1.6.1

- Fixes an issue in the initiative trigger
- Fixes an issue which rendered welcome message totally useless
- Possible fixes an issue with the roll parsing and calculation when both values were the same.
- Fixes an issue with Patreon Auth
- Adds enhanced debug logs to be able to address a rare issue with MidiQOL

## Version 1.6.0

- Adds midi-qol support (experimental): 
  - Good to know:
    - You have to enable Midi integration both in ddb-game-log (in the core settings / integrations panel) and in MidiQoL 
    in the experimental features area
    - You have to set up the mapping properly
    - You need to import both the characters and monsters with ddb-importer from dnd beyond to get this integration working.
  - Known issues:
    - Spells without attack/damage (like fly) won't work with midi. I am still looking for a solution.
- Adds [ pan to token / open character sheet / open character sheet on dnd beyond ] on avatar or character name click
- Fixes an issue with message border color override (Thanks @MorningStarZero :beer:)
- Fixes an issue with character and condition updater
- Optimised item lookup
- Optimised item and spell descriptions lookup

## Version 1.5.8

- Fixes an issue with AA integration: Some animations were not triggering. Kudos for @zamrod for the report.

## Version 1.5.7

- Fixes an issue with AA integration when some rolls were not displayed due to a failed if statement. Kudos for @casanova for the report!
- There are some error messages by Otigon's AA when pending rolls happens, issue has been reported, pull request has been made in their repo.

## Version 1.5.6

- Fixes an issue with AA integration when animations were not triggering. Kudos goes to @ocarlo3 for reporting the issue :beer:

## Version 1.5.5

- Fixes an issue when a condition removal happened.

## Version 1.5.4

- Small fixes and improvements

## Version 1.5.3

- Fixes an issue with the character updater

## Version 1.5.2

- Fixes an issue with the condition updater (Kudos for @JacksonBockus and @DavidJott for reporting the issue) 

## Version 1.5.1

- Adds real-time character condition updates
- Adds a checkbox to respect custom (non-ddb) conditions on the entities
- Adds block separators to character updater settings
- Fixes a small issue with the character updater
- Fixes an issue with Dice So Nice! integration
- Adds logging to patreon authorization process to be able to address an issue reporter by @luette (Big thanks!)

## Version 1.5.0

- Adds real-time character updates for the following attributes:
  - Hit points
  - Inspiration point
  - Exhaustion level
  - Death save values
  - Experience points
  - Character level (supports multi-classes)
  - Damage Resistances
  - Damage Immunities
  - Condition Immunities
  - Damage vulnerabilities

## Version 1.4.2

- Fixes a blocker issue when JB2A / AA integration was preventing chat message creation.

## Version 1.4.1

- Fixes JB2A / Otigon's AA integration on attack rolls
- Fixes an issue if the campaign dm was deleted and it blocked the user to pass module ownership (Kudos for @shinryux)
- Fixes an issue with the dice breakdown gfx, it will be more visible from now (Kudos for @David_Jott)
- Adds the possibility to make item/spell descriptions visible by default (it will use the system setting instead of a new module setting) (Kudos for @KnyghtLyght)
- Adds the possibility to exclude rolls of ddb users if they are not existing in the mapping (Kudos for @ThayerTR)
- Initiative tracker will honour dex tiebreaker if using dnd5e system (Kudos for @FleetfootMike)
- Fixes an issue with destructuring in the rollparser 
- Forien's copy environment won't copy ddb-game-log related settings anymore
- Adds support for bug reporter, please use it to report bugs
- Adds a missing partial
- Adds a missing helper method to uiHelper
- Adds a lot of minor fixes

## Version 1.4.0

- Adds JB2A / Otigon's Automated Animations support
- Adds minor fixes and general stability improvement

## Version 1.3.2

- Mapping rework
- Adds some minor fixes

## Version 1.3.1

- Fixes an issue with the WelcomeMessage
- Fixes an issue with the mapping. (Kudos for @venom986 for the report)

## Version 1.3.0

- ChatCards refact to eliminate deprecation warnings
- Implements D&D Beyond targeted rolls feature support
- Fixes an issue with dice so nice integration

## Version 1.2.6

- Fixes two serious issues, please do not hesitate to update your module
- Adds debounce to reloads
- Changes compatible core version to 0.8.6
- Adds 0.8.6 compatibility fixes

## Version 1.2.5

- Fixes an issue with the message timestamp position
- Fixes an issue that core and membership settings panel couldn't be opened
- Fixes: native foundry roll results couldn't be opened (Kudos for @ViolatesParity)
- Fixes: Dice So Nice was not working if the module was enabled (Kudos for @evil_c0okie)
- Entity badges will be hidden on rolls if the roll is not public
- Fixes an issue with the dice images in the roll results

## Version 1.2.4

- Fixes the flavor text collapsing issue
- Adds a notice to membership settings panel about 1st day of the month issue at patreon

## Version 1.2.3

- Fixes an issue with the core settings panel which was caused by the monster roll visibility input

## Version 1.2.2

- Adds compatibility fixes (Foundry v0.8.x)
- Changed minimum core requirement to 0.8.3
- Implements proper roll object for Foundry
- Adds core version checking
- Adds version mismatch info
- Adds official monster roll support
- Adds Quick Actions (apply damage, etc...)
- Enables npc listings in the alternate mapping logic (for monster rolls)
- Implements DDB profile images in roll messages
- Adds roll visibility config for monster rolls to integration config panel
- Adds entity badges to roll messages (pc / monster)
- Fixes discarded dice images in roll messages
- Adds roll privacy support
- Adds support to use DDB Importer's data to auto create mapping between D&D Beyond monster entity and Foundry NPC Actor.
- Connection improvements with D&D Beyond and DDB Gamelog backend services
- Various small fixes

## Version 0.10.2
- Adds message border color override (with player color)
- Fixes an issue with the debug panel (it was not rendering sometimes)

## Version 0.10.1
- Fixes an issue with Actor filtering, npcs will not show up in mapping from now.

## Version 0.10.0
- Implements Initiative Tracking (combatants initiative value will be set upon rolling for initiative on D&D Beyond | Gamelog Lite+)
- Implements Item and Spell Description cards (Gamelog Pro+)
- Adds basic automatism configs to core settings/integrations
- Adds chat card configs to core settings / integrations

## Version 0.9.3
- Code cleanup, some minor refact
- Adds debug info to settings sidebar panel if `debug mode` is on

## Version 0.9.2
- Fixes an issue with CUB (Kudos for @fredben78 for reporting and helping me to address the issue)
- Fixes an issue with Dice So Nice! integration (Kudos for @rmasoni for reporting and helping me to address the issue)
- Fixes an issue with chat message rendering and styling (2x Kudos for @rmasoni for reporting and helping me to address the issue)
- Full message handling rework
- Adds auto import feature (MrPrimate's DDB Importer is a dependency) for Gamelog Basic members and above.
- Fixes an issue with chat message button handlers
- Fixes an issue with Dice So Nice! integration when an inactive user object was passed to it. Falling back to gm user in this case from now.

## Version 0.8.3
- Fixes an issue with gameIds

## Version 0.8.2
- Fixes a critical issue with DDB / Foundry Player mapping
- Kudos for @venom986 for reporting the issue

## Version 0.8.1
- Fixes an issue with gameId checks

## Version 0.8.0
- Adds Discord Integration feature (Gamelog PRO+)
- Connection improvements
- Fixes an issue with negative constants, kudos for @gazoir

## Version 0.7.18
- Fixes reconnection logic
- Removed logging of unnecessary debug messages, issue was fixed before
- Fixes an issue with authorization process, kudos for h2ocelot
- Adds lazy termination event handlers

## Version 0.7.17
- Core settings view has been revamped
- Adds extra validation to core settings
- Adds hints to core settings

## Version 0.7.16
- It's a possible fix for Issue #15

## Version 0.7.15
- Implements client side version checking
- Adds extra checks to be able to address and reproduce Issue #15

## Version 0.7.13
- Fixes a label in membership settings

## Version 0.7.12
- Fixes an issue with custom themes

## Version 0.7.11
- Adds `ddb-data-grabber` support

## Version 0.7.10
- Fixes an issue with dice3d integration check which prevented to display rolls as a chat message

## Version 0.7.9
- Fixes an issue with dice so nice depcheck when user has no valid license

## Version 0.7.8
- Adds join discord button to welcome message
- Cleans up some good old code
- Adds "cannot validate your license" message to membership window
- Implements openWindow helper method

## Version 0.7.7
- Fixes an issue with depcheck
- Dice So Nice has been removed from hard dependencies
- Adds stylesheets to module.json
- Cobalt Cookie input type change

## Version 0.7.6
- Introduces product keys
- Adds product key input into membership settings panel

## Version 0.7.5 
- Fixes the incompatibility with plutonium's compact message header.

## Version 0.7.4
- Fixes displaying character names in pending rolls

## Version 0.7.3
- It will display character name instead of player name if available.
- Extra special kudos to @gazoir for the notice
