import Head from "next/head"
import { useRouter } from "next/router"
import NextImage from "../../components/Image"
import { getProducts, getProduct, getCategories } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias"
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";

const ProductPage = ({ product, categories }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <Layout categories={categories}>
    <Head>
    <title>{product.title} product</title>
    </Head>

    {product.food_items.map((food)=> (
      <div class="grid grid-cols-2 gap-3">
      <div className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow">{food.name} - {food.price}</div>
      <button
            className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            data-item-id={food.id}
            data-item-price={food.price}
            data-item-url={router.asPath}
            data-item-description={food.description}
            data-item-name={food.name}
            v-bind="customFields"
          >
            Add to cart
          </button>
      </div>
    ))}
    </Layout>
  )
}

export default ProductPage

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  const categories = await getCategories()
  return { props: { product, categories } }
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      }
    }),
    fallback: true,
  }
}
