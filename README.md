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


3. 주의
"parserOptions": {
      "ecmaVersion": 2020,
      "parser": "@typescript-eslint/parser"
    },


<설치 환경>
* node v14.16.0
* vue-cli v5.0.8
* OS mac m1