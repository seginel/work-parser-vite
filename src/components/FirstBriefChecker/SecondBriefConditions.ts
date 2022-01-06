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
import { Colors } from './FirstBriefConditions';

const HEADER_CONDITIONS: BriefCondition[] = [
    ...firstBrief.HEADER_CONDITIONS,
    {
        selector: '.header .rotation',
        css: {
            animationDuration: '20s',
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
        css: { lineHeight: '23px', fontSize: '18px', fontWeight: '23px' },
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
            marginBottom: '30px',
            ...TWO_COLUMNS_PARAGRAPH_CSS,
        },
    },
];
