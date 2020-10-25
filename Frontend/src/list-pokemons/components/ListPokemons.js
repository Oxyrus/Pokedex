import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import * as actions from "../../actions/pokemonActions";
import PokemonCard from "./PokemonCard";
import Pagination from "../../shared/components/Pagination";
import SearchBar from "./SearchBar";

const ListPokemons = () => {
  const { pokemons, totalCount } = useSelector((store) => store.pokemonReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPokemons());
  }, [dispatch]);

  if (!pokemons && totalCount) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <SearchBar />
      </Row>
      <Row>
        <Col sm="12">
          <Row>
            {pokemons?.map((pokemon) => (
              <Col sm="12" md="4" key={pokemon.name}>
                <PokemonCard name={pokemon.name} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};

export default ListPokemons;
