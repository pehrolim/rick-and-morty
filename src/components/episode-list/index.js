import React, { useEffect, useState } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEpisodes } from "../../utils/http";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const data = await getEpisodes(currentPage);
      setEpisodes(data.results);
    };
    fetchEpisodes();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="card-columns">
      {episodes.map((episode) => (
        <div key={episode.id} className="mb-4">
          <Link to={`/episode/${episode.id}`} className="text-decoration-none">
            <Card>
              <Card.Body>
                <Card.Title>{episode.name}</Card.Title>
                <Card.Text>
                  <Badge pill variant="info">
                    Date: {episode.air_date}
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
      <div className="col-12 d-flex justify-content-center">
        <Button
          variant="primary"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous Page
        </Button>
        <Button
          variant="primary"
          className="ml-2"
          disabled={episodes.length === 0}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default EpisodeList;
