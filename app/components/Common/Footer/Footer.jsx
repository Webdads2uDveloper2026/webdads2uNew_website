import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaPinterestP,
} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="w-full bg-white text-black border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-5 text-lg">
                    <FaFacebookF className="cursor-pointer transition text-black hover:text-[#1877F2]" />
                    <FaInstagram className="cursor-pointer transition text-black hover:text-[#E4405F]" />
                    <FaYoutube className="cursor-pointer transition text-black hover:text-[#FF0000]" />
                    <FaPinterestP className="cursor-pointer transition text-black hover:text-[#BD081C]" />
                </div>
                <p className="text-sm text-center md:text-right text-black">
                    © All Rights Reserved{" "}
                    <span className="text-gray-700"> WEBDADS2U PRIVATE LIMITED</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
