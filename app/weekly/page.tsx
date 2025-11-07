import Header from "@/components/InternetPackageHeader";
import PackagesTab from "@/components/PackagesTab";
import WeeklyPackages from "@/components/WeeklyInternetPackages/WeeklyPackages";
import Footer from "@/components/InternetPackageFooter/Footer";

export default function WeeklyPage() {
  return (
    <div>
      <Header />
      <PackagesTab />
      <WeeklyPackages />
      <Footer />
    </div>
  );
}
