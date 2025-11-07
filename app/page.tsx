import Header from "@/components/InternetPackageHeader"
import PackagesTab from "@/components/PackagesTab"
import Footer from "@/components/Footer"
import DailyPackages from "@/components/DailyInternetPackages/DailyPackages" 

export default function Home(){
  return(
    <div>
      <Header/>
      <PackagesTab/>
      <DailyPackages/>
      <Footer/>
    </div>
  )
}
