import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-xs">
        Crafted with love by{" "}
        <Link
          href={"https://allwes.id"}
          className="font-semibold hover:text-primary"
          target="_blank"
        >
          {" "}
          AllWes Indonesia{" "}
        </Link>
        . Designed in{" "}
        <Link
          href={"https://figma.com"}
          className="font-semibold hover:text-primary"
          target="_blank"
        >
          {" "}
          Figma{" "}
        </Link>{" "}
        and brought to life in{" "}
        <Link
          href={"https://code.visualstudio.com"}
          className="font-semibold hover:text-primary"
          target="_blank"
        >
          {" "}
          Visual Studio Code{" "}
        </Link>
        . Built using{" "}
        <Link
          href={"https://nextjs.org"}
          className="font-semibold hover:text-primary"
          target="_blank"
        >
          {" "}
          Next.js{" "}
        </Link>{" "}
        and{" "}
        <Link
          href={"https://tailwindcss.com"}
          className="font-semibold hover:text-primary"
          target="_blank"
        >
          {" "}
          Tailwind CSS{" "}
        </Link>
        , and seamlessly deployed via{" "}
        <Link
          href={"https://vercel.com"}
          className="font-semibold hover:text-primary"
          target="_blank"
        >
          {" "}
          Vercel{" "}
        </Link>
        . The text is styled in the elegant{" "}
        <Link
          href={"https://fonts.google.com/specimen/Poppins"}
          className="font-semibold hover:text-primary"
          target="_blank"
        >
          {" "}
          Poppins{" "}
        </Link>{" "}
        typeface.
      </p>
    </div>
  );
};

export default Footer;
