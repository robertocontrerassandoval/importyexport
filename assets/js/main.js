



//valor del dolar
async function getMoney(){
    try{
        const res = await fetch("https://mindicador.cl/api/")
        const data = await res.json()
        console.log(data.dolar.valor)
    
        const dolar = data.dolar.valor
        console.log(dolar)
       
    return dolar
    
    } catch (e){
        total.innerHTML= "¡¡¡algo salio mal " + (e);
    }
}

const money1 = await getMoney()

console.log(money1)

//valor del euro
async function getMoney2(){
    try{
        const res = await fetch("https://mindicador.cl/api/")
        const data = await res.json()
        console.log(data.euro.valor)
    
        const euro = data.euro.valor
        console.log(euro)
       
    return euro
    
    } catch (e){
        total.innerHTML= "¡¡¡algo salio mal " + (e);
    }
}

const money2 = await getMoney2()

console.log(money2)


function convertir() {
    const seleccion = document.getElementById("select");
    const monedaSeleccionada = seleccion.value;
    const valorIngresadoUsuario = document.getElementById("input");
    const valorIngresado = valorIngresadoUsuario.value;
    const total = document.getElementById("total")

    console.log(valorIngresado)
    var resultado = 0;

    if(monedaSeleccionada === "uno") {
        resultado = valorIngresado / money1;
        total.innerHTML =resultado.toFixed(2);
      
    }
    else if(monedaSeleccionada === "dos") {
        resultado = valorIngresado / money2;
        total.innerHTML = resultado.toFixed(2);
    }
    else(
        alert("tienes que completar los datos ")
    )
}

cotizador.addEventListener("click", convertir)

//  prueba grafico no logrado me da un error
async function getAndCreateDataToChart() { 
    const res = await fetch("https://api.gael.cloud/general/public/sismos"); 
    const sismos = await res.json();
    const labels = sismos.map((sismo) => { 
        return sismo.Fecha;
    });
    const data = sismos.map((sismo) => {
    const magnitud = sismo.Magnitud.split(" ")[0]; 
    return Number(magnitud);
    });
    const datasets = [ {
          label: "Sismo",
          borderColor: "rgb(255, 99, 132)",
          data
    } ];
    return { labels, datasets }; }

    async function renderGrafica() {
        const data = await getAndCreateDataToChart(); 
        const config = {
            type: "line",
            data };
        const myChart = document.getElementById("myChart"); 
        myChart.style.backgroundColor = "white";



        //aqui me da un error
        //utilice el ejemplo de la guia y no resultö
        new Chart (myChart, config);
        }
        renderGrafica();






