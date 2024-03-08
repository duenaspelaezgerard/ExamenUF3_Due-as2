import { bd } from "./bd";
import { comandas } from "./comandas"

export const pedido =  {
    template:  //html
    `
        <div class="container mt-3 p-5 border shadow-lg ">
            <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
                <form id="formCerveza" class="row ">
                        <div class="col-6">
                            <h3>Grupo</h3>
                            <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
                            <input id="nombreGrupo" type="text" id="nombreGrupo" name="nombreGrupo" class="form-control mt-2" placeholder ="Tu nombre aqui" required minlength="4" maxlength="10">
                            <label for="numeroMesa" class="label-control">Mesa numero</label>
                            <input id="numeroMesa" type="number" required min="1" required max="15" class="form-control mt-2" placeholder ="0">
                            <div class="invalid-feedback">El número de mesa debe estar entre 1 y 15.</div>
                        
                            <h3 class="mt-5">Haz tu pedido</h3>
                            <div class="d-flex gap-3 ">
                                <select id="cerveza" name="cerveza" required>
                                    <option value="">Selecciona una opción</option>
                                </select>
                                <div class="invalid-feedback">Selecciona una cerveza.</div>
                                <input id="cantidad" type="number" value="0" class="form-control" required min="1">
                                <div class="invalid-feedback">La cantidad de cervezas debe ser mayor que 0.</div>
                            </div>
                            <button id="btnAñadir" class=" btn btn-success mt-4 w-100">¡Enviar pedido!</button>
                        </div>
                        
                        <div class="col-6 border ">
                            <div class="p-3 d-flex">
                                    <div style="width: 200px; height: 200px; display: flex; justify-content: center; align-items: center;">
                                        <img id="fotoImagen" src="" alt="Imagen de la cerveza" style="max-width: 100%; max-height: 100%;">
                                    </div>
                                    <div>
                                        <h4 id="cervezaNombre" class=""></h4>
                                        <p id="cervezaDescripcion"></p>
                                    </div>
                                </div>
                            </div>
                        </div>       
                </form>       
        </div>
`,   

    script() {

        const cervezaSelect = document.querySelector('#cerveza')
        const cervezaNombre = document.querySelector('#cervezaNombre')
        const cervezaDescripcion = document.querySelector('#cervezaDescripcion')
        const fotoImagen = document.querySelector('#fotoImagen')

        let comandaSeleccionada = null    

        bd.forEach(cerveza => {

            const option = document.createElement('option')
            option.text = cerveza.nombre
            option.value = cerveza.id
            cervezaSelect.appendChild(option)

        })

        cervezaSelect.addEventListener('change', pintarTarjeta)

        function pintarTarjeta() {

            const cervezaId = parseInt(cervezaSelect.value)
            comandaSeleccionada = bd.find(cerveza => cerveza.id === cervezaId)

            if (comandaSeleccionada) { 
                cervezaNombre.textContent = comandaSeleccionada.nombre
                cervezaDescripcion.textContent = comandaSeleccionada.descripcion
                fotoImagen.src = comandaSeleccionada.imagen
            }
        }

        document.querySelector('#btnAñadir').addEventListener('click', (event) => {

            event.preventDefault()
            const form = document.getElementById('formCerveza')

            if (!form.checkValidity()) {
                form.classList.add('was-validated')
                return
            }

            
            const nombreCerveza = document.querySelector('#cerveza').options[document.querySelector('#cerveza').selectedIndex].text
            const cantidad = parseInt(document.querySelector('#cantidad').value)
            const nombreGrupo = document.querySelector('#nombreGrupo').value
            const numeroMesa = parseInt(document.querySelector('#numeroMesa').value)
            const cervezaId = parseInt(document.querySelector('#cerveza').value)
            let estado = "PENDIENTE"

            const comandaSeleccionada = bd.find(cerveza => cerveza.id === cervezaId)
            
            if (comandaSeleccionada) {
                
                const nuevaFila = document.createElement('tr')
                nuevaFila.dataset.comandaid = numeroMesa

                comandas.push({
                    numeroMesa: numeroMesa,
                    nombreGrupo: nombreGrupo,
                    nombre: nombreCerveza,
                    cantidad: cantidad,
                    estado: estado
                })

                nuevaFila.classList.add('cerveza')

                nuevaFila.innerHTML = 
                `
                    <td>${nombreGrupo}</td>
                    <td>${numeroMesa}</td>
                    <td>${nombreCerveza}</td>
                    <td>${cantidad}</td>
                    <td>${estado}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <button id="btnPendiente" id="btnPendiente" class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                            <button id="btnEliminar" id="btnEliminar" class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                        </div>
                                
                    </td>

                `

                document.querySelector('#filasCervezas').appendChild(nuevaFila)
                
                document.getElementById('cerveza').value = ''
                document.getElementById('numeroMesa').value = ''
                document.getElementById('nombreGrupo').value = ''
                document.getElementById('cantidad').value = ''
                
            }
        })
        
    }
}

