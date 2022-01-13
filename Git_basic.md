# **Git 기초**

## Git 초기 설정

> 최초 한번만 설정합니다
>
> 매번 git을 사용할 떄마다 설정할 필요가 없습니다.
>
> ex) 오프라인 시행 시 멀캠 교육장 처음 갔을 때 또는 컴퓨터를 새로 샀을 때

1. 커밋 작성자 정보 등록

   ``` 
   $ git config --global user.email "깃허브 메일주소"  : 내 깃 허브 메일 설정
   $ git config --global user.email "깃허브 닉네임"  : 내 깃 허브 닉네임 설정
   ```

2. 커밋 작정자 정보 확인

   ```
   $ git config --global -l
   
   또는
   
   $ git config --global --list
   ```

3. 커밋 작성자 정보 변경

   ```
   $ git config --global --unset user.email
   $ git config --global --unset user.name
   
   (이후 1번의 작업 다시 시행)
   ```

   

## Git 기초 명령어

### 1. 로컬 저장소

- `working directory` : 사용자의 일반적인 작업이 이워지는 곳
- `staging area` : 커밋을 위한 파일 및 폴더의 변경사항들이 저장되는 곳
- `repository (commits)` : staging area에 있던 파일 및 폴더의 변경사항들이 커밋으로 저장되는 곳 
- Git은 working directory (WD) => staging area => repository의 과정으로 버전 관리를 수행합니다

### 2. git init

- 현재 작업 중인 디렉토리(폴더)를 Git으로 관리하겠다는 명령어
- __`.git`__  이라는 숨김 폴더를 생성하고, 터미널에는  __`(master)`__  라고 표기됩니다 

```
! 주의 사항 ⭐️ (이모지: ctrl + cmd + spc)

1. 이미 Git 저장소인 폴더 내에 또 다른 Git 저장소를 만들지 않습니다 (중첩 금지)
즉, 이미 터미널에 (master)가 붙어 있으면 git init을 하지 않습니다.

2. 절대로 홈 디렉토리(또는 바탕화면)에서 git init을 하지 않습니다.

3. 혹시라도 실수로 git init을 해버렸다면 아래의 명령어로 해결

$ ls -a
$ rm -rf .git 
```



### 3. git status

- working directory와 staging area에 있는 파일의 `현재 상태`를 알려주는 명령어

- **어떤 작업을 시행하기 전메 수시로 status를 확인합니다.**

- 상태의 종료

  1. `untracked`: Git이 관리하지 않는 파일 (한번도 add를 한 적 없는 파일)

     - ex) 처음 생성한 파일

  2. `tracked` : Git이 관리하는 파일 (이전에 한 번이라고 add를 한 적 있는 파일)

     - `unmodified` : 최신 상태 (이전 버전에 비해 변경사항이 없는 상태)

     - `modified` : 수정되었지만 아직 staging area에 올라가지 않은 상태

     - `staged` : staging area에 올라간 상태

     - 파일 라이프사이클 예시

       ![The lifecycle of the status of your files](https://git-scm.com/book/en/v2/images/lifecycle.png)

### 4. git add

-  working directory에 있는 파일을 staging area로 올리는 명령어

- git이 해당파일을 추적(관리)할 수 있도록 만듭니다.

- `untracked, modified => staged` 로 상태를 변경합니다.

- 예시

  ```
  # a.txt만 staging area에 올리는 명령어입니다.
  
  $ git add a.txt
  ```

  ```
  # a.txt, b.txt를 staging area에 올리는 명령어입니다.
  
  $ git add a.txt b.txt
  ```

  ```
  # 현재 디렉토리의 모든 파일을 staging area에 올리는 명령어입니다.
  
  $ git add .
  ```



### 5. git commit

- staging area에 올라온 파일의 변경사항을 하나의 버전(커밋)으로 저장하는 명령어
- `커밋 메세지` **는 현재변경 사항들을 잘 나타낼 수 있도록** `의미있게` **작성하는 것을 권장합니다.**
- 각각의 커밋은 `sha-1 알고리즘` 에 의해 반환된 고유의 해시 값을 ID로 가집니다.

### 6. git log

- 커밋의 내역(commit ID, 작성자, 작성 시간, 커밋 메세지 등)을 조회할 수 있는 명령어
- 옵션
  - `--oneline` : 커밋 메세지를 한 줄로 축약해서 보여줍니다.
  - `--graph` : 브랜치와 머지 내역을 그래프로 보여줍니다.
  - `--all` : 현재 브랜치를 포함한 모든 브랜치의 내역을 보여줍니다.
  - `--reverse` : 커밋 내역의 순서를 반대로 보여줍니다. (최신 커밋이 아래로 가도록 설정)
  - `-p` : 파일의 변경 내용도 같이 보여줍니다.
  - `-n` : 숫자 n개만 큼의 커밋내역을 보여줍니다.

## 원격 저장소

### git remote

- 로컬 저장소에 원격 저장소를 등록, 조회, 삭제 할 수 있는 명령어

  1. 원격 저장소 등록

     ```
     git remote add <이름> <주소> 형식으로 작성합니다
     ```

     ```
     $ git remote add origin 깃헙_저장소_주소
     
     [풀이]
     git 명령어를 작성할건데, remote(원격 저장소)에 add(추가) 한다.
     origin이라는 이름으로 "나의 깃헙_저장소_주소"라는 원격 저장소를
     ```

  2. 원격 저장소 조회

     `git remote -v` 로 작성합니다.

     ```
     $ git remote -v
     
     origin  https://github.com/내_깃헙_닉네임/TIL.git (fetch)
     origin  https://github.com/내_깃헙_닉네임/TIL.git (push)
     ```

  3. 원격 저장소 연결 삭제

     ```
     $ git remote rm origin
     
     [플이]
     git 명령어를 작성할건데, remote(원격 저장소)와의 연결을 rm(삭제)한다.
     ```

### git push

- 로컬 저장소의 커밋을 원격 저장소에 업로드하는 명령어

- `git push <저장소 이름> <브랜치 이름> 형식으로 작성합니다.

  ```
  $ git push origin master
  
  [풀이]
  git 명령어를 작성할건데, origin 이라는 이름의 원격 저장소에 master 브랜치의 commit들을 push 한다.
  ```











