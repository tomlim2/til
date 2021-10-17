---
layout: post-base
title: 21-10-16 Git & Github (cli ver)
meta: Git과 Github 쓰는 방법 (cli ver)
category: til
---
## 개인적으로 사용할 경우
```
$ git init
$ git status // 변경상태 확인
$ git add    // 수정 이력 기록 준비
$ git commit // 수정 이력 기록
$ git log    // 로그 확인
$ git push origin master
```

## 협업으로 사용할 경우
회사이나 팀 등 조직에서 깃허브를 사용할 경우이다. 전체적인 흐름은 main(master)에서 branch를 만들고 그 branch에서 작업 후 그걸 master로 push 이후 push한 것에 대한 리포트를 작성하는 걸로 한 사이클이 commit의 완료된다.

main(master)가 업데이트가 되었다면 업데이트가 된 버전을 다운받아서 사용한다.
```
$ git clone "git url"
$ git pull
$ git branch feature/“branch_name”   //feature branch에서만 작성하기)
$ git checkout feature/“branch_name” //feature branch에서 일하기위한 단계)
$ git push add .
$ git push commit -m “message”
```
`-m "message"`를 입력하지 않는다면 cli에서 자동으로 message를 작성하는 포맷을 제공한다. 이때 `i` 키를 눌러 내용을 입력하고 다끝났으면 `esc` 키를 눌러 입력모드를 종료한다. 이후 `:`를 입력, `wq` 입력 후 enter 키를 눌러 message 입력창을 저장하고 종료하게 된다.
```
$ git push origin feature/“branch_name"
```
위의 사이클이 끝났다면 Github 사이트에서 PR template 작성으로 마무리하면 된다.

## 협업을 위한 나의 git cli 사용 예시
앞에 git clone 단계가 있었다.
![my usage of github]({{site.baseurl}}/img/21-10-16-git.jpg)

## Resource
* [Github Document](https://docs.github.com/en)
* [Git](https://git-scm.com/doc)