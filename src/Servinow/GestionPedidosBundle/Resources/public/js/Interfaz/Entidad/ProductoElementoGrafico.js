(function(ep, template){
	var template = template.PRODUCTO;
	ep.Interfaz.Entidad.ProductoElementoGrafico = function() {
		this.element = null;
		this.create = function(lineaPedido){
			this.lineaPedido = lineaPedido;
			var data = {
				lineaPedido: lineaPedido
			};
			this.element = $(new EJS({
				url: template
			}).render(data));
			
			this.nextStateButtonElement = this.element.find(".accionesProducto .nextState");
                        
			this.element.data("obj", lineaPedido);
			return this;
		}
		this.toggleNextStateButtonLineaPedido = function(){
			var actualValue = this.nextStateButtonElement.attr("disabled");
			this.nextStateButtonElement.attr("disabled", !actualValue);			
		}
		this.enableNextStateButtonLineaPedido = function(){
			this.nextStateButtonElement.attr("disabled", false);	
		}
	}
})(ep, template);
