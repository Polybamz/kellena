import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DonateNow = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = () => {
    if (!amount) {
      toast({ title: "Please enter a valid amount." });
      return;
    }
    toast({
      title: "Redirecting to payment...",
      description: `You are donating FCFA ${amount}`,
    });
    // Simulate or redirect to payment processor
  };

    return (<>
      <Navigation />
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6 bg-background">
      <h1 className="text-center text-4xl font-bold text-primary">
        Donate Now
      </h1>
      <p className="text-center text-muted-foreground text-lg max-w-xl mx-auto">
        Thank you for supporting our mission to uplift communities across Cameroon.
        Your contribution helps us drive real impact in education, health,
        and empowerment initiatives.
      </p>

      {/* Amount Input */}
      <div className="flex flex-col sm:flex-row justify-center items-center hidden gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount in FCFA"
          className="border border-border rounded px-4 py-2 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handleDonate}
          className="bg-gradient-warm text-white font-semibold px-6 py-2 rounded hover:opacity-90 transition"
        >
          Donate Now
        </button>
      </div>

      {/* Mobile Money & Bank Info */}
      <div className="bg-card border rounded p-6 space-y-4">
        <h2 className="text-xl font-semibold">Donation Methods</h2>

        <div>
          <p className="font-medium">Mobile Money (MTN & Orange)</p>
          <ul className="list-disc ml-6 text-muted-foreground">
            <li>MTN MoMo: <span className="font-semibold">+237 6 82 90 21 11</span></li>
            <li>MOMO Name: <span className="font-semibold">Njoya Kelvin</span></li>
          </ul>
        </div>

        <div className="blur">
          <p className="font-medium ">Bank Transfer</p>
          <ul className="text-muted-foreground space-y-1 ml-2">
            <li>Bank Name: Afriland First Bank</li>
            <li>Account Name: Kellena Empowerment Foundation</li>
            <li>Account Number: 012 345 6789 00</li>
            <li>SWIFT Code: CCEICMCX</li>
          </ul>
        </div>
      </div>

      {/* PayPal Option */}
      <div className="text-center space-y-2 blur">
        <p className="text-muted-foreground">International donations via PayPal:</p>
        <div className="flex justify-center">
          <img
            src="/images/paypal.png"
            alt="Donate with PayPal"
            className="h-10 object-contain"
          />
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        All donations are secure and go directly to our community programs.
      </div>
      </div>
  <Footer />
  </>
  );
};

export default DonateNow;
