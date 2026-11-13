---
title: "The Setup: What Samen in Balans Needs to Run"
description: Our client asked what the installation needs on the technical side. From a floor plan sketch to a 3D render, and the parts we chose, like a Mac mini, a beamer on the ceiling and Bluetooth speakers.
date: 2026-11-13T15:00:00Z
author: lomme
cover: ./images/technical-setup/render.webp
coverAlt: A 3D render of the installation, with four cardboard foot boxes in front of a projected game, a beamer on the ceiling, two speakers on stands and a wooden cabinet on the right
tags: [Development]
ai: The 3D render was made with ChatGPT, based on my own sketch.
---

At our last meeting, our client asked a simple question: what do you need to set this up? So far we've mostly talked about the game itself, the Boxlings, the plank and the [foot panels](../foot-panels/). But the game has to run somewhere, on a screen that four children can see while they stand on their panels. In this post I list everything the installation needs, and why we chose these parts.

## From sketch to render

I started with a floor plan. It shows the space from above: an area of 4 by 2 metres, with the screen at the back and the four foot boxes at the front.

![A floor plan of the installation: a projection screen of 3 metres at the top, a speaker in each top corner, a beamer in the middle, four foot boxes in green, yellow, blue and red at the bottom, and a cabinet with the Arduino on the right, with the cables running from box to box to the cabinet](./images/technical-setup/floor-plan.webp)

A floor plan is clear for us, but not everyone reads it easily. So I let ChatGPT turn the sketch into a 3D render of how it could look in real life, in the cardboard style of our game.

![A 3D render of the installation: the game projected on the wall, a beamer hanging from the ceiling, two speakers on stands, four cardboard foot boxes with arrows and the faces of the Boxlings, a sign with the game rules on the left and a wooden cabinet on the right](./images/technical-setup/render.webp)

## What it needs

- **A Mac mini** that runs the game.
- **An Arduino** that reads the foot panels and sends them to the game as key presses, like in the [Arduino buttons test](../arduino-buttons/).
- **A beamer** that hangs from the ceiling.
- **A projection screen or a white wall** of about 3 metres wide.
- **Two active speakers** with Bluetooth.
- **Four foot boxes**, each with two panels: one for left and one for right. That makes eight panels in total.
- **A cabinet** for the Mac mini and the Arduino.
- **Cables** from the foot boxes to the cabinet, and power for the cabinet, the beamer and the speakers.
- **A sign** that explains the game in a few words: play together with four, and step left or right.

## Why a Mac mini

The game needs a computer, and we chose a Mac mini:

- **It's small.** It fits in the cabinet next to the Arduino, so the whole installation stays tidy and nobody can touch it.
- **It's quiet and stays cool.** It can run all day in a closed cabinet without loud fans.
- **It's powerful enough.** Our game is made in Unity, and a Mac mini runs it smoothly on a big screen.
- **We already work on Macs.** We build and test the game on our own MacBooks, so it runs the same way on the Mac mini.
- **Everything is built in.** It has HDMI for the beamer, USB for the Arduino and Bluetooth for the speakers, without extra parts.

### What's inside

Samen in Balans is a 3D game. Four animated Boxlings, the plank, falling objects, a forest full of cardboard trees, light and shadows all have to be drawn many times per second, on a beamer picture that's 3 metres wide. Most of that work is done by the GPU, the part that draws the picture. The CPU runs the game logic, like the tilt of the plank, the physics of the falling objects and the input from the foot panels.

Still, our game isn't heavy. The scene is small, with a fixed camera and simple cardboard models. Unity games run on every Mac with an Apple chip, from the first M1 on. So we don't need the newest or most expensive Mac mini: any Mac mini from the M1 on will do. These are the minimum specs:

- **Chip:** Apple M1 or newer (M2, M3, M4 and so on).
- **CPU:** 8 cores or more.
- **GPU:** 8 cores or more. Enough to draw our 3D scene smoothly at full HD.
- **Memory:** 8 GB at least, 16 GB is better. On a Mac, the CPU and GPU share the same memory, and with 16 GB the models, textures and animations fit in it with room to spare.
- **Storage:** 256 GB. The game itself will be small, so this is plenty.
- **macOS:** Monterey (12) or newer.

Every Mac mini that meets these specs also has HDMI for the beamer, USB for the Arduino and Bluetooth for the speakers.

## A beamer on the ceiling

The game is projected on the wall by a beamer. If the beamer stood on a table or on the floor between the players and the wall, children would walk in front of it, and their shadow would cover the game. That's why it hangs from the ceiling. The light comes from above the players, so they can move freely without blocking the picture.

## Cables from box to box

The foot boxes stand on the floor where the children play, so there can't be loose cables everywhere. The cables run from foot box to foot box: the first box sends its cable through the second, the second through the third, and so on. From the last box, all the cables go together to the cabinet. That way there's only one bundle of cables on the floor, along the boxes.

The cabinet is the heart of the installation. The Mac mini and the Arduino are inside, and everything comes together there: the foot panels go in, and the picture and sound go out.

## Two active speakers

For the sound we use two speakers, one on each side of the screen. Active speakers have their own amplifier built in, so we don't need a separate one. They can also connect to the Mac mini with Bluetooth, so we don't need audio cables across the room. They only need a power socket.

## What's next

Our client now has a clear picture of what the installation needs. The next step is choosing the exact beamer, speakers and Arduino, and building the foot boxes and the cabinet out of wood once all the materials are in.

## What I'm taking with me

- **A sketch first, a render second.** The floor plan helped us think about where everything goes. The render helped others see how it would look.
- **Think about where the children walk.** Both the beamer on the ceiling and the cables along the boxes come from the same question: what's in the way when four children play?
- **Fewer cables is better.** Bluetooth speakers and one bundle of cables keep the space safe and tidy.
