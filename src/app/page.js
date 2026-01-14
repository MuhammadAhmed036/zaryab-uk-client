'use client';

import { motion } from 'framer-motion';
import {
  Hero,
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
      <Stats />
      <Contact />
    </>
  );
}
