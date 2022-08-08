import { FC } from 'react'
import { ArrowProps, SliderProps } from './CommentsSlider.types'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.scss'
// import 'slick-carousel/slick/slick-theme.scss'

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
    return (
        <div
            className={className}
            style={{
                ...style,
                marginTop: '0',
                position: 'absolute',
                marginRight: '40px',
                width: '22px',
                zIndex: '1',
                transform: 'scale(2)'
            }}
            onClick={onClick}
        />
    )
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
    return (
        <div
            className={className}
            style={{
                ...style,
                marginTop: '0',
                position: 'absolute',
                marginLeft: '40px',
                width: '22px',
                zIndex: '1',
                transform: 'scale(2)'
            }}
            onClick={onClick}
        />
    )
}

const CommentsSlider: FC<SliderProps> = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots slick-thumb',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (

        <Slider {...settings}>

            {children}

        </Slider>

    )
}

export default CommentsSlider
