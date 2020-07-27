function handler(event) {
  // read user input
  const noun = event.target.form.noun.value;
  const verb = event.target.form.verb.value;
  const adjective = event.target.form.adjective.value;
  const adverb = event.target.form.adverb.value;

  // create madlib
  const madlib = buildMadlib(noun, verb, adjective, adverb);

  // render result to the DOM
  document.getElementById('madlib-goes-here').innerHTML = madlib;

  // log user action
  console.log('\n -- user action --');
  console.log('noun:', typeof noun + ',', noun);
  console.log('verb:', typeof verb + ',', verb);
  console.log('adjective:', typeof adjective + ',', adjective);
  console.log('adverb:', typeof adverb + ',', adverb);
  console.log('madlib:', typeof madlib + ',', madlib);
}
