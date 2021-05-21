import React from 'react';

export const JobSkeleton = () => (
  <div className="py-12 px-4 sm:px-6 lg:px-8">
    <div className="text-lg max-w-prose mx-auto">
      <div className="rounded-sm mx-auto h-1 w-32 bg-pink" />
      <div className="mt-4 rounded-sm mx-auto h-1 w-60 bg-pink-dark" />
      <div className="mt-16">
        <div className="mt-4 rounded-sm h-1 w-auto bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-auto bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-auto bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-96 bg-gray-400" />
      </div>
    </div>
    <div className="mt-6 prose prose-lg text-gray-400 mx-auto">
      <h2>We expect you are:</h2>
      <div>
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
      </div>

      <h2>Company offers:</h2>
      <div>
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
      </div>

      <h2>Tech stack:</h2>
      <div>
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
        <div className="mt-4 rounded-sm h-1 w-72 bg-gray-400" />
      </div>
    </div>
  </div>
);
