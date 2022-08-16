const formulario = document.querySelector("#formulario")
const lista = document.querySelector("#lista-tweets")
let tweets = []



listadeEventos()

function listadeEventos(){
formulario.addEventListener("submit",agregarTweet)

document.addEventListener("DOMContentLoaded", ()=>{
   tweets = JSON.parse(localStorage.getItem("tweets"))

  crearHTML()
})




   











}


function agregarTweet(e){
 e.preventDefault()
   


 const tweet = document.querySelector("#tweet").value;

 const errorPrevio = document.querySelector(".error");
 if(errorPrevio){
     return}

 if(tweet === ""){

    

    mostrarError("Un mensaje no se  puede ir vacio")
    return;
    



 }

 const ObjTweet = {

    id:Date.now(),
    tweet
 }

 tweets = [...tweets,ObjTweet]
 


  crearHTML()

  formulario.reset()
  

}

function  mostrarError(error){

    const  mensajeError = document.createElement("p")
    mensajeError.innerHTML = error
    mensajeError.classList.add("error")

    const contenido = document.querySelector("#contenido")
    contenido.appendChild(mensajeError)

 setTimeout(() => {
    
    mensajeError.remove()
 }, 3000);

   

}

function crearHTML(){

   limpiarHTML()

   



    if(tweets.length > 0){

        tweets.forEach(tweet => {

         // Creando los bontones para eliminar

            const eliminar = document.createElement("a")
            eliminar.innerHTML = "X"
            eliminar.classList.add("borrar-tweet")
            eliminar.onclick = ()=>{
               borrarTweet(tweet.id)
            }



            lista.appendChild(eliminar)



// Creando html de los tweets


            const li = document.createElement("li")
         
         
         li.innerHTML = tweet.tweet

         lista.appendChild(li)
         
        
            
        });
        
        }

        sincronizarAlocal()

      }

    function sincronizarAlocal(){
      localStorage.setItem("tweets",JSON.stringify(tweets));

    }
function limpiarHTML(){
      while(lista.firstChild){
         lista.removeChild(lista.firstChild)
         
      }
    }
    function borrarTweet(id){

      tweets = tweets.filter(tweet => tweet.id !== id)

      crearHTML()
      
    }
    
 