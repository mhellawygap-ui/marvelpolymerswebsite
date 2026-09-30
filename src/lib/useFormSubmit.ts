import { useState } from "react";
import { useNav } from "@/NavContext";
import { submitForm, type FormKind } from "@/lib/forms";

/** Shared submit behaviour: "Sending…" state, error message, then the thank-you page. */
export function useFormSubmit(kind: FormKind) {
  const { navigate } = useNav();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await submitForm(kind, e.currentTarget);
      navigate("thanks", kind);
    } catch {
      setError("Something went wrong sending your enquiry. Please try again or email operations@marvelpolymers.com.");
      setSending(false);
    }
  };

  return { sending, error, onSubmit };
}
