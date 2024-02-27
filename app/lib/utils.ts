import data from "@/api/lyrics.json";
import { Album } from "@/app/lib/definitions";

export function fetchLyrics() {
    let albums: Album = JSON.parse(JSON.stringify(data));

    Object.entries(albums).forEach(([albumTitle, songs]) => {
        Object.entries(songs).forEach(([songTitle, lyrics]) => {
            albums[albumTitle][songTitle] = lyrics.filter((lyric) => lyric.lyric !== "You might also like[Bridge]");
        });
    });

    return albums;
}

export function foundUsage(albums: Album, searchTerm: string) {
    let usages = 0;
    let songSet = new Set();
    const searchTerms = searchTerm.split(',').map(term => term.trim().toLowerCase());

    Object.entries(albums).forEach(([albumTitle, songs]) => {
        Object.entries(songs).forEach(([songTitle, lyrics]) => {
            lyrics.forEach((lyric) => {
                if (searchTerms.some(term => lyric.lyric.toLowerCase().includes(term))) {
                    usages++;
                    songSet.add(songTitle);
                }
            });
        });
    });

    const songCount = songSet.size;

    return { usages, songCount };
}