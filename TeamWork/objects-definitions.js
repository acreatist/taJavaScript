/*----------------
*	OBJECTS 	*
*	----------   */

var B2Object = function(setupobjParams){
	var scale = setupobjParams.scale;

	this.createRectBody = function(objParams){
		var xpos = objParams.xpos,
			ypos = objParams.ypos,
			width = objParams.width,
			height = objParams.height;

		var bodyDef = new b2BodyDef;
		bodyDef.type = b2Body.b2_dynamicBody;
		bodyDef.position.x = xpos/scale;
		bodyDef.position.y = ypos/scale;
		
		var fixtureDef = new b2FixtureDef;
		fixtureDef.density = 1.0;
		fixtureDef.friction = 0.5;
		fixtureDef.restitution = 0.3;
		fixtureDef.shape = new b2PolygonShape;
		fixtureDef.shape.SetAsBox(width/scale, height/scale);
		
		var body = world.CreateBody(bodyDef);
		body.SetUserData({
			name: objParams.name,
			life: objParams.life
		});

		var fixture = body.CreateFixture(fixtureDef);

		return body;
	}

	// Poligon
	this.createPoligon = function(objParams) {
		var xpos = objParams.xpos,
			ypos = objParams.ypos,
			width = objParams.width,
			height = objParams.height;

		var bodyDef = new b2BodyDef;
		
		bodyDef.type = b2Body.b2_dynamicBody;
		bodyDef.position.x = xpos/scale
		bodyDef.position.y = ypos/scale
		
		var fixtureDef = new b2FixtureDef;
		fixtureDef.density = 1.0;
		fixtureDef.friction = 0.5;
		fixtureDef.restitution = 0.3;
		fixtureDef.shape = new b2PolygonShape;

		var points = [
			new b2Vec2(0,0),
			new b2Vec2(40/scale,50/scale),
			new b2Vec2(50/scale,100/scale),
			new b2Vec2(-50/scale,100/scale),
			new b2Vec2(-40/scale,50/scale),
		];

		fixtureDef.shape.SetAsArray(points, points.length);

		var body = world.CreateBody(bodyDef);
		var fixture = body.CreateFixture(fixtureDef);

		return body;
	}

	// Complex
	this.createComplexPoligon = function(objParams){
		var xpos = objParams.xpos,
			ypos = objParams.ypos,
			width = objParams.width,
			height = objParams.height;

		var bodyDef = new b2BodyDef;
		
		bodyDef.type = b2Body.b2_dynamicBody;
		bodyDef.position.x = xpos/scale
		bodyDef.position.y = ypos/scale
		var body = world.CreateBody(bodyDef);
				
		fixtureDef = new b2FixtureDef;
		fixtureDef.density = 1.0;
		fixtureDef.friction = 0.5;
		fixtureDef.restitution = 0.3;
		// the circle
		fixtureDef.shape = new b2CircleShape(40/scale);
		body.CreateFixture(fixtureDef);

		// the poligon
		fixtureDef.shape = new b2PolygonShape;

		var points = [
			new b2Vec2(0,0),
			new b2Vec2(40/scale,50/scale),
			new b2Vec2(50/scale,100/scale),
			new b2Vec2(-50/scale,100/scale),
			new b2Vec2(-40/scale,50/scale),
		];

		fixtureDef.shape.SetAsArray(points, points.length);

		var fixture = body.CreateFixture(fixtureDef);
		
		return body;
	}
};