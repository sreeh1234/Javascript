// function one(){
//     salary=parseInt(document.getElementById("sal").value)
//     year=parseInt(document.getElementById("year").value)
//     if (year>5){
//         result=document.getElementById("res").innerHTML=salary*0.05;
//         console.log();
//     }
//     else{
//         result=document.getElementById("res").innerHTML='no bonous'
        
        
//     }

// }

// function two(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=a%10
//     result=document.getElementById("res").innerHTML=b
//     if (b%3==0){
//         result=document.getElementById("res").innerHTML='it is divisible by 3';

//     }
//     else{
//         result=document.getElementById("res").innerHTML='not divisible by 3'
//     }

// }

// function three(){
//     let unit=parseInt(document.getElementById("b").value)
//     if(unit<=100){
//         result=document.getElementById("res").innerHTML='No Charge';
//     }
//     else if(100<unit<=200){
//         cost=(unit-100)*5
//         result=document.getElementById("res").innerHTML=cost;
//     }
//     else{
//         cost=(unit-200)*10
//         result=document.getElementById("res").innerHTML=cost+500;

//     }


// }

// function four(){
//     let city=document.getElementById("b").value
//     if(city=='delhi'){
//         result=document.getElementById("res").innerHTML='redfort';
//     }
//     else if(city=='agra'){
//         result=document.getElementById("res").innerHTML='taj mahal';
//     }
//     else if(city=='jaipur'){
//         result=document.getElementById("res").innerHTML='jal mahal';
//     }
//     else{
//         result=document.getElementById("res").innerHTML='invalid choice';
//     }

// }


function five(){
    let num=parseInt(document.getElementById("b").value)
    if(num==1){
        result=document.getElementById("res").innerHTML='sunday';
    }
    else if(num==2){
        result=document.getElementById("res").innerHTML='monday';
    }
    else if(num==3){
        result=document.getElementById("res").innerHTML='tuesday';
    }

    else if(num==4){
        result=document.getElementById("res").innerHTML='wednesday';
    }

    else if(num==5){
        result=document.getElementById("res").innerHTML='thrusday';
    }

    else if(num==6){
        result=document.getElementById("res").innerHTML='friday';
    }

    else if(num==7){
        result=document.getElementById("res").innerHTML='satarday';
    }
    else{
        result=document.getElementById("res").innerHTML='invalid choice';
    }


}

function six(){
    let cost=parseInt(document.getElementById("b").value)
    if(cost<=50000){
        tax=0.05*cost
        result=document.getElementById("res").innerHTML=tax;
    }
    else if(50000<cost<=100000){
        tax=0.1*cost
        result=document.getElementById("res").innerHTML=tax;
    }
    else{
        tax=0.15*cost
        result=document.getElementById("res").innerHTML=tax;
    }

}
   

