const descargar = document.querySelector('.descargarPDF');

descargar.addEventListener('click', () => {
    imprimirPDF();
})

function cargarInfo(){
    const datos = JSON.parse(localStorage.getItem('datos'));
    console.log(datos)
    document.querySelector('.nombre').innerHTML += `${datos.nombre.toUpperCase()}`;
    document.querySelector('.puesto').innerHTML += `${capitalize(datos.puesto)}`;
    document.querySelector('.perfil').innerHTML += `${capitalize(datos.perfil)}`;
    document.querySelector('.dni').innerHTML += `${datos.dni}`;
    document.querySelector('.localidad').innerHTML += `${capitalize(datos.localidad)}`;
    document.querySelector('.nacionalidad').innerHTML += `${capitalize(datos.nacionalidad)}`;
    document.querySelector('.edad').innerHTML += `${datos.edad} años`;
    document.querySelector('.celular').innerHTML += `${datos.celular}`;

    if(datos.web !== "") {
        document.querySelector('.web').innerHTML += `<b>Web: </b> ${capitalize(datos.web)}`;
    } 
    if(datos.linkedin !== "") {
        document.querySelector('.linkedin').innerHTML += `<b>Likedin: </b> ${capitalize(datos.linkedin)}`;
    } 
    if(datos.github !== "") {
        document.querySelector('.github').innerHTML += `<b>Github: </b> ${capitalize(datos.github)}`;
    } 
    
    document.querySelector('.email').innerHTML += `${datos.email}`; 
    document.querySelector('.foto').src = `${datos.foto}`;

    for(let i=0; i<datos.experiencias.length; i++){
        document.querySelector('.experiencias').innerHTML += `<p class="mb-0"><b>+</b> ${capitalize(datos.experiencias[i].nombre)}</p>`;
    }
   
    for(let i=0; i<datos.habilidades.length; i++){
        document.querySelector('.habilidades').innerHTML += `<p class="mb-0"><b>+</b> ${capitalize(datos.habilidades[i].nombre)}</p>`;
    }

    for(let i=0; i<datos.formaciones.length; i++){
        document.querySelector('.formaciones').innerHTML += `<p class="mb-0"><b>+</b> ${capitalize(datos.formaciones[i].nombre)}</p>`;
    }
}

 function imprimirPDF(){
    const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
            .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

cargarInfo()


    
    
    
    
    






 