import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "T&T Digital | Công Ty Thiết Kế Website Chuyên Nghiệp & Giải Pháp Phần Mềm",
  description: "T&T Digital chuyên tư vấn và phát triển Website chuẩn SEO cao cấp, Hệ thống phần mềm quản trị ERP, CRM, Ứng dụng di động (Mobile App) và giải pháp chuyển đổi số toàn diện cho doanh nghiệp.",
  keywords: "thiết kế website, công ty phần mềm, phát triển app mobile, giải pháp ERP, thiết kế web doanh nghiệp, T&T Digital",
  authors: [{ name: "T&T Digital" }],
  openGraph: {
    title: "T&T Digital - Kiến Tạo Giải Pháp Số, Nâng Tầm Doanh Nghiệp",
    description: "Thiết kế Website cao cấp & Giải pháp phần mềm chuyên sâu theo yêu cầu của doanh nghiệp.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={plusJakartaSans.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${plusJakartaSans.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
