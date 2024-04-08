export type TabType = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export type TabsType = {
  tabs: TabType[];
  containerClass?: string;
  activeTabClass?: string;
  tabClass?: string;
  contentClass?: string;
};

export type FadeInDivType = {
  className?: string;
  key?: string;
  tabs: TabType[];
  active: TabType;
  hovering?: boolean;
};
