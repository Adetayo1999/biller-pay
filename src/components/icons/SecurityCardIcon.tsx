"use client";

import { SvgProps } from "@/types";
import { FC } from "react";

const SecurityCardIcon: FC<SvgProps> = (props) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.5234 32.5416H32.3767C32.2117 32.6883 32.0467 32.8167 31.8817 32.9633L24.0533 38.83C21.4683 40.755 17.2517 40.755 14.6484 38.83L6.8017 32.9633C5.07837 31.68 3.66669 28.8383 3.66669 26.6933V13.1083C3.66669 10.8716 5.3717 8.39663 7.4617 7.6083L16.5917 4.17997C18.095 3.61164 20.5884 3.61164 22.0917 4.17997L31.2034 7.6083C32.945 8.2683 34.43 10.1016 34.8884 11.9716H21.505C21.1017 11.9716 20.735 11.99 20.3867 11.99C16.995 12.1917 16.115 13.42 16.115 17.2883V27.2433C16.1333 31.4599 17.215 32.5416 21.5234 32.5416Z"
        stroke={props.strokeColor || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1334 20.57H40.3334"
        stroke={props.strokeColor || "#292D32"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.3334 17.27V27.445C40.2967 31.515 39.1784 32.5233 34.9434 32.5233H21.5234C17.215 32.5233 16.1334 31.4416 16.1334 27.2066V17.2517C16.1334 13.4017 17.0134 12.1733 20.405 11.9533C20.7534 11.9533 21.12 11.935 21.5234 11.935H34.9434C39.2517 11.9533 40.3334 13.0167 40.3334 17.27Z"
        stroke={props.strokeColor || "#292D32"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7534 27.9767H23.1917"
        stroke={props.strokeColor || "#292D32"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.0417 27.9767H33.0367"
        stroke={props.strokeColor || "#292D32"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SecurityCardIcon;
