(function() {

	var xboxImg = document.getElementById('xbox-img');
	var ps3Img = document.getElementById('ps3-img');

	var menuCanvas = document.getElementById('reference-img');
	var ctx = menuCanvas.getContext('2d');

	var MenuInputCoordinates = {};
	
	MenuInputCoordinates['xbox'] = {};
	
	MenuInputCoordinates['xbox'].Img = xboxImg;
	MenuInputCoordinates['xbox'].MouseCursor = [0.577, 0.55, 0.577, 0.62];
	MenuInputCoordinates['xbox'].CharacterMovement = [0.3275, 0.425, 0.2, 0.525];
	MenuInputCoordinates['xbox'].MouseClick = [0.3275, 0.425, 0.2, 0.525];
	MenuInputCoordinates['xbox'].LootKey = [0.3275, 0.425, 0.2, 0.525];
	MenuInputCoordinates['xbox'].OpenMenu = [0.3275, 0.425, 0.2, 0.525];
	MenuInputCoordinates['xbox'].EscapeKey = [0.3275, 0.425, 0.2, 0.525];

	MenuInputCoordinates['ps3'] = {};
	MenuInputCoordinates['ps3'].Img = ps3Img;
	
	function drawControllerReferencemenuCanvas(op) {
		
		menuCanvas.width = window.innerWidth;
		menuCanvas.height = window.innerHeight;
		
		ctx.clearRect(0, 0, menuCanvas.width, menuCanvas.height);
		
		ctx.drawImage(MenuInputCoordinates[op].Img, menuCanvas.width * 0.2, menuCanvas.height * 0.1, menuCanvas.width * 0.6, menuCanvas.height * 0.6);

		// mouse cursor
		drawInputLine(MenuInputCoordinates[op].MouseCursor, 'MOUSE CURSOR (Pressed: Hold CTRL)');
		
		// character movement
		drawInputLine(MenuInputCoordinates[op].CharacterMovement, 'CHARACTER MOVEMENT');
		
		// character movement
		drawInputLine(MenuInputCoordinates[op].CharacterMovement, 'CHARACTER MOVEMENT');
		
	}

	function drawInputLine(coords, txt) {
	
		var iX = coords[0] * window.innerWidth;
		var iY = coords[1] * window.innerHeight;
		var eX = coords[2] * window.innerWidth;
		var eY = coords[3] * window.innerHeight;
		
		ctx.strokeStyle = '#000000';
		
		ctx.beginPath();
			ctx.moveTo(iX, iY);
			ctx.lineTo(eX, eY);
		ctx.stroke();
		
		if(txt !== undefined) {
			ctx.textBaseline="hanging"; 
			var textSize = window.innerHeight / 50;
			ctx.font = 'bold ' + textSize + 'px Verdana';
			var halfTxtWidth = ctx.measureText(txt).width / 2;
			ctx.fillStyle = '#000000';
			ctx.fillText(txt, eX - halfTxtWidth, eY);
			ctx.lineWidth = textSize * 0.05;
			ctx.strokeStyle = '#FFFFFF';
			ctx.strokeText(txt, eX - halfTxtWidth, eY);
		}
	}

	$('#select-input-method').change(function() {
		drawControllerReferencemenuCanvas($(this).val());
	});

	$(window).on('resize', function() {
		$('#select-input-method').change();
	});

})();