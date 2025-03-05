import { blogBackendHost, localUrl } from './main.js';

// Fix sources that aren't hosted on the frontend.
export function fixSrcHost(tags) {
  tags.forEach(itm => {
    itm.src = itm.src.replace(localUrl, blogBackendHost);
  });
}
