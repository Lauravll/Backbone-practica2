var Libro = Backbone.Model.extend({

    //Interactuamos con el servidor, la url permite solicitudes rest
    //Es recomendable no utilizar esta propiedad al menos que el modelo no esté dentro de una colección
    //Creamos instancia y luego hacemos una petición fetch
    urlRoot:'/libros'

    //var libroUno = new Libro({ id: '1',});

    //libroUno.fetch();    //Get/libros/1

    //libroUno.toJSON();

    //Podemos agregar datos al servidor con save

    //var libroDos = new Libro ({ titulo: 'La Odisea', autor:'Homero', categoria: 'Literatura'});


    //peticion post
    //libroDos.save()       //POST/libros

    //Si quiero cambiar algo hago un set y luego un save

    //libroUno.set({autor: 'Desconocido'});

    //libroUno.save();

    //Para remover
    //libroUno.destroy();

});


