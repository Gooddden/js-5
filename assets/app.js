
function calc(){

    let weight =    +userWeight.value;

    let heigt =     +userHeight.value / 100;
    
    let bmi = weight / heigt **2;
   
    result.innerHTML = bmi;

    if(bmi <= 16){
        meaning.innerHTML = 'Выраженный (дефицит) массы тела' ;
    } else if(bmi < 18.5 ){
        meaning.innerHTML = 'Недостаточная масса тела';
    } else if(bmi < 25 ){
        meaning.innerHTML = 'Норма';
    } else if(bmi < 30 ){
        meaning.innerHTML = 'Избыточная масса тела (предожирение)';
    } else if(bmi < 35 ){
        meaning.innerHTML = 'Ожирение 1 степени';
    } else if(bmi < 40 ){
        meaning.innerHTML = 'Ожирение 2 степени';
    } else if(bmi > 40 ){
        meaning.innerHTML = 'Ожирение 3 степени';
    } 
}