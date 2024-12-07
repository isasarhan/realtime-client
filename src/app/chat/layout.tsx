import MainMenuModule from "@/modules/main-menu"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="w-full h-full max-h-screen">
            <div className='flex h-screen overflow-hidden'>
                <MainMenuModule />
                {children}
            </div>
        </div>
    )
}
