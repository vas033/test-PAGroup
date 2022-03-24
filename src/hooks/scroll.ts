import { useEffect, useState } from "react";

export const scroll = () => {
        const [scrollPos, setScrollPosition] = useState(0);
        const [windowHeight, setWindowHeight] = useState(0);
        const [windowWidth, setWindowWidth] = useState(0);

        useEffect(() => {
                const windowSize = () => {
                        setWindowHeight(window.innerHeight);
                        setWindowWidth(window.innerWidth);
                }
                const updatePosition = () => {
                        setScrollPosition(window.pageYOffset);
                };
                window.addEventListener("scroll", updatePosition);
                window.addEventListener("resize", windowSize);
                updatePosition();
                windowSize();
                return () => {
                        window.removeEventListener("scroll", updatePosition);
                        window.removeEventListener("resize", windowSize);
                }
        }, []);

        return {scrollPos, windowHeight, windowWidth}
};