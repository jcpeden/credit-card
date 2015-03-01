angular.module("helloApp", []);

angular.module("helloApp").controller("HelloCtrl", function($scope) {
	$scope.name = "John Peden";

	$scope.cards = [
		amexGold : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		amexPlatinum : {
			cardName: "American Express Platinum",
			cardBonus: "35000",
			bonusCurrency: "Membership Rewards",
			cardFree: "450",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		amexBritishAirways : {
			cardName: "British Airways American Express",
			cardBonus: "3000",
			bonusCurrency: "Avios",
			cardFree: "0",
			imageName: "amex-gold.jpeg", 
			minSpend: "500",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		amexBritishAirwaysPremium : {
			cardName: "British Airways American Express Premium Plus",
			cardBonus: "18000",
			bonusCurrency: "Avios",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		lloydsAvios : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		lloydsAviosPremier : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		lloydsChoice : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		tsbAvios : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		tsbAviosPremier : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		virginAtlanticWhite : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		virginAtlanticBlack : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		hiltonHhonors : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		ihgRewards : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		marriottRewards : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		starwoodAmex : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "22000",
			bonusCurrency: "Membership Rewards points",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		}
	]
})