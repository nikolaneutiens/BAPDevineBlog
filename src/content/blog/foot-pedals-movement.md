---
title: "Boxlings on Pedals: Moving With Your Feet"
description: From USB foot switches that all moved the same Boxlings, to every player walking their own Boxling. With two bugs on the way, and a first test with two people.
date: 2026-11-12T15:00:00Z
author: lomme
cover: ./images/foot-pedals/cover.jpg
coverAlt: Two team members standing at a desk with their feet on foot switches, watching the Boxlings move on the screen
tags: [Development]
ai: I used AI (Claude) to help fix the bugs.
---

After the [Arduino buttons](../arduino-buttons/), it was time for what Samen in Balans is really about: moving a Boxling with your feet. We chose foot panels for the final game (you can read why in [Balancing With Your Feet: Why We Chose Foot Panels](../foot-panels/)). Before building those, I wanted to know how playing with your feet feels.

## Step 1: foot switches as a keyboard

For the test I used the foot switches we could already get our hands on: the **FS221-P**. It's a simple USB foot switch that plugs into a normal USB-A port.

To make the switches talk to Unity, I installed **ElfKey**. With that program, you can give every foot switch its own key on the keyboard. So to the laptop, pressing a pedal is just pressing a key, just like the Arduino in the last test.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/pedals-arrow-keys-poster.jpg" style="display: block; width: 100%; max-width: 22rem; margin: 1.5rem auto; border-radius: 14px;">
  <source src="../../videos/pedals-arrow-keys.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

It worked straight away, but all four Boxlings moved at the same time. They all still listened to the same keys, the arrow keys, so one pair of pedals moved the whole team.

## Step 2: every Boxling his own keys

In the game, every player controls one Boxling. So I gave each Boxling his own *Move* action with his own two keys:

- **KRABBEL** uses the left and right arrow.
- **PUK** uses S and D.
- **RITS** uses G and H.
- **SPRIET** uses K and L.

The setup tool from the [first movement post](../unity-first-movement/) picks these up automatically, so every Boxling gets his own keys with one click. Now ElfKey only has to send the right key for each pedal.

## Problem 1: KRABBEL can't get past

As soon as the Boxlings could move on their own, the first problem showed up. KRABBEL stands on the far left, and when he wanted to walk to the right, he bumped into the others. The Boxlings all had a physics body, so they pushed against each other like real boxes, and KRABBEL was stuck behind the rest.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/pedals-blocked-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/pedals-blocked.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

In our game, the players have to be able to walk anywhere on the plank, also past each other. So I made the Boxlings ignore each other's collisions: they still stand on the ground, but they can walk through each other. To make it look right, the Boxling that walks past moves a bit to the front, so he walks in front of the other one instead of through him.

## Problem 2: everyone in one spot

That fix brought a new bug. When all the players walked to the same place, the Boxlings ended up standing inside each other: a mess of heads, hats and arms in one spot.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/pedals-overlap-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/pedals-overlap.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

The fix was to give Boxlings that stand close to each other their own layer, one behind the other:

- **The last one to move is in front.** That's the Boxling a player is paying attention to, so he should always be visible.
- **The others step back.** Every Boxling that overlaps gets its own layer, a bit further back, so they never stand inside each other.
- **You don't see the step.** A Boxling that moves forward also gets a little smaller by exactly the right amount, so on the screen he keeps the same size and the same place. Only the order in which they're drawn changes.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/pedals-fixed-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/pedals-fixed.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Now the Boxlings can walk past each other and stand in the same spot, and you can still see who is who.

## Step 3: playing together

With every Boxling listening to his own keys, I added two more foot switches. That way two people could each control their own Boxling with their own pedals, and we could finally test the movement together.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/pedals-two-players-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/pedals-two-players.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What's next

The next step is giving every player two foot panels of their own, one for left and one for right, and building them into a wooden construction. That has to wait until we have all the materials. Once it's built, four players can stand on it together, and we can test it with children.

## What I'm taking with me

- **Use what you already have.** The foot switches and ElfKey turned pedals into keys, so we could test with our feet without building anything.
- **One fix can cause the next bug.** Letting the Boxlings walk through each other solved the first problem, but made the second one. Testing again after every change showed it straight away.
- **Think about what the player sees.** The Boxling a player just moved is the one they're looking at, so that one goes in front.
- **Test with more than one person.** Moving four Boxlings alone at your desk is not the same as two people playing next to each other.
