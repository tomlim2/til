---
layout: post-base
title: General Work Flow
meta: 깃과 깃허브의 이해와 일반적인 작업방식 정리
category: git
tags: [Git / Github]
---
Git은 웹 개발자들을 위한 the industry-standard version control system이다.

GitHub는 내 프로젝트의 파일들의 수정사항들을 트래킹하고 같은 프로젝트를 다른 사람들과 일할 수 있게 하기 위해 관리하기 위해서 Git(version-control development tool)을 사용한다.

GitHub와 Git은 비슷한 이름들이지만 GitHub는 서비스이고 Git은 개발자 툴이다. Github 이외의 서비스에서도 Git을 사용할 수 있다.

![github workflow]({{site.baseurl}}/img/21-10-22-understandingWorkflow.png)
_출처 - [https://guides.github.com/pdfs/githubflow-online.pdf](https://guides.github.com/pdfs/githubflow-online.pdf)_

## 1.Create a branch

프로젝트 진행중에 필요한 기능, 혹은 새로운 아이디어를 구현하기 위해 main에서 branch를 만든다. 이때 branch의 이름을 다른 사람들이 무슨 일을 하고 있는지 알기 편하게 매우 상세하게 만들어야한다. (ex) refactor-authentication, user-content-cache-key, make-retina-avatars)

## 2.Add commits

branch 안에서 진행하면서 추가, 삭제, 수정 등이 일어날때마다 commit을 하고 feature branch에 추가 해야한다. commit은 다른 사람들이 볼 수 있는 나의 일에 대한 히스토리를 남긴다. 다른 사람들이 알아보기 쉽게 commit messages를 정확하게 작성해야 한다.

## 3.Open a Pull Request

Pull Requests는 나의 commit들에 대한 discussion을 시작한다. @mention 시스템을 통해 다른 사람 혹은 팀들에게 피드백을 요청할 수 있다. Pull Requests은 오픈소스 프로젝트 그리고 공유된 Repositorie들에 대한 변경들을 관리할 때 매우 유용하다.

## 4.Discuss and review your code

Pull Requests들이 open되면 나의 변경점들을 검토하는 팀이나 관리자들은 질문들이나 코멘트들을 가질 수 있다. 코드 스타일이 안맞을 수도 있고, 유닛 테스트를 잊을 수도 있고, 혹은 모든 것들이 완벽할 수도 있다. Pull Request는 이러한 종류의 대화들을 오고 가게 설계되었다. Pull Request들은 Markdown 형태로 써진다.

## 5.Deploy

## 6.Merge

## Resource

* [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
