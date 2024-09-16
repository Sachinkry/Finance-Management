
import Link from "next/link";
import Logo from "./Logo";

const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="hidden lg:flex"
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Logo height={50} width={50} color="white"/>
        <div className="text-5xl font-semibold">Finance</div>
      </div>
    </Link>
  )
}

export default HeaderLogo