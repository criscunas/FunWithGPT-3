import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import promptReducer from '../src/features/prompts/promptsAdd';

export function makeStore() {
  return configureStore({
    reducer: { prompts: promptReducer}
  })
}

const store = makeStore()

export default store;