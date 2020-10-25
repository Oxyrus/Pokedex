import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row } from "reactstrap";
import * as actions from "../../../actions/pokemonActions";

const Pagination = () => {
  const { pokemons, totalCount } = useSelector((store) => store.pokemonReducer);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons && totalCount) {
      setMaxPage(Math.ceil(totalCount / pokemons.length));
    } else {
      setMaxPage(1);
    }
  }, [pokemons, totalCount]);

  function isLastPage() {
    return page === maxPage;
  }

  function isFirstPage() {
    return page === 1;
  }

  function changePage(value) {
    const offset = (page - 1 + value) * 50;
    setPage(page + value);
    dispatch(actions.fetchPokemons(offset));
  }

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Button
          disabled={isFirstPage()}
          onClick={() => changePage(-1)}
          className="mx-1"
        >
          &lt;
        </Button>
        <Button
          disabled={isLastPage()}
          onClick={() => changePage(1)}
          className="mx-1"
        >
          &gt;
        </Button>
      </Row>
      <Row className="d-flex justify-content-center">
        <p>
          Page {page} of {maxPage}
        </p>
      </Row>
    </>
  );
};

export default Pagination;
