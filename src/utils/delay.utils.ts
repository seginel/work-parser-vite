export const delay = (time: number) =>
    new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
