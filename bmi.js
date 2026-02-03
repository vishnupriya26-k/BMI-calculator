function CalculateBMI()
{
    let weightInput=prompt("Enter your weight");
    let heightInput=prompt("Enter your height");     
    
    let weight=parseFloat(weightInput);
    let heightCm=parseFloat(heightInput);
    
    let height=heightCm/100;

    let bmi=weight/(height*height);
    document.getElementById("result").innerHTML=`Your BMI is: ${bmi.toFixed(2)}`;
    
}