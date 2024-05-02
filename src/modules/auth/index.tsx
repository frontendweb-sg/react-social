import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { AppContent } from "@/utils/content";
import { Outlet } from "react-router-dom";
import { Users, Newspaper, Heart } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600">
      <Container className="max-w-[1280px]">
        <div className="grid h-screen grid-cols-2">
          <div className="col flex justify-center items-center flex-col text-white">
            <div className="max-w-[450px] mx-auto">
              <Logo />
              <h1 className="pt-4 text-[24px]">{AppContent.authHeading}</h1>
              <p className="mt-3 leading-5 text-sm text-slate-300">
                {AppContent.homePageContent}
              </p>
              <ul className="flex items-center justify-between mt-5">
                <li>
                  <span className="circle bg-orange mb-2 avatar sm vcenter text-white">
                    <Users className="mb-2" />
                  </span>
                  <h6>Registered User</h6>
                  <span>10,000</span>
                </li>
                <li>
                  <span className="circle bg-orange mb-2 avatar sm vcenter text-white">
                    <Newspaper className="mb-2" />
                  </span>

                  <h6>Post published</h6>
                  <span>1,000</span>
                </li>
                <li>
                  <span className="circle bg-orange mb-2 avatar sm vcenter text-white">
                    <Heart className="mb-2" />
                  </span>
                  <h6>Happy users</h6>
                  <span>10,000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col relative flex items-center justify-center">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}
