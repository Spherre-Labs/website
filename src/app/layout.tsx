import './globals.css' // Assuming your Tailwind imports are here

export const metadata = {
  title: 'Sphere - Collaboration Through Decentralized Security',
  description: 'Secure, scalable, and user-friendly multiSig solutions built on Starknet',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}