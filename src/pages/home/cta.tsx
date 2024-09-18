import { Button } from "antd";
import { CTAImage } from "../../components/imgs/cta-image";

export function CTA() {
    return (
        <div className="p-6 md:p-28 flex justify-between items-center border-y border-dark bg-[#d7f3fe] w-full">
            <div className="space-y-14 w-[50%]">
               <div>
               <h1 className="text-[64px] font-bold">Stay Organized, Stay Ahead!</h1>
               <p className="text-[20px]">Keep all your job applications in one place. Sign up for ReeLug and never miss an opportunity.</p>
               </div>
            
                <div className="flex items-center mt-7 space-x-4">
                <div className="w-[300px] rounded-md h-[48px]  bg-white ">
                    <input placeholder="Enter email address" className="w-full rounded-md focus:scale-[1.01] px-4 h-full outline-none focus:ring-2 focus:ring-dark  z-10 transition-all duration-300 ease-linear" />
                </div>

                <Button className="h-[48px] w-[136px] hover:bg-dark " type='primary'>Subscribe</Button>
            </div>
            </div>


            <div className="w-[40%] flex items-center justify-end">
                <CTAImage />
            </div>

            
        </div>
    )
}