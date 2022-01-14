---
layout: post-base
title: Like / Retrospect 6 - Publishing with AWS S3
meta: AWS S3를 이용하여 배포하는 법 정리
category: Projects
tags: [React, AWS]
source: https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend
---

S3는 AWS가 클라우드 스토리지를 제공하는 서비스이다. 하지만 일련의 셋팅을 거치면 웹호스팅이 가능하게 된다. (구글 드라이브로 호스팅하는 느낌?)

### Step 1. `npm run build`

### Step 2. Visit AWS S3

### Step 3. Create bucket

### Step 4. Upload Files

프로젝트의 `build` 폴더에 있는 파일과 폴더를 업로드 한다.

### Step 5. Properties Tap > Edit in Static website hosting section

### Step 6. Static website hosting > `Enable` > Index document > `index.html` > Save changes

### Step 7. Permission Tap > Bucket policy > Edit

Paste policy above

```bush
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::wecode26likeproject/*"
        }
    ]
}
```

### Step 8. Go back to Properties > get URL from the bottom.

## Resource

- Like / 라이키, 나이키 클론 프로젝트
  - [홈 페이지](http://wecode26likeproject.s3-website.ap-northeast-2.amazonaws.com/)는 [AWS S3](https://aws.amazon.com/?nc2=h_lg)를 이용해 배포하였다.
  - [시연 영상](https://drive.google.com/file/d/1QfJUuwgZz7eYWqR9iYJ71wAxjD2XTrBy/view?usp=sharing)
  - [Front-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend.git)
  - [Back-end github](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-backend.git)
  - [백엔드 API 설계](https://www.notion.so/LIKE-34de3722ecbe46eabcd5669789a499b1)
  - [Trello](https://trello.com/b/b9cKMX5x/like-%ED%8C%80)