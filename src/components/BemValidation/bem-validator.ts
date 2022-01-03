// partial copied from https://github.com/nglazov/bem-validator-page/blob/main/src/index.js

export enum ErrorCode {
    NO_PARENT_BLOCK = 'NO_PARENT_BLOCK',
    RECURSIVE_ELEMENT = 'RECURSIVE_ELEMENT',
    ONLY_MODIFIER = 'ONLY_MODIFIER',
    RECURSIVE_BLOCK = 'RECURSIVE_BLOCK',
    ELEMENT_OF_ELEMENT = 'ELEMENT_OF_ELEMENT',
}

export const ERROR_TRANSLATION = {
    ru: {
        [ErrorCode.ELEMENT_OF_ELEMENT]: 'Не может быть элемента у элемента',
        [ErrorCode.RECURSIVE_BLOCK]: 'Блок вложен в блок с таким же именем',
        [ErrorCode.RECURSIVE_ELEMENT]:
            'Элемент вложен в элемент с таким же именем',
        [ErrorCode.NO_PARENT_BLOCK]:
            'Элемент используется без блока в родителях',
        [ErrorCode.ONLY_MODIFIER]:
            'Модификатор используется без блока или элемента',
    },
    en: {
        [ErrorCode.ELEMENT_OF_ELEMENT]: 'It could not be element of element',
        [ErrorCode.RECURSIVE_BLOCK]: 'Block is in block with same name',
        [ErrorCode.RECURSIVE_ELEMENT]: 'Element is in element with same name',
        [ErrorCode.NO_PARENT_BLOCK]: 'Element was used without block as parent',
        [ErrorCode.ONLY_MODIFIER]: 'Modifier was used without block or element',
    },
};

const OK_TRANSLATION = {
    ru: 'BEMissimo 🤌 (Всё хорошо)',
    en: 'BEMissimo 🤌 (Everything good)',
};

/*function insertErrors(errors = []) {
    if (!errors.length) {
        const everythingGood = document.createElement('li');
        everythingGood.innerHTML = OK_TRANSLATION[language];

        errorsContainer.appendChild(everythingGood);

        return;
    }

    const groupedErrors = errors.reduce((sum, error) => {
        const { code } = error;
        if (sum[code]) {
            sum[code].push(error);
        } else {
            sum[code] = [error];
        }
        return sum;
    }, {});

    Object.keys(groupedErrors).forEach((key) => {
        const errorGroup = groupedErrors[key];

        const li = document.createElement('li');
        li.classList.add('info');
        li.innerHTML = `<span class="info"><span class="info__icon"></span><b>${ERROR_TRANSLATION[language][key]}</b></span>`;

        const ul = document.createElement('ul');

        errorGroup.forEach((error) => {
            const li = document.createElement('li');
            li.innerHTML = `className: <span class="code">${
                error.className
            }</span>, path: <span class="code">${getParentPath(
                error.parentArray,
            )}</span>`;

            ul.appendChild(li);
        });

        const errorImage = document.createElement('img');
        errorImage.setAttribute('src', `./images/${key}.png`);
        errorImage.classList.add('error-image');

        li.appendChild(ul);
        li.appendChild(errorImage);

        errorsContainer.appendChild(li);
    });
}*/

interface BemError {
    code: ErrorCode;
    className: string;
    parentArray: (string | string[])[];
}

export function validateNode(
    node: Element,
    parentArray: (string | string[])[] = [],
) {
    const errors: Array<BemError> = [];
    const currentClasses = [...node.classList];
    const parentArrayWithCurrent = [...parentArray, currentClasses];

    currentClasses.forEach((className) => {
        const { blockName, elementName, modifierName } =
            parseClassName(className);

        if (
            elementName &&
            !parentArray.flat().find((parentClass) => parentClass === blockName)
        ) {
            errors.push({
                code: ErrorCode.NO_PARENT_BLOCK,
                className,
                parentArray,
            });
        }

        if (
            elementName &&
            parentArray
                .flat()
                .find(
                    (parentClass) =>
                        parentClass === `${blockName}__${elementName}`,
                )
        ) {
            errors.push({
                code: ErrorCode.RECURSIVE_ELEMENT,
                className,
                parentArray,
            });
        }

        if (
            modifierName &&
            !currentClasses.find((currentClass) =>
                elementName
                    ? currentClass === `${blockName}__${elementName}`
                    : blockName === currentClass,
            )
        ) {
            errors.push({
                code: ErrorCode.ONLY_MODIFIER,
                className,
                parentArray,
            });
        }

        if (
            !elementName &&
            !modifierName &&
            parentArray.flat().some((parentClass) => parentClass === blockName)
        ) {
            errors.push({
                code: ErrorCode.RECURSIVE_BLOCK,
                className,
                parentArray,
            });
        }

        if (className.split('__').length > 2) {
            errors.push({
                code: ErrorCode.ELEMENT_OF_ELEMENT,
                className,
                parentArray,
            });
        }
    });

    if (node.children) {
        [...node.children].forEach((node) => {
            const childErrors = validateNode(node, parentArrayWithCurrent);
            errors.push(...childErrors);
        });
    }

    return errors;
}

export function getParentPath(parents: (string | string[])[]) {
    return parents
        .filter((element) => element.length > 0)
        .map((element) =>
            Array.isArray(element) ? element.join('.') : element,
        )
        .join(' > ');
}

function parseClassName(className: string) {
    const regExp =
        /^([a-z-0-9]*)(__)?([a-z-0-9]*)(_)?([a-z-0-9]*)?(_)?([a-z-0-9])?/i;

    const [, blockName, , elementName, , modifierName, , modifierValue] =
        regExp.exec(className)!;

    return { blockName, elementName, modifierName, modifierValue };
}
