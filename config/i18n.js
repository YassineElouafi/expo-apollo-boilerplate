export const fallback = "en";

export const supportedLocales = {
    en: {
        name: "English",
        translationFileLoader: () => require('@lang/en.json'),
    },
    ar: {
        name: "عربي",
        translationFileLoader: () => require('@lang/ar.json'),
    },
};

export const defaultNamespace = "common";

export const namespaces = [
    
];