import * as THREE from "three";

function createCube(scene: THREE.Scene) {
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;
  cube.position.set(-4, 4, 0);
  scene.add(cube);

  return cube;
}

function createSphere(scene: THREE.Scene) {
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(20, 0, 2);
  sphere.castShadow = true;

  scene.add(sphere);

  return sphere;
}

function createPlane(scene: THREE.Scene) {
  const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);

  scene.add(plane);
}

function createLight(scene: THREE.Scene) {
  const ambienLight = new THREE.AmbientLight(0x353535);
  scene.add(ambienLight);
  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-10, 20, -5);
  spotLight.castShadow = true;
  scene.add(spotLight);
}

export default {
  createLight,
  createSphere,
  createPlane,
  createCube,
};
