---
title: "Making It Rain: Falling Objects in Unity"
description: How the duck, the box, the cone and the barrel started falling in Unity. First just falling, then spinning, and finally falling faster and more often the longer you play.
date: 2026-11-12
author: lomme
cover: ./images/falling-objects-unity/cover.jpg
coverAlt: A white box tumbling through the air above a traffic cone in a simple Unity test scene
tags: [Development]
ai: I used AI (ChatGPT) to understand the process.
---

In Samen in Balans, things fall from the sky and land on the plank the Boxlings are balancing on. Ximen already made the four objects in Blender: a duck, a box, a traffic cone and a barrel (you can read about them in [Falling Objects: a Duck, a Box, a Cone and a Barrel](../falling-objects/)). Now it was my turn to make them actually fall in Unity. I did it in three steps, and recorded each one.

## Step 1: something falls

I imported the four Blender models into a new Unity test scene and turned each one into a prefab, a ready-made object Unity can copy as often as it wants. Then I wrote a first script: the **spawner**.

- **A random object.** Every few seconds the spawner picks one of the four objects at random.
- **A random place.** It drops it from above the scene, at a random spot between the left and the right side, so you never know where the next one will land.
- **A random angle.** Every object starts in a random rotation, so two ducks never look exactly the same.
- **Cleaning up.** After 30 seconds an object is removed again, so the scene doesn't slowly fill up with hundreds of ducks.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/falling-objects-spawn-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/falling-objects-spawn.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

It worked, but it didn't look great yet. The objects simply dropped straight down like stones, and fell much too fast for a calm game for children.

## Step 2: spinning and falling slower

To make the objects feel lighter and more fun to watch, I added a second script to every object: **motion**.

- **Spinning.** Each object gets a random spin around a random axis, sometimes slow, sometimes a bit faster. The barrel rolls over, the cone tumbles and the duck turns around.
- **A speed limit.** The objects still use Unity's gravity, but the script caps how fast they can fall. Without that limit they'd keep speeding up all the way down. Now they float down at a steady, readable speed.
- **The spawner decides the speed.** The motion script doesn't pick its own speed: the spawner tells each new object how fast it may fall. That made the next step easy.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/falling-objects-motion-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/falling-objects-motion.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 3: getting harder as you play

A game where everything stays the same gets boring quickly. So the falling objects now get harder over time: at the start they fall slowly and only now and then, and the longer you play, the faster and the more often they come.

The game keeps track of how long it has been running, and every **25 seconds** it goes up one level. Each level changes two things:

- **More objects.** At the start, a new object falls every 7 seconds. Every level, that's one second shorter, down to one every 1.5 seconds.
- **Faster objects.** The first objects fall at 0.7 metres per second. Every level adds 0.5, up to a maximum of 3.5.

Both have a limit, so the game gets harder without becoming impossible. After about two and a half minutes it reaches its hardest level and stays there.

**At the start**

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/falling-objects-start-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1rem 1.5rem;">
  <source src="../../videos/falling-objects-start.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

**After about a minute and a half**

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/falling-objects-end-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1rem 1.5rem;">
  <source src="../../videos/falling-objects-end.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

All these numbers are fields in the Inspector, so we can tune how hard the game gets without changing the code. We'll have to play it with children to find the right values.

## What's next

The objects still fall in an empty test scene and are still white, without their cardboard colours. The next step is bringing them into the scene with the Boxlings, letting them land on the plank and making their weight push the plank out of balance. That's where the real game starts.

## What I'm taking with me

- **Build it in small steps.** First making something fall, then making it look good, then making it harder. Each step was easy to test on its own.
- **Random makes it alive.** A random object, place, angle and spin make every round feel different, with only a few lines of code.
- **Put limits on everything.** A speed limit makes the objects readable, and limits on the difficulty keep the game fun instead of impossible.
- **Keep the numbers adjustable.** The right difficulty is something we'll find by testing, not by guessing, so all the values can be changed in the Inspector.
