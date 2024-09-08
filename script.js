function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//function for creating HTML elements generally
function createElement(type, props, ...children) {
  const $element = document.createElement(type);

  for (const prop in props) {
    $element[prop] = props[prop];
  }

  $element.append(...children);
  return $element;
}

//function for creating HTML elements of dot
function createDot() {
  return createElement('div', { className: 'dot' });
}

//function for creating dice with 0 dot
function createDice0($dominoesSection) {
  const $createDice0 = createElement('div', { className: 'dice dice-0' });
  $dominoesSection.append($createDice0);
}

//function for creating dice with 1 dot
function createDice1($dominoesSection) {
  const $createDice1 = createElement('div', { className: 'dice dice-1' }, createDot());
  $dominoesSection.append($createDice1);
}

//function for creating dice with 2 dots
function createDice2($dominoesSection) {
  const $createDice2 = createElement('div', { className: 'dice dice-2' }, createDot(), createDot());
  $dominoesSection.append($createDice2);
}

//function for creating dice with 3 dots
function createDice3($dominoesSection) {
  const $createDice3 = createElement('div', { className: 'dice dice-3' }, createDot(), createDot(), createDot());
  $dominoesSection.append($createDice3);
}

//function for creating dice with 4 dots
function createDice4($dominoesSection) {
  const $column41 = createElement('div', { className: 'column' }, createDot(), createDot());
  const $column42 = createElement('div', { className: 'column' }, createDot(), createDot());
  const $createDice4 = createElement('div', { className: 'dice dice-4' }, $column41, $column42 );
  $dominoesSection.append($createDice4);
}

//function for creating dice with 5 dots
function createDice5($dominoesSection) {
  const $column51 = createElement('div', { className: 'column' }, createDot(), createDot());
  const $column52 = createElement('div', { className: 'column' }, createDot());
  const $column53 = createElement('div', { className: 'column' }, createDot(), createDot());
  const $createDice5 = createElement('div', { className: 'dice dice-5' }, $column51, $column52, $column53 );
  $dominoesSection.append($createDice5);
}

//function for creating dice with 6 dots
function createDice6($dominoesSection) {
  const $column61 = createElement('div', { className: 'column' }, createDot(), createDot(), createDot());
  const $column62 = createElement('div', { className: 'column' }, createDot(), createDot(), createDot());
  const $createDice6 = createElement('div', { className: 'dice dice-6' }, $column61, $column62 );
  $dominoesSection.append($createDice6);
}

//function for creating HTML elements with the class of 'dominoes' 
function createDominoes() {
  const $gallery = document.getElementById('gallery');
  const $section1 = createElement('div', { className: 'dominoes-section' });
  const $section2 = createElement('div', { className: 'dominoes-section' });

  // call the appropriate function for creating dice based on the generated random number of dots
  var $numberOfDots1 = randomInt(0, 6);
  var $numberOfDots2 = randomInt(0, 6);

  if ($numberOfDots1 === 0) {
    createDice0($section1);
  } else if ($numberOfDots1 === 1) {
    createDice1($section1);
  } else if ($numberOfDots1 === 2) {
    createDice2($section1);
  } else if ($numberOfDots1 === 3) {
    createDice3($section1);
  } else if ($numberOfDots1 === 4) {
    createDice4($section1);
  } else if ($numberOfDots1 === 5) {
    createDice5($section1);
  } else if ($numberOfDots1 === 6) {
    createDice6($section1);
  }

  if ($numberOfDots2 === 0) {
    createDice0($section2);
  } else if ($numberOfDots2 === 1) {
    createDice1($section2);
  } else if ($numberOfDots2 === 2) {
    createDice2($section2);
  } else if ($numberOfDots2 === 3) {
    createDice3($section2);
  } else if ($numberOfDots2 === 4) {
    createDice4($section2);
  } else if ($numberOfDots2 === 5) {
    createDice5($section2);
  } else if ($numberOfDots2 === 6) {
    createDice6($section2);
  }

   const $dominoes = createElement('div', { className: 'dominoes' }, $section1, $section2);
   $gallery.append($dominoes);
}

// generate 50 dominoes
for (let i = 0; i < 50; i++) {
  createDominoes();
}