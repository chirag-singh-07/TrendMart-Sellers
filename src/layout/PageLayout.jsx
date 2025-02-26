import LandingFooter from "@/components/landing/LandingFooter";
import LandingHeader from "@/components/landing/LandingHeader";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <div className=" ">
        <LandingHeader className=" top-0 fixed" />
        <main>
          <Outlet />
        </main>
        <LandingFooter />
      </div>
    </>
  );
};

export default PageLayout;
