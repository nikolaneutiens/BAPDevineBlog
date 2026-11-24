---
title: "TIPPER Learns to Walk: A Walk Cycle With a Plank"
description: How I animated TIPPER's walk cycle while he carries the plank above his head, and how mirroring the keyframes turned one step into a clean, endless loop.
date: 2026-11-24T14:00:00Z
author: ximen
cover: ./images/tipper-walk/cover.webp
coverAlt: TIPPER seen from the front at an angle, walking with both arms up, carrying a long plank above his head
tags: [Design]
ai: No AI was used. I animated this walk cycle myself.
---

In our story, the Boxlings rely on TIPPER, the gentle giant who carries all the supplies home across the ropes. In the game, he carries the long plank the four Boxlings stand on. So after [building and rigging TIPPER](../tipper/), the next big step was making him walk, without dropping the plank.

![TIPPER walking in place with the plank above his head, seen from the front and from the side](./images/tipper-walk/walk.gif)

## Walking with a plank

A normal walk cycle has swinging arms. TIPPER can't do that: his hands hold the plank above his head the whole time. That changes the whole walk:

- **The arms stay up.** Both arms hold the plank, so all the movement has to come from the legs and the body.
- **The legs do the work.** Every step has a clear lift, a step forward and a landing, so you can see the weight he's carrying.
- **In place.** Like the run of RITS, the walk stays on one spot. In the game the world moves under him, so the animation itself never travels forward.

The loop is 30 frames long. At 24 frames per second, one full cycle (a left step and a right step) takes a bit more than a second, which feels slow and heavy, like a giant carrying something important.

## The key poses

I started with the most important poses of one step: the moment a foot lands in front, the moment the other leg passes underneath him, and back again for the other foot.

![Four key poses of the walk from the side: left foot forward, legs passing, right foot forward, legs passing](./images/tipper-walk/poses.webp)

## Making the toes work

When I started animating the feet, I noticed that the toe bones didn't do anything: I could rotate them, but the boot didn't bend. The front part of the boot was still following the foot bone instead of the toe bone. After the front of the boots was connected to the toe bones, TIPPER can roll over his toes when he pushes off, which makes every step feel a lot less stiff.

## One step, mirrored

A walk cycle is two steps that are each other's mirror image: what the left leg does in the first step, the right leg does in the second. Animating both steps by hand takes twice as long, and they never come out exactly the same, so the walk starts to limp.

So I only animated the first step myself. The second step is that first step, mirrored: every left bone gets the keyframes of the right bone, flipped to the other side, and the other way around. The last frame is exactly the same as the first, so the loop has no bump where it starts again.

## The arms that disappeared on frame 6

After mirroring, something strange happened: on frame 6, his arms suddenly folded away and came back again. The keyframes themselves were fine, but the movement between two of them wasn't.

The reason is how Blender stores rotations. A rotation can be written in two ways that mean exactly the same thing, one the "negative" of the other. If one keyframe uses one way and the next keyframe uses the other way, Blender doesn't turn the bone a little bit. It goes through "no rotation at all" on its way between them, and the arm collapses for a few frames. By making every keyframe use the same way as the one before it, the arms now move smoothly through the whole loop.

![TIPPER walking, seen from the front at an angle](./images/tipper-walk/walk-q.gif)

## What's next

- Test the walk in Unity on the rope, with the Boxlings balancing on the plank.
- Fine-tune the timing and the arms, so the plank feels heavy but stays steady for the players.

## What I'm taking with me

- **The props change the animation.** Because TIPPER holds the plank, his arms can't swing. All the life of the walk has to come from his legs and body.
- **Animate one step, mirror the other.** It saves time, and the two steps are always exactly the same.
- **Check the in-betweens too.** The keyframes looked right, but the problem was between them. Scrubbing through every frame is the only way to catch it.
- **Check the rig before animating.** The toe bones looked fine until I tried to use them.
