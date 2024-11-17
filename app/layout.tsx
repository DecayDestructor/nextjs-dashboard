import '@/app/ui/global.css'
import { interTight } from './ui/font'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${interTight.className} antialiased`}>{children}</body>
    </html>
  )
}
