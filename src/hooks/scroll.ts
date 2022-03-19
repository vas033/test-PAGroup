import { useEffect, useState } from "react";

export const scroll = () => {
        const [scrollPos, setScrollPosition] = useState(0);
        const [windowHeight, setWindowHeight] = useState(0);
        const [windowWidth, setWindowWidth] = useState(0);

        useEffect(() => {
                const updatePosition = () => {
                        setScrollPosition(window.pageYOffset);
                        setWindowHeight(window.innerHeight);
                        setWindowWidth(window.innerWidth);
                };
                window.addEventListener("scroll", updatePosition);
                updatePosition();
                return () => {
                        window.removeEventListener("scroll", updatePosition);
                }
        }, []);

        return {scrollPos, windowHeight, windowWidth}
};