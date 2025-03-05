import { blogBackendHost, localUrl } from './main.js';

/**
 * Fix sources that aren't hosted on the frontend.
 *
 * @function fixSrcHost
 * @access {public}
 * @param {Object[]} tags - Tags using the 'src' attribute.
 */
export function fixSrcHost(tags) {
  console.log(tags);
  tags.forEach(itm => {
    itm.src = itm.src.replace(localUrl, blogBackendHost);
  });
}
