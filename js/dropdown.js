function toggleDropdown(active) {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (active) {
      dropdownContent.classList.add('active');
    } else {
      dropdownContent.classList.remove('active');
    }
  }