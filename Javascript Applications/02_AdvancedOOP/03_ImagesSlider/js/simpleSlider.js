var acmeSlider = (function(){
	var _container = "";
	var imagesDom = [];
	var thumbsCount = 0;

	var slider = function(selector){
		_container = document.getElementById(selector);

		imageNodes = _container.getElementsByTagName("img");
		for (var i = 0; i < imageNodes.length; i++) {
			imagesDom.push(imageNodes[i]);
		};
			
		createBigImageField();
		generateThumbs();
	}

	var BigImage = Class.create({
		init: function(domImage, imageHolderEl, width, height){
			this.image = domImage;
			this.fileName = "";
			this.fileExtension = "";
			this.imageHolder = document.createElement(imageHolderEl);
			this.width = width;
			this.height = height;

			if (domImage != undefined) {
				this.fileName = domImage.getAttribute("src").split(".")[0];
				this.fileExtension = domImage.getAttribute("src").split(".")[1];
			};
		},

		render: function(){
			this.imageHolder.style.overflow = "hidden";
			this.imageHolder.style.width = this.width + "px";
			this.imageHolder.style.height = this.height + "px";
			this.imageHolder.style.display = "inline-block";

			this.image.style.width = this.imageHolder.style.offsetWidth;
			this.imageHolder.appendChild(this.image);

			_container.appendChild(this.imageHolder);
		},

		hide: function(){
			console.log(this.imageHolder)
			this.imageHolder.display = "none";
		}
	});

	var Thumb = Class.create({
		init: function(domImage, imageHolderEl, width, height, bigImage){
			var thumbDomImage = domImage.cloneNode();
			this._super.init(thumbDomImage, imageHolderEl, width, height);
			this.bigImage = bigImage;
			this.active = false;
		},

		showBigImage: function(){
			this.bigImage.imageHolder.style.display = "block";
		},
		
		hideBigImage: function(){
			this.bigImage.imageHolder.style.display = "none";
		},
	});
	Thumb.inherit(BigImage);

	var bigImages = [];
	
	var createBigImageField = function(){
		for (var i = 0; i < imagesDom.length; i++) {
			bigImages.push(new BigImage(imagesDom[i], "div", _container.offsetWidth, _container.offsetHeight));
		};

		for (var i = 0; i < bigImages.length; i++) {
			bigImages[i].render(_container);
		}
	}

	var generateThumbs = function(){
		thumbsCount = imagesDom.length;
		var thumbWidth = Math.floor(_container.offsetWidth / thumbsCount);
		var thumbHeight = Math.floor(_container.offsetHeight / thumbsCount);

		for (var i = 0; i < imagesDom.length; i++) {
			var thumb = new Thumb(imagesDom[i], "a", thumbWidth, thumbHeight, bigImages[i]);
			thumb.render();
			thumb.hideBigImage();

			addClick(thumb);
		};		
	}

	var hideBigImages = function(){
		for (var i = 0; i < bigImages.length; i++) {
			bigImages[i].hide();			
		}	
	}

	var addClick = function(thumb){
		thumb.imageHolder.addEventListener("click", function(){
			hideBigImages();
			thumb.showBigImage();
		})
	}

	return function(selector){
		return new slider(selector);
	}
})();