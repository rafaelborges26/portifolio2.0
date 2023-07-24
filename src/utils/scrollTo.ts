export const setScroll = (scroll: number) => {
    window.scrollTo({
        top: scroll,
        behavior: 'instant'
    })
}