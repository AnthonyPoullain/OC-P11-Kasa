/**
 * Change the current tab title.
 * The suffix ' - Kasa' is automatically added.
 *
 * @param {string} newTitle - New tab title
 *
 * @example
 * 		tabTitle('New tab title here');
 */
export default function tabTitle(newTitle) {
  if (!newTitle) return;
  document.title = `${newTitle} - Kasa`;
}
