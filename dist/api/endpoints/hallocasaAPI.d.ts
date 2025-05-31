import type { DataTag, DefinedInitialDataOptions, DefinedUseQueryResult, QueryClient, QueryKey, UndefinedInitialDataOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { Alert, Attachment, AuthInfoDto, AutopilotUser, BaseFilterResult, Brokerage, ChangePublicationStatus2Body, ChatAllowance, ChatTicket, CheckoutSessionDto, Contract, Country, CountryPhonePrefix, Currency, CustomerSessionDto, ExchangeRateMap, FBPropertyDto, Favorite, FetchPublishedTestimonials1Params, FetchReceivedTestimonials1Params, Find1Params, FindArchivedGroupsByUser1Params, FindGroupsByUser1Params, FindInactiveGroupsByUser1Params, FindInvitedGroupsByUser1Params, FindPropertiesByUser1Params, FindProperty1Params, FindRequestedGroupsByUser1Params, FindTestimonialsByUser1Params, GeoPlace, GetAlertResult1200, GetAll1Params, GetByUserParams, GetByUserWithResult1Params, GetChatSummaryByUser1Params, GetConversation1Params, GetGeoLocationsByLatLng1Params, GetGroupMembers1Params, GetLanguages1200, GetLanguages1Params, GetPropertyFieldOptions1200, GetPropertyFiltersParams, GetRecentProperties1Params, Group, GroupInviteParams, GroupMember, Language, LocaleSet, LogEntry, Message, NewsletterSubscriberDto, Notification, NotifyUploadRequest, PasswordRecoveryRequest, PhoneCodeCheckResource, PhoneCodeRequestResource, PreviewProperty2Params, PreviewPropertyParams, Property, PropertyFilter, PropertyFilterCriteria, PropertyFilterResult, PropertyFilterSubmission, PropertyKey, PropertyLocation, PropertyProposal, PropertyType, Register1Params, RequestActivationLink1Body, RequestToken1Body, RetrieveChatUserStatus1200, RetrieveEndorsementsByUser1Params, Skill, SkillEndorsement, SkilledUser, StripeEvent, SubscribedUser, SubscriptionPlanFeatureDto, Testimonial, TestimonialFilterResult, TestimonialRequest, TextTranslation, TranslateText1Params, UpdateGroupMembershipStatus1Params, UploadKyeroPropertiesParams, User, UserChatsSummary, UserFilterRequest, UserFilterResult, UserListRequest, UserSkill, UserSubscriptionDto, UserType, WeeklyAlertRange, XmlUrl } from "../model";
/**
 * @summary Post a attachment request
 */
export declare const createAttachment1: (attachment: Attachment, signal?: AbortSignal) => Promise<Attachment>;
/**
 * @summary Get details to download a file
 */
export declare const retrieveAttachment1: (fileId: string, signal?: AbortSignal) => Promise<Attachment>;
export declare const getRetrieveAttachment1QueryKey: (fileId: string) => readonly [`/chat/attachments/${string}`];
export declare const getRetrieveAttachment1QueryOptions: <TData = Awaited<ReturnType<typeof retrieveAttachment1>>, TError = Attachment>(fileId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveAttachment1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveAttachment1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveAttachment1QueryResult = NonNullable<Awaited<ReturnType<typeof retrieveAttachment1>>>;
export type RetrieveAttachment1QueryError = Attachment;
export declare function useRetrieveAttachment1<TData = Awaited<ReturnType<typeof retrieveAttachment1>>, TError = Attachment>(fileId: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveAttachment1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveAttachment1>>, TError, Awaited<ReturnType<typeof retrieveAttachment1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveAttachment1<TData = Awaited<ReturnType<typeof retrieveAttachment1>>, TError = Attachment>(fileId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveAttachment1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveAttachment1>>, TError, Awaited<ReturnType<typeof retrieveAttachment1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveAttachment1<TData = Awaited<ReturnType<typeof retrieveAttachment1>>, TError = Attachment>(fileId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveAttachment1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Notify a new file has been loaded in S3
 */
export declare const updateAttachment1: (fileId: string, notifyUploadRequest: NotifyUploadRequest, signal?: AbortSignal) => Promise<unknown>;
/**
 * Retrieves the chat allowance settings between two users. User must be one of the involved parties.
 * @summary Get chat allowance for a user pair
 */
export declare const getChatAllowance1: (userPair: string, signal?: AbortSignal) => Promise<ChatAllowance>;
export declare const getGetChatAllowance1QueryKey: (userPair: string) => readonly [`/chat/allowance/${string}`];
export declare const getGetChatAllowance1QueryOptions: <TData = Awaited<ReturnType<typeof getChatAllowance1>>, TError = void>(userPair: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatAllowance1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getChatAllowance1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetChatAllowance1QueryResult = NonNullable<Awaited<ReturnType<typeof getChatAllowance1>>>;
export type GetChatAllowance1QueryError = void;
export declare function useGetChatAllowance1<TData = Awaited<ReturnType<typeof getChatAllowance1>>, TError = void>(userPair: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatAllowance1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getChatAllowance1>>, TError, Awaited<ReturnType<typeof getChatAllowance1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetChatAllowance1<TData = Awaited<ReturnType<typeof getChatAllowance1>>, TError = void>(userPair: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatAllowance1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getChatAllowance1>>, TError, Awaited<ReturnType<typeof getChatAllowance1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetChatAllowance1<TData = Awaited<ReturnType<typeof getChatAllowance1>>, TError = void>(userPair: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatAllowance1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Updates the chat allowance settings between two users
 * @summary Update chat allowance for a user pair
 */
export declare const updateChatAllowance1: (userPair: string, chatAllowance: ChatAllowance) => Promise<ChatAllowance>;
/**
 * Retrieves summaries of all chat conversations for a user
 * @summary Get the user chat summaries
 */
export declare const getChatSummaryByUser1: (userId: number, params?: GetChatSummaryByUser1Params, signal?: AbortSignal) => Promise<UserChatsSummary>;
export declare const getGetChatSummaryByUser1QueryKey: (userId: number, params?: GetChatSummaryByUser1Params) => readonly [`/chat/user_summary/${number}`, ...GetChatSummaryByUser1Params[]];
export declare const getGetChatSummaryByUser1QueryOptions: <TData = Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError = void>(userId: number, params?: GetChatSummaryByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetChatSummaryByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof getChatSummaryByUser1>>>;
export type GetChatSummaryByUser1QueryError = void;
export declare function useGetChatSummaryByUser1<TData = Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError = void>(userId: number, params: undefined | GetChatSummaryByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError, Awaited<ReturnType<typeof getChatSummaryByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetChatSummaryByUser1<TData = Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError = void>(userId: number, params?: GetChatSummaryByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError, Awaited<ReturnType<typeof getChatSummaryByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetChatSummaryByUser1<TData = Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError = void>(userId: number, params?: GetChatSummaryByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChatSummaryByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Creates and returns a chat ticket that can be used to establish a chat connection
 * @summary Retrieve a chat ticket for the authenticated user
 */
export declare const retrieveUserTicket1: (signal?: AbortSignal) => Promise<ChatTicket>;
export declare const getRetrieveUserTicket1QueryKey: () => readonly ["/chat/ticket"];
export declare const getRetrieveUserTicket1QueryOptions: <TData = Awaited<ReturnType<typeof retrieveUserTicket1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserTicket1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveUserTicket1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveUserTicket1QueryResult = NonNullable<Awaited<ReturnType<typeof retrieveUserTicket1>>>;
export type RetrieveUserTicket1QueryError = void;
export declare function useRetrieveUserTicket1<TData = Awaited<ReturnType<typeof retrieveUserTicket1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserTicket1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveUserTicket1>>, TError, Awaited<ReturnType<typeof retrieveUserTicket1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveUserTicket1<TData = Awaited<ReturnType<typeof retrieveUserTicket1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserTicket1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveUserTicket1>>, TError, Awaited<ReturnType<typeof retrieveUserTicket1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveUserTicket1<TData = Awaited<ReturnType<typeof retrieveUserTicket1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserTicket1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Get a user connections
 */
export declare const findUserConnections2: (userId: number, signal?: AbortSignal) => Promise<User[]>;
export declare const getFindUserConnections2QueryKey: (userId: number) => readonly [`/chat/users/${number}/connections`];
export declare const getFindUserConnections2QueryOptions: <TData = Awaited<ReturnType<typeof findUserConnections2>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections2>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findUserConnections2>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindUserConnections2QueryResult = NonNullable<Awaited<ReturnType<typeof findUserConnections2>>>;
export type FindUserConnections2QueryError = void;
export declare function useFindUserConnections2<TData = Awaited<ReturnType<typeof findUserConnections2>>, TError = void>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections2>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findUserConnections2>>, TError, Awaited<ReturnType<typeof findUserConnections2>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindUserConnections2<TData = Awaited<ReturnType<typeof findUserConnections2>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections2>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findUserConnections2>>, TError, Awaited<ReturnType<typeof findUserConnections2>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindUserConnections2<TData = Awaited<ReturnType<typeof findUserConnections2>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections2>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Get a user Contracts
 */
export declare const findUserContracts1: (signal?: AbortSignal) => Promise<Contract[]>;
export declare const getFindUserContracts1QueryKey: () => readonly ["/contract"];
export declare const getFindUserContracts1QueryOptions: <TData = Awaited<ReturnType<typeof findUserContracts1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserContracts1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findUserContracts1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindUserContracts1QueryResult = NonNullable<Awaited<ReturnType<typeof findUserContracts1>>>;
export type FindUserContracts1QueryError = void;
export declare function useFindUserContracts1<TData = Awaited<ReturnType<typeof findUserContracts1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserContracts1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findUserContracts1>>, TError, Awaited<ReturnType<typeof findUserContracts1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindUserContracts1<TData = Awaited<ReturnType<typeof findUserContracts1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserContracts1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findUserContracts1>>, TError, Awaited<ReturnType<typeof findUserContracts1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindUserContracts1<TData = Awaited<ReturnType<typeof findUserContracts1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserContracts1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Save a user Contract
 */
export declare const save2: (contract: Contract, signal?: AbortSignal) => Promise<Contract>;
/**
 * @summary Get a message by conversation
 */
export declare const getConversation1: (params?: GetConversation1Params, signal?: AbortSignal) => Promise<Message[]>;
export declare const getGetConversation1QueryKey: (params?: GetConversation1Params) => readonly ["/chat/messages", ...GetConversation1Params[]];
export declare const getGetConversation1QueryOptions: <TData = Awaited<ReturnType<typeof getConversation1>>, TError = void>(params?: GetConversation1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConversation1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConversation1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetConversation1QueryResult = NonNullable<Awaited<ReturnType<typeof getConversation1>>>;
export type GetConversation1QueryError = void;
export declare function useGetConversation1<TData = Awaited<ReturnType<typeof getConversation1>>, TError = void>(params: undefined | GetConversation1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConversation1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getConversation1>>, TError, Awaited<ReturnType<typeof getConversation1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetConversation1<TData = Awaited<ReturnType<typeof getConversation1>>, TError = void>(params?: GetConversation1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConversation1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getConversation1>>, TError, Awaited<ReturnType<typeof getConversation1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetConversation1<TData = Awaited<ReturnType<typeof getConversation1>>, TError = void>(params?: GetConversation1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConversation1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Post a message
 */
export declare const sendMessage1: (message: Message, signal?: AbortSignal) => Promise<Message>;
/**
 * Retrieves notifications for a specific user and notification type. Designed for autopilot integration.
 * @summary Get user notifications by type
 */
export declare const getByUserWithResult1: (type: "TO_BROKER__ALERT_CREATED" | "TO_USER__WEEKLY_PROPERTIES" | "TO_USER__WEEKLY_PAYED_SUBSCRIBERS" | "TO_USER__CUSTOMIZED_ALERT" | "TO_USER__WEEKLY_GROUP_PROPERTIES" | "TO_USER__NEWSLETTER_NEW_SUBSCRIBER" | "TO_USER__NEWSLETTER_CONFIRMATION" | "TO_USER__NEWSLETTER_LISTING", autopilotUser: AutopilotUser, params: GetByUserWithResult1Params, signal?: AbortSignal) => Promise<Notification>;
/**
 * @summary Retrieve a user chat
 */
export declare const retrieveChatUser1: (id: number, signal?: AbortSignal) => Promise<User>;
export declare const getRetrieveChatUser1QueryKey: (id: number) => readonly [`/chat/user/${number}`];
export declare const getRetrieveChatUser1QueryOptions: <TData = Awaited<ReturnType<typeof retrieveChatUser1>>, TError = void>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveChatUser1QueryResult = NonNullable<Awaited<ReturnType<typeof retrieveChatUser1>>>;
export type RetrieveChatUser1QueryError = void;
export declare function useRetrieveChatUser1<TData = Awaited<ReturnType<typeof retrieveChatUser1>>, TError = void>(id: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveChatUser1>>, TError, Awaited<ReturnType<typeof retrieveChatUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveChatUser1<TData = Awaited<ReturnType<typeof retrieveChatUser1>>, TError = void>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveChatUser1>>, TError, Awaited<ReturnType<typeof retrieveChatUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveChatUser1<TData = Awaited<ReturnType<typeof retrieveChatUser1>>, TError = void>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Retrieve a user chat status
 */
export declare const retrieveChatUserStatus1: (id: number, signal?: AbortSignal) => Promise<RetrieveChatUserStatus1200>;
export declare const getRetrieveChatUserStatus1QueryKey: (id: number) => readonly [`/chat/user/${number}/status`];
export declare const getRetrieveChatUserStatus1QueryOptions: <TData = Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError = void>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveChatUserStatus1QueryResult = NonNullable<Awaited<ReturnType<typeof retrieveChatUserStatus1>>>;
export type RetrieveChatUserStatus1QueryError = void;
export declare function useRetrieveChatUserStatus1<TData = Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError = void>(id: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError, Awaited<ReturnType<typeof retrieveChatUserStatus1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveChatUserStatus1<TData = Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError = void>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError, Awaited<ReturnType<typeof retrieveChatUserStatus1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveChatUserStatus1<TData = Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError = void>(id: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveChatUserStatus1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves a list of all available country phone prefixes with their details
 * @summary Returns all country-phone-prefixes list
 */
export declare const get2: (signal?: AbortSignal) => Promise<CountryPhonePrefix[]>;
export declare const getGet2QueryKey: () => readonly ["/country-phone-prefixes"];
export declare const getGet2QueryOptions: <TData = Awaited<ReturnType<typeof get2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof get2>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof get2>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type Get2QueryResult = NonNullable<Awaited<ReturnType<typeof get2>>>;
export type Get2QueryError = void;
export declare function useGet2<TData = Awaited<ReturnType<typeof get2>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof get2>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof get2>>, TError, Awaited<ReturnType<typeof get2>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGet2<TData = Awaited<ReturnType<typeof get2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof get2>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof get2>>, TError, Awaited<ReturnType<typeof get2>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGet2<TData = Awaited<ReturnType<typeof get2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof get2>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Method to find all the countries
 */
export declare const getAllCountries2: (signal?: AbortSignal) => Promise<Country[]>;
export declare const getGetAllCountries2QueryKey: () => readonly ["/countries"];
export declare const getGetAllCountries2QueryOptions: <TData = Awaited<ReturnType<typeof getAllCountries2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries2>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAllCountries2>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAllCountries2QueryResult = NonNullable<Awaited<ReturnType<typeof getAllCountries2>>>;
export type GetAllCountries2QueryError = void;
export declare function useGetAllCountries2<TData = Awaited<ReturnType<typeof getAllCountries2>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries2>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAllCountries2>>, TError, Awaited<ReturnType<typeof getAllCountries2>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllCountries2<TData = Awaited<ReturnType<typeof getAllCountries2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries2>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAllCountries2>>, TError, Awaited<ReturnType<typeof getAllCountries2>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllCountries2<TData = Awaited<ReturnType<typeof getAllCountries2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries2>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Method to find a country by the caller IP
 */
export declare const getCountryByIp1: (signal?: AbortSignal) => Promise<Country>;
export declare const getGetCountryByIp1QueryKey: () => readonly ["/countries/current"];
export declare const getGetCountryByIp1QueryOptions: <TData = Awaited<ReturnType<typeof getCountryByIp1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountryByIp1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCountryByIp1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetCountryByIp1QueryResult = NonNullable<Awaited<ReturnType<typeof getCountryByIp1>>>;
export type GetCountryByIp1QueryError = void;
export declare function useGetCountryByIp1<TData = Awaited<ReturnType<typeof getCountryByIp1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountryByIp1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getCountryByIp1>>, TError, Awaited<ReturnType<typeof getCountryByIp1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetCountryByIp1<TData = Awaited<ReturnType<typeof getCountryByIp1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountryByIp1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getCountryByIp1>>, TError, Awaited<ReturnType<typeof getCountryByIp1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetCountryByIp1<TData = Awaited<ReturnType<typeof getCountryByIp1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountryByIp1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Retrieves the list of all exchange available in application
 */
export declare const getCurrencies1: (signal?: AbortSignal) => Promise<Currency[]>;
export declare const getGetCurrencies1QueryKey: () => readonly ["/currencies"];
export declare const getGetCurrencies1QueryOptions: <TData = Awaited<ReturnType<typeof getCurrencies1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCurrencies1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCurrencies1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetCurrencies1QueryResult = NonNullable<Awaited<ReturnType<typeof getCurrencies1>>>;
export type GetCurrencies1QueryError = void;
export declare function useGetCurrencies1<TData = Awaited<ReturnType<typeof getCurrencies1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCurrencies1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getCurrencies1>>, TError, Awaited<ReturnType<typeof getCurrencies1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetCurrencies1<TData = Awaited<ReturnType<typeof getCurrencies1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCurrencies1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getCurrencies1>>, TError, Awaited<ReturnType<typeof getCurrencies1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetCurrencies1<TData = Awaited<ReturnType<typeof getCurrencies1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCurrencies1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Returns a map of currency exchange rates between different currencies
 * @summary Method to find all the exchange rates
 */
export declare const findExchangeRates1: (signal?: AbortSignal) => Promise<ExchangeRateMap>;
export declare const getFindExchangeRates1QueryKey: () => readonly ["/exchange-rates"];
export declare const getFindExchangeRates1QueryOptions: <TData = Awaited<ReturnType<typeof findExchangeRates1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findExchangeRates1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findExchangeRates1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindExchangeRates1QueryResult = NonNullable<Awaited<ReturnType<typeof findExchangeRates1>>>;
export type FindExchangeRates1QueryError = void;
export declare function useFindExchangeRates1<TData = Awaited<ReturnType<typeof findExchangeRates1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findExchangeRates1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findExchangeRates1>>, TError, Awaited<ReturnType<typeof findExchangeRates1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindExchangeRates1<TData = Awaited<ReturnType<typeof findExchangeRates1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findExchangeRates1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findExchangeRates1>>, TError, Awaited<ReturnType<typeof findExchangeRates1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindExchangeRates1<TData = Awaited<ReturnType<typeof findExchangeRates1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findExchangeRates1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves geolocation information based on various search criteria including coordinates, address text, or auto-complete suggestions
 * @summary Retrieves geolocation information
 */
export declare const getGeoLocationsByLatLng1: (params?: GetGeoLocationsByLatLng1Params, signal?: AbortSignal) => Promise<GeoPlace>;
export declare const getGetGeoLocationsByLatLng1QueryKey: (params?: GetGeoLocationsByLatLng1Params) => readonly ["/geo-locations", ...GetGeoLocationsByLatLng1Params[]];
export declare const getGetGeoLocationsByLatLng1QueryOptions: <TData = Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError = void>(params?: GetGeoLocationsByLatLng1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetGeoLocationsByLatLng1QueryResult = NonNullable<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>>;
export type GetGeoLocationsByLatLng1QueryError = void;
export declare function useGetGeoLocationsByLatLng1<TData = Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError = void>(params: undefined | GetGeoLocationsByLatLng1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError, Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetGeoLocationsByLatLng1<TData = Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError = void>(params?: GetGeoLocationsByLatLng1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError, Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetGeoLocationsByLatLng1<TData = Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError = void>(params?: GetGeoLocationsByLatLng1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGeoLocationsByLatLng1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Returns a list of all supported languages in the system
 * @summary Get all available languages
 */
export declare const getAllLanguages1: (signal?: AbortSignal) => Promise<Language[]>;
export declare const getGetAllLanguages1QueryKey: () => readonly ["/languages"];
export declare const getGetAllLanguages1QueryOptions: <TData = Awaited<ReturnType<typeof getAllLanguages1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllLanguages1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAllLanguages1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAllLanguages1QueryResult = NonNullable<Awaited<ReturnType<typeof getAllLanguages1>>>;
export type GetAllLanguages1QueryError = void;
export declare function useGetAllLanguages1<TData = Awaited<ReturnType<typeof getAllLanguages1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllLanguages1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAllLanguages1>>, TError, Awaited<ReturnType<typeof getAllLanguages1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllLanguages1<TData = Awaited<ReturnType<typeof getAllLanguages1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllLanguages1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAllLanguages1>>, TError, Awaited<ReturnType<typeof getAllLanguages1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllLanguages1<TData = Awaited<ReturnType<typeof getAllLanguages1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllLanguages1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Removes a locale entry identified by its pnemonic code along with all its translations
 * @summary Delete a locale entry with all translations related
 */
export declare const delete1: (pnemonic: string) => Promise<string>;
/**
 * Retrieves the complete list of available locales in the system
 * @summary Returns all language list locale entries
 */
export declare const find3: (signal?: AbortSignal) => Promise<LocaleSet[]>;
export declare const getFind3QueryKey: () => readonly ["/locales"];
export declare const getFind3QueryOptions: <TData = Awaited<ReturnType<typeof find3>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find3>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof find3>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type Find3QueryResult = NonNullable<Awaited<ReturnType<typeof find3>>>;
export type Find3QueryError = void;
export declare function useFind3<TData = Awaited<ReturnType<typeof find3>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof find3>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof find3>>, TError, Awaited<ReturnType<typeof find3>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFind3<TData = Awaited<ReturnType<typeof find3>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find3>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof find3>>, TError, Awaited<ReturnType<typeof find3>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFind3<TData = Awaited<ReturnType<typeof find3>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find3>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves the locale translations in the specified language
 * @summary Returns locale language list
 */
export declare const getLanguages1: (params?: GetLanguages1Params, signal?: AbortSignal) => Promise<GetLanguages1200>;
export declare const getGetLanguages1QueryKey: (params?: GetLanguages1Params) => readonly ["/locales/translations", ...GetLanguages1Params[]];
export declare const getGetLanguages1QueryOptions: <TData = Awaited<ReturnType<typeof getLanguages1>>, TError = void>(params?: GetLanguages1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLanguages1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLanguages1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetLanguages1QueryResult = NonNullable<Awaited<ReturnType<typeof getLanguages1>>>;
export type GetLanguages1QueryError = void;
export declare function useGetLanguages1<TData = Awaited<ReturnType<typeof getLanguages1>>, TError = void>(params: undefined | GetLanguages1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLanguages1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getLanguages1>>, TError, Awaited<ReturnType<typeof getLanguages1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetLanguages1<TData = Awaited<ReturnType<typeof getLanguages1>>, TError = void>(params?: GetLanguages1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLanguages1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getLanguages1>>, TError, Awaited<ReturnType<typeof getLanguages1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetLanguages1<TData = Awaited<ReturnType<typeof getLanguages1>>, TError = void>(params?: GetLanguages1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLanguages1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Translate the provided text to the specified target language
 * @summary Get text translation to a target language
 */
export declare const translateText1: (params?: TranslateText1Params, signal?: AbortSignal) => Promise<TextTranslation>;
export declare const getTranslateText1QueryKey: (params?: TranslateText1Params) => readonly ["/text-translations", ...TranslateText1Params[]];
export declare const getTranslateText1QueryOptions: <TData = Awaited<ReturnType<typeof translateText1>>, TError = void>(params?: TranslateText1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof translateText1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof translateText1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type TranslateText1QueryResult = NonNullable<Awaited<ReturnType<typeof translateText1>>>;
export type TranslateText1QueryError = void;
export declare function useTranslateText1<TData = Awaited<ReturnType<typeof translateText1>>, TError = void>(params: undefined | TranslateText1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof translateText1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof translateText1>>, TError, Awaited<ReturnType<typeof translateText1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useTranslateText1<TData = Awaited<ReturnType<typeof translateText1>>, TError = void>(params?: TranslateText1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof translateText1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof translateText1>>, TError, Awaited<ReturnType<typeof translateText1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useTranslateText1<TData = Awaited<ReturnType<typeof translateText1>>, TError = void>(params?: TranslateText1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof translateText1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Initiates the process to export all property data in Kyero format to S3 storage. Requires admin privileges.
 * @summary Manually trigger Kyero exports to S3
 */
export declare const triggerKyeroExport1: (signal?: AbortSignal) => Promise<string>;
/**
 * Generates and returns property data in XML format for a specific user and format type.
 * @summary Get property XML for specific user
 */
export declare const xml1: (userId: string, xmlFormat: string, signal?: AbortSignal) => Promise<unknown>;
export declare const getXml1QueryKey: (userId: string, xmlFormat: string) => readonly [`/property-bulk-download/${string}/${string}.xml`];
export declare const getXml1QueryOptions: <TData = Awaited<ReturnType<typeof xml1>>, TError = string>(userId: string, xmlFormat: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof xml1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof xml1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type Xml1QueryResult = NonNullable<Awaited<ReturnType<typeof xml1>>>;
export type Xml1QueryError = string;
export declare function useXml1<TData = Awaited<ReturnType<typeof xml1>>, TError = string>(userId: string, xmlFormat: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof xml1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof xml1>>, TError, Awaited<ReturnType<typeof xml1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useXml1<TData = Awaited<ReturnType<typeof xml1>>, TError = string>(userId: string, xmlFormat: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof xml1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof xml1>>, TError, Awaited<ReturnType<typeof xml1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useXml1<TData = Awaited<ReturnType<typeof xml1>>, TError = string>(userId: string, xmlFormat: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof xml1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Redirects to the XML file stored in S3 for a specific user and format. This endpoint is deprecated.
 * @deprecated
 * @summary Redirect to XML file (Deprecated)
 */
export declare const xmlRedirect1: (userId: string, xmlFormat: string, signal?: AbortSignal) => Promise<unknown>;
export declare const getXmlRedirect1QueryKey: (userId: string, xmlFormat: string) => readonly [`/property-bulk-download/${string}/${string}.xml.redirect`];
export declare const getXmlRedirect1QueryOptions: <TData = Awaited<ReturnType<typeof xmlRedirect1>>, TError = void | string>(userId: string, xmlFormat: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof xmlRedirect1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof xmlRedirect1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type XmlRedirect1QueryResult = NonNullable<Awaited<ReturnType<typeof xmlRedirect1>>>;
export type XmlRedirect1QueryError = void | string;
export declare function useXmlRedirect1<TData = Awaited<ReturnType<typeof xmlRedirect1>>, TError = void | string>(userId: string, xmlFormat: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof xmlRedirect1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof xmlRedirect1>>, TError, Awaited<ReturnType<typeof xmlRedirect1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useXmlRedirect1<TData = Awaited<ReturnType<typeof xmlRedirect1>>, TError = void | string>(userId: string, xmlFormat: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof xmlRedirect1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof xmlRedirect1>>, TError, Awaited<ReturnType<typeof xmlRedirect1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useXmlRedirect1<TData = Awaited<ReturnType<typeof xmlRedirect1>>, TError = void | string>(userId: string, xmlFormat: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof xmlRedirect1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Get the list of supported file formats for bulk upload
 * @summary Get available formats
 */
export declare const getFormats1: (signal?: AbortSignal) => Promise<string[]>;
export declare const getGetFormats1QueryKey: () => readonly ["/property-bulk-uploads/formats"];
export declare const getGetFormats1QueryOptions: <TData = Awaited<ReturnType<typeof getFormats1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFormats1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFormats1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetFormats1QueryResult = NonNullable<Awaited<ReturnType<typeof getFormats1>>>;
export type GetFormats1QueryError = unknown;
export declare function useGetFormats1<TData = Awaited<ReturnType<typeof getFormats1>>, TError = unknown>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFormats1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getFormats1>>, TError, Awaited<ReturnType<typeof getFormats1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetFormats1<TData = Awaited<ReturnType<typeof getFormats1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFormats1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getFormats1>>, TError, Awaited<ReturnType<typeof getFormats1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetFormats1<TData = Awaited<ReturnType<typeof getFormats1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFormats1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Upload properties using Kyero format with XML content in the request body
 * @summary Upload Kyero properties with XML in request body
 */
export declare const uploadKyeroProperties2: (uploadKyeroProperties2Body: string, signal?: AbortSignal) => Promise<unknown>;
/**
 * Upload properties in Kyero format by providing a URL to an XML file
 * @summary Upload Kyero properties from URL
 */
export declare const uploadKyeroPropertiesFromUrl1: (xmlUrl: XmlUrl, signal?: AbortSignal) => Promise<unknown>;
/**
 * Upload properties with XML content in the request body using the specified format
 * @summary Upload properties in specified format with XML in request body
 */
export declare const uploadProperties1: (format: "kyero" | "wasico" | "xml2u" | "hallocasa", uploadProperties1Body: string, signal?: AbortSignal) => Promise<unknown>;
/**
 * Upload properties in the specified format by providing a URL to an XML file
 * @summary Upload properties in specified format from URL
 */
export declare const uploadPropertiesFromUrl1: (format: "kyero" | "wasico" | "xml2u" | "hallocasa", xmlUrl: XmlUrl, signal?: AbortSignal) => Promise<unknown>;
/**
 * Exports property data to Facebook Marketplace format within the specified date range
 * @summary Export properties to Facebook Marketplace
 */
export declare const uploadKyeroProperties: (params: UploadKyeroPropertiesParams, signal?: AbortSignal) => Promise<FBPropertyDto[]>;
export declare const getUploadKyeroPropertiesQueryKey: (params: UploadKyeroPropertiesParams) => readonly ["/facebook-properties", ...UploadKyeroPropertiesParams[]];
export declare const getUploadKyeroPropertiesQueryOptions: <TData = Awaited<ReturnType<typeof uploadKyeroProperties>>, TError = unknown>(params: UploadKyeroPropertiesParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof uploadKyeroProperties>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof uploadKyeroProperties>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type UploadKyeroPropertiesQueryResult = NonNullable<Awaited<ReturnType<typeof uploadKyeroProperties>>>;
export type UploadKyeroPropertiesQueryError = unknown;
export declare function useUploadKyeroProperties<TData = Awaited<ReturnType<typeof uploadKyeroProperties>>, TError = unknown>(params: UploadKyeroPropertiesParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof uploadKyeroProperties>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof uploadKyeroProperties>>, TError, Awaited<ReturnType<typeof uploadKyeroProperties>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useUploadKyeroProperties<TData = Awaited<ReturnType<typeof uploadKyeroProperties>>, TError = unknown>(params: UploadKyeroPropertiesParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof uploadKyeroProperties>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof uploadKyeroProperties>>, TError, Awaited<ReturnType<typeof uploadKyeroProperties>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useUploadKyeroProperties<TData = Awaited<ReturnType<typeof uploadKyeroProperties>>, TError = unknown>(params: UploadKyeroPropertiesParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof uploadKyeroProperties>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * For Group Owners, this list will return removed, left, invited and requested members as well
 * @summary Show all members of Group
 */
export declare const getGroupMembers1: (groupId: string, params?: GetGroupMembers1Params, signal?: AbortSignal) => Promise<BaseFilterResult>;
export declare const getGetGroupMembers1QueryKey: (groupId: string, params?: GetGroupMembers1Params) => readonly [`/groups/${string}/members`, ...GetGroupMembers1Params[]];
export declare const getGetGroupMembers1QueryOptions: <TData = Awaited<ReturnType<typeof getGroupMembers1>>, TError = void>(groupId: string, params?: GetGroupMembers1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGroupMembers1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGroupMembers1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetGroupMembers1QueryResult = NonNullable<Awaited<ReturnType<typeof getGroupMembers1>>>;
export type GetGroupMembers1QueryError = void;
export declare function useGetGroupMembers1<TData = Awaited<ReturnType<typeof getGroupMembers1>>, TError = void>(groupId: string, params: undefined | GetGroupMembers1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGroupMembers1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getGroupMembers1>>, TError, Awaited<ReturnType<typeof getGroupMembers1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetGroupMembers1<TData = Awaited<ReturnType<typeof getGroupMembers1>>, TError = void>(groupId: string, params?: GetGroupMembers1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGroupMembers1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getGroupMembers1>>, TError, Awaited<ReturnType<typeof getGroupMembers1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetGroupMembers1<TData = Awaited<ReturnType<typeof getGroupMembers1>>, TError = void>(groupId: string, params?: GetGroupMembers1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGroupMembers1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Accept Group Invitation
 */
export declare const groupInvite2: (groupId: string, signal?: AbortSignal) => Promise<GroupMember>;
/**
 * @summary Request Invitation to Group
 */
export declare const groupInvite: (groupId: string, params?: GroupInviteParams, signal?: AbortSignal) => Promise<GroupMember[]>;
/**
 * @summary Leave Group
 */
export declare const groupLeave1: (groupId: string, signal?: AbortSignal) => Promise<GroupMember>;
/**
 * @summary Request Admission to Group
 */
export declare const groupRequest1: (groupId: string, signal?: AbortSignal) => Promise<GroupMember>;
/**
 * Acceptable Status values are:  ACCEPTED, REJECTED, REMOVED
 * @summary Update the group member status from groupId supplied
 */
export declare const updateGroupMembershipStatus1: (groupId: string, params?: UpdateGroupMembershipStatus1Params, signal?: AbortSignal) => Promise<GroupMember[]>;
/**
 * This process is reversible
 * @summary Archive the group with id supplied
 */
export declare const archiveGroup1: (id: string, signal?: AbortSignal) => Promise<string>;
/**
 * This process is reversible
 * @summary Deactivate the group with id supplied
 */
export declare const deactivateGroup1: (id: string, signal?: AbortSignal) => Promise<string>;
/**
 * This process is not reversible
 * @summary Delete the group with id supplied
 */
export declare const deleteGroup1: (id: string) => Promise<unknown>;
/**
 * @summary Return the groups list with specified user id that user has archived
 */
export declare const findArchivedGroupsByUser1: (params?: FindArchivedGroupsByUser1Params, signal?: AbortSignal) => Promise<BaseFilterResult>;
export declare const getFindArchivedGroupsByUser1QueryKey: (params?: FindArchivedGroupsByUser1Params) => readonly ["/groups/archived", ...FindArchivedGroupsByUser1Params[]];
export declare const getFindArchivedGroupsByUser1QueryOptions: <TData = Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError = void>(params?: FindArchivedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindArchivedGroupsByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>>;
export type FindArchivedGroupsByUser1QueryError = void;
export declare function useFindArchivedGroupsByUser1<TData = Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError = void>(params: undefined | FindArchivedGroupsByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError, Awaited<ReturnType<typeof findArchivedGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindArchivedGroupsByUser1<TData = Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError = void>(params?: FindArchivedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError, Awaited<ReturnType<typeof findArchivedGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindArchivedGroupsByUser1<TData = Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError = void>(params?: FindArchivedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findArchivedGroupsByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
 * @summary Return the group with specified id
 */
export declare const findGroup1: (groupId: string, signal?: AbortSignal) => Promise<Group>;
export declare const getFindGroup1QueryKey: (groupId: string) => readonly [`/groups/${string}`];
export declare const getFindGroup1QueryOptions: <TData = Awaited<ReturnType<typeof findGroup1>>, TError = void>(groupId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroup1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findGroup1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindGroup1QueryResult = NonNullable<Awaited<ReturnType<typeof findGroup1>>>;
export type FindGroup1QueryError = void;
export declare function useFindGroup1<TData = Awaited<ReturnType<typeof findGroup1>>, TError = void>(groupId: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroup1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findGroup1>>, TError, Awaited<ReturnType<typeof findGroup1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindGroup1<TData = Awaited<ReturnType<typeof findGroup1>>, TError = void>(groupId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroup1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findGroup1>>, TError, Awaited<ReturnType<typeof findGroup1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindGroup1<TData = Awaited<ReturnType<typeof findGroup1>>, TError = void>(groupId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroup1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
 * @summary Return the group with specified id
 */
export declare const findGroupProperties1: (groupId: string, signal?: AbortSignal) => Promise<Property[]>;
export declare const getFindGroupProperties1QueryKey: (groupId: string) => readonly [`/groups/${string}/properties`];
export declare const getFindGroupProperties1QueryOptions: <TData = Awaited<ReturnType<typeof findGroupProperties1>>, TError = void>(groupId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupProperties1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findGroupProperties1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindGroupProperties1QueryResult = NonNullable<Awaited<ReturnType<typeof findGroupProperties1>>>;
export type FindGroupProperties1QueryError = void;
export declare function useFindGroupProperties1<TData = Awaited<ReturnType<typeof findGroupProperties1>>, TError = void>(groupId: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupProperties1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findGroupProperties1>>, TError, Awaited<ReturnType<typeof findGroupProperties1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindGroupProperties1<TData = Awaited<ReturnType<typeof findGroupProperties1>>, TError = void>(groupId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupProperties1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findGroupProperties1>>, TError, Awaited<ReturnType<typeof findGroupProperties1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindGroupProperties1<TData = Awaited<ReturnType<typeof findGroupProperties1>>, TError = void>(groupId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupProperties1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
 * @summary Return the group with specified id
 */
export declare const findGroupPropertiesSearch1: (groupId: string, propertyFilterCriteria: PropertyFilterCriteria, signal?: AbortSignal) => Promise<BaseFilterResult>;
/**
 * This will return both owned Groups and Groups the user is a member of
 * @summary Return the groups list with specified user id
 */
export declare const findGroupsByUser1: (params?: FindGroupsByUser1Params, signal?: AbortSignal) => Promise<BaseFilterResult>;
export declare const getFindGroupsByUser1QueryKey: (params?: FindGroupsByUser1Params) => readonly ["/groups", ...FindGroupsByUser1Params[]];
export declare const getFindGroupsByUser1QueryOptions: <TData = Awaited<ReturnType<typeof findGroupsByUser1>>, TError = void>(params?: FindGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupsByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findGroupsByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindGroupsByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof findGroupsByUser1>>>;
export type FindGroupsByUser1QueryError = void;
export declare function useFindGroupsByUser1<TData = Awaited<ReturnType<typeof findGroupsByUser1>>, TError = void>(params: undefined | FindGroupsByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupsByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findGroupsByUser1>>, TError, Awaited<ReturnType<typeof findGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindGroupsByUser1<TData = Awaited<ReturnType<typeof findGroupsByUser1>>, TError = void>(params?: FindGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupsByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findGroupsByUser1>>, TError, Awaited<ReturnType<typeof findGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindGroupsByUser1<TData = Awaited<ReturnType<typeof findGroupsByUser1>>, TError = void>(params?: FindGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findGroupsByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Consider that only user can saveNew its groups
 * @summary Create or update the group supplied
 */
export declare const saveGroup1: (group: Group, signal?: AbortSignal) => Promise<Group>;
/**
 * @summary Return the groups list with specified user id that are inactive
 */
export declare const findInactiveGroupsByUser1: (params?: FindInactiveGroupsByUser1Params, signal?: AbortSignal) => Promise<BaseFilterResult>;
export declare const getFindInactiveGroupsByUser1QueryKey: (params?: FindInactiveGroupsByUser1Params) => readonly ["/groups/inactive", ...FindInactiveGroupsByUser1Params[]];
export declare const getFindInactiveGroupsByUser1QueryOptions: <TData = Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError = void>(params?: FindInactiveGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindInactiveGroupsByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>>;
export type FindInactiveGroupsByUser1QueryError = void;
export declare function useFindInactiveGroupsByUser1<TData = Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError = void>(params: undefined | FindInactiveGroupsByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError, Awaited<ReturnType<typeof findInactiveGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindInactiveGroupsByUser1<TData = Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError = void>(params?: FindInactiveGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError, Awaited<ReturnType<typeof findInactiveGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindInactiveGroupsByUser1<TData = Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError = void>(params?: FindInactiveGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInactiveGroupsByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Return the groups list with specified user id that user has invitations of
 */
export declare const findInvitedGroupsByUser1: (params?: FindInvitedGroupsByUser1Params, signal?: AbortSignal) => Promise<BaseFilterResult>;
export declare const getFindInvitedGroupsByUser1QueryKey: (params?: FindInvitedGroupsByUser1Params) => readonly ["/groups/invited", ...FindInvitedGroupsByUser1Params[]];
export declare const getFindInvitedGroupsByUser1QueryOptions: <TData = Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError = void>(params?: FindInvitedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindInvitedGroupsByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>>;
export type FindInvitedGroupsByUser1QueryError = void;
export declare function useFindInvitedGroupsByUser1<TData = Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError = void>(params: undefined | FindInvitedGroupsByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError, Awaited<ReturnType<typeof findInvitedGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindInvitedGroupsByUser1<TData = Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError = void>(params?: FindInvitedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError, Awaited<ReturnType<typeof findInvitedGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindInvitedGroupsByUser1<TData = Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError = void>(params?: FindInvitedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findInvitedGroupsByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Return the groups list with specified user id that user has requested
 */
export declare const findRequestedGroupsByUser1: (params?: FindRequestedGroupsByUser1Params, signal?: AbortSignal) => Promise<BaseFilterResult>;
export declare const getFindRequestedGroupsByUser1QueryKey: (params?: FindRequestedGroupsByUser1Params) => readonly ["/groups/requested", ...FindRequestedGroupsByUser1Params[]];
export declare const getFindRequestedGroupsByUser1QueryOptions: <TData = Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError = void>(params?: FindRequestedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindRequestedGroupsByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>>;
export type FindRequestedGroupsByUser1QueryError = void;
export declare function useFindRequestedGroupsByUser1<TData = Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError = void>(params: undefined | FindRequestedGroupsByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError, Awaited<ReturnType<typeof findRequestedGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindRequestedGroupsByUser1<TData = Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError = void>(params?: FindRequestedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError, Awaited<ReturnType<typeof findRequestedGroupsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindRequestedGroupsByUser1<TData = Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError = void>(params?: FindRequestedGroupsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findRequestedGroupsByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves the list of property fields that will be showed when selecting the type, proposal, location, and country specified. All the property keys are required, otherwise system generate a bad request, because without all the parameters, it is not posible filter the property fields
 * @summary Retrieves property fields filtered by key
 */
export declare const getPropertyFilters2: (propertyKey: PropertyKey, signal?: AbortSignal) => Promise<unknown>;
/**
 * Retrieves options for a specific property filter based on submitted filters
 * @summary Get property field options
 */
export declare const getPropertyFieldOptions1: (filterId: number, propertyFilterSubmission: PropertyFilterSubmission[], signal?: AbortSignal) => Promise<GetPropertyFieldOptions1200>;
/**
 * Retrieves a list of property filters, optionally filtered by filter nature IDs
 * @summary Get property filters
 */
export declare const getPropertyFilters: (params?: GetPropertyFiltersParams, signal?: AbortSignal) => Promise<PropertyFilter[]>;
export declare const getGetPropertyFiltersQueryKey: (params?: GetPropertyFiltersParams) => readonly ["/property_filters", ...GetPropertyFiltersParams[]];
export declare const getGetPropertyFiltersQueryOptions: <TData = Awaited<ReturnType<typeof getPropertyFilters>>, TError = unknown>(params?: GetPropertyFiltersParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPropertyFilters>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPropertyFilters>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetPropertyFiltersQueryResult = NonNullable<Awaited<ReturnType<typeof getPropertyFilters>>>;
export type GetPropertyFiltersQueryError = unknown;
export declare function useGetPropertyFilters<TData = Awaited<ReturnType<typeof getPropertyFilters>>, TError = unknown>(params: undefined | GetPropertyFiltersParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPropertyFilters>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getPropertyFilters>>, TError, Awaited<ReturnType<typeof getPropertyFilters>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPropertyFilters<TData = Awaited<ReturnType<typeof getPropertyFilters>>, TError = unknown>(params?: GetPropertyFiltersParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPropertyFilters>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getPropertyFilters>>, TError, Awaited<ReturnType<typeof getPropertyFilters>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetPropertyFilters<TData = Awaited<ReturnType<typeof getPropertyFilters>>, TError = unknown>(params?: GetPropertyFiltersParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPropertyFilters>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves a list of all available property locations
 * @summary Method to find all the property locations
 */
export declare const getAllCountries: (signal?: AbortSignal) => Promise<PropertyLocation[]>;
export declare const getGetAllCountriesQueryKey: () => readonly ["/property-locations"];
export declare const getGetAllCountriesQueryOptions: <TData = Awaited<ReturnType<typeof getAllCountries>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAllCountries>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAllCountriesQueryResult = NonNullable<Awaited<ReturnType<typeof getAllCountries>>>;
export type GetAllCountriesQueryError = void;
export declare function useGetAllCountries<TData = Awaited<ReturnType<typeof getAllCountries>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAllCountries>>, TError, Awaited<ReturnType<typeof getAllCountries>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllCountries<TData = Awaited<ReturnType<typeof getAllCountries>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAllCountries>>, TError, Awaited<ReturnType<typeof getAllCountries>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllCountries<TData = Awaited<ReturnType<typeof getAllCountries>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllCountries>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Method to find all the property proposals
 */
export declare const getAllPropertyProposals1: (signal?: AbortSignal) => Promise<PropertyProposal[]>;
export declare const getGetAllPropertyProposals1QueryKey: () => readonly ["/property-proposals"];
export declare const getGetAllPropertyProposals1QueryOptions: <TData = Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAllPropertyProposals1QueryResult = NonNullable<Awaited<ReturnType<typeof getAllPropertyProposals1>>>;
export type GetAllPropertyProposals1QueryError = void;
export declare function useGetAllPropertyProposals1<TData = Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError, Awaited<ReturnType<typeof getAllPropertyProposals1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllPropertyProposals1<TData = Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError, Awaited<ReturnType<typeof getAllPropertyProposals1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllPropertyProposals1<TData = Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyProposals1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Publication state update
 */
export declare const changePublicationStatus2: (propertyId: string, changePublicationStatus2Body: ChangePublicationStatus2Body, signal?: AbortSignal) => Promise<Property>;
/**
 * This process is not reversible
 * @summary Delete the property with id supplied
 */
export declare const deleteProperty1: (id: string) => Promise<string>;
/**
 * Returns a randomized list of properties with the specified count limit
 * @summary Fetch random list of properties, with basic data
 */
export declare const fetchRandomProperties2: (signal?: AbortSignal) => Promise<Property[]>;
export declare const getFetchRandomProperties2QueryKey: () => readonly ["/properties/fetch-random"];
export declare const getFetchRandomProperties2QueryOptions: <TData = Awaited<ReturnType<typeof fetchRandomProperties2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties2>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties2>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FetchRandomProperties2QueryResult = NonNullable<Awaited<ReturnType<typeof fetchRandomProperties2>>>;
export type FetchRandomProperties2QueryError = void;
export declare function useFetchRandomProperties2<TData = Awaited<ReturnType<typeof fetchRandomProperties2>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties2>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof fetchRandomProperties2>>, TError, Awaited<ReturnType<typeof fetchRandomProperties2>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchRandomProperties2<TData = Awaited<ReturnType<typeof fetchRandomProperties2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties2>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof fetchRandomProperties2>>, TError, Awaited<ReturnType<typeof fetchRandomProperties2>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchRandomProperties2<TData = Awaited<ReturnType<typeof fetchRandomProperties2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties2>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Fetch random list of properties related to a given property
 */
export declare const fetchRandomProperties: (propertyId: string, signal?: AbortSignal) => Promise<Property[]>;
export declare const getFetchRandomPropertiesQueryKey: (propertyId: string) => readonly [`/properties/${string}/related-properties`];
export declare const getFetchRandomPropertiesQueryOptions: <TData = Awaited<ReturnType<typeof fetchRandomProperties>>, TError = void>(propertyId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FetchRandomPropertiesQueryResult = NonNullable<Awaited<ReturnType<typeof fetchRandomProperties>>>;
export type FetchRandomPropertiesQueryError = void;
export declare function useFetchRandomProperties<TData = Awaited<ReturnType<typeof fetchRandomProperties>>, TError = void>(propertyId: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof fetchRandomProperties>>, TError, Awaited<ReturnType<typeof fetchRandomProperties>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchRandomProperties<TData = Awaited<ReturnType<typeof fetchRandomProperties>>, TError = void>(propertyId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof fetchRandomProperties>>, TError, Awaited<ReturnType<typeof fetchRandomProperties>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchRandomProperties<TData = Awaited<ReturnType<typeof fetchRandomProperties>>, TError = void>(propertyId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchRandomProperties>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Search properties with specified filters
 */
export declare const findProperties1: (propertyFilterCriteria: PropertyFilterCriteria, signal?: AbortSignal) => Promise<Property[]>;
/**
 * @deprecated
 * @summary Return the property list with specified user id
 */
export declare const findPropertiesByLocationRange1: (range: string, signal?: AbortSignal) => Promise<unknown>;
export declare const getFindPropertiesByLocationRange1QueryKey: (range: string) => readonly [`/properties/by_location_range/${string}`];
export declare const getFindPropertiesByLocationRange1QueryOptions: <TData = Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError = void>(range: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindPropertiesByLocationRange1QueryResult = NonNullable<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>>;
export type FindPropertiesByLocationRange1QueryError = void;
export declare function useFindPropertiesByLocationRange1<TData = Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError = void>(range: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError, Awaited<ReturnType<typeof findPropertiesByLocationRange1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindPropertiesByLocationRange1<TData = Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError = void>(range: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError, Awaited<ReturnType<typeof findPropertiesByLocationRange1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindPropertiesByLocationRange1<TData = Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError = void>(range: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByLocationRange1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Filter the properties existing in system with specified id. Returns empty if none property match the id
 * @summary Return the property with specified id
 */
export declare const findProperty1: (propertyId: string, params?: FindProperty1Params, signal?: AbortSignal) => Promise<Property>;
export declare const getFindProperty1QueryKey: (propertyId: string, params?: FindProperty1Params) => readonly [`/properties/${string}`, ...FindProperty1Params[]];
export declare const getFindProperty1QueryOptions: <TData = Awaited<ReturnType<typeof findProperty1>>, TError = void>(propertyId: string, params?: FindProperty1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findProperty1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findProperty1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindProperty1QueryResult = NonNullable<Awaited<ReturnType<typeof findProperty1>>>;
export type FindProperty1QueryError = void;
export declare function useFindProperty1<TData = Awaited<ReturnType<typeof findProperty1>>, TError = void>(propertyId: string, params: undefined | FindProperty1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findProperty1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findProperty1>>, TError, Awaited<ReturnType<typeof findProperty1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindProperty1<TData = Awaited<ReturnType<typeof findProperty1>>, TError = void>(propertyId: string, params?: FindProperty1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findProperty1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findProperty1>>, TError, Awaited<ReturnType<typeof findProperty1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindProperty1<TData = Awaited<ReturnType<typeof findProperty1>>, TError = void>(propertyId: string, params?: FindProperty1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findProperty1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Filter the properties existing in system with specified id. Returns empty if none property match the id
 * @summary Return the property with specified id
 */
export declare const findPropertyOldUrl1: (id: string, signal?: AbortSignal) => Promise<unknown>;
export declare const getFindPropertyOldUrl1QueryKey: (id: string) => readonly [`/properties/detail/${string}`];
export declare const getFindPropertyOldUrl1QueryOptions: <TData = Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError = void>(id: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindPropertyOldUrl1QueryResult = NonNullable<Awaited<ReturnType<typeof findPropertyOldUrl1>>>;
export type FindPropertyOldUrl1QueryError = void;
export declare function useFindPropertyOldUrl1<TData = Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError = void>(id: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError, Awaited<ReturnType<typeof findPropertyOldUrl1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindPropertyOldUrl1<TData = Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError = void>(id: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError, Awaited<ReturnType<typeof findPropertyOldUrl1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindPropertyOldUrl1<TData = Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError = void>(id: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertyOldUrl1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Password Protected Property for Signed in User
 */
export declare const getDraftsProperties1: (signal?: AbortSignal) => Promise<Property[]>;
export declare const getGetDraftsProperties1QueryKey: () => readonly ["/properties/drafts"];
export declare const getGetDraftsProperties1QueryOptions: <TData = Awaited<ReturnType<typeof getDraftsProperties1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftsProperties1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDraftsProperties1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetDraftsProperties1QueryResult = NonNullable<Awaited<ReturnType<typeof getDraftsProperties1>>>;
export type GetDraftsProperties1QueryError = void;
export declare function useGetDraftsProperties1<TData = Awaited<ReturnType<typeof getDraftsProperties1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftsProperties1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getDraftsProperties1>>, TError, Awaited<ReturnType<typeof getDraftsProperties1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetDraftsProperties1<TData = Awaited<ReturnType<typeof getDraftsProperties1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftsProperties1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getDraftsProperties1>>, TError, Awaited<ReturnType<typeof getDraftsProperties1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetDraftsProperties1<TData = Awaited<ReturnType<typeof getDraftsProperties1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getDraftsProperties1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Get recently created properties within specified minutes (default 60)
 */
export declare const getRecentProperties1: (params?: GetRecentProperties1Params, signal?: AbortSignal) => Promise<Property[]>;
export declare const getGetRecentProperties1QueryKey: (params?: GetRecentProperties1Params) => readonly ["/properties/recent", ...GetRecentProperties1Params[]];
export declare const getGetRecentProperties1QueryOptions: <TData = Awaited<ReturnType<typeof getRecentProperties1>>, TError = void>(params?: GetRecentProperties1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentProperties1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRecentProperties1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetRecentProperties1QueryResult = NonNullable<Awaited<ReturnType<typeof getRecentProperties1>>>;
export type GetRecentProperties1QueryError = void;
export declare function useGetRecentProperties1<TData = Awaited<ReturnType<typeof getRecentProperties1>>, TError = void>(params: undefined | GetRecentProperties1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentProperties1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getRecentProperties1>>, TError, Awaited<ReturnType<typeof getRecentProperties1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetRecentProperties1<TData = Awaited<ReturnType<typeof getRecentProperties1>>, TError = void>(params?: GetRecentProperties1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentProperties1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getRecentProperties1>>, TError, Awaited<ReturnType<typeof getRecentProperties1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetRecentProperties1<TData = Awaited<ReturnType<typeof getRecentProperties1>>, TError = void>(params?: GetRecentProperties1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentProperties1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Password Protected Property for Signed in User
 */
export declare const getSecuredProperties1: (signal?: AbortSignal) => Promise<Property[]>;
export declare const getGetSecuredProperties1QueryKey: () => readonly ["/properties/password-protected"];
export declare const getGetSecuredProperties1QueryOptions: <TData = Awaited<ReturnType<typeof getSecuredProperties1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSecuredProperties1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSecuredProperties1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetSecuredProperties1QueryResult = NonNullable<Awaited<ReturnType<typeof getSecuredProperties1>>>;
export type GetSecuredProperties1QueryError = void;
export declare function useGetSecuredProperties1<TData = Awaited<ReturnType<typeof getSecuredProperties1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSecuredProperties1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getSecuredProperties1>>, TError, Awaited<ReturnType<typeof getSecuredProperties1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetSecuredProperties1<TData = Awaited<ReturnType<typeof getSecuredProperties1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSecuredProperties1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getSecuredProperties1>>, TError, Awaited<ReturnType<typeof getSecuredProperties1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetSecuredProperties1<TData = Awaited<ReturnType<typeof getSecuredProperties1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSecuredProperties1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Returns HTML preview for sharing a property on social media or messaging apps
 * @summary Get HTML preview for a property
 */
export declare const previewProperty2: (params: PreviewProperty2Params, signal?: AbortSignal) => Promise<string>;
export declare const getPreviewProperty2QueryKey: (params: PreviewProperty2Params) => readonly ["/properties/previews", ...PreviewProperty2Params[]];
export declare const getPreviewProperty2QueryOptions: <TData = Awaited<ReturnType<typeof previewProperty2>>, TError = void>(params: PreviewProperty2Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty2>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof previewProperty2>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type PreviewProperty2QueryResult = NonNullable<Awaited<ReturnType<typeof previewProperty2>>>;
export type PreviewProperty2QueryError = void;
export declare function usePreviewProperty2<TData = Awaited<ReturnType<typeof previewProperty2>>, TError = void>(params: PreviewProperty2Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty2>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof previewProperty2>>, TError, Awaited<ReturnType<typeof previewProperty2>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function usePreviewProperty2<TData = Awaited<ReturnType<typeof previewProperty2>>, TError = void>(params: PreviewProperty2Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty2>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof previewProperty2>>, TError, Awaited<ReturnType<typeof previewProperty2>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function usePreviewProperty2<TData = Awaited<ReturnType<typeof previewProperty2>>, TError = void>(params: PreviewProperty2Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty2>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Consider that only user can saveNew its properties
 * @summary Create or update the property supplied
 */
export declare const saveProperty1: (property: Property, signal?: AbortSignal) => Promise<Property>;
export declare const sendAlert2: (weeklyAlertRange: WeeklyAlertRange, signal?: AbortSignal) => Promise<number>;
export declare const sendGroupAlert1: (signal?: AbortSignal) => Promise<number>;
/**
 * Retrieves a list of all property types available in the system, including their IDs, names, language keys, active status, and associated property type groups.
 * @summary Get all property types
 */
export declare const getAllPropertyTypes1: (signal?: AbortSignal) => Promise<PropertyType[]>;
export declare const getGetAllPropertyTypes1QueryKey: () => readonly ["/property-types"];
export declare const getGetAllPropertyTypes1QueryOptions: <TData = Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAllPropertyTypes1QueryResult = NonNullable<Awaited<ReturnType<typeof getAllPropertyTypes1>>>;
export type GetAllPropertyTypes1QueryError = void;
export declare function useGetAllPropertyTypes1<TData = Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError, Awaited<ReturnType<typeof getAllPropertyTypes1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllPropertyTypes1<TData = Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError, Awaited<ReturnType<typeof getAllPropertyTypes1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAllPropertyTypes1<TData = Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllPropertyTypes1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Publication state update
 */
export declare const changePublicationStatus: (testimonialId: string, publicationState: boolean, signal?: AbortSignal) => Promise<Testimonial>;
/**
 * @summary Fetch User Posted list of testimonials
 */
export declare const fetchPublishedTestimonials1: (params?: FetchPublishedTestimonials1Params, signal?: AbortSignal) => Promise<TestimonialFilterResult>;
export declare const getFetchPublishedTestimonials1QueryKey: (params?: FetchPublishedTestimonials1Params) => readonly ["/testimonial/published", ...FetchPublishedTestimonials1Params[]];
export declare const getFetchPublishedTestimonials1QueryOptions: <TData = Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError = void>(params?: FetchPublishedTestimonials1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FetchPublishedTestimonials1QueryResult = NonNullable<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>>;
export type FetchPublishedTestimonials1QueryError = void;
export declare function useFetchPublishedTestimonials1<TData = Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError = void>(params: undefined | FetchPublishedTestimonials1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError, Awaited<ReturnType<typeof fetchPublishedTestimonials1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchPublishedTestimonials1<TData = Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError = void>(params?: FetchPublishedTestimonials1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError, Awaited<ReturnType<typeof fetchPublishedTestimonials1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchPublishedTestimonials1<TData = Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError = void>(params?: FetchPublishedTestimonials1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchPublishedTestimonials1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Fetch User Received list of testimonials
 */
export declare const fetchReceivedTestimonials1: (params?: FetchReceivedTestimonials1Params, signal?: AbortSignal) => Promise<TestimonialFilterResult>;
export declare const getFetchReceivedTestimonials1QueryKey: (params?: FetchReceivedTestimonials1Params) => readonly ["/testimonial", ...FetchReceivedTestimonials1Params[]];
export declare const getFetchReceivedTestimonials1QueryOptions: <TData = Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError = void>(params?: FetchReceivedTestimonials1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FetchReceivedTestimonials1QueryResult = NonNullable<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>>;
export type FetchReceivedTestimonials1QueryError = void;
export declare function useFetchReceivedTestimonials1<TData = Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError = void>(params: undefined | FetchReceivedTestimonials1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError, Awaited<ReturnType<typeof fetchReceivedTestimonials1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchReceivedTestimonials1<TData = Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError = void>(params?: FetchReceivedTestimonials1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError, Awaited<ReturnType<typeof fetchReceivedTestimonials1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFetchReceivedTestimonials1<TData = Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError = void>(params?: FetchReceivedTestimonials1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof fetchReceivedTestimonials1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Consider that only user can save new testimonials
 * @summary Create or update the Testimonial supplied
 */
export declare const saveTestimonial1: (testimonial: Testimonial, signal?: AbortSignal) => Promise<Testimonial>;
/**
 * @summary Return the testimonial with specified id, it needs to be published
 */
export declare const findTestimonial1: (testimonialId: string, signal?: AbortSignal) => Promise<Testimonial>;
export declare const getFindTestimonial1QueryKey: (testimonialId: string) => readonly [`/testimonial/${string}`];
export declare const getFindTestimonial1QueryOptions: <TData = Awaited<ReturnType<typeof findTestimonial1>>, TError = void>(testimonialId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonial1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findTestimonial1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindTestimonial1QueryResult = NonNullable<Awaited<ReturnType<typeof findTestimonial1>>>;
export type FindTestimonial1QueryError = void;
export declare function useFindTestimonial1<TData = Awaited<ReturnType<typeof findTestimonial1>>, TError = void>(testimonialId: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonial1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonial1>>, TError, Awaited<ReturnType<typeof findTestimonial1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonial1<TData = Awaited<ReturnType<typeof findTestimonial1>>, TError = void>(testimonialId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonial1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonial1>>, TError, Awaited<ReturnType<typeof findTestimonial1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonial1<TData = Awaited<ReturnType<typeof findTestimonial1>>, TError = void>(testimonialId: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonial1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Return the testimonial Requests a user Created
 */
export declare const findTestimonialRequests1: (signal?: AbortSignal) => Promise<Testimonial[]>;
export declare const getFindTestimonialRequests1QueryKey: () => readonly ["/testimonial/requested"];
export declare const getFindTestimonialRequests1QueryOptions: <TData = Awaited<ReturnType<typeof findTestimonialRequests1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequests1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequests1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindTestimonialRequests1QueryResult = NonNullable<Awaited<ReturnType<typeof findTestimonialRequests1>>>;
export type FindTestimonialRequests1QueryError = void;
export declare function useFindTestimonialRequests1<TData = Awaited<ReturnType<typeof findTestimonialRequests1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequests1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonialRequests1>>, TError, Awaited<ReturnType<typeof findTestimonialRequests1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonialRequests1<TData = Awaited<ReturnType<typeof findTestimonialRequests1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequests1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonialRequests1>>, TError, Awaited<ReturnType<typeof findTestimonialRequests1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonialRequests1<TData = Awaited<ReturnType<typeof findTestimonialRequests1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequests1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Return the testimonial Requests a user Received
 */
export declare const findTestimonialRequestsReceived1: (signal?: AbortSignal) => Promise<Testimonial[]>;
export declare const getFindTestimonialRequestsReceived1QueryKey: () => readonly ["/testimonial/request-received"];
export declare const getFindTestimonialRequestsReceived1QueryOptions: <TData = Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindTestimonialRequestsReceived1QueryResult = NonNullable<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>>;
export type FindTestimonialRequestsReceived1QueryError = void;
export declare function useFindTestimonialRequestsReceived1<TData = Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError, Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonialRequestsReceived1<TData = Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError, Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonialRequestsReceived1<TData = Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialRequestsReceived1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Return the property list with specified user id
 */
export declare const findPropertiesByUser1: (id: string, params?: FindPropertiesByUser1Params, signal?: AbortSignal) => Promise<PropertyFilterResult>;
export declare const getFindPropertiesByUser1QueryKey: (id: string, params?: FindPropertiesByUser1Params) => readonly [`/users/${string}/properties`, ...FindPropertiesByUser1Params[]];
export declare const getFindPropertiesByUser1QueryOptions: <TData = Awaited<ReturnType<typeof findPropertiesByUser1>>, TError = void>(id: string, params?: FindPropertiesByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindPropertiesByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof findPropertiesByUser1>>>;
export type FindPropertiesByUser1QueryError = void;
export declare function useFindPropertiesByUser1<TData = Awaited<ReturnType<typeof findPropertiesByUser1>>, TError = void>(id: string, params: undefined | FindPropertiesByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findPropertiesByUser1>>, TError, Awaited<ReturnType<typeof findPropertiesByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindPropertiesByUser1<TData = Awaited<ReturnType<typeof findPropertiesByUser1>>, TError = void>(id: string, params?: FindPropertiesByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findPropertiesByUser1>>, TError, Awaited<ReturnType<typeof findPropertiesByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindPropertiesByUser1<TData = Awaited<ReturnType<typeof findPropertiesByUser1>>, TError = void>(id: string, params?: FindPropertiesByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findPropertiesByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Return the testimonials list with specified user id
 */
export declare const findTestimonialsByUser1: (id: string, params?: FindTestimonialsByUser1Params, signal?: AbortSignal) => Promise<TestimonialFilterResult>;
export declare const getFindTestimonialsByUser1QueryKey: (id: string, params?: FindTestimonialsByUser1Params) => readonly [`/users/${string}/testimonials`, ...FindTestimonialsByUser1Params[]];
export declare const getFindTestimonialsByUser1QueryOptions: <TData = Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError = void>(id: string, params?: FindTestimonialsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindTestimonialsByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof findTestimonialsByUser1>>>;
export type FindTestimonialsByUser1QueryError = void;
export declare function useFindTestimonialsByUser1<TData = Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError = void>(id: string, params: undefined | FindTestimonialsByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError, Awaited<ReturnType<typeof findTestimonialsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonialsByUser1<TData = Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError = void>(id: string, params?: FindTestimonialsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError, Awaited<ReturnType<typeof findTestimonialsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindTestimonialsByUser1<TData = Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError = void>(id: string, params?: FindTestimonialsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findTestimonialsByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Request testimonial from specified user id
 */
export declare const requestTestimonialFromUser1: (id: string, signal?: AbortSignal) => Promise<TestimonialRequest>;
export declare const saveLog1: (logEntry: LogEntry, signal?: AbortSignal) => Promise<unknown>;
/**
 * In this email it will be contained all process information to change password and recover access
 * @summary Send an email to user that has forgotted his/her password
 */
export declare const sendEmail1: (signal?: AbortSignal) => Promise<unknown>;
export declare const getSendEmail1QueryKey: () => readonly ["/password_recovery/send_email"];
export declare const getSendEmail1QueryOptions: <TData = Awaited<ReturnType<typeof sendEmail1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendEmail1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof sendEmail1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type SendEmail1QueryResult = NonNullable<Awaited<ReturnType<typeof sendEmail1>>>;
export type SendEmail1QueryError = void;
export declare function useSendEmail1<TData = Awaited<ReturnType<typeof sendEmail1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendEmail1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof sendEmail1>>, TError, Awaited<ReturnType<typeof sendEmail1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useSendEmail1<TData = Awaited<ReturnType<typeof sendEmail1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendEmail1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof sendEmail1>>, TError, Awaited<ReturnType<typeof sendEmail1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useSendEmail1<TData = Awaited<ReturnType<typeof sendEmail1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendEmail1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * @summary Update the password user, finishing the recovery password process
 */
export declare const updatePassword1: (passwordRecoveryRequest: PasswordRecoveryRequest, signal?: AbortSignal) => Promise<unknown>;
/**
 * @summary Validate that password recovery token supplied was valid and current
 */
export declare const validateToken1: (signal?: AbortSignal) => Promise<PasswordRecoveryRequest>;
export declare const getValidateToken1QueryKey: () => readonly ["/password_recovery/validate_token"];
export declare const getValidateToken1QueryOptions: <TData = Awaited<ReturnType<typeof validateToken1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof validateToken1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof validateToken1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ValidateToken1QueryResult = NonNullable<Awaited<ReturnType<typeof validateToken1>>>;
export type ValidateToken1QueryError = void;
export declare function useValidateToken1<TData = Awaited<ReturnType<typeof validateToken1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof validateToken1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof validateToken1>>, TError, Awaited<ReturnType<typeof validateToken1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useValidateToken1<TData = Awaited<ReturnType<typeof validateToken1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof validateToken1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof validateToken1>>, TError, Awaited<ReturnType<typeof validateToken1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useValidateToken1<TData = Awaited<ReturnType<typeof validateToken1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof validateToken1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Generates an authorization code to be used with the token endpoint
 * @summary Authorize client application
 */
export declare const authorize1: (signal?: AbortSignal) => Promise<unknown>;
export declare const getAuthorize1QueryKey: () => readonly ["/security/auth"];
export declare const getAuthorize1QueryOptions: <TData = Awaited<ReturnType<typeof authorize1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof authorize1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof authorize1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type Authorize1QueryResult = NonNullable<Awaited<ReturnType<typeof authorize1>>>;
export type Authorize1QueryError = void;
export declare function useAuthorize1<TData = Awaited<ReturnType<typeof authorize1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof authorize1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof authorize1>>, TError, Awaited<ReturnType<typeof authorize1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useAuthorize1<TData = Awaited<ReturnType<typeof authorize1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof authorize1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof authorize1>>, TError, Awaited<ReturnType<typeof authorize1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useAuthorize1<TData = Awaited<ReturnType<typeof authorize1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof authorize1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Exchanges the provided authorization code, username, and password for a token through which private application resources can be accessed. Note that the token expires in 15 minutes. When this happens, you must invoke this service again with the previously described parameters.
 * @summary Exchange authorization code for access token
 */
export declare const requestToken1: (requestToken1Body: RequestToken1Body, signal?: AbortSignal) => Promise<AuthInfoDto>;
/**
 * @summary Create checkout-session
 */
export declare const createCheckoutSession2: (checkoutSessionDto: CheckoutSessionDto, signal?: AbortSignal) => Promise<void>;
/**
 * @summary Create checkout-session
 */
export declare const createCheckoutSession: (customerSessionDto: CustomerSessionDto, signal?: AbortSignal) => Promise<void>;
/**
 * @summary Notify user subscription change
 */
export declare const postUserSubscriptionChange1: (stripeEvent: StripeEvent, signal?: AbortSignal) => Promise<unknown>;
/**
 * @summary Return the active and available subscription plans
 */
export declare const getAll1: (params?: GetAll1Params, signal?: AbortSignal) => Promise<unknown>;
export declare const getGetAll1QueryKey: (params?: GetAll1Params) => readonly ["/subscription-plans", ...GetAll1Params[]];
export declare const getGetAll1QueryOptions: <TData = Awaited<ReturnType<typeof getAll1>>, TError = void>(params?: GetAll1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAll1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAll1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAll1QueryResult = NonNullable<Awaited<ReturnType<typeof getAll1>>>;
export type GetAll1QueryError = void;
export declare function useGetAll1<TData = Awaited<ReturnType<typeof getAll1>>, TError = void>(params: undefined | GetAll1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAll1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAll1>>, TError, Awaited<ReturnType<typeof getAll1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAll1<TData = Awaited<ReturnType<typeof getAll1>>, TError = void>(params?: GetAll1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAll1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAll1>>, TError, Awaited<ReturnType<typeof getAll1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAll1<TData = Awaited<ReturnType<typeof getAll1>>, TError = void>(params?: GetAll1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAll1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const get: (userId: number, signal?: AbortSignal) => Promise<UserSubscriptionDto>;
export declare const getGetQueryKey: (userId: number) => readonly [`/users/${number}/subscriptions`];
export declare const getGetQueryOptions: <TData = Awaited<ReturnType<typeof get>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetQueryResult = NonNullable<Awaited<ReturnType<typeof get>>>;
export type GetQueryError = void;
export declare function useGet<TData = Awaited<ReturnType<typeof get>>, TError = void>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof get>>, TError, Awaited<ReturnType<typeof get>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGet<TData = Awaited<ReturnType<typeof get>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof get>>, TError, Awaited<ReturnType<typeof get>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGet<TData = Awaited<ReturnType<typeof get>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof get>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare const getActiveFeatures1: (userId: number, signal?: AbortSignal) => Promise<SubscriptionPlanFeatureDto[]>;
export declare const getGetActiveFeatures1QueryKey: (userId: number) => readonly [`/users/${number}/subscriptions/active/features`];
export declare const getGetActiveFeatures1QueryOptions: <TData = Awaited<ReturnType<typeof getActiveFeatures1>>, TError = SubscriptionPlanFeatureDto[]>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getActiveFeatures1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getActiveFeatures1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetActiveFeatures1QueryResult = NonNullable<Awaited<ReturnType<typeof getActiveFeatures1>>>;
export type GetActiveFeatures1QueryError = SubscriptionPlanFeatureDto[];
export declare function useGetActiveFeatures1<TData = Awaited<ReturnType<typeof getActiveFeatures1>>, TError = SubscriptionPlanFeatureDto[]>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getActiveFeatures1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getActiveFeatures1>>, TError, Awaited<ReturnType<typeof getActiveFeatures1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetActiveFeatures1<TData = Awaited<ReturnType<typeof getActiveFeatures1>>, TError = SubscriptionPlanFeatureDto[]>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getActiveFeatures1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getActiveFeatures1>>, TError, Awaited<ReturnType<typeof getActiveFeatures1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetActiveFeatures1<TData = Awaited<ReturnType<typeof getActiveFeatures1>>, TError = SubscriptionPlanFeatureDto[]>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getActiveFeatures1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Deletes a specific alert owned by the user
 * @summary Delete an alert
 */
export declare const deleteAlert1: (userId: number, alertId: number) => Promise<string>;
/**
 * Retrieves the results for a specific alert
 * @summary Get alert results
 */
export declare const getAlertResult1: (userId: number, alertId: number, signal?: AbortSignal) => Promise<GetAlertResult1200>;
export declare const getGetAlertResult1QueryKey: (userId: number, alertId: number) => readonly [`/users/${number}/alerts/${number}/result`];
export declare const getGetAlertResult1QueryOptions: <TData = Awaited<ReturnType<typeof getAlertResult1>>, TError = string>(userId: number, alertId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertResult1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAlertResult1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetAlertResult1QueryResult = NonNullable<Awaited<ReturnType<typeof getAlertResult1>>>;
export type GetAlertResult1QueryError = string;
export declare function useGetAlertResult1<TData = Awaited<ReturnType<typeof getAlertResult1>>, TError = string>(userId: number, alertId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertResult1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getAlertResult1>>, TError, Awaited<ReturnType<typeof getAlertResult1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAlertResult1<TData = Awaited<ReturnType<typeof getAlertResult1>>, TError = string>(userId: number, alertId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertResult1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getAlertResult1>>, TError, Awaited<ReturnType<typeof getAlertResult1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetAlertResult1<TData = Awaited<ReturnType<typeof getAlertResult1>>, TError = string>(userId: number, alertId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAlertResult1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Returns all alerts associated with the specified user ID
 * @summary Get all alerts for a user
 */
export declare const getByUser2: (userId: number, signal?: AbortSignal) => Promise<Alert[]>;
export declare const getGetByUser2QueryKey: (userId: number) => readonly [`/users/${number}/alerts`];
export declare const getGetByUser2QueryOptions: <TData = Awaited<ReturnType<typeof getByUser2>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser2>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getByUser2>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetByUser2QueryResult = NonNullable<Awaited<ReturnType<typeof getByUser2>>>;
export type GetByUser2QueryError = string;
export declare function useGetByUser2<TData = Awaited<ReturnType<typeof getByUser2>>, TError = string>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser2>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getByUser2>>, TError, Awaited<ReturnType<typeof getByUser2>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetByUser2<TData = Awaited<ReturnType<typeof getByUser2>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser2>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getByUser2>>, TError, Awaited<ReturnType<typeof getByUser2>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetByUser2<TData = Awaited<ReturnType<typeof getByUser2>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser2>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Creates a new alert for the specified user
 * @summary Create a new alert
 */
export declare const saveAlert1: (userId: number, alert: Alert, signal?: AbortSignal) => Promise<Alert>;
/**
 * Retrieves all newsletters that the specified user has subscribed to
 * @summary Get newsletters subscribed to
 */
export declare const newsletterAlerts1: (userId: number, signal?: AbortSignal) => Promise<NewsletterSubscriberDto[]>;
export declare const getNewsletterAlerts1QueryKey: (userId: number) => readonly [`/users/${number}/alerts/newsletter-alerts`];
export declare const getNewsletterAlerts1QueryOptions: <TData = Awaited<ReturnType<typeof newsletterAlerts1>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterAlerts1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof newsletterAlerts1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type NewsletterAlerts1QueryResult = NonNullable<Awaited<ReturnType<typeof newsletterAlerts1>>>;
export type NewsletterAlerts1QueryError = string;
export declare function useNewsletterAlerts1<TData = Awaited<ReturnType<typeof newsletterAlerts1>>, TError = string>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterAlerts1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof newsletterAlerts1>>, TError, Awaited<ReturnType<typeof newsletterAlerts1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useNewsletterAlerts1<TData = Awaited<ReturnType<typeof newsletterAlerts1>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterAlerts1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof newsletterAlerts1>>, TError, Awaited<ReturnType<typeof newsletterAlerts1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useNewsletterAlerts1<TData = Awaited<ReturnType<typeof newsletterAlerts1>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterAlerts1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves all subscribers to newsletters owned by the specified user
 * @summary Get newsletter subscribers
 */
export declare const newsletterSubscribers1: (userId: number, signal?: AbortSignal) => Promise<NewsletterSubscriberDto[]>;
export declare const getNewsletterSubscribers1QueryKey: (userId: number) => readonly [`/users/${number}/alerts/newsletter-subscribers`];
export declare const getNewsletterSubscribers1QueryOptions: <TData = Awaited<ReturnType<typeof newsletterSubscribers1>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterSubscribers1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof newsletterSubscribers1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type NewsletterSubscribers1QueryResult = NonNullable<Awaited<ReturnType<typeof newsletterSubscribers1>>>;
export type NewsletterSubscribers1QueryError = string;
export declare function useNewsletterSubscribers1<TData = Awaited<ReturnType<typeof newsletterSubscribers1>>, TError = string>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterSubscribers1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof newsletterSubscribers1>>, TError, Awaited<ReturnType<typeof newsletterSubscribers1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useNewsletterSubscribers1<TData = Awaited<ReturnType<typeof newsletterSubscribers1>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterSubscribers1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof newsletterSubscribers1>>, TError, Awaited<ReturnType<typeof newsletterSubscribers1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useNewsletterSubscribers1<TData = Awaited<ReturnType<typeof newsletterSubscribers1>>, TError = string>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof newsletterSubscribers1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Triggers the sending of customized property alerts to users
 * @summary Send customized property alerts
 */
export declare const sendAlert: (userId: number, signal?: AbortSignal) => Promise<string>;
/**
 * Returns a list of all available brokerages in the system
 * @summary Retrieve all brokerages
 */
export declare const retrieve1: (signal?: AbortSignal) => Promise<Brokerage[]>;
export declare const getRetrieve1QueryKey: () => readonly ["/brokerages"];
export declare const getRetrieve1QueryOptions: <TData = Awaited<ReturnType<typeof retrieve1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieve1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieve1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type Retrieve1QueryResult = NonNullable<Awaited<ReturnType<typeof retrieve1>>>;
export type Retrieve1QueryError = unknown;
export declare function useRetrieve1<TData = Awaited<ReturnType<typeof retrieve1>>, TError = unknown>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieve1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieve1>>, TError, Awaited<ReturnType<typeof retrieve1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieve1<TData = Awaited<ReturnType<typeof retrieve1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieve1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieve1>>, TError, Awaited<ReturnType<typeof retrieve1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieve1<TData = Awaited<ReturnType<typeof retrieve1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieve1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Gets all endorsements for a specified user. Can be filtered by endorser ID.
 * @summary Retrieve endorsements for a user
 */
export declare const retrieveEndorsementsByUser1: (userId: number, params?: RetrieveEndorsementsByUser1Params, signal?: AbortSignal) => Promise<SkillEndorsement[]>;
export declare const getRetrieveEndorsementsByUser1QueryKey: (userId: number, params?: RetrieveEndorsementsByUser1Params) => readonly [`/users/${number}/endorsements`, ...RetrieveEndorsementsByUser1Params[]];
export declare const getRetrieveEndorsementsByUser1QueryOptions: <TData = Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError = void>(userId: number, params?: RetrieveEndorsementsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveEndorsementsByUser1QueryResult = NonNullable<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>>;
export type RetrieveEndorsementsByUser1QueryError = void;
export declare function useRetrieveEndorsementsByUser1<TData = Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError = void>(userId: number, params: undefined | RetrieveEndorsementsByUser1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError, Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveEndorsementsByUser1<TData = Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError = void>(userId: number, params?: RetrieveEndorsementsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError, Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveEndorsementsByUser1<TData = Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError = void>(userId: number, params?: RetrieveEndorsementsByUser1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveEndorsementsByUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves all favorites for a specific user
 * @summary Get user favorites
 */
export declare const getByUser: (userId: number, params?: GetByUserParams, signal?: AbortSignal) => Promise<Favorite[]>;
export declare const getGetByUserQueryKey: (userId: number, params?: GetByUserParams) => readonly [`/users/${number}/favorites`, ...GetByUserParams[]];
export declare const getGetByUserQueryOptions: <TData = Awaited<ReturnType<typeof getByUser>>, TError = void>(userId: number, params?: GetByUserParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getByUser>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetByUserQueryResult = NonNullable<Awaited<ReturnType<typeof getByUser>>>;
export type GetByUserQueryError = void;
export declare function useGetByUser<TData = Awaited<ReturnType<typeof getByUser>>, TError = void>(userId: number, params: undefined | GetByUserParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getByUser>>, TError, Awaited<ReturnType<typeof getByUser>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetByUser<TData = Awaited<ReturnType<typeof getByUser>>, TError = void>(userId: number, params?: GetByUserParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getByUser>>, TError, Awaited<ReturnType<typeof getByUser>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetByUser<TData = Awaited<ReturnType<typeof getByUser>>, TError = void>(userId: number, params?: GetByUserParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getByUser>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Adds a new favorite item for a specific user
 * @summary Add a favorite
 */
export declare const postUserFavorite1: (userId: number, favorite: Favorite, signal?: AbortSignal) => Promise<Favorite>;
/**
 * Removes a specific favorite from a user's favorites list
 * @summary Remove a favorite
 */
export declare const removeUserFavorite1: (userId: number, favoriteId: number) => Promise<unknown>;
/**
 * Searches for users within a specific group matching the specified filter criteria
 * @summary Search users within a specified group
 */
export declare const searchGroupUsers1: (groupId: string, userFilterRequest: UserFilterRequest, signal?: AbortSignal) => Promise<UserFilterResult>;
/**
 * Returns a list of all available user skills in the system
 * @summary Retrieve all user skills
 */
export declare const retrieveUserSkills2: (signal?: AbortSignal) => Promise<Skill[]>;
export declare const getRetrieveUserSkills2QueryKey: () => readonly ["/skills"];
export declare const getRetrieveUserSkills2QueryOptions: <TData = Awaited<ReturnType<typeof retrieveUserSkills2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills2>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills2>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveUserSkills2QueryResult = NonNullable<Awaited<ReturnType<typeof retrieveUserSkills2>>>;
export type RetrieveUserSkills2QueryError = void;
export declare function useRetrieveUserSkills2<TData = Awaited<ReturnType<typeof retrieveUserSkills2>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills2>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveUserSkills2>>, TError, Awaited<ReturnType<typeof retrieveUserSkills2>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveUserSkills2<TData = Awaited<ReturnType<typeof retrieveUserSkills2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills2>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveUserSkills2>>, TError, Awaited<ReturnType<typeof retrieveUserSkills2>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveUserSkills2<TData = Awaited<ReturnType<typeof retrieveUserSkills2>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills2>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Returns all available user types in the system
 * @summary Get user types
 */
export declare const getUserTypes1: (signal?: AbortSignal) => Promise<UserType[]>;
export declare const getGetUserTypes1QueryKey: () => readonly ["/user-types"];
export declare const getGetUserTypes1QueryOptions: <TData = Awaited<ReturnType<typeof getUserTypes1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserTypes1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUserTypes1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetUserTypes1QueryResult = NonNullable<Awaited<ReturnType<typeof getUserTypes1>>>;
export type GetUserTypes1QueryError = void;
export declare function useGetUserTypes1<TData = Awaited<ReturnType<typeof getUserTypes1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserTypes1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getUserTypes1>>, TError, Awaited<ReturnType<typeof getUserTypes1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetUserTypes1<TData = Awaited<ReturnType<typeof getUserTypes1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserTypes1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getUserTypes1>>, TError, Awaited<ReturnType<typeof getUserTypes1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetUserTypes1<TData = Awaited<ReturnType<typeof getUserTypes1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserTypes1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Activates a user account using the activation key sent to their email
 * @summary Activate the account of specified user
 */
export declare const activateUser1: (signal?: AbortSignal) => Promise<string>;
export declare const getActivateUser1QueryKey: () => readonly ["/users/activate-user"];
export declare const getActivateUser1QueryOptions: <TData = Awaited<ReturnType<typeof activateUser1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof activateUser1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof activateUser1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type ActivateUser1QueryResult = NonNullable<Awaited<ReturnType<typeof activateUser1>>>;
export type ActivateUser1QueryError = void;
export declare function useActivateUser1<TData = Awaited<ReturnType<typeof activateUser1>>, TError = void>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof activateUser1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof activateUser1>>, TError, Awaited<ReturnType<typeof activateUser1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useActivateUser1<TData = Awaited<ReturnType<typeof activateUser1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof activateUser1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof activateUser1>>, TError, Awaited<ReturnType<typeof activateUser1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useActivateUser1<TData = Awaited<ReturnType<typeof activateUser1>>, TError = void>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof activateUser1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Verifies the code that was sent to the user's phone
 * @summary Verify the phone code sent to user
 */
export declare const checkPhoneVerificationCodeCommand1: (userId: number, phoneCodeCheckResource: PhoneCodeCheckResource, signal?: AbortSignal) => Promise<PhoneCodeCheckResource>;
/**
 * Retrieves a random selection of users based on specified criteria
 * @summary Fetch random list of users, with basic data
 */
export declare const fetchRandomUsers1: (userListRequest: UserListRequest, signal?: AbortSignal) => Promise<SkilledUser[]>;
/**
 * Gets detailed user information by user ID
 * @summary Fetch user detail according to its id
 */
export declare const find: (userId: number, signal?: AbortSignal) => Promise<SkilledUser>;
export declare const getFindQueryKey: (userId: number) => readonly [`/users/${number}`];
export declare const getFindQueryOptions: <TData = Awaited<ReturnType<typeof find>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof find>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindQueryResult = NonNullable<Awaited<ReturnType<typeof find>>>;
export type FindQueryError = void;
export declare function useFind<TData = Awaited<ReturnType<typeof find>>, TError = void>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof find>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof find>>, TError, Awaited<ReturnType<typeof find>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFind<TData = Awaited<ReturnType<typeof find>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof find>>, TError, Awaited<ReturnType<typeof find>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFind<TData = Awaited<ReturnType<typeof find>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Gets user information by their unique profile name
 * @summary Fetch user detail according to its profile name
 */
export declare const find1: (params?: Find1Params, signal?: AbortSignal) => Promise<SkilledUser[]>;
export declare const getFind1QueryKey: (params?: Find1Params) => readonly ["/users", ...Find1Params[]];
export declare const getFind1QueryOptions: <TData = Awaited<ReturnType<typeof find1>>, TError = void>(params?: Find1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof find1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type Find1QueryResult = NonNullable<Awaited<ReturnType<typeof find1>>>;
export type Find1QueryError = void;
export declare function useFind1<TData = Awaited<ReturnType<typeof find1>>, TError = void>(params: undefined | Find1Params, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof find1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof find1>>, TError, Awaited<ReturnType<typeof find1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFind1<TData = Awaited<ReturnType<typeof find1>>, TError = void>(params?: Find1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof find1>>, TError, Awaited<ReturnType<typeof find1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFind1<TData = Awaited<ReturnType<typeof find1>>, TError = void>(params?: Find1Params, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof find1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Updates user profile information in the system
 * @summary Save the data of user in the system
 */
export declare const save: (skilledUser: SkilledUser, signal?: AbortSignal) => Promise<string>;
/**
 * Gets detailed information for multiple users by their IDs
 * @summary Fetch multiple user detail according to its ids
 */
export declare const findList1: (userIds: string, signal?: AbortSignal) => Promise<SkilledUser[]>;
export declare const getFindList1QueryKey: (userIds: string) => readonly [`/users/list/${string}`];
export declare const getFindList1QueryOptions: <TData = Awaited<ReturnType<typeof findList1>>, TError = void>(userIds: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findList1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findList1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindList1QueryResult = NonNullable<Awaited<ReturnType<typeof findList1>>>;
export type FindList1QueryError = void;
export declare function useFindList1<TData = Awaited<ReturnType<typeof findList1>>, TError = void>(userIds: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findList1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findList1>>, TError, Awaited<ReturnType<typeof findList1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindList1<TData = Awaited<ReturnType<typeof findList1>>, TError = void>(userIds: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findList1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findList1>>, TError, Awaited<ReturnType<typeof findList1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindList1<TData = Awaited<ReturnType<typeof findList1>>, TError = void>(userIds: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findList1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves the list of connections for a specific user
 * @summary Get a user connections
 */
export declare const findUserConnections: (userId: number, signal?: AbortSignal) => Promise<SkilledUser[]>;
export declare const getFindUserConnectionsQueryKey: (userId: number) => readonly [`/users/${number}/connections`];
export declare const getFindUserConnectionsQueryOptions: <TData = Awaited<ReturnType<typeof findUserConnections>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof findUserConnections>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type FindUserConnectionsQueryResult = NonNullable<Awaited<ReturnType<typeof findUserConnections>>>;
export type FindUserConnectionsQueryError = void;
export declare function useFindUserConnections<TData = Awaited<ReturnType<typeof findUserConnections>>, TError = void>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof findUserConnections>>, TError, Awaited<ReturnType<typeof findUserConnections>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindUserConnections<TData = Awaited<ReturnType<typeof findUserConnections>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof findUserConnections>>, TError, Awaited<ReturnType<typeof findUserConnections>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useFindUserConnections<TData = Awaited<ReturnType<typeof findUserConnections>>, TError = void>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof findUserConnections>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Retrieves all users who have subscribed to the specified subscription plan
 * @summary Gets the users subscribed to a subscription plan name like Professional
 */
export declare const getSubscribedUsers1: (subscriptionPlanName: string, signal?: AbortSignal) => Promise<SubscribedUser[]>;
export declare const getGetSubscribedUsers1QueryKey: (subscriptionPlanName: string) => readonly [`/users/subscribed-users/${string}`];
export declare const getGetSubscribedUsers1QueryOptions: <TData = Awaited<ReturnType<typeof getSubscribedUsers1>>, TError = void>(subscriptionPlanName: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSubscribedUsers1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSubscribedUsers1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type GetSubscribedUsers1QueryResult = NonNullable<Awaited<ReturnType<typeof getSubscribedUsers1>>>;
export type GetSubscribedUsers1QueryError = void;
export declare function useGetSubscribedUsers1<TData = Awaited<ReturnType<typeof getSubscribedUsers1>>, TError = void>(subscriptionPlanName: string, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSubscribedUsers1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof getSubscribedUsers1>>, TError, Awaited<ReturnType<typeof getSubscribedUsers1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetSubscribedUsers1<TData = Awaited<ReturnType<typeof getSubscribedUsers1>>, TError = void>(subscriptionPlanName: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSubscribedUsers1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof getSubscribedUsers1>>, TError, Awaited<ReturnType<typeof getSubscribedUsers1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useGetSubscribedUsers1<TData = Awaited<ReturnType<typeof getSubscribedUsers1>>, TError = void>(subscriptionPlanName: string, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSubscribedUsers1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Generates an HTML preview of a user profile for sharing purposes
 * @summary Get HTML preview of a user profile
 */
export declare const previewProperty: (params?: PreviewPropertyParams, signal?: AbortSignal) => Promise<string>;
export declare const getPreviewPropertyQueryKey: (params?: PreviewPropertyParams) => readonly ["/users/previews", ...PreviewPropertyParams[]];
export declare const getPreviewPropertyQueryOptions: <TData = Awaited<ReturnType<typeof previewProperty>>, TError = void>(params?: PreviewPropertyParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof previewProperty>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type PreviewPropertyQueryResult = NonNullable<Awaited<ReturnType<typeof previewProperty>>>;
export type PreviewPropertyQueryError = void;
export declare function usePreviewProperty<TData = Awaited<ReturnType<typeof previewProperty>>, TError = void>(params: undefined | PreviewPropertyParams, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof previewProperty>>, TError, Awaited<ReturnType<typeof previewProperty>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function usePreviewProperty<TData = Awaited<ReturnType<typeof previewProperty>>, TError = void>(params?: PreviewPropertyParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof previewProperty>>, TError, Awaited<ReturnType<typeof previewProperty>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function usePreviewProperty<TData = Awaited<ReturnType<typeof previewProperty>>, TError = void>(params?: PreviewPropertyParams, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof previewProperty>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Creates a new user account in the system
 * @summary Register new user in the system
 */
export declare const register1: (skilledUser: SkilledUser, params?: Register1Params, signal?: AbortSignal) => Promise<unknown>;
/**
 * Sends an activation link to the user's email for account verification
 * @summary Request activation link
 */
export declare const requestActivationLink1: (requestActivationLink1Body: RequestActivationLink1Body, signal?: AbortSignal) => Promise<void>;
/**
 * Searches for users matching the specified filter criteria
 * @summary Search users with specified filters
 */
export declare const searchUsers1: (userFilterRequest: UserFilterRequest, signal?: AbortSignal) => Promise<UserFilterResult>;
export declare const sendPayedSusbscribersAlert1: (signal?: AbortSignal) => Promise<unknown>;
export declare const getSendPayedSusbscribersAlert1QueryKey: () => readonly ["/users/weekly-payed-subscribers-alert"];
export declare const getSendPayedSusbscribersAlert1QueryOptions: <TData = Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type SendPayedSusbscribersAlert1QueryResult = NonNullable<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>>;
export type SendPayedSusbscribersAlert1QueryError = unknown;
export declare function useSendPayedSusbscribersAlert1<TData = Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError = unknown>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError, Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useSendPayedSusbscribersAlert1<TData = Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError, Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useSendPayedSusbscribersAlert1<TData = Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError = unknown>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof sendPayedSusbscribersAlert1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Sends a verification code to the user's phone number for verification purposes
 * @summary Send a code to the previously saved phone number of the user
 */
export declare const sendPhoneVerificationCodeCommand1: (userId: number, phoneCodeRequestResource: PhoneCodeRequestResource, signal?: AbortSignal) => Promise<PhoneCodeRequestResource>;
/**
 * Returns all skills associated with a user
 * @summary Retrieve user skills
 */
export declare const retrieveUserSkills: (userId: number, signal?: AbortSignal) => Promise<UserSkill[]>;
export declare const getRetrieveUserSkillsQueryKey: (userId: number) => readonly [`/users/${number}/skills`];
export declare const getRetrieveUserSkillsQueryOptions: <TData = Awaited<ReturnType<typeof retrieveUserSkills>>, TError = unknown>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveUserSkillsQueryResult = NonNullable<Awaited<ReturnType<typeof retrieveUserSkills>>>;
export type RetrieveUserSkillsQueryError = unknown;
export declare function useRetrieveUserSkills<TData = Awaited<ReturnType<typeof retrieveUserSkills>>, TError = unknown>(userId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveUserSkills>>, TError, Awaited<ReturnType<typeof retrieveUserSkills>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveUserSkills<TData = Awaited<ReturnType<typeof retrieveUserSkills>>, TError = unknown>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveUserSkills>>, TError, Awaited<ReturnType<typeof retrieveUserSkills>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveUserSkills<TData = Awaited<ReturnType<typeof retrieveUserSkills>>, TError = unknown>(userId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveUserSkills>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * This endpoint is not supported. Use save user profile to update skills instead.
 * @summary Add user skills
 */
export declare const addUserSkills1: (userId: number, userSkill: UserSkill[], signal?: AbortSignal) => Promise<unknown>;
/**
 * Returns all endorsements for a specific user skill
 * @summary Retrieve skill endorsements
 */
export declare const retrieveSkillEndorsements1: (userId: number, skillId: number, signal?: AbortSignal) => Promise<SkillEndorsement[]>;
export declare const getRetrieveSkillEndorsements1QueryKey: (userId: number, skillId: number) => readonly [`/users/${number}/skills/${number}/endorsements`];
export declare const getRetrieveSkillEndorsements1QueryOptions: <TData = Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError = unknown>(userId: number, skillId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError, TData>>;
}) => UseQueryOptions<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError, TData> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export type RetrieveSkillEndorsements1QueryResult = NonNullable<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>>;
export type RetrieveSkillEndorsements1QueryError = unknown;
export declare function useRetrieveSkillEndorsements1<TData = Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError = unknown>(userId: number, skillId: number, options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError, TData>> & Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError, Awaited<ReturnType<typeof retrieveSkillEndorsements1>>>, "initialData">;
}, queryClient?: QueryClient): DefinedUseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveSkillEndorsements1<TData = Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError = unknown>(userId: number, skillId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError, TData>> & Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError, Awaited<ReturnType<typeof retrieveSkillEndorsements1>>>, "initialData">;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
export declare function useRetrieveSkillEndorsements1<TData = Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError = unknown>(userId: number, skillId: number, options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof retrieveSkillEndorsements1>>, TError, TData>>;
}, queryClient?: QueryClient): UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
};
/**
 * Allows a user to endorse another user's skill
 * @summary Endorse a user skill
 */
export declare const endorseUserSkill1: (userId: number, skillId: number, skillEndorsement: SkillEndorsement, signal?: AbortSignal) => Promise<SkillEndorsement>;
