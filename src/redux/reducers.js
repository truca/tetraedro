import { actionTypes } from "./actions";
import questions from "../questions";

const helper = (oldState, newAttributes) =>
  Object.assign({}, oldState, newAttributes);

const reducer = (
  state = {
    selected: undefined,
    questions: questions.map((question, i) => helper(question, { id: i }))
  },
  action
) => {
  switch (action.type) {
    case actionTypes.select:
      return helper(state, { selected: action.id });
    case actionTypes.selectUp:
      const newSelected = (state.selected + 1) % state.questions.length;
      return helper(state, { selected: newSelected });
    case actionTypes.selectDown:
      const newSelected = state.selected - 1;
      if (newSelected < 0) newSelected += state.questions.length;
      return helper(state, { selected: newSelected });
    default:
      return state;
  }
};

export default reducer;
