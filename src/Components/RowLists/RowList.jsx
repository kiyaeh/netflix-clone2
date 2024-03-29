import React from "react";
import Row from "./Row/Row";
import requests from "../../utils/requests";

const RowList = () => {
  return (
    <div>
      <Row
        title="NETFLIX 0RIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        IsLargeRow
      />
      <Row title=" Tranding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> *
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};
export default RowList;
