fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    const sidebarContainer = document.getElementById('sidebar-container');
    sidebarContainer.innerHTML = data;
  })
  .catch(error => {
    console.error('Error fetching sidebar:', error);
  });