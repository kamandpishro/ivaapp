import Header from "@/components/InternetPackageHeader";
import PackagesTab from "@/components/PackagesTab";
import DailyPackages from "@/components/DailyInternetPackages/DailyPackages";
import Footer from "@/components/InternetPackageFooter/Footer";

export default function DailyPage() {
  return (
    <div className="pt-[100px] pb-[100px]">
      <Header />
      <PackagesTab />
      <DailyPackages />
      <Footer />
    </div>
  );
}
