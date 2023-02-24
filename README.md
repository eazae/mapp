#mapp-reinstall-vuecli5.0.8 브랜치

> mapp-reinstall 브랜치에서 checkout해서, vuecli@5.0.8 버전으로 업데이트 후 
> 그 프로젝트 가지고 동일한 package들 재설치

1. 
```
npm install -g @vue/cli
#
# package-lock.json 제거
vue upgrade
```

2. found 0 vulnerabilities
(dependency에 문제 없는 lock ver.)


3. 실행
```json

    // coverage 결과값 폴더 생성 (호출부: build.js)
    "test:build": "vue-cli-service test:unit --coverage ",
    // 새로 commit 되는 파일들만 test (호출부: husky pre-commit)
    "test:precommit": "vue-cli-service test:unit -o",
    // 전체 테스트 코드 실행 (호출부: husky pre-push)
    "test:prepush": "vue-cli-service test:unit",
    // 개발 중에 코드 변경사항이 생길 때마다 실행
    "test:unit": "vue-cli-service test:unit --watch",

```

4. naming convention

(자료)

5. mocking

* __mocks__ 폴더



<설치 환경>
* node v14.16.0
* vue-cli v5.0.8
* OS mac m1