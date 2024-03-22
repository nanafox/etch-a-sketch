'use strict';

const container = document.querySelector('.grid-container');
const size = 16;

for (let i = 0; i < size; i++) {
  const column = document.createElement('div');
  column.id = `grid-col`;
  for (let j = 0; j < size; j++) {
    const square = document.createElement('div');
    square.classList = 'grid-row';
    column.append(square);
  }

  container.append(column);
}

document.querySelectorAll('.grid-row').forEach(row => row.addEventListener('mouseover', () => {
  row.classList.add('modify-bg');
}));
