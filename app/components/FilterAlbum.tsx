"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from "@nextui-org/react";
import React from "react";

const ALBUMS = [
  "Menari dengan Bayangan",
  "Lagipula Hidup akan Berakhir (Bagian I)",
  "Lagipula Hidup akan Berakhir (Bagian II)",
];

interface FilterAlbumProps {
  selectedAlbums: Set<string>;
  setSelectedAlbums: (value: Set<string>) => void;
}

export default function FilterAlbum({
  selectedAlbums,
  setSelectedAlbums,
}: FilterAlbumProps) {
  const selectedValue = React.useMemo(
    () => Array.from(selectedAlbums).join(", ").replaceAll("_", " "),
    [selectedAlbums],
  );

  const handleSelectionChange = (keys: Selection) => {
    if (keys === "all") return;
    setSelectedAlbums(keys as Set<string>);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          Filter by album: {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        selectionMode="multiple"
        selectedKeys={selectedAlbums}
        onSelectionChange={handleSelectionChange}
      >
        {ALBUMS.map((album) => (
          <DropdownItem key={album.replaceAll(" ", "_")}>{album}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
