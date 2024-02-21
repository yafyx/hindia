"use client";
import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import InputText from "@/components/ui/InputText ";
import LyricList from "@/components/ui/LyricList";
import FilterAlbum from "@/components/ui/FilterAlbum";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        hindia lyrics searcher
      </p>
      <div className="w-[800px]">
        <Card className="p-3">
          <CardBody className="gap-3">
            <InputText setSearchTerm={setSearchTerm} />
            <FilterAlbum />
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-center">
            <small className="text-default-500">
              Tip: you can use a * for wildcard search! Try mati*
            </small>
          </CardFooter>
        </Card>
        <LyricList searchTerm={searchTerm} />
      </div>
    </div>
  );
}
