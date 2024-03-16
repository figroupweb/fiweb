import Link from 'next/link';
import { Lang } from './Lang';

export const Nav = () => {
  return (
    <nav className="flex h-20 items-center justify-between px-12">
      <Link href="/">YouTube Piloto</Link>

      <Lang />
    </nav>
  );
};
