import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Sign-Age website enquiries and data handling.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-slate-900 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9acd32]">
          Legal
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: April 16, 2026</p>

        <section className="mt-10 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">1. Who we are</h2>
          <p>
            Sign-Age manufactures machine protection systems and receives enquiries through the
            contact form on this website.
          </p>
        </section>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">2. Data we collect</h2>
          <p>When you submit the enquiry form, we may collect:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name and business details</li>
            <li>Designation, email, and phone number</li>
            <li>City and country</li>
            <li>Enquiry type and product interests</li>
            <li>Machine details, travel dimensions, operating conditions, and requirements</li>
            <li>Submission metadata such as date/time and source page</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">3. How we use your data</h2>
          <p>We use this information only to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Review your technical requirement</li>
            <li>Prepare quotations or proposal responses</li>
            <li>Contact you regarding your enquiry</li>
            <li>Maintain internal records for enquiry follow-up</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">4. Storage and processing</h2>
          <p>
            Form submissions are processed through our website and stored in tools used for enquiry
            management, including Google Sheets/web forms infrastructure.
          </p>
          <p>
            We apply reasonable administrative and technical measures to protect submitted
            information.
          </p>
        </section>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">5. Sharing</h2>
          <p>
            We do not sell your personal data. We only share information with service providers and
            internal teams when required to process your enquiry or operate this website.
          </p>
        </section>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">6. Retention</h2>
          <p>
            We keep enquiry records for as long as needed for customer communication,
            quotation/support history, and legal or operational requirements.
          </p>
        </section>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">7. Your choices</h2>
          <p>
            You may request correction or deletion of the personal data you submitted, subject to
            legal and business record-keeping requirements.
          </p>
        </section>

        <section className="mt-8 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-black text-slate-900">8. Contact</h2>
          <p>
            For privacy-related requests, contact us through the details in the website contact
            section:
          </p>
          <p>
            Sign-Age, 452, 12th Cross Rd, Peenya Industrial Area Phase IV, Peenya, Bengaluru,
            Karnataka 560058, India.
          </p>
          <p>Telephone: +91 98860 35718</p>
        </section>
      </div>
    </main>
  );
}
