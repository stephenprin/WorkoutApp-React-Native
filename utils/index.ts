

export default function secToMin(sec: number) {
    return Math.floor( + sec / 60) +" min" + " and " + ("0" + sec % 60).slice(-2) + " sec";
}