import React from 'react';
import { Link } from 'react-router-dom';

export default function LeetCode() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[700px]">
            <h2 className="text-2xl font-bold text-gray-700">LeetCode Profile</h2>
            <p className="text-gray-500 mt-4">
                Visit my LeetCode profile to explore my coding achievements and progress.
            </p>
            <Link
                to="https://leetcode.com/u/19wj1a05r9/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go to LeetCode Profile
            </Link>
        </div>
    );
}
