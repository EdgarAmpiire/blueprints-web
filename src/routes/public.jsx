import { AboutUs } from "../features/aboutUs";
import { Home } from "../features/home";
import { Services } from "../features/services";
  
  export const publicRoutes = [
    {path: "/", element: <Home />},
    {path: "/services", element: <Services />},
    {path: "/about-us", element: <AboutUs />},
  ];