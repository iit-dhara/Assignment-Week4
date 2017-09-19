var main = function () {
	"use strict";
	console.log("Hello!!!");

	$.getJSON("C:/Users/DCS/Desktop/ITMD562/Assignment_Week4_DharaBhavsar/twoPairHand.json", function (hand) {
			var handRanks,result = [], pair = [],count = 0;
			var rank1 = ["two","three","four","five","six","seven","eight",
				"nine","ten","jack","queen","king","ace"];
		// create our array of hand ranks
		handRanks = hand.map(function (card) {
		return card.rank;		

		 });
		console.log(handRanks);

		for (var i = 0 ; i < rank1.length; i++){
			count =0;
				for(var j = 0; j < handRanks.length; j++){
				if(rank1[i] === handRanks[j]){
					count++;
				}
			}
			result[i] = count
			// console.log (result[i] = count);
			if(result[i] === 2){
				pair++;
			}
		}
		
		console.log("Pair of hand is " + pair);			

	});

	$.getJSON("C:/Users/DCS/Desktop/ITMD562/Assignment_Week4_DharaBhavsar/fourOfTheKind.json", function (hand) {
			var handRanks,result = [], pair = [],count = 0;
			var rank1 = ["two","three","four","five","six","seven","eight",
				"nine","ten","jack","queen","king","ace"];
			var value;
		// create our array of hand ranks
		handRanks = hand.map(function (card) {
		return card.rank;		

		 });
		console.log(handRanks);

		for (var i = 0 ; i < rank1.length; i++){
			count =0;
				for(var j = 0; j < handRanks.length; j++){
				if(rank1[i] === handRanks[j]){
					count++;
				}
			}
			result[i] = count
			// console.log (result[i] = count);
			if(result[i] === 4){
				value = 4;
			}
		}
		console.log("This is four of the kind hand "+ value);
	
	});	

	$.getJSON("C:/Users/DCS/Desktop/ITMD562/Assignment_Week4_DharaBhavsar/threeOfTheKind.json", function (hand) {
			var handRanks,result = [], pair = [],count = 0;
			var rank1 = ["two","three","four","five","six","seven","eight",
				"nine","ten","jack","queen","king","ace"];
			var value;
		// create our array of hand ranks
		handRanks = hand.map(function (card) {
		return card.rank;		

		 });
		console.log(handRanks);

		for (var i = 0 ; i < rank1.length; i++){
			count =0;
				for(var j = 0; j < handRanks.length; j++){
				if(rank1[i] === handRanks[j]){
					count++;
				}
			}
			result[i] = count
			// console.log (result[i] = count);
			if(result[i] === 3){
				value = 3;
			}
		}
		console.log("This is three of the kind hand "+ value);
	
	});	

	$.getJSON("C:/Users/DCS/Desktop/ITMD562/Assignment_Week4_DharaBhavsar/fullHouse.json", function (hand) {
			var handRanks,result = [], pair = [],count = 0;
			var rank1 = ["two","three","four","five","six","seven","eight",
				"nine","ten","jack","queen","king","ace"];
			var value;
		// create our array of hand ranks
		handRanks = hand.map(function (card) {
		return card.rank;		

		 });
		console.log(handRanks);

		for (var i = 0 ; i < rank1.length; i++){
			count =0;
				for(var j = 0; j < handRanks.length; j++){
				if(rank1[i] === handRanks[j]){
					count++;
				}
			}
			result[i] = count
			console.log (result[i] = count);
			if((result[i] === 3) || (result[i] === 2)){
				value = "full house";
			}
		}
		console.log("This is  "+ value);
	});	


	$.getJSON("C:/Users/DCS/Desktop/ITMD562/Assignment_Week4_DharaBhavsar/flush.json", function (hand) {
			var handRanks,result = [], pair = [],count = 0;
			var rank1 = ["two","three","four","five","six","seven","eight",
				"nine","ten","jack","queen","king","ace"];
			var value;
			var suit = ["hearts","spades","clubs","diamonds"];
		// create our array of hand ranks
		handRanks = hand.map(function (card) {
		return card.rank;		

		 });

		var handSuit = hand.map(function(card){
			return card.suit;
		});
		console.log(handRanks);
		console.log(handSuit);


		for (var i = 0 ; i < suit.length; i++){
			count =0;
				for(var j = 0; j < handSuit.length; j++){
				if(suit[i] === handSuit[j] ){
					count++;
				}
			}
			result[i] = count;
			// console.log (result[i] = count);
			if((result[i] === 5)){
				value = "flush";
			}
		}
		console.log("This is  "+ value);
	});	
};	

$(document).ready(main);
