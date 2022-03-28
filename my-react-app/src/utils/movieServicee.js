import client from "./client.js";

const movieFields = `
titlename,
'actor': actor->name,
'category': category->name,
`;

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == 'movie']
    {${movieFields}}`);
  return data;
};

export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == 'movie' && slug.current == $slug]
    {${movieFields}}`,
    { slug }
  );
  return data;
};
