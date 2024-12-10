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


// function five(){
//     let num=parseInt(document.getElementById("b").value)
//     if(num==1){
//         result=document.getElementById("res").innerHTML='sunday';
//     }
//     else if(num==2){
//         result=document.getElementById("res").innerHTML='monday';
//     }
//     else if(num==3){
//         result=document.getElementById("res").innerHTML='tuesday';
//     }

//     else if(num==4){
//         result=document.getElementById("res").innerHTML='wednesday';
//     }

//     else if(num==5){
//         result=document.getElementById("res").innerHTML='thrusday';
//     }

//     else if(num==6){
//         result=document.getElementById("res").innerHTML='friday';
//     }

//     else if(num==7){
//         result=document.getElementById("res").innerHTML='satarday';
//     }
//     else{
//         result=document.getElementById("res").innerHTML='invalid choice';
//     }


// }

// function six(){
//     let cost=parseInt(document.getElementById("b").value)
//     if(cost<=50000){
//         tax=0.05*cost
//         result=document.getElementById("res").innerHTML=tax;
//     }
//     else if(50000<cost<=100000){
//         tax=0.1*cost
//         result=document.getElementById("res").innerHTML=tax;
//     }
//     else{
//         tax=0.15*cost
//         result=document.getElementById("res").innerHTML=tax;
//     }

// }


// for (let i=0;i<=10;i++){
//     console.log(i);
// }
   
// let i=0
// do{
//     console.log(i);
//     i++
// }
// while(i<=10)


function even(){
    let first_digit=parseInt(document.getElementById("first").value)
    let last_digit=parseInt(document.getElementById("last").value)
    for(i=first_digit;i<=last_digit;i++){
        if(i%2===0){
            console.log(i);
            
        }
      
    }
}

function odd(){
    let first_digit=parseInt(document.getElementById("first").value)
    let last_digit=parseInt(document.getElementById("last").value)
    for(i=first_digit;i<=last_digit;i++){
        if(i%2!==0){
            console.log(i);
            
        }
      
    }
}

function mul(){
    let num=parseInt(document.getElementById("digit").value)
    for (i=1;i<=10;i++){
        res=i*num
        console.log(res);
        

    }
    
}

function rev(){
    let word=document.getElementById("a").value
    rev=''
    i=0
    len=word.length
    while(i<len){
        rev=word[i]+rev
        i++
    }

    console.log(rev);
    
}

// let l=[1,2,3,4,5]
// let l={name:'sanu',age:33,place:'ekm'}
// let a="welcome"
// for(i of a){
//     console.log(i);
    
// }

function rev1(){
    let word=document.getElementById("a").value
    rev=''
    // len=word.length
    for(i of word){
        rev=i+rev
    }

    console.log(rev);
    
}





// --------TABLE CREATION--------
// ------------------------------


// let data=[{name:'manu',age:22},{name:'ramu',age:26},{name:'sanu',age:24},{name:'anu',age:12}]
// console.log(data);
// let table=document.querySelector("tbody")
// for(i of data){
//     let tr=document.createElement("tr")
//     let td=document.createElement("td")
//     let td1=document.createElement("td")
//     td.innerHTML=i.name
//     tr.appendChild(td)
//     td1.innerHTML=i.age
//     tr.appendChild(td1)
//     table.appendChild(tr)
// }


// --------STRING METHODS--------
// ------------------------------

// let a="      welcome"
// let b="HELLO"
// console.log(a.length);
// console.log(a.charAt(0));
// console.log(a.concat('  ',b));
// console.log(a+b);
// console.log(a.toUpperCase());
// console.log(a.slice(0,4));
// console.log(a.replace('w','W'));
// console.log(a.trim());
// console.log(a.trimEnd());
// console.log(a.trimStart());
// console.log(a.indexOf('l'));
// console.log(a.startsWith(''));
// console.log(a.endsWith('e'));
// console.log(a.search('l'));
// console.log(a.split());


// --------LIST METHODS--------
// ----------------------------

// let l=[1,2,3,4,5]
// console.log(l[0]);
// l.push(10)
// l.pop()
// l.shift()
// l.unshift(11)
// console.log(l.length);
// console.log(l.indexOf(5));
// l[1]=100
// console.log(l)

// ---------------------------------------------

// function demo1(name,age){
//     console.log(name,age);
    
// }
// demo1('anu',10)

// ---------------------------------------------

// let demo = function(a){
//     console.log('nameless fun',a);
//     console.log('nameless fun',a);
//     console.log('nameless fun',a);
    
