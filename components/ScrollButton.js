import { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, [visible]);

  return (
    <button
      onClick={scrollToTop}
      className="inline-block bg-[#f4b223] w-12 h-12 text-center rounded fixed bottom-8 right-8 z-50 text-white text-2xl my-auto"
      style={{ display: visible ? 'inline' : 'none' }}
    >
      ↑
    </button>
  );
};

export default ScrollButton;
