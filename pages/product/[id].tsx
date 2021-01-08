import React from 'react'
import { useRouter } from 'next/router'
import Navbar from 'components/navbar/Navbar'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()

  const [product, setProduct] = React.useState<TProduct>()

  React.useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error.message))
  }, [id])

  return (
    <>
      <Navbar />
      <section>
        <h1>{product?.name}</h1>
        <p>{product?.attributes.description}</p>
        <p>Precio: {product?.price}</p>
        <p>Forma: {product?.attributes.shape}</p>
      </section>
    </>
  )
}

export default ProductPage
