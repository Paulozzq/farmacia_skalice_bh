import { prisma } from '@/lib/prisma';

export async function GET({ params }: { params: { nroordenvta: string; codmedicamento: string } }) {
  const { nroordenvta, codmedicamento } = params;

  // Recuerda convertir los strings a números si tu BD usa Int
  const nroOrden = parseInt(nroordenvta, 10);
  const codMed = parseInt(codmedicamento, 10);

  const detalle = await prisma.detalleOrdenVta.findUnique({
    where: {
      NroOrdenVta_CodMedicamento: {
        NroOrdenVta: nroOrden,
        CodMedicamento: codMed,
      }
    }
  });

  if (!detalle) {
    return new Response(JSON.stringify({ error: 'Detalle no encontrado' }), { status: 404 });
  }

  return new Response(JSON.stringify(detalle), { status: 200 });
}
