'use server'

import { cookies } from 'next/headers'
import { titles } from "@/constants/titles";

export async function updateTitle() {
  const cookieStore = await cookies();
  const currentTitle = cookieStore.get("currentTitle")?.value ?? null;

  const filteredTitles = titles.filter((title) => title !== currentTitle);
  const randomTitle = filteredTitles.length > 0
    ? filteredTitles[Math.floor(Math.random() * filteredTitles.length)]
    : currentTitle || titles[0];

  cookieStore.set("currentTitle", randomTitle);

  // console.log(randomTitle);
  return randomTitle;
}