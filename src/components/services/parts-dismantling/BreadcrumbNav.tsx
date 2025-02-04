'use client';

import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => (
  <nav className="flex mb-6 text-sm text-gray-600">
    {items.map((item, index) => (
      <React.Fragment key={item.href}>
        {index > 0 && <span className="mx-2">/</span>}
        <Link 
          href={item.href}
          className={index === items.length - 1 ? "text-blue-600" : "hover:text-blue-600"}
        >
          {item.label}
        </Link>
      </React.Fragment>
    ))}
  </nav>
);

export default BreadcrumbNav;