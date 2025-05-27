function highlight() {
    //Write your code here
  const strongEle = document.querySelectorAll('strong');
  strongEle.forEach(function(e) {
    e.style.color = 'rgb(0, 128, 0)';
  });
	
}


function return_normal() {
    //Write your code here
const strongEle = document.querySelectorAll('strong');
  strongEle.forEach(function(e) {
    e.style.color = 'rgb(0, 0, 0)';
  });
    
}
