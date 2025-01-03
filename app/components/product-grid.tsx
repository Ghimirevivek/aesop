import ProductCard from './product-card';

export default function ProductGrid() {
  return (
    <section className='py-20 px-4 lg:px-6 bg-[#FFFEF2]'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          <ProductCard
            title='Six aromatic encounters'
            description='Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody and the opulent.'
            mediaSrc='/assets/img11.jpg'
            mediaAlt='Fragrance Anthology Volume I with sample vials'
            href='/fragrances/anthology'
            mediaType='image'
          />
          <ProductCard
            title='Home gifts'
            description='From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud or the recently moved in.'
            mediaSrc='/assets/product.mp4'
            mediaAlt='Aesop candle with warm glow'
            href='/gifts/home'
            mediaType='video'
          />
        </div>
      </div>
    </section>
  );
}
