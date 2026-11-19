---
title: "Waking Up the Boxlings: The Idle Screen in Unity"
description: Building our idle screen in Unity. Four Boxlings sleep in their boxes in the forest, and jump up as soon as a child stands on their foot box. On the way, I had to make the 3D Boxlings look like they belong in the Blender background.
date: 2026-11-19T12:00:00Z
author: lomme
cover: ./images/idle-screen-unity/cover.jpg
coverAlt: The idle screen in Unity, a cardboard forest at sunset, with SPRIET standing up and the other three Boxlings still folded into their boxes
tags: [Development]
ai: I used AI (Claude) to help with the code and the lighting.
---

In [Designing the Idle State](../idle-state/), Nikola explained what our idle screen has to do: show that the installation can be played, and invite children to step onto a foot box. In [The Idle Screen: A Forest Waiting for Players](../idle-screen/), Ximen made the forest, the background and the animations of a Boxling that sleeps, wakes up, waits and goes back to sleep. His next step was putting it all together in Unity. That's what I did, in a separate test project, just like the [plank](../balance-plank/) and the [edge animation](../edge-unity/).

## Step 1: sleeping Boxlings

I brought Ximen's forest and the four Boxlings into one scene. The Boxlings stand in front, each on a block in their own colour, folded into their boxes. Ximen's sleeping animation plays on all four: the little Z's float above their heads, waiting for someone to wake them up.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/idle-sleeping-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/idle-sleeping.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

A small script shows the box pose in the editor too, outside Play mode. Without it, the Boxlings stood upright in the scene while I was placing them, and only folded into their box once the game started.

## Step 2: waking up

When a child stands on **both** pedals of their foot box, their Boxling jumps up out of the box. When the child steps off, the Boxling folds back into the box.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/idle-ready-first-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/idle-ready-first.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Two small delays make it feel calm:

- **A quarter of a second** on both pedals before the Boxling gets up. Brushing a pedal while walking past doesn't wake anyone.
- **One second** off the pedals before he folds back. A child who wobbles or shifts their feet for a moment doesn't lose their Boxling.

The pedals come from the [Arduino](../arduino-pedals/), but every Boxling also listens to two keys on the keyboard. That way I can test the idle screen without the pedals connected.

## The animations behind it

Ximen made four animations for every Boxling: **NotReady** (sleeping in the box), **Ready** (jumping up), **ReadyIdle** (standing ready and looking around) and **UnReady** (folding back into the box). In Unity's Animator, I linked them like this:

- **NotReady → Ready,** as soon as the child stands on the box. This happens right away, without waiting for the sleeping animation to finish.
- **Ready → ReadyIdle,** after the jump has played completely.
- **Ready or ReadyIdle → UnReady,** right away when the child steps off.
- **UnReady → NotReady,** once the Boxling is completely back in his box.
- **UnReady → Ready,** if the child steps on again while the Boxling is still folding. He doesn't have to go all the way back first.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/idle-animator-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/idle-animator.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Instead of drawing all those arrows by hand for every change, I made a small tool in the Unity menu that builds this whole flow with one click. If an animation changes, I click it again and everything is linked the same way.

## Step 3: the same light as the background

The first versions had one big problem. Ximen's background is a render from Blender, with warm orange sunlight and soft pink shadows. The Boxlings and the trees in front of it are real 3D models, lit by Unity. They looked pale and grey, as if they were in a different place than the background. You can see it in the videos above.

Making them match took a few steps:

- **The same lights as in Blender.** A low, orange sun from the right and a soft pink light from the other side, with the same colours and directions as in the Blender scene.
- **No light on the background.** The background image was lit by Unity's sun too, so its colours changed: the purple sky became beige. Now the background ignores all light and shows exactly the colours of the render.
- **Darker corners.** Blender adds soft shadows where things touch, like under a Boxling or between the trees. In Unity I made that effect a lot stronger, so the models feel like they stand on the ground.
- **No extra colour filter.** The background was already finished in Blender. A colour filter in Unity only made it look different from the original.
- **A wider background.** The image was too narrow for the camera, so it repeated at the sides. We made it wider by mirroring its edges, so it now shows only once.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/idle-lighting-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/idle-lighting.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Now the Boxlings and the trees in front have the same warm sunset as the forest behind them.

## All four together

This is the idle screen with all four Boxlings. Every Boxling only wakes up when their own foot box is used, so the children can see right away which Boxling is theirs.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/idle-all-four-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/idle-all-four.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What's next

The Boxlings now wake up and fall asleep again. Next, the idle screen has to show more clearly what's going on, with the check mark and the player count from the [UI sketches](../ui-sketches/), and the game has to start once all four Boxlings are awake. After that, we'll connect it to the game itself, so the Boxlings walk from the forest onto the plank.

## What I'm taking with me

- **Let the player see their effect right away.** The moment a child steps on, their Boxling jumps up. That's the clearest invitation to keep playing.
- **Give the input a little patience.** Two short delays stop a Boxling from waking up or falling asleep by accident.
- **Light the scene like the art.** A 3D model in front of a render only fits when it gets the same light. And the render itself shouldn't be lit again.
- **Build tools for repeated work.** Linking four animations by hand is easy to get wrong. One click in the menu does it the same way every time.
