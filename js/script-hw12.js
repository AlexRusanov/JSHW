const bannersWrapper = document.querySelector(".images-wrapper"),
      bannersOnBtn = document.createElement("button"),
      bannersOffBtn = document.createElement("button"),
      onScreenTimer = document.createElement("p"),
      setOnScreenTimer = () => {
          bannersWrapper.after(onScreenTimer);

          let now = new Date().getTime(),
              onScreenTimerEnd = now + 10000;

          onScreenTimerId = setInterval(() => {
              now = new Date().getTime();

              let milisecondsLeft = onScreenTimerEnd - now,
                  seconds = Math.floor((milisecondsLeft % (1000 * 60)) / 1000),
                  miliseconds = Math.floor(milisecondsLeft - seconds*1000);

              onScreenTimer.innerHTML = `Banner change in ${seconds}sec ${miliseconds}milisec`;

              if (milisecondsLeft < 0) {
                  onScreenTimerEnd = now + 10000;
              }
          }, 1);
      },
      bannerFadeIn = (banner) => {
          $(banner).delay(500).fadeIn(500);
      },
      bannerFadeOut = (banner) => {
          $(banner).fadeOut(500);
      },
      setTimer = () => {
          timerId = setInterval(() => {
              bannerFadeOut(activeBanner);
              if (activeBanner.nextElementSibling) {
                  activeBanner = activeBanner.nextElementSibling;
              } else {
                  activeBanner = firstBanner;
              }
              bannerFadeIn(activeBanner);
          }, 10000);
      };

bannersOnBtn.innerText = "Возобновить показ";
bannersOffBtn.innerText = "Прекратить";

let timerId,
    onScreenTimerId,
    firstBanner = bannersWrapper.firstElementChild,
    activeBanner = firstBanner;

bannerFadeIn(activeBanner);
document.querySelector("script").before(bannersOnBtn);
document.querySelector("script").before(bannersOffBtn);

setTimer();
setOnScreenTimer();

bannersOffBtn.onclick = () => {
    clearInterval(timerId);
    clearInterval(onScreenTimerId);
    onScreenTimer.remove();
};

bannersOnBtn.onclick = () => {
    setTimer();
    setOnScreenTimer();
};