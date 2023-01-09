# 4시간에 끝내는 Vue.js 입문

https://youtu.be/b0ImUEsqaAA

## 설치

```
  vue --version
  sudo npm install -g vue
  sudo npm install -g @vue/cli
```

vscode extention vetur

## 프로젝트 생성

```
  vue create ${projectname}
  Default ([Vue 3] babel, eslint)
```

## vue 3 프로젝트 구조

- package.json
  - private : true : npm에 등록시 개인적으로 쓰겠단 것
  - `scripts.*` : `vue *` 명령어가 실제로 실행하는 alias
  - dependencies : vue 프로젝트에서 **운영환경**에서 사용하는 모듈들
  - devDependencies : **개발환경**에 사용되는 모듈들
  - eslintConfig : 
  - browserslist : 지원 브라우져에 대한 정보
- package-lock.json
  - devDependencies의 모듈들을 구성하는 모듈
- /public/index.html : 파일 하나로 서비스가 됨
- /src/main.js : 파일로 구동되고 있음

## create vue project

- [X] Babel : 구브라우져 지원
- [ ] PWA : 모바일앱 처럼 구현하는 기술
- [X] Router : 메뉴구성 및 화면 이동을 위한 모듈
- [X] Vuex : 상태관리를 위한 저장소
- [X] Linter / Formatter : Coding Convention
- [ ] Unit Testing : test 모듈
- [ ] E2E : End to End test를 위한 모듈
- [X] 3.x
- [X] use history mode : Y
  - 브라우져에서 사용라는 Router의 history mode 사용
- [X] Pick A Linter / Formatter config
  - [ ] ESLint with error prevention only 
  - [ ] ESLint + Airbnb config 
  - [X] ESLint + Standard config 
  - [ ] ESLint + Prettier 
- [X] Lint on save
- [X] Save this as a preset for future projects? Y : 설정을 템플릿으로 저장