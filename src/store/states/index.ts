import { combineReducers } from "redux";

import QuestionsReducer from "./questions/reducer";
import SessionReducer from "./session/reducer";
import ThemeReducer from "./theme/reducer";

const reducers = combineReducers({
    questions: QuestionsReducer,
    session: SessionReducer,
    theme: ThemeReducer
});

export default reducers;