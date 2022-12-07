//  Create a function called getStateAbbreviation
//  It will take a single parameter called state
//  function will return the abbreviation


function getStateAbbreviation(state){
    const stateNames = {
        Alabama: "al",
        Alaska: "ak",
        Arizona: "az",
        Arkansas: "ar",
    };

    return stateNames[state];

}

console.log(getStateAbbreviation("Alabama"));

function getMultipleStateAbbrevations(...states){
    console.log(states);
    let stateAbbreviations = states.map(state=> getStateAbbreviation(state));
    
    console.log(stateAbbreviations);
    return stateAbbreviations.join(", ");
}

console.log(getMultipleStateAbbrevations("Alabama", "Arkansas"));