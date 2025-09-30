import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add('visible');
    }
  }, [inView, ref]);

  return { ref, inView };
};

export default useScrollAnimation;
