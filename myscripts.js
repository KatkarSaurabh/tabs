let tabButtons = document.querySelectorAll(".tab")


for(let i=0;i<tabButtons.length;i++){
    tabButtons[i].addEventListener("click",()=>{
        for(let j=0;j<tabButtons.length;j++){
            let tabName = tabButtons[j].dataset.tab
            console.log(tabName)
            document.getElementById(tabName).style.display = "none"
            tabButtons[j].classList.remove("active")
        }
        
        
        tabButtons[i].classList.add("active")
        let tabName = tabButtons[i].dataset.tab
        document.getElementById(tabName).style.display = "block"
    })
}