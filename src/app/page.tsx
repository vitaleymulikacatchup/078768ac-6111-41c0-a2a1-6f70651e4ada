"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Leaf, Flame, Heart, Home, Star, MessageSquare, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="floatingGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Aroma Café"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where passion meets perfection"
          description="Experience the finest coffee crafted with love, sourced from the world's best coffee regions, and served in our warm, welcoming atmosphere"
          tag="Welcome to Aroma Café"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Explore Menu",
              href: "product"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483586391-5gq8k2cm.jpg",
              imageAlt: "Cozy coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483599559-bj8m4y8p.jpg",
              imageAlt: "Fresh espresso cup"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483589600-v40oi2hh.jpg",
              imageAlt: "Coffee beans roasting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483600754-3veytn0f.jpg",
              imageAlt: "Cappuccino with latte art"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At Aroma Café, we believe that great coffee is more than just a drink—it's a moment of connection, a pause in your day, and a celebration of craftsmanship that brings people together."
          features={[
            {
              icon: Leaf,
              title: "Sustainably Sourced",
              description: "We partner directly with coffee farmers worldwide, ensuring fair trade practices and supporting sustainable farming methods that protect our planet."
            },
            {
              icon: Flame,
              title: "Artisan Roasted",
              description: "Our master roasters carefully craft each batch using time-honored techniques, bringing out the unique flavors and aromas of every single bean."
            },
            {
              icon: Heart,
              title: "Crafted with Love",
              description: "Every cup is prepared with passion and expertise by our skilled baristas who take pride in creating the perfect coffee experience for you."
            },
            {
              icon: Home,
              title: "Community Focused",
              description: "More than just a coffee shop, we're a gathering place where neighbors become friends and every visit feels like coming home."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardEight
          title="Our Coffee Journey"
          description="From bean to cup, discover the meticulous process behind every perfect brew"
          tag="The Craft"
          tagIcon={Coffee}
          textboxLayout="default"
          features={[
            {
              id: "1",
              title: "Bean Selection",
              description: "We carefully select the finest coffee beans from premium growing regions around the world, focusing on quality, flavor profile, and ethical sourcing practices.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483591598-o84gvkp1.jpg",
              imageAlt: "Premium coffee bean selection"
            },
            {
              id: "2",
              title: "Expert Roasting",
              description: "Our master roasters use traditional techniques combined with modern precision to bring out the unique characteristics of each bean variety.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483594397-xehjtzbr.jpg",
              imageAlt: "Coffee roasting process"
            },
            {
              id: "3",
              title: "Perfect Brewing",
              description: "Our skilled baristas employ various brewing methods to extract the optimal flavor from each roast, ensuring consistency and excellence in every cup.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483596516-x9wky3nv.jpg",
              imageAlt: "Professional coffee brewing"
            },
            {
              id: "4",
              title: "Served Fresh",
              description: "Each cup is served at the perfect temperature with attention to presentation, creating a memorable experience that engages all your senses.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483598228-e5vpdwyb.jpg",
              imageAlt: "Fresh coffee served elegantly"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Our Signature Coffees"
          description="Discover our carefully curated selection of premium coffee creations"
          tag="Menu Highlights"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Classic Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483599559-bj8m4y8p.jpg",
              imageAlt: "Rich espresso shot"
            },
            {
              id: "2",
              name: "Artisan Cappuccino",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483600754-3veytn0f.jpg",
              imageAlt: "Cappuccino with beautiful latte art"
            },
            {
              id: "3",
              name: "Bold Americano",
              price: "$3.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483602037-9js3isai.jpg",
              imageAlt: "Strong americano coffee"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real experiences from our coffee-loving community"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahcoffee",
              testimonial: "The best coffee in town! The baristas really know their craft and the atmosphere is perfect for both work and relaxation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483603526-7mj9zdcl.jpg",
              imageAlt: "Sarah's portrait"
            },
            {
              id: "2",
              name: "Michael",
              handle: "@mikebeans",
              testimonial: "I've been coming here for two years and the quality never disappoints. Their cappuccino is absolutely divine!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483604621-uj8kita2.jpg",
              imageAlt: "Michael's portrait"
            },
            {
              id: "3",
              name: "Emma",
              handle: "@emmacafé",
              testimonial: "Not just great coffee, but a wonderful community space. The staff treats you like family from day one.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483606248-eyzcy70e.jpg",
              imageAlt: "Emma's portrait"
            },
            {
              id: "4",
              name: "David",
              handle: "@daviddrinks",
              testimonial: "The attention to detail in every cup is remarkable. You can taste the passion and expertise in every sip.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763483607419-72pjm7nw.jpg",
              imageAlt: "David's portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Join our coffee community"
          description="Subscribe to our newsletter for exclusive offers, new roast announcements, and coffee brewing tips from our expert baristas."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy and will never share your information. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Aroma Café"
          columns={[
            {
              items: [
                {
                  label: "Our Menu",
                  href: "product"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Hours & Location",
                  href: "contact"
                },
                {
                  label: "Catering Services",
                  href: "contact"
                },
                {
                  label: "Gift Cards",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}