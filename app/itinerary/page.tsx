import React, { FunctionComponent } from "react";
import { Poppins } from "next/font/google";
import InteractiveBackground from "@/components/InteractiveBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
interface OwnProps {}
type Props = OwnProps;
const Page: FunctionComponent<Props> = () => {
  return (
    
    <section className={`w-full pt-16 ${poppins.className}`}>
        <InteractiveBackground />
      <div className="relative w-full min-h-screen overflow-x-auto px-4">
        <table
          className="
            border-collapse border-4 border-[#011854]
            w-full max-w-5xl
            mx-auto my-12
            text-lg text-center
            rounded-2xl overflow-hidden
            backdrop-blur-sm bg-black/30
          "
        >
          <thead>
            <tr className="bg-[#23C0AD] text-black font-bold text-xl">
              <th className="border-4 border-[#011854] p-6">Date</th>
              <th className="border-4 border-[#011854] p-6">
                Time
              </th>
              <th className="border-4 border-[#011854] p-6">
                Track A
                <br />
                Events & Competitions
              </th>
              <th className="border-4 border-[#011854] p-6">
                Track B
                <br />
                Talks & Panels
              </th>
              <th className="border-4 border-[#011854] p-6">
                Track C
                <br />
                Showcase & Networking
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
              <td className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold">
                29th Jan, 2026
              </td>
              <td className="border-4 border-[#011854] p-6">
                6:30 PM - 7:30 PM
              </td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">
                UNCUT with Pranav Sharma <br />
                <span className="font-semibold">Swatantrata Bhawan</span>
              </td>
              <td className="border-4 border-[#011854] p-6">—</td>
            </tr>
            <tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
              <td
    rowSpan={3}
    className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold"
  >
    30th Jan, 2026
  </td>

  <td className="border-4 border-[#011854] p-6">
    4:30 PM - 5:30 PM
  </td>

  <td
    rowSpan={3}
    className="border-4 border-[#011854] p-6 bg-gray-400/60"
  />

  <td
    rowSpan={3}
    className="border-4 border-[#011854] p-6"
  >
    Inauguration Ceremony, E-Summit ’26
    <br />
    <br />
    Ashneer Grover - Fireside Session
    <br />
    <br />
    Col. Rajeev Bharwan - Keynote Session
    <br />
    <span className="font-semibold">Swatantrata Bhawan</span>
  </td>

  <td
    rowSpan={3}
    className="border-4 border-[#011854] p-6 bg-gray-400/60"
  />
</tr>

<tr className="bg-black/80 text-white">
  <td className="border-4 border-[#011854] p-6">
    5:30 PM - 6:30 PM
  </td>
</tr>

<tr className="bg-black/80 text-white">
  <td className="border-4 border-[#011854] p-6">
    7:00 PM - 8:00 PM
  </td>
</tr>

<tr className="bg-black/80 text-white">
  <td className="border-4 border-[#011854] p-6">
    6:00 PM onwards
  </td>
</tr>
              


            {/* <tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
              <td className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold">
                31st Jan, 2026
              </td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
              <td className="border-4 border-[#011854] p-6">—</td>
            </tr> */}
            
<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td
    rowSpan={12}
    className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold"
  >
    31st Jan, 2026
  </td>

  <td className="border-4 border-[#011854] p-6">
    9:00 AM - 10:00 AM
  </td>

  <td
    rowSpan={4}
    className="border-4 border-[#011854] p-6"
  >
    Finale of Competitions
    <br />
    Founder’s Gambit, CaseX, Shipwreck
    <br />
    <span className="font-semibold">
      Lecture Theatre-3 (LT-3), E-Hall, Cisco
    </span>
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />

  <td
    rowSpan={12}
    className="border-4 border-[#011854] p-6"
  >
    Startup Expo - Day 1
    <br />
    <span className="font-semibold">Rajputana Ground</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    09:30 AM - 10:30 AM
  </td>

  <td className="border-4 border-[#011854] p-6">
    Jay Chaudhry - Keynote Session
    <br />
    <span className="font-semibold">E-HALL</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    11:00 AM - 12:00 PM
  </td>

  <td
    rowSpan={2}
    className="border-4 border-[#011854] p-6"
  >
    NeGD Workshop
    <br />
    (10 AM - 1 PM)
    <br />
    <span className="font-semibold">ABLT</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    12:00 PM - 1:00 PM
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    1:00 PM - 1:30 PM
  </td>

  <td
    colSpan={2}
    className="border-4 border-[#011854] p-6 font-semibold"
  >
    Lunch Break
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    1:30 PM - 2:30 PM
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />

  <td className="border-4 border-[#011854] p-6">
    AI Panel
    <br />
    <span className="font-semibold">ABLT 4</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    2:00 PM - 3:00 PM
  </td>

  <td
    rowSpan={4}
    className="border-4 border-[#011854] p-6"
  >
    Finale of Competitions
    <br />
    FusionForge, Verdict Arena, Venture Verse, Million Dollar Pitch
    <br />
    <span className="font-semibold">
      Lecture Theatre-3 (LT-3), Cisco
    </span>
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    2:30 PM - 3:30 PM
  </td>

  <td
    rowSpan={2}
    className="border-4 border-[#011854] p-6"
  >
    Gaming Panel
    <br />
    <span className="font-semibold">ABLT 4</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    3:30 PM - 4:30 PM
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    4:30 PM - 5:00 PM
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />
</tr>

<tr className="bg-black/80 text-white">
  <td className="border-4 border-[#011854] p-6">
    5:00 PM - 6:00 PM
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />
</tr>

<tr className="bg-black/90 text-white font-semibold hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    6:00 PM Onwards
  </td>

  <td
    colSpan={3}
    className="border-4 border-[#011854] p-6"
  >
    Day 2 Ends
  </td>
</tr>



<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td
    rowSpan={12}
    className="border-4 border-[#011854] p-6 text-[#F1E821] font-semibold"
  >
    1st Feb, 2026
  </td>

  <td className="border-4 border-[#011854] p-6">
    8:00 AM - 10:00 AM
  </td>

  <td
    rowSpan={2}
    className="border-4 border-[#011854] p-6"
  >
    Finale of Competitions
    <br />
    Founder’s Gambit, Innovation Crucible, Design Rush,
    Million Dollar Pitch, Tesseract, Adventure
    <br />
    <span className="font-semibold">
      Lecture Theatre-3 (LT-3), Cisco, E-Hall
    </span>
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />

  {/* STARTUP EXPO – FULL DAY */}
  <td
    rowSpan={12}
    className="border-4 border-[#011854] p-6"
  >
    Startup Expo - Day 2
    <br />
    <span className="font-semibold">Rajputana Ground</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    10:00 AM - 11:00 AM
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    11:30 AM - 12:30 PM
  </td>

  <td className="border-4 border-[#011854] p-6">
    Tesseract
  </td>

  <td className="border-4 border-[#011854] p-6">
    VC Panel
    <br />
    <span className="font-semibold">ABLT-4</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    12:00 PM - 2:00 PM
  </td>

  <td
    colSpan={2}
    className="border-4 border-[#011854] p-6 font-semibold"
  >
    Lunch Break
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    1:00 PM - 2:00 PM
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />

  <td className="border-4 border-[#011854] p-6">
    SharkTank Panel
    <br />
    <span className="font-semibold">Swatantrata Bhawan</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    2:00 PM - 3:00 PM
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />

  <td className="border-4 border-[#011854] p-6">
    Aman Gupta (Ex-CMO @Boat)
    <br />
    <span className="font-semibold">Swatantrata Bhawan</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    4:00 PM - 5:00 PM
  </td>

  <td className="border-4 border-[#011854] p-6">
    Finale of Competition
    <br />
    Tesseract
    <br />
    <span className="font-semibold">
      IIT BHU (Varanasi Campus)
    </span>
  </td>

  <td className="border-4 border-[#011854] p-6">
    AMA Session by Avi Dutt
    <br />
    <span className="font-semibold">ABLT-4</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    5:00 PM - 6:00 PM
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />

  <td className="border-4 border-[#011854] p-6">
    Yes Bank Session
    <br />
    <span className="font-semibold">ABLT-4</span>
  </td>
</tr>

<tr className="bg-black/80 text-white hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    6:00 PM - 7:00 PM
  </td>

  <td className="border-4 border-[#011854] p-6 bg-gray-400/60" />

  <td className="border-4 border-[#011854] p-6">
    Amit Govil @Calance
    <br />
    <span className="font-semibold">ABLT-4</span>
  </td>
</tr>

<tr className="bg-black/90 text-white font-semibold hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    7:00 PM - 8:00 PM
  </td>

  <td
    colSpan={2}
    className="border-4 border-[#011854] p-6"
  >
    Closing Ceremony – E-Summit ’26
    <br />
    <span className="font-semibold">SB</span>
  </td>
</tr>

<tr className="bg-black/90 text-white font-semibold hover:bg-[#23C0AD]/20 transition-all duration-300">
  <td className="border-4 border-[#011854] p-6">
    8:00 PM Onwards
  </td>

  <td
    colSpan={2}
    className="border-4 border-[#011854] p-6"
  >
    Dinner
  </td>
</tr>

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Page;
