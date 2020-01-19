export const addItemToCart = (cart, item) => {
  const cartItems = [...cart];

  const index = cartItems.findIndex(i => i.id === item.id);

  if (index > -1) {
    cartItems[index].quantity++;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }

  return cartItems;
};

export const removeItemFromCart = (cart, item) => {
  const cartItems = [...cart];

  const index = cartItems.findIndex(i => i.id === item.id);

  if (index > -1) {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
    } else {
      cartItems.splice(index, 1);
    }
  }

  return cartItems;
};

export const clearItemFromCart = (cartItems, item) =>
  cartItems.filter(i => i.id !== item.id);

export const getCartCount = cartItems =>
  cartItems.reduce((acc, val) => acc + val.quantity, 0);
