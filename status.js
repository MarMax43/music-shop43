function checkOrderStatus() {
	const orderNumber = document.getElementById('order-number').value.trim()
	const statusMessage = document.getElementById('status-message')

	if (!orderNumber) {
		statusMessage.textContent = 'Пожалуйста, введите номер заказа.'
		statusMessage.style.color = 'red'
		return
	}

	// Пример проверки статуса заказа
	const mockOrders = {
		12345: 'Ваш заказ доставлен.',
		67890: 'Ваш заказ в пути.',
		11121: 'Ваш заказ обрабатывается.',
	}

	if (mockOrders[orderNumber]) {
		statusMessage.textContent = mockOrders[orderNumber]
		statusMessage.style.color = 'green'
	} else {
		statusMessage.textContent = 'Заказ с таким номером не найден.'
		statusMessage.style.color = 'red'
	}
}
