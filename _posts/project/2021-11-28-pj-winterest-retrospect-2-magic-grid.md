---
layout: post-base
title: Winterest / Retrospect 2 - Pinterest Grid + Infinite Scroll
meta: 윈터레스트 핵심 로직 및 기능
category: Projects
tags: [React, ReactHook, Project, HTML5, CSS, Styled-component, Javascript]
source: https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing
---
How does Pinterest implement its grid?

## Inspiration

![pinterest actual page]({{site.baseurl}}/img/2021-11-27-Winterest/pinterest_translates.png)

Here is how Pinterest makes the grid in their website. As a part of the cloning project, I thought it could be better to follow how they make the grid even though there were methods to use CSS.

## Basic idea

Remove all images css of positions( position:absolute; left:0; top:0 ) and make grid only use the translateX and Y on css.

## Winterest grid (aka Magic grid)

```jsx
//./pages/Main.js 
<WinterestGrid url={API.main} query={query} />
```

```jsx
//./components/WinterestGrid.js 
const WinterestGrid = ({ url, query }) => {
  const [page, setPage] = useState(0);
  const { pins, loading, error } = useScrollFetch(url, page, query);
  const gridLoader = useRef(null);
  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

//Always refresh the grid loader
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (gridLoader.current) observer.observe(gridLoader.current);
  }, [handleObserver]);

  return (
    <>
      <Grid>
        {pins && <GridPost pins={pins} />}
        {loading && <FetchInform message="그리드 로딩 중" />}
        {error && <FetchInform message="에러" />}
      </Grid>
      <LoaderBox windowHeight={document.body.scrollHeight} ref={gridLoader} />
    </>
  );
};

//LoaderBox must keep on the bottom of the window.innerHeight every time.
const LoaderBox = styled.div.attrs(props => ({
  windowHeight: `${
    props.windowHeight === 0 ? window.innerHeight : props.windowHeight
  }px`,
}))`
  position: absolute;
  top: ${props => props.windowHeight};
  width: 20px;
  height: 20px;
`;
```

## Fetch

```jsx
//./fetch/useScrollFetch.js 
//custom hook for infinite scroll fetch

//How much request the amount of image data from the API.
const LIMIT = 10;

//I added logic to input the random height number of the image_height. This value uses for the height and offsets y of posts on the Winterest Grid.
const giveRandomHeight = pins => {
  const result = pins.message.map(pin => {
    pin.image_height += randomHeight();
    return pin;
  });

  return result;
};

const randomHeight = () => {
  const heightList = [100, 300, 600, 1200];
  const newHeight = heightList[Math.floor(Math.random() * heightList.length)];

  return newHeight;
};

const useScrollFetch = (url, page, query) => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation;

//Empty "pins" whenever location.pathname is changed.
  useEffect(() => {
    setPins([]);
  }, [location.pathname]);

// Updating of page, url, and query refreshes the fetch to happen pagination
  useEffect(() => {
    getImages(page, url, query);
  }, [page, url, query]);


//get data from API with query parameter
  const getImages = (page, url, query) => {
    const pagenation = `?limit=${LIMIT}&offset=${LIMIT * page}`;
    const isQuery = query === undefined;

    fetch(url + pagenation + `${isQuery ? '' : query}`, {
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
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };
  return { pins, loading, error };
};
```

## Things to improve

- Make fetch only where they are
- Improve for responsible page and quantity of the column

## Resource

- Winterest / 윈터레스트, 핀터레스트 클론 프로젝트
  - [홈 페이지](http://wecode26winterestproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - 스크린 레코드한 [시연 영상](https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing)
  - 2021년 11월 26일 위코드에서 프로젝트 발표 때 녹화한 [시연 영상](https://drive.google.com/file/d/1wh3uxFrbqOR_65DGYM8RUOlCP-cuKJhI/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-2nd-Weterest-frontend)
  - [Trello](https://trello.com/b/Q966JjyT/weterest)
