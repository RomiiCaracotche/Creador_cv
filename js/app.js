
/*------------------- Variables -------------------*/
const agregarDatos = document.querySelector('.agregar-datos');
const agregarExperiencia = document.querySelector('.agregar-experiencia');
const agregarHabilidad = document.querySelector('.agregar-habilidad');
const agregarFormacion = document.querySelector('.agregar-formacion');

const listaExperiencias = document.querySelector('.lista-experiencias');
const listaHabilidades = document.querySelector('.lista-habilidades');
const listaFormaciones = document.querySelector('.lista-formaciones');

const nombre = (document.querySelector('.nombre')) || {};
const puesto = document.querySelector('.puesto') || "";
const dni = document.querySelector('.dni') || "";
const edad = document.querySelector('.edad') || {};
const localidad = document.querySelector('.localidad') || {};
const nacionalidad = document.querySelector('.nacionalidad') || {};
const perfil = document.querySelector('.perfil') || {};
const celular = document.querySelector('.celular') || {};
const email = document.querySelector('.email') || {};
const web = document.querySelector('.web') || {};
const linkedin = document.querySelector('.linkedin') || {};
const github = document.querySelector('.github') || {};
const formacion = document.querySelector('.formacion') || {};
const habilidad = document.querySelector('.habilidad') || {};
const experiencia = document.querySelector('.experiencia') || {};
const file = document.querySelector('#file') || {};
const fieldset = document.querySelector('#fieldset-foto') || {};


let idHab = 1;
let idExp = 1;
let idForm = 1;

let experiencias = [];
let habilidades = [];
let formaciones = [];

const info = {
    nombre: "",
    puesto: "",
    dni: "",
    edad: "",
    localidad: "",
    nacionalidad: "",
    perfil: "",
    celular: "",
    email: "",
    web: "",
    linkedin: "",
    github: "",
    experiencias: "",
    habilidades: "",
    foto: ""
}
const pattern = new RegExp('^[A-Z]+$', 'i');
const patternNumber = new RegExp('^[0-9]+$');
const patternEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
/*------------------- Eventos -------------------*/

