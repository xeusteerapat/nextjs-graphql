import useSWR from 'swr';
import styles from '../styles/Home.module.css';
import axios from 'axios';

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
        brewery_type
        state
        latitude
        longitude
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
    <div className={styles.container}>
      <h1>Hello World</h1>
      <h3>List of Beers</h3>
      {beers.map(beer => (
        <ul key={beer.id}>{beer.name}</ul>
      ))}
    </div>
  );
}
