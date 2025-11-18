import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Global variables
let scene, camera, renderer, controls;
let cube, sphere, torus;
let section1Color = 0x4a6fa5; // Blue
let section2Color = 0xc44569; // Pink
let section3Color = 0x2ecc71; // Green

// Initialize the scene
function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a1a); // Dark blue background

    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Disable shadow map
    renderer.shadowMap.enabled = false;
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Add OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 2;
    controls.maxDistance = 15;

    // Enable pointer events on the canvas container
    renderer.domElement.style.pointerEvents = 'auto';

    // Create objects
    createObjects();

    // Add lights
    setupLights();

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Set up scroll animations
    setupScrollAnimations();
    
    // Set up object visibility
    setupObjectVisibility();

    // Start animation loop
    animate();
}

// Create 3D objects
function createObjects() {
    // Create cube with enhanced material
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshStandardMaterial({ 
        color: section1Color,
        roughness: 0.2,
        metalness: 0.8,
        emissive: 0x004400
    });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -2;
    // Disable shadows
    cube.castShadow = false;
    cube.receiveShadow = false;
    scene.add(cube);

    // Create sphere with enhanced material
    const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff0000,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0x440000
    });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    // Disable shadows
    sphere.castShadow = false;
    sphere.receiveShadow = false;
    scene.add(sphere);

    // Create torus with enhanced material
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x0000ff,
        roughness: 0.3,
        metalness: 0.7,
        emissive: 0x000044
    });
    torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.x = 2;
    // Disable shadows
    torus.castShadow = false;
    torus.receiveShadow = false;
    scene.add(torus);
}

// Set up lights
function setupLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light (sun) - without shadows
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(5, 5, 5);
    // Disable shadows
    sunLight.castShadow = false;
    scene.add(sunLight);

    // Hemisphere light for more natural outdoor lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
    scene.add(hemisphereLight);

    // Point lights for additional highlights - without shadows
    const pointLight1 = new THREE.PointLight(0xff0040, 1, 100);
    pointLight1.position.set(3, 3, 3);
    // Disable shadows
    pointLight1.castShadow = false;
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0040ff, 1, 100);
    pointLight2.position.set(-3, -3, -3);
    // Disable shadows
    pointLight2.castShadow = false;
    scene.add(pointLight2);
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Set up GSAP scroll animations
function setupScrollAnimations() {
    // Section 1 animations
    gsap.to(cube.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        scrollTrigger: {
            trigger: "#section1",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    gsap.to(cube.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        scrollTrigger: {
            trigger: "#section1",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    // Section 2 animations
    gsap.to(sphere.position, {
        y: 1.5,
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    gsap.to(sphere.material, {
        color: new THREE.Color(0xffff00),
        emissive: new THREE.Color(0x444400),
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    gsap.to(sphere.scale, {
        x: 1.3,
        y: 1.3,
        z: 1.3,
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    // Section 3 animations
    gsap.to(torus.rotation, {
        x: Math.PI * 2,
        z: Math.PI * 2,
        scrollTrigger: {
            trigger: "#section3",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    gsap.to(torus.material, {
        color: new THREE.Color(0xff00ff),
        emissive: new THREE.Color(0x440044),
        scrollTrigger: {
            trigger: "#section3",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    gsap.to(torus.position, {
        y: -1,
        scrollTrigger: {
            trigger: "#section3",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

    // Global camera animation
    gsap.to(camera.position, {
        z: 3,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    // Global rotation for all objects
    gsap.to([cube.rotation, sphere.rotation, torus.rotation], {
        y: Math.PI * 4,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });
}

// Set up object visibility (hide/show on scroll)
function setupObjectVisibility() {
    // Hide objects one by one as user scrolls down
    // And show them again when scrolling up
    
    // Hide cube when scrolling to section 2
    gsap.to(cube.scale, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "top center",
            toggleActions: "play none none reverse"
        }
    });
    
    // Hide sphere when scrolling to section 3
    gsap.to(sphere.scale, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
            trigger: "#section3",
            start: "top center",
            end: "top center",
            toggleActions: "play none none reverse"
        }
    });
    
    // Hide torus when scrolling to the end
    gsap.to(torus.scale, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
            trigger: "body",
            start: "bottom bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
        }
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Update controls
    if (controls) {
        controls.update();
    }
    
    // Continuous subtle animations
    const time = Date.now() * 0.001;
    
    // Subtle floating animation for visible objects
    if (cube && cube.scale.x > 0.1) {
        cube.position.y = Math.sin(time) * 0.1;
    }
    if (sphere && sphere.scale.x > 0.1) {
        sphere.position.y = Math.sin(time + 1) * 0.1;
    }
    if (torus && torus.scale.x > 0.1) {
        torus.position.y = Math.sin(time + 2) * 0.1;
    }

    // Render the scene
    renderer.render(scene, camera);
}

// Initialize the application when the page loads
window.addEventListener('DOMContentLoaded', init);