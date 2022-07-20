---
title: Rounding numbers with Math.round Math.ceil Math.floor and Math.trunc
description: Learning how to use @nuxt/content to create a blog
summary: In this article I will describe how to round numbers using JavaScript and how to easily remember names of these functions.
length: 4 mins read
---

# Rounding numbers with Math.round Math.ceil Math.floor and Math.trunc

In this article I will describe how to round numbers using JavaScript and how to easily remember names of these functions.

JavaScript has a few methods in Math object to transform any number or number-as-string  to integer (real number).

Math is a global object that contains methods related to math. We will take a look on four of them: `Math.round`, `Math.ceil`, `Math.floor` and `Math.trunc`.

All these methods accept a number as an argument and return the nearest integer.

`Math.ceil()` — always rounds a number to larger integer value. Method name *ceil* is an abbreviation of the word  *ceiling —*  it is what above you if you in building :)

Association: ceil = above, up;

```js
Math.ceil(-1.3); // Output: -1
Math.ceil(-1.7); // Output: -1
Math.ceil(2.3); // Output: 3
Math.ceil(2.7); // Output: 3
```

`Math.floor()` — always rounds a number to nearest smaller integer value. It also English word that could be obvious for native speakers. It is the lower surface of a room, on which one may walk.

Association: floor = down, lower, ground.

```js
Math.floor(-1.3); // Output: -2
Math.floor(-1.7); // Output: -2
Math.floor(2.3); // Output: 2
Math.floor(2.7); // Output: 2
```


`Math.round()` — rounds number to the closest number depending on fractional part. If fraction bigger or equal .5 it will rounds up. If fraction part is less it will rounds down.

```js
Math.round(-1.3); // Output: -2
Math.round(-1.7); // Output: -1
Math.round(2.3); // Output: 2
Math.round(2.7); // Output: 3
```

`Math.trunc()` — just cuts off fraction part of number or *truncates*. For positive integers work the same way as floor but for negative behaviour is different

```js
Math.trunc(-1.3); // Output: -1
Math.trunc(-1.7); // Output: -1
Math.trunc(2.3); // Output: 2
Math.trunc(2.7); // Output: 2
```

All these methods when called with anything, but a number or null as an argument, always return `NaN`

This is interactive form you could play with rounding numbers (don’t forget about negative numbers and invalid inputs)
<math-round></math-round>
Rounding numbers and dealing with numbers is very important part of any programming languages on any position and memorising this functions really speed up your growing as a developer.

Hope article will be useful for you.
