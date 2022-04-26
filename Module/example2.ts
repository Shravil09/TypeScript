// import { var_one } from "./example1";
// console.log(var_one);

// import var_one from "./example1";
// console.log(var_one);


// import { sub_one, sub_two, sub_three } from "./example1";
// console.log(sub_one, sub_two,sub_three);

// import *as subjects from "./example1";
// const{
//     sub_one, sub_two, sub_three
// } = subjects;
// console.log(sub_one, sub_two, sub_three);


// import my_fun from "./example1";
// let obj : any = my_fun();
// const {
//     sub_one, sub_two, sub_three} = obj;
//     console.log(obj.sub_one, obj.sub_two, obj.sub_three );
    

// import class_one from "./example1";
// let obj:any = new class_one("Hello-1","Hello-2","Hello-3");
// console.log(obj.param1, obj.param2, obj.param3);


import interface1 from "./example1";

export let obj:interface1 = {
    var_one:"Hello-1",
    var_two:"Hello-2",
    var_three:"Hello-3",
    
    fun_one:():string =>{
        return "Hello-4"
    },
    fun_two :():string => {
        return "Hello-5"
    },
    fun_three:():string => {
        return "Hello-6"
    }
}