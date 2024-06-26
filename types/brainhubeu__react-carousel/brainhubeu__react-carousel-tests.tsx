import Carousel, {
    arrowsPlugin,
    autoplayPlugin,
    centeredPlugin,
    clickToChangePlugin,
    Dots,
    fastSwipePlugin,
    type ImgProps,
    infinitePlugin,
    rtlPlugin,
    slidesToScrollPlugin,
    slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import * as React from "react";

interface MyCarouselProps {
    value: number;
}

interface MyCarouselState {
    value: number;
    slides: ImgProps[];
}

class MyCarousel extends React.Component<MyCarouselProps, MyCarouselState> {
    state = {
        value: 0,
        slides: [<img key={1} alt="img-2" />, <img key={2} alt="img-2" />, <img key={3} alt="img-3" />],
    };

    handleChange = (value: number) => {
        this.setState({ value });
    };

    render() {
        const { value, slides } = this.state;

        return (
            <>
                <Carousel
                    plugins={[
                        "infinite",
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            },
                        },
                        {
                            resolve: slidesToScrollPlugin,
                            options: {
                                numberOfSlides: 3,
                            },
                        },
                        {
                            resolve: infinitePlugin,
                            options: {
                                numberOfInfiniteClones: 1,
                            },
                        },
                        {
                            resolve: clickToChangePlugin,
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 2000,
                                direction: "left",
                            },
                        },
                        {
                            resolve: rtlPlugin,
                        },
                        {
                            resolve: centeredPlugin,
                        },
                        {
                            resolve: arrowsPlugin,
                            options: {
                                arrowLeft: <button>{"<<"}</button>,
                                arrowLeftDisabled: <button>{"<"}</button>,
                                arrowRight: <button>{">>"}</button>,
                                arrowRightDisabled: <button>{">"}</button>,
                                addArrowClickHandler: true,
                            },
                        },
                        {
                            resolve: fastSwipePlugin,
                        },
                    ]}
                    animationSpeed={2000}
                    draggable
                    itemWidth={100}
                    onChange={this.handleChange}
                    offset={50}
                    slides={slides}
                    value={value}
                    breakpoints={{
                        900: {
                            animationSpeed: 2000,
                            draggable: true,
                            itemWidth: 100,
                            onChange: this.handleChange,
                            offset: 50,
                            slides,
                            value,
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2,
                                    },
                                },
                            ],
                        },
                    }}
                >
                    <img alt="image-1" />
                    <img alt="image-2" />
                    <img alt="image-3" />
                </Carousel>
                <Dots
                    number={slides.length}
                    value={value}
                    onChange={this.handleChange}
                    rtl={false}
                    className="some-class"
                />
            </>
        );
    }
}
