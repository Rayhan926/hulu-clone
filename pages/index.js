import Head from "next/head";
import requests from "../utils/requests";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import Results from "./../components/Results";
export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Hulu | By Saymon</title>
      </Head>
      {/* <h1>Hello</h1> */}
      <div className="globalContainer">
        <Header />
        <Nav />
        <Results results={results} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  let fetchUrl = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.trending.url
  }`;
  const request = await fetch(fetchUrl).then((res) => res.json());
  return {
    props: request,
  };
}
// https://api.themoviedb.org/3/discover/movie?api_key=fba2c0e57517fd5376acd6cc9f52f05e&with_genres=10770
