"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

export function Preloader3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isWebGLLogoReady, setIsWebGLLogoReady] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !overlay) return;

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrame = 0;
    let finishTimer = 0;
    let stopped = false;

    const group = new THREE.Group();
    group.rotation.set(-0.08, -0.45, 0);
    group.visible = false;
    scene.add(group);

    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d376f,
      metalness: 0.48,
      roughness: 0.3,
    });
    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.05, 0.18, 72),
      edgeMaterial,
    );
    cylinder.rotation.x = Math.PI / 2;
    group.add(cylinder);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xf7941d,
      metalness: 0.35,
      roughness: 0.25,
      emissive: 0x7a3b00,
      emissiveIntensity: 0.16,
    });
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.08, 0.035, 18, 96),
      ringMaterial,
    );
    ring.position.z = 0.105;
    group.add(ring);

    const orbitMaterial = new THREE.MeshStandardMaterial({
      color: 0x8dc63f,
      emissive: 0x4b7417,
      emissiveIntensity: 0.45,
      metalness: 0.25,
      roughness: 0.3,
    });
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(1.34, 0.014, 12, 120),
      orbitMaterial,
    );
    orbit.rotation.set(1.02, 0.15, 0.22);
    group.add(orbit);

    const satelliteGeometry = new THREE.SphereGeometry(0.055, 20, 20);
    const satelliteMaterial = new THREE.MeshStandardMaterial({
      color: 0xf7941d,
      emissive: 0xc45b00,
      emissiveIntensity: 0.65,
      metalness: 0.2,
      roughness: 0.2,
    });
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    group.add(satellite);

    const logoMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.05,
      roughness: 0.52,
    });
    const logoFace = new THREE.Mesh(
      new THREE.CircleGeometry(1, 72),
      logoMaterial,
    );
    logoFace.position.z = 0.105;
    group.add(logoFace);

    const backFace = new THREE.Mesh(
      new THREE.CircleGeometry(1, 72),
      logoMaterial,
    );
    backFace.position.z = -0.105;
    backFace.rotation.y = Math.PI;
    group.add(backFace);

    const texture = new THREE.TextureLoader().load("/logo.jpg", (loaded) => {
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.anisotropy = renderer?.capabilities.getMaxAnisotropy() ?? 1;
      logoMaterial.map = loaded;
      logoMaterial.needsUpdate = true;
      if (!stopped && renderer) {
        group.visible = true;
        setIsWebGLLogoReady(true);
        gsap.fromTo(
          group.scale,
          { x: 0.55, y: 0.55, z: 0.55 },
          {
            x: 1,
            y: 1,
            z: 1,
            duration: reducedMotion ? 0.01 : 0.9,
            ease: "back.out(1.7)",
          },
        );
      }
    });

    scene.add(new THREE.HemisphereLight(0xffffff, 0x102a68, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(3, 3, 5);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x8dc63f, 7, 8);
    rimLight.position.set(-2.5, 1, 2.5);
    scene.add(rimLight);

    const resize = () => {
      const size = Math.min(window.innerWidth * 0.58, 260);
      renderer?.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      resize();
      window.addEventListener("resize", resize);

      const clock = new THREE.Clock();
      const render = () => {
        if (stopped || !renderer) return;
        const elapsed = clock.getElapsedTime();
        if (!reducedMotion) {
          group.rotation.y = -0.45 + Math.sin(elapsed * 1.5) * 0.34;
          group.rotation.x = -0.08 + Math.sin(elapsed * 1.1) * 0.05;
          group.position.y = Math.sin(elapsed * 2) * 0.045;
          orbit.rotation.z = elapsed * 0.32;
          satellite.position.set(
            Math.cos(elapsed * 1.35) * 1.3,
            Math.sin(elapsed * 1.35) * 0.72,
            0.38 + Math.sin(elapsed * 0.8) * 0.18,
          );
        }
        renderer.render(scene, camera);
        animationFrame = window.requestAnimationFrame(render);
      };
      render();
    } catch {
      // Le texte et le fond restent visibles si WebGL n'est pas disponible.
    }

    const finish = () => {
      gsap.to(overlay, {
        autoAlpha: 0,
        duration: reducedMotion ? 0.15 : 0.65,
        ease: "power2.inOut",
        onComplete: () => {
          document.documentElement.dataset.loaderComplete = "true";
          window.dispatchEvent(new Event("site-loader-complete"));
          setIsVisible(false);
        },
      });
    };

    finishTimer = window.setTimeout(finish, reducedMotion ? 650 : 3200);

    return () => {
      stopped = true;
      window.clearTimeout(finishTimer);
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      gsap.killTweensOf([overlay, group.scale]);
      texture.dispose();
      cylinder.geometry.dispose();
      ring.geometry.dispose();
      orbit.geometry.dispose();
      logoFace.geometry.dispose();
      backFace.geometry.dispose();
      satelliteGeometry.dispose();
      edgeMaterial.dispose();
      ringMaterial.dispose();
      orbitMaterial.dispose();
      logoMaterial.dispose();
      satelliteMaterial.dispose();
      renderer?.dispose();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-label="Chargement de Clean & Solutions"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#102d70] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(38,76,155,0.9),rgba(9,28,71,0.98)_68%)]" />
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border-[52px] border-white/[0.035]" />
      <div className="absolute -bottom-44 -right-32 h-96 w-96 rounded-full border-[62px] border-brand-green/[0.055]" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="relative h-[220px] w-[220px]">
          <span className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/25 blur-3xl" />
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 block h-full w-full ${
              isWebGLLogoReady ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        </div>
        <p className="mt-1 text-xl font-extrabold tracking-[-0.02em] sm:text-2xl">
          Clean <span className="text-brand-blue">&amp;</span> Solutions
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-green sm:text-xs">
          La propreté, notre métier
        </p>
        <p className="mt-5 text-xs font-medium tracking-wide text-white/55">
          Préparation de votre expérience
        </p>
        <span className="mt-3 h-1 w-40 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <span className="block h-full w-1/2 animate-[loader-progress_1.35s_ease-in-out_infinite] rounded-full bg-linear-to-r from-brand-orange to-brand-green" />
        </span>
      </div>
    </div>
  );
}
