angular.module("creditcardApp", []);

angular.module("creditcardApp").controller("creditcardCtrl", ['$scope', function($scope) {

	// Define control array
	$scope.control = {
		avios: 1,
		amex: 1,
		spg: 1,
		virgin: 0.8,
		marriott: 0.55,
		ihg: 0.5,
		hilton: 150,
	};

	// Define credit card array
	$scope.cards = [
		{
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: 22000,
			bonusValue: 220,
			bonusCurrency: "amex",
			cardFee: 125,
			imageName: "amex-gold.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:gold&journey=B&intlink=uk-amex-cardshop-goldcard-detail-applynow-main"
		},
		{
			cardName: "American Express Platinum",
			cardBonus: 35000,
			bonusValue: 350,
			bonusCurrency: "amex",
			cardFee: 450,
			imageName: "amex-platinum.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:platinum_charge&journey=B&intlink=uk-amex-cardshop-platinumcard-detail-applynow-main"
		},
		{
			cardName: "British Airways American Express",
			cardBonus: 3000,
			bonusValue: 30,
			bonusCurrency: "avios",
			cardFee: 0,
			imageName: "ba.jpg", 
			minSpend: 500,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:triCredit&journey=B&intlink=uk-amex-cardshop-britishairwaysamericanexpresscreditcard-detail-applynow-main"
		},
		{
			cardName: "British Airways American Express Premium Plus",
			cardBonus: 18000,
			bonusValue: 180,
			bonusCurrency: "avios",
			cardFee: 125,
			imageName: "ba-premium-plus.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga3/uk/pers/begin.do?perform=IntlEapp:UK:triPremiumPlus&intlink=uk-amex-cardshop-BritishAirwaysPremiumPlus-detail-applynow-main"
		},
		{
			cardName: "Lloyds Avios Rewards American Express & MasterCard",
			cardBonus: 0,
			bonusValue: 0,
			bonusCurrency: "avios",
			cardFee: 24,
			imageName: "lloyds-rewards.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_LAvios_HP2812"
		},
		{
			cardName: "Lloyds Premier Avios Rewards American Express & MasterCard",
			cardBonus: 0,
			bonusValue: 0,
			bonusCurrency: "avios",
			cardFee: 140,
			imageName: "lloyds-premier.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_LAviosPremier_HP2812"
		},
		{
			cardName: "Lloyds Choice Rewards American Express & MasterCard",
			cardBonus: 0,
			bonusValue: 0,
			bonusCurrency: "avios",
			cardFee: 24,
			imageName: "lloyds-choice.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_Lloyds_Choice2812"
		},
		{
			cardName: "TSB Avios American Express & MasterCard",
			cardBonus: 0,
			bonusValue: 0,
			bonusCurrency: "avios",
			cardFee: 0,
			imageName: "tsb.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.tsb.co.uk/personal/a/apply_credit_card/PS_TSBDuoAvios"
		},
		{
			cardName: "TSB Premier Avios American Express & MasterCard",
			cardBonus: 0,
			bonusValue: 0,
			bonusCurrency: "avios",
			cardFee: 0,
			imageName: "tsb-premier.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.tsb.co.uk/personal/a/apply_credit_card/PS_TSBPremierDuo"
		},
		{
			cardName: "Virgin Atlantic White American Express & Visa",
			cardBonus: 10000,
			bonusValue: 80,
			bonusCurrency: "virgin",
			cardFee: 0,
			imageName: "virgin-white.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "http://www.virgin-atlantic.com/gb/en/flying-club/credit-card/bonus-white-card.html"
		},
		{
			cardName: "Virgin Atlantic Black American Express & Visa",
			cardBonus: 25000,
			bonusValue: 200,
			bonusCurrency: "virgin",
			cardFee: 14,
			imageName: "virgin-black.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "http://www.virgin-atlantic.com/gb/en/flying-club/credit-card/bonus-black-card.html"
		},
		{
			cardName: "Hilton HHonors Platinum Visa",
			cardBonus: 1,
			bonusValue: 150,
			bonusCurrency: "hilton",
			cardFee: 125,
			imageName: "hilton.jpg", 
			minSpend: 750,
			spendTimeLimit: 90,
			cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/hilton"
		},
		{
			cardName: "IHG Rewards Club Visa",
			cardBonus: 30000,
			bonusValue: 150,
			bonusCurrency: "ihg",
			cardFee: 0,
			imageName: "ihg.jpg", 
			minSpend: 1,
			spendTimeLimit: 90,
			cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/ihg"
		},
		{
			cardName: "IHG Rewards Club Premium Visa",
			cardBonus: 60000,
			bonusValue: 300,
			bonusCurrency: "ihg",
			cardFee: 99,
			imageName: "ihg-premier.jpg", 
			minSpend: 1,
			spendTimeLimit: 90,
			cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/ihg-premium"
		},
		{
			cardName: "Marriott Rewards MasterCard",
			cardBonus: 10000,
			bonusValue: 55,
			bonusCurrency: "marriott",
			cardFee: 125,
			imageName: "marriott.jpg", 
			minSpend: 200,
			spendTimeLimit: 180,
			cardURL: "https://apply.creation.co.uk/microsites/marriott/?termsAndConditionsCode=MC5307&MC=29990017&operatorCode=WebMC&responseCode=MRRHP4"
		},
		{
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: 10000,
			bonusValue: 100,
			bonusCurrency: "spg",
			cardFee: 75,
			imageName: "spg.jpg", 
			minSpend: 1000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:triCredit&journey=B&intlink=uk-amex-cardshop-britishairwaysamericanexpresscreditcard-detail-applynow-main"
		}
	];

    $scope.updateAvios = function( ) {

    	/* Get avios value */
    	var val = $scope.control.avios;

    	/* Get card array */
        var cards = $scope.cards;
		angular.forEach(cards, function(card) {
			if(card.bonusCurrency == 'avios' )

				/* Update card bonus value */
				card.bonusValue = val * card.cardBonus;
		});
    };

    $scope.updateAmex = function( ) {

    	/* Get amex value */
    	var val = $scope.control.amex;

    	/* Get card array */
        var cards = $scope.cards;
		angular.forEach(cards, function(card) {
			if(card.bonusCurrency == 'amex' )

				/* Update card bonus value */
				card.bonusValue = val * card.cardBonus;
		});
    };

    $scope.updateSpg = function( ) {

    	/* Get spg value */
    	var val = $scope.control.spg;

    	/* Get card array */
        var cards = $scope.cards;
		angular.forEach(cards, function(card) {
			if(card.bonusCurrency == 'spg' )

				/* Update card bonus value */
				card.bonusValue = val * card.cardBonus;
		});
    };

    $scope.updateVirgin = function( ) {

    	/* Get virgin value */
    	var val = $scope.control.virgin;

    	/* Get card array */
        var cards = $scope.cards;
		angular.forEach(cards, function(card) {
			if(card.bonusCurrency == 'virgin' )

				/* Update card bonus value */
				card.bonusValue = val * card.cardBonus;
		});
    };

    $scope.updateMarriott = function( ) {

    	/* Get marriott value */
    	var val = $scope.control.marriott;

    	/* Get card array */
        var cards = $scope.cards;
		angular.forEach(cards, function(card) {
			if(card.bonusCurrency == 'marriott' )

				/* Update card bonus value */
				card.bonusValue = val * card.cardBonus;
		});
    };

    $scope.updateIhg = function( ) {

    	/* Get ihg value */
    	var val = $scope.control.ihg;

    	/* Get card array */
        var cards = $scope.cards;
		angular.forEach(cards, function(card) {
			if(card.bonusCurrency == 'ihg' )

				/* Update card bonus value */
				card.bonusValue = val * card.cardBonus;
		});
    };

    $scope.updateHilton = function( ) {

    	/* Get hilton value */
    	var val = $scope.control.hilton;

    	/* Get card array */
        var cards = $scope.cards;
		angular.forEach(cards, function(card) {
			if(card.bonusCurrency == 'hilton' )

				/* Update card bonus value */
				card.bonusValue = val * card.cardBonus * 100;
		});
    };

    // Set default card sort criteria
	$scope.predicate = "-bonusValue";

}]);