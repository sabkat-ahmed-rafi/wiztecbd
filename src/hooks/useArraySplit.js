import { useMemo } from "react";

const useArraySplit = (array) => {
    return useMemo(() => {
        if (!Array.isArray(array)) return [[], []];

        const midIndex = Math.ceil(array.length / 2);
        return [array.slice(0, midIndex), array.slice(midIndex)];
    }, [array]);
};

export default useArraySplit;
