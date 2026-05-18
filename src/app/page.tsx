import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "./[locale]/_dictionaries/config";

// Root → default locale. A proxy middleware could negotiate Accept-Language
// here later, but a static redirect keeps the build fully prerenderable.
export default function RootIndex() {
  redirect(`/${DEFAULT_LOCALE}`);
}
