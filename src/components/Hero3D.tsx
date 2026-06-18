'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.Fog(0x0a0a0a, 100, 1000);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff5722, 1, 200);
    pointLight1.position.set(20, 30, 20);
    pointLight1.castShadow = true;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00d4ff, 0.8, 200);
    pointLight2.position.set(-20, -10, 30);
    scene.add(pointLight2);

    // Create 3D Shapes (Abstract Geometries)
    const shapes: THREE.Mesh[] = [];

    // Shape 1: Organic Blob (IcoSphere with displacement)
    const geom1 = new THREE.IcosahedronGeometry(10, 6);
    const mat1 = new THREE.MeshStandardMaterial({
      color: 0xff5722,
      metalness: 0.4,
      roughness: 0.5,
      emissive: 0x4a2511,
    });
    const blob = new THREE.Mesh(geom1, mat1);
    blob.position.x = -15;
    blob.castShadow = true;
    blob.receiveShadow = true;
    scene.add(blob);
    shapes.push(blob);

    // Shape 2: Crystalline Geometry
    const geom2 = new THREE.OctahedronGeometry(12, 2);
    const mat2 = new THREE.MeshStandardMaterial({
      color: 0x00d4ff,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0066aa,
      wireframe: false,
    });
    const crystal = new THREE.Mesh(geom2, mat2);
    crystal.position.x = 15;
    crystal.rotation.z = Math.PI / 4;
    crystal.castShadow = true;
    scene.add(crystal);
    shapes.push(crystal);

    // Shape 3: Wavy Torus
    const geom3 = new THREE.TorusGeometry(8, 3, 16, 32);
    const mat3 = new THREE.MeshStandardMaterial({
      color: 0x9c00ff,
      metalness: 0.6,
      roughness: 0.4,
      emissive: 0x4a0080,
    });
    const torus = new THREE.Mesh(geom3, mat3);
    torus.position.z = -15;
    torus.rotation.x = Math.PI / 3;
    torus.castShadow = true;
    scene.add(torus);
    shapes.push(torus);

    // Animate shapes with GSAP
    shapes.forEach((shape, i) => {
      gsap.to(shape.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        duration: 20 + i * 5,
        repeat: -1,
        ease: 'none',
      });

      gsap.to(shape.position, {
        y: Math.sin(Date.now() / 1000 + i) * 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Particles for background effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xff5722,
      size: 0.5,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Camera follow mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate particles
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}
