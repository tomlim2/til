---
layout: post-base
title: count up number animation
meta: 자바스크립트 애니메이션 이해하기 1
category: React
tags: [react, javascript]
---

## vanilla JavaScript using the DOM

```html
<button onclick="runAnimations()">Animate</button>
<ul>
  <li><span class="countup">45</span></li>
  <li><span class="countup">110</span></li>
  <li><span class="countup">53210</span></li>
</ul>
```

```js
const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );
const easeOutQuad = t => t * ( 2 - t );
const animateCountUp = el => {
  let frame = 0;
  const countTo = parseInt( el.innerHTML, 10 );
  const counter = setInterval( () => {
    frame++;
    const progress = easeOutQuad( frame / totalFrames );
    const currentCount = Math.round( countTo * progress );

    if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
      el.innerHTML = currentCount;
    }

    if ( frame === totalFrames ) {
      clearInterval( counter );
    }
  }, frameDuration );
};

const runAnimations = () => {
  const countupEls = document.querySelectorAll( '.countup' );
  countupEls.forEach( animateCountUp );
};
```

## React Hook

```jsx
import { useEffect, useState } from 'react';

const easeOutQuad = t => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUp = ({ children, duration = 3000 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [countTo, duration]);

  return Math.floor(count);
};

export default CountUp;

...
<CountUp>80</CountUp>
...
<CountUp duration={4000}>8000</CountUp>
...
```

## Questions

```jsx
const frameDuration = 1000 / 60;
```

- why 60? does it mean 60 fps?

```jsx
const totalFrames = Math.round(duration / frameDuration);
```

- defualt is 2000., so 2000 / 1000 / 60 = 0.03333... = .04

## List of Easing

```js
EasingFunctions = {
  linear: t => t,
  easeInQuad: t => t*t,
  easeOutQuad: t => t*(2-t),
  easeInOutQuad: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
  easeInCubic: t => t*t*t,
  easeOutCubic: t => (--t)*t*t+1,
  easeInOutCubic: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
  easeInQuart: t => t*t*t*t,
  easeOutQuart: t => 1-(--t)*t*t*t,
  easeInOutQuart: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
  easeInQuint: t => t*t*t*t*t,
  easeOutQuint: t => 1+(--t)*t*t*t*t,
  easeInOutQuint: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
}
```

Resource from [easing functions in this Gist](https://gist.github.com/gre/1650294)

## Resource

- [Easing list](https://gist.github.com/gre/1650294)
- [Visualizing easing](https://easings.net/)