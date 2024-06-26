// Pulls a single random subclass from an array of 6
function returnSubclass() {
    const subclass = ["Arc", "Void", "Solar", "Stasis", "Strand", "Prismatic"]
    return subclass[Math.floor(Math.random() * 6)]
}

// Returns a single subclass
const returnChallengeSubclass = () => {
    let challenge = returnSubclass()
    return challenge;
  }

// Returns a random void or neutral exotic
function returnVoidExotic() {
    const voidExotic = ["Graviton Forfeit", "Triton Vice", "Dragon's Shadow", "Bombadiers"]
    return voidExotic[Math.floor(Math.random() * 4)]
}

// Returns a random arc or neutral exotic
function returnArcExotic() {
    const arcExotic = ["Liar's Handshake", "Aeon Swift", "Oathkeeper", "Gemini Jester"]
    return arcExotic[Math.floor(Math.random() * 4)]
}

// Returns a random solar or neutral exotic
function returnSolarExotic() {
    const solarExotic = ["Caliban's Hand", "Athrys's Embrace", "Young Ahamkara's Spine", "Foetracer"]
    return solarExotic[Math.floor(Math.random() * 4)]
}

// Returns a random stasis or neutral exotic
function returnStasisExotic() {
    const stasisExotic = ["Mask of Bakris", "Mechaneer's Tricksleeves", "Raiden Flux", "Frost-ee5"]
    return stasisExotic[Math.floor(Math.random() * 4)]
}

// Returns a random strand or neutral exotic
function returnStrandExotic() {
    const strandExotic = ["Cyrtarachne's Facade", "Lucky Pants", "Speedloader Slacks", "Stareater Scales"]
    return strandExotic[Math.floor(Math.random() * 4)]
}

// Returns a random exotic for prismatic classes
function returnPrismaticExotic() {
    const prismaticExotic = ["Dragon's Shadow", "Mask of Bakris", "Mothkeeper's Wraps", "Graviton Forfeit"]
    return prismaticExotic[Math.floor(Math.random() * 4)]
}

// Returns a random exotic weapon
function returnExoticWeapon() {
    const exoticWeapon = ["The Queenbreaker", "Ex Diris", "Edge of Concurance", "Parasite", "Necrochasm", "Wish-Keeper", "Malfeasance", "Forerunner", "Winterbite", "Two-Tailed Fox"]
    return exoticWeapon[Math.floor(Math.random() * 10)] 
}

// Returns a randomized loadout with matching exotics
challengeLoadout = () => {
    if(returnChallengeSubclass() == "Arc"){
        return "You will play Arc and use " + returnArcExotic() + " as your exotic armor piece and use " + returnExoticWeapon() + " as your exotic weapon.";
    } else if(returnChallengeSubclass() == "Solar"){
      return "You will play Solar and use " + returnSolarExotic() + " as your exotic armor piece and use " + returnExoticWeapon() + " as your exotic weapon."
    } else if(returnChallengeSubclass() == "Void"){
      return "You will play Void and use " + returnVoidExotic() + " as your exotic armor piece and use " + returnExoticWeapon() + " as your exotic weapon."
    } else if(returnChallengeSubclass() == "Stasis"){
      return "You will play Stasis and use " + returnStasisExotic() + " as your exotic armor piece and use " + returnExoticWeapon() + " as your exotic weapon."
    } else if(returnChallengeSubclass() == "Strand"){
      return "You will play Strand and use " + returnStrandExotic() + " as your exotic armor piece and use " + returnExoticWeapon() + " as your exotic weapon."
    } else{
      return "You will play Prismatic and use " + returnPrismaticExotic() + " as your exotic armor piece and use " + returnExoticWeapon() + " as your exotic weapon."
    }
}