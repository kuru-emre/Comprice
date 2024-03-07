'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { TabType, TabsType, FadeInDivType } from 'types';

export const Tabs = (props: TabsType) => {
  const [active, setActive] = useState<TabType>(props.tabs[0]);
  const [tabs, setTabs] = useState<TabType[]>(props.tabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...props.tabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          'no-visible-scrollbar relative flex w-full max-w-full flex-row items-center justify-start gap-4 overflow-auto px-4 [perspective:1000px] sm:overflow-visible',
          props.containerClass
        )}
      >
        {props.tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn('relative -top-7 rounded-md border bg-background px-8 py-2 shadow-md', props.tabClass)}
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: 'spring', bounce: 0.5, duration: 0.5 }}
                className={cn('absolute inset-0 m-1 rounded-md bg-muted', props.activeTabClass)}
              />
            )}

            <span className="relative block">{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv tabs={tabs} active={active} key={active.value} hovering={hovering} className={props.contentClass} />
    </>
  );
};

export const FadeInDiv = (props: FadeInDivType) => {
  const isActive = (tab: TabType) => {
    return tab.value === props.tabs[0].value;
  };

  return (
    <div className="relative h-full w-full">
      {props.tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: props.hovering ? idx * -40 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0
          }}
          className={cn('absolute left-0 top-0 h-full w-full', props.className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
