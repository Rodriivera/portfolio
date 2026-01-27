"use client";

import { useEffect, useState } from "react";

export default function ViewportFrame() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY < 4;
      setVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Sincronizar con la posición inicial del scroll
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 viewport-frame ${
          visible ? "frame-in" : "frame-out"
        }`}
      >
        <div className="viewport-frame-bg" />
      </div>
      <style jsx global>{`
        .viewport-frame {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1;
          width: auto;
          height: 100vh;
          margin: 24px 24px 0;
          border-radius: 32px 32px 0 0;
          pointer-events: none;
          transition: all 0.4s ease-in;
          
        }

        .viewport-frame::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 32px 32px 0 0;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-sizing: border-box;
          opacity: 0;
          
        }

        @keyframes border-in {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes border-out {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(1.05);
          }
        }

        .frame-in::before {
          animation: border-in 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .frame-out::before {
          animation: border-out 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @media (max-width: 1024px) {
          .viewport-frame {
            margin: 12px 12px 0;
          }
        }
      `}</style>
    </>
  );
}
