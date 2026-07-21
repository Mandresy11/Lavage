"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    const isMobile = window.matchMedia(
      "(max-width: 640px)",
    ).matches;

    let finishTimer = 0;
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

    if (isMobile) {
      finishTimer = window.setTimeout(finish, reducedMotion ? 650 : 2800);

      return () => {
        window.clearTimeout(finishTimer);
        document.body.style.overflow = previousOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
        gsap.killTweensOf(overlay);
      };
    }

    const circleSegments = isMobile ? 40 : 72;
    const torusSegments = isMobile ? 56 : 96;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrame = 0;
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
      new THREE.CylinderGeometry(1.05, 1.05, 0.18, circleSegments),
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
      new THREE.TorusGeometry(1.08, 0.035, isMobile ? 10 : 18, torusSegments),
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
      new THREE.TorusGeometry(1.34, 0.014, isMobile ? 8 : 12, isMobile ? 64 : 120),
      orbitMaterial,
    );
    orbit.rotation.set(1.02, 0.15, 0.22);
    group.add(orbit);

    const satelliteGeometry = new THREE.SphereGeometry(
      0.055,
      isMobile ? 12 : 20,
      isMobile ? 10 : 20,
    );
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
      new THREE.CircleGeometry(1, circleSegments),
      logoMaterial,
    );
    logoFace.position.z = 0.105;
    group.add(logoFace);

    const backFace = new THREE.Mesh(
      new THREE.CircleGeometry(1, circleSegments),
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
        antialias: !isMobile,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(
        isMobile ? 1 : Math.min(window.devicePixelRatio, 1.75),
      );
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      resize();
      window.addEventListener("resize", resize);

      const clock = new THREE.Clock();
      let previousRenderTime = 0;
      const render = (time = 0) => {
        if (stopped || !renderer) return;
        animationFrame = window.requestAnimationFrame(render);
        if (isMobile && time - previousRenderTime < 1000 / 30) return;
        previousRenderTime = time;
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
      };
      render();
    } catch {
      // Le texte et le fond restent visibles si WebGL n'est pas disponible.
    }

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
      className="fixed inset-0 z-[100] overflow-hidden bg-[#061f52] text-white"
    >
      <Image
        src="/back.png"
        alt=""
        fill
        priority
        quality={72}
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#001945]/15" aria-hidden="true" />

      <div className="absolute inset-x-0 top-[12vh] flex flex-col items-center px-5 text-center sm:top-[15vh] lg:top-[20vh]">
        <div className="relative h-[clamp(180px,26vh,250px)] w-[clamp(180px,26vh,250px)]">
          <span className="absolute left-1/2 top-1/2 hidden h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/25 blur-3xl sm:block" />
          <div className="absolute inset-[12%] animate-[mobile-logo-float_2.8s_ease-in-out_infinite] sm:hidden" aria-hidden="true">
            <span className="absolute inset-[-5%] rotate-12 rounded-[50%] border-2 border-brand-orange" />
            <span className="absolute inset-[-8%] -rotate-[28deg] rounded-[50%] border border-brand-green" />
            <Image
              src="/logo.jpg"
              alt=""
              fill
              priority
              sizes="180px"
              quality={82}
              className="rounded-full border-4 border-white object-cover shadow-[0_6px_18px_rgba(0,18,58,0.32)]"
            />
            <span className="absolute -right-[7%] top-[17%] h-2.5 w-2.5 rounded-full bg-brand-orange shadow-[0_0_8px_#f7941d]" />
          </div>
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 hidden h-full w-full sm:block ${
              isWebGLLogoReady ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        </div>
        <p className="-mt-1 text-[clamp(1.55rem,3vw,2.5rem)] font-extrabold leading-none tracking-[-0.025em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)]">
          Clean <span className="text-[#4db6d3]">&amp;</span> Solutions
        </p>
        <p className="mt-3 text-[clamp(0.65rem,1.25vw,1rem)] font-bold uppercase tracking-[0.28em] text-[#a8e52f] drop-shadow-md">
          La propret&eacute;, notre m&eacute;tier
        </p>
        <p className="mt-4 text-[clamp(0.75rem,1.3vw,1rem)] font-medium tracking-wide text-white/80 drop-shadow-md sm:mt-5">
          Pr&eacute;paration de votre exp&eacute;rience
        </p>

        <svg className="mt-3 h-8 w-[min(78vw,320px)] overflow-visible sm:mt-4" viewBox="0 0 320 32" fill="none" aria-hidden="true">
          <path
            className="animate-[loader-wave_1.6s_linear_infinite]"
            pathLength="1"
            d="M2 16C38 8 68 25 104 17C142 8 170 6 205 15C240 24 269 9 315 16"
            stroke="#16e4ef"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0.35 0.65"
          />
          <circle cx="315" cy="16" r="8" fill="#35f4ff" opacity="0.16" />
          <circle cx="315" cy="16" r="3.5" fill="white" />
        </svg>

        <div className="mt-4 flex items-center gap-3 rounded-full border border-brand-orange/80 bg-[#07336d]/85 px-4 py-2.5 text-[clamp(0.58rem,1.2vw,0.85rem)] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_8px_30px_rgba(0,17,55,0.25)] sm:mt-5 sm:gap-4 sm:bg-[#07336d]/65 sm:px-6 sm:py-3 sm:backdrop-blur-sm">
          <svg className="h-5 w-5 shrink-0 text-[#ffc35b] sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 18C3.5 11 6.8 5 12 3C17.2 5 20.5 11 20 18C14.7 20.5 9.3 20.5 4 18Z" fill="currentColor" />
            <path d="M12 4V19M7.5 6.5L10 19M16.5 6.5L14 19M4.8 11L8.5 19M19.2 11L15.5 19" stroke="#fff1bf" strokeWidth="0.9" />
          </svg>
          <span className="whitespace-nowrap">Au c&oelig;ur de la Guadeloupe</span>
          <svg className="h-5 w-5 shrink-0 text-[#ffc35b] sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 1.8L14.5 8.8L21.9 9.1L16 13.6L18 20.8L12 16.7L6 20.8L8 13.6L2.1 9.1L9.5 8.8L12 1.8Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
