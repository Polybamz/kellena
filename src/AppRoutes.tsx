// AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import News from "./pages/News";
import GetInvolved from "./pages/GetInvolved";
import EventDetails from "./pages/EventDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import useRouteTransition from "@/hooks/useRouteTranstion";
import DonateNow from "./pages/DonateNow";
import ProgramsDetails from "./pages/programDetails";

const AppRoutes = () => {
  useRouteTransition();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/details/:id" element={<ProgramsDetails/>}/>
      <Route path="/impact" element={<Impact />} />
      <Route path="/news" element={<News />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<DonateNow />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
