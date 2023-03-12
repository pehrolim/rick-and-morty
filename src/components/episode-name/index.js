import React, { useEffect, useState } from "react";
import axios from "axios";

const NameEpisode = ({ episodeUrl }) => {
  const [episodeName, setEpisodeName] = useState("");

  useEffect(() => {
    const fetchEpisodeName = async () => {
        const episode = await axios.create({episodeUrl})
      setEpisodeName(episode.name);
    };

    fetchEpisodeName();
  }, [episodeUrl]);

  return <span>{episodeName}</span>;
};

export default NameEpisode