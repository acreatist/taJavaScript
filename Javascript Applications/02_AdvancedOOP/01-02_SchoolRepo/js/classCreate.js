var Class = (function(){
	function createClass(properties){
		newCLass = function(){
			this.init.apply(this, arguments)
		}

		for(var prop in properties){
			newCLass.prototype[prop] = properties[prop];
		}

		if (!newCLass.prototype.init) {
			newCLass.prototype.init = function(){};
		};

		return newCLass;
	}

	return {
		create: createClass
	};
})();

Function.prototype.inherit = function(parent){
	var oldPrototype = this.prototype;
	var parentPrototype = new parent();

	this.prototype = Object.create(parentPrototype);
	this.prototype._super = parentPrototype;

	for(var prop in oldPrototype){
		this.prototype[prop] = oldPrototype[prop];
	}
};