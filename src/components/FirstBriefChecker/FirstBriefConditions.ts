import { BriefCondition } from '../../types/BriefCondtition';

/*
 * All % values were calculated for IframeSize.max by parent element
 * */

enum Colors {
    blue = '#2f80ed',
    darkGray = '#1f1f1f',
    lightGray = '#f2f2f2',
    black = '#000000',
    white = '#FFFFFF',
}

const HEADER_CONDITIONS: BriefCondition[] = [
    {
        selector: '.header',
        css: {
            minHeight: '600px',
            maxHeight: '756px',
        },
    },
    {
        selector: '.header .logo.logo_place_header',
        css: {
            position: 'absolute',
            left: '64px',
            top: '30px',
            width: '183px',
            height: '32px',
        },
    },
    {
        selector: '.header .header__title',
        css: {
            marginLeft: '64px',
            maxWidth: '730px',
            lineHeight: '96px',
            fontSize: '102px',
            fontWeight: '700',
        },
    },
    {
        selector: '.header .header__subtitle',
        css: {
            position: 'absolute',
            bottom: '30px',
            left: '64px',
            width: '388px',
            lineHeight: '25px',
            fontSize: '18px',
            fontWeight: '400',
        },
    },
    {
        selector: '.header .header__subtitle a.header__link',
    },
    {
        selector: '.header .header__main-illustration',
        css: {
            position: 'absolute',
            right: '0',
            bottom: '0',
            width: '765px',
            height: '608px',
        },
    },
    {
        selector: '.header .header__square-pic',
        css: {
            width: '568px',
            height: '568px',
            top: '64px',
            position: 'absolute',
            right: '0',
        },
    },
];

