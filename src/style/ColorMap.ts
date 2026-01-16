/*
 * necessary for tailwind to change color dynamically
 *
 * color with no prefix= bg
 * d prefix = darker bg version (usually 900)
 * t prefix = text coloring
 * b prefix = border coloring
 * pc picture cover = cover with cover image
 * ps picture spine = cover with spine image
 * pss picture spine side = cover with spine sideways
 */
const ColorMap: Record<string, string> = {
    blue: "bg-blue-400",
    green: "bg-green-800",
    yellow: "bg-yellow-400",
    purple: "bg-purple-400",
    pink: "bg-pink-300",

    dblue: "bg-blue-900",
    dgreen: "bg-green-950",
    dyellow: "bg-yellow-700",
    dpurple: "bg-purple-900",
    dpink: "bg-pink-900",

    tblue: "text-blue-900",
    tgreen: "text-green-950",
    tyellow: "text-yellow-900",
    tpurple: "text-purple-900",
    tpink: "text-pink-900",

    dtblue: "text-blue-300",
    dtgreen: "text-green-300",
    dtyellow: "text-yellow-300",
    dtpurple: "text-purple-300",
    dtpink: "text-pink-300",

    bblue: "border-blue-900",
    bgreen: "border-green-900",
    byellow: "border-yellow-900",
    bpurple: "border-purple-900",
    bpink: "border-purple-900",

    pcblue: "bg-blueCover ",
    pcgreen: "bg-greenCover",
    pcyellow: "bg-yellowCover",
    pcpurple: "bg-purpleCover",
    pcpink: "bg-pinkCover",

    psblue: "bg-blueSpine",
    psgreen: "bg-greenSpine",
    psyellow: "bg-yellowSpine",
    pspurple: "bg-purpleSpine",
    pspink: "bg-pinkSpine",

    pssblue: "bg-blueSpineSide",
    pssgreen: "bg-greenSpineSide",
    pssyellow: "bg-yellowSpineSide",
    psspurple: "bg-purpleSpineSide",
    psspink: "bg-pinkSpineSide",

    /*pcdblue: "bg-blueCover",
    pcdgreen: "bg-greenCover",
    pcdyellow: "bg-yellowCover",
    pcdpurple: "bg-purpleCover",
    pcdpink: "bg-pinkCover",

    psdblue: "bg-blueSpine",
    psdgreen: "bg-greenSpine",
    psdyellow: "bg-yellowSpine",
    psdpurple: "bg-purpleSpine",
    psdpink: "bg-pinkSpine",

    pssdblue: "bg-blueSpineSide",
    pssdgreen: "bg-greenSpineSide",
    pssdyellow: "bg-yellowSpineSide",
    pssdpurple: "bg-purpleSpineSide",
    pssdpink: "bg-pinkSpineSide",*/

};
export default ColorMap;
