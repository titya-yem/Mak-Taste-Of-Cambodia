import Ambassadors from "@/components/Ambassador/Ambassadors";
import GloalMap from "@/components/Ambassador/GloalMap";
import Storyteller from "@/components/Ambassador/Storyteller";
import Footer from "@/components/shared/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#FDF9F3]">
      {children}
      <GloalMap />
      <Ambassadors />
      <Storyteller />
      <Footer />
    </main>
  );
};

export default layout;
