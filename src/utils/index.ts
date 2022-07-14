import Stats from "stats.js";

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
