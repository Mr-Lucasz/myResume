import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare.js";
import Stats from "three/examples/jsm/libs/stats.module";
import lensflare0 from "../assets/lensflare0.png";
import lensflare3 from "../assets/lensflare3.png";
import props from "prop-types";
import styles from "./Background.module.css";

export function Background({children}) {
  const mount = useRef(null);
  const stats = new Stats();

  useEffect(() => {
    // Create stats instance and append to mount
    mount.current.appendChild(stats.dom);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color().setHSL(
      0.51,
      0.4,
      0.01,
      THREE.SRGBColorSpace
    );
    scene.fog = new THREE.Fog(scene.background, 3500, 15000);

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      15000
    );
    camera.position.z = 500; // Ajuste na posição da câmera para 500

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 2000;
    controls.rollSpeed = Math.PI / 6;
    controls.autoForward = false;
    controls.dragToLook = false;

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.15);
    dirLight.position.set(0, -1, 0).normalize();
    dirLight.color.setHSL(0.1, 0.7, 0.5);
    scene.add(dirLight);

    const textureLoader = new THREE.TextureLoader();
    const textureFlare0 = textureLoader.load(lensflare0);
    const textureFlare3 = textureLoader.load(lensflare3);

    addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
    addLight(0.08, 0.8, 0.5, 0, 0, -1000);
    addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);
    addLight(0.995, 0.7, 0.7, 0, 5000, 1000);

    function addLight(h, s, l, x, y, z) {
      const light = new THREE.PointLight(0xffffff, 1.5, 2000, 0);
      light.color.setHSL(h, s, l);
      light.position.set(x, y, z);
      scene.add(light);

      const lensflare = new Lensflare();
      lensflare.addElement(
        new LensflareElement(textureFlare0, 700, 0, light.color)
      );
      lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
      lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));
      light.add(lensflare);
    }

    const geometry = new THREE.BoxGeometry(250, 250, 250); // Ajuste na escala dos cubos
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: 0xffffff,
      shininess: 50,
    });

    for (let i = 0; i < 3000; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = 8000 * (2.0 * Math.random() - 1.0);
      cube.position.y = 8000 * (2.0 * Math.random() - 1.0);
      cube.position.z = 8000 * (2.0 * Math.random() - 1.0);
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      cube.rotation.z = Math.random() * Math.PI;
      cube.matrixAutoUpdate = false;
      cube.updateMatrix();
      scene.add(cube);
    }

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.update(delta);
      renderer.render(scene, camera);
      stats.update();
      //rotation cube
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.x += 0.01;
          child.rotation.y += 0.01;
        }
      });
    }

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.current.removeChild(stats.dom);
    };
  }, []);

  return <div ref={mount} style={{ width: "100%", height: "100vh" }} className={styles.divBackground} >
    {children}
    </div>;
}

Background.propTypes = {
  children: props.node,
};
