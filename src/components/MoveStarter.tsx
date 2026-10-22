"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
export default function MoveStarter() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return <form className="move-starter" onSubmit={e => {
    e.preventDefault();
    try { sessionStorage.setItem("franks-move", JSON.stringify({ from, to })); } catch { /* Quote form remains usable if storage is unavailable. */ }
    track("quote_click", { location: "homepage_move_starter" });
    router.push("/quote/");
  }}><div><h2>Let’s get you moving.</h2><p>A few details. A clear quote.</p></div>
    <label>Moving from<input value={from} onChange={e => setFrom(e.target.value)} placeholder="Postcode or area" autoComplete="off" /></label>
    <label>Moving to<input value={to} onChange={e => setTo(e.target.value)} placeholder="Postcode or area" autoComplete="off" /></label>
    <button className="button" type="submit">Get a quote <span aria-hidden>↗</span></button>
  </form>;
}
