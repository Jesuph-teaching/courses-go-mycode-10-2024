import dbConnect from "@/lib/dbConnection";
import categoryModel from "@/models/category";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, type }: BaseCategoryI = await req.json();
  await dbConnect();
  const category = await categoryModel.create({ name, type });
  return new NextResponse(`category ${category.name} is created successfully`, {
    status: 201,
  });
}
