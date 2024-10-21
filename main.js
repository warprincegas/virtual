import * as THREE from "three";
import "./style.css";
import gsap from "gsap";
import { events } from "./Modules/eventsListeners.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function App() {
  let camera, scene, renderer, controls, raycaster, mouse;
  let points = [];

  const pointLabels = [
    "Entrance",
    "Main Hall",
    "Left Wing",
    "Right Wing",
    "Back Door",
  ];

  const pointImages = [
    "Mpape-Crushed-rock.jpeg",
    "Mpape-Crushed-rock.jpeg",
    "Mpape-Crushed-rock.jpeg",
    "Mpape-Crushed-rock.jpeg",
  ];

  const container = document.querySelector(".image");
  document.body.appendChild(container);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 0, 0.1);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("Abuja Central Mosgue.jpeg");

  const geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);

  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });
  const sphere = new THREE.Mesh(geometry, material);

  const group = new THREE.Group();
  group.add(sphere);
  scene.add(group);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;
  // events(controls);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  function createImagePoint(X, Y, Z, label, imagePath) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imagePath);

    const geometry = new THREE.CircleGeometry(0.3, 32);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      // transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.position.set(X, Y, Z);
    plane.lookAt(camera.position);
    group.add(plane);
    points.push(plane);

    plane.userData.label = label;
  }
  createImagePoint(-2.75, -1.24, -2.77, pointLabels[0], pointImages[0]);
  createImagePoint(0.73, 1.35, 4.88, pointLabels[1], pointImages[1]);
  createImagePoint(-3.12, 0.22, 3.13, pointLabels[2], pointImages[2]);
  createImagePoint(-2.13, 1.56, -4.64, pointLabels[3], pointImages[3]);

  function adjustPointScale() {
    const cameraPosition = new THREE.Vector3();
    camera.getWorldPosition(cameraPosition);

    points.forEach((point) => {
      const distance = cameraPosition.distanceTo(point.position);

      const scale = THREE.MathUtils.clamp((1 / distance) * 5, 0.1, 2);
      point.scale.set(scale, scale, scale);
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(points);

    points.forEach((point) => {
      point.scale.set(1, 1, 1);
    });
    document.body.style.cursor = "grab";
    const contentElement = document.getElementById("hover-content");
    adjustPointScale();

    if (intersects.length > 0) {
      const intersectedPoint = intersects[0].object;

      gsap.to(intersectedPoint.scale, { x: 1.5, y: 1.5, duration: 0.5 }); // Scale up on hover

      displayContent(intersectedPoint.userData.label);

      document.body.style.cursor = "pointer";
    } else {
      contentElement.style.display = "none";
    }

    controls.update();
    renderer.render(scene, camera);
  }

  animate();
  events(controls, mouse, camera, renderer, raycaster);

  function displayContent(label) {
    const contentElement = document.getElementById("hover-content");
    contentElement.style.display = "block";
    contentElement.innerText = `Point: ${label}`;

    const { width, height } = contentElement.getBoundingClientRect();

    contentElement.style.left = `${
      (mouse.x * window.innerWidth) / 2 + window.innerWidth / 2 - width / 2
    }px`;
    contentElement.style.top = `${
      (-mouse.y * window.innerHeight) / 2 + window.innerHeight / 2 - height / 2
    }px`;
  }
}

App();
