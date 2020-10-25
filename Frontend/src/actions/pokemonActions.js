export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const FETCH_POKEMON = "FETCH_POKEMON";
export const FETCH_POKEMONS_BY_TYPE = "FETCH_POKEMONS_BY_TYPE";

export const fetchPokemons = (offset = 0) => {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=50`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: FETCH_POKEMONS,
          payload: response,
        });
      });
  };
};

export const fetchPokemon = (name) => {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((response) => response.json())
      .catch(() => {
        dispatch({
          type: FETCH_POKEMON,
          payload: {},
        });
      })
      .then((response) => {
        dispatch({
          type: FETCH_POKEMON,
          payload: response,
        });
      });
  };
};

export const fetchPokemonsByType = (type) => {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then((response) => response.json())
      .catch(() => {
        dispatch({
          type: FETCH_POKEMONS_BY_TYPE,
          payload: {
            pokemons: [],
            totalCount: 0,
          },
        });
      })
      .then((response) => {
        dispatch({
          type: FETCH_POKEMONS_BY_TYPE,
          payload: {
            pokemons: response?.pokemon?.map((pokemon) => pokemon.pokemon),
            totalCount: response?.pokemon?.length,
          },
        });
      });
  };
};
