#mapp-reinstall 브랜치

> 기존 package.json에서, 기존의 package-lock.json은 사용하지 않고 `npm install`로 재설치 진행해본 ver.

1. 
```
npm cache clean --force
#
# package-lock.json 제거
npm install
```

2. found 15 vulnerabilities (2 low, 2 moderate, 9 high, 2 critical)
-> vue-cli 5.0.8로 업데이트 권장



<설치 환경>
* node v14.16.0
* vue-cli v4.5.0
* OS mac m1