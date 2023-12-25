// Set Tab 1 as active on page load
document.getElementById('tab1').style.display = 'block';

function openTab(tabIndex) {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function (tabContent) {
        tabContent.style.display = 'none';
    });

    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active-tab');
    });

    // Show the selected tab content
    var selectedTab = document.getElementById('tab' + tabIndex);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Add active class to the selected tab
    tabs[tabIndex - 1].classList.add('active-tab');
}