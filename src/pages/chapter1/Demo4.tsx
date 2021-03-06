import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { initStats } from "../../utils/index";
import model from "./models/model4";

const Demo4 = () => {
  const stats = initStats(0);
  const demo = useRef<HTMLDivElement>(null);

  const init = () => {
    const scene = new THREE.Scene();

    const cube = model.createCube(scene);
    const sphere = model.createSphere(scene);
    model.createPlane(scene);
    model.createLight(scene);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    demo.current?.replaceChildren(renderer.domElement);

    // call the render function
    let step = 0;

    function render() {
      stats.update();
      // rotate the cube around its axes
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      cube.rotation.z += 0.02;

      // bounce the sphere up and down
      step += 0.04;
      sphere.position.x = 20 + 10 * Math.cos(step);
      sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

      // render using requestAnimationFrame
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    render();
  };

  useEffect(() => {
    init();
  }, []);

  return <div ref={demo}></div>;
};

export default Demo4;
