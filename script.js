window.onload = function () {

  setTimeout(() => {
    document.getElementById("pookiContainer").style.borderColor = "transparent";
  }, 5000);

  setTimeout(() => {
    document.getElementById("h1-hi-pookies").style.color = "#f7f7ff";
  }, 5000);

  setTimeout(() => {
    document.getElementById("h1-hi-pookies").style.borderColor = "#f7f7ff";
  }, 5000);

  setTimeout(() => {
    document.getElementById("h1-hi-pookies").style.borderColor = "transparent";
  }, 9500);

  setTimeout(() => {
    document.getElementById("h2-say").style.borderColor = "transparent";
  }, 16500);

  setTimeout(() => {
    document.getElementById("firstB").style.opacity = 1;
  }, 16500);

  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /android|linux|mac|iphone|ipad|ipod|mobile/i.test(userAgent);

  // Get the log <p> element
  const logElement = document.getElementById("log-output");
  if (logElement) {
    logElement.innerHTML += `<strong>userAgent:</strong> ${userAgent}<br>`;
    logElement.innerHTML += `<strong>isMobile:</strong> ${isMobile}<br>`;
  }


  //Button Click**************
  document.getElementById("firstB").addEventListener("click", function () {
    const verify = document.getElementById("verify");
    verify.style.display = "flex";

    if (isMobile) {

      document.getElementById("main-wrapper").style.display = "none";

      setTimeout(() => {
        document.getElementById("laptop").style.opacity = 1;
        document.getElementById("h3-laptop").style.opacity = 1;
      }, 5000);

      setTimeout(() => {
        document.getElementById("verify-cont").style.opacity = 0;
      }, 5000);

    }
    else {

      setTimeout(() => {
        document.getElementById("container").style.display = "none";
        document.getElementById("main-wrapper").style.display = "block";
        document.getElementById("message-container").style.display = "flex";
      }, 5000);

      setTimeout(() => {
        document.getElementById("message-text").style.opacity = 1;
      }, 5500);

      setTimeout(() => {
        document.getElementById("encryption").style.opacity = 1;
      }, 6500);

      setTimeout(() => {
        document.getElementById("encryption-text").style.opacity = 1;
      }, 8000);

      setTimeout(() => {
        document.getElementById("secondB").style.opacity = 1;
      }, 7500);

    }

  });
  //*************************************************************** */
  const finalText = "ഞാൻ നിങ്ങളെ സ്നേഹിക്കുന്നു കൂട്ടുകാരെ";
  const chars = "!@#$%^&*()_+{}[]<>?/\\|~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const scrambleElement = document.getElementById("encryption-text");
  const button = document.getElementById("secondB");

  function scrambleTextEffect(element, text, duration = 2000) {
    const length = text.length;
    const frameRate = 30; // ms per frame
    const totalFrames = Math.floor(duration / frameRate);
    let frame = 0;

    const interval = setInterval(() => {
      let display = '';
      for (let i = 0; i < length; i++) {
        if (frame / totalFrames > i / length) {
          display += text[i];
        } else {
          display += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.textContent = display;

      if (frame >= totalFrames) {
        clearInterval(interval);
        element.textContent = text; // ensure exact final text
      }
      frame++;
    }, frameRate);
  }

  button.addEventListener("click", () => {
    scrambleTextEffect(scrambleElement, finalText, 3000); // 2 second animation
    button.style.background = "#62ab65";
    button.style.color = "#0a001e";
    button.style.animation = "none";

    setTimeout(() => {
      button.textContent = "Decrypted!!!";
    }, 3000);
    setTimeout(() => {
      document.getElementById("video-container").style.display = "flex";
      document.getElementById("scroll").style.opacity = 1;
    }, 7000);
  });

  const iframe = document.getElementById("videoFrame");

  document.getElementById("video-head-one").addEventListener("click", () => {
    iframe.src = "https://www.youtube.com/embed/-rf1L5q8hwE?autoplay=1&mute=0";
  });

  document.getElementById("video-head-two").addEventListener("click", () => {
    iframe.src = "https://www.youtube.com/embed/cKZ_uoWVlvI?autoplay=1&mute=0";
  });

  document.getElementById("video-head-one").addEventListener("click", () => {
  document.getElementById("video-head-one").style.opacity = 0;
  document.getElementById("video-head-one").style.zIndex = 0;
    setTimeout(() => {
      document.getElementById("video-head-two").style.opacity = 1;
    }, 5000);
  });

  const videoHeadTwo = document.getElementById("video-head-two");
  videoHeadTwo.addEventListener("click", () => {
    videoHeadTwo.style.background = "#F7F7FF";
    videoHeadTwo.style.color = "#0a001e";
    videoHeadTwo.style.animation = "none";

    setTimeout(() => {
      document.getElementById("cringe-text").style.opacity = 1;
    }, 10000);

    setTimeout(() => {
      document.getElementById("sheri-text").style.opacity = 1;
    }, 12000);

    setTimeout(() => {
      document.getElementById("wave").style.opacity = 1;
    }, 13000);
  });

};


