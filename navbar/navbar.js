const ITEMS =[
    
"BRAND",
"Link1",
"Link2",
"Link3",
"Link4",
"Link5",
"Link6",
"Link7",
"Link8",
]


const TOTAL=9
const BTN_WIDTH=50
let eWidth=0
let dropOpen=true




function adapt(){
    for (let n=TOTAL; n>=1; n--){
        estimateWidth(n)
        if(eWidth<=innerWidth){
            showItems(n)
            showRemainingItems(n)
            break  
        }
    }           
}




function estimateWidth(n){
    let text=``
    let pad=0
    for(let i=0; i<n; i++){
        text+=ITEMS[i]
        pad+=2*10 //left right padding
    }
    eWidth=12*text.length+pad+BTN_WIDTH //charachter width
}




function showItems(n){
    console.log(">>>",n) 
    navbar.innerHTML=``
    for (let i=0; i<n && n<=ITEMS.length; i++){
        navbar.innerHTML+=`<a href="">${ITEMS[i]}</a>` 
    } 
    
    let remaining =TOTAL-n
    if (remaining>0){
        navbar.innerHTML+=
        `
        <button class="burgerButton" onclick=showRemainingItems(${n})>
        <span>${remaining}</span>
        <i class="fas fa-bars"></i>
        </button>        
        ` 
    }       
}





function showRemainingItems(n){
    if (dropOpen==false){
        console.log(dropOpen)
        navbarDrop.innerHTML=``
        for(let i=n; i<TOTAL; i++){
            navbarDrop.innerHTML+=`<a class="secondMenu" href="">${ITEMS[i]}</a>`
        }
        dropOpen=true
    }else if (dropOpen==true){
        navbarDrop.innerHTML=``
        
        console.log(dropOpen)
        dropOpen=false
    
    }


    // console.log("rem", remaining) 
    // console.log("links:",ITEMS[n])       
    console.log(dropOpen) 

}
   
 



    
    
