let btn=document.getElementById("btn");
let nam=document.getElementById("nam");
let msg=document.getElementById("msg");
let ok=document.getElementById("ok");
if (localStorage.go!=null){
    table=JSON.parse(localStorage.go);
}
else{
    table=[];
}
showrec();
function addRecommendation(){
    let mes={
        name:nam.value,
        message:msg.value,
    }
    table.push(mes);

    
    localStorage.setItem('go',JSON.stringify(table));
    
    showrec();
    clean();
    showPopup(true);
}
function showrec(){
    let r='';
    for(let i=0;i< table.length;i++){
        r+=`
            <div class="rec1">
             <h5>${table[i].name}</h5>
                <p>${table[i].message}
                </p>
            </div>
       
        `
    }
    document.getElementById('rec').innerHTML=r;

    
}
function clean(){
    nam.value='';
    msg.value='';
}
function showPopup(){
    let popup=document.getElementById("popup");
    
    popup.style.display="block";
   
        
}
function closepopup(){
    popup.style.display="none";
    }  
