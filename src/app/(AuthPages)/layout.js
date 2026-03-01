import AuthLayout from '@/layouts/AuthLayout';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
