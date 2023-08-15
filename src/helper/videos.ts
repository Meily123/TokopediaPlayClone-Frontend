// videos.ts

import {serverUrl} from "../shared/constants";

export interface Video {
    _id: string;
    thumbnailUrl: string;
    category: string;
    views: number;
    description: string;
    createdBy: string;
    videoUrl: string;
    products: string[];
    likes: number;
    is_liked: boolean;
}

export async function fetchVideos(): Promise<{data: Video[]}> {
    const response = await fetch(`http://${serverUrl}/videos`);
    if (!response.ok) {
        throw new Error('Failed to fetch videos');
    }
    return await response.json ();
}

export async function fetchVideoById(id: string | undefined): Promise<{ data: Video }> {
    const response = await fetch(`http://${serverUrl}/videos/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch videos');
    }
    return await response.json ();
}
