---
title: "Bringing the 2D UI to Life in Unity"
description: Building the UI of the idle screen in Unity, one element at a time. A check mark above every Boxling that's ready, a player count, and a countdown that only runs while there are enough players.
date: 2026-11-25T15:00:00Z
author: lomme
cover: ./images/ui-2d-unity/cover.jpg
coverAlt: The idle screen in Unity with the logo, the banner "We starten in", a big red 3 in the middle, check marks above two Boxlings that are standing up and a 2/4 player count at the bottom
tags: [Development]
ai: I used AI (Claude) to help with the code.
---

In [Redesigning the UI](../ui-redesign/), we decided what the UI of the idle screen should look like: a logo, a speech bubble that tells children to step on, a player count, a countdown banner and big numbers for the last seconds. Those were still pictures on top of screenshots. This time I built them in Unity, on top of the [idle screen](../idle-screen-unity/) where the Boxlings wake up when a child stands on their foot box. I built one element at a time, and tested each one before adding the next.

## Step 1: a check mark that appeared too early

The first element was the check mark: when a Boxling wakes up, a check mark should appear above his head, so the child sees that they're in. In my first try, I placed the check mark above KRABBEL in the scene. But it was there from the start: it floated in the air above his box while he was still asleep, and it stayed there the whole time.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-check-first-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-check-first.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 2: only when the Boxling is ready

So I linked the check mark to the animations of the Boxling. It's hidden as long as the Boxling sleeps. As soon as he starts his "ready" animation, the check mark waits half a second, until he's standing up, and then grows from nothing to its full size in a fifth of a second. When the child steps off and the Boxling folds back into his box, the check mark disappears again.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-check-ready-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-check-ready.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Then I gave all four Boxlings their own check mark. Every check mark looks for the Boxling it belongs to, so it only reacts to that Boxling's foot box. With several Boxlings awake at once, you can see exactly who's ready.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-check-all-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-check-all.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 3: the new check mark

After the redesign, I swapped the pale check mark for the new one: bright green with a cream border, so it stands out against the warm forest.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-check-new-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-check-new.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 4: the player count

Next came the player count at the bottom of the screen. It goes up by one every time a Boxling wakes up, and down by one when a Boxling goes back to sleep. It uses the same moment as the check mark, so the two always agree.

We need at least two players to start a game. So with zero or one player, the count shows **0/2** or **1/2**: you can see straight away that one more child is needed. From two players on, it switches to **2/4**, **3/4** and **4/4**, because two more children can still join.

Every digit also gets the same width. Without that, the text jumped a little to the side every time the number changed.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-counter-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-counter.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 5: the countdown, and a bug

Then I added the rest of the screen: the logo in the top left, the speech bubble "Sta op een platform om mee te doen!" (stand on a platform to join in) in the top right, and the countdown. As soon as two players are ready, the brown banner appears at the top: "We starten in 25s" (we start in 25 seconds), and it counts down every second.

The first version had a bug. When a player stepped off during the countdown, the count went back to 1/2, but the timer just kept running. In the video, the banner still says "We starten in 6s" with only one player left. The game would have started with one child.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-timer-bug-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-timer-bug.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 6: 3, 2, 1

For the last three seconds, the banner only says "We starten in", and a big 3, 2 and 1 appear in the middle of the screen. Every number pops up: it grows a bit bigger than its normal size and then settles back, so each second feels like a beat. At zero, the banner and the number disappear. That's the moment the game will start. For now nothing happens yet, but the countdown already sends a signal that the game can listen to later.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-countdown-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-countdown.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 7: stopping when players step off

To fix the bug, the countdown now checks the player count every frame. As soon as there are fewer than two players, it stops and the banner disappears. When a second child steps on again, it starts over from 25 seconds. In the video, two players keep stepping on and off: every time one steps off, the banner is gone, and every time there are two again, the countdown starts again.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/ui2d-reset-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/ui2d-reset.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What's next

- Start the game when the countdown reaches zero, so the Boxlings walk from the forest onto the plank.
- Build the player cards for during the game, with the lives and the pedal arrows.
- Test with children how long they're willing to wait, and whether 25 seconds is too long or too short.

## What I'm taking with me

- **Link the UI to what already happens.** The check mark and the count follow the Boxling's animation, so they can never say something different from what you see.
- **Show what's missing.** "1/2" tells a child that one more friend is needed. "1/4" would make it look like they have to wait for three more.
- **Test what happens when people leave.** The countdown worked fine as long as everyone stayed. The bug only showed up when a player stepped off.
- **Small animations make a big difference.** A check mark or a number that pops up feels much more alive than one that just appears.
