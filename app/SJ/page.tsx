import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SJPage() {
  return (
    <div className="min-h-screen mt-20 text-gray-100 bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#487AFA]">
          Startup Junction 2025
        </h1>
        <p className="text-xl md:text-2xl text-[#23C0AD] mb-6 italic">
          Where Ambition Meets Investment
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 text-gray-300">
          An exclusive forum connecting high-potential startups with India’s top
          venture firms — in Bangalore, Delhi, and Ahmedabad.
        </p>
        <p className="text-lg font-medium mb-6 text-gray-200">
          Date:{" "}
          <span className="text-[#F1E821] font-semibold">
            December 6, 2025
          </span>
        </p>
        <Button
          asChild
          className="px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA] hover:opacity-90 transition-all duration-200"
        >
          <Link href={"/payment?type=startup_junction"}>Register Now</Link>
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#487AFA]">
          About Startup Junction
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300 mb-8">
          India’s metros are bursting with entrepreneurial energy — but many
          events prioritize quantity over quality. Startup Junction changes the
          game by handpicking founders and investors to foster meaningful,
          sector-focused connections.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "20+ Startups", desc: "Handpicked for relevance and readiness" },
            { title: "10+ VC Firms", desc: "From leading venture ecosystems" },
            { title: "3 Cities", desc: "Bangalore • Delhi • Ahmedabad" },
          ].map((item, i) => (
            <Card key={i} className="border-[#23C0AD]/30 bg-[#121212] shadow-md">
              <CardContent className="text-center py-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#23C0AD]">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#487AFA]">
          The Startup Junction Experience
        </h2>
        <div className="max-w-5xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Startup Junction 2025 is not just another startup event — it’s a
            bridge between vision and investment.
          </p>
          <p>
            The event offers more than just pitching sessions. Founders gain
            exposure to real market validation, one-on-one investor feedback,
            and direct mentorship opportunities.
          </p>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#487AFA]">
          Why Participate?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-[#23C0AD]">
              For Startups
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Pitch directly to active venture capitalists</li>
              <li>Get real-time feedback and mentorship</li>
              <li>Network with founders and innovators</li>
              <li>Gain visibility in front of leading VCs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-[#F1E821]">
              For Investors
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Discover early-stage ventures with market potential</li>
              <li>Access curated, sector-specific pitches</li>
              <li>Collaborate with other investors</li>
              <li>Build long-term relationships with founders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#487AFA]">
          Legacy of Excellence — Powered by E-Cell, IIT BHU
        </h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
          Startup Junction stands on the foundation of E-Cell IIT BHU’s
          entrepreneurial legacy...
        </p>
      </section>
    </div>
  );
}

