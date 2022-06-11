// code your solution here
function saturdayFun(myStrings="roller-skate"){
    return `This Saturday, I want to ${myStrings}!`
}

function mondayWork(myStrings="go to the office"){
    return `This Monday, I will ${myStrings}.`
}

function wrapAdjective(myStings="*") {
    return function (myAdj = "special") {
        return `You are ${myStrings}${myAdj}${myStrings}!`;
      };
}
  
const encouragingPromptFunction = wrapAdjective()("a hard worker"); 