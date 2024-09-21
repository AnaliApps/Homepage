import './styles.css'
import headerContent from './views/header'
import mainContent from './views/main'
import createFooter from './views/footer'
document.body.appendChild(headerContent())
document.body.appendChild(mainContent())
document.body.appendChild(createFooter())

const imgDiv = document.querySelectorAll(".blur_load")
let load = 0;
let loadInt = setInterval(blurring,30)

function blurring(){
    load++
    if(load > 99){
        clearInterval(loadInt)
    }
    imgDiv.forEach(item => { 
        item.style.filter = `blur(${load,0,100,30,0}px)`
    })
    
}