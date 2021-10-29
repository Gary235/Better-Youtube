import { useEffect } from "react";

const useOutsideAlerter = (ref, ignoreRefs = []) => {
  const checkAllRefs = (event) =>
    ref.current &&
    ![ref, ...ignoreRefs].some((ref) => ref.current.contains(event.target));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkAllRefs(event)) {
        ref.current.style.display = "none";
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideAlerter;
