"use client";

import { useEffect } from "react";
import axios from "axios";
import api from "@/config/api";

export default function AnalyticsTracker() {

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const existingVisitorId = localStorage.getItem("visitorId");
        let visitorId = existingVisitorId;
        
        if (!visitorId) {
          visitorId = crypto.randomUUID();
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
        
        // Only update local storage if the server returned a different ID, or if we generated a new one
        if (returnedId && returnedId !== existingVisitorId) {
          localStorage.setItem("visitorId", returnedId);
        } else if (!existingVisitorId) {
          localStorage.setItem("visitorId", visitorId);
        }
      } catch (error) {
        console.error("Failed to track visitor analytics:", error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}
