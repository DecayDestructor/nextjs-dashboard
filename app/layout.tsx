import '@/app/ui/global.css'
import { interTight } from './ui/fonts'
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
