import DailyTab from "@/components/DailyInternetPackages/DailyTab"

export default function DailyPackages(){
  const Packages = [
    { id: 1, title: "بسته اینترنت یک روزه - 250 مگابایت", price: "92,000 ریال" },
    { id: 2, title: "بسته اینترنت یک روزه - 400 مگابایت", price: "128,000 ریال" },
    { id: 3, title: "بسته اینترنت یک روزه - 1 گیگابایت", price: "192,000 ریال" },
    { id: 4, title: "بسته اینترنت یک روزه - 2 گیگابایت", price: "210,000 ریال" },
  ];

  const ThreedayPackages = [
    { id: 1, title: "بسته سه روزه - 250 مگابایت", price: "92,000 ریال" },
    { id: 2, title: "بسته سه روزه - 400 مگابایت", price: "128,000 ریال" },
    { id: 3, title: "بسته سه روزه - 1 گیگابایت", price: "192,000 ریال" },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <DailyTab title="یک‌روزه" items={Packages} />
      <DailyTab title="سه‌روزه" items={ThreedayPackages} />
    </div>
  );
}