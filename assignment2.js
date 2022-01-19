function filterSentences(){
  document.getElementById("output-list").innerHTML = '';
  document.getElementById('output-label').innerHTML = 'Output:';
  let inputParagraph = document.getElementById('input-paragraph').value;
  const inputWords = inputParagraph.split(" ");
  let temp = 0;
  let node;
  let textnode;
  let sentence;
  for(var i = 0; i < inputWords.length; i++) {
    if(!isNaN(inputWords[i])) {
      inputWords[i] = '\'' + "X".repeat(inputWords[i].length) + '\'';
    }
    if(['.', '!', '?'].includes(inputWords[i].charAt(inputWords[i].length - 1) )) {
      sentence = inputWords.slice(temp, i+1).join(' ');
      temp = i+1;
      node = document.createElement("li");
      textnode = document.createTextNode(sentence);
      node.appendChild(textnode);
      document.getElementById("output-list").appendChild(node);
    }
  }
}

function sortTeams(){
  document.getElementById('team-output').innerHTML = "";
  document.getElementById('team-output-label').innerHTML = 'Output:';
  let inputString, result;
  try {
    inputString = JSON.parse(document.getElementById('input-team-json').value);
    var keys = Object.keys(inputString);
    result = keys.sort(function(x, y) {
      return inputString[y] - inputString[x]
    });
    document.getElementById('team-output').innerHTML += result.join("<br>");
  } catch (e) {
    document.getElementById('team-output').innerHTML = 'Invalid JSON';
  }
   
}



