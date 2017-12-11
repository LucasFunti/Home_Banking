//Declaración de variables
var nombreUsuario = "Lucas";
var saldoCuenta = 10000;
var limiteExtraccion = 500;
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoCuenta = 1234;

//Variables para el deposito de cheques
var cheque1 = 9876;
var montoCheque1 = 9000;
var cheque2 = 6789;
var montoCheque2 = 6000;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//funciones mias
function sumarDinero(cantidad){
  saldoCuenta += cantidad;
  actualizarSaldoEnPantalla();
}
function restarDinero(cantidad){
  saldoCuenta -= cantidad;
  actualizarSaldoEnPantalla();
}
function haySaldoDisponible(cantidad){
  return cantidad <= saldoCuenta;
}
function dentroDelLimite(cantidad){
  return cantidad <= limiteExtraccion;
}
function extraccionConBilletesDeCien(cantidad){
  return cantidad % 100 == 0;
}
function stringVacio(string){
  return string == null || string == "";
}

function ejecutarExtraccion(cantidadAExtraer,saldoAnterior){
  if(haySaldoDisponible(cantidadAExtraer)){
    if(dentroDelLimite(cantidadAExtraer)){
      if(extraccionConBilletesDeCien(cantidadAExtraer)){
        restarDinero(cantidadAExtraer);
        alert("Has retirado: " + cantidadAExtraer + "\n" +
              "Saldo anterior: " + saldoAnterior + "\n" +
              "Saldo actual: " + saldoCuenta);
      }else{
        //no hay billetes suficientes
        alert("Solo puedes extraer billetes de 100");
      }
    }else{
      //supera su limite de extraccion
      alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción");
    }
  }else{
    //error no puede extraer - saldo insuficiente
    alert("Noservicio saldo disponible en tu cuenta para extraer esa cant dinero");
  }
}

function ejecutarPago(servicio,saldoAnterior){
  switch (servicio) {
    case 1://Agua
      if(haySaldoDisponible(precioAgua)){
        restarDinero(precioAgua);
        alert("Has pagado el servicio de agua\n" +
              "Saldo anterior: " + saldoAnterior + "\n" +
              "Dinero descontado: "+ precioAgua + "\n" +
              "Saldo actual: " + saldoCuenta);
      }else{
        alert("No tiene el saldo necesario para pagar el servicio");
      }
      break;
    case 2://Luz
      if(haySaldoDisponible(precioLuz)){
        restarDinero(precioLuz);
        alert("Has pagado el servicio de agua\n" +
              "Saldo anterior: " + saldoAnterior + "\n" +
              "Dinero descontado: "+ precioLuz + "\n" +
              "Saldo actual: " + saldoCuenta);
      }else{
        alert("No tiene el saldo necesario para pagar el servicio");
      }
      break;
    case 3://Internet
      if(haySaldoDisponible(precioInternet)){
        restarDinero(precioInternet);
        alert("Has pagado el servicio de agua\n" +
              "Saldo anterior: " + saldoAnterior + "\n" +
              "Dinero descontado: "+ precioInternet + "\n" +
              "Saldo actual: " + saldoCuenta);
      }else{
        alert("No tiene el saldo necesario para pagar el servicio");
      }
      break;
    case 4://Telefono
      if(haySaldoDisponible(precioTelefono)){
        restarDinero(precioTelefono);
        alert("Has pagado el servicio de agua\n" +
              "Saldo anterior: " + saldoAnterior + "\n" +
              "Dinero descontado: "+ precioTelefono + "\n" +
              "Saldo actual: " + saldoCuenta);
      }else{
        alert("No tiene el saldo necesario para pagar el servicio");
      }
      break;
    default:
      alert("No existe el servicio solicitado");
  }
}

