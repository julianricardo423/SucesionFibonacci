let mensaje = () =>
{
    let aux = 1;
    let numeroIngresado = Number.parseInt(document.getElementById('numero').value);
    let serie;
    let texto = '';
    let mostrarMensaje = document.getElementById('imprimirSerie');
    if(numeroIngresado === '' || numeroIngresado === null || isNaN(numeroIngresado))
    {
        mostrarMensaje.textContent = 'Por favor, ingrese un valor númerico en la caja de texto';
    }
    else
    {
        serie = new Array(numeroIngresado);
        for (let x = 0; x < numeroIngresado; x++) 
        {
            debugger;
            if(x === 0)
            {
                serie[x] = 0;
                texto = `${serie[x]}`;
            }
            else if(x === 1)
            {
                serie[x] = 1;
                texto += `, ${serie[x]}`;
            }
            else
            {
                aux = serie[x-1] + serie[x-2];
                texto += `, ${aux}`;
                serie[x] = aux;
            }
        }

        mostrarMensaje.textContent = texto;
    }
}