---
title: "Our Risk Management Plan"
description: What could slow down the development of Samen in Balans before our deadline, how we try to prevent it, and what our backup is if our first plan doesn't work.
date: 2026-11-13T17:00:00Z
author: ximen
cover: ./images/risk-management/cover.webp
coverAlt: A pencil sketch of RITS standing startled on a cardboard plank with his arms out, while a cardboard box falls down towards him
tags: [Research]
---

Samen in Balans mixes three different worlds: a game in Unity, 3D characters and animations from Blender, and our own physical hardware with eight pedals and an Arduino. Each of those brings its own uncertainties, and when they come together, one problem can easily hold up everything else.

In our last [coaching session](../../feedback/coach-2026-11-13/), our coach advised us to make a risk management plan. So we sat down and listed what could go wrong **during development, before our deadline**. This is not a plan for what could happen while visitors are playing at the festival; that is a separate topic. Here we look at what could delay us, how we try to prevent it, and what we do if our first approach doesn't work.

None of the backup solutions below are in use yet. They are plans we have ready, so we don't have to start thinking when a problem shows up.

## High risks: critical development problems

These are the problems that could really block the project, so we want to tackle them first.

<div class="risk-cards">
  <article class="risk-card" data-level="high">
    <h3>1. The pedals don't work as expected <span class="lvl high">High</span></h3>
    <p>The pedals we choose might not work well with the Arduino, or might not suit our setup.</p>
    <dl>
      <dt>Prevention</dt><dd>Test a small number of pedals before we buy all eight.</dd>
      <dt>Backup</dt><dd>Switch to another type of pedal, or use physical push buttons.</dd>
    </dl>
  </article>
  <article class="risk-card" data-level="high">
    <h3>2. Arduino and Unity don't talk well <span class="lvl high">High</span></h3>
    <p>Sending the input of eight pedals through one Arduino to Unity might be harder than we expect.</p>
    <dl>
      <dt>Prevention</dt><dd>Build a small technical prototype and test the connection early.</dd>
      <dt>Backup</dt><dd>Look into another way of communicating, and keep the keyboard controls working during development.</dd>
    </dl>
  </article>
  <article class="risk-card" data-level="high">
    <h3>3. The balance physics don't feel right <span class="lvl high">High</span></h3>
    <p>The plank might not react correctly to where the Boxlings stand and how their weight is spread.</p>
    <dl>
      <dt>Prevention</dt><dd>Build a basic prototype in Unity with placeholder models, before adding detailed graphics.</dd>
      <dt>Backup</dt><dd>Use a simpler balance system based on torque, instead of fully simulated physics.</dd>
    </dl>
  </article>
  <article class="risk-card" data-level="high">
    <h3>4. Hardware arrives late <span class="lvl high">High</span></h3>
    <p>Pedals, Arduino parts or building materials might arrive later than we planned.</p>
    <dl>
      <dt>Prevention</dt><dd>Order the critical parts early and check the delivery times.</dd>
      <dt>Backup</dt><dd>Find alternatives we can get locally, or keep prototyping with temporary parts.</dd>
    </dl>
  </article>
  <article class="risk-card" data-level="high">
    <h3>5. Too much work before the deadline <span class="lvl high">High</span></h3>
    <p>Animations, gameplay, hardware and UX improvements could all take longer than expected.</p>
    <dl>
      <dt>Prevention</dt><dd>Set clear priorities, divide the responsibilities and set our own milestones.</dd>
      <dt>Backup</dt><dd>Simplify features that aren't essential, but keep the core balancing experience intact.</dd>
    </dl>
  </article>
</div>

## Medium risks: possible delays and rework

These won't block the whole project, but they could cost us time or force us to redo work.

<div class="risk-list" data-level="medium">
  <div><strong>Blender animations in Unity</strong>Animations might not export or work correctly in Unity.<p class="fix">Test with one Boxling before animating all four.</p></div>
  <div><strong>Unclear game flow</strong>Open UX questions could mean we have to rebuild parts later.<p class="fix">Finalise the main rules before we implement them.</p></div>
  <div><strong>Building the pedal stations</strong>Building four player stations might take longer than expected.<p class="fix">Finish and test one station first.</p></div>
  <div><strong>Detecting players</strong>Telling active and inactive players apart through the pedals might be tricky.<p class="fix">Test this logic on its own.</p></div>
  <div><strong>Team coordination</strong>Tasks might overlap or depend too much on each other.<p class="fix">Clearly assign who is responsible for what.</p></div>
  <div><strong>Visual consistency</strong>Some assets might not match the cardboard style.<p class="fix">Agree on clear visual guidelines.</p></div>
  <div><strong>Not enough user testing</strong>We might run out of time to test everything.<p class="fix">Test early prototypes instead of waiting for a finished game.</p></div>
