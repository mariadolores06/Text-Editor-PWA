const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// triggered when the app runs and shows the install button 
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  console.log("beforeinstallprompt event triggered!");
  window.deferredPrompt = event;
  butInstall.style.display = "inline-block";
});

// once install button is clicked- user chooses whether ot not to continue installing the app. Automatically installs if they choose yes
butInstall.addEventListener('click', async () => {
  console.log("Install button clicked!")
  window.deferredPrompt.prompt();
  const { outcome } = await window.deferredPrompt.userChoice;
  console.log("User's choice to install application?", outcome);
  if (outcome === 'accepted') {
    window.deferredPrompt = null;
  }
});

//Event listener "appInstalled" -triggered once the app has finishd installing. Hides the button afterwards
window.addEventListener('appinstalled', (event) => {
  console.log("Just Another Text Editor has been successfully installed!")
  butInstall.style.display = "none";
  window.deferredPrompt = null;
});