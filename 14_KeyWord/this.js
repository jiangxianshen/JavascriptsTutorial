/*
1、在方法中，this 表示该方法所属的对象。
2、如果单独使用，this 表示全局对象。
3、在函数中，this 表示全局对象。
4、在函数中，在严格模式下，this 是未定义的(undefined)。
5、在事件中，this 表示接收事件的元素。
6、类似 call() 和 apply() 方法可以将 this 引用到任何对象。
*/
//方法中的 this
var person={
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullname:function () {
        return this.firstname +""+ this.lastname;
    }
};
//函数中使用 this（默认）
//在函数中，函数的所属者默认绑定到 this 上。
//在浏览器中，window 就是该全局对象为 [object Window]:
function myFunction() {
    return this;
}