</div>

## Low risks: minor development problems

<div class="risk-list" data-level="low">
  <div><strong>Small texture problems</strong>Textures that look slightly off in Unity.</div>
  <div><strong>Animation details</strong>Small imperfections in the character animations.</div>
  <div><strong>Cutscenes</strong>The cutscenes taking longer to finish than expected.</div>
  <div><strong>Logo</strong>Adjustments to the logo.</div>
  <div><strong>Interface</strong>Small changes to the UI.</div>
  <div><strong>Blog</strong>Our documentation falling behind.</div>
</div>

These are annoying, but they don't put the project at risk. They should never get priority over the core gameplay and the hardware.

## Risk assessment overview

The ratings below are our first estimates, not results of tests. We will update them as we make progress.

<div class="table-scroll">
<table class="risk-table">
  <thead>
    <tr><th>Risk</th><th>Likelihood</th><th>Impact on deadline</th><th>Priority</th><th>Backup solution</th></tr>
  </thead>
  <tbody>
    <tr><td>Pedals don't work as expected</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl high">High</span></td><td><span class="lvl high">High</span></td><td>Other pedal type or push buttons</td></tr>
    <tr><td>Arduino and Unity communication</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl high">High</span></td><td><span class="lvl high">High</span></td><td>Other communication method, keyboard controls</td></tr>
    <tr><td>Balance physics</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl high">High</span></td><td><span class="lvl high">High</span></td><td>Simpler torque-based balance</td></tr>
    <tr><td>Hardware arrives late</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl high">High</span></td><td><span class="lvl high">High</span></td><td>Local alternatives, temporary parts</td></tr>
    <tr><td>Too much work before the deadline</td><td><span class="lvl high">High</span></td><td><span class="lvl high">High</span></td><td><span class="lvl high">High</span></td><td>Simplify non-essential features</td></tr>
    <tr><td>Blender animations in Unity</td><td><span class="lvl low">Low</span></td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td>Test with one Boxling first</td></tr>
    <tr><td>Unclear game flow</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td>Finalise the main rules first</td></tr>
    <tr><td>Building the pedal stations</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td>One complete station first</td></tr>
    <tr><td>Detecting players</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td>Test the logic separately</td></tr>
    <tr><td>Team coordination</td><td><span class="lvl low">Low</span></td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td>Clear responsibilities</td></tr>
    <tr><td>Visual consistency</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl low">Low</span></td><td><span class="lvl medium">Medium</span></td><td>Visual guidelines</td></tr>
    <tr><td>Not enough user testing</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td><span class="lvl medium">Medium</span></td><td>Test early prototypes</td></tr>
    <tr><td>Minor problems (textures, UI, logo, blog)</td><td><span class="lvl medium">Medium</span></td><td><span class="lvl low">Low</span></td><td><span class="lvl low">Low</span></td><td>Fix them after the core is done</td></tr>
  </tbody>
</table>
</div>

## Our development strategy

This is how we plan to deal with these risks:

1. **Test the most uncertain technical parts first**, like the pedals, the Arduino connection and the balance physics.
2. **Keep the game playable with keyboard controls** while we work on the hardware, so development never has to wait for it.
3. **Build and test one complete player station** before we build all four.
4. **Put the core balancing gameplay first**, before any extra features.
5. **Keep track of responsibilities and deadlines**, so everyone knows what they are working on.
6. **Prepare alternatives before critical problems happen**, not after.
7. **Review this plan regularly** and update the ratings when we learn more.

## Conclusion

We don't expect to predict every problem. The goal of this plan is to make sure that one technical uncertainty can't block the whole project. By testing the riskiest parts early and having a backup ready, we want to deliver a complete, playable version of Samen in Balans within the deadline.
