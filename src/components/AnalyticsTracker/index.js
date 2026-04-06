"use client";

import { useEffect, useRef } from "react";
import axios from "axios";
import api from "@/config/api";

export default function AnalyticsTracker() {
  const isTracked = useRef(false);

  useEffect(() => {
    if (isTracked.current) return;
    isTracked.current = true;

    const trackVisitor = async () => {
      try {
        const existingVisitorId = localStorage.getItem("visitorId");
        let visitorId = existingVisitorId;
        
        if (!visitorId) {
          visitorId = crypto.randomUUID();
          // Save immediately to avoid race conditions
          localStorage.setItem("visitorId", visitorId);
        }

        const response = await api.post(
          `/api/analytics/track-visitor`,
          {},
          {
            headers: {
              "x-visitor-id": visitorId,
            },
          }
        );
        console.log("Analytics Response",response)
        
        const returnedId = response.data?.visitor?.visitorId;
        
        // Only update local storage if the server returned a noticeably different ID
        if (returnedId && returnedId !== visitorId) {
          localStorage.setItem("visitorId", returnedId);
        }
      } catch (error) {
        console.error("Failed to track visitor analytics:", error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}
