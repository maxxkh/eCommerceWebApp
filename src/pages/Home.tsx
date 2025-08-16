import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedSection from '../components/FeaturedSection';
import { Product } from '../types';

interface HomeProps {
  onProductClick: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick }) => {
  return (
    <>
      <Hero />
      <ProductCarousel 
        title="Quantum Collection" 
        onProductClick={onProductClick}
      />
      <CategoryGrid />
      <FeaturedSection onProductClick={onProductClick} />
      <ProductCarousel 
        title="Neural Interface Series" 
        onProductClick={onProductClick}
      />
    </>
  );
};

export default Home;