document.addEventListener('DOMContentLoaded', () => {
    
    nombre.addEventListener('change', (e) => {
        e.preventDefault()
        if(nombre.value === "" || (!pattern.test(nombre.value))){
            nombre.classList.add("is-invalid");
        }
        else{
            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
        }
    })
    
    puesto.addEventListener('change', () => {
        if(puesto.value === ""){
            puesto.classList.add("is-invalid");
        }
        else{
            puesto.classList.remove("is-invalid");
            puesto.classList.add("is-valid");
        }
    })
    
    dni.addEventListener('change', () => {
        if(dni.value === "" || (!patternNumber.test(dni.value)) || dni.value.length < 6 || dni.value.length > 9){
            dni.classList.add("is-invalid");
        }
        else{
            dni.classList.remove("is-invalid");
            dni.classList.add("is-valid");
        }
    })
    
    edad.addEventListener('change', () => {
        if(edad.value === "" || (!patternNumber.test(edad.value)) || edad.value.length < 2){
            edad.classList.add("is-invalid");
        }
        else{
            edad.classList.remove("is-invalid");
            edad.classList.add("is-valid");
        }
    })
    
    localidad.addEventListener('change', () => {
        if(localidad.value === "" || (!pattern.test(nombre.value))){
            localidad.classList.add("is-invalid");
        }
        else{
            localidad.classList.remove("is-invalid");
            localidad.classList.add("is-valid");
        }
    })
    
    nacionalidad.addEventListener('change', () => {
        if(nacionalidad.value === "" || (!pattern.test(nombre.value))){
            nacionalidad.classList.add("is-invalid");
        }
        else{
            nacionalidad.classList.remove("is-invalid");
            nacionalidad.classList.add("is-valid");
        }
    })
    
    perfil.addEventListener('change', () => {
        if(perfil.value === ""){
            perfil.classList.add("is-invalid");
        }
        else{
            perfil.classList.remove("is-invalid");
            perfil.classList.add("is-valid");
        }
    })
    
    celular.addEventListener('change', () => {
        if(celular.value === "" || (!patternNumber.test(celular.value))){
            celular.classList.add("is-invalid");
        }
        else{
            celular.classList.remove("is-invalid");
            celular.classList.add("is-valid");
        }
    })
    
    email.addEventListener('change', () => {
        if((email.value === "") || (!patternEmail.test(email.value))){
            email.classList.add("is-invalid");
        }
        else{
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }
    })
    
    agregarExperiencia.addEventListener('click', () => {
        
        if(experiencia.value != ""){
            const exp = {
                id: idExp,
                nombre: experiencia.value
            }
    
            idExp++;
            experiencias.push(exp);
            
            item = document.createElement('li');
            item.classList.add("list-group-item", "d-flex", "justify-content-between");
            item.innerHTML = ` <p class="m-0 pt-1">${exp.nombre}</p><input type="button" value="x" onclick="borrarExperiencia(${exp.id})" class="btn btn-danger btn-sm"> `; 
            listaExperiencias.appendChild(item);
            document.querySelector('.experiencia').value = "";
    
            if(experiencias.length === 0){
                experiencia.classList.add("is-invalid");
            }
            else{
                experiencia.classList.remove("is-invalid");
                experiencia.classList.add("is-valid");
            }
        }
    
    })
    
    agregarHabilidad.addEventListener('click', () => {    
         
        if(habilidad.value != ""){
            const hab = {
                id: idHab,
                nombre: habilidad.value
            }
    
            idHab++;
            habilidades.push(hab);
            
            item = document.createElement('li');
            item.classList.add("list-group-item", "d-flex", "justify-content-between");
            item.innerHTML = `<p class="m-0 pt-1">${hab.nombre}</p><input type="button" value="x" onclick="borrarHabilidad(${hab.id})" class="btn btn-danger btn-sm">`; 
            listaHabilidades.appendChild(item);
            document.querySelector('.habilidad').value = "";
    
            if(habilidades.length === 0){
                habilidad.classList.add("is-invalid");
            }
            else{
                habilidad.classList.remove("is-invalid");
                habilidad.classList.add("is-valid");
            }
        }
    
    })
    
    agregarFormacion.addEventListener('click', () => {    
        
        if(formacion.value != ""){
            const form = {
                id: idForm,
                nombre: formacion.value
            }
    
            idForm++;
            formaciones.push(form);
            
            item = document.createElement('li');
            item.classList.add("list-group-item", "d-flex", "justify-content-between");
            item.innerHTML = `<p class="m-0 pt-1">${form.nombre}</p><input type="button" value="x" onclick="borrarFormacion(${form.id})" class="btn btn-danger btn-sm">`; 
            listaFormaciones.appendChild(item);
            document.querySelector('.formacion').value = "";
    
            if(formaciones.length === 0){
                formacion.classList.add("is-invalid");
            }
            else{
                formacion.classList.remove("is-invalid");
                formacion.classList.add("is-valid");
            }
        }
    
    })
    
    agregarDatos.addEventListener('click', (e) => { 
        e.preventDefault();
        
        if(validarCampos()){
            const datos = JSON.stringify(info);
            localStorage.setItem('datos', datos);
            window.location.href = "./template.html"; 
        }
        else{
        
            //alert("Debe completar todos los campos")
        }
    
    })
})

/*------------------- Funciones -------------------*/