const DESCRIPTION_CONDITIONS: BriefCondition[] = [
    {
        selector: '.description .two-columns',
        css: {
            marginTop: '100px',
            marginBottom: '100px',
            width: '1280px', // 80%
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    {
        selector:
            '.description .two-columns .two-columns__brief' /* todo add heading */,
        css: {
            width: '175px',
            lineHeight: '1.2',
            fontSize: '18px',
            fontWeight: '400',
            color: Colors.blue,
        },
    },
    {
        selector: '.description .two-columns .two-columns__main-text',
        css: {
            width: '1024px', //80% calculated by parent element
            minWidth: '784px',
        },
    },
    {
        selector:
            '.description .two-columns .two-columns__main-text .two-columns__paragraph',
        count: 3,
        css: {
            marginBottom: '30px',
            lineHeight: '34px',
            fontSize: '24px',
            fontWeight: '400',
        },
    },
    {
        selector:
            '.description .two-columns .two-columns__main-text .two-columns__paragraph:nth-of-type(2) .two-columns__span-accent',
        css: {
            lineHeight: '34px',
            fontSize: '24px',
            fontWeight: '700',
        },
    },
];

const DIGITS_CONDITIONS: BriefCondition[] = [
    {
        selector: '.digits',
        css: {
            marginTop: '100px',
            marginBottom: '100px',
        },
    },
    {
        selector: '.digits .section-title',
        css: {
            width: '960px', // 60%
            textAlign: 'center',
            lineHeight: '1.15',
            fontSize: '60px',
            fontWeight: '700',
        },
    },
    {
        selector: '.digits .section-subtitle',
        css: {
            width: '960px', // 60%
            textAlign: 'center',
            lineHeight: '34px',
            fontSize: '24px',
            fontWeight: '400',
        },
    },
    {
        selector: '.digits  .table',
        css: {
            width: '1100px' /*margin: '0 auto', display: 'flex'*/,
        },
    },
    {
        selector: '.digits  .table .table__cell',
        count: 8,
        css: {
            width: '250px',
            marginTop: '60px',
        },
    },
    {
        selector: '.digits  .table .table__cell .table__heading',
        count: 8,
        css: {
            lineHeight: '1.15',
            fontSize: '24px',
            fontWeight: '700',
        },
    },
    {
        selector: '.digits  .table .table__cell .table__text',
        count: 10,
        css: {
            marginTop: '20px',
            lineHeight: '1.2',
            fontSize: '18px',
        },
    },
];

const FEYNMAN_CONDITIONS: BriefCondition[] = [
    {
        selector: '.feynman',
        css: {
            minHeight: '890px',
        },
    }, // todo add background position check
    {
        selector: '.feynman .feynman__title',
        css: {
            width: '648px',
            lineHeight: '1.15',
            fontSize: '120px',
            fontWeight: '700',
        },
    },
    {
        selector: '.feynman .feynman__subtitle',
        css: {
            lineHeight: '51px',
            fontSize: '36px',
            fontWeight: '400',
        },
    },
    {
        selector: '.feynman .feynman__link',
        css: {
            position: 'absolute',
            right: '48px',
            top: '445px', // 50% of min-height feynman 890px
            lineHeight: '51px',
            fontSize: '36px',
            fontWeight: '400',
            color: Colors.blue,
        },
    },
];

const KAUFMAN_CONDITIONS: BriefCondition[] = [
    {
        selector: '.kaufman',
        css: {
            overflow: 'hidden',
        },
    },
    {
        selector: '.kaufman .section-title.section-title_theme_dark',
        css: {
            width: '960px', // 60%
            textAlign: 'center',
            lineHeight: '1.15',
            fontSize: '60px',
            fontWeight: '700',
            color: Colors.white,
        },
    },
    {
        selector: '.kaufman .section-subtitle.section-subtitle_theme_dark',
        css: {
            width: '960px', // 60%
            textAlign: 'center',
            lineHeight: '34px',
            fontSize: '24px',
            fontWeight: '400',
            color: Colors.white,
        },
    },
    {
        selector: '.kaufman .table.table_theme_dark',
        css: {
            width: '1100px' /*margin: '0 auto', display: 'flex'*/,
        },
    },
    {
        selector:
            '.kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark',
        count: 10,
        css: {
            width: '200px',
            marginTop: '80px',
        },
    },
    {
        selector:
            '.kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__heading.table__heading_theme_dark',
        count: 10,
        css: {
            lineHeight: '1.15',
            fontSize: '24px',
            fontWeight: '700',
        },
    },
    {
        selector:
            '.kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__text.table__text_theme_dark',
        count: 10,
        css: {
            marginTop: '20px',
            lineHeight: '1.2',
            fontSize: '18px',
            color: Colors.white,
        },
    },
    {
        selector: '.kaufman .kaufman__triangle',
        css: {
            width: '877px',
            height: '877px',
            position: 'absolute',
            right: '-210px',
        },
    },
];

const FOOTER_CONDITIONS: BriefCondition[] = [
    {
        selector: '.footer',
        css: {
            backgroundColor: Colors.darkGray,
            minHeight: '350px',

            paddingTop: '60px',
            paddingBottom: '40px',
        },
    },
    {
        selector: '.footer .footer__columns',
        css: {
            width: '1440px', // 90%
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    {
        selector:
            '.footer__columns .footer__column.footer__column_content_copyright',
        css: {
            flexBasis: '711px',
        },
    },
    {
        selector:
            '.footer__columns .footer__column.footer__column_content_info',
    },
    {
        selector:
            '.footer__columns .footer__column.footer__column_content_social',
    },
    {
        selector: '.footer .footer__author',
        css: {
            marginTop: '18px',
            marginBottom: '18px',
            lineHeight: '25px',
            fontSize: '18px',
            fontWeight: '400',
        },
    },
    {
        selector:
            '.footer .footer__column.footer__column_content_info .footer__column-heading',
        css: {
            lineHeight: '30px',
            fontSize: '18px',
            fontWeight: '600',
        },
    },
    {
        selector:
            '.footer .footer__column.footer__column_content_social .footer__column-heading',
        css: {
            lineHeight: '30px',
            fontSize: '18px',
            fontWeight: '600',
        },
    },
    {
        selector:
            '.footer .footer__column.footer__column_content_info .footer__column-links',
        css: {
            marginBottom: '16px',
        },
    },
    {
        selector:
            '.footer .footer__column.footer__column_content_info .footer__column-links .footer__column-link',
        count: 3,
        css: {
            lineHeight: '30px',
            fontSize: '18px',
            fontWeight: '400',
        },
    },
    {
        selector:
            '.footer .footer__column.footer__column_content_social .footer__column-links',
        css: {
            marginBottom: '16px',
        },
    },
    {
        selector:
            '.footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link',
        count: 3,
        css: {
            lineHeight: '30px',
            fontSize: '18px',
            fontWeight: '400',
        },
    },
    {
        selector:
            '.footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link .footer__social-icon',
        count: 3,
        css: {
            width: '16px',
            height: '16px',
        },
    },
    {
        selector: '.footer .logo.logo_place_footer',
        css: {
            width: '183px',
            height: '35px',
        },
    },
];

export const FIRST_BRIEF_CONDITIONS: BriefCondition[] = [
    ...HEADER_CONDITIONS,
    ...DESCRIPTION_CONDITIONS,
    ...DIGITS_CONDITIONS,
    ...FEYNMAN_CONDITIONS,
    ...KAUFMAN_CONDITIONS,
    ...FOOTER_CONDITIONS,
];