// }
// demo(20)

// ---------------------------------------------

// let add1=function(a,b){
//     return a+b
// } 
// console.log(add1(10,2));


// let add = (a,b)=>a+b
// console.log(add(10,5));


// let sub = (a,b,c)=>(a-b)-c
// console.log(sub(30,20,5));


// l=[1,2,3,4,5,6]
// l.forEach(element => console.log(element))


// let data=l.map(a=>a*10)
// console.log(data);


// let data=l.filter(a=>a%2!=0)
// console.log(data);

// let data1=l.filter(a=>a%2==0)
// console.log(data1);





// let data=[{name:'manu',age:22},{name:'ramu',age:26},{name:'sanu',age:24},{name:'anu',age:12}]
// console.log(data);
// let table=document.querySelector("tbody")
// data.forEach((i)=>{
//     let tr=document.createElement("tr")
//     tr.innerHTML=`
//     <td>${i.name}</td>
//     <td>${i.age}</td>
//     `
//     table.appendChild(tr)
// })




// let data=[{name:'manu',age:22},{name:'ramu',age:26},{name:'sanu',age:24},{name:'anu',age:32}]
// console.log(data);
// data1=data.filter(i=>i.age>30)
// data2=data.filter(i=>i.age<30)
// console.log(data1);
// let table=document.querySelector("tbody")
// data1.forEach((i)=>{
//     let tr=document.createElement("tr")
//     tr.innerHTML=`
//     <td>${i.name}</td>
//     <td>${i.age}</td>
//     `
//     table.appendChild(tr)
// })



let data=[{id:'1',name:'manu',age:25,place:'tvm'},{id:'2',name:'anu',age:24,place:'tsr'},{id:'3',name:'sanu',age:22,place:'kollam'},{id:'4',name:'akash',age:20,place:'ekm'}]

function display(){
    let table=document.querySelector("tbody")
    table.innerHTML=''
    data.forEach((i) => {
        let tr=document.createElement("tr")
        let id_td=document.createElement("td")
        id_td.innerHTML=i.id
        tr.appendChild(id_td)
        let name_td=document.createElement("td")
        name_td.innerHTML=i.name
        tr.appendChild(name_td)
        let age_td=document.createElement("td")
        age_td.innerHTML=i.age
        tr.appendChild(age_td)
        let place_td=document.createElement("td")
        place_td.innerHTML=i.place
        tr.appendChild(place_td)


        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.textContent="edit"
        edit_btn.onclick=function(){
            edit_form(i.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement("td")
        let delete_btn=document.createElement("button")
        delete_btn.textContent="delete"
        delete_btn.onclick=function(){
            delete_form(i.id)
        }
        delete_td.appendChild(delete_btn)
        tr.appendChild(delete_td)
        

        table.appendChild(tr)
       
    })
   
}

document.getElementById("add_form").addEventListener('submit',function(event){

    event.preventDefault()
    const id = document.getElementById('no').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const place = document.getElementById('place').value
    data.push({id:id,name:name,age:age,place:place})
    document.getElementById('no').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''

    display()

})

let edit_id=''


function edit_form(id){
    console.log(id);
    document.getElementById("edit_form").style.display='block'
    document.getElementById("add_form").style.display='none'

    edit_data=data.find(user=>user.id==id)
    console.log(edit_data);
    document.getElementById("eno").value=edit_data.id
    document.getElementById("ename").value=edit_data.name
    document.getElementById("eage").value=edit_data.age
    document.getElementById("eplace").value=edit_data.place
    edit_id=edit_data.id
}

document.getElementById("edit_form").addEventListener('submit',function(event){
    
    event.preventDefault()
    const eid = document.getElementById('eno').value
    const ename = document.getElementById('ename').value
    const eage = document.getElementById('eage').value
    const eplace = document.getElementById('eplace').value

    data=data.map(user=>{
        if (user.id==edit_id){
            return {...user,id:eid,name:ename,age:eage,place:eplace}
        }return user
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    display()

})

function delete_form(id){
    data=data.filter(user=>{
        if (user.id!=id){
            return user
        }
    })
    display()
}


display()




// data.forEach((i)=>{
//     let tr=document.createElement("tr")
//     tr.innerHTML=`
//     <td>${i.id}</td>
//     <td>${i.name}</td>
//     <td>${i.age}</td>
//     <td>${i.place}</td>
//     `
//     table.appendChild(tr)
// })


