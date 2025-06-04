
import { NextResponse } from 'next/server';

const companies = [
    { id: "01", name: "Juan Caceres Miranda", status: "Activo" },
    { id: "02", name: "Empresa nombre ABC", status: "Activo" },
    { id: "03", name: "Empresa nombre ABC", status: "Activo" },
    { id: "04", name: "Jairo Cuesta", status: "Activo" },
    { id: "05", name: "Empresa nombre ABC", status: "Inactivo" },
    { id: "06", name: "Empresa nombre ABC", status: "Activo" },
    { id: "07", name: "7AM", status: "Activo" },
    { id: "08", name: "Empresa nombre ABC", status: "Activo" },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const nameFilter = searchParams.get('name')?.toLowerCase();

    const filtered = nameFilter
        ? companies.filter(c => c.name.toLowerCase().includes(nameFilter))
        : companies;

    return NextResponse.json(filtered);
}
