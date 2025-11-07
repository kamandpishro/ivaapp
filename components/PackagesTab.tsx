'use client'
import { useRouter,usePathname } from "next/navigation"
export default function PackagesTab(){
    const router=useRouter();
    const pathname=usePathname();

    const tabs=[
        {Label:"روزانه", path:'/Daily'},
        {Label:"هفتگی",path:"/weekly"},
        {Label:"ماهانه", path:'/monthly'}
    ]
    return(
        <div className="w-full flex justify-center mt-16 sm:mt-20 font-[IRANSans]">
             <div className="flex justify-between items-center bg-yellow-100 rounded-2xl p-2 shadow-sm 
                      w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] max-w-2xl">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;

          return (
            <button
              key={tab.path}
              onClick={() => router.push(tab.path)}
              className={`flex-1 rounded-xl py-3 mx-1 font-semibold transition-all duration-200
                ${
                  isActive
                    ? 'bg-yellow-400 text-gray-900 font-bold shadow-md'
                    : 'text-gray-700 hover:bg-yellow-200'
                }`}
            >
              {tab.Label}
            </button>
          );
        })}
      </div>

        </div>
    )
}