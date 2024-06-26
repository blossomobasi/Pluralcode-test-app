import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";
import { ProductProvider } from "@/context/ProductContext";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

const inconsolata = Inconsolata({
    subsets: ["latin"],
    variable: "--font-inconsolata",
});

export const metadata: Metadata = {
    title: "PluralCode test",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${inconsolata.variable} flex flex-col items-center`}
            >
                <UserProvider>
                    <ProductProvider>
                        <CartProvider>
                            <main className="relative max-w-[100rem] w-full h-full">
                                {children}
                                <Footer />
                            </main>
                        </CartProvider>
                    </ProductProvider>
                </UserProvider>
            </body>
        </html>
    );
}
