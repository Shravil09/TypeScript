// export let var_one:string = "Angular14";.

// let var_one:string = "welcome";
// export default var_one; 

// export let sub_one:string = "Angular";
// export let sub_two:string = "NodeJS";
// export let sub_three:string = "MongoDB";

// let sub_one:string = "Angular";
// let sub_two:string = "NodeJS";
// let sub_three:string = "MongoDB";
// export {sub_one, sub_two,sub_three};


// function my_fun():any{
//     return {
//         "sub_one": "Angular",
//         "sub_two": "NodeJS",
//         "sub_three" : "MongoDB"
//     }
// }
// export default my_fun;


// class class_one{
//     constructor(public param1:any, 
//                 public param2:any,
//                 public param3:any
//         ){}
// }
// export default class_one;


interface interface1{
    var_one:string;
    var_two:string;
    var_three:string;

    fun_one():string;
    fun_two():string;
    fun_three():string;
}
export default interface1;