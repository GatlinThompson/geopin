import { fullText } from "../../address_context/address_context";

export type AddressResultProps = {
  typed: number; // Number of characters typed
  addresses: AddressProps[];
};

export type AddressProps = { address: string; correct: boolean };

export const addressResults: AddressResultProps[] = [
  {
    typed: Math.floor(fullText.length / 3), // Number of characters typed
    addresses: [
      {
        address: "552 N 22nd Street, Salt Lake City, UT 84116",
        correct: false,
      },
      {
        address: "552 N 23nd Street, Salt Lake City, UT 84116",
        correct: false,
      },
      {
        address: "552 N 24nd Street, Salt Lake City, UT 84116",
        correct: false,
      },
    ],
  },
  {
    typed: Math.floor(fullText.length / 2), // Number of characters typed
    addresses: [
      {
        address: "552 N Orach Dr, Salt Lake City, UT 84116",
        correct: false,
      },
      {
        address: "552 N Orlando St, Salt Lake City, UT 84116",
        correct: false,
      },
      {
        address: "552 N Ormar Ct, Salt Lake City, UT 84116",
        correct: false,
      },
    ],
  },
  {
    typed: fullText.length, // Number of characters typed
    addresses: [
      {
        address: "552 N Orach Dr, Salt Lake City, UT 84116",
        correct: false,
      },
      {
        address: "552 N Orchard Drive, Salt Lake City, UT 84116",
        correct: true,
      },
      {
        address: "552 N Ormar Ct, Salt Lake City, UT 84116",
        correct: false,
      },
    ],
  },
];