function ejecutarTransferencia(stringCuenta,montoATransferir){
  switch (parseInt(stringCuenta)) {
    case cuentaAmiga1:
      restarDinero(montoATransferir);
      alert("Se han transferido: "+montoATransferir+"\nCuenta Destino: "+cuentaAmiga1);
      break;
    case cuentaAmiga2:
      restarDinero(montoATransferir);
      alert("Se han transferido: "+montoATransferir+"\nCuenta Destino: "+cuentaAmiga2);
      break;
    default:
      alert("Solo puede transferir dinero a una cuenta amiga.");
  }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var stringNuevoLimite = prompt("Ingrese el nuevo límite de extracción: ");
  if(stringVacio(stringNuevoLimite)){
    //tengo un string vacio no hago nada-
  }else{
    var nuevoLimite = parseInt(stringNuevoLimite);
    if(!isNaN(nuevoLimite)){
      limiteExtraccion = nuevoLimite;
      alert("Su nuevo límite de extracción es: " + limiteExtraccion );
      actualizarLimiteEnPantalla();
    }else{
      alert("Debe ingresar datos numéricos");
    }
  }
}

function extraerDinero() {
  var stringCantidadAExtraer = prompt("Ingrese la cantidad de dinero a extraer: ");
  if(stringVacio(stringCantidadAExtraer)){
    //tengo un string vacio no hago nada-
  }else{
    var cantidadAExtraer = parseInt(stringCantidadAExtraer);
    if(!isNaN(cantidadAExtraer)){
      var saldoAnterior = saldoCuenta;
      ejecutarExtraccion(cantidadAExtraer,saldoAnterior);
    }else{
      alert("Debe ingresar datos numéricos");
    }
  }
}

function depositarDinero() {
  var stringDineroAdepositar = prompt("Ingrese la cantidad de dinero a depositar: ");
  if(stringVacio(stringDineroAdepositar)){
    //tengo un string vacio no hago nada-
  }else{
    var dineroAdepositar = parseInt(stringDineroAdepositar);
    if(!isNaN(dineroAdepositar)){
      var saldoAnterior = saldoCuenta;
      sumarDinero(dineroAdepositar);
      alert("Has depositado: "+dineroAdepositar + "\n" +
            "Saldo anterior: " + saldoAnterior + "\n" +
            "Saldo actual: " + saldoCuenta);
    }else{
      alert("Debe ingresar datos numéricos");
    }
  }
}

function pagarServicio() {
  var stringServicio = prompt("Ingrese el número que corresponda con el servicio que queres pagar:\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono");
  if(stringVacio(stringServicio)){
    //tengo un string vacio no hago nada-
  }else{
    var servicio = parseInt(stringServicio);
    var saldoAnterior = saldoCuenta;
    ejecutarPago(servicio,saldoAnterior);
  }
}

function transferirDinero() {
  var stringMontoTransferencia = prompt("Ingrese el monto a transferir:");
  if(stringVacio(stringMontoTransferencia)){
    //tengo un string vacio no hago nada-
  }else{
    var montoATransferir = parseInt(stringMontoTransferencia);
    if(!isNaN(montoATransferir)){
      if(haySaldoDisponible(montoATransferir)){
        var stringCuenta = prompt("Ingrese la cuenta a transferir:");
        ejecutarTransferencia(stringCuenta,montoATransferir);
      }else {
        alert("No hay saldo suficiente para realizar la transferencia");
      }
    }else{
      alert("Debe ingresar datos numéricos");
    }
  }
}

function iniciarSesion() {
  var stringCodigo = prompt("Ingrese su código para ingresar a la aplicación: ");
  if(stringCodigo == codigoCuenta){
    alert("Bienvenido/a "+ nombreUsuario+ " ya puedes puedes comenzar a utilizar la aplicación.");
  }else{
    saldoCuenta = 0;
    alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
  }
}

function depositarCheque(){
    var stringCheque = prompt("Ingrese el numero de cheque a depositar");
    if(stringVacio(stringCheque)){
      //tengo un string vacio no hago nada-
    }else{
        ejecutarDepositoCheque(stringCheque);
    }
}

function ejecutarDepositoCheque(stringCheque){
    switch (parseInt(stringCheque)) {
      case cheque1:
        sumarDinero(montoCheque1);
        alert("Deposito el cheque: " + cheque1 +" con un monto de: " + montoCheque1);
        break;
      case cheque2:
        sumarDinero(montoCheque2);
        alert("Deposito el cheque: " + cheque2 +" con un monto de: " + montoCheque2);
        break;
      default:
        alert("No existe el cheque ingresado");
    }
}
//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
