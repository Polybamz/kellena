import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import Footer from "@/components/Footer";
import { useParams, useNavigate } from "react-router-dom";


const ProgramsDetails = () => {
      const { id } = useParams();
      const navigate = useNavigate();
    return (
         <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Commong Soon</h1>
          <Button onClick={() => navigate('/programs')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Button>
        </div>
        <Footer />
      </div>
    )
}

export default ProgramsDetails