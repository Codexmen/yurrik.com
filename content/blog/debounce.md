---
title: Debounce vs throttle in JavaScript
description: What is deference between debounce and throttle functions? 
summary: What is deference between debounce and throttle functions
length: 4 minutes read
date: 07-08-2022
order: 1
---

A few days ago I had to fix defect that creates a big performance issue for our DB — our users just spam with clicks our “Refresh” button that requests new information from server. My question was like “What I should do? Debounce or throttle this clicks?”. In this article I would like to describe these techniques and differences between them.

JavaScript functions execution in browser often is triggered by user events like button clicks, scroll or mouse move. We attach event handler functions to DOM elements and trigger execution when event is happening.

Sometimes we attach to event a heavy function that do too much, and it affects user experience. It may freeze UI, create load to server or network and/or application could be unresponsive for some time.

Here is interactive demo where you could see how many scroll events fires in browser.

<scroll-example></scroll-example>

As frontend developers we have two tools to reduce calls to heavy functions: debounce and throttle.

What they both do — they reduce calls to our event handler (they just skip calls) but do it in different way.

The same demo but with debounced and throttled handlers.

<scroll-example with-reduce-methods ></scroll-example>

So, you basically  wrap your function to these functions (it will create a new function) and attach to event.

## Debounce function

We start from debounce. We will describe how it works, how to use it and how it could be implemented from scratch.

Assume we have an area on page, and we want to listen a scroll event and send scroll position to server. As we already know scroll event fires almost for each scrolled pixel if user scroll page. We don’t want to send a lot of event to the server we just want to wait until this events stop firing and then send one event.

Here we need a debounce technique.

> Debounced function will be triggered if time between events will be bigger that some constant (as example 250ms).
>

Debounce is like an order in restaurant. You order dishes one by one and then waiter go to  kitchen and post your order. Without debounce waiter should go to the kitchen each time when you add one dish.

For examples, I am going to use `lodash` implementation.

User events triggers this wrap function, it filters this calls and execute your function only when it needs.

```js
<input id="search-input" placeholder="Type something here..." />
...

function handler (event) {
  console.log(event.target.value);
}

const debouncedHandler = _.debounce(handler, 250)

document.querySelector('#search-input').addEventListener('input', debouncedHandler)
```

Assume search field in e-commerce site. user start typing name of product and client should send a request to backend and get results. For search like “Iphone 13” without debounce we should send 13 request, get 13 responses and render UI 3 times in 1-2 seconds. With debounce we “wait” when user stop active typing and send request only one time.

## Throttling function

Throttling uses a different technique. It fires events no more than once in some time (as example 250ms). No matter how many events happened in this period if there was at least one it fires only one event. Throttling is like calling an elevator — no matter how many times you click button after first time the first event execute handler function and there should some time pass to countdown for next call.

> Throttled function will trigger event no oftener than some time constant (as example 500ms) when original events could be triggered often and this time constant
>

```js
<button id="refresh-button">Refresh</button>

function refreshHandler (event) {
  console.log('Refresh');
}

const throttledHandler = _.throttle(refreshHandler, 500)

document.querySelector('#refresh-button').addEventListener('click', throttledHandler)
```

When we need to fire event when user continue producing it but with less speed. As example during scroll, resize events, some buttons click.

## Conclusion


- Debounce waits when sequence of events ends
- Throttle filter out events if they are triggered oftener than need.
- You could use [lodash](https://lodash.com/docs/4.17.15#debounce) or [underscore](https://underscorejs.org/#throttle) libraries implementation of these functions.

## Resources


- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
- [Throttling and Debouncing Events with Vue.js and lodash](https://www.digitalocean.com/community/tutorials/vuejs-lodash-throttle-debounce)
- [How to Implement Debounce and Throttle with JavaScript](https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783)
- [Debouncing & Throttling in JavaScript](https://medium.com/nerd-for-tech/debouncing-throttling-in-javascript-d36ace200cea)
- [Demo](https://web.archive.org/web/20220117092326/http://demo.nimius.net/debounce_throttle/)
