"use client";

import { useEffect, useState } from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true);
    }, 650);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-[9999] ${
          ready ? "route-transition-finished" : ""
        }`}
        aria-hidden="true"
      >
        <div className="route-panel route-panel-a" />
        <div className="route-panel route-panel-b" />

        <div className="route-mark">
          <span>MANERDZ</span>
          <small>REVENUE SYSTEMS</small>
        </div>
      </div>

      <div className="route-content">
        {children}
      </div>

      <style jsx global>{`
        .route-transition-finished {
          pointer-events: none;
        }

        .route-panel {
          position: fixed;
          inset: 0;
          transform: translateY(0);
          will-change: transform;
        }

        .route-panel-a {
          background: #071311;
          z-index: 2;
          animation: routePanelA 0.72s
            cubic-bezier(0.76, 0, 0.24, 1)
            forwards;
        }

        .route-panel-b {
          background: #8ff5c2;
          z-index: 1;
          animation: routePanelB 0.82s
            cubic-bezier(0.76, 0, 0.24, 1)
            forwards;
        }

        .route-mark {
          position: fixed;
          left: 50%;
          top: 50%;
          z-index: 4;
          display: flex;
          transform: translate(-50%, -50%);
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #f2f6f1;
          opacity: 1;
          animation: routeMark 0.55s
            cubic-bezier(0.76, 0, 0.24, 1)
            forwards;
          animation-delay: 0.08s;
        }

        .route-mark span {
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.28em;
        }

        .route-mark small {
          color: rgba(242, 246, 241, 0.4);
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.28em;
        }

        .route-content {
          animation: routeContent 0.75s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes routePanelA {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes routePanelB {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes routeMark {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }

          60% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.02);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.96);
          }
        }

        @keyframes routeContent {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .route-panel-a,
          .route-panel-b,
          .route-mark,
          .route-content {
            animation: none;
          }

          .route-panel-a,
          .route-panel-b,
          .route-mark {
            display: none;
          }

          .route-content {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}