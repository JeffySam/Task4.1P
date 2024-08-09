import React, { useEffect, useState } from "react";
import axios from "axios";

const FeaturedArticle = ({ name, description }) => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    // Fetch a random image from Picsum
    setImage("https://picsum.photos/seed/picsum/200/300");

    // Fetch random text
    axios.get("https://baconipsum.com/api/?type=meat-and-filler&paras=2")
      .then(response => setText(response.data.join(" ")))
      .catch(error => console.error("Error fetching random text", error));
  }, []);

  return (
    <div className="content-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt="Random from Picsum" />
      <p>{text}</p>
    </div>
  );
};

export default FeaturedArticle;
