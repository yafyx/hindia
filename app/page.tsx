"use client";
import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import InputText from "@/app/components/InputText";
import LyricList from "@/app/components/LyricList";
import FilterAlbum from "@/app/components/FilterAlbum";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAlbums, setSelectedAlbums] = useState<Set<string>>(
    new Set([]),
  );

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center bg-white px-4 bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-12 text-center text-4xl font-bold text-transparent sm:text-7xl"
      >
        hindia lyrics searcher
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl px-4 sm:px-0"
      >
        <Card className="shadow-lg transition-all hover:shadow-xl">
          <CardBody className="gap-5 p-6">
            <InputText setSearchTerm={setSearchTerm} />
            <FilterAlbum
              selectedAlbums={selectedAlbums}
              setSelectedAlbums={setSelectedAlbums}
            />
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-center p-4">
            <small className="text-center text-default-500">
              Tip: use * for wildcard search or comma for multiple search terms
            </small>
          </CardFooter>
        </Card>
        <LyricList searchTerm={searchTerm} selectedAlbums={selectedAlbums} />
      </motion.div>
    </div>
  );
}
