
//function that returns the nth fibonacci term
//dokimase kai me if else gia tis periptwseis 0 kai 1, to idio akrivws implementation me tin php!!

 export function fibonacci(num) {
 
    if(num == 0) {
    
        return 0;
        
    } else if (num==1){
    
        return 1;
    
    } else {
    
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}


//export.modules={ fibonacci };
