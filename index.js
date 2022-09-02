var j=0;
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        var div=document.createElement("div");
        div.innerHTML=i*8+j;
        if((i+j)%2==0){
            div.classList.add("black");
        }else{
            div.classList.add("white");
        }
        document.body.appendChild(div);
    }
}