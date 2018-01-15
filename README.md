# Better Github Cards
Customizable Github user cards
---
Inspired by [this repository](https://github.com/lepture/github-cards)

## Usage
These cards are designed to be as customizable as possible, though there are several default themes you can also take advantage of.

A basic card would look like this:
```
<div class="better-github-card better-github-card-<your username here>">
  <div class="bgh-config">default</div>
</div>
<script src="lab.jacksonlewis.me/better-github-cards/front-end.js">
```

You can change the value of the `bgh-config` div to another theme:
```
<div class="better-github-card better-github-card-<your username here>">
  <div class="bgh-config">modern</div>
</div>
<script src="lab.jacksonlewis.me/better-github-cards/front-end.js">
```

Or even have your own custom-made theme with data injection:
```
<div class="better-github-card better-github-card-<your username here>">
  <div class="bgh-config bgh-config-custom">
    <p> My github username is: <span class="bgh-inject-username"></span></p>
    <p> I have these many followers: <span class="bgh-inject-followers"></span></p>
    <br />
    <p> Follow me: <span class="bgh-inject-follow-button"></span></p>
  </div>
</div>
<script src="lab.jacksonlewis.me/better-github-cards/front-end.js">
```

Documentation regarding custom injection coming soon.
