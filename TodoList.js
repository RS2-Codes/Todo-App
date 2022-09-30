let btnAdd=document.getElementById("btnAdd")
let btnReset=document.getElementById("btnReset")
// let btnSort=document.getElementById("btnSort")
let btnClean=document.getElementById("btnClean")
let btnPopulate=document.getElementById("btnPopulate")
let inpList=document.getElementById("inpList")
let divaddlist=document.getElementById("divaddlist")
let itm=document.getElementsByClassName("itm")
let count=0;
let strike=undefined;
// btnAdd.disabled=true;
// inpList.onchange=function(){
//     btnAdd.disabled=false;
// }
btnAdd.onclick=function(){
    if(inpList.value==''){

    }
    else{

        let div=document.createElement("div");
        div.textContent=inpList.value;
        div.classList.add("itm")
        div.classList.add("hello")
        // div.setAttribute('id','btnonclick')
        divaddlist.appendChild(div)
        strike1();
        count++;
        itm=document.getElementsByClassName("itm")
        sort();
    }
    }
function strike1(){
    // itm=itm;
    let v=itm.length
    for (let i = 0; i <v; i++) {
        // const q = itm[i];
        // itm=document.getElementsByClassName("itm")
        
        itm[i].onclick=function(){
            itm=document.getElementsByClassName("itm")
            itm[i].classList.add("strike")
            // itm[i].innerHTML="<strike>"+itm[i].innerText+"</strike>"
            let temp1=itm[i];
            itm[i].remove();
            divaddlist.appendChild(temp1);
            
            itm=document.getElementsByClassName("itm")
            strike1();
        }
    }
}
btnReset.onclick=function(){
    inpList.value="";
}
btnClean.onclick=function(){
    strike=document.getElementsByClassName("strike")
    let b=strike.length;
    for (let i = b-1; i >= 0; i--) {
        let w =strike[i];
        // if (w.getAttribute("class")=="itm strike") {
            w.remove();
        // }
        // w.getAttribute()
    }
    strike1();
}
function sort(){
        strike=document.getElementsByClassName("strike");
        let counter=1;
        while (counter<=strike.length) {
                let temp1=strike[0];
                strike[0].remove();
                divaddlist.appendChild(temp1);
                counter++;
            }
            strike1();
        }
        btnPopulate.onclick=function(){
            for (let i = 1; i <= inpList.value; i++) {
                itm=document.getElementsByClassName("itm")
                let div=document.createElement("div");
                div.textContent=i;
                div.classList.add("itm")
                // div.contentEditable=true
                // div.setAttribute('id','btnonclick')
                divaddlist.appendChild(div)
                strike1();
                count++;
            }
        }