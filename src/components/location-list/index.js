import React, { useEffect, useState } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLocations } from "../../utils/http";

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocations(currentPage);
      setLocations(data.results);
    };
    fetchLocations();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="row">
      {locations.map((location) => (
        <div key={location.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <Link to={`/location/${location.id}`} className="text-decoration-none">
            <Card>
              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Card.Text>
                  <Badge pill variant="info">
                    Type: {location.type}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    Dimension: {location.dimension}
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
          disabled={locations.length === 0}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default LocationList;
