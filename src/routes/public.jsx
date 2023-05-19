import { AboutUs } from "../features/aboutUs";
import { ContactUs } from "../features/contactUs";
import { Home } from "../features/home";
import { HowWeWork } from "../features/howWeWork";
import { Resources } from "../features/resources";
import { Services } from "../features/services";
  
  export const publicRoutes = [
    {path: "/", element: <Home />},
    {path: "/services", element: <Services />},
    {path: "/about-us", element: <AboutUs />},
    {path: "/how-we-work", element: <HowWeWork/>},
    {path: "/resources", element: <Resources/>},
    {path: "/contact-us", element: <ContactUs />}
  ];