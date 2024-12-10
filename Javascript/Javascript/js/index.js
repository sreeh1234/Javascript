function demo(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)

    result=document.getElementById("res").innerHTML=a+b
    console.log(a+b);

}

function sub(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)

    result=document.getElementById("res").innerHTML=a-b
    console.log(a-b);

}

function mul(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)

    result=document.getElementById("res").innerHTML=a*b
    console.log(a*b);

}

function div(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)

    result=document.getElementById("res").innerHTML=a/b
    console.log(a/b);

}

function mod(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)

    result=document.getElementById("res").innerHTML=a%b
    console.log(a%b);

}

function expo(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)

    result=document.getElementById("res").innerHTML=a**b
    console.log(a**b);

}

