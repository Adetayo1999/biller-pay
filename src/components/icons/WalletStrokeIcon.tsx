"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const WalletStrokeIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.0858 11.7501C29.6858 11.6834 29.2691 11.6668 28.8358 11.6668H12.1691C11.7024 11.6668 11.2524 11.7001 10.8191 11.7668C11.0524 11.3001 11.3858 10.8668 11.7858 10.4668L17.2024 5.0335C19.4858 2.76683 23.1858 2.76683 25.4691 5.0335L28.3858 7.98343C29.4524 9.03343 30.0191 10.3668 30.0858 11.7501Z"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "1.5" }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5001 31.6667C15.5001 32.9167 15.1501 34.1 14.5334 35.1C13.3834 37.0333 11.2667 38.3333 8.83341 38.3333C6.40008 38.3333 4.28341 37.0333 3.13341 35.1C2.51675 34.1 2.16675 32.9167 2.16675 31.6667C2.16675 27.9833 5.15008 25 8.83341 25C12.5167 25 15.5001 27.9833 15.5001 31.6667Z"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "1.5" }
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3197 31.6323H6.35303"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "1.5" }
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8335 29.1992V34.1825"
        stroke={props.strokeColor || "white"}
        strokeWidth={props.strokeWidth || "1.5" }
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.1666 19.9998V28.3332C37.1666 33.3332 33.8333 36.6665 28.8333 36.6665H13.2166C13.7333 36.2332 14.1833 35.6998 14.5333 35.0998C15.1499 34.0998 15.4999 32.9165 15.4999 31.6665C15.4999 27.9832 12.5166 24.9998 8.83325 24.9998C6.83325 24.9998 5.04992 25.8831 3.83325 27.2665V19.9998C3.83325 15.4665 6.56659 12.2998 10.8166 11.7665C11.2499 11.6998 11.6999 11.6665 12.1666 11.6665H28.8333C29.2666 11.6665 29.6833 11.6832 30.0833 11.7498C34.3833 12.2498 37.1666 15.4332 37.1666 19.9998Z"
        stroke="white"
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.1666 20.8335H32.1666C30.3333 20.8335 28.8333 22.3335 28.8333 24.1668C28.8333 26.0002 30.3333 27.5002 32.1666 27.5002H37.1666"
        stroke="white"
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default WalletStrokeIcon;
