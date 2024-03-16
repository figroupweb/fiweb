import { Locale } from '@/config/i18n.config';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';

export default function Test({ params }: { params: { lang: Locale } }) {
  const { dictionary } = getDictionaryServerOnly(params.lang);
  return <>{dictionary.site.name}</>;
}
