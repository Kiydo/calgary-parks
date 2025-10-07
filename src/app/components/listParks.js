"use client";

import useParkData from "@/hooks/useParkData";

export default function ListParks() {
    const parks = useParkData();

    return (
        <div>
            <h1>Calgary Parks</h1>
            <ul>
                {parks.map((parks, i) => (
                    <li key={i}>
                        {parks.site_name}
                    </li>
                ))}
            </ul>
        </div>
    )
}