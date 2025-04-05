// Import the three library

// 1. Create the scene

// 2. Add the camera

// 3. Create and add a cube object

// 4. Add lighting

// 5. Setup the renderer

// 6. Animate the scene

import * as THREE from "three";

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshLambertMaterial({
    color: "#468585",
    emissive: "#468585",
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.DirectionalLight(0xffffff, 10);
  light.position.set(5, 5, 5);
  scene.add(light);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    renderer.render(scene, camera);
  }

  return (
    <>
      {(() => {
        camera.position.z = 5;
        animate();
      })()}
    </>
  );
}

export default App;
