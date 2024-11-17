export declare const throttle: <T extends (...args: any[]) => void>(callback: T, delay: number) => (...args: Parameters<T>) => void;
export declare const getDayList: (date: string) => Date[];
