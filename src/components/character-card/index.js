import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { getCharacter} from "../../utils/http";
import { useParams } from "react-router";

const CharacterCard = ({ match }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacter(id);
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  if (!character) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <Card>
          <Card.Img variant="top" src={character.image} alt={character.name} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              <Badge
                pill
                variant={character.status === "Alive" ? "success" : "danger"}
              >
                Status: {character.status}
              </Badge>
              <br />
              <Badge pill variant="secondary">
                Species: {character.species}
              </Badge>
              <br />
              <Badge pill variant="info">
                Location: {character.origin.name}
              </Badge>
              <br />
              <Badge pill variant="info">
                Location: {character.location.name}
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <Card.Body>
            <Card.Title>Episodes ({character.episode.length})</Card.Title>
            <ul>
              {character.episode.map((episode) => (
                <li key={episode}>{console.log(character.episode)}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CharacterCard;
