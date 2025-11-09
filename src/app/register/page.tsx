export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-black mb-4">INSCRIPTION</h1>
        <p className="text-gray-600 mb-6">
          Registration is not available in the demo version.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          This feature requires database connection and authentication setup.
        </p>
        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 font-bold uppercase hover:bg-gray-800 transition-colors"
        >
          RETOUR À L'ACCUEIL
        </a>
      </div>
    </div>
  );
}
