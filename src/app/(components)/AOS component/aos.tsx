"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

interface AosProps {
    children: ReactNode;
}

/**
 * A component for animating the children using AOS library.
 *
 * @param {AosProps} children - The children to be animated
 * @return {JSX.Element} The animated children
 */
const Aos = ({ children }: AosProps) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 300,
            once: true
        });
    }, []);

    return <>{children}</>;
};

export default Aos;