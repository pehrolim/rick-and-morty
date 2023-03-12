import React, { useState, useEffect } from "react";
import { Card, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCharacters } from "../../utils/http";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters(currentPage);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    };
    fetchCharacters();
  }, [currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="row">
      {characters.map((character) => (
        <div key={character.id} className="col-12 col-md-4 col-lg-3 mb-3">
          <Card>
            <Card.Img variant="top" src={character.image} alt={character.name} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>Status: {character.status}</Card.Text>
              <Card.Text>Species: {character.species}</Card.Text>
              <Card.Text>Location: {character.location.name}</Card.Text>
              <Link to={`/character/${character.id}`}>Details</Link>
            </Card.Body>
          </Card>
        </div>
      ))}
      <div className="col-12">
        <Pagination className="justify-content-center">
          <Pagination.First
            disabled={currentPage === 1}
            onClick={() => onPageChange(1)}
          />
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          />
          <Pagination.Last
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default CharacterList;