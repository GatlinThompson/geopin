"use client";

import React, { useState, useContext, useEffect } from "react";
import { AddressContext } from "../address_context";

export default function AddressText() {
  // const [displayedText, setDisplayedText] = useState("");

  const { displayedText: contextText } = useContext(AddressContext);

  return <>{contextText}</>;
}
