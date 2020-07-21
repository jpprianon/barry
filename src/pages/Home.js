import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero>
      <Banner
        title="Chambres d'hôtes et Gîte"
        subtitle="Chambre à partir de 70€ la nuit"
      >
        <Link to="/rooms" className="btn-primary">
          Nos chambres
        </Link>
      </Banner>
    </Hero>
  );
}
