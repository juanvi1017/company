import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import esES from "antd/locale/es_ES";
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "7am",
  description: "Gestión de empresas, desarrollado por Ing. Juan Cáceres Miranda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ConfigProvider locale={esES}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
