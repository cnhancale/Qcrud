const formatCurrency = (currency) => {
  const formatted = currency.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'MZN'
  })

  return formatted
}

export {
  formatCurrency
}
