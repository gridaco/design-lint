const DEFAULT_CHIP_NAMING_CONVENTION_PATTERNS = [
    "**/chips/**",
    "chips/**",
    "**/ico/**",
    "ico/**",
    "**/chip/**",
    "chip/**",
]
// chip content
// like text
const DEFAULT_CHIP_CONTENT_NAMING_CONVENTION_PATTERNS = [
    "slot:chip/content",
]
const DEFAULT_CHIP_LEADING_NAMING_CONVENTION_PATTERNS = [
    "slot:chip/leading",
    "slot:chip/lead",
    "slot:chip/l",
]
const DEFAULT_CHIP_REAR_NAMING_CONVENTION_PATTERNS = [
    "slot:chip/trailing",
    "slot:chip/rear",
    "slot:chip/r",
]

// chip Background
// Image and Color, ect
const DEFAULT_CHIP_BACKGROUND_NAMING_CONVENTION_PATTERNS = [
    "slot:chip/background",
    "slot:chip/bg",
    "slot:chip/BG",
    "slot:chip/Background",
]

export {
    DEFAULT_CHIP_CONTENT_NAMING_CONVENTION_PATTERNS,
    DEFAULT_CHIP_NAMING_CONVENTION_PATTERNS,
    DEFAULT_CHIP_BACKGROUND_NAMING_CONVENTION_PATTERNS,
    DEFAULT_CHIP_LEADING_NAMING_CONVENTION_PATTERNS,
    DEFAULT_CHIP_REAR_NAMING_CONVENTION_PATTERNS,
}