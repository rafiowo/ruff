import { useEffect, useRef, useState } from 'react';

function Works(){

    const cardRef = useRef(null);
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
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return(
        <>
        <div className="big-guy">

        </div>
        <div ref={cardRef} className={`card-1${visible ? ' visible' : ''}`}>
            <h2>Vocality<br></br></h2>
            <p>A gamified way of learning vocabulary, but you lose all your points once you get one wrong.</p>
        </div>
        </>
    );
}
export default Works;
