import JoinShop from "@/components/JoinShop";
import Footer from "@/components/shared/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#FDF9F3]">
      {children}
      <JoinShop />
      <Footer />
    </main>
  );
};

export default layout;
