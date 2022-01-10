export enum Colors {
    blue = '#2f80ed',
    darkGray = '#1f1f1f',
    lightGray = '#f2f2f2',
    black = '#000000',
    white = '#FFFFFF',
}

export const SECTION_TITLE_CSS = {
    width: '960px', // 60%
    textAlign: 'center',
    lineHeight: '1.15',
    fontSize: '60px',
    fontWeight: '700',
};

export const SECTION_SUBTITLE_CSS = {
    width: '960px', // 60%
    textAlign: 'center',
    lineHeight: '34px',
    fontSize: '24px',
    fontWeight: '400',
};

export const TWO_COLUMNS_CSS = {
    width: '1280px', // 80%
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
};

export const TWO_COLUMNS_BRIEF_CSS = {
    width: '175px',
    lineHeight: '1.2',
    fontSize: '18px',
    fontWeight: '400',
    color: Colors.blue,
};

export const TWO_COLUMNS_MAIN_TEXT_CSS = {
    width: '1024px', //80% calculated by parent element
    minWidth: '784px',
};

export const TWO_COLUMNS_PARAGRAPH_CSS = {
    lineHeight: '34px',
    fontSize: '24px',
    fontWeight: '400',
};
