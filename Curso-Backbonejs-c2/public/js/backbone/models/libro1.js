//var Libro = Backbone.Model.extend();

//***En consola ***/
//var primerLibro = new Libro ({ titulo: 'La Odisea', autor:'Homero', categoria: 'Literatura'});

//primerLibro.toJSON();

//primerLibro.get('titulo');

//primerLibro.set('autor', 'Desconocido');


//Imprimo en consola
var Libro = Backbone.Model.extend({
    //aparece el mensaje cuando creamos una instancia por consola
    initialize: function(){
        console.log('Se ha creado una nueva instancia');

        this.on("change", function(){
          console.log("El modelo ha cambiado");
      });
      
    },

    //agrega atributos por defecto
    defaults: {
        autor: 'Desconocido',
    }

    //var primerLibro = new Libro ({ titulo: 'La Odisea'});


});

