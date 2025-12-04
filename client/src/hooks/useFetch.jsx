import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifURL, setGifURL] = useState('');

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
            .split(' ')
            .join('')}&limit=1`
        );
        const { data } = await res.json();

        setGifURL(data[0]?.images?.downsized_medium.url);
      } catch (error) {
        setGifURL(
          'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTEwcjgzY3Z3Nzd5dzAwamJrcWkzM2hpeWNjMWV5cnBjZW1hZHgybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fV8iuSEwLQ6005diSh/giphy.gif'
        );
        toast.error(error.message);
      }
    };

    fetchGifs();
  }, [keyword]);

  return gifURL;
};

export default useFetch;
