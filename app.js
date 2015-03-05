angular.module("creditcardApp", []);

angular.module("creditcardApp").controller("creditcardCtrl", function($scope) {

	$scope.cards = [
		{
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: 22000,
			bonusCurrency: "Membership Rewards",
			cardFee: 125,
			imageName: "amex-gold.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:gold&journey=B&intlink=uk-amex-cardshop-goldcard-detail-applynow-main"
		},
		{
			cardName: "American Express Platinum",
			cardBonus: 35000,
			bonusCurrency: "Membership Rewards",
			cardFee: 450,
			imageName: "amex-platinum.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:platinum_charge&journey=B&intlink=uk-amex-cardshop-platinumcard-detail-applynow-main"
		},
		{
			cardName: "British Airways American Express",
			cardBonus: 3000,
			bonusCurrency: "Avios",
			cardFee: 0,
			imageName: "ba.jpg", 
			minSpend: 500,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:triCredit&journey=B&intlink=uk-amex-cardshop-britishairwaysamericanexpresscreditcard-detail-applynow-main"
		},
		{
			cardName: "British Airways American Express Premium Plus",
			cardBonus: 18000,
			bonusCurrency: "Avios",
			cardFee: 125,
			imageName: "ba-premium-plus.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga3/uk/pers/begin.do?perform=IntlEapp:UK:triPremiumPlus&intlink=uk-amex-cardshop-BritishAirwaysPremiumPlus-detail-applynow-main"
		},
		{
			cardName: "Lloyds Avios Rewards American Express & MasterCard",
			cardBonus: 0,
			bonusCurrency: "",
			cardFee: 24,
			imageName: "lloyds-rewards.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_LAvios_HP2812"
		},
		{
			cardName: "Lloyds Premier Avios Rewards American Express & MasterCard",
			cardBonus: 0,
			bonusCurrency: "",
			cardFee: 140,
			imageName: "lloyds-premier.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_LAviosPremier_HP2812"
		},
		{
			cardName: "Lloyds Choice Rewards American Express & MasterCard",
			cardBonus: 0,
			bonusCurrency: "",
			cardFee: 24,
			imageName: "lloyds-choice.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.lloydsbank.co.uk/personal/a/apply_credit_card/PS_Lloyds_Choice2812"
		},
		{
			cardName: "TSB Avios American Express & MasterCard",
			cardBonus: 0,
			bonusCurrency: "",
			cardFee: 0,
			imageName: "tsb.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.tsb.co.uk/personal/a/apply_credit_card/PS_TSBDuoAvios"
		},
		{
			cardName: "TSB Premier Avios American Express & MasterCard",
			cardBonus: 0,
			bonusCurrency: "",
			cardFee: 0,
			imageName: "tsb-premier.jpg", 
			minSpend: 0,
			spendTimeLimit: 0,
			cardURL: "https://apply.tsb.co.uk/personal/a/apply_credit_card/PS_TSBPremierDuo"
		},
		{
			cardName: "Virgin Atlantic White American Express & Visa",
			cardBonus: 10000,
			bonusCurrency: "Virgin Flying Club",
			cardFee: 0,
			imageName: "virgin-white.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "http://www.virgin-atlantic.com/gb/en/flying-club/credit-card/bonus-white-card.html"
		},
		{
			cardName: "Virgin Atlantic Black American Express & Visa",
			cardBonus: 25000,
			bonusCurrency: "Virgin Flying Club",
			cardFee: 14,
			imageName: "virgin-black.jpg", 
			minSpend: 2000,
			spendTimeLimit: 90,
			cardURL: "http://www.virgin-atlantic.com/gb/en/flying-club/credit-card/bonus-black-card.html"
		},
		{
			cardName: "Hilton HHonors Platinum Visa",
			cardBonus: 1,
			bonusCurrency: "Free stay at Hilton property",
			cardFee: 125,
			imageName: "hilton.jpg", 
			minSpend: 750,
			spendTimeLimit: 90,
			cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/hilton"
		},
		{
			cardName: "IHG Rewards Club Visa",
			cardBonus: 30000,
			bonusCurrency: "IHG Rewards Club",
			cardFee: 0,
			imageName: "ihg.jpg", 
			minSpend: 1,
			spendTimeLimit: 90,
			cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/ihg"
		},
		{
			cardName: "IHG Rewards Club Premium Visa",
			cardBonus: 60000,
			bonusCurrency: "IHG Rewards Club",
			cardFee: 99,
			imageName: "ihg-premier.jpg", 
			minSpend: 1,
			spendTimeLimit: 90,
			cardURL: "http://www.barclaycard.co.uk/personal/credit-cards/ihg-premium"
		},
		{
			cardName: "Marriott Rewards MasterCard",
			cardBonus: 10000,
			bonusCurrency: "Marriott Rewards",
			cardFee: 125,
			imageName: "marriott.jpg", 
			minSpend: 200,
			spendTimeLimit: 180,
			cardURL: "https://apply.creation.co.uk/microsites/marriott/?termsAndConditionsCode=MC5307&MC=29990017&operatorCode=WebMC&responseCode=MRRHP4"
		},
		{
			cardName: "American Express Preferred Rewards Gold",
			cardBonus: 10000,
			bonusCurrency: "Starwood Preferred Guest",
			cardFee: 75,
			imageName: "spg.jpg", 
			minSpend: 1000,
			spendTimeLimit: 90,
			cardURL: "https://www252.americanexpress.com/inga/uk/pers/begin.do?perform=IntlEapp:UK:triCredit&journey=B&intlink=uk-amex-cardshop-britishairwaysamericanexpresscreditcard-detail-applynow-main"
		}
	];

	$scope.predicate = "-cardBonus";
})