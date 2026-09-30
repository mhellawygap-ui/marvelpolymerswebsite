/**
 * Form submission — one place for every form on the site.
 *
 * DEMO MODE (now): FORM_ENDPOINT is empty, so submissions are simulated and the
 * visitor is taken to the thank-you page. Nothing is sent anywhere.
 *
 * GOING LIVE: paste your endpoint below and every form starts delivering to your inbox.
 *   - Formspree:  "https://formspree.io/f/<your-form-id>"
 *   - Web3Forms:  "https://api.web3forms.com/submit"  (also set WEB3FORMS_ACCESS_KEY)
 * Both accept multipart form data, so the spec / TDS file uploads work as-is.
 */
export const FORM_ENDPOINT = "";
export const WEB3FORMS_ACCESS_KEY = "";

export type FormKind = "quote" | "contact" | "documents" | "family";

export async function submitForm(kind: FormKind, form: HTMLFormElement): Promise<void> {
  const data = new FormData(form);
  data.set("form", kind);
  data.set("page", window.location.href);

  if (!FORM_ENDPOINT) {
    // Demo: short pause so the button's "Sending…" state is visible, then succeed.
    await new Promise((r) => setTimeout(r, 700));
    return;
  }

  if (WEB3FORMS_ACCESS_KEY) data.set("access_key", WEB3FORMS_ACCESS_KEY);
  data.set("subject", `Website ${kind} enquiry — Marvel Polymers`);

  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Form service responded ${res.status}`);
}
