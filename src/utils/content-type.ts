export enum ContentType {
    // JSON
    JSON = "application/json",

    // HTML
    HTML = "text/html",

    // Plain Text
    PLAIN_TEXT = "text/plain",

    // XML
    XML = "application/xml",
    TEXT_XML = "text/xml",

    // JavaScript
    JAVASCRIPT = "application/javascript",

    // CSS
    CSS = "text/css",

    // Images
    PNG = "image/png",
    JPEG = "image/jpeg",
    GIF = "image/gif",
    WEBP = "image/webp",
    SVG = "image/svg+xml",
    ICON = "image/x-icon",

    // Audio
    MP3 = "audio/mpeg",
    OGG_AUDIO = "audio/ogg",
    WAV = "audio/wav",

    // Video
    MP4 = "video/mp4",
    WEBM = "video/webm",
    OGG_VIDEO = "video/ogg",

    // Form Data
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    MULTIPART_FORM_DATA = "multipart/form-data",

    // Binary
    OCTET_STREAM = "application/octet-stream",

    // PDF
    PDF = "application/pdf",

    // CSV
    CSV = "text/csv",

    // YAML
    YAML = "application/x-yaml",

    // Markdown
    MARKDOWN = "text/markdown",
}
/*
Explicação:
JSON: Formato de dados estruturados.
HTML/Plain Text: Para renderizar páginas ou respostas simples.
XML: Para sistemas que utilizam XML para troca de dados.
Imagens: Diferentes formatos de imagens (PNG, JPEG, etc.).
Áudio e Vídeo: Content types para mídia.
Form Data: Necessário para envio de formulários.
Binários: Para arquivos genéricos.
PDF, CSV, YAML, Markdown: Outros formatos de arquivo comumente usados.
*/