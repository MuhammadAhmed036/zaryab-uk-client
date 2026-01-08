'use client';

import { motion } from 'framer-motion';
import {
  Hero,
  Services,
  Stats,
  Brands,
  Press,
  Contact,
} from '@/components/features';
// Main Home Page
export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <Stats />
      <Contact />
    </>
  );
}
