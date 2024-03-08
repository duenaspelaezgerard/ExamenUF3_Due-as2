import { comandas } from "./comandas"

export const tablaPedido =  {
    template:  //html
    `
        <div  class="container mt-5 mb-5 p-5 border shadow-lg ">
            <div class="row">
                <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
                <h3>Pedidos</h3>
                <table id="tablaPedidos" class="table">
                    <thead>
                        <tr>
                            <th>Grupo</th>
                            <th>Mesa</th>
                            <th>Cerveza</th>
                            <th>Cantidad</th>
                            <th>Estado</th>
                        </tr>        
                    </thead>
                    <tbody id="filasCervezas"></tbody>
                </table>
            </div>
            
        </div>

    `,
    script : ()=>{

        document.querySelector('#tablaPedidos').addEventListener('click', (e) => {

            if(e.target.id == 'btnPendiente'){
              Pendiente(e)
            }

            if(e.target.id == 'btnEliminar'){
              Eliminar(e)
            }
    
        })

        function Eliminar(e) {

            const fila = e.target.closest('tr')
            let trNombreGrupo = fila.dataset.nombreGrupo

            const comandasFiltradas = comandas.filter(comanda => comanda.nombreGrupo !== trNombreGrupo)
            comandas.length = 0

            comandas.push(...comandasFiltradas)
            fila.remove()
           
        }


        function Pendiente(e) {

            const fila = e.target.closest('tr') //FILA TENGO EL TR DONDE HE CLICADO
            console.log(fila)
            fila.cells[4].textContent = "SERVIDO"
            
            
            // document.querySelector('#btnPendiente') = "Pedido Resuelto" 

        }
    }
} 
      
