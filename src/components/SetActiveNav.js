"use client";
import { useEffect, useContext } from "react";
import Context from "@/context/context";

export default function SetActiveNav({ value }) {
  const { setNav } = useContext(Context);
  useEffect(() => {
    setNav?.(value);
  }, [setNav, value]);
  return null;
}