function validarCampos() {

    if(nombre.value === ""){
        nombre.classList.add("is-invalid");
    }
    if(puesto.value === ""){
        puesto.classList.add("is-invalid");
    }
    if(dni.value === ""){
        dni.classList.add("is-invalid");
    }
    if(edad.value === ""){
        edad.classList.add("is-invalid");
    }
    if(localidad.value === ""){
        localidad.classList.add("is-invalid");
    }
    if(nacionalidad.value === ""){
        nacionalidad.classList.add("is-invalid");
    }
    if(perfil.value === ""){
        perfil.classList.add("is-invalid");
    }
    if(celular.value === ""){
        celular.classList.add("is-invalid");
    }
    if(email.value === ""){
        email.classList.add("is-invalid");
    }
    if(experiencias.length === 0){
        document.querySelector('#experiencia').classList.add("is-invalid");
    }
    if(habilidades.length === 0){
        document.querySelector('#habilidad').classList.add("is-invalid");
    }
    if(formaciones.length === 0){
        formacion.classList.add("is-invalid");
    }
    if(file.value === ""){
        fieldset.classList.add("border-danger");
    }
    //if(foto.src === undefined){
    //    fieldset.classList.add("border-danger");
    // }
    if ((nombre.value === "") || (puesto.value === "") || (dni.value === "") || (edad.value === "") || (localidad.value === "") || (nacionalidad.value === "") || (perfil.value === "") || (celular.value === "") ||(email.value === "") || (experiencias.length === 0) | (habilidades.length === 0) || (formaciones.length === 0) || (file.value === "")) {  
       return false;
    }
    
    info.nombre = nombre.value;
    info.puesto = puesto.value;
    info.dni = dni.value;
    info.edad = edad.value;
    info.localidad = localidad.value;
    info.nacionalidad = nacionalidad.value;
    info.perfil = perfil.value;
    info.celular = celular.value;
    info.email = email.value;
    info.web = web.value;
    info.linkedin = linkedin.value;
    info.github = github.value;
    info.foto = document.querySelector('#imagePreview').children[0].src; 
    info.experiencias = experiencias;
    info.habilidades = habilidades; 
    info.formaciones = formaciones
    return true;
}

function borrarExperiencia(id){
    experiencias = experiencias.filter(exp => exp.id != id)
    actualizarExperiencias();
    if(experiencias.length === 0){
        experiencia.classList.add("is-invalid");
    }
    else{
        experiencia.classList.remove("is-invalid");
        experiencia.classList.add("is-valid");
    }
}

function borrarHabilidad(id){
    habilidades = habilidades.filter(hab => hab.id != id)
    actualizarHabilidades();
    if(habilidades.length === 0){
        habilidad.classList.add("is-invalid");
    }
    else{
        habilidad.classList.remove("is-invalid");
        habilidad.classList.add("is-valid");
    }
}

function borrarFormacion(id){
    formaciones = formaciones.filter(form => form.id != id)
    actualizarFormaciones();
    if(formaciones.length === 0){
        formacion.classList.add("is-invalid");
    }
    else{
        formacion.classList.remove("is-invalid");
        formacion.classList.add("is-valid");
    }
}

function actualizarExperiencias(){
    listaExperiencias.innerHTML = "";
    experiencias.forEach(exp => { 
        item = document.createElement('li');
        item.classList.add("list-group-item", "d-flex", "justify-content-between");
        item.innerHTML = ` <p class="m-0 pt-1">${exp.nombre}</p> <input type="button" value="borrar" onclick="borrarExperiencia(${exp.id})" class="btn btn-danger btn-sm"> `; 
        listaExperiencias.appendChild(item);
    })
}

function actualizarHabilidades(){
    listaHabilidades.innerHTML = "";
    habilidades.forEach(hab => { 
        item = document.createElement('li');
        item.classList.add("list-group-item", "d-flex", "justify-content-between");
        item.innerHTML = ` <p class="m-0 pt-1">${hab.nombre}</p> <input type="button" value="borrar" onclick="borrarHabilidad(${hab.id})" class="btn btn-danger btn-sm"> `;    
        listaHabilidades.appendChild(item);
    })
}

function actualizarFormaciones(){
    listaFormaciones.innerHTML = "";
    formaciones.forEach(form => { 
        item = document.createElement('li');
        item.classList.add("list-group-item", "d-flex", "justify-content-between");
        item.innerHTML = ` <p class="m-0 pt-1">${form.nombre}</p> <input type="button" value="borrar" onclick="borrarFormacion(${form.id})" class="btn btn-danger btn-sm"> `;    
        listaFormaciones.appendChild(item);
    })
}

function validarExtension(){
    if(file.value === ""){
        fieldset.classList.add("border-danger");
         }
    else{
        fieldset.classList.remove("border-danger");
        fieldset.classList.add("border-success");
    }
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('La foto tiene que tener alguna de las siguientes extensiones: .jpeg/.jpg/.png/.gif');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'">';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}



    
    
    
    
    




