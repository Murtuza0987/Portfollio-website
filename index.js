let values=document.querySelector(".s1");
let new_name="FRONTEND DEVELOPER";
let index=1;

let repeate=()=>{

values.innerText=new_name.slice(0,index);
if(index>new_name.length){
    index=1
}

else(index++)

setTimeout(()=>{

    repeate()

},100)

};

repeate();