import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Change the current tab title.
 * The suffix ' - Kasa' is automatically added.
 *
 * @param {string} newTitle - New tab title
 *
 * @example
 * 		tabTitle('New tab title here');
 */
export function tabTitle(newTitle) {
  if (!newTitle) return;
  document.title = `${newTitle} - Kasa`;
}

/**
 * Scroll to top of the page on route change
 * (From react router docs)
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
