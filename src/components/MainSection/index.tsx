import MainSectionClient from "./index.client";
import { cookies } from "next/headers";
import { titles } from "@/constants/titles";

export default async function MainSection() {
  const cookieStore = await cookies();
  const currentTitle = cookieStore.get("currentTitle")?.value ?? titles[0];

  return <MainSectionClient mainTitle={currentTitle} />;
}