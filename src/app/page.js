"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wrench, Droplet, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Star, Shield, Award, Users } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center mb-4">
    <Icon className="w-5 h-5 text-blue-600 mr-2" />
    <span>{text}</span>
  </div>
);

const PhotoSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/work1.jpg',
    '/work1 (2).jpg',
    '/work1 (3).jpg',
    '/work1 (4).jpg',
    '/work1 (5).jpg',
    '/work1 (6).jpg',
    '/work1 (7).jpg',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide}
            alt={`Work ${index + 1}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>
    </div>
  );
};

const Testimonial = ({ name, role, content }) => {
  const [firstName, lastName] = name.split(' ');
  const imagePath = `/${firstName.toLowerCase()}-${lastName.toLowerCase()}.png`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <Image
          src={imagePath}
          alt={name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TL Henderson Plumbing</div>
            <div className="hidden md:flex space-x-6">
              <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#our-work" className="text-gray-600 hover:text-blue-600 transition-colors">Our Work</Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Expert Plumbing Services in Fort Wayne</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Quality Work With A Fair Price! Serving Noble, DeKalb, and Allen counties with honesty, integrity, and high-quality work since 1997.</p>
            <Link href="#contact" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300 inline-block">Get a Free Quote</Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">The TL Henderson Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature 
                icon={Shield} 
                title="Licensed & Insured" 
                description="We're fully licensed (PC1110004) and insured for your peace of mind."
              />
              <Feature 
                icon={Award} 
                title="Veteran-Owned" 
                description="Proudly veteran-owned and operated, bringing military precision to plumbing."
              />
              <Feature 
                icon={Users} 
                title="Personalized Approach" 
                description="We tailor our services to meet your unique needs and exceed expectations."
              />
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Plumbing Remodeling" 
                description="Transform your kitchen or bathroom with our expert remodeling services."
              />
              <ServiceCard 
                title="Water Heater Services" 
                description="Repair or replace your water heater for efficient, reliable hot water."
              />
              <ServiceCard 
                title="Sewer & Drain Cleaning" 
                description="Keep your pipes flowing smoothly with our thorough cleaning services."
              />
              <ServiceCard 
                title="Sump Pump Services" 
                description="Protect your home from water damage with our sump pump solutions."
              />
              <ServiceCard 
                title="Re-Piping Service" 
                description="Upgrade your home's plumbing system for improved efficiency and reliability."
              />
              <ServiceCard 
                title="Sewer Line Replacement" 
                description="Expert sewer line replacement to resolve persistent plumbing issues."
              />
            </div>
          </div>
        </section>

        <section id="our-work" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
            <PhotoSlideshow />
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Testimonial
                name="Sarah Johnson"
                role="Homeowner"
                content="TL Henderson Plumbing saved the day! They fixed our water heater quickly and efficiently. Highly recommend their services!"
              />
              <Testimonial
                name="Mike Thompson"
                role="Business Owner"
                content="As a restaurant owner, plumbing issues can be devastating. TL Henderson's prompt and professional service keeps our business running smoothly."
              />
              <Testimonial
                name="Emily Rodriguez"
                role="Real Estate Agent"
                content="I always recommend TL Henderson to my clients. Their expertise in plumbing remodels adds significant value to properties."
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/team.png" alt="TL Henderson Plumbing Team" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">About TL Henderson Plumbing</h2>
                <p className="text-gray-600 mb-6">Since 1997, we've been Fort Wayne's trusted plumbing experts. Our commitment to honesty, integrity, and high-quality work has made us the go-to choice for all plumbing needs in Noble, DeKalb, and Allen counties. We take pride in our workmanship and our commitment to surpassing our customers' standards.</p>
                <ul className="space-y-2">
                  {['25+ Years of Experience', 'Licensed and Insured', '24/7 Emergency Service', 'Fair Pricing', 'Personalized Approach'].map((item) => (
                    <li key={item} className="flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
                </form>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <ContactInfo icon={Phone} text="(260) 579-6085" />
                <ContactInfo icon={Mail} text="hendersonplumbing21@gmail.com" />
                <ContactInfo icon={MapPin} text="Serving the Greater Fort Wayne, Indiana area" />
                <ContactInfo icon={Clock} text="Available 24/7 for Emergency Service" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 TL Henderson Plumbing LLC. All rights reserved. License #PC1110004</p>
        </div>
      </footer>
    </div>
  );
}