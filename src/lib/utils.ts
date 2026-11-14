import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a phone number safely for Google Sheets & Excel.
 * Prevents leading '+' from triggering formula evaluation (#ERROR! Formula parse error).
 * Returns standardized format like "(+91) 9876543210" which is evaluated as pure text by spreadsheets
 * and correctly dialed by smartphone dialers and 'tel:' links.
 */
export function formatSafePhoneNumber(raw: string): string {
  if (!raw) return "";
  const trimmed = raw.trim();

  // If already formatted like "(+91) 9876543210", return as-is
  if (/^\(\+\d{1,4}\)/.test(trimmed)) {
    return trimmed;
  }

  // If starts with '+' e.g. "+91 9876543210", "+91 98765 43210", "+91-9876543210"
  if (trimmed.startsWith("+")) {
    const match = trimmed.match(/^\+(\d{1,4})[\s-]*(.*)$/);
    if (match) {
      const code = match[1];
      const rest = match[2].trim();
      const restDigits = rest.replace(/\D/g, "");
      if (restDigits.length === 10) {
        return `(+${code}) ${restDigits}`;
      }
      return `(+${code}) ${rest}`.trim();
    }
  }

  // Extract pure digits
  const digits = trimmed.replace(/\D/g, "");

  // 10-digit Indian mobile number
  if (/^[6-9]\d{9}$/.test(digits)) {
    return `(+91) ${digits}`;
  }

  // 12-digit Indian number starting with 91 (e.g. 919876543210)
  if (/^91[6-9]\d{9}$/.test(digits)) {
    return `(+91) ${digits.slice(2)}`;
  }

  // If starts with another country code without +, or general text
  return trimmed;
}

