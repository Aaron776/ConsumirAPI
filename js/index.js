/* el metodo fecth de javascript permite consumir apis de terceros y lo hace mediante
las promesas (then.()), la plaabra async nos permite definir que una funcion sera asincrona
y la palabra await significa que vamos a esperar por algo
*/


const listaUsuarios=async()=>{
    let respuesta=await fetch("https://jsonplaceholder.typicode.com/users")
    let usuarios=await respuesta.json()

    let tablaUsuarios=``
    usuarios.forEach((x)=>{
        tablaUsuarios+=`<tr>
        <td>${x.id}</td>
        <td>${x.name}</td>
        <td>${x.username}</td>
        <td>${x.email}</td>
        <td>${x.phone}</td>
        </tr>`
    })

    document.getElementById("usuariosAPI").innerHTML=tablaUsuarios

}

listaUsuarios()