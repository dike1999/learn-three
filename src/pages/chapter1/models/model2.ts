import * as THREE from "three";

// 平面+坐标轴
const createPlaneAxes = (scene: THREE.Scene) => {
  const planeGeometry = new THREE.PlaneGeometry(60, 20);
  const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xaaaaaa,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  scene.add(plane);
  const axes = new THREE.AxesHelper(50);
  scene.add(axes);
};

// 正方体
const createCube = (scene: THREE.Scene) => {
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(-4, 3, 0);
  scene.add(cube);
};

// 球
const createSphere = (scene: THREE.Scene) => {
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(20, 4, 2);
  scene.add(sphere);
};

export default {
  createCube,
  createPlaneAxes,
  createSphere,
};
