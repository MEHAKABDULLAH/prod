const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.card-button');

const colors = ['#8BC34A', '#4CAF50', '#FF9800', '#2196F3']; // Add more colors as needed

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    cards[index].style.backgroundColor = randomColor;
  });
});





