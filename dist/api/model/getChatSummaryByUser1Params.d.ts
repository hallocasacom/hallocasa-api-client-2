/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Hallocasa API
 * Hallocasa API Documentation
 * OpenAPI spec version: v1
 */
import type { LocalDateTimeQueryString } from "./localDateTimeQueryString";
export type GetChatSummaryByUser1Params = {
    /**
     * Limit the number of chat summaries returned
     */
    limit?: number;
    /**
     * Only return chat summaries before this datetime (UTC timestamp)
     */
    before_datetime?: LocalDateTimeQueryString;
};
