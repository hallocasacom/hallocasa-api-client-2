/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Hallocasa API
 * Hallocasa API Documentation
 * OpenAPI spec version: v1
 */
import type { HcFilterTypeEntryFilterTypeNature } from "./hcFilterTypeEntryFilterTypeNature";
import type { HcFilterTypeEntryRangeFieldPresentation } from "./hcFilterTypeEntryRangeFieldPresentation";

export interface HcFilterTypeEntry {
  id?: number;
  name?: string;
  filterTypeNature?: HcFilterTypeEntryFilterTypeNature;
  useSlider?: boolean;
  onlyFrom?: boolean;
  onlyTo?: boolean;
  validateMin?: boolean;
  validateMax?: boolean;
  rangeFieldPresentation?: HcFilterTypeEntryRangeFieldPresentation;
  allowMultiple?: boolean;
  useSearch?: boolean;
  useSort?: boolean;
  useSelectAll?: boolean;
  useRemoteList?: boolean;
  useLinks?: boolean;
  useYesNoDropdown?: boolean;
  useCheckbox?: boolean;
  useRadio?: boolean;
  useText?: boolean;
  toggle?: boolean;
  sortSign?: boolean;
}
