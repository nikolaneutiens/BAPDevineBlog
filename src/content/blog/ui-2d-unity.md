---
title: "Bringing the 2D UI to Life in Unity"
description: Building the UI of the idle screen in Unity. A check mark above every Boxling that's ready, a player count, and a countdown that only starts when there are enough players.
date: 2026-11-25T15:00:00Z
author: lomme
cover: ./images/ui-2d-unity/cover.jpg
coverAlt: The idle screen in Unity with the logo, the banner "We starten in", a big red 1 in the middle, check marks above two Boxlings that are standing up and a 2/4 player count at the bottom
tags: [Development]
ai: I used AI (Claude) to help with the code.
---

In [Redesigning the UI](../ui-redesign/), we decided what the UI of the idle screen should look like: a logo, a speech bubble that tells children to step on, a player count, a countdown banner and big numbers for the last seconds. Those were still pictures on top of screenshots. This time I built them in Unity, on top of the [idle screen](../idle-screen-unity/) where the Boxlings wake up when a child stands on their foot box.

## Step 1: a check mark above every Boxling

The first element I built was the check mark. When a Boxling wakes up, a check mark pops up above his head, so the child sees that they're in. When the child steps off and the Boxling goes back into his box, the check mark disappears.

I linked it to the animations of the Boxling. As soon as the Boxling starts his "ready" animation, the check mark waits half a second and then grows from nothing to its full size in a fifth of a second. That way it doesn't appear before the Boxling is standing up, and the little pop makes it feel alive.

These are the first versions, still with the check mark from the first UI design:

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-old-check-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-old-check.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-old-all-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-old-all.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

With several Boxlings awake at once, every check mark stays above its own Boxling, so you can see who's ready.

## Step 2: the new UI elements

After the redesign, I swapped in the new elements: the green check mark with a cream border, the logo in the top left, the speech bubble "Sta op een platform om mee te doen!" (stand on a platform to join in) in the top right, and the player count at the bottom. All the text uses the same rounded font as in the designs.

## The player count

The player count goes up by one every time a Boxling wakes up, and down by one when a Boxling goes back to sleep. The check mark and the count use the same moment, so they always agree.

We need at least two players to start a game. So while there are zero or one players, the count shows **0/2** or **1/2**: you can see straight away that one more child is needed. From two players on, it switches to **2/4**, **3/4** and **4/4**, because two more children can still join.

Every digit gets the same width. Without that, the text jumped a little to the side every time the number changed.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-two-players-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-two-players.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## The countdown

As soon as two players are ready, the brown banner appears at the top: "We starten in 25s" (we start in 25 seconds), and it counts down every second. Other children can still join during that time.

For the last three seconds, the banner only says "We starten in", and a big 3, 2 and 1 appear in the middle of the screen. Every number pops up: it grows a bit bigger than its normal size and then settles back, so each second really feels like a beat.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-countdown-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-countdown.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

At zero, the banner and the number disappear. That's the moment the game will start. For now nothing happens yet, but the countdown already sends a signal that the game can listen to later.

## When players step off

Children can change their mind. If the number of players drops below two during the countdown, the countdown stops and the banner disappears. It starts again from 25 seconds when there are two players again. That way the game never starts with only one child on the platforms.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-step-off-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-step-off.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What's next

- Start the game when the countdown reaches zero, so the Boxlings walk from the forest onto the plank.
- Build the player cards for during the game, with the lives and the pedal arrows.
- Test with children how long they're willing to wait, and whether 25 seconds is too long or too short.

## What I'm taking with me

- **Link the UI to what already happens.** The check mark and the count follow the Boxling's animation, so they can never say something different from what you see.
- **Show what's missing.** "1/2" tells a child that one more friend is needed. "1/4" would make it look like they have to wait for three more.
- **Small animations make a big difference.** A check mark or a number that pops up feels much more alive than one that just appears.
- **Make the start safe.** The countdown only runs with at least two players, and stops when someone steps off.
