import React, { Suspense } from "react";
import MainLayout from "@/components/templates/MainLayout";

const CompanyListTemplate = React.lazy(() => import("@/components/templates/CompanyListTemplate"));

export default function CompanyPage() {
  return (
    <MainLayout>
      <Suspense fallback={<div>Cargando...</div>}>
        <CompanyListTemplate />
      </Suspense>
    </MainLayout>
  );
}