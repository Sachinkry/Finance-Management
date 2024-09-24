import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import HeaderLogo from "./HeaderLogo";
import Navigation from "./Navigation";
import { Loader2 } from "lucide-react";
import WelcomeMsg from "./WelcomeMsg";
import { DarkModeToggle } from "./toggle-dark-mode";
import { Filters } from "./filters";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-violet-900 to-violet-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation /> 
          </div>
          <div className="flex items-center gap-2">
            {/* <DarkModeToggle /> */}
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-white" />
            </ClerkLoading>
          </div>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  )
}

export default Header;