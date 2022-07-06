//selectors
export const getString = ({string}) => string;
//action
const createActionName =actionName => `app/string/${actionName}`;
const SEARCH_VALUE = createActionName('SEARCH_VALUE');
// action creators
export const searchValue = payload => ({ type: SEARCH_VALUE, payload });
const stringReducer = (statePart = '', action) => {
  switch(action.type) {
    case SEARCH_VALUE:
      return action.payload
    default:
      return statePart;
  }
}
export default stringReducer;
