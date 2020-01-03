import { useEffect, useState } from "react";

//REF: https://dev.to/spaciecat/keyboard-input-with-react-hooks-3dkm
export default function useKey(key: string) {
  // Keep track of key state
  const [pressed, setPressed] = useState(false);

  // Does an event match the key we're watching?
  const match = (event: KeyboardEvent) => {
    return key.toLowerCase() === event.key.toLowerCase();
  };

  // Event handlers
  const onDown = (event: KeyboardEvent) => {
    if (match(event)) setPressed(true);
  };

  const onUp = (event: KeyboardEvent) => {
    if (match(event)) setPressed(false);
  };

  // Bind and unbind eventsa
  useEffect(() => {
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [key, onDown, onUp]);

  return pressed;
}
