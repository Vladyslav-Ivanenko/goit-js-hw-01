function makeTransaction(quantity, pricePerOrder) {
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerOrder
  } credits!`;
}
