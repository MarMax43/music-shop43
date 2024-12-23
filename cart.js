// Функция для отображения товаров в корзине
function displayCart() {
	// Получаем товары из localStorage
	let cart = JSON.parse(localStorage.getItem('cart')) || []

	// Получаем контейнер для товаров корзины
	let cartItemsContainer = document.getElementById('cart-items')

	// Очистить контейнер, чтобы избежать дублирования
	cartItemsContainer.innerHTML = ''

	// Переменная для подсчета общей суммы
	let totalPrice = 0

	// Перебираем все товары в корзине и отображаем их
	cart.forEach((item, index) => {
		// Создаем элементы для каждого товара
		let itemDiv = document.createElement('div')
		itemDiv.classList.add('cart-item')

		itemDiv.innerHTML = `
            <img src="${item.image}" alt="Товар" />
            <div class="item-info">
                <p><strong>${item.name}</strong></p>
                <p>Цена: ${item.price} ₽</p>
            </div>
            <div class="item-actions">
                <button onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${index})">+</button>
                <button onclick="removeItem(${index})">
                    Удалить
                </button>
            </div>
        `

		// Добавляем товар в корзину
		cartItemsContainer.appendChild(itemDiv)

		// Обновляем общую сумму
		totalPrice += item.price * item.quantity
	})

	// Отображаем общую сумму
	document.getElementById('total-price').innerText = `${totalPrice} ₽`
}

// Функция для увеличения количества товара
function increaseQuantity(index) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	cart[index].quantity++
	localStorage.setItem('cart', JSON.stringify(cart))
	displayCart()
}

// Функция для уменьшения количества товара
function decreaseQuantity(index) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	if (cart[index].quantity > 1) {
		cart[index].quantity--
		localStorage.setItem('cart', JSON.stringify(cart))
		displayCart()
	}
}

// Функция для удаления товара из корзины
function removeItem(index) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	cart.splice(index, 1) // Удаляем товар по индексу
	localStorage.setItem('cart', JSON.stringify(cart)) // Обновляем localStorage
	displayCart() // Перерисовываем корзину
}

// Функция для перехода к оплате (пока не реализована)
function proceedToPayment() {
	alert('Переход к оплате...')
}

// Загружаем корзину при загрузке страницы
window.onload = function () {
	displayCart()
}
