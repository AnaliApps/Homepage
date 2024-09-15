import './styles.css'
import headerContent from './views/header'
import mainContent from './views/main'
import createFooter from './views/footer'
document.body.appendChild(headerContent())
document.body.appendChild(mainContent())
document.body.appendChild(createFooter())
