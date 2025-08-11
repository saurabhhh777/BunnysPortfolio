'use client';

import GitHubCalendar from 'react-github-calendar';
import { useThemeStore } from '../../store/themeStore';

export default function GitHubCalendarWrapper() {
  const { isDark } = useThemeStore();

  return (
    <GitHubCalendar 
      username="saurabhhh777"
      fontSize={12}
      blockSize={12}
      blockMargin={4}
      hideColorLegend={false}
      hideMonthLabels={false}
      showWeekdayLabels={true}
      colorScheme={isDark ? "dark" : "light"}
      theme={{
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
      }}
    />
  );
} 