import StudentUploadForm from "@/components/StudentUploadForm";

export default function UploadPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Upload Student Work</h1>

      <p className="mb-6">
        Use this page to upload photos of student work for the Fable Culture
        gallery.
      </p>

      <StudentUploadForm />
    </main>
  );
}
