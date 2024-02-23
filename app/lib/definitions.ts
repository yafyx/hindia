export type Lyric = {
    lyric: string;
    prev: string;
    next: string;
    multiplicity: number;
};

export type Song = {
    [songTitle: string]: Lyric[];
};

export type Album = {
    [albumTitle: string]: Song;
};