/*
 * necessary for tailwind to change color dynamically
 *
 * color with no prefix= bg
 * d prefix = darker bg version (usually 900)
 * t prefix = text coloring
 * b prefix = border coloring
 */
const ColorMap: Record<string, string> = {
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-600",
    yellow: "bg-yellow-400",
    purple: "bg-purple-400",
    orange: "bg-orange-400",
    pink: "bg-pink-400",

    dblue: "bg-blue-900",
    dred: "bg-red-900",
    dgreen: "bg-green-950",
    dyellow: "bg-yellow-900",
    dpurple: "bg-purple-900",
    dorange: "bg-orange-900",
    dpink: "bg-pink-900",

    tblue: "text-blue-900",
    tred: "text-red-900",
    tgreen: "text-green-900",
    tyellow: "text-yellow-900",
    tpurple: "text-purple-900",
    torange: "text-orange-900",
    tpink: "text-pink-900",

    bblue: "border-blue-900",
    bred: "border-red-900",
    bgreen: "border-green-900",
    byellow: "border-yellow-900",
    bpurple: "border-purple-900",
    borange: "border-orange-900",
    bpink: "border-purple-900",
};
export default ColorMap;
