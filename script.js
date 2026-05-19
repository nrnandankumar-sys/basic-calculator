let display=document.getElementById("display");
function append(value){
    display.value+=value;
}
function solve(){
   try{
    display.value=eval(display.value);
   } 
   catch{
    display.value="Error";
   }
}
function clearvalue(){
    display.value=""
}
function backspace(){
    display.value=display.value.slice(0,-1);    
}

document.addEventListener("keydown", function(event){
    let key=event.key;
    if((key >= '0' && key <='9') || key ==='+' || key ==='-' || key ==='*' || key ==='/' || key ==='%'){
        append(key);
    }else if(key==="Enter"){
        solve();
    }else if(key==="Backspace"){
        backspace();
    }
    else if(key.toLowerCase()==="c"){
        clearvalue();
    }
})