// Открытие модального окна
function proceedToPayment() {
	// Получаем общую сумму из корзины
	let totalPrice = document.getElementById('total-price').innerText

	// Обновляем итоговую сумму в модальном окне
	document.getElementById('final-price').innerText = totalPrice

	// Показываем модальное окно
	document.getElementById('payment-modal').style.display = 'flex'
}

// Закрытие модального окна
function closePaymentModal() {
	document.getElementById('payment-modal').style.display = 'none'
}

// Подтверждение платежа
function confirmPayment() {
	// Получаем данные из формы
	const address = document.getElementById('address').value
	const paymentMethod = document.getElementById('payment-method').value
	const deliveryMethod = document.getElementById('delivery-method').value

	if (!address) {
		alert('Пожалуйста, введите адрес.')
		return
	}

	// Можно добавить логику для отправки данных на сервер или дальнейшую обработку

	alert('Оплата успешно произведена! Ваш заказ будет доставлен.')
	closePaymentModal()
}
