import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#f7f4ec", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
      <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <rect width="512" height="512" rx="112" fill="#244d35" />
        <circle cx="256" cy="254" r="156" fill="#356d48" />
        <circle cx="256" cy="254" r="125" fill="#f7f4ec" />
        <path d="M170 190L220 130L240 203M342 190L292 130L272 203" fill="#a6bd5d" stroke="#244d35" strokeWidth="14" strokeLinejoin="round" />
        <circle cx="206" cy="245" r="12" fill="#244d35" />
        <circle cx="306" cy="245" r="12" fill="#244d35" />
        <path d="M226 286Q256 310 286 286" fill="none" stroke="#244d35" strokeWidth="14" strokeLinecap="round" />
        <path d="M174 289H116M174 322H126M338 289H396M338 322H386" stroke="#244d35" strokeWidth="12" strokeLinecap="round" />
        <circle cx="256" cy="273" r="15" fill="#e7ab5f" />
      </svg>
    </div>,
    size
  );
}
