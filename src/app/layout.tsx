import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AuthProvider } from "@/context/AuthContext";
import Transition from "@/components/Transition";
import { AttendanceProvider } from "@/context/AttendanceContext";
import { ProfileProvider } from "@/context/ProfileContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edumarshal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <AttendanceProvider>
            <ProfileProvider>
              <Transition>
                <Providers>{children}</Providers>
              </Transition>
            </ProfileProvider>
          </AttendanceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
