import  { useEffect, useRef } from "react";
import * as THREE from "three";
import { Lensflare, LensflareElement } from 'three/addons/objects/Lensflare.js';
import lensflare0 from "../assets/lensflare0.png";
import lensflare3 from "../assets/lensflare3.png";



const Background = () => {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for Lensflare

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1.5, 2000); // A light source for the Lensflare
    scene.add(light);

    const textureLoader = new THREE.TextureLoader();

    const textureFlare0 = textureLoader.load(lensflare0);
    const textureFlare3 = textureLoader.load(lensflare3);

    const lensflare = new Lensflare();
    lensflare.addElement(new LensflareElement(textureFlare0, 700, 0));
    lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
    // lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
    // lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
    // lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));

    light.add(lensflare); // Add the Lensflare to the light source

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={mount} />;
};

export default Background;