'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer(){
    const router=useRouter();
    return(
        <div className="flex items-center justify-center gap-64 bg-white rounded-lg px-4 py-2 shadow-mt">
            <div  onClick={()=> router.push("/mystation")}   className="flex flex-col items-center justify-center cursor-pointer">
             <Image src={"/assets/bottom-nav/home.svg"} alt="جایگاه من" width={28}  height={28}/>
             <span className="text-xs mt-1 font-medium">جایگاه من</span>
          </div>
          <div onClick={()=>router.push("/performance")} className="flex flex-col items-center justify-center cursor-pointer ">
             <Image src={"/assets/bottom-nav/performance.svg"} alt="آمار عملکرد" width={50} height={50}/>
             <span  className="text-xs mt-1 font-medium text-gray-800">آمار عملکرد</span>
          </div>
           <div onClick={()=>router.push("/notifications")} className="flex flex-col items-center justify-center cursor-pointer">
             <Image src={"/assets/bottom-nav/notifications.svg"} alt="اطلاعیه ها" width={28} height={28}/>
              <span  className="text-xs mt-1 font-medium text-gray-800">اطلاعیه ها</span>
           </div>
           <div  onClick={()=>router.push("/profile")} className="flex flex-col items-center justify-center cursor-pointer">
            <Image src={"/assets/bottom-nav/profile.svg"} alt="پروقایل کاربری" width={28} height={28}/>
             <span  className="text-xs mt-1 font-medium text-gray-800">پروقایل کاربری</span>
           </div>

        </div>
    )
}