import {useEffect, useRef} from 'react';
import './ImageThumbnail.css';

interface IProps {
    openModal: Function,
    src: string,
    alt: string,
    observer?: IntersectionObserver,
    imageId: number
}

const LazyImage = ({ observer, src, alt, openModal, imageId }: IProps) => {
    const imageEl = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const { current } = imageEl;

        if (current && observer !== undefined) {

            if (observer !== null) {
                observer.observe(current);
            }

            return () => {
                observer.unobserve(current);
            }
        }
    }, [observer]);

    return (
        <img ref={imageEl} data-src={src} alt={alt} className="imageThumbnail" onClick={() => openModal(imageId)} style={{ minHeight: 100 }} />
    )
}
export default LazyImage;