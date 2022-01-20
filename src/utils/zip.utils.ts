import JSZip from 'jszip';

export const getZipWithoutFolderPrefix = async (file: any) => {
    const zipContent = await JSZip.loadAsync(file, {
        createFolders: true,
    });

    const fileList = Object.keys(zipContent.files);

    if (zipContent.files[fileList[0]].dir) {
        const rootDirectoryName = zipContent.files[fileList[0]].name;

        zipContent.files = fileList.slice(1).reduce((sum, key) => {
            sum[key.replace(rootDirectoryName, '')] = zipContent.files[key];

            return sum;
        }, {} as Record<string, JSZip.JSZipObject>);
    }

    return zipContent;
};
