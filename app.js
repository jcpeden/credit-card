angular.module("creditcardApp", []);

angular.module("creditcardApp").controller("creditcardCtrl", function($scope) {

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
			minSpend: "2300",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		lloydsAvios : {
			cardName: "Lloyds Avios Rewards American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: "24",
			imageName: "amex-gold.jpeg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		lloydsAviosPremier : {
			cardName: "Lloyds Premier Avios Rewards American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: "140",
			imageName: "amex-gold.jpeg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		lloydsChoice : {
			cardName: "Lloyds Choice Rewards American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: "24",
			imageName: "amex-gold.jpeg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		tsbAvios : {
			cardName: "TSB Avios American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: "",
			imageName: "amex-gold.jpeg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		tsbAviosPremier : {
			cardName: "TSB Premier Avios American Express & MasterCard",
			cardBonus: "",
			bonusCurrency: "",
			cardFree: "",
			imageName: "amex-gold.jpeg", 
			minSpend: "",
			spendTimeLimit: "",
			cardURL: "javascript:void(0);"
		},
		virginAtlanticWhite : {
			cardName: "Virgin Atlantic White American Express & Visa",
			cardBonus: "10000",
			bonusCurrency: "Virgin Flying Club",
			cardFree: "",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		virginAtlanticBlack : {
			cardName: "Virgin Atlantic Black American Express & Visa",
			cardBonus: "25000",
			bonusCurrency: "Virgin Flying Club",
			cardFree: "14",
			imageName: "amex-gold.jpeg", 
			minSpend: "2000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		hiltonHhonors : {
			cardName: "Hilton HHonors Platinum Visa",
			cardBonus: "1",
			bonusCurrency: "Free stay at Hilton property",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "750",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		ihgRewards : {
			cardName: "IHG Rewards Club Visa",
			cardBonus: "30000",
			bonusCurrency: "IHG Rewards Club",
			cardFree: "0",
			imageName: "amex-gold.jpeg", 
			minSpend: "1",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		ihgRewardsPremium : {
			cardName: "IHG Rewards Club Premium Visa",
			cardBonus: "60000",
			bonusCurrency: "IHG Rewards Club",
			cardFree: "99",
			imageName: "amex-gold.jpeg", 
			minSpend: "1",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		},
		marriottRewards : {
			cardName: "Marriott Rewards MasterCard",
			cardBonus: "10000",
			bonusCurrency: "Marriott Rewards",
			cardFree: "125",
			imageName: "amex-gold.jpeg", 
			minSpend: "200",
			spendTimeLimit: "180",
			cardURL: "javascript:void(0);"
		},
		starwoodAmex : {
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: "10000",
			bonusCurrency: "Starwood Preferred Guest",
			cardFree: "75",
			imageName: "amex-gold.jpeg", 
			minSpend: "1000",
			spendTimeLimit: "90",
			cardURL: "javascript:void(0);"
		}
	]
})