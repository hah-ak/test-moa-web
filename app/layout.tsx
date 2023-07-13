import {Inter} from 'next/font/google'
import './global.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children, myRooms}: {
    children: React.ReactNode
    myRooms: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} max-w-screen-lg md:m-auto`}>
        {children}
        {myRooms}
        </body>
        </html>
    )
}
