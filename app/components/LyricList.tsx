import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { fetchLyrics, foundUsage } from "@/app/lib/utils";
import { Album } from "@/app/lib/definitions";

export default function LyricList({ searchTerm }: { searchTerm: string }) {
  const albums: Album = fetchLyrics();
  const searchTerms = searchTerm.split(',').map(term => term.trim());
  const { usages, songCount } = foundUsage(albums, searchTerm);

  if (!searchTerm) {
    return null;
  }

  return (
    <Card className="mt-4 max-h-[800px] max-w-[800px] p-3">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-medium">
            Found {usages} usages in {songCount} songs
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {Object.entries(albums).map(([albumTitle, songs]) =>
          Object.entries(songs).map(([songTitle, lyrics]) =>
            lyrics
              .filter((lyric) => {
                return searchTerms.some((searchTerm) => {
                  const regex = new RegExp(`\\b${searchTerm}\\w*\\b`, "gi");
                  return lyric.lyric.toLowerCase().match(regex);
                });
              })
              .map((lyric, index) => {
                const parts = lyric.lyric.split(new RegExp(`(${searchTerms.join('|')}\\w*)`, "gi"));
                return (
                  <>
                    <div className="py-3" key={index}>
                      <p>{lyric.prev}</p>
                      <p>
                        {parts.map((part, i) =>
                          new RegExp(`(${searchTerms.join('|')}\\w*)`, "gi").test(part) ? (
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
                      <p>{lyric.next}</p>
                      <br />
                      <p className="font-semibold">
                        {songTitle},{" "}
                        <span className="italic">{albumTitle}</span>
                      </p>
                    </div>
                    <Divider />
                  </>
                );
              }),
          ),
        )}
      </CardBody>
    </Card>
  );
}
