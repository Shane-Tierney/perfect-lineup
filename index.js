const validateLineup = (lineup) => {
  const pos = positionCheck(lineup)
  const game = gameCheck(lineup)
  const team = teamCheck(lineup)
  const salary = salaryChecker(lineup)

  if (pos && game && team && salary) {
    return true
  } else return false
}

const salaryChecker = (lineup) => {
  const salaryCheck = lineup.reduce((total, currentPlayer) => {
    const { salary } = currentPlayer

    return total + salary
  }, 0)

  if (salaryCheck > 45000) {
    return false
  } else return true
}

const salaryChecked = (lineup) => {
  const sal = salaryChecker(lineup)

  if (sal > 45000) {
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

const teamCheck = (lineup) => {
  const uniqueTeams = [...new Set(lineup.map(player => player.teamId))]

  for (let i = 0; i < uniqueTeams.length; i++) {
    const currentTeam = uniqueTeams[i]

    const currentLineup = lineup.filter((player) => player.teamId === currentTeam).length

    if (currentLineup > 2) {
      return false
    }
  }

  return true
}

const gameCheck = (lineup) => {
  const uniqueTeams = [...new Set(lineup.map(player => player.gameId))]

    for (let i = 0; i < uniqueTeams.length; i++) {
    const currentTeam = uniqueTeams[i]

    const currentLineup = lineup.filter((player) => player.gameId === currentTeam).length

    if (currentLineup > 2) {
      return false
    }
  }

  return true
}

module.exports = validateLineup
