import React from "react";

function Tile({tileImage, tileTitle, tileText}) {
    if (tileTitle === '') {
        return (
            <section>
                <img src={tileImage} alt="Afbeelding"/>
            </section>
        )
    } else {
        return (
            <section>
                <h2>{tileTitle}</h2>
                <p>{tileText}</p>
            </section>
        )
    }
}

export default Tile;