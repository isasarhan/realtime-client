import MainMenu from "./components/MainMenu"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="w-full">
            <MainMenu/>
            {children}
        </div>
    )
}
