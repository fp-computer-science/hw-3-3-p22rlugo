//Ryan Lugo: RJL 2/15/21

//Lockpicking Level
var lPickLevel = 50;

var neededLevel = 30;

//Luck Level
var luckLevel = 10;

var neededLuck = 70;

//Condition
if (lPickLevel > neededLevel || luckLevel > neededLuck)
{
    console.log("You have picked the lock with the needed Lock pick level or Luck needed level!");
}
else
{
    console.log("You weren't able to pick the lock, because you didn't meet either of the requirements!");
}