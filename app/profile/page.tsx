"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { studentsAPI } from "@/lib/api";
import { isStudentProfileComplete } from "@/lib/auth";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Button } from "@/components/ui/button";
import { User, Phone, School, Hash, BookOpen, Calendar, GraduationCap, Linkedin, FileText, Globe, ArrowRight } from "lucide-react";

const branches = [
  "Architecture, Planning and Design",
  "Biomedical Engineering",
  "Ceramic Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Science and Engineering",
  "Electrical Engineering",
  "Electronics Engineering",
  "Mechanical Engineering",
  "Metallurgical Engineering",
  "Mining Engineering",
  "Pharmaceutical Engineering and Technology",
  "Biochemical Engineering",
  "Industrial Chemistry",
  "Mathematical Sciences",
  "Engineering Physics",
  "Chemistry",
  "Material Science and Technology",
  "Other",
];

const courses = ["B.Tech", "B.Arch", "IDD", "M.Tech", "PhD", "MBA", "Other"];
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Other"];

function ProfileContent() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const redirectUrl = searchParams?.get("redirect") || "/events";

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collegeName: "IIT (BHU) Varanasi",
    phone: "",
    rollNo: "",
    branch: "Computer Science and Engineering",
    courseType: "B.Tech",
    year: "1st Year",
    linkedinUrl: "",
    resumeUrl: "",
    portfolioUrl: "",
  });

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated" || !session?.user) {
      setIsLoading(false);
      return;
    }

    const loadProfile = async () => {
      try {
        const student = await studentsAPI.getProfile(
          session.user.id || "",
          session.user.email || ""
        );

        if (student) {
          const yearNum = student.year || 1;
          const yearStr = `${yearNum}${yearNum === 1 ? "st" : yearNum === 2 ? "nd" : yearNum === 3 ? "rd" : "th"} Year`;

          setFormData({
            name: student.name || session.user.name || "",
            email: session.user.email || "",
            collegeName: student.collegeName || "IIT (BHU) Varanasi",
            phone: student.phone || "",
            rollNo: student.rollNo || "",
            branch: student.branch || "Computer Science and Engineering",
            courseType: student.courseType || "B.Tech",
            year: years.includes(yearStr) ? yearStr : "1st Year",
            linkedinUrl: student.linkedinUrl || "",
            resumeUrl: student.resumeUrl || "",
            portfolioUrl: student.portfolioUrl || "",
          });
        } else {
          setFormData((prev) => ({
            ...prev,
            name: session.user.name || "",
            email: session.user.email || "",
          }));
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [session, status]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const ensureUrl = (url: string) => {
    if (!url) return "";
    const trimmed = url.trim();
    if (!trimmed) return "";
    if (!/^https?:\/\//i.test(trimmed)) {
      return `https://${trimmed}`;
    }
    return trimmed;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user?.id) {
      toast({
        title: "Session Expired",
        description: "Please sign in again to save your profile.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name.trim()) {
      toast({ title: "Name Required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }
    if (!formData.collegeName.trim()) {
      toast({ title: "College Name Required", description: "Please enter your college name.", variant: "destructive" });
      return;
    }
    if (!formData.phone.trim()) {
      toast({ title: "Phone Required", description: "Please enter your contact phone number.", variant: "destructive" });
      return;
    }
    if (!formData.rollNo.trim()) {
      toast({ title: "Roll Number Required", description: "Please enter your roll number / student ID.", variant: "destructive" });
      return;
    }
    if (!formData.linkedinUrl.trim()) {
      toast({ title: "LinkedIn URL Required", description: "Please provide your LinkedIn profile link.", variant: "destructive" });
      return;
    }
    if (!formData.resumeUrl.trim()) {
      toast({ title: "Resume Link Required", description: "Please provide a link to your resume (e.g. Google Drive / website).", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const yearNum = parseInt(formData.year.replace(/\D/g, ""), 10) || 1;

      const payload = {
        userId: session.user.id,
        name: formData.name.trim(),
        collegeName: formData.collegeName.trim(),
        phone: formData.phone.trim(),
        rollNo: formData.rollNo.trim(),
        branch: formData.branch,
        courseType: formData.courseType,
        year: yearNum,
        cpi: 0,
        linkedinUrl: ensureUrl(formData.linkedinUrl),
        resumeUrl: ensureUrl(formData.resumeUrl),
        portfolioUrl: ensureUrl(formData.portfolioUrl),
        githubUrl: ensureUrl(formData.portfolioUrl),
      };

      await studentsAPI.registerProfile(payload);

      // Update session with STUDENT role
      const currentRoles = session.user.roles || [];
      const updatedRoles = Array.from(new Set([...currentRoles, "STUDENT"]));

      await update({
        user: {
          ...session.user,
          roles: updatedRoles,
          roleData: {
            ...session.user.roleData,
            student: payload,
          },
        },
      });

      toast({
        title: "Profile Saved!",
        description: "Your details have been registered successfully.",
      });

      router.push(redirectUrl);
    } catch (err: any) {
      console.error("Profile update error:", err);
      toast({
        title: "Submission Error",
        description: err.message || "Could not save your profile. Please check your data and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black/80 text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#F86531] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated" || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10 pt-20">
        <InteractiveBackground />
        <div className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F86531] via-[#C42F35] to-[#13324F] mb-4">
            Login Required
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Please sign in with Google to fill your student details and register for E-Summit events.
          </p>
          <Button
            onClick={() => signIn("google", { callbackUrl: "/post-login?redirect=" + encodeURIComponent(redirectUrl) })}
            className="w-full bg-gradient-to-r from-[#F86531] via-[#C42F35] to-[#13324F] text-black font-bold py-6 rounded-xl hover:opacity-90 transition-opacity"
          >
            Sign In with Google
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative z-10">
      <InteractiveBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-black/60 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F86531] via-[#C42F35] to-white drop-shadow">
            Participant Details
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Please complete your profile details to unlock event registrations on E-Summit &apos;27.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <User className="w-4 h-4 text-[#F86531]" />
                Full Name <span className="text-[#C42F35]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Arya Stark"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F86531] transition-colors"
              />
            </div>

            {/* Email (Read-only) */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                disabled
                value={formData.email}
                className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed"
              />
              <span className="text-xs text-gray-500 mt-1 block">Linked to your Google account</span>
            </div>

            {/* College Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <School className="w-4 h-4 text-[#F86531]" />
                College Name <span className="text-[#C42F35]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.collegeName}
                onChange={(e) => handleChange("collegeName", e.target.value)}
                placeholder="IIT (BHU) Varanasi"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F86531] transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <Phone className="w-4 h-4 text-[#F86531]" />
                Phone Number <span className="text-[#C42F35]">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+91 9876543210"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F86531] transition-colors"
              />
            </div>

            {/* Roll Number */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <Hash className="w-4 h-4 text-[#F86531]" />
                Roll Number / Student ID <span className="text-[#C42F35]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.rollNo}
                onChange={(e) => handleChange("rollNo", e.target.value)}
                placeholder="21074001"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F86531] transition-colors"
              />
            </div>

            {/* Course Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <GraduationCap className="w-4 h-4 text-[#F86531]" />
                Course Type <span className="text-[#C42F35]">*</span>
              </label>
              <select
                value={formData.courseType}
                onChange={(e) => handleChange("courseType", e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F86531] transition-colors"
              >
                {courses.map((course) => (
                  <option key={course} value={course} className="bg-zinc-900 text-white">
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Branch */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <BookOpen className="w-4 h-4 text-[#F86531]" />
                Branch / Discipline <span className="text-[#C42F35]">*</span>
              </label>
              <select
                value={formData.branch}
                onChange={(e) => handleChange("branch", e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F86531] transition-colors"
              >
                {branches.map((b) => (
                  <option key={b} value={b} className="bg-zinc-900 text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Year of Study */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <Calendar className="w-4 h-4 text-[#F86531]" />
                Year of Study <span className="text-[#C42F35]">*</span>
              </label>
              <select
                value={formData.year}
                onChange={(e) => handleChange("year", e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F86531] transition-colors"
              >
                {years.map((y) => (
                  <option key={y} value={y} className="bg-zinc-900 text-white">
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Links Section */}
          <div className="border-t border-white/10 pt-6 mt-6 space-y-6">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F86531] to-white">
              Professional Links & Resume
            </h3>

            {/* LinkedIn */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <Linkedin className="w-4 h-4 text-[#F86531]" />
                LinkedIn Profile URL <span className="text-[#C42F35]">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.linkedinUrl}
                onChange={(e) => handleChange("linkedinUrl", e.target.value)}
                placeholder="https://www.linkedin.com/in/username"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F86531] transition-colors"
              />
            </div>

            {/* Resume Link */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <FileText className="w-4 h-4 text-[#F86531]" />
                Resume Link (Google Drive / public link) <span className="text-[#C42F35]">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.resumeUrl}
                onChange={(e) => handleChange("resumeUrl", e.target.value)}
                placeholder="https://drive.google.com/file/d/.../view?usp=sharing"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F86531] transition-colors"
              />
              <span className="text-xs text-gray-500 mt-1 block">Make sure link access is set to &quot;Anyone with the link can view&quot;</span>
            </div>

            {/* Portfolio Link (Optional) */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2">
                <Globe className="w-4 h-4 text-[#F86531]" />
                Portfolio / GitHub / Personal Website (Optional)
              </label>
              <input
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) => handleChange("portfolioUrl", e.target.value)}
                placeholder="https://github.com/username or https://myportfolio.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#F86531] transition-colors"
              />
            </div>
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F86531] via-[#C42F35] to-[#13324F] text-black font-extrabold text-lg py-6 rounded-xl hover:opacity-95 shadow-[0_0_25px_rgba(248,101,49,0.4)] transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Saving Details...
                </>
              ) : (
                <>
                  Save Details & Continue to Events
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black/80 text-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#F86531] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-400">Loading profile...</p>
          </div>
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}

