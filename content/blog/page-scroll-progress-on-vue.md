---
title: Page scroll progress bar implemented on Vue
description: Implementation of page scroll progress bar using Vue.js
summary: In this article, I will describe how to implement a page scroll indicator. This feature is seen on many blogs and is easy to implement, adding more interactivity to the blog.
length: 5 minutes read
date: 01-09-2023
order: 3
---
In this article, I will describe how to implement a page scroll indicator. This feature is seen on many blogs and is easy to implement, adding more interactivity to the blog.

This functionality will be implemented in the following parts:

- A component that shows progress of reading page or a progress bar
- A component that calculates the current scroll position of the page and updates the progress bar component

First, we need to implement a progress bar element. Usually, it is placed at the top of the page or just below the header (if the header is sticky to the screen).

The progress bar will include two elements. The first is a container that will have full screen width. The second inner block will have some colored filling, and we will update the width of this element dynamically when the user scrolls the page.

Let's see what implementation it could have:

```html
<template>
  <div class="progress-container">
	  <div id="progress-bar"></div>
  </div>
</template>
<script>
export default {
  name: "ScrollBar",
}
</script>
<style scoped>
.progress-container {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4px;
  background-color: transparent;
}
#progress-bar {
  position: absolute;
  height: 100%;
  background-color: #4caf50;
  top: 0;
  left: 0;
}
</style>
```

The second component is slightly larger and contains a page scroll listener. The algorithm is as follows:

- Query the progress bar element and store a reference to it as a local variable.
- Subscribe to the scroll event on the document.
- Calculate the current scroll position.
- When the user scrolls the page, calculate the scroll position as a percentage and round it to the nearest integer.
- Update the width of the previously found progress bar element with this number.
- When component will be unmounted unsubscribe from scroll event

First lets find and store progress bar element:

`this.progressBar = *document*.getElementById('progress-bar');`

Then implement scroll listener function and subscribe to scroll event on document object:

```javascript
mounted() {
      // find and store progress element
      this.progressBar = document.getElementById('progress-bar');  
      // subscribe to scroll event
      document.addEventListener('scroll', this.scrollHandler, {passive: true});
},
beforeDestroy() {
      // remove listener when we destroy component
      document.removeEventListener('scroll', this.scrollHandler);
},
methods: {
	scrollHandler() {
        if (!this.progressBar) return;
        const width = this.getScrollPercent(document.getElementById('scroll-area'));
        this.progressBar.style.width = `${width}%`;
	},
}
```

We can now implement the `getScrollPercent` method. To perform the calculations, we use the following properties from the window object: `scrollTop`, `scrollHeight`, and `clientHeight`. Let's describe each of them in more detail.

The `scrollTop` property gets or sets the number of pixels that an element's content is scrolled vertically. For our purposes, it indicates how many pixels the user has already scrolled from the top and can no longer see.

The `scrollHeight` property shows the full height of the page.

`clientHeight` in the context of the page refers to the height of the user's screen or viewport.

Using these properties and a simple formula, we can calculate the current scroll position as a percentage:

`const scrollPosition = (scrollTop / (scrollHeight - clientHeight)) * 100;`

Once we have calculated the position, we can update the width of our progress bar with the new value:

`this.progressBar.style.width = `${width}%`;`

Here's the full method:

```js
getScrollPercent() {
	const { scrollTop, scrollHeight, clientHeight } = window.document.documentElement;
	const scrollPosition = (scrollTop / (scrollHeight - clientHeight)) * 100;
	
    return Math.round(scrollPosition);
}

```

I split this logic into two elements because the progress bar typically exists at a high level in the layout, along with the header or footer. However, I only need the scroll listening logic on blog pages. So I put the second component into the blog post layout component and it updates the progress bar only on those pages. It does not update on long pages where it should not (such as the post list, for example).

A few words about performance. First, we should use the `{passive: true}` argument for the scroll listener. This indicates to the browser that we will not prevent scrolling and it should not wait for the listener to execute before scrolling. You can find more information about it [here](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).

We could also throttle the scroll function and calculate the scroll position not for each event. I wrote about throttling methods [before](http://localhost:3000/blog/debounce).

Alternatively, you could use requestAnimationFrame for better performance. You can find an example [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#scroll_event_throttling).

Here you could find full implementation of these two components on GitHub
[ScrollBar.vue](https://github.com/Codexmen/yurrik.com/blob/master/components/ScrollBar.vue) and [ScrollListener.vue](https://github.com/Codexmen/yurrik.com/blob/master/components/ScrollListener.vue).
