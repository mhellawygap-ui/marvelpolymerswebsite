import { useState } from "react";

type Doc = "privacy" | "terms" | "cookies";

const UPDATED = "October 2026";
const CONTACT = "operations@marvelpolymers.com";

const CONTENT: Record<Doc, { title: string; intro: string; sections: { h: string; p: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    intro: "This policy explains what information Marvel Polymers collects through this website and how we use it.",
    sections: [
      { h: "Information we collect", p: "When you send an enquiry, request a quote or ask for documents, we collect the details you enter — such as your name, company, email, phone number, country and any files you attach." },
      { h: "How we use it", p: "We use your information only to reply to your request, prepare quotes and documentation, and manage our business relationship with you. We do not sell your information." },
      { h: "Sharing", p: "We may share information with service providers that help us run the website and handle enquiries (for example, email and form services), and with producers or logistics partners when needed to fulfil your request." },
      { h: "Retention", p: "We keep your information only as long as needed for the purposes above or as required by law." },
      { h: "Your rights", p: `You can ask to access, correct or delete your personal information at any time by emailing ${CONTACT}.` },
      { h: "Contact", p: `Marvel Polymers, El-Nahda Industrial Zone, Alexandria, Egypt · ${CONTACT}` },
    ],
  },
  terms: {
    title: "Terms of Use",
    intro: "By using this website you agree to these terms.",
    sections: [
      { h: "Website content", p: "Information on this website is provided for general guidance only. Product descriptions and guides are not technical specifications; always refer to the official data sheet for the specific grade." },
      { h: "Quotes and orders", p: "Submitting a form on this website is a request for information and does not create an order or a contract. Prices, availability and terms are confirmed in a written quotation." },
      { h: "Intellectual property", p: "The content, design and logos on this website belong to Marvel Polymers or are used with permission. Third-party trademarks and producer names belong to their respective owners." },
      { h: "Liability", p: "We work to keep information accurate and up to date, but we do not guarantee that it is complete or error-free, and we are not liable for decisions made based on it." },
      { h: "Changes", p: "We may update these terms from time to time. The latest version is always available on this page." },
      { h: "Contact", p: `Questions about these terms: ${CONTACT}` },
    ],
  },
  cookies: {
    title: "Cookie Preferences",
    intro: "Cookies are small files stored in your browser. This page explains how we use them and lets you choose.",
    sections: [
      { h: "Essential cookies", p: "Needed for the website to work, such as remembering your choices on this page. These are always on." },
      { h: "Analytics cookies", p: "Help us understand how visitors use the website so we can improve it. These are only used if you allow them." },
      { h: "Managing cookies", p: "You can change your choice below at any time, or clear cookies in your browser settings." },
    ],
  },
};

const KEY = "mp-cookie-analytics";

function readPref(): boolean {
  try { return window.localStorage.getItem(KEY) === "yes"; } catch { return false; }
}

export default function LegalPage({ doc }: { doc: Doc }) {
  const c = CONTENT[doc];
  const [analytics, setAnalytics] = useState(readPref);
  const [saved, setSaved] = useState(false);

  const save = () => {
    try { window.localStorage.setItem(KEY, analytics ? "yes" : "no"); } catch { /* storage unavailable */ }
    setSaved(true);
  };

  return (
    <main className="legal">
      <section className="legal-hero">
        <div className="container legal-wrap">
          <h1>{c.title}</h1>
          <p className="legal-updated">Last updated: {UPDATED}</p>
          <p className="legal-intro">{c.intro}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-wrap">
          {c.sections.map((s) => (
            <div key={s.h} className="legal-sec">
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}

          {doc === "cookies" && (
            <div className="legal-prefs">
              <div className="legal-pref">
                <div><strong>Essential</strong><small>Always on</small></div>
                <span className="legal-switch on disabled" aria-hidden="true"><span /></span>
              </div>
              <label className="legal-pref">
                <div><strong>Analytics</strong><small>{analytics ? "Allowed" : "Not allowed"}</small></div>
                <input type="checkbox" checked={analytics} onChange={(e) => { setAnalytics(e.target.checked); setSaved(false); }} />
                <span className={`legal-switch${analytics ? " on" : ""}`} aria-hidden="true"><span /></span>
              </label>
              <button className="btn primary" onClick={save}>Save preferences</button>
              {saved && <p className="legal-saved" role="status">Your preferences have been saved.</p>}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
