
// https://github.com/RKDATTA/third-assignment

//kilometerToMeter
function kilometerToMeter(km){
    var meter = km * 1000;
    if(km > 1){
        return meter;
    }
    else 
        console.log("Pls put a valid number from 0 ~")
}    
    
var result = kilometerToMeter(6)
console.log(result);


//budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var costWatch = watch*50;
    var costPhone = phone*100;
    var costLaptop = laptop*500; 

    var totalCost = costWatch + costPhone + costLaptop;

    return totalCost;
}
var result = budgetCalculator(1,2,3)
console.log(result);




//hotelCost
function hotelCost(numDays){
    var cost = 0;

    if(numDays <= 10){
        cost = numDays * 100;
    }

    else if( numDays <=20){
        var costFirstPhase = 10*100;
        var remaining = numDays - 10;
        var costSecondPhase = remaining * 80;
        cost = costFirstPhase + costSecondPhase;
    }
    else{
        costFirstPhase = 10*100;
        costSecondPhase = 10*80;
        var remaining = numDays - 20;
        var costThirdPhase = remaining * 50;
        cost = costFirstPhase + costSecondPhase + costThirdPhase;
    }

    return cost;
}
var totalCost = hotelCost(22);
console.log(totalCost);





//megaFriend
var myFriend = ["Imran", "Skylab", "Md.Ullah", "Rumjhum", "Sony"];
var megaFriend = function(myFriend){
    var longest = myFriend.reduce(function(a,b){
    return (a.length > b.length) ? a : b;
  });
    return longest;
}
longName = megaFriend(myFriend);
console.log(longName);