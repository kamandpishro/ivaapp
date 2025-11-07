import Header from "@/components/InternetPackageHeader"
import PackagesTab from "@/components/PackagesTab"
import Footer from "@/components/InternetPackageFooter/Footer"
import DailyPackages from "@/components/DailyInternetPackages/DailyPackages" 

export default function Home(){
  return(
    <div className="pt-[100px] pb-[100px]">
      <Header/>
      <PackagesTab/>
      <DailyPackages/>
      <Footer/>
    </div>
  )
}
