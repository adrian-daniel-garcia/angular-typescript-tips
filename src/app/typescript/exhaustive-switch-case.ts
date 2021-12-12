enum Directions {
  Left,
  Right
}

const turnTowards = randomEnum(Directions)

switch (turnTowards) {
  case Directions.Right:
    console.log('we\'re going right!')
    break
  case Directions.Left:
    console.log('Turning left!')
    break

  // if the enum changes this is a safe guard
  default:
    const exhaustiveCheck: never = turnTowards
    throw new Error(exhaustiveCheck)
}

/////////////////////////////////////////////////

function randomEnum(Direction: any): Directions {
  throw new Error('Function not implemented.');
}

