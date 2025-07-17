"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import './page.css'

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/Loginpage");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="home-container">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="welcome-heading">Welcome, {session?.user?.name}!</h2>
        <p className="welcome-subtext">You have successfully signed in.</p>
        <button
          className="logout-button"
          onClick={() => signOut({ callbackUrl: "/Loginpage" })}
        >
          Logout
        </button>
      </div>
    </div>
  );
}