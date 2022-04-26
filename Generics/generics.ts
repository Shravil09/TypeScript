function fun_one<A,B>(param1:A, param2:B):void{
    console.log(param1, param2);
}

fun_one<string,string>("Hello-1", "Hello-2");
fun_one<number,number>(100, 200);
fun_one<boolean,boolean>(true, false);
fun_one<any,any>({"key1":"Hello"}, {"key2" : "Hi"});


