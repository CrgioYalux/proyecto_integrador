type TimeMark = {
    milliseconds?: number,
    seconds?: number,
    minutes?: number,
    hours?: number,
};

const timeMarkToMilliseconds = (timeMark: TimeMark): number => {
    const milliseconds = timeMark.milliseconds ?? 0;
    const secondsToMilliseconds = (timeMark.seconds ?? 0) * 1000;
    const minutesToMilliseconds = (timeMark.minutes ?? 0) * 60 * 1000;
    const hoursToMilliseconds = (timeMark.hours ?? 0) * 60 * 60 * 1000;

    return milliseconds + secondsToMilliseconds + minutesToMilliseconds + hoursToMilliseconds;
};

export type { TimeMark };

export { timeMarkToMilliseconds };
