import { OrbitControls } from "three-stdlib";
import { toggleFullscreen } from "./fullScreen.js";

export function events(controls, mouse, camera, renderer, raycaster) {
  document.querySelectorAll("span , i, .share-links-cont").forEach((elem) => {
    elem.addEventListener("mouseover", () => {
      controls.enabled = false;
    });
  });

  document.querySelectorAll("span , i , .share-links-cont").forEach((elem) => {
    elem.addEventListener("mouseout", () => {
      controls.enabled = true;
    });
  });

  document.querySelector(".help").addEventListener("click", () => {
    document
      .querySelector(".controls-options")
      .classList.toggle("show-controls-option");
    document
      .querySelector(".share-links-cont")
      .classList.remove("show-share-links-cont");
  });

  document
    .querySelector(".close-controls-options i")
    .addEventListener("click", () => {
      document
        .querySelector(".controls-options")
        .classList.remove("show-controls-option");
    });

  document.querySelector(".tour").addEventListener("click", () => {
    const tourIcon = document.querySelector(".tour i");

    if (tourIcon.classList.contains("fa-pause")) {
      tourIcon.classList.replace("fa-pause", "fa-play");
      document.querySelector(".tour").setAttribute("title", "Start Auto Tour");
      controls.autoRotate = false;
    } else {
      tourIcon.classList.replace("fa-play", "fa-pause");
      document.querySelector(".tour").setAttribute("title", "Stop Auto Tour");
      controls.autoRotate = true;
    }
  });
  // document.querySelector(".tour").addEventListener("click", () => {
  //   !newAnimate();
  // });

  document.querySelector(".share").addEventListener("click", () => {
    document.querySelector(
      ".share-links-cont"
    ).innerHTML = ` <div class="share-link">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=${window.location.href}"
          target="_blank"
        >
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a
          href="https://api.whatsapp.com/send?text=Check%20this%20out!%20${window.location.href}"
          target="_blank"
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        <a
          href="mailto:?subject=Check%20this%20out!&body=I%20found%20this%20interesting%20item%20on%20${window.location.href}"
          target="_blank"
        >
          <ion-icon name="mail-unread-outline"></ion-icon>
        </a>
      </div>`;
    document
      .querySelector(".share-links-cont")
      .classList.toggle("show-share-links-cont");

    document
      .querySelector(".controls-options")
      .classList.remove("show-controls-option");
  });

  document
    .querySelector(".screen-size")
    .addEventListener("click", toggleFullscreen);

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", onWindowResize);

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("touchstart", () => (controls.enabled = true));
  window.addEventListener("touchmove", () => (controls.enabled = true));

  window.addEventListener("touchend", onTouchEnd, false);

  function onTouchEnd(event) {
    document.body.style.cursor = "default";
  }
}

// function animate() {
//   requestAnimationFrame(animate);

//   raycaster.setFromCamera(mouse, camera);
//   const intersects = raycaster.intersectObjects(points);

//   points.forEach((point) => {
//     point.scale.set(1, 1, 1);
//   });

//   document.body.style.cursor = "grab";
//   const contentElement = document.getElementById("hover-content");
//   adjustPointScale();

//   if (intersects.length > 0) {
//     const intersectedPoint = intersects[0].object;
//     gsap.to(intersectedPoint.scale, { x: 1.5, y: 1.5, duration: 0.5 });

//     displayContent(intersectedPoint.userData.label);
//     document.body.style.cursor = "pointer";
//   } else {
//     contentElement.style.display = "none";
//   }

//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();
