"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../hook/AuthProvider";
import Spiner from "@/components/Spiner";

type TProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: TProps) {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [token, router]);

  if (!token) {
    return (
      <>
        <Spiner />
      </>
    );
  }

  return <>{children}</>;
}
