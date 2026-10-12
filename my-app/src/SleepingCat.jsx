// A tiny sleeping pixel cat drawn as an inline SVG on a 16x16 grid.
// shape-rendering="crispEdges" keeps the pixels sharp at any scale.
function SleepingCat() {
    const body = "#9ca3af";   // cat fill
    const dark = "#6b7280";   // ear / tail shading
    const line = "#374151";   // closed-eye line

    // Each rect is one "pixel" on the grid.
    const px = (x, y, fill, w = 1, h = 1) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill={fill} />
    );

    return (
        <svg
            className="sleeping-cat"
            viewBox="0 0 16 16"
            width="36"
            height="36"
            shapeRendering="crispEdges"
            aria-label="sleeping cat"
            role="img"
        >
            {/* ears */}
            {px(3, 6, dark)}
            {px(6, 6, dark)}
            {/* head */}
            {px(3, 7, body, 4, 3)}
            {/* closed eye */}
            {px(4, 8, line, 2, 1)}
            {/* curled body */}
            {px(7, 8, body, 7, 4)}
            {px(6, 9, body, 1, 3)}
            {/* tail curling back over the body */}
            {px(13, 7, dark)}
            {px(12, 6, dark)}
            {px(11, 6, dark)}
            {/* paws / bottom */}
            {px(4, 10, body, 3, 1)}

            {/* "Zzz" floats up and fades */}
            <text className="cat-z cat-z1" x="9" y="5" fontSize="4" fill={dark}>z</text>
            <text className="cat-z cat-z2" x="11" y="3" fontSize="5" fill={dark}>z</text>
        </svg>
    );
}

export default SleepingCat;
