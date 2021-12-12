const getMoney = (): number => {
  return 100000
}
type GetMoneyType = ReturnType<getMoney> //number
