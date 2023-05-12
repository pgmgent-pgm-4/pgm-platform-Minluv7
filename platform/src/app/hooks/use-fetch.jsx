import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
        setIsLoading(true);

        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
        } catch (error) {
        setError(error);
        } finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return [data, isLoading, error];
}

export default useFetch;