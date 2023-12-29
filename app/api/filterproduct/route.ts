import prisma from "@/app/prismadb";
import { FilterPayload } from "@/types/types";
import { NextResponse } from "next/server";
export const dynamic = "auto";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function POST(request: Request) {
  try {
    const { data } = await request.json() as { data: FilterPayload };
    const { categories, colors, size, price } = data;
    const whereClause: {
      category?: { in: string[] };
      size?: { in: string[] };
      color?: { in: string[] };
    } = {};
    if (categories && categories.length > 0) {
      whereClause.category = { in: categories };
    }

    if (size && size.length > 0) {
      whereClause.size = { in: size };
    }

    if (colors && colors.length > 0) {
      whereClause.color = { in: colors };
    }


    const filteredProducts = await prisma.product.findMany({
      where: whereClause,
    });

    if (!filteredProducts) {
      return NextResponse.json({ err: "No products found" });
    }

    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ err: "Internal server error" }, { status: 500 });
  }
}

