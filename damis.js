let emociones = '❤' + 'holaa'
alert(emociones)

let nombreEstudiante = prompt('Ingresa tu nombre')
let appelidoEstudiante = prompt('Ingresa tu apellido')
alert(' Bienvenido ' + nombreEstudiante + ' ' + apellidoEstudiante)

function saludar(nombre, apellido)
{
    let saludo = 'Bienvenido' + nombre + ' ' + apellido
    return saludo
}
alert(saludar('Dami', 'Villegas'))

function operación(x)
{
    let resultadooperación = x * x * x + x + 13
    return resultadooperación
}
alert(resultadooperación(25))
/*en la página ponemos F12 (consola), y ponemos "operación(cualquier numero)"*/.



/*Temaaa Nuevoo = CONDICIONALES*/

let nota = 0
if (nota >= 6)
{
    alert('Felicidades, aprobaste!😁')
}
else{
    alert('Desaprobaste, seguí estudiando😢')
}


function comprobarNota(notaExamen)
{
    let estado 
    if (notaExamen >=6)
    {
        estado = 'Felicidades, aprobaste!😁'
    }
    else{
        estado = 'Desaprobaste, seguí estudiando😢'
    }
}