export default function validate(values) {
  const { nameProduct, price, stock, stockType, discountType, discount } = values;
  return {
    nameProduct: !nameProduct && 'Nama produk harus diisi',
    price: (!price || Number(price) === 0) && 'Harga jual harus diisi',
    stock: ((!stock || Number(stock) === 0) && stockType) && 'Harus terisi / nonaktifkan stok',
    discount: ((!discount || Number(discount) === 0) && discountType) && 'Harus terisi / nonaktifkan diskon',
  };
}
