import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import WhyChoose from "../section/landing/WhyChoose";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Content></Content>
      <Carousel></Carousel>
      <Card></Card>
      <WhyChoose></WhyChoose>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
};

export default Home;
