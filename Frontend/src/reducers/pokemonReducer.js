import {
  FETCH_POKEMON,
  FETCH_POKEMONS,
  FETCH_POKEMONS_BY_TYPE,
} from "../actions";

const initialState = {
  pokemons: [],
  totalCount: 0,
  pokemon: {},
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.results,
        totalCount: action.payload.count,
      };
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case FETCH_POKEMONS_BY_TYPE:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        totalCount: action.payload.totalCount,
      };
    default:
      return state;
  }
};
