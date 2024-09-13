import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
function Logo() {
  return (
    <div
      className={
        "text-2xl md:text-5xl font-bold text-blue-500 " + poppins.className
      }
    >
      aconews
    </div>
  );
}

export default Logo;
