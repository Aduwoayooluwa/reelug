import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { motion } from "framer-motion";
import "./not-found.css";

const { Title, Text } = Typography;

const NotFound: React.FC = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>(
    []
  );

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 flex flex-col items-center justify-center overflow-hidden relative"
    >
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      <motion.img
        src="/hiker.png"
        alt="Lost Hiker"
        className="w-64 h-64 mb-8"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <Title
        className="text-6xl md:text-8xl z-10 font-bold text-white mb-4 cosmic-font"
        style={{ color: "white" }}
      >
        404
      </Title>
      <Text className="text-xl md:text-2xl text-green-200 mb-8 cosmic-font">
        Oops! You've wandered off the trail.
      </Text>
      <Button
        type="primary"
        size="large"
        onClick={() => (window.location.href = "/")}
      >
        Find Your Way Back
      </Button>
    </motion.div>
  );
};

export default NotFound;
