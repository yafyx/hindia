"use client";
import React, { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "@/app/components/icons";
import { useDebouncedCallback } from "use-debounce";

export default function InputText({
  setSearchTerm,
}: {
  setSearchTerm: (value: string) => void;
}) {
  const debouncedSearchTerm = useDebouncedCallback((value: string) => {
    setSearchTerm(value);
  }, 300);

  return (
    <>
      <label>
        <Input
          label="Search"
          onChange={(e) => debouncedSearchTerm(e.target.value)}
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
          }
        />
      </label>
      {/* <Button
        type="submit"
        isIconOnly
        color="warning"
        variant="faded"
        aria-label="Take a photo"
      >
        <SearchIcon />
      </Button> */}
    </>
  );
}
