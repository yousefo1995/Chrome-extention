let linksAr=[]
const inputEl=document.getElementById('input-el')
const btnEl=document.getElementById('btn-el')
let listEl=document.getElementById('ul-el')
const deleteEl=document.getElementById('delete-el')
const saveTabEl=document.getElementById('save-tab-el')


// localstorage
const storageLinks=JSON.parse(localStorage.getItem("linksAr"))
if(storageLinks){
    linksAr=storageLinks
    showUl(linksAr)
}

// save tab function
saveTabEl.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        linksAr.push(tabs[0].url)
        localStorage.setItem("linkAr", JSON.stringify(linksAr) )
        
    });
    showUl(linksAr)
})



// list function
function showUl(ar){
    let listContant=""
    for(let i=0 ; i<ar.length ;i++){
       listContant +=`
       <li>
       <a target="_blank" href='${ar[i]}'> ${ar[i]} </a>
       </li>
       `
    }
    listEl.innerHTML=listContant

}

// delete function
deleteEl.addEventListener("dblclick",function(){
    localStorage.clear();
    linksAr=[]
    showUl(linksAr);
})


// save function
btnEl.addEventListener("click", function() {
    linksAr.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("linksAr",JSON.stringify(linksAr))
    showUl(linksAr)
})


 



