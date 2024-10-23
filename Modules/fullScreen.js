// const document.body = document.;

export function toggleFullscreen() {
  const screenIcon = document.querySelector(".screen-size ion-icon");

  if (!document.fullscreenElement) {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    }
    screenIcon.name = "scan-circle-outline";
    document.querySelector(".screen-size").title = "Exit Enter Full Screen";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    screenIcon.name = "scan-outline";
    document.querySelector(".screen-size").title = "Enter Full Screen";
  }
}
