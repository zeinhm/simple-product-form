import React from 'react'
import AddProductForm from '../../components/forms/AddProduct';
import Card from '../../components/elements/Card';
import './styles.scoped.css'

export default function AddProduct() {
  return (
    <div className='root-add-product-page'>
      <Card>
        <AddProductForm/>
      </Card>
    </div>
  )
}

