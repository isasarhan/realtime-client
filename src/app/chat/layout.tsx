import MainMenu from "./components/MainMenu"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="w-full h-full max-h-screen">
            <div className='flex h-screen overflow-hidden'> {/* Prevent content overflow with overflow-hidden */}
                <MainMenu />
                {children}
            </div>
        </div>
    )
}
