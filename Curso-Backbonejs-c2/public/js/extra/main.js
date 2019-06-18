//var app = app || {};
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
  
    el: '.vista2',
    urlRoot:'/libros',
  
  
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
  
  
    //Eventos
    //Dentro del html
    events:{
      //'nombre:Evento Selector': 'nombre callback(método)
    
      'click .mostrarLibros': 'mostrarLibros'
    },
  
    //método del evento
    mostrarLibros: function(){
    
      $.ajax({url: 'http://localhost:4000/libros', success: function(result){
       
        var libros2 = new LibrosCollection();

        $("#div1").html(result.toJSON);

        var tbl=$("<table/>").attr("id","mytable");
    $("#div1").append(tbl);

    for(var i=0;i<result.length;i++)
    {
      var libro = new Libro({ id: result[i]["id"], titulo: result[i]["titulo"], autor: result[i]["autor"], categoria:result[i]["categoria"]  });
        var tr="<tr>";
        var td1="<td>"+result[i]["id"]+"</td>";
        var td2="<td>"+result[i]["titulo"]+"</td>";
        var td3="<td>"+result[i]["autor"]+"</td></tr>";
        var td3="<td>"+result[i]["categoria"]+"</td></tr>";
       $("#mytable").append(tr+td1+td2+td3); 
       libros2.add(libro);
    }

    libros2.each( function(data){
      console.log(""+data.get('titulo'));
  }),
  
  console.log(""+libros2.toJSON());
        
      }});
    }
    //var appView = new Libreria();
    //no va a funcionar si esta render arriba
  
  
    
  });
  var libroUno = new Libro({ id: '1',});
  libroUno.fetch();
  console.log("dasda");
  console.log(libroUno.toJSON());
  //para activar render
  var appView = new Libreria();
  //Lo agrego para cambiarle el color al texto
