"use client";

import LoadingPages from "../pages/LoadingPages";

export default function Loading() {
  return (
    <div>
      <LoadingPages onLogin={(token: string) => console.log("")} />
    </div>
  );
}
