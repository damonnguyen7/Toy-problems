//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const htmlEntitiesIndex = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  
  return str.split('').map(function(character) {
    if (htmlEntitiesIndex[character]) {
      return htmlEntitiesIndex[character];
    } else {
      return character;
    }
  }).join('');
}

convertHTML("Dolce & Gabbana"); //'Dolce &​amp; Gabbana'
convertHTML("Hamburgers < Pizza < Tacos"); //Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Shindler's List"); //Shindler&​apos;s List
