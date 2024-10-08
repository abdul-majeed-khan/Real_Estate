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
`;

const MediaContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const PlaceholderText = styled.p`
  text-align: center;
  color: #888;
`;

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const limit = 9; // Number of posts to fetch

  useEffect(() => {
    const fetchPosts = async () => {
      const token = import.meta.env.VITE_REACT_APP_INSTAGRAM_TOKEN;
      
      if (!token) {
        console.error('Instagram token is undefined:', token);
        setError('Instagram access token is not set. Please check your environment variables.');
        return;
      }

      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=${limit}`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError('Failed to fetch Instagram posts. Please try again later.');
      }
    };

    fetchPosts();
  }, []);

  const handlePlayVideo = (postId) => {
    setPlayingVideo(postId);
  };

  const renderMedia = (post) => {
    switch (post.media_type) {
      case 'IMAGE':
        return <StyledImage src={post.media_url} alt={post.caption || 'Instagram post'} />;
      case 'VIDEO':
        if (playingVideo === post.id) {
          return <StyledVideo src={post.media_url} controls autoPlay />;
        } else {
          return (
            <>
              <StyledImage src={post.thumbnail_url || post.media_url} alt={post.caption || 'Video thumbnail'} />
              <PlayButton onClick={() => handlePlayVideo(post.id)}>▶</PlayButton>
            </>
          );
        }
      case 'CAROUSEL_ALBUM':
        return post.media_url ? (
          <StyledImage src={post.media_url} alt={post.caption || 'Carousel post'} />
        ) : (
          <PlaceholderText>Carousel Album</PlaceholderText>
        );
      default:
        return <PlaceholderText>Unsupported Media Type</PlaceholderText>;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
              <MediaContainer>
                {renderMedia(post)}
              </MediaContainer>
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