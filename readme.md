# Scroll-Responsive 3D Scene with Three.js

This project is a Three.js application that creates an interactive 3D scene responding to user scroll actions. As users scroll through different sections, 3D objects transform, change colors, and move dynamically.

## Key Features Implemented

### Core Functionality
- **Scroll-Responsive 3D Animations**: Dynamic 3D scene where objects transform based on scroll position using GSAP ScrollTrigger
- **Interactive 3D Controls**: OrbitControls implementation allowing users to rotate, pan, and zoom the 3D scene manually
- **Multiple 3D Objects**: Scene with three distinct geometric objects (cube, sphere, torus) with unique behaviors

### Technical Implementation Details

#### Scene Architecture
- Three.js WebGL renderer with perspective camera
- Physically-based rendering (PBR) materials with metalness and roughness properties
- Responsive design that adapts to window resizing
- Fixed-position 3D canvas behind scrollable content sections

#### Animation System
- GSAP ScrollTrigger for scroll-based animations
- Section-specific transformations:
  - Section 1: Cube rotates and scales up
  - Section 2: Sphere floats upward and changes to yellow
  - Section 3: Torus spins and changes to purple while moving downward
- Global camera movement that adjusts based on scroll progress
- Continuous subtle floating animations for visual interest

#### Performance Optimizations
- Disabled all shadow calculations for improved performance
- Device pixel ratio capped at 2 for high-DPI displays
- Efficient animation loop using requestAnimationFrame

### Technologies Used
- Three.js for 3D graphics
- GSAP (GreenSock Animation Platform) with ScrollTrigger plugin
- Vite for development and build tooling
- ES6 modules for modern JavaScript organization

### Prerequisites
Before you start, make sure you have Node.js installed on your machine: (https://nodejs.org/en/download/)
### Installation
Once you've cloned or downloaded this project file to your local machine, navigate to this project directory in your terminal.

Run the following command to install the necessary dependencies:

``` bash
npm install
```
### Running the project
To start the development server, run the following command:

``` bash
npm run dev
```
This will start the server and open your default browser to your localhost. The site will reload automatically as you make changes to your code.