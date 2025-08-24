export const metadata = {
  title: "Resume — Your Name",
};

export default function ResumePage() {
  return (
    <div className="container section">
      <h1 className="h1 mb-6">Resume</h1>
      <p className="p-muted mb-6">
        Click the button below to download the PDF. You can also view it inline.
      </p>

      <div className="mb-6">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-brand text-white hover:bg-brand-600 transition shadow-soft"
        >
          Download Resume
        </a>
      </div>

      <div className="card p-3">
        {/* Fallback <object> for broad support */}
        <object
          data="/resume.pdf#toolbar=0&navpanes=0"
          type="application/pdf"
          className="w-full h-[80vh] rounded-xl"
        >
          <iframe src="/resume.pdf" className="w-full h-[80vh] rounded-xl" />
        </object>
      </div>
    </div>
  );
}
