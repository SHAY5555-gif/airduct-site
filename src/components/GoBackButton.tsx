"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    // Check if there's history to go back to
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      // Fallback to homepage
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-600 font-medium transition-colors mb-6"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Go Back
    </button>
  );
}
