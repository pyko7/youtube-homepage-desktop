import { NavMenuListItem } from "../types/types";
import {
  HomeIcon,
  PlayIcon,
  PlayCircleIcon,
  PlayPauseIcon,
  QueueListIcon,
  ClockIcon,
  FireIcon,
  MusicalNoteIcon,
  FilmIcon,
  SignalIcon,
  ComputerDesktopIcon,
  NewspaperIcon,
  TrophyIcon,
  LightBulbIcon,
  ShoppingBagIcon,
  PlusCircleIcon,
  Cog6ToothIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
  ChatBubbleLeftEllipsisIcon,
  ShieldCheckIcon,
  MoonIcon,
  LanguageIcon,
  ShieldExclamationIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const firstMenu: NavMenuListItem[] = [
  {
    Icon: HomeIcon,
    label: "Home",
  },
  {
    Icon: PlayIcon,
    label: "Shorts",
  },
  {
    Icon: PlayCircleIcon,
    label: "Subscriptions",
  },
];

const secondMenu: NavMenuListItem[] = [
  {
    Icon: QueueListIcon,
    label: "Library",
  },
  {
    Icon: ClockIcon,
    label: "History",
  },
];

const explorerMenu: NavMenuListItem[] = [
  {
    Icon: FireIcon,
    label: "Trending",
  },
  {
    Icon: MusicalNoteIcon,
    label: "Music",
  },
  {
    Icon: FilmIcon,
    label: "Movies & TV",
  },
  {
    Icon: SignalIcon,
    label: "Live",
  },
  {
    Icon: ComputerDesktopIcon,
    label: "Gaming",
  },
  {
    Icon: NewspaperIcon,
    label: "News",
  },
  {
    Icon: TrophyIcon,
    label: "Sports",
  },
  {
    Icon: LightBulbIcon,
    label: "Learning",
  },
  {
    Icon: ShoppingBagIcon,
    label: "Fashion",
  },
];

const channelsMenu: NavMenuListItem[] = [
  {
    Icon: PlusCircleIcon,
    label: "Channels",
  },
];

const youtubeContent: NavMenuListItem[] = [
  {
    Icon: PlayIcon,
    label: "Youtube Premium",
  },
  {
    Icon: PlayPauseIcon,
    label: "Youtube Music",
  },
  {
    Icon: PlayCircleIcon,
    label: "Youtube Kids",
  },
];

const settingsMenu: NavMenuListItem[] = [
  {
    Icon: Cog6ToothIcon,
    label: "Settings",
  },
  {
    Icon: FlagIcon,
    label: "Report history",
  },
  {
    Icon: QuestionMarkCircleIcon,
    label: "Help",
  },
];

const chipsMenu = [
  "All",
  "Live",
  "Trending",
  "Music",
  "Movies & TV",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Learning",
  "Fashion",
  "Cooking",
  "NBA",
  "Minimalism",
  "Marvel",
  "NBA Playoffs",
  "Knicks",
  "Running",
  "Marathon",
  "Drums",
  "Japan",
  "Naruto",
  "The Rock",
  "Fast and Furious",
  "Formula 1",
  "Lewis Hamilton",
];

const headerMenu: NavMenuListItem[] = [
  {
    Icon: ShieldCheckIcon,
    label: "Your data in youtube",
  },
  {
    Icon: MoonIcon,
    label: "Appearance: Dark",
  },
  {
    Icon: LanguageIcon,
    label: "Language: English",
  },
  {
    Icon: ShieldExclamationIcon,
    label: "Restricted Mode: Off",
  },
  {
    Icon: GlobeAltIcon,
    label: "Location: France",
  },
  {
    Icon: ComputerDesktopIcon,
    label: "Keyboard shortcuts",
  },
  {
    Icon: Cog6ToothIcon,
    label: "Settings",
  },
  {
    Icon: QuestionMarkCircleIcon,
    label: "Help",
  },
  {
    Icon: ChatBubbleLeftEllipsisIcon,
    label: "Send feedback",
  },
];

const actionMenu: NavMenuListItem[] = [
  {
    Icon: ClockIcon,
    label: "Save to Watch later",
  },
  {
    Icon: ShareIcon,
    label: "Share",
  },
];
const actionMenuShorts: NavMenuListItem[] = [
  {
    Icon: ShareIcon,
    label: "Share",
  },
  {
    Icon: ChatBubbleLeftEllipsisIcon,
    label: "Send feedback",
  },
];

export {
  firstMenu,
  secondMenu,
  explorerMenu,
  channelsMenu,
  youtubeContent,
  settingsMenu,
  chipsMenu,
  headerMenu,
  actionMenu,
  actionMenuShorts,
};
