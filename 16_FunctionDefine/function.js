//1、函数声明
function myFunction(a, b) {
    return a * b;
}

//2、函数表达式
//JavaScript 函数可以通过一个表达式定义。
var x = function (a, b) {return a * b};
//在函数表达式存储在变量后，变量也可作为一个函数使用：
var x = function (a, b) {return a * b};
var z = x(4, 3);
//以上函数实际上是一个 匿名函数 (函数没有名称)。
//函数存储在变量中，不需要函数名称，通常通过变量名来调用。

//3、Function() 构造函数
var myFunction = function (a, b) {return a * b}
var x = myFunction(4, 3);
//在 JavaScript 中，很多时候，你需要避免使用 new 关键字

//4、自调用函数
//函数表达式可以 "自调用"。
//自调用表达式会自动调用。
//如果表达式后面紧跟 () ，则会自动调用。
(function () {
    var x = "Hello!!";      // 我将调用自己
})();

//5、箭头函数
/*
(参数1, 参数2, …, 参数N) => { 函数声明 }
(参数1, 参数2, …, 参数N) => 表达式(单一)
// 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
*/


