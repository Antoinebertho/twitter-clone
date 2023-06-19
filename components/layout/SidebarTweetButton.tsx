import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex itemps-center justify-center bg-sky-500 transition hover:bg-opacity-10 cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
        <p className="hidden lg:block text-center font-semibold text-[20px] text-white">Tweet</p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
