function highlight(table) {
  for (let tr of table.querySelector('tbody').querySelectorAll('tr')) {
    let status = tr.children[3];
  
    if (status.dataset.available == "true") {
      tr.classList.add("available");
    }
    else if (status.dataset.available == "false") {
      tr.classList.add("unavailable");
      } 
    else {
      tr.hidden = true;
    }
    
    
    let gender = tr.children[2];
    
    if (gender.textContent == "m") {
      tr.classList.add("male");
    } 
    else if (gender.textContent == "f") {
      tr.classList.add("female");
    }
    
    let age = tr.children[1];
  
    if (+age.textContent < 18) {
      tr.style.textDecoration = 'line-through';
    }
  }
  
}
