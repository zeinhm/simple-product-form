import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { useSelector } from 'react-redux';
import Button from '../../elements/Button';
import ButtonLink from '../../elements/ButtonLink';
import Switch from '../../fields/Switch';
import TextField from '../../fields/Text';
import './styles.scoped.css';
import iconEmpty from '../../../assets/ic-empty.svg'
import { thousand } from '../../../utils/format';

export default function AddProductForm(props) {
  const { change, product, handleSubmit, invalid, nameCategory, submitSucceeded } = props;
  const formProduct = useSelector(s => s.form);
  const onlyNums = (value) => value.replace(/[^\d]/g, '');
  const [useStock, setUseStock] = useState(product.stockType);
  const [useDiskon, setUseDiskon] = useState(product.discountType);
  const renderField = (name, placeholder, normalize, limit = 50) => {
    const inputProps = {
      placeholder,
      maxLength: limit,
    };

    return (
      <Field component={TextField}
        hideLabel={name === 'stock' || name === 'discount'}
        inputProps={inputProps}
        name={name}
        normalize={normalize}
      />);
  };
  const getBase64 = event => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    let preview = document.getElementById('image');
    if (file) reader.readAsDataURL(file);
    reader.onloadend = () => {
      preview.src = reader.result;
      change('image', preview.src);
    };
  };
  const inputFileProps = {
    accept: '.png, .jpg, .jpeg',
    onChange: getBase64,
    type: 'file',
    value: '',
  };

  useEffect(() => {
    change('nameProduct', product.nameProduct);
    change('price', product.price);
    change('stockType', product.stockType);
    change('stock', product.stock);
    change('discountType', product.discountType);
    change('discount', product.discount);
  }, [product]);

  useEffect(() => {
    change('nameCategory', nameCategory || product.nameCategory);
  }, [nameCategory]);

  const handleCheckboxStock = () => {
    change('stockType',!useStock);
    setUseStock(!useStock);
  };

  const handleCheckboxDiskon = () => {
    change('discountType',!useDiskon);
    setUseDiskon(!useDiskon);
  };

  return (
    <form className='root-add-product' onSubmit={handleSubmit}>
      <figure>
        <img alt="" id="image" src={product.image ? product.image : iconEmpty} />
        <figcaption>
          <label className='upload-button'>
            <p>Ganti Foto</p>
            <Field component={TextField} inputProps={inputFileProps} name="image" />
          </label>
          <p>Format file hanya jpg dan png maksimal 300 kb</p>
        </figcaption>
      </figure>
      {renderField('nameProduct', 'Nama Produk')}
      {renderField('price', 'Harga Jual', onlyNums)}
      <div className='switch-container'>
        <p>Status produk</p>
        <div>
          <p>{useStock ? 'Aktif' : 'Tidak Aktif'}</p>
          <Field checked={useStock}
            component={Switch}
            name="stockType"
            onClick={()=>handleCheckboxStock()}
          />
        </div>
      </div>
      {useStock &&
      <div className='stock-container'>
        <p>Stok Produk</p>
        {renderField('stock', 'Stok', onlyNums, 6)}
      </div>}
      <div className='switch-container'>
        <p>Diskon</p>
        <Field checked={useDiskon}
          component={Switch}
          name="discountType"
          onClick={()=>handleCheckboxDiskon()}
        />
      </div>
      {useDiskon &&
      <>
        <div className='diskon-container'>
          <p>Diskon Produk</p>
          {renderField('discount', ' ', onlyNums, 3)}
          <p>%</p>
        </div>
        {formProduct['add-product'].values.discount && <div className='summary-diskon'>
          <span>
            <p>Harga diskon produk</p>
            <p>-Rp{thousand((formProduct['add-product'].values.price*formProduct['add-product'].values.discount)/100)}</p>
          </span>
          <span>
            <p>Harga produk setelah diskon</p>
            <p>Rp{thousand((formProduct['add-product'].values.price*(100-formProduct['add-product'].values.discount))/100)}</p>
          </span>
        </div>}
      </>}
      <footer>
        <ButtonLink to='/back'>Batal</ButtonLink>
        <Button onSubmit={handleSubmit}>Simpan</Button>
      </footer>
    </form>
  );
}

AddProductForm.defaultProps = {
  change: () => { },
  handleSubmit: () => { },
  id: '',
  invalid: true,
  product: {},
  submitSucceeded: false
};

AddProductForm.propTypes = {
  change: PropTypes.func,
  handleSubmit: PropTypes.func,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  product: PropTypes.object,
  submitSucceeded: PropTypes.bool
};
