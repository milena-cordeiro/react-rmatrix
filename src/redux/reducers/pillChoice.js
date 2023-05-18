const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHOSE A PILL':
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export default selectedPill;
