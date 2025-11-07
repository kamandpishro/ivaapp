import Header from "@/components/InternetPackageHeader";
import Footer from "@/components/InternetPackageFooter/Footer";
import MyStation from "@/components/InternetPackageFooter/MyStation"

export default function mystation(){
    return(
        <div className="pt-[100px] pb-[100px]">
            <Header/>
            <MyStation/>
            <Footer/>
        </div>
    )
}