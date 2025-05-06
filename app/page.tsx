import Header from "@/Components/Header/Header";
import Navbar from "@/Components/Navbar/Navbar";
import OurBenefits from "@/Components/OurBenefits/OurBenefits";
import WhoWeAre from "@/Components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <OurBenefits />
      <WhoWeAre />
    </>
  );
}
