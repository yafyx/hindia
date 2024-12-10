"use client";
import React from "react";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { fetchLyrics, foundUsage } from "@/app/lib/utils";
import { Album } from "@/app/lib/definitions";
import { motion } from "framer-motion";

interface LyricMatch {
  lyric: string;
  prev: string;
  next: string;
  multiplicity: number;
}

interface LyricListProps {
  searchTerm: string;
  selectedAlbums: Set<string>;
}

export default function LyricList({
  searchTerm,
  selectedAlbums,
}: LyricListProps) {
  const albums: Album = fetchLyrics();
  const searchTerms = searchTerm.split(",").map((term) => term.trim());
  const { usages, songCount } = foundUsage(albums, searchTerm);

  if (!searchTerm) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="mt-6 max-h-[800px] overflow-auto p-3 shadow-lg transition-all hover:shadow-xl">
        <CardHeader className="flex gap-3 p-6">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-semibold tracking-tight"
            >
              Found {usages} usages in {songCount} songs
            </motion.p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="px-6">
          {Object.entries(albums)
            .filter(
              ([albumTitle]) =>
                selectedAlbums.size === 0 ||
                selectedAlbums.has(albumTitle.replaceAll(" ", "_")),
            )
            .map(([albumTitle, songs]) =>
              Object.entries(songs).map(([songTitle, lyrics]) =>
                lyrics
                  .filter((lyric) => {
                    return searchTerms.some((searchTerm) => {
                      const regex = new RegExp(`\\b${searchTerm}\\w*\\b`, "gi");
                      return lyric.lyric.toLowerCase().match(regex);
                    });
                  })
                  .map((lyric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="dark:hover:bg-gray-950-950 group rounded-lg p-4 transition-all hover:bg-gray-950">
                        <p className="text-gray-600 dark:text-gray-400">
                          {lyric.prev}
                        </p>
                        <p className="my-2 text-lg font-medium">
                          {lyric.lyric
                            .split(
                              new RegExp(
                                `(${searchTerms.join("|")}\\w*)`,
                                "gi",
                              ),
                            )
                            .map((part, i) =>
                              new RegExp(
                                `(${searchTerms.join("|")}\\w*)`,
                                "gi",
                              ).test(part) ? (
                                <span
                                  key={i}
                                  className="underline decoration-sky-500 decoration-2"
                                >
                                  {part}
                                </span>
                              ) : (
                                part
                              ),
                            )}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {lyric.next}
                        </p>
                        <p className="mt-3 font-semibold tracking-tight">
                          {songTitle},{" "}
                          <span className="italic text-gray-600 dark:text-gray-400">
                            {albumTitle}
                          </span>
                        </p>
                      </div>
                      <Divider className="my-2" />
                    </motion.div>
                  )),
              ),
            )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
