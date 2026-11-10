---
title: "First Steps in Unity: From One Boxling to Four"
description: How RITS took his first steps in Unity, walking left and right with his own run and idle animations, and how the other three Boxlings joined him.
date: 2026-11-03
author: lomme
cover: ./images/unity-movement/cover.jpg
coverAlt: An untextured, white RITS standing in a simple Unity test scene, looking into the camera
tags: [Development]
ai: I used AI (Claude) as a helper for some parts of the code.
---

In Samen in Balans, every player controls one Boxling by leaning left or right. Before anything else, a Boxling has to be able to do exactly that in Unity: walk left, walk right and stand still.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/rits-first-movement-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/rits-first-movement.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 1: a small test scene

I started with the simplest scene possible: a camera, a light, a long ground plane and one Boxling. RITS came straight from Ximen's Blender file, with his rig and his animations. No level, no menus and no story yet. The only question this scene had to answer: does it feel good to move a Boxling left and right?

## Step 2: moving left and right

The movement is done with physics: RITS has a Rigidbody, and the script changes its speed every physics step instead of moving him directly. That way he will later react properly to the plank, the falling objects and the other Boxlings.

- **One input, many controllers.** The script reads one action, *Move*, from Unity's Input System. The arrow keys, Q and D and a gamepad stick all work right away, and later our own Arduino controllers can use the same action.
- **Speeding up and slowing down.** RITS doesn't start or stop instantly. He speeds up to his top speed of 4 m/s and slows down slightly faster than he speeds up, so stopping feels tight.
- **Staying on the line.** The Rigidbody can't rotate and can't move forwards or backwards. Without this, a small bump would make him tip over or slide out of the scene.

![The Player Movement and Player Animator settings in the Inspector: speed, acceleration, deceleration and turning](./images/unity-movement/inspector.jpg)

All these values are fields in the Inspector, so we can tune how he feels without touching the code.

## Step 3: turning around

A Boxling should look where he's going. While you walk, the model turns smoothly to the left or the right. When you let go, RITS turns to the front again and his idle animation takes over: his head looks around a little, so he never stands completely still. That looking around isn't done in Unity: it's part of the idle animation that Ximen already made in Blender, and Unity simply plays it.

Only the model turns, not the physics body. That keeps the movement and the looks separate: the body slides left and right, the model on top of it decides which way RITS faces.

![RITS standing still in his idle animation, looking around](./images/unity-movement/idle.jpg)

## Step 4: idle and run animations

Ximen had already made two animations for RITS: an idle in which he looks around and a running cycle with little dust clouds. In Unity, an Animator switches between the two based on one number: how fast RITS is moving. Standing still plays the idle, walking plays the run. That number is smoothed a little, so the switch between the two never looks jumpy.

![RITS running to the right, with dust clouds behind his feet](./images/unity-movement/run.jpg)

The movement script doesn't know anything about animations, and the animation script only reads the speed. Because of that, I can change one without breaking the other.

## Step 5: getting the colours into Unity

You might have noticed that RITS is completely white in the video. His cardboard look in Blender is made with a procedural shader: a node setup that calculates the colours, the grain and the tape. Unity can't read that, so only the shape came along.

When I added the other Boxlings a week later, I fixed this first. The fix is a small Blender script that **bakes** the shader into one image: it renders all the colours of the character onto a single texture and exports the model to Unity with that texture attached. The Blender file itself is never changed. Now every Boxling arrives in Unity with his cardboard texture. Not every painted detail comes along yet, so that's something to finish later.

## Step 6: from one Boxling to four

Setting up one Boxling by hand is fine. Doing it four times, and again every time a model changes, is not. So I made a setup tool in Unity: one menu item that does everything for every Boxling.

- **One shared brain for the animations.** All Boxlings use the same idle-and-run logic. Each one only brings his own two animations, so a change in the logic works for all four at once.
- **A prefab per Boxling.** Each Boxling becomes a ready-made prefab with his physics, his scripts and his model. Changing the prefab changes him everywhere he's used.
- **Into the scene, side by side.** The tool places RITS, SPRIET, KRABBEL and PUK next to each other, ready to test.

![The four Boxlings running side by side in Unity, now with their cardboard textures](./images/unity-movement/four-boxlings.jpg)

## What's next

Right now, every Boxling still listens to the same keys on the keyboard. The next step is testing our own controllers: buttons on an Arduino that tell Unity to go left or right. Because the movement listens to one *Move* action instead of to specific keys, the plan is that the Arduino can plug into that same action without changing the movement code. After that, each player gets their own Boxling, and the four of them go onto the plank together.

## What I'm taking with me

- **Start with the smallest test.** One Boxling in an empty scene was enough to find out how the movement should feel.
- **Keep movement, looks and animation apart.** Physics moves the body, the model turns on top of it and the animations only listen to the speed. Each part can change on its own.
- **Automate what you'll repeat.** A setup tool takes a moment to make, but it turns four Boxlings, and every new version of them, into one click.
- **Not everything travels between programs.** A shader from Blender doesn't work in Unity, so the colours have to be baked into a texture first.
