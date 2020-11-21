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
        abv
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
      <h1
        className='text-5xl'
        style={{ textAlign: 'center', paddingTop: '3rem' }}
      >
        Brewdog IPA
      </h1>
      {beers.map(beer => (
        <Card key={beer.id} beer={beer} />
      ))}
    </div>
  );
}
