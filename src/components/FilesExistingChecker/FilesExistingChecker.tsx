import JSZip from 'jszip';
import { FC } from 'react';
import { Collapse } from '../Collapse/Collapse';
import { getValidityEmoji } from '../../utils/emoji.utils';

interface Props {
    zip: JSZip;
    fileList: string[];
}

export const FilesExistingChecker: FC<Props> = ({ zip, fileList }) => {
    const allFilesExist = fileList.every((fileName) => {
            window.console.log(fileName);
        return fileName.split('|').some((name) => zip.files[name])
    }
    );

    const isExistSomeFile = (itemKey: string) => {
        return itemKey.split('|').some((name) => zip.files[name]);
    }

    return (
        <div className="checkGroup checkGroup_existFiles">
            <h3 className="checkGroup__title">Проверка списка файлов</h3>

            <div className="checkGroup__resultWrapper">
                <h4 className="checkGroup__resulTitle">Результат: </h4>
                {allFilesExist ? (
                    <span className="checkGroup__result checkGroup__result_valid">Успешно {getValidityEmoji(true)}</span>
                ) : (
                   <span className="checkGroup__result checkGroup__result_error">Есть ошибки. Разверните список для просмотра файлов. {getValidityEmoji(false)}</span>
                )}
            </div>

            <Collapse title={'Развернуть список файлов'} valid={allFilesExist} size={6} showArrow={true}>
                {fileList.map((key) => (
                    <div key={key}>
                        {getValidityEmoji(isExistSomeFile(key))} {key}
                    </div>
                ))}

                <table className="error">
                    <tr>
                        <th>
                            Источник
                        </th>
                        <th>
                            Описание
                        </th>
                        <th>
                            Текст
                        </th>
                    </tr>
                    <tr>
                        <td>
                            .editorconfig
                        </td>
                        <td>
                            Отсутствует .editorconfig
                        </td>
                        <td>
                            Надо исправить: В стартките к проектной работе приложен файл `.editorconfig` для текстового редактора.
                            Этот файл содержит настройки редактора, касающиеся форматирования и оформления HTML- и CSS-кода, чтобы
                            при написании кода соблюдались стандарты Яндекс.практикума. Он должен быть добавлен в проект.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            CSS
                        </td>
                        <td>
                            Любой css-файл
                        </td>
                        <td>
                            При создании файловой структуры придерживайтесь схемы в документации https://ru.bem.info/methodology/filestructure/#nested
                        </td>
                    </tr>
                    <tr>
                        <td>
                            README.md
                        </td>
                        <td>
                            Отсутствие README.md
                        </td>
                        <td>
                            Надо исправить: В задании к проектной работе требуется создать файл `README.md`. Там же описано содержимое файла.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            README.md
                        </td>
                        <td>
                            Создан, но неправильно назван
                        </td>
                        <td>
                            Надо исправить: По заданию к проектной работе нужно создать файл `README.md`.
                            Файл в проекте имеет неправильное имя. Лучше называть файлы как требуется в задании.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            normalize
                        </td>
                        <td>
                            normalize не в vendor
                        </td>
                        <td>
                            Надо исправить: normalize необходимо поместить в папку `vendor`. Эта папка должна содержать библиотеки и компоненты
                            сторонних разработчиков (шрифты, normalize.css)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Файл для модификатора
                        </td>
                        <td>
                            Отсутствует или не по правильному пути файл-модификатор
                        </td>
                        <td>
                            Надо исправить: Неправильный путь до файла-модификатора.
                            Общая схема пути до файла-модификатора:
                            `block-name/_mod/block-name_mod_value.css`
                            или
                            `block-name/__element/_mod/block-name__element_mod_value.css`
                            Более подробная схема файловой структуры: https://ru.bem.info/methodology/filestructure/#nested
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Файл для элемента
                        </td>
                        <td>
                            Отсутствует или не по правильному пути файл элемента
                        </td>
                        <td>
                            Надо исправить: Неправильный путь до файла БЭМ-элемента.
                            Общая схема пути до файла:
                            `block-name/__element/block-name__element.css`
                            Более подробная схема файловой структуры: https://ru.bem.info/methodology/filestructure/#nested
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Файл для блока
                        </td>
                        <td>
                            Отсутствует или не по правильному пути файл до блока
                        </td>
                        <td>
                            Проверить - нужны ли стили для данного блока.
                            Если стили есть, а файла нет - требовать создать
                            Если стилей нет, то не требовать от студента создание файла (но студент может создать файл, где будут пустой класс без стилей)
                        </td>
                    </tr>
                </table>

            </Collapse>
        </div>

    );
};
