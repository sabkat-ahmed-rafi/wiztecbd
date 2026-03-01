import React from "react";

import { CursorDot, CursorDotSingle } from "@/widgets/Cursor";
import TimeSwitcher from "@/widgets/TimeSwitcher";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import SocialLink from "@/widgets/SocialLink";
import ScrollToTopButton from "@/widgets/ScrollToTopButton";
import OfferPopup from "@/widgets/OfferPopUp";
import LiveChat from "@/widgets/LiveChat";

const AppLayout = ({ children }) => {
    return (
        <div className=" relative">
            <div className=" z-20 fixed top-1/2 left-0 transform -translate-y-1/2">
                <SocialLink />
            </div>
            <div style={{ position: "fixed", bottom: "2%", right: "0%" }} className=" z-30">
                <LiveChat />
            </div>
            <TimeSwitcher />
            <CursorDot />
            <OfferPopup />
            {/* <CursorDotSingle /> */}
            <Header />
            <div>{children}</div>
            <Footer />
            <div style={{ position: "fixed", bottom: "12%", right: "2%" }} className="z-20">
                <ScrollToTopButton />
            </div>
        </div>
    );
};

export default AppLayout;
