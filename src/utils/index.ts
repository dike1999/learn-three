import Stats from "stats.js";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

/**
 * Initialize The Statistics DOMElement
 *
 * @param {Number} type 0: fps, 1: ms, 2: mb, 3+: custom
 * @returns Stats Object
 */
export function initStats(type: number) {
  const stats = new Stats();
  stats.showPanel(type);
  document.body.appendChild(stats.dom);

  return stats;
}

/**
 * Initialize trackball controls to control the scene
 *
 * @param {THREE.Camera} camera
 * @param {THREE.Renderer} renderer
 */
export function initTrackballControls(
  camera: THREE.Camera,
  renderer: THREE.Renderer
) {
  const trackballControls = new TrackballControls(camera, renderer.domElement);

  trackballControls.rotateSpeed = 1.0;
  trackballControls.zoomSpeed = 1.2;
  trackballControls.panSpeed = 0.8;
  trackballControls.noZoom = false;
  trackballControls.noPan = false;
  trackballControls.staticMoving = true;
  trackballControls.dynamicDampingFactor = 0.3;
  trackballControls.keys = ["65", "83", "68"];

  return trackballControls;
}
