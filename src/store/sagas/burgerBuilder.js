import axios from "../../axios-orders";
import {put} from "redux-saga/effects";
import * as actions from "../actions/index";


export function* initIngredientsSaga(action) {
    try {
      const response = yield axios.get(
        "https://react-my-burger.firebaseio.com/ingredients.json"
      );
      yield put(actions.setIngredients(response.data));
    } catch (error) {
      yield put(actions.fetchIngredientsFailed());
    }
  }
  