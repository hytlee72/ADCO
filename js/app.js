var initialBuildings = [
		{
			roofSrc: 'img/commercial/roofs/roof_beige.png',
			wallSrc: 'img/commercial/walls/wall_beige.png',
			trimSrc: 'img/commercial/trim/trim_beige.png',
			houseSrc: 'img/residential/roof_beige.png',
			buttonSrc: 'img/buttons/beige.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_blue.png',
			wallSrc: 'img/commercial/walls/wall_blue.png',
			trimSrc: 'img/commercial/trim/trim_blue.png',
			houseSrc: 'img/residential/roof_blue.png',
			buttonSrc: 'img/buttons/blue.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_charcoal.png',
			wallSrc: 'img/commercial/walls/wall_charcoal.png',
			trimSrc: 'img/commercial/trim/trim_charcoal.png',
			houseSrc: 'img/residential/roof_charcoal.png',
			buttonSrc: 'img/buttons/charcoal.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_cocoa.png',
			wallSrc: 'img/commercial/walls/wall_cocoa.png',
			trimSrc: 'img/commercial/trim/trim_cocoa.png',
			houseSrc: 'img/residential/roof_cocoa.png',
			buttonSrc: 'img/buttons/cocoa.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_colony.png',
			wallSrc: 'img/commercial/walls/wall_colony.png',
			trimSrc: 'img/commercial/trim/trim_colony.png',
			houseSrc: 'img/residential/roof_colony.png',
			buttonSrc: 'img/buttons/colony.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_emerald.png',
			wallSrc: 'img/commercial/walls/wall_emerald.png',
			trimSrc: 'img/commercial/trim/trim_emerald.png',
			houseSrc: 'img/residential/roof_emerald.png',
			buttonSrc: 'img/buttons/emerald.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_fern.png',
			wallSrc: 'img/commercial/walls/wall_fern.png',
			trimSrc: 'img/commercial/trim/trim_fern.png',
			houseSrc: 'img/residential/roof_fern.png',
			buttonSrc: 'img/buttons/fern.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_gold.png',
			wallSrc: 'img/commercial/walls/wall_gold.png',
			trimSrc: 'img/commercial/trim/trim_gold.png',
			houseSrc: 'img/residential/roof_gold.png',
			buttonSrc: 'img/buttons/gold.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_gray.png',
			wallSrc: 'img/commercial/walls/wall_gray.png',
			trimSrc: 'img/commercial/trim/trim_gray.png',
			houseSrc: 'img/residential/roof_gray.png',
			buttonSrc: 'img/buttons/gray.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_harbor.png',
			wallSrc: 'img/commercial/walls/wall_harbor.png',
			trimSrc: 'img/commercial/trim/trim_harbor.png',
			houseSrc: 'img/residential/roof_harbor.png',
			buttonSrc: 'img/buttons/harbor.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_patriot.png',
			wallSrc: 'img/commercial/walls/wall_patriot.png',
			trimSrc: 'img/commercial/trim/trim_patriot.png',
			houseSrc: 'img/residential/roof_patriot.png',
			buttonSrc: 'img/buttons/patriot.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_rustic.png',
			wallSrc: 'img/commercial/walls/wall_rustic.png',
			trimSrc: 'img/commercial/trim/trim_rustic.png',
			houseSrc: 'img/residential/roof_rustic.png',
			buttonSrc: 'img/buttons/rustic.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_slate.png',
			wallSrc: 'img/commercial/walls/wall_slate.png',
			trimSrc: 'img/commercial/trim/trim_slate.png',
			houseSrc: 'img/residential/roof_slate.png',
			buttonSrc: 'img/buttons/slate.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_stone.png',
			wallSrc: 'img/commercial/walls/wall_stone.png',
			trimSrc: 'img/commercial/trim/trim_stone.png',
			houseSrc: 'img/residential/roof_stone.png',
			buttonSrc: 'img/buttons/stone.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_tan.png',
			wallSrc: 'img/commercial/walls/wall_tan.png',
			trimSrc: 'img/commercial/trim/trim_tan.png',
			houseSrc: 'img/residential/roof_tan.png',
			buttonSrc: 'img/buttons/tan.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_white.png',
			wallSrc: 'img/commercial/walls/wall_white.png',
			trimSrc: 'img/commercial/trim/trim_white.png',
			houseSrc: 'img/residential/roof_white.png',
			buttonSrc: 'img/buttons/white.jpg'
		},

		{
			roofSrc: 'img/commercial/roofs/roof_galvalume.png',
			wallSrc: 'img/commercial/walls/wall_galvalume.png',
			trimSrc: 'img/commercial/trim/trim_galvalume.png',
			houseSrc: 'img/residential/roof_galvalume.png',
			buttonSrc: 'img/buttons/galvalume.jpg'
		}


	];

var Building = function(data) {
	this.officeRoofSrc = ko.observable(data.roofSrc);
	this.officeWallSrc = ko.observable(data.wallSrc);
	this.officeTrimSrc = ko.observable(data.trimSrc);
	this.houseSrc = ko.observable(data.houseSrc);
	this.buttonSrc = ko.observable(data.buttonSrc);
};



var ViewModel = function() {
	var self = this;
	var residentialButton = document.getElementById("residential"),
		 roofButton = document.getElementById("setRoof"),
		 wallButton = document.getElementById("setWall"),
		 trimButton = document.getElementById("setTrim"),
	 	 roofImg = document.getElementById("roofPic"),
		 wallImg = document.getElementById("wallPic"),
		 trimImg = document.getElementById("trimPic");
	this.roofSelected = ko.observable(true); 
	this.residentialSelected = ko.observable(true);
	this.commercialSelected = ko.observable(false);
	this.buildingList = ko.observableArray([]);
	

	initialBuildings.forEach(function(buildingItem) {
		self.buildingList.push( new Building(buildingItem));
	});

	this.currentBuilding = ko.observable(this.buildingList() [0] );

	this.setBuilding = function(clickedBuilding) {
		if (roofButton.checked) {
    		roofImg.src = this.officeRoofSrc();
    	};
    	if (wallButton.checked) {
    		wallImg.src = this.officeWallSrc();
    	};
    	if (trimButton.checked) {
    		trimImg.src = this.officeTrimSrc();
    	};

    	self.currentBuilding(clickedBuilding);
	};

	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
};


ko.applyBindings(new ViewModel());