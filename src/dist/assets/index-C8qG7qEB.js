(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const z={template:`
        <p class="bg-dark text-white text-center">Alumno: GERARD DUEÑAS</p>
    `,script:()=>{}},m=[{id:3,nombre:"Mahou Cinco Estrellas",tipo:"Lager",origen:"Madrid",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://escerveza.com/cdn/shop/products/collection-title-escerveza-3-21391452438628.jpg?v=1697406250"},{id:22,nombre:"Estrella Galicia",tipo:"Lager",origen:"Galicia",descripcion:"Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.",imagen:"https://escerveza.com/cdn/shop/products/collection-title-escerveza-3-21391431630948.jpg?v=1697406760"},{id:33,nombre:"Alhambra Reserva 1925",tipo:"Lager",origen:"Granada",descripcion:"Cerveza rubia con un sabor ligeramente dulce y toques de caramelo.",imagen:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg"},{id:34,nombre:"San Miguel Especial",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png"},{id:35,nombre:"Damm Estrella",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png"}];let s=[];const g={template:`
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
`,script(){const c=document.querySelector("#cerveza"),i=document.querySelector("#cervezaNombre"),a=document.querySelector("#cervezaDescripcion"),n=document.querySelector("#fotoImagen");let e=null;m.forEach(r=>{const o=document.createElement("option");o.text=r.nombre,o.value=r.id,c.appendChild(o)}),c.addEventListener("change",t);function t(){const r=parseInt(c.value);e=m.find(o=>o.id===r),e&&(i.textContent=e.nombre,a.textContent=e.descripcion,n.src=e.imagen)}document.querySelector("#btnAñadir").addEventListener("click",r=>{r.preventDefault();const o=document.getElementById("formCerveza");if(!o.checkValidity()){o.classList.add("was-validated");return}const u=document.querySelector("#cerveza").options[document.querySelector("#cerveza").selectedIndex].text,p=parseInt(document.querySelector("#cantidad").value),v=document.querySelector("#nombreGrupo").value,l=parseInt(document.querySelector("#numeroMesa").value),y=parseInt(document.querySelector("#cerveza").value);let b="PENDIENTE";if(m.find(d=>d.id===y)){const d=document.createElement("tr");d.dataset.comandaid=l,s.push({numeroMesa:l,nombreGrupo:v,nombre:u,cantidad:p,estado:b}),d.classList.add("cerveza"),d.innerHTML=`
                    <td>${v}</td>
                    <td>${l}</td>
                    <td>${u}</td>
                    <td>${p}</td>
                    <td>${b}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <button id="btnPendiente" id="btnPendiente" class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
                            <button id="btnEliminar" id="btnEliminar" class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
                        </div>
                                
                    </td>

                `,document.querySelector("#filasCervezas").appendChild(d),document.getElementById("cerveza").value="",document.getElementById("numeroMesa").value="",document.getElementById("nombreGrupo").value="",document.getElementById("cantidad").value=""}})}},f={template:`
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

    `,script:()=>{document.querySelector("#tablaPedidos").addEventListener("click",a=>{a.target.id=="btnPendiente"&&i(a),a.target.id=="btnEliminar"&&c(a)});function c(a){const n=a.target.closest("tr");let e=n.dataset.nombreGrupo;const t=s.filter(r=>r.nombreGrupo!==e);s.length=0,s.push(...t),n.remove()}function i(a){const n=a.target.closest("tr");console.log(n),n.cells[4].textContent="SERVIDO";const e=a.target;e.classList.remove("btn-outline-warning"),e.classList.add("btn-outline-success"),e.innerHTML="Pedido servido"}}},h={template:`

        <div class="container" >
            <div class="mb-5" id="formularioPedido"></div>
            <div id="tablaPedido"></div>
        </div>

    `,script:()=>{document.querySelector("#formularioPedido").innerHTML=g.template,g.script(),document.querySelector("#tablaPedido").innerHTML=f.template,f.script()}};document.querySelector("header").innerHTML=z.template;document.querySelector("main").innerHTML=h.template;h.script();
