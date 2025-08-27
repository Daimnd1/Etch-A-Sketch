function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hoverOverSquare(target){
  target.style.backgroundColor = `${getRandomColor()}`;
  let opacity = parseFloat(target.style.opacity);
  if (opacity !== 1) target.style.opacity = `${opacity + 0.1}`; 
  console.log(target.style.opacity);
}

function updateGrid(){
  divGridContainer.innerHTML = '';
  arrayDivSquares = [];
  for (let i = 0; i < numberOfSquaresPerSide**2; i++){
    let squareWidth = Math.floor(containerWidth / numberOfSquaresPerSide);
    arrayDivSquares.push(document.createElement('div'));
    arrayDivSquares[i].classList.add('square');
    arrayDivSquares[i].style.cssText = `width: ${squareWidth}px;
    height: ${squareWidth}px;
    border: 1px solid rgb(44, 44, 44);
    opacity: 0;`;
    arrayDivSquares[i].addEventListener('mouseover', (e) => hoverOverSquare(e.target));
  }

  arrayDivSquares.forEach((square) => divGridContainer.appendChild(square));
}

const body = document.querySelector('body');
const divGridContainer = document.querySelector('#grid-container');
const buttonSetNumberOfSquaresPerSide = document.querySelector('#edit-grid');

const containerWidth = 640;
divGridContainer.style.cssText = `width: ${containerWidth}px;`

let arrayDivSquares = [];
let numberOfSquaresPerSide = 16;

buttonSetNumberOfSquaresPerSide.style.cssText = `background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 44px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 20px 32px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

buttonSetNumberOfSquaresPerSide.addEventListener('click', () => {
  do{
    numberOfSquaresPerSide = prompt('Set the number of squares per side [1...99]:');
  } while (numberOfSquaresPerSide > 99 || numberOfSquaresPerSide < 1);
  updateGrid();
});

updateGrid();

