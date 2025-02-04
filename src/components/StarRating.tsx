'use client';

import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export default function StarRating({ rating, onRatingChange, readonly = false }: StarRatingProps) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="w-5 h-5 text-yellow-400 fill-yellow-400"
      />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <StarHalf
        key="half"
        className="w-5 h-5 text-yellow-400 fill-yellow-400"
      />
    );
  }

  // Add empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star
        key={`empty-${i}`}
        className="w-5 h-5 text-gray-300"
      />
    );
  }

  return (
    <div className="flex gap-1">
      {stars.map((star, index) => (
        <span key={index} className="cursor-default">
          {star}
        </span>
      ))}
    </div>
  );
}