import { header } from "./componentes/header.js"
import { vistaHome } from "./vistas/vistaHome.js"
import "./scss/index.scss" 


document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = vistaHome.template
vistaHome.script()