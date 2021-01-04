let identificador = (user, password) =>{
    switch(user){
        case "admin":
            password == 1234 ? console.log("Bienvenido a nuestro sitio.") : console.log("Contraseña incorrecta.")
            break;
        case undefined:
            console.log("Debe ingresar los datos requeridos.")
            break;
        default:
            console.log("Usuario y contraseña incorrectos.")
    }
}