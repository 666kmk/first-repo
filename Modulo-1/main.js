// Ejemplo ámbito de función
function testNombre(){
    var nombreTestFuncionVar = 'Juan'
    const nombreTestFuncionConst = 'Juanito'
    let nombreTestFuncionLet = 'Juanillo'
}

console.log(nombreTestFuncionVar) // nombreTestFuncionVar is not defined
console.log(nombreTestFuncionConst) // nombreTestFuncionConst is not defined
console.log(nombreTestFuncionLet) // nombreTestFuncionLet is not defined