import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './main';
import { initState, reducer } from '../store/reducer';
import Error from './Error';
import Loader from './Loader';
import { API_URL } from '../const';
import { QuestionsType } from '../types/types';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { status, questions } = state;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new TypeError('Could not find. Check your url');
        }
        return res.json();
      })
      .then((res) =>
        dispatch({ type: 'dataReceived', payload: res as QuestionsType[] })
      )
      .catch((e) => dispatch({ type: 'error' }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <p>{questions.length}</p>}
      </Main>
    </div>
  );
}
