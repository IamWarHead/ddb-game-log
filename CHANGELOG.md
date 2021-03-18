# Version history

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
