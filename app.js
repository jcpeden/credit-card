angular.module("creditcardApp", []);

angular.module("creditcardApp").controller("creditcardCtrl", function($scope) {

	$scope.cards = [
		{
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: 22000,
			bonusCurrency: "Membership Rewards",
			cardFree: 125,
			imageName: "amex-gold.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "American Express Platinum",
			cardBonus: 35000,
			bonusCurrency: "Membership Rewards",
			cardFree: 450,
			imageName: "amex-platinum.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "British Airways American Express",
			cardBonus: 3000,
			bonusCurrency: "Avios",
			cardFree: 0,
			imageName: "ba.jpg", 
			minSpend: 500,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "British Airways American Express Premium Plus",
			cardBonus: 18000,
			bonusCurrency: "Avios",
			cardFree: 125,
			imageName: "ba-premium-plus.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "Lloyds Avios Rewards American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: 24,
			imageName: "lloyds-rewards.jpg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "Lloyds Premier Avios Rewards American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: 140,
			imageName: "lloyds-premier.jpg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "Lloyds Choice Rewards American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: 24,
			imageName: "lloyds-choice.jpg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "TSB Avios American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: "",
			imageName: "tsb.jpg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "TSB Premier Avios American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: "",
			imageName: "tsb-premier.jpg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "Virgin Atlantic White American Express & Visa",
			cardBonus: 10000,
			bonusCurrency: "Virgin Flying Club",
			cardFree: "",
			imageName: "virgin-white.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "Virgin Atlantic Black American Express & Visa",
			cardBonus: 25000,
			bonusCurrency: "Virgin Flying Club",
			cardFree: 14,
			imageName: "virgin-black.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "Hilton HHonors Platinum Visa",
			cardBonus: 1,
			bonusCurrency: "Free stay at Hilton property",
			cardFree: 125,
			imageName: "hilton.jpg", 
			minSpend: "750",
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "IHG Rewards Club Visa",
			cardBonus: 30000,
			bonusCurrency: "IHG Rewards Club",
			cardFree: 0,
			imageName: "ihg.jpg", 
			minSpend: 1,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "IHG Rewards Club Premium Visa",
			cardBonus: 60000,
			bonusCurrency: "IHG Rewards Club",
			cardFree: 99,
			imageName: "ihg-premier.jpg", 
			minSpend: 1,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "Marriott Rewards MasterCard",
			cardBonus: 10000,
			bonusCurrency: "Marriott Rewards",
			cardFree: 125,
			imageName: "marriott.jpg", 
			minSpend: 200,
			spendTimeLimit: 180,
			cardURL: "javascript:void(0);"
		},
		{
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: 10000,
			bonusCurrency: "Starwood Preferred Guest",
			cardFree: 75,
			imageName: "spg.jpg", 
			minSpend: 1000,
			spendTimeLimit: 90,
			cardURL: "javascript:void(0);"
		}
	];
})