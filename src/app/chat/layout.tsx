import MainMenu from "./components/MainMenu"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="w-full h-full max-h-screen">
            <MainMenu/>
            {children}
        </div>
    )
}
