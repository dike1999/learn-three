import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Demo2 = () => {
  const demo = useRef<HTMLDivElement>(null);

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

  const init = () => {
    const scene = new THREE.Scene();

    createPlaneAxes(scene);
    createCube(scene);
    createSphere(scene);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    const render = new THREE.WebGLRenderer();
    render.setClearColor(new THREE.Color(0x000000));
    render.setSize(window.innerWidth, window.innerHeight);
    demo.current?.appendChild(render.domElement);
    render.render(scene, camera);
  };

  useEffect(() => {
    init();
  }, []);

  return <div ref={demo}></div>;
};

export default Demo2;
