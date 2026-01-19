'use client';

import { motion } from 'framer-motion';
import { Section, Container, Heading, Text, Card, ImagePlaceholder, Badge } from '@/components/ui';
import { staggerContainer, fadeInUp, staggerChild } from '@/lib/animations';

const teamMembers = [
  {
    name: 'Muhammad Zaryab',
    role: 'Founder / CEO',
    bio: '',
    color: 'magenta',
    image: '/images/Zaryab.png',
  },
  {
    name: 'Abdullah Mudassar',
    role: 'Head of marketing & operations',
    bio: '',
    color: 'cyan',
    image: '/images/Abdullah Mudassar (Head of marketing & operations) 2.png',
  },
  {
    name: 'Hugh Taylor',
    role: 'Software Dev',
    bio: '',
    color: 'magenta',
    image: '/images/hugh taylor.png',
  },
  {
    name: 'Ayesha Hanif',
    role: 'Marketing Executive',
    bio: '',
    color: 'lime',
    image: '/images/4.Ayesha Hanif (Marketing Executive) 4.png',
  },
  {
    name: 'Neha Hafeez',
    role: 'Marketing Executive',
    bio: '',
    color: 'cyan',
    image: '/images/neha.png',
  },
  {
    name: 'Huda',
    role: 'Marketing Executive',
    bio: '',
    color: 'lime',
    image: '/images/6.Huda (Marketing Executive).png',
  },
  {
    name: 'Maheen Fatima',
    role: 'Marketing Executive',
    bio: '',
    color: 'magenta',
    image: '/images/7. Maheen (Marketing Executive).png',
  },
  {
    name: 'Ashlyin',
    role: 'Content Director',
    bio: '',
    color: 'lime',
    image: '/images/Ashlyin (Content Director).jpg',
  },
  {
    name: 'Maheer Tahir',
    role: 'Data Analyst',
    bio: '',
    color: 'cyan',
    image: '/images/Maheer Tahir (Data Analyst).png',
  },
  {
    name: 'Muhammad Ahmad',
    role: 'Marketing Executive',
    bio: '',
    color: 'lime',
    image: '/images/Muhammad Ahmad (Marketing Executive).png',
  },
  {
    name: 'Shahmir Adnan',
    role: 'Marketing Executive',
    bio: '',
    color: 'cyan',
    image: '/images/9.Shahmir Adnan (Marketing Executive).png',
  },
  {
    name: 'Tanzeela',
    role: 'Marketing Executive',
    bio: '',
    color: 'magenta',
    image: '/images/Tanzeela (Marketing Executive).png',
  },
  {
    name: 'Adithya',
    role: 'Software Dev',
    bio: '',
    color: 'lime',
    image: '/images/adithya.png',
  },
  {
    name: 'Zeeshan Khalid',
    role: 'Software Dev',
    bio: '',
    color: 'violet',
    image: '/images/zeeshan.png',
  },
];

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group"
    >
      <Card variant={member.color} className="overflow-hidden" hover={false} animate={false}>
        {/* Image */}
        <div className="relative">
          {member.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={member.image} alt={member.name} className="w-full aspect-[3/4] object-cover" />
          ) : (
            <ImagePlaceholder
              aspectRatio="portrait"
              variant={member.color}
              label={`${member.name} Photo`}
              animate={false}
              className="!border-none !rounded-none"
            />
          )}
        </div>
        {/* Name badge */}
        <div className="p-4">
          <h3 className="font-display font-bold text-xl text-dark-900">{member.name}</h3>
          <p className="text-dark-600 text-sm">{member.role}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-12">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Heading size="3xl" animate={false}>
                WHO ARE WE?
              </Heading>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Team Grid */}
      <Section background="white" className="py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Interesting Numbers Section */}
      <Section background="gradient" className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Heading size="3xl" animate={false}>
              SOME INTERESTING NUMBERS
            </Heading>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Stat 1 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                    10+
                  </h3>
                </motion.div>
              </div>
              <p className="font-display font-bold text-lg md:text-xl text-accent-cyan uppercase tracking-wide">
                TECH TOOLS BUILT
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                >
                  <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                    5K+
                  </h3>
                </motion.div>
              </div>
              <p className="font-display font-bold text-lg md:text-xl text-accent-cyan uppercase tracking-wide">
                INFLUENCERS
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                >
                  <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                    5
                  </h3>
                </motion.div>
              </div>
              <p className="font-display font-bold text-lg md:text-xl text-accent-cyan uppercase tracking-wide">
                COUNTRIES COVERED
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={staggerChild}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center"
            >
              <div className="mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                >
                  <h3 className="font-display font-black text-6xl md:text-7xl text-dark-900">
                    300M+
                  </h3>
                </motion.div>
              </div>
              <p className="font-display font-bold text-lg md:text-xl text-accent-cyan uppercase tracking-wide">
                VIEWS
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
