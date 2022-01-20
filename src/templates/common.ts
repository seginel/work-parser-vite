export const DEV_MIX = `
* {
    animation: none !important;
    transform: none !important;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.video__iframe {
  background-color: black;
}

*::-webkit-scrollbar {
  display: none;
}

`;

export const DEV_MIX_WITHOUT_ANIMATION = `
* {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.video__iframe {
  background-color: black;
}

*::-webkit-scrollbar {
  display: none;
}
`;
