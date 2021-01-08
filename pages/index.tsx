import Link from 'next/link'
import React from 'react'
import Navbar from '../components/navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = React.useState<TProduct[]>([])

  React.useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => setProductList(data))
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      {productList.map((product) => (
        <p>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </p>
      ))}
      <div>Platzi and Next.js!</div>
    </div>
  )
}

export default HomePage
