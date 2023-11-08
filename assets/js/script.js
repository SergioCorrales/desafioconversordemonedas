document.addEventListener("DOMContentLoaded", () => {
    iniciarApp();
})


function iniciarApp(){

    //capturar elementos html
    const conversorForm = document.querySelector('#conversor-form');

    conversorForm.addEventListener('submit', async (e)=> {
        e.preventDefault();

        const montoCLP = document.querySelector('#montoCLP').value;
        const monedaSeleccionada = document.querySelector('#monedaSeleccionada').value;

        //llamar a api
        const data = await getMonedas(monedaSeleccionada);

        //mostrar resultados
        mostrarResultado(montoCLP, data.serie[0].valor)
    })    


}


async function getMonedas(moneda){

    let data = {};
    try{
        const res = await fetch("https://mindicador.cl/api/" + moneda)
        data = await res.json()
    }catch(err){
        console.log(err);
    }

    return data;

}

function mostrarResultado(montoCLP, valorMoneda){

    const resultado = document.querySelector('#resultado p')
    resultado.textContent = montoCLP / valorMoneda;

}


