import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

const Box = ({
  width,
  height,
  depth,
  color = '#00ff00',
  velocity = { x: 0, y: 0, z: 0 },
  position = { x: 0, y: 0, z: 0 },
  zAcceleration = false
}) => {
  const [boxMesh, setBoxMesh] = useState(null);

  useEffect(() => {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshStandardMaterial({ color })
    );

    setBoxMesh(mesh);

    return () => {
      // Cleanup logic (if needed) when the component is unmounted
    };
  }, [width, height, depth, color]);

  useEffect(() => {
    if (boxMesh) {
      boxMesh.updateSides = () => {
        boxMesh.right = boxMesh.position.x + boxMesh.width / 2;
        boxMesh.left = boxMesh.position.x - boxMesh.width / 2;

        boxMesh.bottom = boxMesh.position.y - boxMesh.height / 2;
        boxMesh.top = boxMesh.position.y + boxMesh.height / 2;

        boxMesh.front = boxMesh.position.z + boxMesh.depth / 2;
        boxMesh.back = boxMesh.position.z - boxMesh.depth / 2;
      };

      boxMesh.update = (ground) => {
        boxMesh.updateSides();

        if (boxMesh.zAcceleration) boxMesh.velocity.z += 0.0003;

        boxMesh.position.x += boxMesh.velocity.x;
        boxMesh.position.z += boxMesh.velocity.z;

        boxMesh.applyGravity(ground);
      };

      boxMesh.applyGravity = (ground) => {
        boxMesh.velocity.y += boxMesh.gravity;

        // This is where we hit the ground
        if (boxCollision({ box1: boxMesh, box2: ground })) {
          const friction = 0.5;
          boxMesh.velocity.y *= friction;
          boxMesh.velocity.y = -boxMesh.velocity.y;
        } else {
          boxMesh.position.y += boxMesh.velocity.y;
        }
      };
    }
  }, [boxMesh]);

  const boxCollision = ({ box1, box2 }) => {
    const xCollision = box1.right >= box2.left && box1.left <= box2.right;
    const yCollision = box1.bottom + box1.velocity.y <= box2.top && box1.top >= box2.bottom;
    const zCollision = box1.front >= box2.back && box1.back <= box2.front;

    return xCollision && yCollision && zCollision;
  };

  return null;
};

export default Box;
