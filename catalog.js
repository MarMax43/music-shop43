// Массив для хранения товаров в корзине
let cart = []

// Функция для отображения деталей товара
function showProductDetails(name, imageSrc, price, description) {
	const modal = document.getElementById('product-modal')
	const modalName = document.getElementById('modal-product-name')
	const modalImage = document.getElementById('modal-product-image')
	const modalDescription = document.getElementById('modal-product-description')
	const modalPrice = document.getElementById('modal-price')

	// Сохранение текущего товара в атрибутах модального окна
	modal.dataset.name = name
	modal.dataset.image = imageSrc
	modal.dataset.price = price

	// Обновление модального окна
	modalName.textContent = name
	modalImage.src = imageSrc
	modalDescription.textContent = description
	modalPrice.textContent = price.toLocaleString() + ' ₽'

	modal.style.display = 'block'
}

// Функция для закрытия модального окна
function closeProductModal() {
	const modal = document.getElementById('product-modal')
	modal.style.display = 'none'
}

// Функция для добавления товара в корзину
function addToCart() {
	const modal = document.getElementById('product-modal')

	// Получение информации о товаре из модального окна
	const name = modal.dataset.name
	const imageSrc = modal.dataset.image
	const price = parseInt(modal.dataset.price, 10)

	// Добавление товара в массив корзины
	const existingItemIndex = cart.findIndex(item => item.name === name)
	if (existingItemIndex !== -1) {
		// Если товар уже есть в корзине, увеличиваем его количество
		cart[existingItemIndex].quantity += 1
	} else {
		// Если товара нет, добавляем новый элемент
		cart.push({
			name,
			imageSrc,
			price,
			quantity: 1,
		})
	}

	alert('Товар добавлен в корзину!')
	console.log('Текущая корзина:', cart)
}

