import Ambassadors from "@/components/Ambassador/Ambassadors"
import GlobalMap from "@/components/Ambassador/GlobalMap"
import Storyteller from "@/components/Ambassador/Storyteller"
import Footer from "@/components/shared/Footer"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {children}
            <GlobalMap />
            <Ambassadors />
            <Storyteller />
            <Footer />
        </main>
    )
}

export default layout