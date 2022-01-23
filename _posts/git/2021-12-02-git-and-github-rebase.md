---
layout: post-base
title: Rebase 하는 법
meta: 깃 리베이스 일반방법론
category: git
tags: [Git / Github]
---

## General Flow

### 새로운 작업을 모두 마치고 push 하기 전에는

1. Main branch 로 이동하여 remote main을 pull 받는다.
2. 내가 push 할 Feature branch 로 이동한다.
3. `git rebase -i main`를 진행한다.

### Rebase 하는 동안 squash 진행할 때에는

1. 가장 오래된 commit을 pick 한다.
2. 다른 커밋 메세지는 가장 오래된 commit을 기준으로 squash 한다.
3. 다른 커밋의 작업 내역이 없어지는 것이 아닙니다.
4. `esc` -> `:wq` 로 창에서 빠져나온다.

### 수정용 에디터가 하나 더 나타난다.

1. 최종적으로 이 rebase된 커밋의 내용을 작성하는 부분.
2. 현재까지 적은 커밋 메세지가 전부 나타난다.
3. 불필요한 내용을 제거하고 현재 수정 내역에 대한 커밋 메세지를 정
성껏 작성한다.
4. `esc` -> `:wq` 저장하고 에디터에서 빠져나온다.

### Successfully rebased

1. 성공했다면 `git log`로 깔끔해진 커밋 메세지를 한 번 감상한다.
2. push를 합니다.

### Rebase 후 push 하기

1. Rebase는 commit history를 정리하는 역할을 한다.
2. 같은 브랜치에서 Rebase를 할 때마다 history가 달라질 수 있다.
3. 수정 사항이 추가로 생긴 후 다시 rebase하면 history가 무조건 달
라진다.
4. git은 history가 다른 branch의 push를 허용하지 않는다.
5. `git push origin feature/login -f` -f 옵션을 사용하여 force
push를 진행한다.

## Conflict Flow

### Rebase 중 충돌 해결하기

1. 충돌이 일어난 경우 Rebase가 진행되지도, 끝나지도 않고 도중에
멈춰 있어, 매우 당혹스럽다.
2. 터미널이 (rebase ~ 1/6) 과 같은 메세지로 rebase가 진행중임을
알려주니 겁먹지 않도록 하자!
3. 충돌은 충돌일 뿐, 해당하는 코드를 수정 후
4. `Git add .`
5. (Git commit은 하지 않는다. 수정 사항이 없으니까)
6. `Git rebase ㅡㅡcontinue`를 진행한다
7. 멈춰 있던 리베이스가 진행된다.
8. 충돌이 여러번 나면 그 때마다 충돌을 해결하고 `git add .` / `git rebase ㅡㅡcontinue`를 반복한다.
9. 계속 해결이 안된다면, `git rebase ㅡㅡabort`로 아예 rebase를
진행하기 전 상황으로 돌아갈 수도 있다.

## Resource

* Wecode
