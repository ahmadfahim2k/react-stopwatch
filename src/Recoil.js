import { atom, selector } from "recoil";

export const activeAtom = atom({
    key: 'active',
    default: false
});

export const numsAtom = atom({
    key: 'numsAtom',
    default: Array.from({ length: 12 }, (_, i) => i)
});

export const timerAtom = atom({
    key: "timer",
    default: 0
});

export const minutesSelector = selector({
    key: 'minutes',
    get: ({get}) => {
        const time = get(timerAtom);
        return Math.floor(time/60);
    }
});

export const secondsSelector = selector({
    key: 'seconds',
    get: ({get}) => {
        const time = get(timerAtom);
        return time % 60;
    }
});