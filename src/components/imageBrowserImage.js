import React, {useEffect, useRef} from 'react';

const LazyImage = ({
  observer,
  src,
  alt,
}) => {
  const imageEl = useRef(null);

  useEffect(() => {
    const {current} = imageEl;
    
    if (observer !== null) { 
        observer.observe(current); 
    }
    
    return () => {
      observer.unobserve(current);
    }
  }, [observer]);

  return (
      <img
        ref={imageEl}
        data-src={src}
        alt={alt}
    />
  )
}
export default LazyImage;