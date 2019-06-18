var app = app || {};

var Libreria = Backbone.View.extend({
	//defino propiedad el con id de app
	
	el: '#app',
		//defino propiedad el con id de app
	
        initialize: function(){

			//Con esto agregamos todos los modelos de nuestra coleccion a la vista
			//Funcion on enlaza un evento con un callback
			//Si un modelo se agrega a la coleccion ejecuta el metodo mostrarLibro automaticamente
			appLibros.on('add', this.mostrarLibro);

        	appLibros.fetch();
	},
	
	
	//Al metodo le llega un modelo y lo muestro en consola
	mostrarLibro: function(modelo){
		console.log(modelo.toJSON());

		//Creo instancia de una nueva class View
		var vista = new MostrarLibroView({model:modelo});
	
		//Ultimo)Agrego las vistas al elemento div con clase libros
		$('.libros').append(vista.render().$el)
	}

});


//Creo class view extendiendo de Backbone.View
var MostrarLibroView = Backbone.View.extend({
//Definimos la propiedad template, le paso el html con el elemento con id tplMostrarLibro
//Primero llamo a underscore, luego al template y le paso el html...
template: _.template($('#tplMostrarLibro').html()),

//para poder relacionar el *enrutamiento dinamico con los libros
events: {
	//cuando hago click en etiqueta h2 (titulo del libro) va a la funcion detaññe
	'click h4': 'detalle'
},

detalle: function(){
	//En navigate se le indca la url y se le concatena el id del modelo seleccionado. Despues se establece el trigger:true que indica que dicha url pertenece a la apk
	Backbone.history.navigate('libros/' + this.model.get('id'), {trigger:true});
},

//Creo metodo render
render: function(){
	//Llamo a la propiedad el con jquery y le paso el metodo html pra escribir dentro dentro de este elemento nuestro template pasando el contenido del modelo
		
	this.$el.html(this.template( this.model.toJSON()));
	return this;
}
});

//inicializo la vista
var appView = new Libreria();

