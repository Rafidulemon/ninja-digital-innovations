"use client";

import { useMemo, useState } from "react";
import { FiCheck, FiLink } from "react-icons/fi";

interface ShareActionsProps {
  url: string;
}

const ShareActions = ({ url }: ShareActionsProps) => {
  const [copied, setCopied] = useState(false);

  const resolvedUrl = useMemo(() => {
    if (typeof window === "undefined") return url;
    return url.startsWith("http") ? url : `${window.location.origin}${url}`;
  }, [url]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resolvedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
        copied ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-primary/20 bg-primary/5 text-primary"
      }`}
    >
      {copied ? <FiCheck size={14} aria-hidden /> : <FiLink size={14} aria-hidden />}
      {copied ? "Copied" : "Copy link"}
    </button>
  );
};

export default ShareActions;
