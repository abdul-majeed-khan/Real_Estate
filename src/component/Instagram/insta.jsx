import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  padding: 0 40px;
  margin: 40px 0px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 700;
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

const INSTAGRAM_TOKEN = import.meta.env.VITE_REACT_APP_INSTAGRAM_TOKEN;

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const limit = 9; // Number of posts to fetch

  useEffect(() => {
    const fetchPosts = async () => {
      if (!INSTAGRAM_TOKEN) {
        setError('Instagram access token is not set. Please check your environment variables.');
        return;
      }

      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${INSTAGRAM_TOKEN}&limit=${limit}`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError('Failed to fetch Instagram posts. Please try again later.');
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

  if (error) {
    return <Container><Title>{error}</Title></Container>;
  }

  return (
    <Container>
      <Title>Instagram Feed</Title>
      {posts.length > 0 ? (
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
      ) : (
        <p>Loading Instagram posts...</p>
      )}
    </Container>
  );
};

export default InstagramFeed;