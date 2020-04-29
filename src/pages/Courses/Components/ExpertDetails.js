import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle
}                   from "reactstrap";
import Slider       from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ExpertDetails({
    expertDetails
}) {
    return (
        <>
            <Row className="mt-5">
                <Col xs="12">
                    <h3 className="">
                        Expert Panel
                    </h3>
                    <div className="heading-underlined">&nbsp;</div>
                </Col>
            </Row>   
            <Row>
                <Col xs="12">
                    <ImageSlider expertDetails = {expertDetails} />
                </Col>
            </Row>   
        </>
    )
}

const ImageSlider = ({
    expertDetails
}) => {
    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    return(
        <Slider {...settings}>
            {
                expertDetails.map((expert,index) => {
                    return(
                        <React.Fragment key={index}>
                            <Card className="expert-card">
                                <CardImg top src={expert.profilePic} alt="Card image cap" className="imageCard"/>
                                <CardBody>
                                    <CardTitle className="text-center">
                                        {`${expert.title} ${expert.expertName}`}
                                    </CardTitle>
                                    <CardSubtitle className="text-center">
                                        {expert.qualification}
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </React.Fragment>
                    )
                })
            }
        </Slider>
    )
}



