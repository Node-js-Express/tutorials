# Node and Express Tutorial

 Node and Express Tutorial 입니다. 앞으로 해나가시는데 이 정도를 알고 계시면, 매우 원활할 것 입니다.

수업 후 복습을 진행해주시면 이해력 증진 실력 쑥쑥 할 겁니다.

화이팅~!!

# 기본적인 설정 및 실행
```
"type": "module"
```
위의 줄을 package.json 파일에 추가하면 ES6의 다양한 기능을 활용할 수 있습니다.

```
node [파일 경로]
node app.js
```
위와 같이 node라는 명령어와 함께, 특정 파일의 경로를 입력하면 파일을 실행할 수 있습니다.

터미널 상에서 현재 있는 위치에 따라서 똑같은 파일이라도 파일 경로는 달라질 수 있습니다.

```
npm start
```
위의 명령어를 입력하시면, package.json에서 "scripts"에 정의되어 있는 명령어를 보고 실행해줍니다.
현재는 nodemon app.js으로 정의되어 있으므로, 해당 명령어를 실행해줍니다.