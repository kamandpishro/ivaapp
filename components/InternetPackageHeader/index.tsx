'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();
    return(
        <div dir="rtl" className="flex relative bg-white rounded-lg  items-center  px-4 py-2 shadow-md">
            <Image 
            src="/assets/header/logo.svg"  
            alt="ایوا"   
            width={100}
            height={40}
            priority
            />
            <h4 className="text-gray-800  font-bold text-4xl absolute left-1/2 -translate-x-1/2">بسته اینترنت</h4>
            <Image src="/assets/header/back-icon.svg" 
            alt="بازگشت"
             width={24}
             height={24}
             onClick={()=> router.back()}
             className="cursor-pointer ms-auto hover:scale-110"
            />

        </div>
    );
}
