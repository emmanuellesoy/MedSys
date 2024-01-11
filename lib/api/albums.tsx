const API_PATH = 'https://jsonplaceholder.typicode.com';

export const getAlbumsByUser = async (id: number) => {
  return await fetch(`${API_PATH}/albums?userId=${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(() => []);
};

export const getAlbumPhotos = async (id: number) => {
  return await fetch(`${API_PATH}/photos?albumId=${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(() => []);
};

export const getAllPhotos = async () => {
  return await fetch(`${API_PATH}/photos`)
    .then(response => response.json())
    .then(data => data)
    .catch(() => []);
};
