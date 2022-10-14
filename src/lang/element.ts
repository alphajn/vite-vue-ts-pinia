import en from 'element-plus/lib/locale/lang/en';
import zhTw from 'element-plus/lib/locale/lang/zh-tw';
import ja from 'element-plus/lib/locale/lang/ja';
import ru from 'element-plus/lib/locale/lang/ru';
import zhMy from 'element-plus/lib/locale/lang/zh-cn';
import vi from 'element-plus/lib/locale/lang/vi';
import tr from 'element-plus/lib/locale/lang/tr';
import ptBr from 'element-plus/lib/locale/lang/pt-br';
import fr from 'element-plus/lib/locale/lang/fr';
import th from 'element-plus/lib/locale/lang/th';
import id from 'element-plus/lib/locale/lang/id';
import kk from 'element-plus/lib/locale/lang/kk';
import uk from 'element-plus/lib/locale/lang/uk';
import pt from 'element-plus/lib/locale/lang/pt';
import ar from 'element-plus/lib/locale/lang/ar';
import es from 'element-plus/lib/locale/lang/es';

export type LocaleMap = Record<string, {
    el: Record<string, any>,
    name: string
}>

export const localeMap: LocaleMap = {
    'en-US': en,
    'zh-TW': zhTw, // 繁体中文
    'ja-JP': ja,
    'ru-RU': ru, // 俄语
    // 'zh-CN', // 简体中文
    'zh-MY': zhMy, // 中文（马来西亚）
    // 'ko-KR', // 下架韩语
    'vi-VN': vi, // 越南语
    'tr-TR': tr, // 土耳其语
    'pt-BR': ptBr, // 巴西葡萄牙语
    'fr-FR': fr, // 法语
    'th-TH': th, // 泰语
    'id-ID': id, // 印尼语
    // 'fil-PH', // 菲律宾语
    // 'hi-IN', // 印地语
    'kk-KZ': kk, // 哈萨克斯坦语
    'uk-UA': uk, // 乌克兰语
    'pt-PT': pt, // 葡萄牙语
    'ar-SA': ar, // 阿拉伯语
    'es-ES': es, // 西班牙语
    'es-MX': es, // 墨西哥西班牙语
    'es-AR': es, // 阿根廷西班牙语
    'es-419': es, // 拉美西班牙语
};

/**
 * 获取element对应语言的语言包
 *
 * @param lang 语言
 * @returns element对应的多语言
 */
export const getCurrentLocale = (lang = 'en-US') => localeMap[lang] || localeMap['en-US'];
