export const getValidEmoji = () => '✅';

export const getInvalidEmoji = () => '❌';

export const getValidityEmoji = (valid: boolean) => {
    return valid ? getValidEmoji() : getInvalidEmoji();
};
