import useSWR from 'swr';
import axios from 'axios';
import Card from '../components/Card';

const fetchBeer = async query => {
  const response = await axios({
    method: 'POST',
    url: '/api/graphql',
    data: JSON.stringify({ query }),
  });

  return response.data;
};

export default function Home() {
  const { data, error } = useSWR(
    `
    query {
      beers {
        id
        name
        tagline
        description
        image_url
      }
  }`,
    fetchBeer
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const {
    data: { beers },
  } = data;

  return (
    <div>
      <h1>Hello World</h1>
      <h3>List of Beers</h3>
      {beers.map(beer => (
        <ul key={beer.id}>{beer.name}</ul>
      ))}
    </div>
  );
}
