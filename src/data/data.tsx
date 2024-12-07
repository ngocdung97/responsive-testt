import {
  AppstoreFilled,
  FilterFilled,
  HomeFilled,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { DropdownItem } from "../components/DropDown";
import TimeLineIcon from "../components/icon/TimeLineIcon";

export const tabs = [
  {
    key: "home",
    title: "HOME",
    icon: <HomeFilled />,
  },
  {
    key: "timeline",
    title: "TIMELINE",
    icon: <TimeLineIcon />,
  },
  {
    key: "all-games",
    title: "ALL GAMES",
    icon: <AppstoreFilled />,
  },
  {
    key: "search",
    title: "Search",
    icon: <SearchOutlined />,
  },
  {
    key: "filter",
    title: "FILTER",
    icon: <FilterFilled />,
  },
];

export const categories = [
  { id: 1, name: "Music", color: "bg-blue-500" },
  { id: 2, name: "Table Games", color: "bg-green-500" },
];

export const games = [
  {
    id: 1,
    name: "Mahjong Ways",
    image: "/images/mahjong.png",
    thumbnail: "/images/mahjong-thumbnail.png",
    color: "#156507",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine game .................",
  },
  {
    id: 2,
    name: "Wild Bandito",
    image: "/images/wild-bandito.png",
    thumbnail: "/images/wild-bandito-thumbnail.png",
    color: "#CD5678",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
  },
  {
    id: 3,
    name: "Tree Of Fortune",
    image: "/images/tree.png",
    thumbnail: "/images/tree-thumbnail.png",
    color: "#C48F03",
    description:
      "4TECH™ has just launched their very first Mahjong inspired slot machine game .................",
  },
  {
    id: 4,
    name: "Wild Bandito 22222",
    image: "/images/wild-bandito.png",
    thumbnail: "/images/wild-bandito-thumbnail.png",
    color: "#156507",
    description:
      "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
  },
];

export const categorys = [
  {
    id: 1,
    name: "Music",
    icon: "/images/icon/music.svg",
    thumbnail: "/images/mahjong-thumbnail.png",
    rec: ["/images/game3.png", "/images/game2.png"],
    subRec: ["/images/game.png", "/images/mahjong-thumbnail.png"],
    mainRec: "/images/hiphoppanda.png",
    color: "#5C6EFF",
    description:
      "Music makes everything better, and these games will grove to it!",
  },
  {
    id: 2,
    name: "Table Games",
    icon: "/images/icon/card.svg",
    thumbnail: "/images/mahjong-thumbnail.png",
    rec: ["/images/game3.png", "/images/game2.png"],
    subRec: ["/images/game.png", "/images/mahjong-thumbnail.png"],
    mainRec: "/images/3dpoker.png",
    color: "#19796A",
    description: "The classic table games for the gentlemen and ladies.",
  },
  {
    id: 3,
    name: "Music",
    icon: "/images/icon/music.svg",
    image: "/images/mahjong.png",
    thumbnail: "/images/mahjong-thumbnail.png",
    rec: ["/images/game.png", "/images/game2.png"],
    subRec: ["/images/tree-thumbnail.png", "/images/mahjong-thumbnail.png"],
    mainRec: "/images/hiphoppanda.png",
    color: "#5C6EFF",
    description:
      "Music makes everything better, and these games will grove to it!",
  },
];

export const menuItems: DropdownItem[] = [
  {
    label: "First Menu Item",
    key: "1",
    icon: <UserOutlined />,
    danger: false,
    disabled: false,
  },
  {
    label: "Second Menu Item",
    key: "2",
    icon: <UserOutlined />,
    danger: false,
    disabled: false,
  },
  {
    label: "3rd Menu Item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
    disabled: false,
  },
  {
    label: "4th Menu Item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
