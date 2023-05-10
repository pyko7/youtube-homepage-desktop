import { ForwardRefExoticComponent, ReactNode } from "react";

export enum DividerSizes {
  thin,
  medium,
  large,
}

export type Children = { children: ReactNode };

export interface NavMenuListItem {
  Icon: ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
}

export interface HandleScrollValue {
  scrollX: number;
  scrollEnd: boolean;
  handleClick: (scrollOffset: number) => void;
}

export interface Video {
  title: string;
  author: string;
  views: number;
  createdAt: number;
}
