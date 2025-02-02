import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import { fetchWithAuth } from "../services/api";

export default function CommunityFeedback() {
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      const data = await fetchWithAuth("/sample_assignment_api_5/");
      setFeedback(data);
    };
    fetchFeedback();
  }, []);

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Community Feedback
        </Typography>
        {feedback && (
          <>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Positive</Typography>
              <LinearProgress
                variant="determinate"
                value={(feedback.positive / feedback.total) * 100}
                color="success"
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Neutral</Typography>
              <LinearProgress
                variant="determinate"
                value={(feedback.neutral / feedback.total) * 100}
                color="warning"
              />
            </Box>
            <Box>
              <Typography variant="subtitle2">Negative</Typography>
              <LinearProgress
                variant="determinate"
                value={(feedback.negative / feedback.total) * 100}
                color="error"
              />
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}
