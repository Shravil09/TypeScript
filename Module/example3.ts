import { obj } from "./example2";
const{
    var_one, var_two, var_three, fun_one, fun_two, fun_three
} = obj;

console.log(var_one, var_two, var_three, fun_one(), fun_two(), fun_three());
