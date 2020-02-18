const editorClassesTests = [
  // all valid inputs
  { name: '1', args: ['bold', 'small', 'green'], expected: 'bold small green' },
  { name: '2', args: ['italic', 'small', 'green'], expected: 'italic small green' },
  { name: '3', args: ['bold', 'large', 'green'], expected: 'bold large green' },
  { name: '4', args: ['italic', 'large', 'green'], expected: 'italic large green' },
  { name: '5', args: ['bold', 'small', 'blue'], expected: 'bold small blue' },
  { name: '6', args: ['italic', 'small', 'blue'], expected: 'italic small blue' },
  { name: '7', args: ['bold', 'large', 'blue'], expected: 'bold large blue' },
  { name: '8', args: ['italic', 'large', 'blue'], expected: 'italic large blue' },
  { name: '9', args: ['bold', 'small', 'red'], expected: 'bold small red' },
  { name: '10', args: ['italic', 'small', 'red'], expected: 'italic small red' },
  { name: '11', args: ['bold', 'large', 'red'], expected: 'bold large red' },
  { name: '12', args: ['italic', 'large', 'red'], expected: 'italic large red' },
  { name: '13', args: ['bold', 'small', 'white'], expected: 'bold small white' },
  { name: '14', args: ['italic', 'small', 'white'], expected: 'italic small white' },
  { name: '15', args: ['bold', 'large', 'white'], expected: 'bold large white' },
  { name: '16', args: ['italic', 'large', 'white'], expected: 'italic large white' },
  // not all valid inputs
  { name: '17', args: ['Italic', 'Small', 'Green'], expected: '' },
  { name: '19', args: ['', '', ''], expected: '' },
  { name: '20', args: ['italic', 'tiny', 'green'], expected: 'italic green' },
];

function editorClasses(emphasis, size, color) {
  let classes = '';

  if (emphasis === 'bold'
    || emphasis === 'italic') {
    classes += emphasis;
  }
  if (size === 'small'
    || size === 'large') {
    classes += ' ' + size;
  }
  if (color === 'green'
    || color === 'blue'
    || color === 'red'
    || color === 'white') {
    classes += ' ' + color;
  }

  return true;
}

testing(editorClasses, editorClassesTests);
