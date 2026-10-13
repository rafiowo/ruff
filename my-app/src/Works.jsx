import { useEffect, useRef, useState } from 'react';

function useFadeIn() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}

function Works(){

    const [card1Ref, card1Visible] = useFadeIn();
    const [card2Ref, card2Visible] = useFadeIn();

    return(
        <>
        <div className="big-guy">

        </div>
        <div ref={card1Ref} className={`card-1${card1Visible ? ' visible' : ''}`}>
            <h2><a href="https://vocalityy.netlify.app/">Vocalityy</a><br></br></h2>
            <p>A gamified way of learning vocabulary, but you lose all your points once you get one wrong.</p>
        </div>
        <div ref={card2Ref} className={`card-1${card2Visible ? ' visible' : ''}`}>
            <h2><a href="https://between-labs-web.vercel.app/">Between</a><br></br></h2>
            <p>A simple iOS based app which keeps track of your debt and tracks how much money you owe your friends/.</p>
        </div>
        </>
    );
}
export default Works;
