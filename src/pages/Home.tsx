import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import WhyChoose from "../components/WhyChoose";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <Navbar
        contentHead="Skill Bride"
        description="Platform yang mempertemukan kebutuhan masyarakat dengan keterampilan komunitas lokal, seperti jasa perbaikan, kerajinan, atau pendidikan."
        imageSrc="/img/tools_3d.svg"
        idSection="#cource"
        buttonLink=""
        textButton="Join Now"
      ></Navbar>
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
