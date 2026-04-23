import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Breadcrumb from "./Breadcrumb";
import ScrollToTop from "./ScrollToTop";
import ChatWidget from "./ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <div className="print:hidden">
        <Header />
        {!isHomePage && <Breadcrumb />}
      </div>
      <main className="flex-1">{children}</main>
      <div className="print:hidden">
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <ChatWidget />
      </div>
    </div>
  );
};

export default Layout;
