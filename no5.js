function getSplitName(personName) {
  if (typeof personName === "string"){
    let name = personName.split(" ");
    if (name.length === 3){
      return {
        firstName : name[0],
        middleName : name[1],
        lastName : name[2],
      };
    } else if (name.length === 2) {
      return {
        firstName : name[0],
        middleName : null,
        lastName : name[1],
      };
    } else if (name.length === 1) {
      return {
      firstName : name[0],
      middleName : null,
      lastName : null,
      };
    } else {
      return "eror"
    }
  } else {
    return "eror"
  }
}

console.log (getSplitName("Aldi Daniela Perhata"));
console.log (getSplitName("Dewi Kuncoro"));
console.log (getSplitName("Aurora"));
console.log (getSplitName("Aurora Aurilia Sukma Darma"));
console.log (getSplitName("8"));