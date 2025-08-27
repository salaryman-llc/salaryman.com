import Link from 'next/link';
import { Button } from './catalyst/button';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactButton() {
  return (
    <Link href="/contact">
      <Button className="hover:cursor-pointer" color="salaryman/orange">
        <EnvelopeIcon />
        <span>Contact Us</span>
      </Button>
    </Link>
  );
}
