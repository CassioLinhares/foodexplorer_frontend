import { VALUE_BREAKPOINTS } from "../styles/deviceBreakPoints";

export function calculateSwiperParams () {
    let spaceBetween, slidesPerView;
    const screenWidth = window.innerWidth;

    switch (true) {
        case screenWidth <= VALUE_BREAKPOINTS.XS:
            spaceBetween = 50;
            slidesPerView = 1.5;
            break;
        case screenWidth <= VALUE_BREAKPOINTS.SM:
            spaceBetween = 0;
            slidesPerView = 1.5;
            break;
        case screenWidth <= VALUE_BREAKPOINTS.MM:
            spaceBetween = -50;
            slidesPerView = 1.5;
            break;
        case screenWidth >= VALUE_BREAKPOINTS.MM && screenWidth <= VALUE_BREAKPOINTS.LG:
            spaceBetween = 10;
            slidesPerView = 3.2;
            break;
        default:
            spaceBetween = 30;
            slidesPerView = 3.5;
            break;
    }


    return { spaceBetween, slidesPerView };
};