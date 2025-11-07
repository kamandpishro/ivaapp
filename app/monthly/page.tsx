import Header from "@/components/InternetPackageHeader";
import PackagesTab from "@/components/PackagesTab";
import MonthlyPackages from "@/components/MonthlyInternetPackages/MonthlyPackages";
import Footer from "@/components/InternetPackageFooter/Footer";

export default function MonthlyPage() {
  return (
    <div>
      <Header />
      <PackagesTab />
      <MonthlyPackages />
      <Footer />
    </div>
  );
}
