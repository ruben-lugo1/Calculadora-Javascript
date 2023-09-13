// Esta funcion agrega el valor en pantalla del boton que toquemos
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}
// Esta funcion borra la pantalla
function borrar() {
    document.getElementById('pantalla').value = ''
}
// Esta funcion toma los valores y hace los calculos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
