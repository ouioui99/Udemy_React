let a1 = "aa";
console.log(a1);

a1 = "ddd";
console.log(a1);

const val4 = {
  name: "aaaa",
  age: "13"
};

console.log(val4.name);
val4.name = "sssss";

console.log(val4.name);

/**
 * テンプレート文字列
 */

const name1 = "tanaka";

//従来の方法
const message1 = "my name is " + name1;
console.log(message1);

//テンプレート文字列
const message2 = `my name is ${name1}`;
console.log(message2);

/**
 * アロー関数
 */
//従来
function func1(str) {
  return str;
}

console.log(func1("func1"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

const func4 = (num1, num2) => num1 + num2;

console.log(func3(5, 7));
console.log(func4(5, 9));

/**
 * 分割代入
 */
const myProfile = {
  name: "tanaka",
  age: 25
};

const myProfileArray = ["tanaka", 25];

const message3 = `僕の名前は${myProfile.name}。年齢は${myProfile.age}`;
console.log(message3);

const { name, age } = myProfile;
const message4 = `僕の名前は${name}。年齢は${age}`;
console.log(message4);

const [nameA, ageA] = myProfileArray;
const message5 = `僕の名前は${nameA}。年齢は${ageA}`;
console.log(message5);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello();

/**
 * スプレッド構文
 */

//配列の展開
const arr1 = [1, 2, 3];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
const arr7 = [...arr5];

console.log(arr6);
console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "鈴木"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

//map
nameArr.map((name, i) => console.log(`${i + 1}番目は、${name}です`));
nameArr.map((name) => {
  console.log(name);
});

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "鈴木") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);
