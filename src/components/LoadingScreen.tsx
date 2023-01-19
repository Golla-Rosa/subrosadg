import { useEffect, useState } from 'react';
import { AnimatedRose } from '../assets/AnimatedRose';

export function SplashScreen({ children }: { children: any }) {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 600);
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
