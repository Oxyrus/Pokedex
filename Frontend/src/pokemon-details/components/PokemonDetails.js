import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import * as actions from "../../actions/pokemonActions";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const { name } = useParams();

  const { pokemon } = useSelector((store) => store.pokemonReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPokemon(name));
  }, [dispatch, name]);

  function formatMoves(moves) {
    return moves?.map((move) => move.move.name).join(", ");
  }

  function formatTypes(types) {
    return types?.map((type) => type.type.name).join(", ");
  }

  if (!pokemon) {
    return (
      <Container>
        <img
          className="mx-auto d-block"
          src="https://i.pinimg.com/originals/21/a6/3e/21a63ed428a73d878af6b8c9aaedea37.gif"
          alt="Pokemon not found"
        />
        <p className="text-center">Pokemon not found</p>
        <p className="text-center">
          <Link to="/pokemons">Go back to listing</Link>
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="pokemon-details">
          <article>
            <img
              src={pokemon?.sprites?.front_default}
              alt=""
              className="mx-auto d-block"
            />
            <p className="h3 text-center">About {pokemon.name}</p>
            <p>
              <span className="font-weight-bolder">Id:</span> {pokemon?.id}
            </p>
            <p>
              <span className="font-weight-bolder">Weight:</span>{" "}
              {pokemon?.weight}
            </p>
            <p>
              <span className="font-weight-bolder">Height:</span>{" "}
              {pokemon?.height}
            </p>
            <p>
              <span className="font-weight-bolder">Moves:</span>{" "}
              {formatMoves(pokemon?.moves)}
            </p>
            <p>
              <span className="font-weight-bolder">Types:</span>{" "}
              {formatTypes(pokemon?.types)}
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default PokemonDetails;
