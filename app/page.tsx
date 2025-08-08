import GridDemo from "../grid-demo"
import FloatingNavDemo from "../components/floating-navbar-demo"
import ShopNowButton from "../components/shop-now-button"
import Logo from "../components/logo"
import MoreButton from "../components/more-button"
import BlogSection from "../components/blog-section"
import Products from "../components/product-section"
import AboutSection from "@/components/about-section"
import ProductGrid from "@/components/product-grid"
import productsData from "@/data/products.json"
import ContactPage from "@/components/contact-section"

export default function Page() {
  return (
    <>
      <Logo />
      <FloatingNavDemo />
      <ShopNowButton />
      <GridDemo />
      <BlogSection />
      <Products />
      <AboutSection />
      <MoreButton/>
      <ProductGrid products={productsData} title="Featured Products" />
      <ContactPage />
    </>
  )
}
