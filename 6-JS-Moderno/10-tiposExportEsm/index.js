import { inline } from "./inline.js"
import DefaultInline from "./inline.js"
import ExportDefault, { group } from "./non-inline.js"

inline()
DefaultInline()

group()
ExportDefault()