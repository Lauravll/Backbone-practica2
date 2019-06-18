var app = app || {};
//app.Libreria = Backbone.View.extend({
var Libreria = Backbone.View.extend({

	//Para instanciarla
	//var vista = new Libreria();

	//Cuando no definimos la comun es div
	//vista.el;

	//tagName: 'span',
	//className: 'nombreClass',
	//id: 'nombreid'

	//*En consola*
	//var appView = new Libreria();
	//appView.$el;
	
	//<span id="nombreid" class="nombreClass"></span>

	//Tenemos una segunda forma de crear la propiedad el aun elemento de la pagina
	//Agregamos un div en index.html, creamos el el con el valor de la clase creada en el html

	el: '.vista',


	//<div class="vista"></div>

	//Les podemos poner el signo $ para que adopte las funcionalidades brindadas por la libreria
	//Ayuda a manipular mejor el dom

	//*En Consola*
	//appView.$el;

	//appView.$el.text('Hola mundo con Backbone.js');
	//appView.$el.css('background', 'blue');
	//appView.$el.append('<span>Genial</span>');

	//Este viene despues de render, lo actualiza automaticamente sin necesidad de poner .render()
	//*En consola
	//var appView = new Libreria();
	initialize: function(){
		this.render();
	},

	//Método render de una vista

	render: function(){

		this.$el.html('<p>El método render en accion </p>')

		//this.$el.html('<p>El método render en accion </p>')

		//*En consola*
		//var appView = new Libreria();
		//appView.render();
		//Asi automaticamente la vista es renderizada
	},
	


	//Eventos
	//Dentro del html
	events:{
		//'nombre:Evento Selector': 'nombre callback(método)
		'click .cambiarColor': 'cambiarColor'
	},

	//método del evento
	cambiarColor: function(){
		alert("Cambie el color");
		this.$el.css('color', 'violet');
	}
	//var appView = new Libreria();
	//no va a funcionar si esta render arriba


	








	/*el: '#app',

	events: {
		'click #crear': 'crearLibro'
	},

	initialize: function() {
		this.listenTo(app.libros, 'add', this.mostrarLibro);
		this.listenTo(app.libros, 'remove', this.resetLibro);
		app.libros.fetch();
	},

	mostrarLibro: function(modelo){
		var vista = new app.MostrarLibroView({model: modelo});
		$('.libros').append(vista.render().$el);
	},

	crearLibro: function(){
		app.libros.create({
			"titulo": $('#inputTitulo').val(),
			"autor": $('#inputAutor').val(),
			"categoria": $('#inputCategoria').val()
		});
	},

	resetLibro: function(){
		this.$('.libros').html('');
		app.libros.each(this.mostrarLibro, this);
	}
});

app.MostrarLibroView = Backbone.View.extend({
	template: _.template($('#tplMostrarLibro').html()),
	tagName: 'li',
	className: 'list-group-item',

	events:{
		'click #detalle': 'mostrarDetalle',
		'click #eliminar': 'eliminarLibro'
	},

	initialize: function() {
		var self = this;
		
		app.route.on('route:book', function(){
			self.render();
		});
		app.route.on('route:detalle', function(){
			self.render();
		});
	},

	render: function() {
		var self = this;
		if(window.stade === "libro"){
			$('.detalle').hide();
			$('#myModal').modal('hide');
			this.$el.html( this.template( this.model.toJSON() ) );
		}else if(window.stade === "detalle"){
			$('.detalle').show();
			if(this.model.get('id') === window.libroID){
				new app.DetalleLibroView({model:this.model});
			}
		}
		return this;
	},

	mostrarDetalle: function() {
		Backbone.history.navigate('libros/' + this.model.get('id'), {trigger: true});
	},

	eliminarLibro: function(){
		this.model.destroy();
	}
});


app.DetalleLibroView = Backbone.View.extend({
	el: '.detalle',
	template: _.template($('#tplDetalleLibro').html()),	

	events: {
		'click .atrasLibros': 'atrasLibros'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		$('#myModal').modal();
	},

	atrasLibros: function(){
		Backbone.history.navigate('', {trigger: true});	

	}*/
});

//para activar render
var appView = new Libreria();
//Lo agrego para cambiarle el color al texto
appView.$el;
appView.$el.append('<div class="cambiarColor">Cambiar color del texto</div>');