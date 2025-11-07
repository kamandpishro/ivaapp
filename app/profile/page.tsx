import Header from "@/components/InternetPackageHeader";
import Footer from "@/components/InternetPackageFooter/Footer";
import Profile from "@/components/InternetPackageFooter/Profile";

export default function profile(){
    return(
        <div className="pt-[100px] pb-[100px]">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}