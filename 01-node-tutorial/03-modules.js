// CommonJS에서 모든 파일은 module 입니다.(by default)
// Modules - Encapsulated Code (only share minimum)
// 한 파일에서 변수나 함수에 대해서 export를 하면, 다른 파일에서 해당 변수나 함수를 사용할 수 있습니다.

import sayHi from './05-utils.js';
import { john, peter } from './04-names.js';
import  person from './06-alternative-flavor.js';
import './07-mind-grenade.js';
//require('./07-mind-grenade.js') // 해당 파일을 require하는 순간 모듈 내부의 코드가 실행됩니다.

// const names = require('./04-names')
// const sayHi = require('./05-utils')
// const data = require('./06-alternative-flavor')

sayHi('susan')
sayHi(john)
sayHi(peter)
console.log(person)
