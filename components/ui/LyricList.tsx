import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import data from "@/api/lyrics.json";

type Lyric = {
  lyric: string;
  prev: string;
  next: string;
  multiplicity: number;
};

type Song = {
  [songTitle: string]: Lyric[];
};

type Album = {
  [albumTitle: string]: Song;
};

export default function LyricList({ searchTerm }) {
  const albums: Album = data;

  let usages = 0;
  let songSet = new Set();

  Object.entries(albums).forEach(([albumTitle, songs]) => {
    Object.entries(songs).forEach(([songTitle, lyrics]) => {
      lyrics.forEach((lyric) => {
        if (lyric.lyric.includes(searchTerm)) {
          usages++;
          songSet.add(songTitle);
        }
      });
    });
  });

  const songCount = songSet.size;

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
              .filter((lyric) => lyric.lyric.includes(searchTerm))
              .map((lyric, index) => (
                <>
                  <div className="py-3" key={index}>
                    <p>{lyric.prev}</p>
                    <p>{lyric.lyric}</p>
                    <p>{lyric.next}</p>
                    <br />
                    <p className="font-semibold">
                      {songTitle}, <span className="italic">{albumTitle}</span>
                    </p>
                  </div>
                  <Divider />
                </>
              )),
          ),
        )}
      </CardBody>
    </Card>
  );
}
