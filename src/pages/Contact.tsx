import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// Assuming these components are correctly configured and imported from shadcn/ui
// For this example, I'll provide basic implementations if shadcn/ui setup isn't available in this environment.
// In a real project, these would come from your actual shadcn/ui imports.

// Basic mock components for demonstration if shadcn/ui is not directly available in the environment
const Input = ({ value, onChange, placeholder, type = "text", ...props }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-base text-gray-800 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ease-in-out shadow-md hover:border-blue-300"
    {...props}
  />
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  type?: "button" | "reset" | "submit";
};

const Button: React.FC<ButtonProps> = ({ children, type = "button", ...props }) => (
  <button
    type={type}
    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-semibold ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 py-3 mt-8 w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 active:translate-y-0 active:shadow-md active:scale-95"
    {...props}
  >
    {children}
  </button>
);

const Label = ({ children, htmlFor, ...props }) => (
  <label
    htmlFor={htmlFor}
    className="text-base font-medium leading-none block mb-2 mt-5 text-gray-700"
    {...props}
  >
    {children}
  </label>
);

const Textarea = ({ value, onChange, placeholder, ...props }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="flex min-h-[120px] w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base text-gray-800 ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ease-in-out shadow-md hover:border-blue-300"
    {...props}
  />
);
// End of basic mock components


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To display submission status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulate API call
    try {
      // In a real application, you would send this data to a backend server
      // e.g., using fetch or axios:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, message }),
      // });
      // if (response.ok) {
      //   setStatus("Message sent successfully!");
      //   setName("");
      //   setEmail("");
      //   setMessage("");
      // } else {
      //   setStatus("Failed to send message. Please try again.");
      // }

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      console.log("Form Data:", { name, email, message });
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("There was an error sending your message.");
    }
  };

    return (<>
      <Navigation/>
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans antialiased bg-gradient-to-br from-indigo-50 to-purple-100">
          
      {/* Decorative background circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-xl bg-white rounded-sm p-8 sm:p-10 md:p-12 border border-gray-100 transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-3xl backdrop-filter backdrop-blur-sm bg-opacity-90">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-tight leading-tight">
          Let's Connect!
        </h1>
        <p className="text-center text-xl text-gray-600 mb-10 leading-relaxed">
          Have a question or want to work together? Send us a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={6}
              required
            />
          </div>

          <Button type="submit">
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </Button>

          {status && status !== "Sending..." && (
            <p className={`text-center mt-6 text-base font-semibold ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          )}
        </form>
      </div>

      {/* Custom CSS for blob animation */}
      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        `}
      </style>
      </div>
      <Footer/>
      </>
  );
};

export default Contact;
