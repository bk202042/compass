import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">Compass</Link>
        <nav>
          <Link href="#" className="mx-2 text-gray-600 hover:text-gray-800">아파트</Link>
          <Link href="#" className="mx-2 text-gray-600 hover:text-gray-800">빌라, 투룸+</Link>
          <Link href="#" className="mx-2 text-gray-600 hover:text-gray-800">원룸</Link>
          <Link href="#" className="mx-2 text-gray-600 hover:text-gray-800">오피스텔</Link>
          <Link href="#" className="mx-2 text-gray-600 hover:text-gray-800">상가</Link>
        </nav>
      </div>
    </header>
  );
}
