---
title: Feedback
nav_order: 9
---

# Feedback

There are two ways, and both are read:

| Where | Good for |
| --- | --- |
| [Discord](https://discord.com/invite/HSTtrphyFg) | Anything. Questions, "is this supposed to happen", quick reports. No GitHub account needed. |
| [GitHub issues](https://github.com/IamWarHead/ddb-game-log/issues/new/choose) | A bug you can describe step by step, or an idea. The form asks for everything needed, so nothing gets lost. |

There are two forms: **Bug report** for something that does not work, and **Feedback or idea** for something that works but could be better.

The **Send feedback** button on the Connection page takes you to the bug form and puts your diagnostics report on the clipboard; paste it into the form or into Discord.

## Discord

If you are not on the server yet, join it first: [https://discord.com/invite/HSTtrphyFg](https://discord.com/invite/HSTtrphyFg)

## What to include

- Module version, for example 3.0.0. You find it on **Gamelog Config → Debug panel**.
- Foundry VTT version.
- dnd5e version.
- What you did, step by step.
- What happened.
- What you expected to happen.
- Any red error from the browser console, see below.

Foundry shows the Foundry and system versions at the bottom of the **Game Settings** sidebar tab.

## Errors in the browser console

Foundry runs in your browser, so most problems leave a message there. It is the single most useful thing you can send.

1. Press **F12** in the browser window that runs Foundry. On a Mac use **⌥⌘I** (Chrome, Edge) or **⌥⌘C** (Safari, after enabling the Develop menu).
2. Open the **Console** tab.
3. Reproduce the problem.
4. Copy the red lines, especially any that mention `ddb-game-log`.

A screenshot of the console works too. Keep the whole message, not only its first line: the part below it says where the error came from.

{: .note }
The console may also show errors from Foundry itself and from other modules. Send what you see, we sort it out.

## Easy way

On the **Connection** page there is a **Send feedback** button. It copies a diagnostics report to your clipboard (no secrets in it) and opens the bug form. Paste the report into the form, or into your message on Discord.

You can also use **Copy support report** on the **Debug panel**.

## Do not share

Do not post any of these in Discord, in an issue, in screenshots or anywhere else:

- Your cobalt cookie (`CobaltSession`).
- A Discord webhook URL.
- Your email address.

The console prints network requests as well, so check a console screenshot for these before you post it.

Screenshots help a lot. Check them before you post.
