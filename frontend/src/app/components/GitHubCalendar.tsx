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
      colorScheme="dark"
      theme={{
        dark: [
          '#161b22', // 0 contributions
          '#0e4429', // 1-3 contributions
          '#006d32', // 4-6 contributions
          '#26a641', // 7-9 contributions
          '#39d353'  // 10+ contributions
        ],
        light: [
          '#ebedf0', // 0 contributions
          '#9be9a8', // 1-3 contributions
          '#40c463', // 4-6 contributions
          '#30a14e', // 7-9 contributions
          '#216e39'  // 10+ contributions
        ]
      }}
    />
  );
} 