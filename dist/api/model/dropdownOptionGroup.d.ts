/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Hallocasa API
 * Hallocasa API Documentation
 * OpenAPI spec version: v1
 */
import type { DropdownOptionGroupTranslationManagement } from "./dropdownOptionGroupTranslationManagement";
import type { DropdownOption } from "./dropdownOption";
export interface DropdownOptionGroup {
    id?: number;
    name?: string;
    translationManagement?: DropdownOptionGroupTranslationManagement;
    dropdownOptionList?: DropdownOption[];
}
