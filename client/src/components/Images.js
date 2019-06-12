import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Image from "./Image";

const Figure = styled.figure`
  margin-bottom: 30px;
  display: inline-block;
  vertical-align: top;
`;

const Images = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(30);
  const [start, setStart] = useState(1);

  const fetchImages = async (status = false) => {
    status && setStart(start + count);
    try {
      const result = await axios
        .get(`/api/photos?count=${count}&start=${start}`)
        .then(res => {
          setImages(images.concat(res.data));
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages(true);
  });

  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {images.map(image => (
          <Figure key={image.id}>
            <Image source={image.urls.small} />
          </Figure>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Images;
