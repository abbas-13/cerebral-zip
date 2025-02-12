import { Card } from "@mui/material";
import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface AppshelProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppshelProps) {
  return (
    <Card
      sx={{
        display: "flex",
        gap: "1rem",
        padding: "0.5rem",
        width: "100%",
        borderRadius: 3,
        backgroundColor: "rgb(243, 243, 247)",
        boxShadow: "0px 1px 4px",
      }}
    >
      <Sidebar />

      {children}
    </Card>
  );
}
