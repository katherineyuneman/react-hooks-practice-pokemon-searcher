import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, sprites:{front, back}}) {

  const [imgSrc, setImgSrc] = useState(front)

  function handleImgChange () {
    if (imgSrc === front) {
      const newImgSrc = back
      setImgSrc(newImgSrc)
    } else { 
      const newImgSrc = front 
      setImgSrc(newImgSrc)
  }
  }
 
  return (
    <Card>
      <div>
        <div className="image">
          <img src={imgSrc} alt="oh no!" onClick={handleImgChange}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
