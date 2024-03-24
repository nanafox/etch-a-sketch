'use strict';

const container = document.querySelector('.grid-container');

function drawGrid (size) {
  // let's use default grid size of 16 pixels if we don't an input
  if (size === undefined) size = 16;
  for (let i = 0; i < size; i++) {
    const column = document.createElement('div');
    column.classList = `grid-col`;
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList = 'grid-row';
      if (size <= 16) square.style.padding = '0.6em';
      else if (size <= 60) square.style.padding = '0.4em';
      else square.style.padding = '0.2em';
      column.append(square);
    }

    container.append(column);
  }

  document.querySelectorAll('.grid-row').forEach(row => row.addEventListener('mouseover', () => {
    row.classList.add('modify-bg');
  }));
}

document.querySelector('#set-grid-size-btn').addEventListener('click', () => {
  const gridSize = parseInt(prompt('Size of grid (Max: 100)'));

  if (gridSize > 100) {
    alert('The maximum size of the grid must be 100.');
  } else if (gridSize < 1 || isNaN(gridSize)) {
    console.warn('The minimum size of the size must be 1.');
  }else {
    container.replaceChildren();
    drawGrid(gridSize);
    document.body.append(container);
  }
});

drawGrid();
