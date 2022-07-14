import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import model from "./models/model3";

const Demo3 = () => {
  const demo = useRef<HTMLDivElement>(null);

  const init = () => {
    const scene = new THREE.Scene();

    model.createCube(scene);
    model.createPlane(scene);
    model.createSphere(scene);
    model.createSpotLight(scene);
    model.createTree(scene);
    model.createHouse(scene);
    model.createGroundPlane(scene);
    model.createBoundingWall(scene);

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
    render.shadowMap.enabled = true;

    demo.current?.replaceChildren(render.domElement);
    render.render(scene, camera);
  };

  useEffect(() => {
    init();
  }, []);

  return <div ref={demo}></div>;
};

export default Demo3;
