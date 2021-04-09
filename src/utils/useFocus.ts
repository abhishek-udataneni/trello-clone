import { useEffect, useRef } from "react";

export function useFocus() {
    let ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        ref.current?.focus()
    },[]);

    return ref;
}