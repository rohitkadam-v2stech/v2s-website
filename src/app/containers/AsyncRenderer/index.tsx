import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

export type TAsyncRendering = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

function AsyncRenderer({
  children,
  fallback = <CircularProgress />,
}: TAsyncRendering) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default AsyncRenderer;
