import { useEffect, useRef, useState } from 'react';

// Main component for the dynamic background
const App = ({ children }) => {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const animationFrameId = useRef(null);

  // Use a state variable to handle responsiveness
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Set up a resize listener to update the dimensions
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up the animation frame on component unmount
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match the window
    canvas.width = windowDimensions.width;
    canvas.height = windowDimensions.height;

    // Define a class for the bubble objects
    class Bubble {
      constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx; // velocity in x direction
        this.dy = dy; // velocity in y direction
      }

      // Method to draw the bubble on the canvas
      draw() {
        ctx.beginPath();
        // Create a radial gradient for a "shiny" effect
        const gradient = ctx.createRadialGradient(
          this.x - this.radius / 3, // slightly offset center for shine
          this.y - this.radius / 3,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, '#FFFFFF'); // White center for shine
        gradient.addColorStop(0.5, '#CCCCCC'); // Lighter grey
        gradient.addColorStop(1, '#666666'); // Darker grey at the edge
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      }

      // Update the bubble's position and handle collisions
      update() {
        // Wall collision detection
        // Bounce off the right or left wall
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        // Bounce off the top or bottom wall
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        // Update position
        this.x += this.dx;
        this.y += this.dy;
      }
    }

    // Initialize the bubbles if they don't exist
    if (bubblesRef.current.length === 0) {
      const bubbleSizes = [100, 70, 50, 40, 30];
      bubblesRef.current = [];

      bubbleSizes.forEach(size => {
        let bubble;
        let isOverlapping;
        do {
          // Generate a new position
          const x = Math.random() * (canvas.width - size * 2) + size;
          const y = Math.random() * (canvas.height - size * 2) + size;
          const dx = (Math.random() - 0.5) * 2;
          const dy = (Math.random() - 0.5) * 2;
          bubble = new Bubble(x, y, size, dx, dy);
          isOverlapping = false;

          // Check against all previously created bubbles for an overlap
          for (const existingBubble of bubblesRef.current) {
            const dx_check = bubble.x - existingBubble.x;
            const dy_check = bubble.y - existingBubble.y;
            const distance = Math.sqrt(dx_check * dx_check + dy_check * dy_check);
            if (distance < bubble.radius + existingBubble.radius) {
              isOverlapping = true;
              break; // Overlap found, try a new position
            }
          }
        } while (isOverlapping);
        bubblesRef.current.push(bubble);
      });
    }

    // Main animation loop
    const animate = () => {
      // Clear the canvas to prepare for the next frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Collision detection between bubbles
      for (let i = 0; i < bubblesRef.current.length; i++) {
        for (let j = i + 1; j < bubblesRef.current.length; j++) {
          const b1 = bubblesRef.current[i];
          const b2 = bubblesRef.current[j];
          const dx = b1.x - b2.x;
          const dy = b1.y - b2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If bubbles collide, reverse their velocities for a simple bounce effect
          if (distance < b1.radius + b2.radius) {
            const tempDx = b1.dx;
            const tempDy = b1.dy;
            b1.dx = b2.dx;
            b1.dy = b2.dy;
            b2.dx = tempDx;
            b2.dy = tempDy;
          }
        }
      }

      // Update and draw each bubble
      bubblesRef.current.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });

      // Request the next animation frame
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

  }, [windowDimensions.width, windowDimensions.height]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', margin: 0, padding: 0 }}>
      {/* Canvas as background, absolutely positioned */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          display: 'block',
        }}
      />
      {/* Foreground content */}
      <div style={{
        background: 'linear-gradient(135deg, black, rgb(67, 67, 67))', // Diagonal gradient
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}>
        {children}
      </div>
    </div>
  );
};

export default App;
