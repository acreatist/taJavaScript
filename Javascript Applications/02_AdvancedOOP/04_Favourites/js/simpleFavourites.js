var SimpleFavourites = (function(){
	var _container = "";
	var _folders = [];
	
	var favBar = function(selector){
		_container = document.getElementById(selector);

		addNewFolder = function(folderName){
			var newFolder = new Folder(folderName, null);
			_folders.push(newFolder);

			return newFolder;
		}

		/**
		 * [The folder class]
		 * @param  {[string]} name
		 * @param  {[array of strings]} listUrls		 
		 */
		var Folder = Class.create({
			init: function(name, listUrls){
				this.name = name;
				this.items = [];
			},

			addItem: function(name, url){
				newItem = new Item(name, url);
				this.items.push(newItem);
			},

			render: function(){
				var folderLi = document.createElement("li")
				folderLi.innerHTML = this.name;

				if (this.items.length > 0) {
					var itemsUl = document.createElement("ul"),
						itemsRender = document.createDocumentFragment();

					// Populate items to nested ul
					for (var i = 0; i < this.items.length; i++) {				
						var itemLi = document.createElement("li");
						var itemLink = this.items[i].render();
						
						itemLi.appendChild(itemLink);						
						itemsRender.appendChild(itemLi);
					};

					itemsUl.appendChild(itemsRender);

					folderLi.appendChild(itemsUl);
				};

				return folderLi;
			}
		});

		var Item = Class.create({
			init: function(name, url){
				this.name = name;
				this.url = url;
			},

			render: function(){
				var itemLink = document.createElement("a");
				itemLink.innerHTML = this.name;
				itemLink.setAttribute("href", this.url)
				itemLink.setAttribute("target", "_blank")

				return itemLink;				
			}
		});

		var render = function(){
			var barUl = document.createElement("ul");

			var barRender = document.createDocumentFragment();
			for (var i = 0; i < _folders.length; i++) {
				var folderLi = _folders[i].render();
				barRender.appendChild(folderLi);				
			};

			barUl.appendChild(barRender);			
			_container.appendChild(barUl);
		}

		return {
			AddNewFolder: addNewFolder,
			Render: render
		}
	}

	return function(selector){
		return new favBar(selector);
	}
})();