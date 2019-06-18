//url's fragmentadas-hash
var rutas = Backbone.Router.extend({

    //Le añado el método routes, el cual define todas las url internas de la pk y la funcion que debe llamarse en una url determinada
    routes: {
        //url con las funciones que llama
        'home': 'cursos',
        'libros': 'book',
        //enrutamiento dinamico
        'libros/:id': 'detalle'
    },

    detalle: function(id){
        console.log(id);
    },

    cursos: function(){
        console.log("home");
    },

    book: function(){
        console.log("book");
    }


});

//instancio objeto del routes class
var route = new rutas();

//tambien necesitamos backbone history el cual maneja atuomaticamente las rutas definidas en la aplicacion y las devoluciones de las llamads de activacio0n cuando han sido accedidas algunas de estas rutas y tambien nos permite manejar los eventos hash
//Establezco metodo start
Backbone.history.start();

//**En consola */
//http://localhost:4000/#libros

//Manejo de accesso de las url
Backbone.history.navigate('libros');

//Enrutamiento dinamico: permiten defini rutas que contienen una combinacion de rutas estaticas y dinamicas
//Si tengo una url #libro estatica se define como #libros/1 o #libro/3 de esta forma se sealizara el enrutamiento dinamoo



