import './globals.css'
import ThemeProvider from './theme-provider';



export default function RootLayout({ children }) {
  return (
    <html >
      <body>{children}</body>
    </html>
  )
}

 
