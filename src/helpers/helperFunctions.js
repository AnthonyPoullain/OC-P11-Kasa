export default function tabTitle(newTitle) {
  if (!newTitle) return;
  document.title = `${newTitle} - Kasa`;
}
