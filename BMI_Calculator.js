function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/Math.pow(height, 2));
    var interpretation;
    if (bmi<=18.5){
        interpretation="Your BMI is " + bmi + " so your are underweight.";
    }
    else if (bmi>18.5 && bmi<=24.9){
        interpretation="Your BMI is " + bmi + " so you have a normal weight.";
    }
    else if (bmi>24.9){
        interpretation="Your BMI is " + bmi + " so your are overweight.";
    }

    return interpretation;
}

//LEAP YEAR CHALLENGE
function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        if (year%4 == 0){

            if (year%100!==0)
            {
                if (year%400==0){
                    return "Leap year";
                }
            }
        }
        else if (year%4 == 0 && year%100!=0 &&year%400==0){
            return year;
        }
    
    
        
    
    /**************Don't change the code below****************/    
    
    }