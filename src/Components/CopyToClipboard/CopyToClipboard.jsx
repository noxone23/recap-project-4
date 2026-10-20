import { useState, useEffect } from "react";

export default function CopyToClipboard({ hexCode }) {
    const [isCopied, setIsCopied] = useState(false);

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {

    if (!isCopied) return;
    const timeoutId = setTimeout(() => {

        setIsCopied(false);
    }, 3000);

    return() => clearTimeout(timeoutId);
}, [isCopied]);

return (
    <button onClick={() => writeClipboardText(hexCode)} className="copy-button">
        {isCopied ? "SUCCESSFULY COPIED!" : "COPY"}
    </button>
);
}