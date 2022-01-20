import * as firstBrief from './FirstBriefConditions';
import { BriefCondition } from '../../types/BriefCondtition';
import {
    SECTION_SUBTITLE_CSS,
    SECTION_TITLE_CSS,
    TWO_COLUMNS_BRIEF_CSS,
    TWO_COLUMNS_CSS,
    TWO_COLUMNS_MAIN_TEXT_CSS,
    TWO_COLUMNS_PARAGRAPH_CSS,
} from './common';
import { FOOTER_CONDITIONS } from './FirstBriefConditions';

const HEADER_CONDITIONS: BriefCondition[] = [
    ...firstBrief.HEADER_CONDITIONS,
    {
        selector: '.header .rotation',
        css: {
            animationDuration: '20s',
            animationTimingFunction: 'linear',
        },
    },
    {
        selector: '.header',
        css: {
            overflow: 'hidden',
        },
    },
];

const TECHNIQUES_CONDITIONS: BriefCondition[] = [
    { selector: '.techniques' },
    { selector: '.techniques .section-title', css: SECTION_TITLE_CSS },
    { selector: '.techniques .section-subtitle', css: SECTION_SUBTITLE_CSS },
    {
        selector: '.techniques .cards',
        css: {
            width: '920px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    {
        selector: '.techniques .cards .cards__item',
        count: 5,
        css: {
            marginTop: '60px',
            width: '240px',
        },
    },
    {
        selector: '.techniques .cards .cards__item .cards__image',
        css: {
            borderRadius: '50%',
            width: '160px',
            height: '160px',
        },
    },
    {
        selector: '.techniques .cards .cards__item .cards__title',
        css: {
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '1.15',
        },
    },
    {
        selector: '.techniques .cards .cards__item .cards__description',
        css: { lineHeight: '23px', fontSize: '18px', fontWeight: '400' },
    },
];

const VIDEO_CONDITIONS: BriefCondition[] = [
    { selector: '.video' },
    { selector: '.video .section-title', css: SECTION_TITLE_CSS },
    { selector: '.video .section-subtitle', css: SECTION_SUBTITLE_CSS },
    {
        selector: '.video .video__iframes',
        css: {
            width: '1050px',
        },
    },
    {
        selector: '.video .video__iframes .video__iframe',
        count: 2,
        css: {
            width: '515px',
            height: '316px',
        },
    },
];

const OAKLEY_CONDITIONS: BriefCondition[] = [
    { selector: '.oakley' },
    { selector: '.oakley .two-columns', css: TWO_COLUMNS_CSS },
    {
        selector:
            '.oakley .two-columns .two-columns__brief' /* todo add heading */,
        css: TWO_COLUMNS_BRIEF_CSS,
    },
    {
        selector: '.oakley .two-columns .two-columns__main-text',
        css: TWO_COLUMNS_MAIN_TEXT_CSS,
    },
    {
        selector:
            '.oakley .two-columns .two-columns__main-text .two-columns__paragraph',
        css: {
            ...TWO_COLUMNS_PARAGRAPH_CSS,
        },
    },
];

const KHAN_CONDITIONS: BriefCondition[] = [
    {
        selector: '.khan',
    },
    {
        selector: '.khan .khan__container',
        css: {
            width: '1280px',
        },
    },
    {
        selector: '.khan .khan__author',
        css: { lineHeight: '42px', fontSize: '30px', fontWeight: '400' },
    },
    {
        selector: '.khan .khan__title',
        css: {
            lineHeight: '1.15',
            fontSize: '60px',
            fontWeight: '700',
        },
    },
    {
        selector: '.khan .khan__quote',
        css: {
            width: '790px',
            lineHeight: '34px',
            fontSize: '24px',
            fontWeight: '400',
        },
    },
    {
        selector: '.khan .khan__quote-author',
        css: {
            lineHeight: '1.15',
            fontSize: '24px',
            fontWeight: '700',
        },
    },
    {
        selector: '.khan .khan__quote-author-subline',
        css: {
            lineHeight: '1.15',
            fontSize: '24px',
            fontWeight: '400',
        },
    },
    {
        selector: '.khan .khan__book-container',
        css: {
            display: 'flex',
            flexDirection: 'row',
        },
    },
    {
        selector: '.khan .khan__book-container .khan__book-pic',
        css: {
            width: '620px',
            height: '608px',
        },
    },
    {
        selector: '.khan .khan__book-container .khan__buy-link',
        css: {
            lineHeight: '42px',
            fontSize: '30px',
            fontWeight: '400',
        },
    },
];

const KAUFMAN_CONDITIONS: BriefCondition[] = [
    ...firstBrief.KAUFMAN_CONDITIONS,
    {
        selector: '.kaufman .kaufman__triangle.rotation',
        css: {
            animationDuration: '20s',
            animationTimingFunction: 'linear',
        },
    },
];

const RESOURCES_CONDITIONS: BriefCondition[] = [
    { selector: '.resources' },
    { selector: '.resources .section-title', css: SECTION_TITLE_CSS },
    { selector: '.resources .section-subtitle', css: SECTION_SUBTITLE_CSS },
    {
        selector: '.resources .resources__logo-zone',
        css: { display: 'flex', flexDirection: 'row', width: '1100px' },
    },
    {
        selector: '.resources .resources__logo',
        count: 4,
        css: {
            width: '270px',
            height: '38px',
        },
    },
];

export const SECOND_BRIEF_CONDITIONS = [
    ...HEADER_CONDITIONS,
    ...firstBrief.DESCRIPTION_CONDITIONS,
    ...TECHNIQUES_CONDITIONS,
    ...VIDEO_CONDITIONS,
    ...OAKLEY_CONDITIONS,
    ...firstBrief.FEYNMAN_CONDITIONS,
    ...firstBrief.DIGITS_CONDITIONS,
    ...KHAN_CONDITIONS,
    ...KAUFMAN_CONDITIONS,
    ...RESOURCES_CONDITIONS,
    ...FOOTER_CONDITIONS,
];
