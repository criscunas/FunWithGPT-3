const initialState = [];

function nextEntry(prompts) {
  const maxId = prompts.reduce((maxId, prompt) => Math.max(prompt.id, maxId), -1)
  return maxId + 1
}

export default function promptReducer(state = initialState, action) {
  switch (action.type) {
    case 'prompts/add': {
      return [
        ...state,
        {
          id: nextEntry(state),
          data: action.payload,
        }
      ]
    }
    case 'prompts/delete' : {
      return state.filter((prompt) => prompt.id !== action.payload )
    }
    case 'prompts/allDelete' : {
      return initialState;
    }

    default:
      return state
  }
}