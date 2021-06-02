import { Fab } from "@material-ui/core";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./GridViewScrollToTop.css";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible &&
                <Fab onClick={scrollToTop} size="large" className="scroll-to-top" color="primary" aria-label="add">
                    <ArrowUpwardIcon />
                </Fab>}
        </div>
    );
}