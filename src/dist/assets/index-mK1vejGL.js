(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const S={template:`
    <p>GERARD DUEÑAS PELÁEZ</p>
    `,script:()=>{}},b=[{id:1,nombre:"Mahou Cinco Estrellas",tipo:"Lager",origen:"Madrid",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.mahou.es/wp-content/themes/mahou_v2/template-contents/mahou-familia/dist/images/Botella_Mahou_5_Estrellas.png",precio:1},{id:2,nombre:"Estrella Galicia",tipo:"Lager",origen:"Galicia",descripcion:"Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.",imagen:"https://www.bodecall.com/images/stories/virtuemart/product/cerveza-estrella-galicia-botella.png",precio:2},{id:3,nombre:"Alhambra Reserva 1925",tipo:"Lager",origen:"Granada",descripcion:"Cerveza rubia con un sabor ligeramente dulce y toques de caramelo.",imagen:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg",precio:3},{id:4,nombre:"San Miguel Especial",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png",precio:4},{id:5,nombre:"Damm Estrella",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png",precio:5}];let n=[];const h={template:`
        <div  class="row">
            <div id="form" class="col-md-6 mb-5">
                <h2 class="mb-5">Ingresa los datos:</h2>
                <form id="formCerveza">
                    <div class="mb-3">
                        <label for="nombreGrupo">Nombre del Grupo:</label>
                        <input type="text" id="nombreGrupo" name="nombreGrupo" class="form-control" required minlength="4" maxlength="10">
                    </div>
                    <div class="mb-3">
                        <label for="mesa">Número de Mesa:</label>
                        <input type="number" id="mesa" name="mesa" class="form-control" required min="1" max="15">
                        <div class="invalid-feedback">El número de mesa debe estar entre 1 y 15.</div>
                    </div>
                    <div class="mb-3">
                        <label for="cerveza">Selecciona una cerveza:</label>
                        <select id="cerveza" name="cerveza">
                            <option value="">Selecciona una opción</option>

                        </select>
                        <div class="invalid-feedback">Selecciona una cerveza.</div>
                    </div>
                    <div class="mb-3">
                        <label for="cantidad">Cantidad de cervezas consumidas:</label>
                        <input type="number" id="cantidad" name="cantidad" class="form-control" required min="1">
                        <div class="invalid-feedback">La cantidad de cervezas debe ser mayor que 0.</div>
                    </div>
                    <button class="btn btn-success" type="button" id="btnAñadir">Añadir Pedido</button>
                </form>
            </div>

            <div id="card" class="col-md-6">
            
                <h2 class="mb-3" id="cardNombre">Nombre:</h2>
                <p class="mb-3" ><strong>Tipo:</strong> <span id="cardTipo"></span></p>
                <p class="mb-3" ><strong>Origen:</strong> <span id="cardOrigen"></span></p>
                <p class="mb-3" ><strong>Precio:</strong> <span id="cardPrecio"></span></p>
                <p class="mb-3" ><strong>Descripción:</strong> <span id="cardDescripcion"></span></p>
                <div style="width: 200px; height: 200px; display: flex; justify-content: center; align-items: center; border: 1px solid black; box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);">
                    <img id="cardImagen" src="" alt="Imagen de la cerveza" style="max-width: 90%; max-height: 90%;">
                </div>

            </div>
        </div>
    `,script(){const r=document.querySelector("#cerveza"),i=document.querySelector("#cardNombre"),a=document.querySelector("#cardDescripcion"),o=document.querySelector("#cardTipo"),e=document.querySelector("#cardOrigen"),t=document.querySelector("#cardPrecio"),c=document.querySelector("#cardImagen");let d=null;b.forEach(l=>{const s=document.createElement("option");s.text=l.nombre,s.value=l.id,r.appendChild(s)});function z(){const l=parseInt(r.value);d=b.find(s=>s.id===l),d&&(i.textContent=d.nombre,a.textContent=d.descripcion,o.textContent=d.tipo,e.textContent=d.origen,t.textContent=d.precio,c.src=d.imagen)}r.addEventListener("change",z);let v=1;document.querySelector("#btnAñadir").addEventListener("click",l=>{l.preventDefault();const s=r.options[r.selectedIndex].text,p=parseInt(document.querySelector("#cantidad").value),x=parseInt(r.value),f=b.find(m=>m.id===x);if(f){const m=p*f.precio;n.push({id:v++,nombre:s,cantidad:p,precioTotal:m});const u=document.createElement("tr");u.dataset.comandaid=v-1,u.classList.add("cerveza"),u.innerHTML=`
                    <td>${s}</td>
                    <td>${p}</td>
                    <td>${m}€</td>
                    <td>
                        <button id="btnEliminar" class="btn btn-danger text-light btnEliminar" type="button">Eliminar</button>
                    </td>
                    <td>
                        <button id="btnEdit" class="btn btn-warning text-light btnEditar" type="button">Editar</button>
                    </td>

                `,document.querySelector("#filasCervezas").appendChild(u),g()}})}};function g(){let r=0;n.forEach(i=>{r+=i.precioTotal}),document.querySelector("#totalPrecio").textContent=r+"€"}const y={template:`
        <table id="tablaPedidos" class="container table table-bordered">
            <thead>
                <tr>
                    <th>Cerveza</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="filasCervezas">

            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2">Total:</td>
                    <td id="totalPrecio">0</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
            
        </table>

    `,script:()=>{document.querySelector("#tablaPedidos").addEventListener("click",a=>{console.log("Hola desde TablaPedidos"),a.target.id=="btnEdit"&&(console.log("editar",a.target.id),i(a)),a.target.id=="btnEliminar"&&(console.log("borrar",a.target.id),r(a))});function r(a){const o=a.target.closest("tr"),e=parseInt(o.dataset.comandaid),t=n.filter(c=>c.id!==e);n.length=0,n.push(...t),console.log(n),o.remove(),g()}function i(a){const o=a.target.closest("tr"),e=parseInt(o.dataset.comandaid),t=n.filter(c=>c.id!==e);n.length=0,n.push(...t),console.log(n),o.remove(),g()}}},E={template:`

        <div class="container" >
            <h2 class="text-center mb-5">Birras y Tapas</h2>
            <div class="mb-5" id="formularioPedido"></div>
            <div id="tablaPedido"></div>
            <button id="btnEnviar" class="btn btn-primary text-light">ENVIAR</button>
        </div>

    `,script:()=>{document.querySelector("#formularioPedido").innerHTML=h.template,h.script(),document.querySelector("#tablaPedido").innerHTML=y.template,y.script()}};document.querySelector("header").innerHTML=S.template;document.querySelector("main").innerHTML=E.template;E.script();
