import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ScrollAnimationWrapper = ({ 
  children, 
  animation = 'fade-up', 
  duration = 0.5, 
  delay = 0, 
  threshold = 0.1,
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const animations = {
    'fade': {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, delay }
      }
    },
    'fade-up': {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay,
          type: 'spring',
          damping: 20
        }
      }
    },
    'fade-down': {
      hidden: { opacity: 0, y: -20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay,
          type: 'spring',
          damping: 20
        }
      }
    },
    'fade-left': {
      hidden: { opacity: 0, x: -20 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration, 
          delay,
          type: 'spring',
          damping: 20
        }
      }
    },
    'fade-right': {
      hidden: { opacity: 0, x: 20 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration, 
          delay,
          type: 'spring',
          damping: 20
        }
      }
    },
    'zoom': {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration, 
          delay 
        }
      }
    }
  };

  const selectedAnimation = animations[animation] || animations['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;