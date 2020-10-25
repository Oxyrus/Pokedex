import React, { useEffect, useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const pokemonTypeStyles = new Map()
  .set("fire", "#fb6c6c")
  .set("grass", "#48d0b0")
  .set("poison", "#28ab68")
  .set("bug", "#ce8e3f")
  .set("flying", "#adbcc3")
  .set("water", "#6db3f8")
  .set("electric", "#ffd76f");

const cardStyle = (types = []) => {
  const backgroundColor = types
    .map((type) => type.type.name)
    .find((type) => pokemonTypeStyles.has(type));

  const style = {
    backgroundColor: pokemonTypeStyles.get(backgroundColor) || "gray",
    color: "#fff",
    border: "none",
    boxShadow: "2px 2px 1px #e0dddd",
  };

  return style;
};

const pillStyle = (type) => {
  const background = pokemonTypeStyles.get(type);

  const style = {
    backgroundColor: background || "gray",
    filter: "brightness(110%)",
    borderRadius: "1rem",
    padding: "0.4rem 1rem",
  };

  return style;
};

const PokemonCard = ({ name }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}/`
      );
      setPokemon(await response.json());
    };
    fetchData();
  }, [name]);

  if (!pokemon) {
    return <span>Fetching pokemon...</span>;
  }

  return (
    <Card className="my-4" style={cardStyle(pokemon.types)}>
      <CardBody>
        <Row>
          <Col>
            <Link to={`/pokemons/${name}`} className="h4 text-reset">
              {name}
            </Link>
            <div className="my-5">
              {pokemon?.types?.map((type) => (
                <span
                  key={`${name}-${type.type.name}`}
                  style={pillStyle(type.type.name)}
                  className="mx-1"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </Col>
          <Col className="d-flex align-items-end">
            <img src={pokemon?.sprites?.front_default} alt={name} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokemonCard;
