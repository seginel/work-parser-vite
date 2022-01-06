import { BriefCondition } from '../../types/BriefCondtition';

/*
 * All % values were calculated for IframeSize.max by parent element
 * */

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
            marginBottom: '20px',
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

export const FIRST_BRIEF_CONDITIONS: BriefCondition[] = [
    ...HEADER_CONDITIONS,
    ...DESCRIPTION_CONDITIONS,
    ...DIGITS_CONDITIONS,
];
