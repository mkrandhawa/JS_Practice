function fibonacciGenerator (n) {
    var output_array=[]
    if (n===0){
        output_array = [0];
        return output_array;
    }
    else if (n===1){
        output_array=[0];
        return output_array;
    }
    else{
        output_array=[0,1];
        for(var i =2; i<n; i++){
            var num = output_array[output_array.length-1] + output_array [output_array.length-2];
            output_array.push(num);
            
        }
    }
    console.log(output_array);
}

