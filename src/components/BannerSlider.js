import React from 'react'
import Slider from 'react-slick'
import './bannerslider.css'


const BannerSlider = () => {
    const CouroselData=[
        { 
            id:1,
            image:'https://media.istockphoto.com/id/1209100469/photo/honey-in-a-glass-jar-and-honeycomb-lemon-and-mint-on-a-wooden-table-and-dark-wall-background.jpg?s=612x612&w=is&k=20&c=JbXCcPtxmsS0_S-9eOvz_brDWQgtvIDIPWaOgZCGlTY=',
            title:'HomeMade Honey At your Service',
            description:'Enjoy the tasty honey made purely from himalayan forests , engraving the freshness and true buety',
            button:'Shop'
        },
        {
            id:2,
            image:'https://media.istockphoto.com/id/1203599963/photo/food-background-with-assortment-of-fresh-organic-fruits-and-vegetables.webp?b=1&s=170667a&w=0&k=20&c=-VB6zEFnk6G0dP2-5_55IZW1yKP4GNTw8iKvEwYHWqc=',
            title:'Fresh Vegetables At your Service',
            description:'Enjoy the tasty honey made purely from himalayan forests , engraving the freshness and true buety',
            button:'Shop Now'
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='banner-slider'>
        <Slider className='banner-slider' {...settings}>
        {
            CouroselData.map((element)=>{
                return(
                <div className='image-container'  key={element.id}>
                    <img src={element.image}/>
                    <div className='content-inside'>
                        <h1 style={{fontSize:'2.0rem'}}>{element.title}</h1>
                        <p>{element.description}</p>
                        <button className='btn btn-secondary'>{element.button}</button>
                    </div>


                </div>
                )
            })
        }

        </Slider>
      
    </div>
  )
}

export default BannerSlider
