'use client';

import { track } from '@vercel/analytics';

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties);
};

// Custom hook for tracking portfolio interactions
export const useAnalytics = () => {
  const trackProjectClick = (projectName: string, projectType: string) => {
    track('project_click', { projectName, projectType });
  };

  const trackSocialClick = (platform: string) => {
    track('social_click', { platform });
  };

  const trackThemeToggle = (theme: 'light' | 'dark') => {
    track('theme_toggle', { theme });
  };

  const trackResumeDownload = () => {
    track('resume_download');
  };

  const trackContactClick = (method: string) => {
    track('contact_click', { method });
  };

  return {
    trackProjectClick,
    trackSocialClick,
    trackThemeToggle,
    trackResumeDownload,
    trackContactClick,
  };
}; 