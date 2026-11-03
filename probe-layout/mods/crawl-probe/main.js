// A one-line strip that says "probe". Clicking it posts a "probe" toast.
// Throwaway test of herdr.dev's Community crawler; it reaches no network,
// runs no programs and reads no files.

import { View, div } from "gpui-kit";
import { h_flex } from "gpui-base";
import { notify, theme } from "herdr";

export default class CrawlProbe extends View {
  init(_props, _cx) {
    this.clicks = 0;
  }

  render(cx) {
    const t = theme();
    return h_flex().id("root").size_full().px(10).gap(8).items_center()
      .bg(t.surface).text_size(12).text_color(t.muted)
      .hover((s) => s.bg(t.raised))
      .on_click((_e, cx) => {
        this.clicks += 1;
        notify({ title: "probe", body: `Crawl probe clicked ${this.clicks}×`, level: "info", timeout: 3000 });
        cx.notify();
      })
      .child(div().text_color(t.foreground).child("probe"))
      .child(div().child("click for a toast"));
  }
}
