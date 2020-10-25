import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import RegisterTrainer from "./register-trainer/components";
import { Container } from "reactstrap";
import ListPokemons from "./list-pokemons/components";
import PokemonDetails from "./pokemon-details/components/PokemonDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className="mt-5">
        <main>
          <Switch>
            <Route path="/pokemons/:name">
              <PokemonDetails />
            </Route>
            <Route path="/pokemons">
              <ListPokemons />
            </Route>
            <Route path="/">
              <RegisterTrainer />
            </Route>
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  );
};

/*
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();

  <h1>Counter: {count}</h1>
  <button onClick={() => dispatch(actions.increment())}>+1</button>
  <button onClick={() => dispatch(actions.decrement())}>-1</button>

  <RegisterTrainer />
*/

export default App;
