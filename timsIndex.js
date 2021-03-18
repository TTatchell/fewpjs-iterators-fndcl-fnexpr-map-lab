

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {



  for (i=0; i < tutorials.length; i++) {
    
    const words = tutorials[i].split(' ');

    //Take each word
    for (k=0; k < words.length; k++) {
      words[k] = words[k][0].toUpperCase() +words[k].slice(1)
    }

    tutorials[i] = "";


    //Add the words back into an array
    for (j=0; j < words.length; j++) {
      if (j === 0) {
        tutorials[i] = tutorials[i] + words[j]
      }
      else {


      tutorials[i] = tutorials[i] + " " + words[j]}

  
    }
    
    
      
    }
    return tutorials;
    
  


  return tutorials
}


console.log(titleCased())