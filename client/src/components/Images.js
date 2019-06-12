import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

const Figure = styled.figure`
  margin-bottom: 30px;
  display: inline-block;
  vertical-align: top;
`;

const Image = styled.img`
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: middle;
`;

const Images = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(30);
  const [start, setStart] = useState(1);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await axios
          .get(`/api/photos?count=${count}&start=${start}`)
          .then(res => {
            setImages(res.data);
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);
  return (
    <div>
      {images.map(e => (
        <Figure key={e.id}>
          <Image src={e.urls.small} alt={e.urls.regular} />
        </Figure>
      ))}
    </div>
  );
};

export default Images;
