import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col, Form, FormGroup, Input, Row, Button } from "reactstrap";
import * as actions from "../../actions/pokemonActions";

const SearchBar = () => {
  const [searchType, setSearchType] = useState("name");
  const [searchCriteria, setSearchCriteria] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  function search(e) {
    e.preventDefault();

    if (searchType === "name") {
      history.push(`/pokemons/${searchCriteria}`);
    } else {
      dispatch(actions.fetchPokemonsByType(searchCriteria));
    }
  }

  function clearSearch(e) {
    e.preventDefault();
    setSearchCriteria("");
    dispatch(actions.fetchPokemons());
  }

  return (
    <Form onSubmit={search}>
      <Row form>
        <Col sm={12}>
          <FormGroup>
            <Input
              type="select"
              bsSize="sm"
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="type">Type</option>
            </Input>
          </FormGroup>
        </Col>
        <Col sm={12}>
          <FormGroup>
            <Input
              placeholder="Enter your search..."
              bsSize="sm"
              value={searchCriteria}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col sm={12}>
          <Row className="d-flex justify-content-center">
            <Button type="submit" size="sm" className="mx-2">
              Search
            </Button>
            <Button onClick={clearSearch} size="sm" className="mx-2">
              Clear
            </Button>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
