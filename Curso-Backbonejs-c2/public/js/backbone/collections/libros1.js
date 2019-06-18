var LibrosCollection = Backbone.Collection.extend({
    //asignamos model class
    model: Libro,
    url: '/libros',


});



//var libros = new LibrosCollection();
//Su principal funcionalidad es la de agregar y eliminar modelos
//add() y remove()

/*var a = new Libro({ titulo: 'titulo 1', autor: 'autor 1'}),
var b = new Libro({ titulo: 'titulo 2', autor: 'autor 2'}),
var c = new Libro({ titulo: 'titulo 3', autor: 'autor 3'});*/

//var libros = new LibrosCollection([a,b]);
//libros.toJSON();
//libros.add(c);
//libros.toJSON();
//libros.remove(a);
//libros.remove([b,c]);

//Devolver modelos de una coleccion
//var d = new Libro({titulo: 'Nuevo titulo', autor: 'Desconocido', id:6});
//var libros = new LibrosCollection(d);
//modeloDevuelto = libros.get(6);
//modeloDevuelto.toJSON():
//get tiene como atributo id, idatribute(si es un dni por ejemplo) y cid.

//var e = new Libro({titulo: 'Titulo e', autor:'DevCode. la'});
//e;   //de aca vemos el valor del cid
//libros.add(e);
//modelCid = libros.get("c2");
//modelCid.toJSON();

//Eventos:
//var libros = new LibrosCollection();
/*libros.on('add', function(){
    console.log('Se agrego un nuevo modelo a la colecciòn.');
});*/

/*libros.add([
    {titulo: 'titulo 1', autor: 'autor 1'},
    {titulo: 'titulo 2', autor: 'autor 2'}
]);*/

//Evento change
/*libros.on('change', function(model){
    console.log('El modelo con titulo: ' + model.titulo + ' ha cambiado');
});*/

//Cambio de valor en las colleciones
var libros = new LibrosCollection();
libros.add([
    {id:6, titulo: 'Titulo 6', autor: 'Autor 6'},
    {id:7, titulo: 'Titulo 7', autor: 'Autor 7'}
]);

console.log(libros.toJSON());

/*libros.set([
    {id:6, titulo: 'Titulo 6', autor: 'DevCode. la'},
    {id:8, titulo: 'Titulo 8', autor: 'Autor 8'}
]);*/

//Para cambiar el contenido completo de la collecion usamos reset
libros.reset([{titulo: 'Libros profesional de Django', autor:'JeanCarlos'}]);
console.log(libros.toJSON());

//Limpiar coleccion eliminando todo el contenido que tiene
libros.reset();
console.log(libros.toJSON());

//Sincronizar datos del servidor con nuestra collecion
//Con el metodo podemos traer todos los datos del servidor y agregarlos como modelos a nuestra colleccion
//debemos agregar la propiedad url dentro de nuestra collection class

var libros2 = new LibrosCollection();

libros2.fetch();

libros2.each( function(data){
    console.log("dasd"+data.get('autor'));
}),

console.log(""+libros2.toJSON());


//Realizo la declaracion para el template
var appLibros = new LibrosCollection(); 

//Con esto trae todos los datos del servidor y podemos manipularlos del lado del cliente
