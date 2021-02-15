//Ryan Lugo: RJL 2/15/21

//Level Categories
var beginner = 1;
var low = 10;
var medium = 20;
var high = 30;
var expert = 40;
var expertEnd = 50;

//Players Level
var pLevel = 40;

if (pLevel >= beginner && pLevel < low && !(pLevel <= 0))
{
console.log("You are part of the Beginners!");
}
else if(pLevel >= low && pLevel < medium && !(pLevel <= 0))
{
console.log("You are part of the Low group!");
}
else if(pLevel >= medium && pLevel < high && !(pLevel <= 0))
{
    console.log("You are part of the Medium group!");
}
else if(pLevel >= high && pLevel < expert && !(pLevel <= 0))
{
    console.log("You are part of the High group!");
}
else if(pLevel >= expert && pLevel <= expertEnd && !(pLevel <= 0))
{
    console.log("You are part of the Expert group!")
}
else
{
    console.log("Sorry, you didn't meet any of the requirements needed to join the groups!");
}