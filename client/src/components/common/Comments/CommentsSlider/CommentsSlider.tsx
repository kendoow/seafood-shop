import { FC } from 'react'
import Slider from 'react-slick'
import { ArrowProps, SliderProps } from './CommentsSlider.types'
import './ComentsSlider.scss'
import leftArrow from '@assets/left-arrow.svg'
import rigthArrow from '@assets/right-arrow.svg'

function SampleNextArrow({ className, style, onClick }: ArrowProps) {
    const mediaMatch = window.innerWidth > 576
    return (
        <div
            className={className}
            style={{
                ...style,
                background: mediaMatch ? `url(${rigthArrow}) no-repeat` : 'none',
                position: 'absolute',
                marginRight: '80px',
                width: '22px',
                height: '35px',
                zIndex: '1',
            }}
            onClick={onClick}
        />
    )
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
    const mediaMatch = window.innerWidth > 576
    return (
        <div
            className={className}
            style={{
                ...style,
                background: mediaMatch ? `url(${leftArrow}) no-repeat` : 'none',
                position: 'absolute',
                marginLeft: '80px',
                width: '22px',
                height: '35px',
                zIndex: '1',
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
        arrows: true,
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
