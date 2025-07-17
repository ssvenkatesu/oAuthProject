"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./page.module.css";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      {session && <Navbar user={session.user} />}
      
      {session ? (
        <>
          <h2>Welcome, {session.user.name || session.user.email}!</h2>
          <p>You are signed in as <strong>{session.user.email}</strong>.</p>
        </>
      ) : (
        <>
          <h2>You are not signed in</h2>
          <button onClick={() => signIn("github")} className={styles.button}>
            Sign in with github
          </button>
        </>
      )}
    </div>
  );
}


function Navbar({ user }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <span className={styles.logo}>Interv 2</span>
      </div>
      <div className={styles.navright}>
        <span className={styles.user}>
          Welcome, <strong>{user.name}</strong>
        </span>
        <button onClick={() => signOut()} className={styles.navButton}>
          Sign Out
        </button>
      </div>
    </nav>
  );
}

