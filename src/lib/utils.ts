import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEmailLink(to: string, subject = "", body = "") {
  const subjectParam = subject ? `subject=${encodeURIComponent(subject)}` : "";
  const bodyParam = body ? `body=${encodeURIComponent(body)}` : "";
  const params = [subjectParam, bodyParam].filter(Boolean).join("&");
  const query = params ? `?${params}` : "";

  return `mailto:${to}${query}`;
}
