import axios from 'axios';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=18963132-a5d8582da162d4c0f5ee62384&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default apiService;