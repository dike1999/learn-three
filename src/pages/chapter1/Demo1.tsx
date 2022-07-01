import React, { useEffect } from "react";
import * as THREE from "three";

const Demo1 = () => {
  useEffect(() => {
    console.log("Using Three.js version: " + THREE.REVISION);
  }, []);

  return <div>Three.js Version: {THREE.REVISION}</div>;
};

export default Demo1;
