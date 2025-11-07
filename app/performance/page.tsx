import Header from "@/components/InternetPackageHeader";
import Footer from "@/components/InternetPackageFooter/Footer";
import PerformancePage from "@/components/InternetPackageFooter/Performance";

export default function Performance(){
    return(
        <div className="pt-[100px] pb-[100px]">
            <Header/>
            <PerformancePage/>
            <Footer/>
        </div>
    )
}