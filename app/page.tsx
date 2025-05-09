import AboutUs from "@/Components/AboutUs/AboutUs";
import Footer from "@/Components/Footer/Footer";
import FooterTop from "@/Components/FooterTop/FooterTop";
import Header from "@/Components/Header/Header";
import JoinNow from "@/Components/JionNow/JoinNow";
import Navbar from "@/Components/Navbar/Navbar";
import OurBenefits from "@/Components/OurBenefits/OurBenefits";
import Ourblog from "@/Components/Ourblog/Ourblog";
import Testmonilas from "@/Components/Testmonilas/Testmonilas";
import WhoWeAre from "@/Components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <OurBenefits />
      <WhoWeAre />
      <Testmonilas />
      <JoinNow />
      <AboutUs />
      <Ourblog />
      <FooterTop />
      <Footer />
    </>
  );
}
