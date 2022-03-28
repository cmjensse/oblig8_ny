// ikke i bruk, test, fungerte ikke.

import client from "./client";

const eventFields = `
    movie, 
    titlename, 
    'slug': slug.current,
    "actor": actor->title,
`;

export const getEvents = async () => {
  const data = await client.fetch(`*[_type == "movie"]${eventFields}`);
  return data;
};

export const getEvent = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${eventFields}}`,
    { slug }
  );
  return data;
};
