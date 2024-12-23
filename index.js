// index.js

// Функция для добавления товара в корзину
function addToCart(name, image, price) {
	let cart = localStorage.getItem('cart')
	cart = cart ? JSON.parse(cart) : []

	const existingItemIndex = cart.findIndex(item => item.name === name)

	if (existingItemIndex !== -1) {
		// Если товар уже есть в корзине, увеличиваем количество
		cart[existingItemIndex].quantity += 1
	} else {
		// Если товара нет в корзине, добавляем новый
		cart.push({
			name: name,
			image: image,
			price: price,
			quantity: 1,
		})
	}

	localStorage.setItem('cart', JSON.stringify(cart))

	alert(`${name} добавлен в корзину!`)
}
