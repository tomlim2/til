---
layout: post-base
title: 21-10-16 Git / Github / cli / 사용법
meta: Git과 Github 쓰는 방법 (cli ver)
source: https://education.github.com/git-cheat-sheet-education.pdf
category: til
---
## Git 자주 사용되는 커멘드

```bush
git init   // creates a new Git repository
git status // 변경상태 확인
git add    // 수정 이력 기록 준비
git diff   // shows the difference between the working directory and the staging area
git commit // 수정 이력 기록
git log    // 로그 확인
git push origin master
```

## 협업으로 사용할 경우

회사이나 팀 등 조직에서 깃허브를 사용할 경우이다. 전체적인 흐름은 main(master)에서 branch를 만들고 그 branch에서 작업 후 그걸 master로 push 이후 push한 것에 대한 리포트를 작성하는 걸로 한 사이클이 commit의 완료된다.

main(master)가 업데이트가 되었다면 업데이트가 된 버전을 다운받아서 사용한다.

```bush
git clone "git url"
git pull
git branch feature/“branch_name”   //feature branch에서만 작성하기)
git checkout feature/“branch_name” //feature branch에서 일하기위한 단계)
git push add .
git push commit -m “message”
```

`-m "message"`를 입력하지 않는다면 cli에서 자동으로 message를 작성하는 포맷을 제공한다. 이때 `i` 키를 눌러 내용을 입력하고 다끝났으면 `esc` 키를 눌러 입력모드를 종료한다. 이후 `:`를 입력, `wq` 입력 후 enter 키를 눌러 message 입력창을 저장하고 종료하게 된다.

```bush
git push origin feature/“branch_name"
```

위의 사이클이 끝났다면 Github 사이트에서 PR template 작성으로 마무리하면 된다.

## case: Updating my dept code

```bush
git checkout master 
git pull origin master
```

## case: Updating different dept code

```bush
git checkout master 
git pull origin master
git merge master
```

## case: Westagram 프로젝트

context: Wecode에서 프로젝트를 위한 커멘드라인 첫 사용예시이다.
![my usage of github]({{site.baseurl}}/img/21-10-16-git.jpg)

## Resource

* [Github Document](https://docs.github.com/en)
* [Git](https://git-scm.com/doc)
* [Code Academy](www.codecademy.com)
* 헷갈릴때는 커맨드 라인 정리가 잘되어 있는 [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)를 꼭 읽어보자.
* [여기](https://guides.github.com/)에서 여러가지 Github 공식 가이드들을 확인할 수 있다.
