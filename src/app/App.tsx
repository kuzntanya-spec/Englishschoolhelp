import { Hero } from "./components/Hero";
import { ForWhom } from "./components/ForWhom";
import { Program } from "./components/Program";
import { WhySpecial } from "./components/WhySpecial";
import { Pricing } from "./components/Pricing";
import { Enroll } from "./components/Enroll";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ForWhom />
      <Program />
      <WhySpecial />
      <Pricing />
      <Enroll />
      <Footer />
    </div>
  );
}