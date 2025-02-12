"use client";

import { useEffect, useState } from "react";
import { CardContent, Typography, Card } from "@mui/material";
import { fetchData } from "../utils/api";
import RatingBar from "./ratingBar";

interface FeedbackData {
  negative: number;
  positive: number;
  neutral: number;
}

export default function CommunityFeedback() {
  const [feedback, setFeedback] = useState<FeedbackData | null>(null);

  useEffect(() => {
    const fetchCommunityFeedback = async () => {
      try {
        const data = await fetchData(5);
        setFeedback(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCommunityFeedback();
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        borderRadius: "0.7rem",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontFamily: "Lato, sans-serif",
            marginBottom: "1rem",
            fontSize: "0.8rem",
          }}
          gutterBottom
        >
          Community Feedback
        </Typography>
        <RatingBar data={feedback} />
        <div className="flex gap-3 w-full mt-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Negative</span>
            <span className="text-sm font-bold">{feedback?.negative}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Neutral</span>
            <span className="text-sm font-bold">{feedback?.neutral}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Positive</span>
            <span className="text-sm font-bold">{feedback?.positive}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
