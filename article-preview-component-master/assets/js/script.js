const btnDeskSize = document.getElementsByClassName('btn')[0]
const toggleShare = document.querySelector('.toggle-share')
const screenSize = window.innerWidth

let displayToggle = false

btnDeskSize.addEventListener('click',function (){
    displayToggle === false ? displayToggle = true : displayToggle = false
    console.log(screenSize)
    if(screenSize > 600){
        if(displayToggle){
            toggleShare.style.display = 'flex';
        }else{
            toggleShare.style.display = 'none';
        }
        
    }else{
        document.location.reload();
        toggleShare.style.display = 'none';
    }
   
})
