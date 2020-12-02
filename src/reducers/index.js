import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import addProduct from '../pages/AddProduct/reducer';

const rootReducer = combineReducers({
  addProduct,
  form: formReducer,
  routing: routerReducer,
});

export default rootReducer;
