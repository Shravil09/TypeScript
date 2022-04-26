/*
    class classA{
        var1 : string = "Hello-1";
        var2 : string = "Hello-2";
        var3 : string = "Hello-3";
    }
    let obj:classA = new classA();
    console.log(obj.var1, obj.var2, obj.var3);
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class classA{
        var1:string;
        var2:string;
        var3:string;
        constructor(){
            this.var1 = "Hello-1";
            this.var2 = "Hello-2";
            this.var3 = "Hello-3";
        }
    }
    let obj:classA = new classA();
    console.log(obj.var1, obj.var2, obj.var3);
*/
/*
    class classA{
        sub_one:any;
        sub_two:any;
        sun_three:any;
        constructor(arg1:any, arg2:any, arg3:any){
            this.sub_one = arg1;
            this.sub_two = arg2;
            this.sun_three = arg3;
        }
    }
    let obj:classA = new classA("Hello-1", 1000, `Welcome`);
    console.log(obj.sub_one, obj.sub_two, obj.sun_three);
*/
/*
    class classA{
        fun_one():string{
            return "Hello-1";
        }
        fun_two():string{
            return "Hello-2"
        }
        fun_three():string{
            return "Hello-3"
        }
    }
    let obj:classA = new classA();
    console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());

*/
/*
    class classA{
        private v1:string;
        private v2:string;
        private v3:string;
        constructor(){
            this.v1 = "Hello_1";
            this.v2 = "Hello_2";
            this.v3 = "Hello_3";
        }
        public fun_one():string{
            return this.v1;
        }
        public fun_two():string{
            return this.v2;
        }
        public fun_three():string{
            return this.v3;
        }
    }
    let obj:classA = new classA();
    console.log(obj.fun_one(), obj.fun_two, );
*/
//inheritance
//getting the data from "parent" class to "child" class called as "inheritance"
//we will implement the inheritance with the help of "extends" keyword
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hirarichal inheritance
//5) hybrid inheritance
//single level inheritance
/*
    class Parent{
        p1:string = "Hello_1";
    }

    class Child extends Parent{
        c1 : string = "Hello_2";
    }
    let obj:Parent = new Parent();
    console.log(obj.p1);

    let obj1:Child = new Child();
    console.log(obj1.c1, obj.p1);
*/
/*
class Parent{
    fun_one():any{
            return {"key1":"Hello_1"};
        }
    };
    class Child extends Parent{
        fun_two():any{
            return {"key2":"Hello_2"};
        }
    }
    class Subchild extends Child{
        fun_three():any{
            return {"key3":"Hello_3"};
        }
    };
    let obj1:Parent = new Parent();
    console.log(obj1.fun_one().key1 )
    ;
*/
//polymorphism
//behaves like many called as polymorphism
//1) function overloading
//2) function overriding
//1) function overloading
/*
    class ClassA{
        fun_one(param1:number, param2:number):void

        fun_one(param1:string, param2:string):void

        fun_one(param1:any, param2:any):void{
            console.log(param1+param2);
            
        }
    }
    let obj:ClassA = new ClassA();
    obj.fun_one(10,10);
    obj.fun_one("Hello_1", "Hello_2");
*/
//2) function overriding
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.fun_one = function () {
        return "Data coming from <b> oracle </b> ";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.fun_one = function () {
        return "Data coming from <b>MongoDB</b> ";
    };
    return Child;
}(Parent));
var obj = new Child();
console.log(obj.fun_one());
