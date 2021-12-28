export const delay = (time: number = 100) =>
    new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
