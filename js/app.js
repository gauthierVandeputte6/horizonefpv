const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el))

function navigateToPage(url) {
    window.location.href = url;
  }
  
  // Event listeners for buttons
  document.getElementById('servicesButton').addEventListener('click', function() {
    navigateToPage('Services.html');
  });
  
  document.getElementById('contactButton').addEventListener('click', function() {
    navigateToPage('Contact.html');
  });