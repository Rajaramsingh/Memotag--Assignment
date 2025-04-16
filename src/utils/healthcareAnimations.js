// Custom healthcare-specific animation utilities
export const generatePulsePattern = (baseFrequency = 80) => {
  // Simulate realistic heartbeat patterns
  const normalPattern = [
    { amplitude: 0.2, duration: 100 },
    { amplitude: 1.0, duration: 50 },
    { amplitude: 0.1, duration: 150 },
    { amplitude: 0.8, duration: 50 },
    { amplitude: 0.1, duration: 550 }
  ];

  return (time) => {
    const cycleTime = time % 900; // Complete heartbeat cycle
    let currentTime = 0;
    
    for (const beat of normalPattern) {
      if (cycleTime >= currentTime && cycleTime < currentTime + beat.duration) {
        return beat.amplitude;
      }
      currentTime += beat.duration;
    }
    return 0.1; // baseline
  };
};

export const createNeuralPathway = (startPoint, endPoint, complexity = 0.5) => {
  // Generate realistic neural pathway curves
  const controlPoints = [];
  const segments = Math.floor(3 + complexity * 4);
  
  for (let i = 1; i < segments; i++) {
    const progress = i / segments;
    const randomOffset = (Math.random() - 0.5) * 50 * complexity;
    
    controlPoints.push({
      x: startPoint.x + (endPoint.x - startPoint.x) * progress + randomOffset,
      y: startPoint.y + (endPoint.y - startPoint.y) * progress + randomOffset
    });
  }
  
  return {
    path: `M ${startPoint.x},${startPoint.y} 
           Q ${controlPoints.map(p => `${p.x},${p.y}`).join(' ')} 
           ${endPoint.x},${endPoint.y}`,
    points: controlPoints
  };
};

export const generateBrainwavePattern = (type = 'alpha') => {
  // Simulate different types of brainwaves
  const patterns = {
    delta: { frequency: 2, amplitude: 20 },
    theta: { frequency: 6, amplitude: 15 },
    alpha: { frequency: 10, amplitude: 10 },
    beta: { frequency: 20, amplitude: 5 },
    gamma: { frequency: 40, amplitude: 3 }
  };

  const { frequency, amplitude } = patterns[type];
  
  return (t) => {
    return Math.sin(t * frequency) * amplitude +
           Math.sin(t * frequency * 1.1) * amplitude * 0.5 +
           Math.sin(t * frequency * 0.9) * amplitude * 0.3;
  };
};

export const createMemoryPathAnimation = (complexity = 0.7) => {
  // Simulate memory formation patterns
  const nodes = [];
  const connections = [];
  const nodeCount = Math.floor(5 + complexity * 10);
  
  // Generate nodes in a branching pattern
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;
    const radius = 50 + Math.random() * 30;
    nodes.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      strength: Math.random() * 0.5 + 0.5
    });
  }
  
  // Create connections between nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.random() < complexity * 0.3) {
        connections.push({
          from: i,
          to: j,
          strength: Math.random() * 0.7 + 0.3
        });
      }
    }
  }
  
  return {
    nodes,
    connections,
    animate: (progress) => {
      return connections.map(conn => ({
        ...conn,
        currentStrength: conn.strength * Math.sin(progress * Math.PI)
      }));
    }
  };
}; 