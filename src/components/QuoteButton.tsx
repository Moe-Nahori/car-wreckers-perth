import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

interface QuoteButtonProps {
  text?: string;
  className?: string;
}

export default function QuoteButton({ 
  text = "Get Free Quote", 
  className = ""
}: QuoteButtonProps) {
  return (
    <Link href="/quote">
      <Button 
        className={`bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 ${className}`}
      >
        {text}
        <MoveRight className="w-4 h-4" />
      </Button>
    </Link>
  );
}