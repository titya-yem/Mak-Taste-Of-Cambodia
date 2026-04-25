import OurHeritage from "@/components/About/OurHeritage";
import Ingredients from "@/components/About/Ingredients";
import Factory from "@/components/About/Factory";
import ShopHeritage from "@/components/About/ShopHeritage";
import Footer from "@/components/shared/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#FDF9F3]">
      {children}
      <OurHeritage />
      <Ingredients />
      <Factory />
      <ShopHeritage />
      <Footer />
    </main>
  );
};

export default layout;
