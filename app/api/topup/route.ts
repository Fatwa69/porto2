import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { amount }: { amount: string } = await req.json();

  // Convert amount to a number
  const amountNumber = parseFloat(amount);

  if (isNaN(amountNumber) || amountNumber <= 0) {
    return NextResponse.json({ message: "Invalid amount" }, { status: 400 });
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
      include: { balance: true },
    });

    if (!profile || !profile.balance) {
      return NextResponse.json(
        { message: "Profile or Balance not found" },
        { status: 404 }
      );
    }

    const newBalance = profile.balance.amount + amountNumber;

    await prisma.balance.update({
      where: { id: profile.balance.id },
      data: { amount: newBalance },
    });

    await prisma.transaction.create({
      data: {
        type: "Top-Up",
        amount: amountNumber,
        description: "Top-up to balance",
        profileId: profile.id,
      },
    });

    return NextResponse.json({ message: "Top-up successful", newBalance });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
