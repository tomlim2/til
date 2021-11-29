---
layout: post-base
title: Winterest / Retrospect 3 - 들어온 일부 데이터 값 변경시켜 저장하기
meta: 필요 데이터 값을 바꾸는 방법
category: projects
tags: [React, ReactHook, Project, HTML5, CSS, Styled-component, Javascript]
source: https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing
---

```jsx
const giveRandomHeight = pins => {
  const result = pins.message.map(pin => {
    pin.image_height += randomHeight();
    return pin;
  });
  return result;
};

const useScrollFetch = url => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    getImages(url);
  }, [url]);

  const getImages = url => {
    fetch( url, {
      headers: { Authorization: API.token },
    })
      .then(res => res.json())
      .then(pinsData => {
        setPins(prevPins => {
          if (prevPins === []) {
            return giveRandomHeight(pinsData);
          } else {
            return [...prevPins, ...giveRandomHeight(pinsData)];
          }
        });
      })
  };
  return { pins };
};
```

`.map()` 매서드를 이용하여 `fetching`하여 받은 데이터의 일부 높이 값을 수정하여 `pins`에 저장하여 사용하였다.

## Resource

- Winterest / 윈터레스트, 핀터레스트 클론 프로젝트
  - [홈 페이지](http://wecode26winterestproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - 스크린 레코드한 [시연 영상](https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing)
  - 2021년 11월 26일 위코드에서 프로젝트 발표 때 녹화한 [시연 영상](https://drive.google.com/file/d/1wh3uxFrbqOR_65DGYM8RUOlCP-cuKJhI/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-2nd-Weterest-frontend)
  - [Trello](https://trello.com/b/Q966JjyT/weterest)
