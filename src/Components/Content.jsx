import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';


const Wrapper = styled.div`
width: 100%;
`;

const Page = styled.div`
width:100%;
font-weight:bold;
font-size:50px;
margin-top:20%;
`;

const Content = (props) => {
    const [pages, setpages] = useState(['page 1', 'page 2', 'page 3 ', 'page 4'])

    useEffect(()=>console.log("props are ",props),[])
    
    return (
        <Wrapper className={Container}>
            <Slider
                spedd={500}
                slidesToShow={1}
                slidesToScrol={1}
                infinite={false}
                dots={true}
            >
                {
                    pages.map((page, index) => <Page key={index}>{page}</Page>)
                }
            </Slider>
        </Wrapper>
    )
}

export default Content;