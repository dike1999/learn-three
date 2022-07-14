import * as THREE from "three";

function createCube(scene: THREE.Scene) {
  // create a cube
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;
  cube.position.set(-4, 2, 0);

  scene.add(cube);
}

function createSphere(scene: THREE.Scene) {
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(20, 4, 2);
  sphere.castShadow = true;
  scene.add(sphere);
}

function createPlane(scene: THREE.Scene) {
  const planeGeometry = new THREE.PlaneGeometry(60, 20);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xaaaaaa,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  plane.receiveShadow = true;
  scene.add(plane);
}

function createLight(scene: THREE.Scene) {
  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-40, 40, -15);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
  spotLight.shadow.camera.far = 130;
  spotLight.shadow.camera.near = 40;

  // If you want a more detailled shadow you can increase the mapSize used to draw the shadows.
  spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
  scene.add(spotLight);

  const ambienLight = new THREE.AmbientLight(0x353535);
  scene.add(ambienLight);
}

function createBoundingWall(scene: THREE.Scene) {
  const wallLeft = new THREE.BoxGeometry(70, 2, 2);
  const wallRight = new THREE.BoxGeometry(70, 2, 2);
  const wallTop = new THREE.BoxGeometry(2, 2, 50);
  const wallBottom = new THREE.BoxGeometry(2, 2, 50);

  const wallMaterial = new THREE.MeshLambertMaterial({
    color: 0xa0522d,
  });

  const wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial);
  const wallRightMesh = new THREE.Mesh(wallRight, wallMaterial);
  const wallTopMesh = new THREE.Mesh(wallTop, wallMaterial);
  const wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial);

  wallLeftMesh.position.set(15, 1, -25);
  wallRightMesh.position.set(15, 1, 25);
  wallTopMesh.position.set(-19, 1, 0);
  wallBottomMesh.position.set(49, 1, 0);

  scene.add(wallLeftMesh);
  scene.add(wallRightMesh);
  scene.add(wallBottomMesh);
  scene.add(wallTopMesh);
}

function createTree(scene: THREE.Scene) {
  const trunk = new THREE.BoxGeometry(1, 8, 1);
  const leaves = new THREE.SphereGeometry(4);

  // create the mesh
  const trunkMesh = new THREE.Mesh(
    trunk,
    new THREE.MeshLambertMaterial({
      color: 0x8b4513,
    })
  );
  const leavesMesh = new THREE.Mesh(
    leaves,
    new THREE.MeshLambertMaterial({
      color: 0x00ff00,
    })
  );

  // position the trunk. Set y to half of height of trunk
  trunkMesh.position.set(-10, 4, 0);
  leavesMesh.position.set(-10, 12, 0);

  trunkMesh.castShadow = true;
  trunkMesh.receiveShadow = true;
  leavesMesh.castShadow = true;
  leavesMesh.receiveShadow = true;

  scene.add(trunkMesh);
  scene.add(leavesMesh);
}

function createGroundPlane(scene: THREE.Scene) {
  // create the ground plane
  const planeGeometry = new THREE.PlaneGeometry(70, 50);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0x9acd32,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  scene.add(plane);
}

function createHouse(scene: THREE.Scene) {
  const roof = new THREE.ConeGeometry(5, 4);
  const base = new THREE.CylinderGeometry(5, 5, 6);

  // create the mesh
  const roofMesh = new THREE.Mesh(
    roof,
    new THREE.MeshLambertMaterial({
      color: 0x8b7213,
    })
  );
  const baseMesh = new THREE.Mesh(
    base,
    new THREE.MeshLambertMaterial({
      color: 0xffe4c4,
    })
  );

  roofMesh.position.set(25, 8, 0);
  baseMesh.position.set(25, 3, 0);

  roofMesh.receiveShadow = true;
  baseMesh.receiveShadow = true;
  roofMesh.castShadow = true;
  baseMesh.castShadow = true;

  scene.add(roofMesh);
  scene.add(baseMesh);
}

export default {
  createBoundingWall,
  createTree,
  createLight,
  createSphere,
  createHouse,
  createGroundPlane,
  createPlane,
  createCube,
};
