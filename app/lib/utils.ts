import data from "@/api/lyrics.json";
import { Album } from "@/app/lib/definitions";

export function fetchLyrics() {
    return data;
}

export function foundUsage(albums: Album, searchTerm: string) {
    let usages = 0;
    let songSet = new Set();
    const searchTerms = searchTerm.split(',').map(term => term.trim().toLowerCase());

    Object.entries(albums).forEach(([albumTitle, songs]) => {
        Object.entries(songs).forEach(([songTitle, lyrics]) => {
            lyrics.forEach((lyric) => {
                searchTerms.forEach((term) => {
                    if (lyric.lyric.toLowerCase().includes(term)) {
                        usages++;
                        songSet.add(songTitle);
                    }
                });
            });
        });
    });

    const songCount = songSet.size;

    return { usages, songCount };
}