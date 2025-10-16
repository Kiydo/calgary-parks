"use client";
import { useState } from 'react';
import useParkData from "@/hooks/useParkData";

export default function ListParks() {
    const parks = useParkData();
    const [currentPage, setCurrentPage] = useState(1);

    const parksPerPage = 10;
    const totalPages = Math.ceil(parks.length / parksPerPage);
    const startIndex = (currentPage - 1) * parksPerPage;
    const currentParks = parks.slice(startIndex, startIndex + parksPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className='max-w-2xl mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-6 text-center'>
                Calgary Parks
            </h1>
            <ul className='grid gap-3'>
                {currentParks.map((parks, i) => (
                    <li 
                        key={i}
                        onClick={() => alert(`Test Click = Clicked on: ${parks.site_name}`)}
                        className='p-4 bg-white border border-gray-200 rounded-lg'
                    >
                        <h2 className='text-lg font-semibold'>
                            {parks.site_name}
                        </h2>
                    </li>
                ))}
            </ul>

            <div className='flex items-center justify-center gap-4 mt-6'>
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md border transition ${
                        currentPage ===1
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white hober:bg-gray-100"
                    }`}
                >
                    Previous
                </button>
                <span className='text-sm'>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md border transition ${
                        currentPage === totalPages
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white hober:bg-gray-100"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}