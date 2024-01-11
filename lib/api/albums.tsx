export const getAlbumsByUser = async (id: number) => {
  return await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(() => []);
};

export const getAlbumPhotos = async (id: number) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
  )
    .then(response => response.json())
    .then(data => data)
    .catch(() => []);
};
