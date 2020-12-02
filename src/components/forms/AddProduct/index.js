import { reduxForm } from 'redux-form';
import Component from './AddProductForm';
import validate from './validate';

const initialValues = {
  nameProduct: '',
  image: '',
  price: '',
  stockType: false,
  stock: '',
  discountType: false,
  discount: '',
};

export default reduxForm({
  form: 'add-product',
  initialValues,
  validate,
})(Component);
