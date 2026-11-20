---
title: "Our Second Pitch: From Concept to a Playable Demo"
description: Three weeks after our first pitch, we pitched Samen in Balans again. This time we could show real characters, the game flow, the idle screen, the story, a first playable demo and the physical setup.
date: 2026-11-20
author: ximen
cover: ./images/pitch-2/title.webp
coverAlt: The Samen in Balans logo in cardboard, with an arrow, a green leaf, a blue star and a red plank
gallery:
  - src: ./images/pitch-2/concept.webp
    alt: "The concept slide: two scenes of the cardboard world next to the key facts: balance game, 2 to 5 minutes, ages 8 and up, 2 to 4 players"
  - src: ./images/pitch-2/boxlings-wave.webp
    alt: The four Boxlings modelled in 3D in cardboard, standing next to each other
  - src: ./images/pitch-2/gameflow.webp
    alt: "The game flow: idle screen, cutscenes, the game and ending cutscenes"
  - src: ./images/pitch-2/setup.webp
    alt: The physical setup with a big screen, four coloured foot pedals and a cardboard sign
tags: [Research]
---

In our [first pitch](../concept-pitch/) we could only show an idea. Three weeks later we pitched **Samen in Balans** again, and this time almost everything on the slides was something we made ourselves: the characters, the screens, the story sketches and a first playable demo in Unity.

## The team

We started by introducing ourselves, because our client told us after the first pitch that our team introduction was missing. I do the 3D design and animation, Lomme does the development and the hardware, and Nikola does the UX and the 2D design.

![The team slide: Ximen for 3D design and animation, Lomme for development and hardware, Nikola for UX and 2D design](./images/pitch-2/team.webp)

## The concept

The concept itself stayed the same: four Boxlings stand on a plank that Tipper carries across a ravine. Every child steers one Boxling with their feet, and together they keep the plank level. It's a balance game for 2 to 4 players aged 8 and up, and a session takes 2 to 5 minutes.

![The concept slide with two scenes of the cardboard world and the key facts](./images/pitch-2/concept.webp)

## The Boxlings and Tipper

Then we showed how the characters grew. First the pencil sketches, then the coloured 2D designs, and then the four Boxlings as 3D cardboard models. You can read how they were made in [Making RITS](../rits-boxling/) and [Meet SPRIET, KRABBEL and PUK](../new-boxlings/).

![Pencil sketches of the four Boxlings with their hats](./images/pitch-2/boxlings-sketch.webp)

![The four Boxlings in colour: red cap, green leaf hat, blue spiky hair with goggles and orange cat ears](./images/pitch-2/boxlings-color.webp)

![The four Boxlings as 3D cardboard models](./images/pitch-2/boxlings-wave.webp)

Tipper, the big Boxling who carries the plank, is also modelled and rigged now. More about him in [Meet TIPPER](../tipper/).

![Tipper as a 3D cardboard model, with a big hat](./images/pitch-2/tipper.webp)

## The game flow

A session goes through four parts: the idle screen, the intro cutscene, the game itself and the ending cutscene.

![The game flow: idle screen, cutscenes, the game, ending cutscenes](./images/pitch-2/gameflow.webp)

The **idle screen** is a cardboard forest where the Boxlings are asleep in their boxes. When a child steps on a pedal, their Boxling wakes up and looks around while it waits for the other players. See [the idle screen in Unity](../idle-screen-unity/) for how that works.

![The idle screen: a cardboard forest with the Boxlings asleep in their boxes](./images/pitch-2/idle.webp)

![The three idle stages of RITS: not ready (asleep), ready (waking up) and ready but waiting on the other players](./images/pitch-2/idle-stages.webp)

## The story

The children have to know why they are on that plank, so before the game starts there is a short **cutscene**. It works like a comic book: the camera looks down on a table with pictures and moves from one frame to the next, without long texts.

![The story slide: a storyboard sketch and the comic book pictures on a table](./images/pitch-2/story.webp)

For the second scene we want to break away from the 3D environment, because a different drawing style can grab the children's attention better. That scene is still being sketched. More in [Taking the Intro Cutscene Further](../cutscene/).

![A sketch of the second story scene next to a 3D scene of the cardboard world](./images/pitch-2/story2.webp)

## A small demo

This was the part we were most excited about: a first **playable demo** in Unity. The four Boxlings stand on the plank and move left and right with the pedals.

![Four screenshots from Unity: RITS moving for the first time and four Boxlings on the plank](./images/pitch-2/unity.webp)

We also showed what can go wrong. Objects fall from the sky (a duck, a crate, a traffic cone and a barrel), and when one hits your Boxling, you lose a heart. When all your hearts are gone, your Boxling is out.

![The falling objects: a rubber duck, a crate, a traffic cone and a barrel](./images/pitch-2/lose.webp)

![The player UI: KRABBEL with three hearts and the left and right arrows](./images/pitch-2/lives.webp)

![The UI when a player is out: a skull with three broken hearts](./images/pitch-2/lives-end.webp)

## The physical setup

The game is played in front of a big screen, with four coloured foot pedals on the floor. We showed the setup and the technical drawings of the foot boxes that Lomme is going to build. More in [The Technical Side of the Foot Boxes](../foot-box-build/).

![The physical setup: a big screen with the game, four coloured foot pedals and a cardboard sign](./images/pitch-2/setup.webp)

![A technical drawing of one foot box with two red pressure plates](./images/pitch-2/dev3.webp)

![An exploded view of the foot box with the sensors under the plates](./images/pitch-2/dev4.webp)

## Some problems

We were honest about what doesn't work yet. A Boxling could walk past the edge of the plank, so I made an [edge animation](../edge-unity/) where it almost falls off and stops. And when Boxlings stood close together, they overlapped each other. We fixed that so they now stay next to each other.

![A Boxling walking to the edge of the plank in Unity](./images/pitch-2/edge.webp)

![Two Boxlings overlapping each other on the plank](./images/pitch-2/overlap.webp)

![The fixed version: four Boxlings next to each other on the plank](./images/pitch-2/fixed.webp)

## Next steps

Next Monday we start building the foot pedals, and the week after that we want to do our first user tests with children.

After the pitch our peers gave us feedback about the durability of the pedals and about the characters. You can read it in the [peer-to-peer feedback](../../feedback/peer-2026-11-20/).
