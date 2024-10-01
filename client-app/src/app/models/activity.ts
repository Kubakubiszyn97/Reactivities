import { Profile } from "./profile";

export interface Activity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date | null;
    city: string;
    venue: string;
    hostUsername?: string;
    isCanecelled?: boolean;
    isGoing?: boolean;
    isHost?: boolean;
    host?: Profile;
    attendees?: Profile[]
}
