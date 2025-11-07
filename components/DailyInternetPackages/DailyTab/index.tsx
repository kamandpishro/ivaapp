import Image from "next/image";
import { DailyTabProps } from "./types";

export default function DailyTab({ title, items }: DailyTabProps) {
  return (
    <section className="flex flex-col items-center w-full mt-10 mb-8">

      <div
        className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] max-w-2xl flex justify-start"
        dir="rtl"
      >
        <h2 className="font-bold text-base sm:text-lg text-black mb-4 text-right">
          {title}
        </h2>
      </div>

      <ul
        className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] max-w-2xl space-y-4"
        dir="rtl"
      >
        {items.map((pkg) => (
          <li
            key={pkg.id}
            className="bg-white border border-gray-100 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/assets/packages/mci-logo.svg"
                  alt="mci"
                  width={40}
                  height={40}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                <span className="text-xs sm:text-sm text-gray-800 font-bold leading-tight">
                  {pkg.title}
                </span>
              </div>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs sm:text-sm font-semibold rounded-lg px-3 sm:px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-150">
                {pkg.price}
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-500 mt-1.5 text-right pr-10">
              با احتساب ۱۰٪ مالیات بر ارزش افزوده
            </p>
          </li>
        ))}
      </ul>

    </section>
  );
  }