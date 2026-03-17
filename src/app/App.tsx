import { SpeedInsights } from "@vercel/speed-insights/react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
    </>
  );
}
