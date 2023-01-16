import React, { useEffect, useState } from 'react';
import { AnimatedRose } from '../assets/AnimatedRose';
import Logo from '../molecules/logo';

export function SplashScreen({ children }) {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 100);
    }, []);

    return showSplash ? (
        <div style={{ height: "100vh", width: "100wv", display: "flex" }}>
            {/* <Logo splash></Logo> */}
            <AnimatedRose></AnimatedRose>
        </div>
    ) : (
        <div>
            {children}
        </div>
    );
}
