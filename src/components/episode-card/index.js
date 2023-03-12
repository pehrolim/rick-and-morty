import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEpisode } from "../../utils/http";
import CharacterList from '../character-list';

const EpisodeCard = ({ id }) => {
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      const data = await getEpisode(id);
      setEpisode(data);
    };
    fetchEpisode();
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{episode.name}</Card.Title>
        <Card.Text>
          <Badge pill variant="info">
            Date: {episode.air_date}
          </Badge>
        </Card.Text>
        <CharacterList characters={episode.characters} />
      </Card.Body>
    </Card>
  );
};

export default EpisodeCard;
