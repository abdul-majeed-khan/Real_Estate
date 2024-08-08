import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  padding: 0 40px;
  margin: 40px 0;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px;
  }
`;

const Post = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img,
  video {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = 'IGQWRPY0dkYWFIbDdoazNuV2xNeF8wbFNoUWRZAY0tMb0ZAOZADgzYWxDYTRmcmZAndEhpR2ZAVa1J2S29uV0ZA1clpSTUhCem1vUXhZAUFA0V250MzIteThGdmhBTXJPVVlicTZALZAkVJcWJ3NXJza0lZAMGo1WDhhSlppUzQZD';
  const limit = 9; // Number of posts to fetch

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=${limit}`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>My Instagram Feed</Title>
      <StyledSlider {...settings}>
        {posts.map((post) => (
          <Post key={post.id}>
            {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
              <img src={post.media_url} alt={post.caption} />
            ) : post.media_type === 'VIDEO' ? (
              <video src={post.media_url} controls />
            ) : null}
          </Post>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default InstagramFeed;