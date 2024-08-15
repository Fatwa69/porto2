import logo from "@/public/Mamamoon.png";
import Link from "next/link";
import Image from "next/image";

const MainLogo = () => {
  return (
    <div className="mr-8">
      <Link href="/">
        <Image src={logo} width={140} height={55} alt="" />
      </Link>
    </div>
  );
};

export default MainLogo;
