import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      <div className="w-full max-w-md p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-xl mb-8">
          The cosmic coordinates you entered don&apos;t match any known location in our space portfolio.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Mission Control
        </Link>
      </div>
    </div>
  );
}
