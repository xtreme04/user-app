export default function UsersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="items-center justify-between text-sm lg:flex">
                {children}
            </div>
        </main>
    );
}