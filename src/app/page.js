'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  theme,
  Hero,
  ListFeatures,
} from 'ecommerce-mxtech';
import { MdBrandingWatermark } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { primaryColor } from '@/data';

const { useToken } = theme;

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  console.log(dataSite);
  return (
    <main
      style={{
        backgroundColor: '#DADADA',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          variant='img-right'
          src={dataSite.image_hero}
          colorText='black'
          title={dataSite.subtitle}
          description={dataSite.description}
          srcSecondary={dataSite.image_hero2}
          withSubView
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='Feature Courses'
              gridColumns={3}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              titleFilter={null}
              productVersion='1'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              stylesItem={{
                borderRadius: 12,
              }}
              backgroundItemColor='#FFFFFF'
              selectedCategory={dataSite.categories[0]}
            />
          )}
        </div>
        <div>
          <ListFeatures
            stylesContainer={{
              borderColor: primaryColor,
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
            }}
            src={dataSite.image_hero2}
            features={dataSite?.services?.map((feature) => ({
              icon: <MdBrandingWatermark />,
              title: feature.title,

              color: primaryColor,
            }))}
          />
        </div>
        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='All Courses'
              gridColumns={2}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='1'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#FBFBFB'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='know-us'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions data={dataSite.info} gridColumns={1} variant='text' />
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='text'
            variant='carousel'
            backgroundColor='#C9FFDF'
            references={dataSite.references}
            gridColumns={2}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
