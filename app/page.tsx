import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <SignedIn>
          <Button asChild variant="outline">
            <Link href="/sign-up">Logout</Link>
          </Button>
        </SignedIn>
      </div>
      <div className="text-center w-full">
        <SignedOut>
          <Button asChild variant="outline">
            <Link href="/sign-in">Login with Google</Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}
