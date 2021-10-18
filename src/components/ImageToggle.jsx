import './ImageToggle.css';
import { useRef, useEffect, useState } from 'react';
const ImageToggle = ({ primary, secoundry }) => {
    const [inView, setInView] = useState(false);
    const [isLoading,setIsLoading]=useState('true');
    const imageRef = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return (()=>{
            window.removeEventListener("scroll",scrollHandler)
        },[isLoading])
    })
    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    } 
    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }
    return isLoading ? null : (
            <img
                alt="imgName"
                ref={imageRef}
                alt="rge"
                src={inView ? primary : secoundry} />
    )
}
export default ImageToggle;