// Функция для отображения корзины на странице корзины (опционально)
function renderCart() {
	const cartContainer = document.getElementById('cart-items')
	const cartTotalElement = document.getElementById('cart-total')

	// Очистка предыдущего содержимого корзины
	cartContainer.innerHTML = ''

	// Подсчет общей суммы
	let total = 0

	// Генерация HTML для каждого товара в корзине
	cart.forEach(item => {
		const itemTotal = item.price * item.quantity
		total += itemTotal

		const itemElement = document.createElement('div')
		itemElement.classList.add('cart-item')
		itemElement.innerHTML = `
      <img src="${item.imageSrc}" alt="${item.name}" />
      <div class="item-info">
        <p><strong>${item.name}</strong></p>
        <p>Цена: ${item.price.toLocaleString()} ₽</p>
        <p>Количество: ${item.quantity}</p>
        <p>Итого: ${itemTotal.toLocaleString()} ₽</p>
      </div>
    `
		cartContainer.appendChild(itemElement)
	})

	// Обновление общей суммы
	cartTotalElement.innerHTML = `<p>Общая сумма: <strong>${total.toLocaleString()} ₽</strong></p>`
}
// Функция для добавления товара в корзину
function addToCart() {
  const modal = document.getElementById("product-modal");

  // Получаем информацию о товаре из модального окна
  const name = modal.dataset.name;
  const image = modal.dataset.image;
  const price = parseInt(modal.dataset.price, 10);

  // Получаем текущую корзину из localStorage или создаем новую
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Проверяем, есть ли уже такой товар в корзине
  const existingItemIndex = cart.findIndex((item) => item.name === name);

  if (existingItemIndex !== -1) {
    // Если товар уже есть, увеличиваем количество
    cart[existingItemIndex].quantity++;
  } else {
    // Если товара нет, добавляем его в корзину
    cart.push({
      name,
      image,
      price,
      quantity: 1,
    });
  }

  // Сохраняем обновленную корзину в localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Товар добавлен в корзину!");
}
// Функция для отображения деталей товара в модальном окне
function showProductDetails(name, image, price, description) {
  // Найти модальное окно
  const modal = document.getElementById("product-modal");

  // Установить данные товара в модальном окне
  modal.dataset.name = name;
  modal.dataset.image = image;
  modal.dataset.price = price;

  document.getElementById("modal-product-name").innerText = name;
  document.getElementById("modal-product-image").src = image;
  document.getElementById("modal-product-description").innerText = description;

  // Показать модальное окно
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeProductModal() {
  const modal = document.getElementById("product-modal");
  modal.style.display = "none";
}

// Функция для добавления товара в корзину
function addToCart() {
  const modal = document.getElementById("product-modal");

  // Получаем данные товара из модального окна
  const name = modal.dataset.name;
  const image = modal.dataset.image;
  const price = parseInt(modal.dataset.price, 10);
  const quantity = parseInt(document.getElementById("quantity").value, 10);

  // Получаем текущую корзину из localStorage или создаем новую
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Проверяем, есть ли уже такой товар в корзине
  const existingItemIndex = cart.findIndex((item) => item.name === name);

  if (existingItemIndex !== -1) {
    // Если товар уже есть, увеличиваем его количество
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Если товара нет, добавляем его в корзину
    cart.push({
      name,
      image,
      price,
      quantity,
    });
  }

  // Сохраняем обновленную корзину в localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Товар добавлен в корзину!");
  closeProductModal(); // Закрываем модальное окно
}

// Закрытие модального окна при клике вне его содержимого
window.onclick = function (event) {
  const modal = document.getElementById("product-modal");
  if (event.target === modal) {
    closeProductModal();
  }
};
function showProductDetails(name, image, price, description, composition) {
	const modal = document.getElementById('product-modal')

	// Установка данных товара
	modal.dataset.name = name
	modal.dataset.image = image
	modal.dataset.price = price

	document.getElementById('modal-product-name').innerText = name
	document.getElementById('modal-product-image').src = image
	document.getElementById('modal-product-description').innerText = description
	document.getElementById('modal-price').innerText = `${price} ₽`

	// Очистка и добавление новой комплектации
	const compositionList = document.getElementById('modal-product-composition')
	compositionList.innerHTML = ''
	composition.forEach(item => {
		const listItem = document.createElement('li')
		listItem.innerText = item
		compositionList.appendChild(listItem)
	})

	// Показ модального окна
	modal.style.display = 'block'
}

function closeProductModal() {
	document.getElementById('product-modal').style.display = 'none'
}

function addToCart() {
	const modal = document.getElementById('product-modal')

	const name = modal.dataset.name
	const image = modal.dataset.image
	const price = parseInt(modal.dataset.price, 10)
	const quantity = parseInt(document.getElementById('quantity').value, 10)

	let cart = JSON.parse(localStorage.getItem('cart')) || []
	const existingItemIndex = cart.findIndex(item => item.name === name)

	if (existingItemIndex !== -1) {
		cart[existingItemIndex].quantity += quantity
	} else {
		cart.push({ name, image, price, quantity })
	}

	localStorage.setItem('cart', JSON.stringify(cart))
	alert('Товар добавлен в корзину!')
	closeProductModal()
}

window.onclick = function (event) {
	const modal = document.getElementById('product-modal')
	if (event.target === modal) {
		closeProductModal()
	}
}
// Открытие модального окна с информацией о товаре
function showProductDetails(name, imageSrc, price, description, composition) {
  const modal = document.getElementById('product-modal');
  document.getElementById('modal-product-name').textContent = name;
  document.getElementById('modal-product-image').src = imageSrc;
  document.getElementById('modal-product-description').textContent = description;
  document.getElementById('modal-price').textContent = `${price} ₽`;

  // Очистка списка комплектации
  const compositionList = document.getElementById('modal-product-composition');
  compositionList.innerHTML = '';
  composition.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    compositionList.appendChild(li);
  });

  modal.style.display = 'block';
}

// Закрытие модального окна
function closeProductModal() {
  document.getElementById('product-modal').style.display = 'none';
}

// Добавление товара в корзину
function addToCart() {
  const productName = document.getElementById('modal-product-name').textContent;
  const productPrice = document.getElementById('modal-price').textContent;
  const productImage = document.getElementById('modal-product-image').src;

  // Получаем данные корзины из localStorage (или создаем пустую корзину)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Добавляем товар в корзину
  cart.push({ name: productName, price: productPrice, image: productImage });
  
  // Сохраняем обновленную корзину
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${productName} добавлен(а) в корзину!`);
}

// Обработчик закрытия модального окна при клике вне его
window.onclick = function(event) {
  const modal = document.getElementById('product-modal');
  if (event.target === modal) {
    closeProductModal();
  }
};
