import React from 'react'
import styled from 'styled-components';


const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 130px 130px;
  grid-gap: 160px;
  padding-right: 100px;
`;
const ImageStyle = styled.div`
  width: 250px;
  height: 250px;
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  background-position: center;
  box-shadow: 0 12px 10px -6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all;

  &:hover {
    box-shadow: none;
    transition-duration: 0.3s;
    transform: translateY(5px);
    opacity: 0.8;
  }
`;

const ImageGrallery = (props) => {
    const fetchData = props.fetchData;
    // console.log("fetchData",fetchData);

    return (
        <div>
            <ImagesWrapper>
                {fetchData.map((data) => (
                    <ImageStyle key={data.id}>
                        <a href={data.pageURL} target='_blank'>
                            <ImgStyle src={data.largeImageURL} alt='' />
                        </a>
                    </ImageStyle>
                ))}
            </ImagesWrapper>
        </div>
    );
}

export default ImageGrallery