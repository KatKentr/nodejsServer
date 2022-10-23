
//function that returns the nth fibonacci term
//dokimase kai me if else gia tis periptwseis 0 kai 1, to idio akrivws implementation me tin php!!

 export function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}


//export.modules={ fibonacci };
