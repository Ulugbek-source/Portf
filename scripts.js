// Анимация вращения квадрата и движения круга
function animateShapes() {
	const square = document.querySelector('.square')
	const circle = document.querySelector('.circle')

	// Анимация для квадрата (крутится на месте)
	let angle = 0
	function rotateSquare() {
		angle += 0.5
		square.style.transform = `rotate(${angle}deg)`
		requestAnimationFrame(rotateSquare)
	}

	// Анимация для круга (движется по экрану)
	let positionX = 0
	let positionY = 0
	let directionX = 1
	let directionY = 1
	function moveCircle() {
		if (positionX > window.innerWidth - 200 || positionX < 0) {
			directionX *= -1
		}
		if (positionY > window.innerHeight - 200 || positionY < 0) {
			directionY *= -1
		}

		positionX += directionX * 2
		positionY += directionY * 2

		circle.style.transform = `translate(${positionX}px, ${positionY}px)`

		requestAnimationFrame(moveCircle)
	}

	// Запуск анимаций
	rotateSquare()
	moveCircle()
}
// Запуск анимаций после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
	animateShapes()
})
// Плавный скроллинг при клике на навигационные ссылки
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const targetId = this.getAttribute('href').substring(1)
		const targetElement = document.getElementById(targetId)

		window.scrollTo({
			top: targetElement.offsetTop - 50, // Учитываем небольшой отступ
			behavior: 'smooth',
		})
	})
})
