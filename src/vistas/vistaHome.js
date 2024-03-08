import { pedido } from '../componentes/pedidos.js';
import { tablaPedido } from '../componentes/tablaPedidos.js';

export const vistaHome =  {
    template:  //html
    `

        <div class="container" >
            <div class="mb-5" id="formularioPedido"></div>
            <div id="tablaPedido"></div>
        </div>

    `,
    script : ()=>{
        
        document.querySelector('#formularioPedido').innerHTML= pedido.template
        pedido.script()

        document.querySelector('#tablaPedido').innerHTML= tablaPedido.template
        tablaPedido.script()


    }
}