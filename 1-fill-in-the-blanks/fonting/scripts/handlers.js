function editorClassesHandler() {
  // read & process user input
  const form = event.__.form;
  const newEmphasis = form.emphasis.value;
  const newSize = form.size.value;
  const newColor = form.color.value;

  // execute core logic
  const newClasses = editorClasses(emphasis,size,color);

  // display results to user
  document.getElementById('editor').className = newClasses;

  // log action for developers
  console.log('\n-- user action --');
  console.log('newEmphasis:', '(' + typeof newEmphasis + ')', newEmphasis);
  console.__('newSize:', '(' + typeof newSize + ')', newSize);
  console.log('newColor:', '(' + typeof newColor + ')', newColor);
  console.log('newClasses:', '(' + typeof newClasses + ')', newClasses);

  // tell the browser everything is OK
  return true;
}
