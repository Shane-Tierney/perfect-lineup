const validateLineup = (lineup) => {
  const pos = positionCheck(lineup)
  const game = gameCheck(lineup)
  console.log(game)


  const salaryCheck = lineup.reduce((total, currentPlayer) => {
    const { salary } = currentPlayer

    return total + salary
  }, 0)

  if (salaryCheck > 45000) {
    return false
  } else if (pos === false) {
    return false
  } else return true
}

const positionCheck = (lineup) => {
  const of = outfield(lineup)
  const pit = pitcher(lineup)
  const oneB = firstBase(lineup)
  const twoB = secondBase(lineup)
  const threeB = thirdBase(lineup)
  const cat = catcher(lineup)
  const ss = shortStop(lineup)


  if (of && pit && oneB && twoB && threeB && cat && ss) {
    return true
  } else return false
}

const outfield = (lineup) => {
  const outfieldCheck = lineup.filter((player) => player.position === 'OF')


  if (outfieldCheck.length !== 3) {
    return false
  } else return true
}

const pitcher = (lineup) => {
  const pitcherCheck = lineup.filter((player) => player.position === 'P')

  if (pitcherCheck.length !== 1) {
    return false
  } else return true
}

const firstBase = (lineup) => {
  const firstCheck = lineup.filter((player) => player.position === '1B')

  if (firstCheck.length !== 1) {
    return false
  } else return true
}

const secondBase = (lineup) => {
  const secondCheck = lineup.filter((player) => player.position === '2B')

  if (secondCheck.length !== 1) {
    return false
  } else return true
}

const thirdBase = (lineup) => {
  const thirdCheck = lineup.filter((player) => player.position === '3B')

  if (thirdCheck.length !== 1) {
    return false
  } else return true
}

const catcher = (lineup) => {
  const catcherCheck = lineup.filter((player) => player.position === 'C')

  if (catcherCheck.length !== 1) {
    return false
  } else return true
}

const shortStop = (lineup) => {
  const shortCheck = lineup.filter((player) => player.position === '2B')

  if (shortCheck.length !== 1) {
    return false
  } else return true
}

const gameCheck = (lineup) => {
  const count = {}
  const gameArray = []

  for (let i = 0; i < lineup.length; i++) {
    const element = lineup[i]

    gameArray.push(element.gameID)
  }
console.log(gameArray)
  for (const element of gameArray) {
    if (count[element]) {
      count[element] += 1
    } else {
      count[element] = 1
    }
  }

  return count
}

module.exports = validateLineup
