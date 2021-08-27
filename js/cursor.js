const circleSvg = document.querySelector('svg');

window.addEventListener('mousemove', (event) => {
	circleSvg.style.top = event.clientY - 25;
	circleSvg.style.left = event.clientX - 30;
});

