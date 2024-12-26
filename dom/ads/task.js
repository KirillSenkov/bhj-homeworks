function spin(rotator) {
    const items = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
  
    function setNewText() {
      items[currentIndex].classList.remove('rotator__case_active');
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add('rotator__case_active');
    }
  
    setInterval(setNewText, 1000);
  }
  
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(rotator => spin(rotator));