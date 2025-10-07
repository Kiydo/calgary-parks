"use client"
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/utils/authContext";
import { fetchParks } from "@/lib/api/parks";

export default function useParkData() {
    const [parks, setParks] = useState([]);
    const { parksUrl, calgaryToken } = useAuth();

    useEffect(() => {
        if (!parksUrl || !calgaryToken) return;
        fetchParks(parksUrl, calgaryToken)
            .then(setParks)
            .catch(console.error);
    }, [parksUrl, calgaryToken]);

    return parks;
}