import { useState } from "react";

export default function useSignUp() {
    const [affiliated, setAffiliated] = useState("No");
    const [clinic, setClinic] = useState("none");

    const handleAffiliatedChange = (value: string) => setAffiliated(value);
    const handleClinicChange = (value: string) => setClinic(value);

    return {
        affiliated,
        clinic,
        handleAffiliatedChange,
        handleClinicChange,
    };
}