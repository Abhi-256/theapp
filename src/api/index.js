import axios from 'axios';

const API = axios.create({ baseURL: 'https://xmeme-backend01.herokuapp.com/' });

export const fetchMeme = () => API.get('/memes');
export const createMeme = (newMeme) => API.post('/memes', newMeme);
export const updateMeme = (id, updatedMeme) => API.patch(`/memes/${id}`, updatedMeme);