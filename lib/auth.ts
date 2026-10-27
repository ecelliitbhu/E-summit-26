import { getSession } from "next-auth/react";

export async function getStoredUser() {
  try {
    const session = await getSession();
    return session?.user || null;
  } catch (error) {
    console.error("Error getting session user:", error);
    return null;
  }
}

export function isStudentProfileComplete(student: any): boolean {
  if (!student) return false;
  return Boolean(
    student.name &&
    student.rollNo &&
    student.branch &&
    student.courseType &&
    student.collegeName &&
    student.phone &&
    student.linkedinUrl &&
    student.resumeUrl
  );
}
