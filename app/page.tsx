import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-center min-h-screen flex-col gap-5 ">
      <h2 className="font-bold">Welcome Admin</h2>
      <SignedOut>
        <Button asChild variant="outline">
          <Link href="/sign-in">Login with Google</Link>
        </Button>
      </SignedOut>
    </div>
  );
}
