import { useEffect, useRef } from "react";
export default function useOutsideClick(callback) {
    var ref = useRef(null);
    useEffect(function () {
        var handleOutsideClick = function (event) {
            if (ref.current && !ref.current.contains(event.target))
                callback();
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [callback]);
    return ref;
}
