---
layout: post-base
title: Lottie Files - lottie-player & jlottie
meta: Evergreen (Updated 210820)
category: test-for-test
---
웹, 앱용 애니메이션 플러그인으로 가볍고 빠르다. 스타일은 path, 플랫, 단색에 유리하다.

## HTML lottie-player 사용예시: [내 About 페이지]({{site.baseurl}}/about.html)
```html 
<script src="https://unpkg.com/@lottiefiles/lottie-player@0.3.0/dist/lottie-player.js"></script>

<lottie-player 
    src="{{site.baseurl}}/js/about_bot_face.json"  
    background="transparent"  
    speed="1"  
    loop 
    hover
    id="about-bot">
</lottie-player>
```

---
## jlottie vs lottie-player
jlottie는 버튼 등 인터렉션용 micro animation에 최적화되어 있다. 스플래쉬 등 Graphic animation에는 심미상 lottie player를 사용하는 것이 좋을거 같다.

## jlottie micro animation 만들시 유의사항
기존 lottie player용 애니메이션 만드는 것보다 더 제약이 심하다. 

* shapes들은 paths로 만들어야하며 transform도 scale을 사용하면 일부 애니메이션들이 원하는데로 렌더링이 안된다. 
* null로 parent & link가 일부 작동이 잘 안된다. 대신 shape layer로 parent & link 하면 작동 잘 된다.

### Supported features
* Shapes (except, ellipse, polystar, repeater, trim paths)
* Fills (except radial gradient)
* Strokes (without opacity and dashes)
* Transforms
* Interpolation (except roving across time)
* Masks (limited to path, opacity and subtract)
* Layer effects (limited to only fills)

### Features not supported
* Matts
* Merge paths
* Text
* Expressions
* Images
* Precomps
* Time stretch
* Time remap
* Markers

## jlottie CDN
```js
<script src="https://unpkg.com/@lottiefiles/jlottie@latest/dist/jlottie.js" type="text/javascript"></script>
```

## HTML jlottie 예시: [내 About 페이지]({{site.baseurl}}/about.html)
```html 
<script src="https://unpkg.com/@lottiefiles/jlottie@latest/dist/jlottie.js" type="text/javascript"></script>

<div class='cover'>
    <div id='my-animation'></div>
</div>

<script>
    let animationContainer = document.getElementById('my-animation');
    jlottie.loadAnimation({
                    container: animationContainer,
                    loop: false,
                    autoplay: false,
                    path: '/js/jlottie-test-1.json',
    });

    let coverContainer = document.getElementById('cover');

    coverContainer.addEventListener("click", () => {
        jlottie.play(animationContainer.id);
    });
    coverContainer.addEventListener("onLoopComplete", () => {
        jlottie.goToAndStop(0, true, animationContainer.id);
    });
    coverContainer.addEventListener("mouseover", () => {
        animationContainer.classList.remove("black-filter");
        animationContainer.classList.add("gary-filter");
      });
    coverContainer.addEventListener("mouseleave", () => {
        animationContainer.classList.remove("gary-filter");
        animationContainer.classList.add("black-filter");
    });
</script>
```

## Conclusion
개발자 입장에서는 lottie-player와 jlottie는 비슷한 맥락으로 사용하지만 애니메이터에게는 서로 다른 접근방법으로 애니메이션을 만들어야 한다. 최종적으로는 json 애니메이션의 최적화를 위해서는 graphic과 micro animation을 차이를 두고 이 두 lottie files에 친숙해 지는 것이 좋을거 같다.

다음과 같은 케이스에서 써보자.
- [ ] React Native
- [ ] React
- [ ] Interaction with scroll events
- [ ] Interaction with gyroscope

## Resource
* jlottie는 [Github](https://github.com/LottieFiles/jlottie)와 [NPM](https://www.npmjs.com/package/@lottiefiles/jlottie)에서 확인할 수 있다.
* [Lottie files 블로그 - jLottie](https://lottiefiles.com/blog/updates/jlottie-the-ultimate-lottie-player-for-micro-animations?utm_source=Monthly%20Update%20September&utm_medium=Email&utm_campaign=September)에서는 간략한 소개와 사용법이 소개되어있다.
* lottie-player는 사용법은 [Github](https://github.com/LottieFiles/lottie-player) 그리고 [unpkg](https://unpkg.com/browse/@lottiefiles/lottie-player@0.3.0-rc2/README.md)에서 확인할 수 있다.
* HTML에 Lottie playerfiles 구현 예시는 [DesignCode 유투브](https://www.youtube.com/watch?v=xYQ-HdVfBSA)에서 찾아볼 수 있다.