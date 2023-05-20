import clientPromise from "@/util/mongodb";
import { Heading, Text, Box } from '@chakra-ui/react';

import Container from "@/components/Container";

export default function Movies({ movies }) {
  console.log(movies)
    return (
      <Container>
        <Heading pb={2}>Top {movies.length} Movies of All Time</Heading>
        <div>
          {movies.map((movie) => (
            <Box p={5} m={3} borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Heading pb={2}>{movie.title}</Heading>
              <Heading size="h3">Rating: {movie.metacritic}</Heading>
              <Heading pb={2} size="h3">Year Released: {movie.year}</Heading>
              <Text>Description: {movie.fullplot}</Text>
            </Box>
          ))}
        </div>
      </Container>
    );
  }
  export async function getServerSideProps(req, res) {
    const client = await clientPromise
    const database = client.db('sample_mflix');
    const movies = await database
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();
    return {
      props: {
        movies: JSON.parse(JSON.stringify(movies)),
      },
    };
  }