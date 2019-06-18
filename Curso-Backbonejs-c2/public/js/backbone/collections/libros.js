var LibrosCollection = Backbone.Collection.extend({
    //asignamos model class
    model : Libro,
    url: '/libros'
});
var appLibros = new LibrosCollection();  
//si los quiero ver
//appLibros.toJSON(); //Asi vemos que ya tiene cargados todos los libros en nuestro servidor






/*
//Diferencia con el otro fetch

var libroUno = new Libro({ id: '1',});
libroUno.fetch();    //Get/libros/1
libroUno.toJSON();

console.log("Lo muestro sin foreach"+libroUno.toJSON());

var libros = new LibrosCollection();
libros.add([
    {id:6, titulo: 'Titulo 6', autor: 'Autor 6'},
    {id:7, titulo: 'Titulo 7', autor: 'Autor 7'}
]);

libros.each( function(data){
    console.log("Este es el otro fetch: "+data.get('autor'));
});
*/