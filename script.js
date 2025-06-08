window.onload = function () {
    setTimeout(() => {
      document.getElementById("h1-hi-pookies").style.borderColor = "transparent";
    }, 4000);
  
    setTimeout(() => {
      document.getElementById("h2-say").style.borderColor = "transparent";
    }, 9000);
  
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|linux|mac|iphone|ipad|ipod|mobile/i.test(userAgent);
  
    // Get the log <p> element
    const logElement = document.getElementById("log-output");
  
    if (logElement) {
      logElement.innerHTML += `<strong>userAgent:</strong> ${userAgent}<br>`;
      logElement.innerHTML += `<strong>isMobile:</strong> ${isMobile}<br>`;
    }
  
    if (isMobile) {
      setTimeout(() => {
        document.getElementById("laptop").style.opacity = 1;
        document.getElementById("h3-laptop").style.opacity = 1;
      }, 8000);
    }
  };
  
  
  
