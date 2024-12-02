import React from 'react';
import Link from 'next/link';

export const Footer = ({ lang = 'lt' }) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-4 flex justify-center">
          <Link
            href="/privatumo-politika"
            className="text-gray-400 hover:text-pink"
          >
            {lang === 'lt' ? 'Privatumo politika' : 'Privacy policy'}
          </Link>
        </div>
        <p className="mt-4 text-center text-base text-gray-400">
          © {new Date().getFullYear()}{' '}
          {lang === 'lt'
            ? 'Hire Partners. Visos teisės saugomos.'
            : 'Hire Partners. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};
