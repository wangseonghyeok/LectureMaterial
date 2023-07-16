"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.
  배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
  객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
*/

// 배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
var points = [20, 30, 40];
var x1 = points[0]; // 20
var y1 = points[1]; // 30
var z1 = points[2]; // 40
console.log(x1, y1, z1);
var x2 = points[0],
  y2 = points[1],
  z2 = points[2]; // const [x2, y2, z2] =[20, 30, 40];
console.log(x2, y2, z2);

// 두번째 값 무시하기
var x3 = points[0],
  z3 = points[2]; // [20, 30, 40];
console.log(x3, z3); // 20, 40

// 세번째 값 무시하기
var x4 = points[0],
  w4 = points[3]; // [20, 30, 40];
console.log(x4, w4); // 20, undefined

var _ref = [20, 30, 40, function () {
    return console.log('xxxx');
  }],
  x5 = _ref[0],
  w5 = _ref[3];
console.log(x5, w5); // 20, ()=>(console.log('xxxx'))
w5(); // xxxx

var car = {
  type: 't',
  color: 'S',
  model: 2021
};

// ES5
var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1);

// 객체 분해 할당 을 이용해서 type ,color ,model 을 만드시오
// 객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
// const { type:type, color:color, model:model, gear:gear } = car;
var type = car.type,
  color = car.color,
  model = car.model,
  gear = car.gear;
console.log(type, color, model, gear); // t S 2021 undefined