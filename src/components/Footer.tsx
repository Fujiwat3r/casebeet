import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from 'next/link';
import next from "next/types";
const Footer = () => {
    return <footer className="bg-white h-20 relative">
        <MaxWidthWrapper>
            <div className="border-t border-gray-200"/>
            <div className="h-full flex flex-col md:flex-row md:justify-between items-center" >
                <div className="text-center md:text-left pb-2 md:pb-0">
                    <p className=" text-sm text-muted-foreground ">
                        &copy;{new Date().getFullYear()} All rights reserved
                    </p>
                </div>
                <div className="flex item-center justify-center"></div>
                
                <div className="flex space-x-8">
                <Link href =" #" className=" text-sm -muted-foregraound hover:text-gray-600" > Terms</Link>
                <Link href =" #" className=" text-sm -muted-foregraound hover:text-gray-600" > Privacy policy</Link>
                <Link href =" #" className=" text-sm -muted-foregraound hover:text-gray-600" > Cookie policy</Link>

               
                </div>
            </div>
        </MaxWidthWrapper>
    </footer>
}
 
export default Footer;