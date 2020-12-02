import React, { useContext, useEffect } from 'react'
import AddProductForm from '../../components/forms/AddProduct';
import { AppContext } from '../../context';
import Card from '../../components/elements/Card';
import './styles.scoped.css'

export default function AddProduct() {
  const { setBreadcrumbs } = useContext(AppContext);
  useEffect(() => {
    setBreadcrumbs(['Tambah Produk']);
  }, []);
  return (
    <div className='root-add-product-page'>
      <Card>
        <AddProductForm/>
      </Card>
    </div>
  )
}

