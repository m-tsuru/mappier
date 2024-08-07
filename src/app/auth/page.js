"use client";

import { useCallback } from "react";

// export default function Index( {loginPath} : InferGetStaticPropsType<typeof getStaticProps>) {
export default async function Index() {
    const scopes = [
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-read-email",
      ];
    const params = new URLSearchParams();
    params.append("client_id", process.env.NEXT_PUBLIC_SPOTIFY_API_CLIENT_ID);
    params.append("response_type", "code");
    params.append("response_type", "code");
    params.append("scope", scopes.join(" "));
    params.append("state", "state");
    params.append("redirect_uri", process.env.NEXT_PUBLIC_SPOTIFY_CALLBACK_URI);
    const loginPath = `https://accounts.spotify.com/authorize?${params.toString()}`;
    const login = useCallback(() => {
        window.location.href = loginPath;
    }, [loginPath]);
  return (
    <button onClick={login}>
      Sign in with Spotify
    </button>
  );
}
