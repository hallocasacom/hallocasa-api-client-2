"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGetAllCountries2QueryKey = exports.getAllCountries2 = exports.getGet2QueryOptions = exports.getGet2QueryKey = exports.get2 = exports.getRetrieveChatUserStatus1QueryOptions = exports.getRetrieveChatUserStatus1QueryKey = exports.retrieveChatUserStatus1 = exports.getRetrieveChatUser1QueryOptions = exports.getRetrieveChatUser1QueryKey = exports.retrieveChatUser1 = exports.useGetByUserWithResult1 = exports.getGetByUserWithResult1MutationOptions = exports.getByUserWithResult1 = exports.useSendMessage1 = exports.getSendMessage1MutationOptions = exports.sendMessage1 = exports.getGetConversation1QueryOptions = exports.getGetConversation1QueryKey = exports.getConversation1 = exports.useSave2 = exports.getSave2MutationOptions = exports.save2 = exports.getFindUserContracts1QueryOptions = exports.getFindUserContracts1QueryKey = exports.findUserContracts1 = exports.getFindUserConnections2QueryOptions = exports.getFindUserConnections2QueryKey = exports.findUserConnections2 = exports.getRetrieveUserTicket1QueryOptions = exports.getRetrieveUserTicket1QueryKey = exports.retrieveUserTicket1 = exports.getGetChatSummaryByUser1QueryOptions = exports.getGetChatSummaryByUser1QueryKey = exports.getChatSummaryByUser1 = exports.useUpdateChatAllowance1 = exports.getUpdateChatAllowance1MutationOptions = exports.updateChatAllowance1 = exports.getGetChatAllowance1QueryOptions = exports.getGetChatAllowance1QueryKey = exports.getChatAllowance1 = exports.useUpdateAttachment1 = exports.getUpdateAttachment1MutationOptions = exports.updateAttachment1 = exports.getRetrieveAttachment1QueryOptions = exports.getRetrieveAttachment1QueryKey = exports.retrieveAttachment1 = exports.useCreateAttachment1 = exports.getCreateAttachment1MutationOptions = exports.createAttachment1 = void 0;
exports.uploadPropertiesFromUrl1 = exports.useUploadProperties1 = exports.getUploadProperties1MutationOptions = exports.uploadProperties1 = exports.useUploadKyeroPropertiesFromUrl1 = exports.getUploadKyeroPropertiesFromUrl1MutationOptions = exports.uploadKyeroPropertiesFromUrl1 = exports.useUploadKyeroProperties2 = exports.getUploadKyeroProperties2MutationOptions = exports.uploadKyeroProperties2 = exports.getGetFormats1QueryOptions = exports.getGetFormats1QueryKey = exports.getFormats1 = exports.getXmlRedirect1QueryOptions = exports.getXmlRedirect1QueryKey = exports.xmlRedirect1 = exports.getXml1QueryOptions = exports.getXml1QueryKey = exports.xml1 = exports.useTriggerKyeroExport1 = exports.getTriggerKyeroExport1MutationOptions = exports.triggerKyeroExport1 = exports.getTranslateText1QueryOptions = exports.getTranslateText1QueryKey = exports.translateText1 = exports.getGetLanguages1QueryOptions = exports.getGetLanguages1QueryKey = exports.getLanguages1 = exports.getFind3QueryOptions = exports.getFind3QueryKey = exports.find3 = exports.useDelete1 = exports.getDelete1MutationOptions = exports.delete1 = exports.getGetAllLanguages1QueryOptions = exports.getGetAllLanguages1QueryKey = exports.getAllLanguages1 = exports.getGetGeoLocationsByLatLng1QueryOptions = exports.getGetGeoLocationsByLatLng1QueryKey = exports.getGeoLocationsByLatLng1 = exports.getFindExchangeRates1QueryOptions = exports.getFindExchangeRates1QueryKey = exports.findExchangeRates1 = exports.getGetCurrencies1QueryOptions = exports.getGetCurrencies1QueryKey = exports.getCurrencies1 = exports.getGetCountryByIp1QueryOptions = exports.getGetCountryByIp1QueryKey = exports.getCountryByIp1 = exports.getGetAllCountries2QueryOptions = void 0;
exports.useSaveGroup1 = exports.getSaveGroup1MutationOptions = exports.saveGroup1 = exports.getFindGroupsByUser1QueryOptions = exports.getFindGroupsByUser1QueryKey = exports.findGroupsByUser1 = exports.useFindGroupPropertiesSearch1 = exports.getFindGroupPropertiesSearch1MutationOptions = exports.findGroupPropertiesSearch1 = exports.getFindGroupProperties1QueryOptions = exports.getFindGroupProperties1QueryKey = exports.findGroupProperties1 = exports.getFindGroup1QueryOptions = exports.getFindGroup1QueryKey = exports.findGroup1 = exports.getFindArchivedGroupsByUser1QueryOptions = exports.getFindArchivedGroupsByUser1QueryKey = exports.findArchivedGroupsByUser1 = exports.useDeleteGroup1 = exports.getDeleteGroup1MutationOptions = exports.deleteGroup1 = exports.useDeactivateGroup1 = exports.getDeactivateGroup1MutationOptions = exports.deactivateGroup1 = exports.useArchiveGroup1 = exports.getArchiveGroup1MutationOptions = exports.archiveGroup1 = exports.useUpdateGroupMembershipStatus1 = exports.getUpdateGroupMembershipStatus1MutationOptions = exports.updateGroupMembershipStatus1 = exports.useGroupRequest1 = exports.getGroupRequest1MutationOptions = exports.groupRequest1 = exports.useGroupLeave1 = exports.getGroupLeave1MutationOptions = exports.groupLeave1 = exports.useGroupInvite = exports.getGroupInviteMutationOptions = exports.groupInvite = exports.useGroupInvite2 = exports.getGroupInvite2MutationOptions = exports.groupInvite2 = exports.getGetGroupMembers1QueryOptions = exports.getGetGroupMembers1QueryKey = exports.getGroupMembers1 = exports.getUploadKyeroPropertiesQueryOptions = exports.getUploadKyeroPropertiesQueryKey = exports.uploadKyeroProperties = exports.useUploadPropertiesFromUrl1 = exports.getUploadPropertiesFromUrl1MutationOptions = void 0;
exports.getGetDraftsProperties1QueryKey = exports.getDraftsProperties1 = exports.getFindPropertyOldUrl1QueryOptions = exports.getFindPropertyOldUrl1QueryKey = exports.findPropertyOldUrl1 = exports.getFindProperty1QueryOptions = exports.getFindProperty1QueryKey = exports.findProperty1 = exports.getFindPropertiesByLocationRange1QueryOptions = exports.getFindPropertiesByLocationRange1QueryKey = exports.findPropertiesByLocationRange1 = exports.useFindProperties1 = exports.getFindProperties1MutationOptions = exports.findProperties1 = exports.getFetchRandomPropertiesQueryOptions = exports.getFetchRandomPropertiesQueryKey = exports.fetchRandomProperties = exports.getFetchRandomProperties2QueryOptions = exports.getFetchRandomProperties2QueryKey = exports.fetchRandomProperties2 = exports.useDeleteProperty1 = exports.getDeleteProperty1MutationOptions = exports.deleteProperty1 = exports.useChangePublicationStatus2 = exports.getChangePublicationStatus2MutationOptions = exports.changePublicationStatus2 = exports.getGetAllPropertyProposals1QueryOptions = exports.getGetAllPropertyProposals1QueryKey = exports.getAllPropertyProposals1 = exports.getGetAllCountriesQueryOptions = exports.getGetAllCountriesQueryKey = exports.getAllCountries = exports.getGetPropertyFiltersQueryOptions = exports.getGetPropertyFiltersQueryKey = exports.getPropertyFilters = exports.useGetPropertyFieldOptions1 = exports.getGetPropertyFieldOptions1MutationOptions = exports.getPropertyFieldOptions1 = exports.useGetPropertyFilters2 = exports.getGetPropertyFilters2MutationOptions = exports.getPropertyFilters2 = exports.getFindRequestedGroupsByUser1QueryOptions = exports.getFindRequestedGroupsByUser1QueryKey = exports.findRequestedGroupsByUser1 = exports.getFindInvitedGroupsByUser1QueryOptions = exports.getFindInvitedGroupsByUser1QueryKey = exports.findInvitedGroupsByUser1 = exports.getFindInactiveGroupsByUser1QueryOptions = exports.getFindInactiveGroupsByUser1QueryKey = exports.findInactiveGroupsByUser1 = void 0;
exports.requestTestimonialFromUser1 = exports.getFindTestimonialsByUser1QueryOptions = exports.getFindTestimonialsByUser1QueryKey = exports.findTestimonialsByUser1 = exports.getFindPropertiesByUser1QueryOptions = exports.getFindPropertiesByUser1QueryKey = exports.findPropertiesByUser1 = exports.getFindTestimonialRequestsReceived1QueryOptions = exports.getFindTestimonialRequestsReceived1QueryKey = exports.findTestimonialRequestsReceived1 = exports.getFindTestimonialRequests1QueryOptions = exports.getFindTestimonialRequests1QueryKey = exports.findTestimonialRequests1 = exports.getFindTestimonial1QueryOptions = exports.getFindTestimonial1QueryKey = exports.findTestimonial1 = exports.useSaveTestimonial1 = exports.getSaveTestimonial1MutationOptions = exports.saveTestimonial1 = exports.getFetchReceivedTestimonials1QueryOptions = exports.getFetchReceivedTestimonials1QueryKey = exports.fetchReceivedTestimonials1 = exports.getFetchPublishedTestimonials1QueryOptions = exports.getFetchPublishedTestimonials1QueryKey = exports.fetchPublishedTestimonials1 = exports.useChangePublicationStatus = exports.getChangePublicationStatusMutationOptions = exports.changePublicationStatus = exports.getGetAllPropertyTypes1QueryOptions = exports.getGetAllPropertyTypes1QueryKey = exports.getAllPropertyTypes1 = exports.useSendGroupAlert1 = exports.getSendGroupAlert1MutationOptions = exports.sendGroupAlert1 = exports.useSendAlert2 = exports.getSendAlert2MutationOptions = exports.sendAlert2 = exports.useSaveProperty1 = exports.getSaveProperty1MutationOptions = exports.saveProperty1 = exports.getPreviewProperty2QueryOptions = exports.getPreviewProperty2QueryKey = exports.previewProperty2 = exports.getGetSecuredProperties1QueryOptions = exports.getGetSecuredProperties1QueryKey = exports.getSecuredProperties1 = exports.getGetRecentProperties1QueryOptions = exports.getGetRecentProperties1QueryKey = exports.getRecentProperties1 = exports.getGetDraftsProperties1QueryOptions = void 0;
exports.useSaveAlert1 = exports.getSaveAlert1MutationOptions = exports.saveAlert1 = exports.getGetByUser2QueryOptions = exports.getGetByUser2QueryKey = exports.getByUser2 = exports.getGetAlertResult1QueryOptions = exports.getGetAlertResult1QueryKey = exports.getAlertResult1 = exports.useDeleteAlert1 = exports.getDeleteAlert1MutationOptions = exports.deleteAlert1 = exports.getGetActiveFeatures1QueryOptions = exports.getGetActiveFeatures1QueryKey = exports.getActiveFeatures1 = exports.getGetQueryOptions = exports.getGetQueryKey = exports.get = exports.getGetAll1QueryOptions = exports.getGetAll1QueryKey = exports.getAll1 = exports.usePostUserSubscriptionChange1 = exports.getPostUserSubscriptionChange1MutationOptions = exports.postUserSubscriptionChange1 = exports.useCreateCheckoutSession = exports.getCreateCheckoutSessionMutationOptions = exports.createCheckoutSession = exports.useCreateCheckoutSession2 = exports.getCreateCheckoutSession2MutationOptions = exports.createCheckoutSession2 = exports.useRequestToken1 = exports.getRequestToken1MutationOptions = exports.requestToken1 = exports.getAuthorize1QueryOptions = exports.getAuthorize1QueryKey = exports.authorize1 = exports.getValidateToken1QueryOptions = exports.getValidateToken1QueryKey = exports.validateToken1 = exports.useUpdatePassword1 = exports.getUpdatePassword1MutationOptions = exports.updatePassword1 = exports.getSendEmail1QueryOptions = exports.getSendEmail1QueryKey = exports.sendEmail1 = exports.useSaveLog1 = exports.getSaveLog1MutationOptions = exports.saveLog1 = exports.useRequestTestimonialFromUser1 = exports.getRequestTestimonialFromUser1MutationOptions = void 0;
exports.getSaveMutationOptions = exports.save = exports.getFind1QueryOptions = exports.getFind1QueryKey = exports.find1 = exports.getFindQueryOptions = exports.getFindQueryKey = exports.find = exports.useFetchRandomUsers1 = exports.getFetchRandomUsers1MutationOptions = exports.fetchRandomUsers1 = exports.useCheckPhoneVerificationCodeCommand1 = exports.getCheckPhoneVerificationCodeCommand1MutationOptions = exports.checkPhoneVerificationCodeCommand1 = exports.getActivateUser1QueryOptions = exports.getActivateUser1QueryKey = exports.activateUser1 = exports.getGetUserTypes1QueryOptions = exports.getGetUserTypes1QueryKey = exports.getUserTypes1 = exports.getRetrieveUserSkills2QueryOptions = exports.getRetrieveUserSkills2QueryKey = exports.retrieveUserSkills2 = exports.useSearchGroupUsers1 = exports.getSearchGroupUsers1MutationOptions = exports.searchGroupUsers1 = exports.useRemoveUserFavorite1 = exports.getRemoveUserFavorite1MutationOptions = exports.removeUserFavorite1 = exports.usePostUserFavorite1 = exports.getPostUserFavorite1MutationOptions = exports.postUserFavorite1 = exports.getGetByUserQueryOptions = exports.getGetByUserQueryKey = exports.getByUser = exports.getRetrieveEndorsementsByUser1QueryOptions = exports.getRetrieveEndorsementsByUser1QueryKey = exports.retrieveEndorsementsByUser1 = exports.getRetrieve1QueryOptions = exports.getRetrieve1QueryKey = exports.retrieve1 = exports.useSendAlert = exports.getSendAlertMutationOptions = exports.sendAlert = exports.getNewsletterSubscribers1QueryOptions = exports.getNewsletterSubscribers1QueryKey = exports.newsletterSubscribers1 = exports.getNewsletterAlerts1QueryOptions = exports.getNewsletterAlerts1QueryKey = exports.newsletterAlerts1 = void 0;
exports.useEndorseUserSkill1 = exports.getEndorseUserSkill1MutationOptions = exports.endorseUserSkill1 = exports.getRetrieveSkillEndorsements1QueryOptions = exports.getRetrieveSkillEndorsements1QueryKey = exports.retrieveSkillEndorsements1 = exports.useAddUserSkills1 = exports.getAddUserSkills1MutationOptions = exports.addUserSkills1 = exports.getRetrieveUserSkillsQueryOptions = exports.getRetrieveUserSkillsQueryKey = exports.retrieveUserSkills = exports.useSendPhoneVerificationCodeCommand1 = exports.getSendPhoneVerificationCodeCommand1MutationOptions = exports.sendPhoneVerificationCodeCommand1 = exports.getSendPayedSusbscribersAlert1QueryOptions = exports.getSendPayedSusbscribersAlert1QueryKey = exports.sendPayedSusbscribersAlert1 = exports.useSearchUsers1 = exports.getSearchUsers1MutationOptions = exports.searchUsers1 = exports.useRequestActivationLink1 = exports.getRequestActivationLink1MutationOptions = exports.requestActivationLink1 = exports.useRegister1 = exports.getRegister1MutationOptions = exports.register1 = exports.getPreviewPropertyQueryOptions = exports.getPreviewPropertyQueryKey = exports.previewProperty = exports.getGetSubscribedUsers1QueryOptions = exports.getGetSubscribedUsers1QueryKey = exports.getSubscribedUsers1 = exports.getFindUserConnectionsQueryOptions = exports.getFindUserConnectionsQueryKey = exports.findUserConnections = exports.getFindList1QueryOptions = exports.getFindList1QueryKey = exports.findList1 = exports.useSave = void 0;
exports.useRetrieveAttachment1 = useRetrieveAttachment1;
exports.useGetChatAllowance1 = useGetChatAllowance1;
exports.useGetChatSummaryByUser1 = useGetChatSummaryByUser1;
exports.useRetrieveUserTicket1 = useRetrieveUserTicket1;
exports.useFindUserConnections2 = useFindUserConnections2;
exports.useFindUserContracts1 = useFindUserContracts1;
exports.useGetConversation1 = useGetConversation1;
exports.useRetrieveChatUser1 = useRetrieveChatUser1;
exports.useRetrieveChatUserStatus1 = useRetrieveChatUserStatus1;
exports.useGet2 = useGet2;
exports.useGetAllCountries2 = useGetAllCountries2;
exports.useGetCountryByIp1 = useGetCountryByIp1;
exports.useGetCurrencies1 = useGetCurrencies1;
exports.useFindExchangeRates1 = useFindExchangeRates1;
exports.useGetGeoLocationsByLatLng1 = useGetGeoLocationsByLatLng1;
exports.useGetAllLanguages1 = useGetAllLanguages1;
exports.useFind3 = useFind3;
exports.useGetLanguages1 = useGetLanguages1;
exports.useTranslateText1 = useTranslateText1;
exports.useXml1 = useXml1;
exports.useXmlRedirect1 = useXmlRedirect1;
exports.useGetFormats1 = useGetFormats1;
exports.useUploadKyeroProperties = useUploadKyeroProperties;
exports.useGetGroupMembers1 = useGetGroupMembers1;
exports.useFindArchivedGroupsByUser1 = useFindArchivedGroupsByUser1;
exports.useFindGroup1 = useFindGroup1;
exports.useFindGroupProperties1 = useFindGroupProperties1;
exports.useFindGroupsByUser1 = useFindGroupsByUser1;
exports.useFindInactiveGroupsByUser1 = useFindInactiveGroupsByUser1;
exports.useFindInvitedGroupsByUser1 = useFindInvitedGroupsByUser1;
exports.useFindRequestedGroupsByUser1 = useFindRequestedGroupsByUser1;
exports.useGetPropertyFilters = useGetPropertyFilters;
exports.useGetAllCountries = useGetAllCountries;
exports.useGetAllPropertyProposals1 = useGetAllPropertyProposals1;
exports.useFetchRandomProperties2 = useFetchRandomProperties2;
exports.useFetchRandomProperties = useFetchRandomProperties;
exports.useFindPropertiesByLocationRange1 = useFindPropertiesByLocationRange1;
exports.useFindProperty1 = useFindProperty1;
exports.useFindPropertyOldUrl1 = useFindPropertyOldUrl1;
exports.useGetDraftsProperties1 = useGetDraftsProperties1;
exports.useGetRecentProperties1 = useGetRecentProperties1;
exports.useGetSecuredProperties1 = useGetSecuredProperties1;
exports.usePreviewProperty2 = usePreviewProperty2;
exports.useGetAllPropertyTypes1 = useGetAllPropertyTypes1;
exports.useFetchPublishedTestimonials1 = useFetchPublishedTestimonials1;
exports.useFetchReceivedTestimonials1 = useFetchReceivedTestimonials1;
exports.useFindTestimonial1 = useFindTestimonial1;
exports.useFindTestimonialRequests1 = useFindTestimonialRequests1;
exports.useFindTestimonialRequestsReceived1 = useFindTestimonialRequestsReceived1;
exports.useFindPropertiesByUser1 = useFindPropertiesByUser1;
exports.useFindTestimonialsByUser1 = useFindTestimonialsByUser1;
exports.useSendEmail1 = useSendEmail1;
exports.useValidateToken1 = useValidateToken1;
exports.useAuthorize1 = useAuthorize1;
exports.useGetAll1 = useGetAll1;
exports.useGet = useGet;
exports.useGetActiveFeatures1 = useGetActiveFeatures1;
exports.useGetAlertResult1 = useGetAlertResult1;
exports.useGetByUser2 = useGetByUser2;
exports.useNewsletterAlerts1 = useNewsletterAlerts1;
exports.useNewsletterSubscribers1 = useNewsletterSubscribers1;
exports.useRetrieve1 = useRetrieve1;
exports.useRetrieveEndorsementsByUser1 = useRetrieveEndorsementsByUser1;
exports.useGetByUser = useGetByUser;
exports.useRetrieveUserSkills2 = useRetrieveUserSkills2;
exports.useGetUserTypes1 = useGetUserTypes1;
exports.useActivateUser1 = useActivateUser1;
exports.useFind = useFind;
exports.useFind1 = useFind1;
exports.useFindList1 = useFindList1;
exports.useFindUserConnections = useFindUserConnections;
exports.useGetSubscribedUsers1 = useGetSubscribedUsers1;
exports.usePreviewProperty = usePreviewProperty;
exports.useSendPayedSusbscribersAlert1 = useSendPayedSusbscribersAlert1;
exports.useRetrieveUserSkills = useRetrieveUserSkills;
exports.useRetrieveSkillEndorsements1 = useRetrieveSkillEndorsements1;
/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Hallocasa API
 * Hallocasa API Documentation
 * OpenAPI spec version: v1
 */
const react_query_1 = require("@tanstack/react-query");
const custom_instance_1 = require("../custom-instance");
/**
 * @summary Post a attachment request
 */
const createAttachment1 = (attachment, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/attachments`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: attachment,
        signal,
    });
};
exports.createAttachment1 = createAttachment1;
const getCreateAttachment1MutationOptions = (options) => {
    const mutationKey = ["createAttachment1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.createAttachment1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getCreateAttachment1MutationOptions = getCreateAttachment1MutationOptions;
/**
 * @summary Post a attachment request
 */
const useCreateAttachment1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getCreateAttachment1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useCreateAttachment1 = useCreateAttachment1;
/**
 * @summary Get details to download a file
 */
const retrieveAttachment1 = (fileId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/attachments/${fileId}`,
        method: "GET",
        signal,
    });
};
exports.retrieveAttachment1 = retrieveAttachment1;
const getRetrieveAttachment1QueryKey = (fileId) => {
    return [`/chat/attachments/${fileId}`];
};
exports.getRetrieveAttachment1QueryKey = getRetrieveAttachment1QueryKey;
const getRetrieveAttachment1QueryOptions = (fileId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getRetrieveAttachment1QueryKey)(fileId);
    const queryFn = ({ signal }) => (0, exports.retrieveAttachment1)(fileId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!fileId,
        ...queryOptions,
    };
};
exports.getRetrieveAttachment1QueryOptions = getRetrieveAttachment1QueryOptions;
/**
 * @summary Get details to download a file
 */
function useRetrieveAttachment1(fileId, options, queryClient) {
    const queryOptions = (0, exports.getRetrieveAttachment1QueryOptions)(fileId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Notify a new file has been loaded in S3
 */
const updateAttachment1 = (fileId, notifyUploadRequest, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/attachments/${fileId}/notify-upload`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: notifyUploadRequest,
        signal,
    });
};
exports.updateAttachment1 = updateAttachment1;
const getUpdateAttachment1MutationOptions = (options) => {
    const mutationKey = ["updateAttachment1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { fileId, data } = props ?? {};
        return (0, exports.updateAttachment1)(fileId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUpdateAttachment1MutationOptions = getUpdateAttachment1MutationOptions;
/**
 * @summary Notify a new file has been loaded in S3
 */
const useUpdateAttachment1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUpdateAttachment1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUpdateAttachment1 = useUpdateAttachment1;
/**
 * Retrieves the chat allowance settings between two users. User must be one of the involved parties.
 * @summary Get chat allowance for a user pair
 */
const getChatAllowance1 = (userPair, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/allowance/${userPair}`,
        method: "GET",
        signal,
    });
};
exports.getChatAllowance1 = getChatAllowance1;
const getGetChatAllowance1QueryKey = (userPair) => {
    return [`/chat/allowance/${userPair}`];
};
exports.getGetChatAllowance1QueryKey = getGetChatAllowance1QueryKey;
const getGetChatAllowance1QueryOptions = (userPair, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetChatAllowance1QueryKey)(userPair);
    const queryFn = ({ signal }) => (0, exports.getChatAllowance1)(userPair, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userPair,
        ...queryOptions,
    };
};
exports.getGetChatAllowance1QueryOptions = getGetChatAllowance1QueryOptions;
/**
 * @summary Get chat allowance for a user pair
 */
function useGetChatAllowance1(userPair, options, queryClient) {
    const queryOptions = (0, exports.getGetChatAllowance1QueryOptions)(userPair, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Updates the chat allowance settings between two users
 * @summary Update chat allowance for a user pair
 */
const updateChatAllowance1 = (userPair, chatAllowance) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/allowance/${userPair}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: chatAllowance,
    });
};
exports.updateChatAllowance1 = updateChatAllowance1;
const getUpdateChatAllowance1MutationOptions = (options) => {
    const mutationKey = ["updateChatAllowance1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userPair, data } = props ?? {};
        return (0, exports.updateChatAllowance1)(userPair, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUpdateChatAllowance1MutationOptions = getUpdateChatAllowance1MutationOptions;
/**
 * @summary Update chat allowance for a user pair
 */
const useUpdateChatAllowance1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUpdateChatAllowance1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUpdateChatAllowance1 = useUpdateChatAllowance1;
/**
 * Retrieves summaries of all chat conversations for a user
 * @summary Get the user chat summaries
 */
const getChatSummaryByUser1 = (userId, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/user_summary/${userId}`,
        method: "GET",
        params,
        signal,
    });
};
exports.getChatSummaryByUser1 = getChatSummaryByUser1;
const getGetChatSummaryByUser1QueryKey = (userId, params) => {
    return [`/chat/user_summary/${userId}`, ...(params ? [params] : [])];
};
exports.getGetChatSummaryByUser1QueryKey = getGetChatSummaryByUser1QueryKey;
const getGetChatSummaryByUser1QueryOptions = (userId, params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetChatSummaryByUser1QueryKey)(userId, params);
    const queryFn = ({ signal }) => (0, exports.getChatSummaryByUser1)(userId, params, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getGetChatSummaryByUser1QueryOptions = getGetChatSummaryByUser1QueryOptions;
/**
 * @summary Get the user chat summaries
 */
function useGetChatSummaryByUser1(userId, params, options, queryClient) {
    const queryOptions = (0, exports.getGetChatSummaryByUser1QueryOptions)(userId, params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Creates and returns a chat ticket that can be used to establish a chat connection
 * @summary Retrieve a chat ticket for the authenticated user
 */
const retrieveUserTicket1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/ticket`,
        method: "GET",
        signal,
    });
};
exports.retrieveUserTicket1 = retrieveUserTicket1;
const getRetrieveUserTicket1QueryKey = () => {
    return [`/chat/ticket`];
};
exports.getRetrieveUserTicket1QueryKey = getRetrieveUserTicket1QueryKey;
const getRetrieveUserTicket1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getRetrieveUserTicket1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.retrieveUserTicket1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getRetrieveUserTicket1QueryOptions = getRetrieveUserTicket1QueryOptions;
/**
 * @summary Retrieve a chat ticket for the authenticated user
 */
function useRetrieveUserTicket1(options, queryClient) {
    const queryOptions = (0, exports.getRetrieveUserTicket1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get a user connections
 */
const findUserConnections2 = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/users/${userId}/connections`,
        method: "GET",
        signal,
    });
};
exports.findUserConnections2 = findUserConnections2;
const getFindUserConnections2QueryKey = (userId) => {
    return [`/chat/users/${userId}/connections`];
};
exports.getFindUserConnections2QueryKey = getFindUserConnections2QueryKey;
const getFindUserConnections2QueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindUserConnections2QueryKey)(userId);
    const queryFn = ({ signal }) => (0, exports.findUserConnections2)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getFindUserConnections2QueryOptions = getFindUserConnections2QueryOptions;
/**
 * @summary Get a user connections
 */
function useFindUserConnections2(userId, options, queryClient) {
    const queryOptions = (0, exports.getFindUserConnections2QueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get a user Contracts
 */
const findUserContracts1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/contract`,
        method: "GET",
        signal,
    });
};
exports.findUserContracts1 = findUserContracts1;
const getFindUserContracts1QueryKey = () => {
    return [`/contract`];
};
exports.getFindUserContracts1QueryKey = getFindUserContracts1QueryKey;
const getFindUserContracts1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindUserContracts1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.findUserContracts1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindUserContracts1QueryOptions = getFindUserContracts1QueryOptions;
/**
 * @summary Get a user Contracts
 */
function useFindUserContracts1(options, queryClient) {
    const queryOptions = (0, exports.getFindUserContracts1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Save a user Contract
 */
const save2 = (contract, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/contract`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: contract,
        signal,
    });
};
exports.save2 = save2;
const getSave2MutationOptions = (options) => {
    const mutationKey = ["save2"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.save2)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSave2MutationOptions = getSave2MutationOptions;
/**
 * @summary Save a user Contract
 */
const useSave2 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSave2MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSave2 = useSave2;
/**
 * @summary Get a message by conversation
 */
const getConversation1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/messages`,
        method: "GET",
        params,
        signal,
    });
};
exports.getConversation1 = getConversation1;
const getGetConversation1QueryKey = (params) => {
    return [`/chat/messages`, ...(params ? [params] : [])];
};
exports.getGetConversation1QueryKey = getGetConversation1QueryKey;
const getGetConversation1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetConversation1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.getConversation1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetConversation1QueryOptions = getGetConversation1QueryOptions;
/**
 * @summary Get a message by conversation
 */
function useGetConversation1(params, options, queryClient) {
    const queryOptions = (0, exports.getGetConversation1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Post a message
 */
const sendMessage1 = (message, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/messages`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: message,
        signal,
    });
};
exports.sendMessage1 = sendMessage1;
const getSendMessage1MutationOptions = (options) => {
    const mutationKey = ["sendMessage1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.sendMessage1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSendMessage1MutationOptions = getSendMessage1MutationOptions;
/**
 * @summary Post a message
 */
const useSendMessage1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSendMessage1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSendMessage1 = useSendMessage1;
/**
 * Retrieves notifications for a specific user and notification type. Designed for autopilot integration.
 * @summary Get user notifications by type
 */
const getByUserWithResult1 = (type, autopilotUser, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/notifications/${type}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: autopilotUser,
        params,
        signal,
    });
};
exports.getByUserWithResult1 = getByUserWithResult1;
const getGetByUserWithResult1MutationOptions = (options) => {
    const mutationKey = ["getByUserWithResult1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { type, data, params } = props ?? {};
        return (0, exports.getByUserWithResult1)(type, data, params);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getGetByUserWithResult1MutationOptions = getGetByUserWithResult1MutationOptions;
/**
 * @summary Get user notifications by type
 */
const useGetByUserWithResult1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getGetByUserWithResult1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useGetByUserWithResult1 = useGetByUserWithResult1;
/**
 * @summary Retrieve a user chat
 */
const retrieveChatUser1 = (id, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/user/${id}`,
        method: "GET",
        signal,
    });
};
exports.retrieveChatUser1 = retrieveChatUser1;
const getRetrieveChatUser1QueryKey = (id) => {
    return [`/chat/user/${id}`];
};
exports.getRetrieveChatUser1QueryKey = getRetrieveChatUser1QueryKey;
const getRetrieveChatUser1QueryOptions = (id, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getRetrieveChatUser1QueryKey)(id);
    const queryFn = ({ signal }) => (0, exports.retrieveChatUser1)(id, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!id,
        ...queryOptions,
    };
};
exports.getRetrieveChatUser1QueryOptions = getRetrieveChatUser1QueryOptions;
/**
 * @summary Retrieve a user chat
 */
function useRetrieveChatUser1(id, options, queryClient) {
    const queryOptions = (0, exports.getRetrieveChatUser1QueryOptions)(id, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Retrieve a user chat status
 */
const retrieveChatUserStatus1 = (id, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/chat/user/${id}/status`,
        method: "GET",
        signal,
    });
};
exports.retrieveChatUserStatus1 = retrieveChatUserStatus1;
const getRetrieveChatUserStatus1QueryKey = (id) => {
    return [`/chat/user/${id}/status`];
};
exports.getRetrieveChatUserStatus1QueryKey = getRetrieveChatUserStatus1QueryKey;
const getRetrieveChatUserStatus1QueryOptions = (id, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getRetrieveChatUserStatus1QueryKey)(id);
    const queryFn = ({ signal }) => (0, exports.retrieveChatUserStatus1)(id, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!id,
        ...queryOptions,
    };
};
exports.getRetrieveChatUserStatus1QueryOptions = getRetrieveChatUserStatus1QueryOptions;
/**
 * @summary Retrieve a user chat status
 */
function useRetrieveChatUserStatus1(id, options, queryClient) {
    const queryOptions = (0, exports.getRetrieveChatUserStatus1QueryOptions)(id, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves a list of all available country phone prefixes with their details
 * @summary Returns all country-phone-prefixes list
 */
const get2 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/country-phone-prefixes`,
        method: "GET",
        signal,
    });
};
exports.get2 = get2;
const getGet2QueryKey = () => {
    return [`/country-phone-prefixes`];
};
exports.getGet2QueryKey = getGet2QueryKey;
const getGet2QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGet2QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.get2)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGet2QueryOptions = getGet2QueryOptions;
/**
 * @summary Returns all country-phone-prefixes list
 */
function useGet2(options, queryClient) {
    const queryOptions = (0, exports.getGet2QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Method to find all the countries
 */
const getAllCountries2 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/countries`,
        method: "GET",
        signal,
    });
};
exports.getAllCountries2 = getAllCountries2;
const getGetAllCountries2QueryKey = () => {
    return [`/countries`];
};
exports.getGetAllCountries2QueryKey = getGetAllCountries2QueryKey;
const getGetAllCountries2QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetAllCountries2QueryKey)();
    const queryFn = ({ signal }) => (0, exports.getAllCountries2)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetAllCountries2QueryOptions = getGetAllCountries2QueryOptions;
/**
 * @summary Method to find all the countries
 */
function useGetAllCountries2(options, queryClient) {
    const queryOptions = (0, exports.getGetAllCountries2QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Method to find a country by the caller IP
 */
const getCountryByIp1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/countries/current`,
        method: "GET",
        signal,
    });
};
exports.getCountryByIp1 = getCountryByIp1;
const getGetCountryByIp1QueryKey = () => {
    return [`/countries/current`];
};
exports.getGetCountryByIp1QueryKey = getGetCountryByIp1QueryKey;
const getGetCountryByIp1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetCountryByIp1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.getCountryByIp1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetCountryByIp1QueryOptions = getGetCountryByIp1QueryOptions;
/**
 * @summary Method to find a country by the caller IP
 */
function useGetCountryByIp1(options, queryClient) {
    const queryOptions = (0, exports.getGetCountryByIp1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Retrieves the list of all exchange available in application
 */
const getCurrencies1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/currencies`,
        method: "GET",
        signal,
    });
};
exports.getCurrencies1 = getCurrencies1;
const getGetCurrencies1QueryKey = () => {
    return [`/currencies`];
};
exports.getGetCurrencies1QueryKey = getGetCurrencies1QueryKey;
const getGetCurrencies1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetCurrencies1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.getCurrencies1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetCurrencies1QueryOptions = getGetCurrencies1QueryOptions;
/**
 * @summary Retrieves the list of all exchange available in application
 */
function useGetCurrencies1(options, queryClient) {
    const queryOptions = (0, exports.getGetCurrencies1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Returns a map of currency exchange rates between different currencies
 * @summary Method to find all the exchange rates
 */
const findExchangeRates1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/exchange-rates`,
        method: "GET",
        signal,
    });
};
exports.findExchangeRates1 = findExchangeRates1;
const getFindExchangeRates1QueryKey = () => {
    return [`/exchange-rates`];
};
exports.getFindExchangeRates1QueryKey = getFindExchangeRates1QueryKey;
const getFindExchangeRates1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindExchangeRates1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.findExchangeRates1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindExchangeRates1QueryOptions = getFindExchangeRates1QueryOptions;
/**
 * @summary Method to find all the exchange rates
 */
function useFindExchangeRates1(options, queryClient) {
    const queryOptions = (0, exports.getFindExchangeRates1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves geolocation information based on various search criteria including coordinates, address text, or auto-complete suggestions
 * @summary Retrieves geolocation information
 */
const getGeoLocationsByLatLng1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/geo-locations`,
        method: "GET",
        params,
        signal,
    });
};
exports.getGeoLocationsByLatLng1 = getGeoLocationsByLatLng1;
const getGetGeoLocationsByLatLng1QueryKey = (params) => {
    return [`/geo-locations`, ...(params ? [params] : [])];
};
exports.getGetGeoLocationsByLatLng1QueryKey = getGetGeoLocationsByLatLng1QueryKey;
const getGetGeoLocationsByLatLng1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetGeoLocationsByLatLng1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.getGeoLocationsByLatLng1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetGeoLocationsByLatLng1QueryOptions = getGetGeoLocationsByLatLng1QueryOptions;
/**
 * @summary Retrieves geolocation information
 */
function useGetGeoLocationsByLatLng1(params, options, queryClient) {
    const queryOptions = (0, exports.getGetGeoLocationsByLatLng1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Returns a list of all supported languages in the system
 * @summary Get all available languages
 */
const getAllLanguages1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/languages`,
        method: "GET",
        signal,
    });
};
exports.getAllLanguages1 = getAllLanguages1;
const getGetAllLanguages1QueryKey = () => {
    return [`/languages`];
};
exports.getGetAllLanguages1QueryKey = getGetAllLanguages1QueryKey;
const getGetAllLanguages1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetAllLanguages1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.getAllLanguages1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetAllLanguages1QueryOptions = getGetAllLanguages1QueryOptions;
/**
 * @summary Get all available languages
 */
function useGetAllLanguages1(options, queryClient) {
    const queryOptions = (0, exports.getGetAllLanguages1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Removes a locale entry identified by its pnemonic code along with all its translations
 * @summary Delete a locale entry with all translations related
 */
const delete1 = (pnemonic) => {
    return (0, custom_instance_1.customInstance)({
        url: `/locales/${pnemonic}`,
        method: "DELETE",
    });
};
exports.delete1 = delete1;
const getDelete1MutationOptions = (options) => {
    const mutationKey = ["delete1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { pnemonic } = props ?? {};
        return (0, exports.delete1)(pnemonic);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getDelete1MutationOptions = getDelete1MutationOptions;
/**
 * @summary Delete a locale entry with all translations related
 */
const useDelete1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getDelete1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useDelete1 = useDelete1;
/**
 * Retrieves the complete list of available locales in the system
 * @summary Returns all language list locale entries
 */
const find3 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/locales`,
        method: "GET",
        signal,
    });
};
exports.find3 = find3;
const getFind3QueryKey = () => {
    return [`/locales`];
};
exports.getFind3QueryKey = getFind3QueryKey;
const getFind3QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFind3QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.find3)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFind3QueryOptions = getFind3QueryOptions;
/**
 * @summary Returns all language list locale entries
 */
function useFind3(options, queryClient) {
    const queryOptions = (0, exports.getFind3QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves the locale translations in the specified language
 * @summary Returns locale language list
 */
const getLanguages1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/locales/translations`,
        method: "GET",
        params,
        signal,
    });
};
exports.getLanguages1 = getLanguages1;
const getGetLanguages1QueryKey = (params) => {
    return [`/locales/translations`, ...(params ? [params] : [])];
};
exports.getGetLanguages1QueryKey = getGetLanguages1QueryKey;
const getGetLanguages1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetLanguages1QueryKey)(params);
    const queryFn = ({ signal, }) => (0, exports.getLanguages1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetLanguages1QueryOptions = getGetLanguages1QueryOptions;
/**
 * @summary Returns locale language list
 */
function useGetLanguages1(params, options, queryClient) {
    const queryOptions = (0, exports.getGetLanguages1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Translate the provided text to the specified target language
 * @summary Get text translation to a target language
 */
const translateText1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/text-translations`,
        method: "GET",
        params,
        signal,
    });
};
exports.translateText1 = translateText1;
const getTranslateText1QueryKey = (params) => {
    return [`/text-translations`, ...(params ? [params] : [])];
};
exports.getTranslateText1QueryKey = getTranslateText1QueryKey;
const getTranslateText1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getTranslateText1QueryKey)(params);
    const queryFn = ({ signal, }) => (0, exports.translateText1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getTranslateText1QueryOptions = getTranslateText1QueryOptions;
/**
 * @summary Get text translation to a target language
 */
function useTranslateText1(params, options, queryClient) {
    const queryOptions = (0, exports.getTranslateText1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Initiates the process to export all property data in Kyero format to S3 storage. Requires admin privileges.
 * @summary Manually trigger Kyero exports to S3
 */
const triggerKyeroExport1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-download/trigger-kyero-export`,
        method: "POST",
        signal,
    });
};
exports.triggerKyeroExport1 = triggerKyeroExport1;
const getTriggerKyeroExport1MutationOptions = (options) => {
    const mutationKey = ["triggerKyeroExport1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = () => {
        return (0, exports.triggerKyeroExport1)();
    };
    return { mutationFn, ...mutationOptions };
};
exports.getTriggerKyeroExport1MutationOptions = getTriggerKyeroExport1MutationOptions;
/**
 * @summary Manually trigger Kyero exports to S3
 */
const useTriggerKyeroExport1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getTriggerKyeroExport1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useTriggerKyeroExport1 = useTriggerKyeroExport1;
/**
 * Generates and returns property data in XML format for a specific user and format type.
 * @summary Get property XML for specific user
 */
const xml1 = (userId, xmlFormat, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-download/${userId}/${xmlFormat}.xml`,
        method: "GET",
        signal,
    });
};
exports.xml1 = xml1;
const getXml1QueryKey = (userId, xmlFormat) => {
    return [`/property-bulk-download/${userId}/${xmlFormat}.xml`];
};
exports.getXml1QueryKey = getXml1QueryKey;
const getXml1QueryOptions = (userId, xmlFormat, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getXml1QueryKey)(userId, xmlFormat);
    const queryFn = ({ signal, }) => (0, exports.xml1)(userId, xmlFormat, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && xmlFormat),
        ...queryOptions,
    };
};
exports.getXml1QueryOptions = getXml1QueryOptions;
/**
 * @summary Get property XML for specific user
 */
function useXml1(userId, xmlFormat, options, queryClient) {
    const queryOptions = (0, exports.getXml1QueryOptions)(userId, xmlFormat, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Redirects to the XML file stored in S3 for a specific user and format. This endpoint is deprecated.
 * @deprecated
 * @summary Redirect to XML file (Deprecated)
 */
const xmlRedirect1 = (userId, xmlFormat, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-download/${userId}/${xmlFormat}.xml.redirect`,
        method: "GET",
        signal,
    });
};
exports.xmlRedirect1 = xmlRedirect1;
const getXmlRedirect1QueryKey = (userId, xmlFormat) => {
    return [
        `/property-bulk-download/${userId}/${xmlFormat}.xml.redirect`,
    ];
};
exports.getXmlRedirect1QueryKey = getXmlRedirect1QueryKey;
const getXmlRedirect1QueryOptions = (userId, xmlFormat, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getXmlRedirect1QueryKey)(userId, xmlFormat);
    const queryFn = ({ signal, }) => (0, exports.xmlRedirect1)(userId, xmlFormat, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && xmlFormat),
        ...queryOptions,
    };
};
exports.getXmlRedirect1QueryOptions = getXmlRedirect1QueryOptions;
/**
 * @deprecated
 * @summary Redirect to XML file (Deprecated)
 */
function useXmlRedirect1(userId, xmlFormat, options, queryClient) {
    const queryOptions = (0, exports.getXmlRedirect1QueryOptions)(userId, xmlFormat, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Get the list of supported file formats for bulk upload
 * @summary Get available formats
 */
const getFormats1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-uploads/formats`,
        method: "GET",
        signal,
    });
};
exports.getFormats1 = getFormats1;
const getGetFormats1QueryKey = () => {
    return [`/property-bulk-uploads/formats`];
};
exports.getGetFormats1QueryKey = getGetFormats1QueryKey;
const getGetFormats1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetFormats1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.getFormats1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetFormats1QueryOptions = getGetFormats1QueryOptions;
/**
 * @summary Get available formats
 */
function useGetFormats1(options, queryClient) {
    const queryOptions = (0, exports.getGetFormats1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Upload properties using Kyero format with XML content in the request body
 * @summary Upload Kyero properties with XML in request body
 */
const uploadKyeroProperties2 = (uploadKyeroProperties2Body, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-uploads/in-body`,
        method: "POST",
        headers: { "Content-Type": "application/xml" },
        data: uploadKyeroProperties2Body,
        signal,
    });
};
exports.uploadKyeroProperties2 = uploadKyeroProperties2;
const getUploadKyeroProperties2MutationOptions = (options) => {
    const mutationKey = ["uploadKyeroProperties2"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.uploadKyeroProperties2)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUploadKyeroProperties2MutationOptions = getUploadKyeroProperties2MutationOptions;
/**
 * @summary Upload Kyero properties with XML in request body
 */
const useUploadKyeroProperties2 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUploadKyeroProperties2MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUploadKyeroProperties2 = useUploadKyeroProperties2;
/**
 * Upload properties in Kyero format by providing a URL to an XML file
 * @summary Upload Kyero properties from URL
 */
const uploadKyeroPropertiesFromUrl1 = (xmlUrl, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-uploads/in-url`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: xmlUrl,
        signal,
    });
};
exports.uploadKyeroPropertiesFromUrl1 = uploadKyeroPropertiesFromUrl1;
const getUploadKyeroPropertiesFromUrl1MutationOptions = (options) => {
    const mutationKey = ["uploadKyeroPropertiesFromUrl1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.uploadKyeroPropertiesFromUrl1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUploadKyeroPropertiesFromUrl1MutationOptions = getUploadKyeroPropertiesFromUrl1MutationOptions;
/**
 * @summary Upload Kyero properties from URL
 */
const useUploadKyeroPropertiesFromUrl1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUploadKyeroPropertiesFromUrl1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUploadKyeroPropertiesFromUrl1 = useUploadKyeroPropertiesFromUrl1;
/**
 * Upload properties with XML content in the request body using the specified format
 * @summary Upload properties in specified format with XML in request body
 */
const uploadProperties1 = (format, uploadProperties1Body, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-uploads/${format}/in-body`,
        method: "POST",
        headers: { "Content-Type": "application/xml" },
        data: uploadProperties1Body,
        signal,
    });
};
exports.uploadProperties1 = uploadProperties1;
const getUploadProperties1MutationOptions = (options) => {
    const mutationKey = ["uploadProperties1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { format, data } = props ?? {};
        return (0, exports.uploadProperties1)(format, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUploadProperties1MutationOptions = getUploadProperties1MutationOptions;
/**
 * @summary Upload properties in specified format with XML in request body
 */
const useUploadProperties1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUploadProperties1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUploadProperties1 = useUploadProperties1;
/**
 * Upload properties in the specified format by providing a URL to an XML file
 * @summary Upload properties in specified format from URL
 */
const uploadPropertiesFromUrl1 = (format, xmlUrl, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-bulk-uploads/${format}/in-url`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: xmlUrl,
        signal,
    });
};
exports.uploadPropertiesFromUrl1 = uploadPropertiesFromUrl1;
const getUploadPropertiesFromUrl1MutationOptions = (options) => {
    const mutationKey = ["uploadPropertiesFromUrl1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { format, data } = props ?? {};
        return (0, exports.uploadPropertiesFromUrl1)(format, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUploadPropertiesFromUrl1MutationOptions = getUploadPropertiesFromUrl1MutationOptions;
/**
 * @summary Upload properties in specified format from URL
 */
const useUploadPropertiesFromUrl1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUploadPropertiesFromUrl1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUploadPropertiesFromUrl1 = useUploadPropertiesFromUrl1;
/**
 * Exports property data to Facebook Marketplace format within the specified date range
 * @summary Export properties to Facebook Marketplace
 */
const uploadKyeroProperties = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/facebook-properties`,
        method: "GET",
        params,
        signal,
    });
};
exports.uploadKyeroProperties = uploadKyeroProperties;
const getUploadKyeroPropertiesQueryKey = (params) => {
    return [`/facebook-properties`, ...(params ? [params] : [])];
};
exports.getUploadKyeroPropertiesQueryKey = getUploadKyeroPropertiesQueryKey;
const getUploadKyeroPropertiesQueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getUploadKyeroPropertiesQueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.uploadKyeroProperties)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getUploadKyeroPropertiesQueryOptions = getUploadKyeroPropertiesQueryOptions;
/**
 * @summary Export properties to Facebook Marketplace
 */
function useUploadKyeroProperties(params, options, queryClient) {
    const queryOptions = (0, exports.getUploadKyeroPropertiesQueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * For Group Owners, this list will return removed, left, invited and requested members as well
 * @summary Show all members of Group
 */
const getGroupMembers1 = (groupId, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/members`,
        method: "GET",
        params,
        signal,
    });
};
exports.getGroupMembers1 = getGroupMembers1;
const getGetGroupMembers1QueryKey = (groupId, params) => {
    return [`/groups/${groupId}/members`, ...(params ? [params] : [])];
};
exports.getGetGroupMembers1QueryKey = getGetGroupMembers1QueryKey;
const getGetGroupMembers1QueryOptions = (groupId, params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetGroupMembers1QueryKey)(groupId, params);
    const queryFn = ({ signal }) => (0, exports.getGroupMembers1)(groupId, params, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!groupId,
        ...queryOptions,
    };
};
exports.getGetGroupMembers1QueryOptions = getGetGroupMembers1QueryOptions;
/**
 * @summary Show all members of Group
 */
function useGetGroupMembers1(groupId, params, options, queryClient) {
    const queryOptions = (0, exports.getGetGroupMembers1QueryOptions)(groupId, params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Accept Group Invitation
 */
const groupInvite2 = (groupId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/accept-invite`,
        method: "POST",
        signal,
    });
};
exports.groupInvite2 = groupInvite2;
const getGroupInvite2MutationOptions = (options) => {
    const mutationKey = ["groupInvite2"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { groupId } = props ?? {};
        return (0, exports.groupInvite2)(groupId);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getGroupInvite2MutationOptions = getGroupInvite2MutationOptions;
/**
 * @summary Accept Group Invitation
 */
const useGroupInvite2 = (options, queryClient) => {
    const mutationOptions = (0, exports.getGroupInvite2MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useGroupInvite2 = useGroupInvite2;
/**
 * @summary Request Invitation to Group
 */
const groupInvite = (groupId, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/invite`,
        method: "POST",
        params,
        signal,
    });
};
exports.groupInvite = groupInvite;
const getGroupInviteMutationOptions = (options) => {
    const mutationKey = ["groupInvite"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { groupId, params } = props ?? {};
        return (0, exports.groupInvite)(groupId, params);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getGroupInviteMutationOptions = getGroupInviteMutationOptions;
/**
 * @summary Request Invitation to Group
 */
const useGroupInvite = (options, queryClient) => {
    const mutationOptions = (0, exports.getGroupInviteMutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useGroupInvite = useGroupInvite;
/**
 * @summary Leave Group
 */
const groupLeave1 = (groupId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/leave`,
        method: "POST",
        signal,
    });
};
exports.groupLeave1 = groupLeave1;
const getGroupLeave1MutationOptions = (options) => {
    const mutationKey = ["groupLeave1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { groupId } = props ?? {};
        return (0, exports.groupLeave1)(groupId);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getGroupLeave1MutationOptions = getGroupLeave1MutationOptions;
/**
 * @summary Leave Group
 */
const useGroupLeave1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getGroupLeave1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useGroupLeave1 = useGroupLeave1;
/**
 * @summary Request Admission to Group
 */
const groupRequest1 = (groupId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/request`,
        method: "POST",
        signal,
    });
};
exports.groupRequest1 = groupRequest1;
const getGroupRequest1MutationOptions = (options) => {
    const mutationKey = ["groupRequest1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { groupId } = props ?? {};
        return (0, exports.groupRequest1)(groupId);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getGroupRequest1MutationOptions = getGroupRequest1MutationOptions;
/**
 * @summary Request Admission to Group
 */
const useGroupRequest1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getGroupRequest1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useGroupRequest1 = useGroupRequest1;
/**
 * Acceptable Status values are:  ACCEPTED, REJECTED, REMOVED
 * @summary Update the group member status from groupId supplied
 */
const updateGroupMembershipStatus1 = (groupId, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/member-status`,
        method: "POST",
        params,
        signal,
    });
};
exports.updateGroupMembershipStatus1 = updateGroupMembershipStatus1;
const getUpdateGroupMembershipStatus1MutationOptions = (options) => {
    const mutationKey = ["updateGroupMembershipStatus1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { groupId, params } = props ?? {};
        return (0, exports.updateGroupMembershipStatus1)(groupId, params);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUpdateGroupMembershipStatus1MutationOptions = getUpdateGroupMembershipStatus1MutationOptions;
/**
 * @summary Update the group member status from groupId supplied
 */
const useUpdateGroupMembershipStatus1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUpdateGroupMembershipStatus1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUpdateGroupMembershipStatus1 = useUpdateGroupMembershipStatus1;
/**
 * This process is reversible
 * @summary Archive the group with id supplied
 */
const archiveGroup1 = (id, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${id}/archive`,
        method: "POST",
        signal,
    });
};
exports.archiveGroup1 = archiveGroup1;
const getArchiveGroup1MutationOptions = (options) => {
    const mutationKey = ["archiveGroup1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { id } = props ?? {};
        return (0, exports.archiveGroup1)(id);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getArchiveGroup1MutationOptions = getArchiveGroup1MutationOptions;
/**
 * @summary Archive the group with id supplied
 */
const useArchiveGroup1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getArchiveGroup1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useArchiveGroup1 = useArchiveGroup1;
/**
 * This process is reversible
 * @summary Deactivate the group with id supplied
 */
const deactivateGroup1 = (id, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${id}/deactivate`,
        method: "POST",
        signal,
    });
};
exports.deactivateGroup1 = deactivateGroup1;
const getDeactivateGroup1MutationOptions = (options) => {
    const mutationKey = ["deactivateGroup1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { id } = props ?? {};
        return (0, exports.deactivateGroup1)(id);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getDeactivateGroup1MutationOptions = getDeactivateGroup1MutationOptions;
/**
 * @summary Deactivate the group with id supplied
 */
const useDeactivateGroup1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getDeactivateGroup1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useDeactivateGroup1 = useDeactivateGroup1;
/**
 * This process is not reversible
 * @summary Delete the group with id supplied
 */
const deleteGroup1 = (id) => {
    return (0, custom_instance_1.customInstance)({ url: `/groups/${id}`, method: "DELETE" });
};
exports.deleteGroup1 = deleteGroup1;
const getDeleteGroup1MutationOptions = (options) => {
    const mutationKey = ["deleteGroup1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { id } = props ?? {};
        return (0, exports.deleteGroup1)(id);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getDeleteGroup1MutationOptions = getDeleteGroup1MutationOptions;
/**
 * @summary Delete the group with id supplied
 */
const useDeleteGroup1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getDeleteGroup1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useDeleteGroup1 = useDeleteGroup1;
/**
 * @summary Return the groups list with specified user id that user has archived
 */
const findArchivedGroupsByUser1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/archived`,
        method: "GET",
        params,
        signal,
    });
};
exports.findArchivedGroupsByUser1 = findArchivedGroupsByUser1;
const getFindArchivedGroupsByUser1QueryKey = (params) => {
    return [`/groups/archived`, ...(params ? [params] : [])];
};
exports.getFindArchivedGroupsByUser1QueryKey = getFindArchivedGroupsByUser1QueryKey;
const getFindArchivedGroupsByUser1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindArchivedGroupsByUser1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.findArchivedGroupsByUser1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindArchivedGroupsByUser1QueryOptions = getFindArchivedGroupsByUser1QueryOptions;
/**
 * @summary Return the groups list with specified user id that user has archived
 */
function useFindArchivedGroupsByUser1(params, options, queryClient) {
    const queryOptions = (0, exports.getFindArchivedGroupsByUser1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
 * @summary Return the group with specified id
 */
const findGroup1 = (groupId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}`,
        method: "GET",
        signal,
    });
};
exports.findGroup1 = findGroup1;
const getFindGroup1QueryKey = (groupId) => {
    return [`/groups/${groupId}`];
};
exports.getFindGroup1QueryKey = getFindGroup1QueryKey;
const getFindGroup1QueryOptions = (groupId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindGroup1QueryKey)(groupId);
    const queryFn = ({ signal, }) => (0, exports.findGroup1)(groupId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!groupId,
        ...queryOptions,
    };
};
exports.getFindGroup1QueryOptions = getFindGroup1QueryOptions;
/**
 * @summary Return the group with specified id
 */
function useFindGroup1(groupId, options, queryClient) {
    const queryOptions = (0, exports.getFindGroup1QueryOptions)(groupId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
 * @summary Return the group with specified id
 */
const findGroupProperties1 = (groupId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/properties`,
        method: "GET",
        signal,
    });
};
exports.findGroupProperties1 = findGroupProperties1;
const getFindGroupProperties1QueryKey = (groupId) => {
    return [`/groups/${groupId}/properties`];
};
exports.getFindGroupProperties1QueryKey = getFindGroupProperties1QueryKey;
const getFindGroupProperties1QueryOptions = (groupId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindGroupProperties1QueryKey)(groupId);
    const queryFn = ({ signal }) => (0, exports.findGroupProperties1)(groupId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!groupId,
        ...queryOptions,
    };
};
exports.getFindGroupProperties1QueryOptions = getFindGroupProperties1QueryOptions;
/**
 * @summary Return the group with specified id
 */
function useFindGroupProperties1(groupId, options, queryClient) {
    const queryOptions = (0, exports.getFindGroupProperties1QueryOptions)(groupId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
 * @summary Return the group with specified id
 */
const findGroupPropertiesSearch1 = (groupId, propertyFilterCriteria, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/properties/search`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: propertyFilterCriteria,
        signal,
    });
};
exports.findGroupPropertiesSearch1 = findGroupPropertiesSearch1;
const getFindGroupPropertiesSearch1MutationOptions = (options) => {
    const mutationKey = ["findGroupPropertiesSearch1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { groupId, data } = props ?? {};
        return (0, exports.findGroupPropertiesSearch1)(groupId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getFindGroupPropertiesSearch1MutationOptions = getFindGroupPropertiesSearch1MutationOptions;
/**
 * @summary Return the group with specified id
 */
const useFindGroupPropertiesSearch1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getFindGroupPropertiesSearch1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useFindGroupPropertiesSearch1 = useFindGroupPropertiesSearch1;
/**
 * This will return both owned Groups and Groups the user is a member of
 * @summary Return the groups list with specified user id
 */
const findGroupsByUser1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups`,
        method: "GET",
        params,
        signal,
    });
};
exports.findGroupsByUser1 = findGroupsByUser1;
const getFindGroupsByUser1QueryKey = (params) => {
    return [`/groups`, ...(params ? [params] : [])];
};
exports.getFindGroupsByUser1QueryKey = getFindGroupsByUser1QueryKey;
const getFindGroupsByUser1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindGroupsByUser1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.findGroupsByUser1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindGroupsByUser1QueryOptions = getFindGroupsByUser1QueryOptions;
/**
 * @summary Return the groups list with specified user id
 */
function useFindGroupsByUser1(params, options, queryClient) {
    const queryOptions = (0, exports.getFindGroupsByUser1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Consider that only user can saveNew its groups
 * @summary Create or update the group supplied
 */
const saveGroup1 = (group, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: group,
        signal,
    });
};
exports.saveGroup1 = saveGroup1;
const getSaveGroup1MutationOptions = (options) => {
    const mutationKey = ["saveGroup1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.saveGroup1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSaveGroup1MutationOptions = getSaveGroup1MutationOptions;
/**
 * @summary Create or update the group supplied
 */
const useSaveGroup1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSaveGroup1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSaveGroup1 = useSaveGroup1;
/**
 * @summary Return the groups list with specified user id that are inactive
 */
const findInactiveGroupsByUser1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/inactive`,
        method: "GET",
        params,
        signal,
    });
};
exports.findInactiveGroupsByUser1 = findInactiveGroupsByUser1;
const getFindInactiveGroupsByUser1QueryKey = (params) => {
    return [`/groups/inactive`, ...(params ? [params] : [])];
};
exports.getFindInactiveGroupsByUser1QueryKey = getFindInactiveGroupsByUser1QueryKey;
const getFindInactiveGroupsByUser1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindInactiveGroupsByUser1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.findInactiveGroupsByUser1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindInactiveGroupsByUser1QueryOptions = getFindInactiveGroupsByUser1QueryOptions;
/**
 * @summary Return the groups list with specified user id that are inactive
 */
function useFindInactiveGroupsByUser1(params, options, queryClient) {
    const queryOptions = (0, exports.getFindInactiveGroupsByUser1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Return the groups list with specified user id that user has invitations of
 */
const findInvitedGroupsByUser1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/invited`,
        method: "GET",
        params,
        signal,
    });
};
exports.findInvitedGroupsByUser1 = findInvitedGroupsByUser1;
const getFindInvitedGroupsByUser1QueryKey = (params) => {
    return [`/groups/invited`, ...(params ? [params] : [])];
};
exports.getFindInvitedGroupsByUser1QueryKey = getFindInvitedGroupsByUser1QueryKey;
const getFindInvitedGroupsByUser1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindInvitedGroupsByUser1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.findInvitedGroupsByUser1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindInvitedGroupsByUser1QueryOptions = getFindInvitedGroupsByUser1QueryOptions;
/**
 * @summary Return the groups list with specified user id that user has invitations of
 */
function useFindInvitedGroupsByUser1(params, options, queryClient) {
    const queryOptions = (0, exports.getFindInvitedGroupsByUser1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Return the groups list with specified user id that user has requested
 */
const findRequestedGroupsByUser1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/requested`,
        method: "GET",
        params,
        signal,
    });
};
exports.findRequestedGroupsByUser1 = findRequestedGroupsByUser1;
const getFindRequestedGroupsByUser1QueryKey = (params) => {
    return [`/groups/requested`, ...(params ? [params] : [])];
};
exports.getFindRequestedGroupsByUser1QueryKey = getFindRequestedGroupsByUser1QueryKey;
const getFindRequestedGroupsByUser1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindRequestedGroupsByUser1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.findRequestedGroupsByUser1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindRequestedGroupsByUser1QueryOptions = getFindRequestedGroupsByUser1QueryOptions;
/**
 * @summary Return the groups list with specified user id that user has requested
 */
function useFindRequestedGroupsByUser1(params, options, queryClient) {
    const queryOptions = (0, exports.getFindRequestedGroupsByUser1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves the list of property fields that will be showed when selecting the type, proposal, location, and country specified. All the property keys are required, otherwise system generate a bad request, because without all the parameters, it is not posible filter the property fields
 * @summary Retrieves property fields filtered by key
 */
const getPropertyFilters2 = (propertyKey, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-fields/filter-by-key`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: propertyKey,
        signal,
    });
};
exports.getPropertyFilters2 = getPropertyFilters2;
const getGetPropertyFilters2MutationOptions = (options) => {
    const mutationKey = ["getPropertyFilters2"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.getPropertyFilters2)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getGetPropertyFilters2MutationOptions = getGetPropertyFilters2MutationOptions;
/**
 * @summary Retrieves property fields filtered by key
 */
const useGetPropertyFilters2 = (options, queryClient) => {
    const mutationOptions = (0, exports.getGetPropertyFilters2MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useGetPropertyFilters2 = useGetPropertyFilters2;
/**
 * Retrieves options for a specific property filter based on submitted filters
 * @summary Get property field options
 */
const getPropertyFieldOptions1 = (filterId, propertyFilterSubmission, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property_filters/options/${filterId}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: propertyFilterSubmission,
        signal,
    });
};
exports.getPropertyFieldOptions1 = getPropertyFieldOptions1;
const getGetPropertyFieldOptions1MutationOptions = (options) => {
    const mutationKey = ["getPropertyFieldOptions1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { filterId, data } = props ?? {};
        return (0, exports.getPropertyFieldOptions1)(filterId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getGetPropertyFieldOptions1MutationOptions = getGetPropertyFieldOptions1MutationOptions;
/**
 * @summary Get property field options
 */
const useGetPropertyFieldOptions1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getGetPropertyFieldOptions1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useGetPropertyFieldOptions1 = useGetPropertyFieldOptions1;
/**
 * Retrieves a list of property filters, optionally filtered by filter nature IDs
 * @summary Get property filters
 */
const getPropertyFilters = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property_filters`,
        method: "GET",
        params,
        signal,
    });
};
exports.getPropertyFilters = getPropertyFilters;
const getGetPropertyFiltersQueryKey = (params) => {
    return [`/property_filters`, ...(params ? [params] : [])];
};
exports.getGetPropertyFiltersQueryKey = getGetPropertyFiltersQueryKey;
const getGetPropertyFiltersQueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetPropertyFiltersQueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.getPropertyFilters)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetPropertyFiltersQueryOptions = getGetPropertyFiltersQueryOptions;
/**
 * @summary Get property filters
 */
function useGetPropertyFilters(params, options, queryClient) {
    const queryOptions = (0, exports.getGetPropertyFiltersQueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves a list of all available property locations
 * @summary Method to find all the property locations
 */
const getAllCountries = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-locations`,
        method: "GET",
        signal,
    });
};
exports.getAllCountries = getAllCountries;
const getGetAllCountriesQueryKey = () => {
    return [`/property-locations`];
};
exports.getGetAllCountriesQueryKey = getGetAllCountriesQueryKey;
const getGetAllCountriesQueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetAllCountriesQueryKey)();
    const queryFn = ({ signal, }) => (0, exports.getAllCountries)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetAllCountriesQueryOptions = getGetAllCountriesQueryOptions;
/**
 * @summary Method to find all the property locations
 */
function useGetAllCountries(options, queryClient) {
    const queryOptions = (0, exports.getGetAllCountriesQueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Method to find all the property proposals
 */
const getAllPropertyProposals1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-proposals`,
        method: "GET",
        signal,
    });
};
exports.getAllPropertyProposals1 = getAllPropertyProposals1;
const getGetAllPropertyProposals1QueryKey = () => {
    return [`/property-proposals`];
};
exports.getGetAllPropertyProposals1QueryKey = getGetAllPropertyProposals1QueryKey;
const getGetAllPropertyProposals1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetAllPropertyProposals1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.getAllPropertyProposals1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetAllPropertyProposals1QueryOptions = getGetAllPropertyProposals1QueryOptions;
/**
 * @summary Method to find all the property proposals
 */
function useGetAllPropertyProposals1(options, queryClient) {
    const queryOptions = (0, exports.getGetAllPropertyProposals1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Publication state update
 */
const changePublicationStatus2 = (propertyId, changePublicationStatus2Body, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/${propertyId}/publication-state`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: changePublicationStatus2Body,
        signal,
    });
};
exports.changePublicationStatus2 = changePublicationStatus2;
const getChangePublicationStatus2MutationOptions = (options) => {
    const mutationKey = ["changePublicationStatus2"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { propertyId, data } = props ?? {};
        return (0, exports.changePublicationStatus2)(propertyId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getChangePublicationStatus2MutationOptions = getChangePublicationStatus2MutationOptions;
/**
 * @summary Publication state update
 */
const useChangePublicationStatus2 = (options, queryClient) => {
    const mutationOptions = (0, exports.getChangePublicationStatus2MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useChangePublicationStatus2 = useChangePublicationStatus2;
/**
 * This process is not reversible
 * @summary Delete the property with id supplied
 */
const deleteProperty1 = (id) => {
    return (0, custom_instance_1.customInstance)({ url: `/properties/${id}`, method: "DELETE" });
};
exports.deleteProperty1 = deleteProperty1;
const getDeleteProperty1MutationOptions = (options) => {
    const mutationKey = ["deleteProperty1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { id } = props ?? {};
        return (0, exports.deleteProperty1)(id);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getDeleteProperty1MutationOptions = getDeleteProperty1MutationOptions;
/**
 * @summary Delete the property with id supplied
 */
const useDeleteProperty1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getDeleteProperty1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useDeleteProperty1 = useDeleteProperty1;
/**
 * Returns a randomized list of properties with the specified count limit
 * @summary Fetch random list of properties, with basic data
 */
const fetchRandomProperties2 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/fetch-random`,
        method: "GET",
        signal,
    });
};
exports.fetchRandomProperties2 = fetchRandomProperties2;
const getFetchRandomProperties2QueryKey = () => {
    return [`/properties/fetch-random`];
};
exports.getFetchRandomProperties2QueryKey = getFetchRandomProperties2QueryKey;
const getFetchRandomProperties2QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFetchRandomProperties2QueryKey)();
    const queryFn = ({ signal }) => (0, exports.fetchRandomProperties2)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFetchRandomProperties2QueryOptions = getFetchRandomProperties2QueryOptions;
/**
 * @summary Fetch random list of properties, with basic data
 */
function useFetchRandomProperties2(options, queryClient) {
    const queryOptions = (0, exports.getFetchRandomProperties2QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Fetch random list of properties related to a given property
 */
const fetchRandomProperties = (propertyId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/${propertyId}/related-properties`,
        method: "GET",
        signal,
    });
};
exports.fetchRandomProperties = fetchRandomProperties;
const getFetchRandomPropertiesQueryKey = (propertyId) => {
    return [`/properties/${propertyId}/related-properties`];
};
exports.getFetchRandomPropertiesQueryKey = getFetchRandomPropertiesQueryKey;
const getFetchRandomPropertiesQueryOptions = (propertyId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFetchRandomPropertiesQueryKey)(propertyId);
    const queryFn = ({ signal }) => (0, exports.fetchRandomProperties)(propertyId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!propertyId,
        ...queryOptions,
    };
};
exports.getFetchRandomPropertiesQueryOptions = getFetchRandomPropertiesQueryOptions;
/**
 * @summary Fetch random list of properties related to a given property
 */
function useFetchRandomProperties(propertyId, options, queryClient) {
    const queryOptions = (0, exports.getFetchRandomPropertiesQueryOptions)(propertyId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Search properties with specified filters
 */
const findProperties1 = (propertyFilterCriteria, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/search`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: propertyFilterCriteria,
        signal,
    });
};
exports.findProperties1 = findProperties1;
const getFindProperties1MutationOptions = (options) => {
    const mutationKey = ["findProperties1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.findProperties1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getFindProperties1MutationOptions = getFindProperties1MutationOptions;
/**
 * @summary Search properties with specified filters
 */
const useFindProperties1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getFindProperties1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useFindProperties1 = useFindProperties1;
/**
 * @deprecated
 * @summary Return the property list with specified user id
 */
const findPropertiesByLocationRange1 = (range, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/by_location_range/${range}`,
        method: "GET",
        signal,
    });
};
exports.findPropertiesByLocationRange1 = findPropertiesByLocationRange1;
const getFindPropertiesByLocationRange1QueryKey = (range) => {
    return [`/properties/by_location_range/${range}`];
};
exports.getFindPropertiesByLocationRange1QueryKey = getFindPropertiesByLocationRange1QueryKey;
const getFindPropertiesByLocationRange1QueryOptions = (range, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindPropertiesByLocationRange1QueryKey)(range);
    const queryFn = ({ signal }) => (0, exports.findPropertiesByLocationRange1)(range, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!range,
        ...queryOptions,
    };
};
exports.getFindPropertiesByLocationRange1QueryOptions = getFindPropertiesByLocationRange1QueryOptions;
/**
 * @deprecated
 * @summary Return the property list with specified user id
 */
function useFindPropertiesByLocationRange1(range, options, queryClient) {
    const queryOptions = (0, exports.getFindPropertiesByLocationRange1QueryOptions)(range, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Filter the properties existing in system with specified id. Returns empty if none property match the id
 * @summary Return the property with specified id
 */
const findProperty1 = (propertyId, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/${propertyId}`,
        method: "GET",
        params,
        signal,
    });
};
exports.findProperty1 = findProperty1;
const getFindProperty1QueryKey = (propertyId, params) => {
    return [`/properties/${propertyId}`, ...(params ? [params] : [])];
};
exports.getFindProperty1QueryKey = getFindProperty1QueryKey;
const getFindProperty1QueryOptions = (propertyId, params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindProperty1QueryKey)(propertyId, params);
    const queryFn = ({ signal, }) => (0, exports.findProperty1)(propertyId, params, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!propertyId,
        ...queryOptions,
    };
};
exports.getFindProperty1QueryOptions = getFindProperty1QueryOptions;
/**
 * @summary Return the property with specified id
 */
function useFindProperty1(propertyId, params, options, queryClient) {
    const queryOptions = (0, exports.getFindProperty1QueryOptions)(propertyId, params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Filter the properties existing in system with specified id. Returns empty if none property match the id
 * @summary Return the property with specified id
 */
const findPropertyOldUrl1 = (id, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/detail/${id}`,
        method: "GET",
        signal,
    });
};
exports.findPropertyOldUrl1 = findPropertyOldUrl1;
const getFindPropertyOldUrl1QueryKey = (id) => {
    return [`/properties/detail/${id}`];
};
exports.getFindPropertyOldUrl1QueryKey = getFindPropertyOldUrl1QueryKey;
const getFindPropertyOldUrl1QueryOptions = (id, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindPropertyOldUrl1QueryKey)(id);
    const queryFn = ({ signal }) => (0, exports.findPropertyOldUrl1)(id, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!id,
        ...queryOptions,
    };
};
exports.getFindPropertyOldUrl1QueryOptions = getFindPropertyOldUrl1QueryOptions;
/**
 * @summary Return the property with specified id
 */
function useFindPropertyOldUrl1(id, options, queryClient) {
    const queryOptions = (0, exports.getFindPropertyOldUrl1QueryOptions)(id, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Password Protected Property for Signed in User
 */
const getDraftsProperties1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/drafts`,
        method: "GET",
        signal,
    });
};
exports.getDraftsProperties1 = getDraftsProperties1;
const getGetDraftsProperties1QueryKey = () => {
    return [`/properties/drafts`];
};
exports.getGetDraftsProperties1QueryKey = getGetDraftsProperties1QueryKey;
const getGetDraftsProperties1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetDraftsProperties1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.getDraftsProperties1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetDraftsProperties1QueryOptions = getGetDraftsProperties1QueryOptions;
/**
 * @summary Password Protected Property for Signed in User
 */
function useGetDraftsProperties1(options, queryClient) {
    const queryOptions = (0, exports.getGetDraftsProperties1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Get recently created properties within specified minutes (default 60)
 */
const getRecentProperties1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/recent`,
        method: "GET",
        params,
        signal,
    });
};
exports.getRecentProperties1 = getRecentProperties1;
const getGetRecentProperties1QueryKey = (params) => {
    return [`/properties/recent`, ...(params ? [params] : [])];
};
exports.getGetRecentProperties1QueryKey = getGetRecentProperties1QueryKey;
const getGetRecentProperties1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetRecentProperties1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.getRecentProperties1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetRecentProperties1QueryOptions = getGetRecentProperties1QueryOptions;
/**
 * @summary Get recently created properties within specified minutes (default 60)
 */
function useGetRecentProperties1(params, options, queryClient) {
    const queryOptions = (0, exports.getGetRecentProperties1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Password Protected Property for Signed in User
 */
const getSecuredProperties1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/password-protected`,
        method: "GET",
        signal,
    });
};
exports.getSecuredProperties1 = getSecuredProperties1;
const getGetSecuredProperties1QueryKey = () => {
    return [`/properties/password-protected`];
};
exports.getGetSecuredProperties1QueryKey = getGetSecuredProperties1QueryKey;
const getGetSecuredProperties1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetSecuredProperties1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.getSecuredProperties1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetSecuredProperties1QueryOptions = getGetSecuredProperties1QueryOptions;
/**
 * @summary Password Protected Property for Signed in User
 */
function useGetSecuredProperties1(options, queryClient) {
    const queryOptions = (0, exports.getGetSecuredProperties1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Returns HTML preview for sharing a property on social media or messaging apps
 * @summary Get HTML preview for a property
 */
const previewProperty2 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/previews`,
        method: "GET",
        params,
        signal,
    });
};
exports.previewProperty2 = previewProperty2;
const getPreviewProperty2QueryKey = (params) => {
    return [`/properties/previews`, ...(params ? [params] : [])];
};
exports.getPreviewProperty2QueryKey = getPreviewProperty2QueryKey;
const getPreviewProperty2QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getPreviewProperty2QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.previewProperty2)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getPreviewProperty2QueryOptions = getPreviewProperty2QueryOptions;
/**
 * @summary Get HTML preview for a property
 */
function usePreviewProperty2(params, options, queryClient) {
    const queryOptions = (0, exports.getPreviewProperty2QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Consider that only user can saveNew its properties
 * @summary Create or update the property supplied
 */
const saveProperty1 = (property, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: property,
        signal,
    });
};
exports.saveProperty1 = saveProperty1;
const getSaveProperty1MutationOptions = (options) => {
    const mutationKey = ["saveProperty1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.saveProperty1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSaveProperty1MutationOptions = getSaveProperty1MutationOptions;
/**
 * @summary Create or update the property supplied
 */
const useSaveProperty1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSaveProperty1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSaveProperty1 = useSaveProperty1;
const sendAlert2 = (weeklyAlertRange, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/weekly-alert`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: weeklyAlertRange,
        signal,
    });
};
exports.sendAlert2 = sendAlert2;
const getSendAlert2MutationOptions = (options) => {
    const mutationKey = ["sendAlert2"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.sendAlert2)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSendAlert2MutationOptions = getSendAlert2MutationOptions;
const useSendAlert2 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSendAlert2MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSendAlert2 = useSendAlert2;
const sendGroupAlert1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/properties/weekly-group-alert`,
        method: "POST",
        signal,
    });
};
exports.sendGroupAlert1 = sendGroupAlert1;
const getSendGroupAlert1MutationOptions = (options) => {
    const mutationKey = ["sendGroupAlert1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = () => {
        return (0, exports.sendGroupAlert1)();
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSendGroupAlert1MutationOptions = getSendGroupAlert1MutationOptions;
const useSendGroupAlert1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSendGroupAlert1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSendGroupAlert1 = useSendGroupAlert1;
/**
 * Retrieves a list of all property types available in the system, including their IDs, names, language keys, active status, and associated property type groups.
 * @summary Get all property types
 */
const getAllPropertyTypes1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/property-types`,
        method: "GET",
        signal,
    });
};
exports.getAllPropertyTypes1 = getAllPropertyTypes1;
const getGetAllPropertyTypes1QueryKey = () => {
    return [`/property-types`];
};
exports.getGetAllPropertyTypes1QueryKey = getGetAllPropertyTypes1QueryKey;
const getGetAllPropertyTypes1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetAllPropertyTypes1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.getAllPropertyTypes1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetAllPropertyTypes1QueryOptions = getGetAllPropertyTypes1QueryOptions;
/**
 * @summary Get all property types
 */
function useGetAllPropertyTypes1(options, queryClient) {
    const queryOptions = (0, exports.getGetAllPropertyTypes1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Publication state update
 */
const changePublicationStatus = (testimonialId, publicationState, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/testimonial/${testimonialId}/publication-state/${publicationState}`,
        method: "POST",
        signal,
    });
};
exports.changePublicationStatus = changePublicationStatus;
const getChangePublicationStatusMutationOptions = (options) => {
    const mutationKey = ["changePublicationStatus"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { testimonialId, publicationState } = props ?? {};
        return (0, exports.changePublicationStatus)(testimonialId, publicationState);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getChangePublicationStatusMutationOptions = getChangePublicationStatusMutationOptions;
/**
 * @summary Publication state update
 */
const useChangePublicationStatus = (options, queryClient) => {
    const mutationOptions = (0, exports.getChangePublicationStatusMutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useChangePublicationStatus = useChangePublicationStatus;
/**
 * @summary Fetch User Posted list of testimonials
 */
const fetchPublishedTestimonials1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/testimonial/published`,
        method: "GET",
        params,
        signal,
    });
};
exports.fetchPublishedTestimonials1 = fetchPublishedTestimonials1;
const getFetchPublishedTestimonials1QueryKey = (params) => {
    return [`/testimonial/published`, ...(params ? [params] : [])];
};
exports.getFetchPublishedTestimonials1QueryKey = getFetchPublishedTestimonials1QueryKey;
const getFetchPublishedTestimonials1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFetchPublishedTestimonials1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.fetchPublishedTestimonials1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFetchPublishedTestimonials1QueryOptions = getFetchPublishedTestimonials1QueryOptions;
/**
 * @summary Fetch User Posted list of testimonials
 */
function useFetchPublishedTestimonials1(params, options, queryClient) {
    const queryOptions = (0, exports.getFetchPublishedTestimonials1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Fetch User Received list of testimonials
 */
const fetchReceivedTestimonials1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/testimonial`,
        method: "GET",
        params,
        signal,
    });
};
exports.fetchReceivedTestimonials1 = fetchReceivedTestimonials1;
const getFetchReceivedTestimonials1QueryKey = (params) => {
    return [`/testimonial`, ...(params ? [params] : [])];
};
exports.getFetchReceivedTestimonials1QueryKey = getFetchReceivedTestimonials1QueryKey;
const getFetchReceivedTestimonials1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFetchReceivedTestimonials1QueryKey)(params);
    const queryFn = ({ signal }) => (0, exports.fetchReceivedTestimonials1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFetchReceivedTestimonials1QueryOptions = getFetchReceivedTestimonials1QueryOptions;
/**
 * @summary Fetch User Received list of testimonials
 */
function useFetchReceivedTestimonials1(params, options, queryClient) {
    const queryOptions = (0, exports.getFetchReceivedTestimonials1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Consider that only user can save new testimonials
 * @summary Create or update the Testimonial supplied
 */
const saveTestimonial1 = (testimonial, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/testimonial`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: testimonial,
        signal,
    });
};
exports.saveTestimonial1 = saveTestimonial1;
const getSaveTestimonial1MutationOptions = (options) => {
    const mutationKey = ["saveTestimonial1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.saveTestimonial1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSaveTestimonial1MutationOptions = getSaveTestimonial1MutationOptions;
/**
 * @summary Create or update the Testimonial supplied
 */
const useSaveTestimonial1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSaveTestimonial1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSaveTestimonial1 = useSaveTestimonial1;
/**
 * @summary Return the testimonial with specified id, it needs to be published
 */
const findTestimonial1 = (testimonialId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/testimonial/${testimonialId}`,
        method: "GET",
        signal,
    });
};
exports.findTestimonial1 = findTestimonial1;
const getFindTestimonial1QueryKey = (testimonialId) => {
    return [`/testimonial/${testimonialId}`];
};
exports.getFindTestimonial1QueryKey = getFindTestimonial1QueryKey;
const getFindTestimonial1QueryOptions = (testimonialId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindTestimonial1QueryKey)(testimonialId);
    const queryFn = ({ signal }) => (0, exports.findTestimonial1)(testimonialId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!testimonialId,
        ...queryOptions,
    };
};
exports.getFindTestimonial1QueryOptions = getFindTestimonial1QueryOptions;
/**
 * @summary Return the testimonial with specified id, it needs to be published
 */
function useFindTestimonial1(testimonialId, options, queryClient) {
    const queryOptions = (0, exports.getFindTestimonial1QueryOptions)(testimonialId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Return the testimonial Requests a user Created
 */
const findTestimonialRequests1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/testimonial/requested`,
        method: "GET",
        signal,
    });
};
exports.findTestimonialRequests1 = findTestimonialRequests1;
const getFindTestimonialRequests1QueryKey = () => {
    return [`/testimonial/requested`];
};
exports.getFindTestimonialRequests1QueryKey = getFindTestimonialRequests1QueryKey;
const getFindTestimonialRequests1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindTestimonialRequests1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.findTestimonialRequests1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindTestimonialRequests1QueryOptions = getFindTestimonialRequests1QueryOptions;
/**
 * @summary Return the testimonial Requests a user Created
 */
function useFindTestimonialRequests1(options, queryClient) {
    const queryOptions = (0, exports.getFindTestimonialRequests1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Return the testimonial Requests a user Received
 */
const findTestimonialRequestsReceived1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/testimonial/request-received`,
        method: "GET",
        signal,
    });
};
exports.findTestimonialRequestsReceived1 = findTestimonialRequestsReceived1;
const getFindTestimonialRequestsReceived1QueryKey = () => {
    return [`/testimonial/request-received`];
};
exports.getFindTestimonialRequestsReceived1QueryKey = getFindTestimonialRequestsReceived1QueryKey;
const getFindTestimonialRequestsReceived1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindTestimonialRequestsReceived1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.findTestimonialRequestsReceived1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFindTestimonialRequestsReceived1QueryOptions = getFindTestimonialRequestsReceived1QueryOptions;
/**
 * @summary Return the testimonial Requests a user Received
 */
function useFindTestimonialRequestsReceived1(options, queryClient) {
    const queryOptions = (0, exports.getFindTestimonialRequestsReceived1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Return the property list with specified user id
 */
const findPropertiesByUser1 = (id, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${id}/properties`,
        method: "GET",
        params,
        signal,
    });
};
exports.findPropertiesByUser1 = findPropertiesByUser1;
const getFindPropertiesByUser1QueryKey = (id, params) => {
    return [`/users/${id}/properties`, ...(params ? [params] : [])];
};
exports.getFindPropertiesByUser1QueryKey = getFindPropertiesByUser1QueryKey;
const getFindPropertiesByUser1QueryOptions = (id, params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindPropertiesByUser1QueryKey)(id, params);
    const queryFn = ({ signal }) => (0, exports.findPropertiesByUser1)(id, params, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!id,
        ...queryOptions,
    };
};
exports.getFindPropertiesByUser1QueryOptions = getFindPropertiesByUser1QueryOptions;
/**
 * @summary Return the property list with specified user id
 */
function useFindPropertiesByUser1(id, params, options, queryClient) {
    const queryOptions = (0, exports.getFindPropertiesByUser1QueryOptions)(id, params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Return the testimonials list with specified user id
 */
const findTestimonialsByUser1 = (id, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${id}/testimonials`,
        method: "GET",
        params,
        signal,
    });
};
exports.findTestimonialsByUser1 = findTestimonialsByUser1;
const getFindTestimonialsByUser1QueryKey = (id, params) => {
    return [`/users/${id}/testimonials`, ...(params ? [params] : [])];
};
exports.getFindTestimonialsByUser1QueryKey = getFindTestimonialsByUser1QueryKey;
const getFindTestimonialsByUser1QueryOptions = (id, params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindTestimonialsByUser1QueryKey)(id, params);
    const queryFn = ({ signal }) => (0, exports.findTestimonialsByUser1)(id, params, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!id,
        ...queryOptions,
    };
};
exports.getFindTestimonialsByUser1QueryOptions = getFindTestimonialsByUser1QueryOptions;
/**
 * @summary Return the testimonials list with specified user id
 */
function useFindTestimonialsByUser1(id, params, options, queryClient) {
    const queryOptions = (0, exports.getFindTestimonialsByUser1QueryOptions)(id, params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Request testimonial from specified user id
 */
const requestTestimonialFromUser1 = (id, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${id}/request-testimonial`,
        method: "POST",
        signal,
    });
};
exports.requestTestimonialFromUser1 = requestTestimonialFromUser1;
const getRequestTestimonialFromUser1MutationOptions = (options) => {
    const mutationKey = ["requestTestimonialFromUser1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { id } = props ?? {};
        return (0, exports.requestTestimonialFromUser1)(id);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getRequestTestimonialFromUser1MutationOptions = getRequestTestimonialFromUser1MutationOptions;
/**
 * @summary Request testimonial from specified user id
 */
const useRequestTestimonialFromUser1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getRequestTestimonialFromUser1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useRequestTestimonialFromUser1 = useRequestTestimonialFromUser1;
const saveLog1 = (logEntry, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/log`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: logEntry,
        signal,
    });
};
exports.saveLog1 = saveLog1;
const getSaveLog1MutationOptions = (options) => {
    const mutationKey = ["saveLog1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.saveLog1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSaveLog1MutationOptions = getSaveLog1MutationOptions;
const useSaveLog1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSaveLog1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSaveLog1 = useSaveLog1;
/**
 * In this email it will be contained all process information to change password and recover access
 * @summary Send an email to user that has forgotted his/her password
 */
const sendEmail1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/password_recovery/send_email`,
        method: "GET",
        signal,
    });
};
exports.sendEmail1 = sendEmail1;
const getSendEmail1QueryKey = () => {
    return [`/password_recovery/send_email`];
};
exports.getSendEmail1QueryKey = getSendEmail1QueryKey;
const getSendEmail1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getSendEmail1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.sendEmail1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getSendEmail1QueryOptions = getSendEmail1QueryOptions;
/**
 * @summary Send an email to user that has forgotted his/her password
 */
function useSendEmail1(options, queryClient) {
    const queryOptions = (0, exports.getSendEmail1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * @summary Update the password user, finishing the recovery password process
 */
const updatePassword1 = (passwordRecoveryRequest, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/password_recovery/update_password`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: passwordRecoveryRequest,
        signal,
    });
};
exports.updatePassword1 = updatePassword1;
const getUpdatePassword1MutationOptions = (options) => {
    const mutationKey = ["updatePassword1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.updatePassword1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getUpdatePassword1MutationOptions = getUpdatePassword1MutationOptions;
/**
 * @summary Update the password user, finishing the recovery password process
 */
const useUpdatePassword1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getUpdatePassword1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useUpdatePassword1 = useUpdatePassword1;
/**
 * @summary Validate that password recovery token supplied was valid and current
 */
const validateToken1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/password_recovery/validate_token`,
        method: "GET",
        signal,
    });
};
exports.validateToken1 = validateToken1;
const getValidateToken1QueryKey = () => {
    return [`/password_recovery/validate_token`];
};
exports.getValidateToken1QueryKey = getValidateToken1QueryKey;
const getValidateToken1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getValidateToken1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.validateToken1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getValidateToken1QueryOptions = getValidateToken1QueryOptions;
/**
 * @summary Validate that password recovery token supplied was valid and current
 */
function useValidateToken1(options, queryClient) {
    const queryOptions = (0, exports.getValidateToken1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Generates an authorization code to be used with the token endpoint
 * @summary Authorize client application
 */
const authorize1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/security/auth`,
        method: "GET",
        signal,
    });
};
exports.authorize1 = authorize1;
const getAuthorize1QueryKey = () => {
    return [`/security/auth`];
};
exports.getAuthorize1QueryKey = getAuthorize1QueryKey;
const getAuthorize1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getAuthorize1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.authorize1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getAuthorize1QueryOptions = getAuthorize1QueryOptions;
/**
 * @summary Authorize client application
 */
function useAuthorize1(options, queryClient) {
    const queryOptions = (0, exports.getAuthorize1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Exchanges the provided authorization code, username, and password for a token through which private application resources can be accessed. Note that the token expires in 15 minutes. When this happens, you must invoke this service again with the previously described parameters.
 * @summary Exchange authorization code for access token
 */
const requestToken1 = (requestToken1Body, signal) => {
    const formUrlEncoded = new URLSearchParams();
    formUrlEncoded.append(`client-id`, requestToken1Body["client-id"]);
    formUrlEncoded.append(`code`, requestToken1Body.code);
    formUrlEncoded.append(`email`, requestToken1Body.email);
    formUrlEncoded.append(`password`, requestToken1Body.password);
    if (requestToken1Body.grant_type !== undefined) {
        formUrlEncoded.append(`grant_type`, requestToken1Body.grant_type);
    }
    if (requestToken1Body.client_secret !== undefined) {
        formUrlEncoded.append(`client_secret`, requestToken1Body.client_secret);
    }
    return (0, custom_instance_1.customInstance)({
        url: `/security/token`,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: formUrlEncoded,
        signal,
    });
};
exports.requestToken1 = requestToken1;
const getRequestToken1MutationOptions = (options) => {
    const mutationKey = ["requestToken1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.requestToken1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getRequestToken1MutationOptions = getRequestToken1MutationOptions;
/**
 * @summary Exchange authorization code for access token
 */
const useRequestToken1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getRequestToken1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useRequestToken1 = useRequestToken1;
/**
 * @summary Create checkout-session
 */
const createCheckoutSession2 = (checkoutSessionDto, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/checkout-sessions`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: checkoutSessionDto,
        signal,
    });
};
exports.createCheckoutSession2 = createCheckoutSession2;
const getCreateCheckoutSession2MutationOptions = (options) => {
    const mutationKey = ["createCheckoutSession2"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.createCheckoutSession2)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getCreateCheckoutSession2MutationOptions = getCreateCheckoutSession2MutationOptions;
/**
 * @summary Create checkout-session
 */
const useCreateCheckoutSession2 = (options, queryClient) => {
    const mutationOptions = (0, exports.getCreateCheckoutSession2MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useCreateCheckoutSession2 = useCreateCheckoutSession2;
/**
 * @summary Create checkout-session
 */
const createCheckoutSession = (customerSessionDto, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/customer-sessions`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: customerSessionDto,
        signal,
    });
};
exports.createCheckoutSession = createCheckoutSession;
const getCreateCheckoutSessionMutationOptions = (options) => {
    const mutationKey = ["createCheckoutSession"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.createCheckoutSession)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getCreateCheckoutSessionMutationOptions = getCreateCheckoutSessionMutationOptions;
/**
 * @summary Create checkout-session
 */
const useCreateCheckoutSession = (options, queryClient) => {
    const mutationOptions = (0, exports.getCreateCheckoutSessionMutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useCreateCheckoutSession = useCreateCheckoutSession;
/**
 * @summary Notify user subscription change
 */
const postUserSubscriptionChange1 = (stripeEvent, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/stripe-webhooks/user-subscription-update`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: stripeEvent,
        signal,
    });
};
exports.postUserSubscriptionChange1 = postUserSubscriptionChange1;
const getPostUserSubscriptionChange1MutationOptions = (options) => {
    const mutationKey = ["postUserSubscriptionChange1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.postUserSubscriptionChange1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getPostUserSubscriptionChange1MutationOptions = getPostUserSubscriptionChange1MutationOptions;
/**
 * @summary Notify user subscription change
 */
const usePostUserSubscriptionChange1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getPostUserSubscriptionChange1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.usePostUserSubscriptionChange1 = usePostUserSubscriptionChange1;
/**
 * @summary Return the active and available subscription plans
 */
const getAll1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/subscription-plans`,
        method: "GET",
        params,
        signal,
    });
};
exports.getAll1 = getAll1;
const getGetAll1QueryKey = (params) => {
    return [`/subscription-plans`, ...(params ? [params] : [])];
};
exports.getGetAll1QueryKey = getGetAll1QueryKey;
const getGetAll1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetAll1QueryKey)(params);
    const queryFn = ({ signal, }) => (0, exports.getAll1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetAll1QueryOptions = getGetAll1QueryOptions;
/**
 * @summary Return the active and available subscription plans
 */
function useGetAll1(params, options, queryClient) {
    const queryOptions = (0, exports.getGetAll1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const get = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/subscriptions`,
        method: "GET",
        signal,
    });
};
exports.get = get;
const getGetQueryKey = (userId) => {
    return [`/users/${userId}/subscriptions`];
};
exports.getGetQueryKey = getGetQueryKey;
const getGetQueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetQueryKey)(userId);
    const queryFn = ({ signal, }) => (0, exports.get)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getGetQueryOptions = getGetQueryOptions;
function useGet(userId, options, queryClient) {
    const queryOptions = (0, exports.getGetQueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
const getActiveFeatures1 = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/subscriptions/active/features`,
        method: "GET",
        signal,
    });
};
exports.getActiveFeatures1 = getActiveFeatures1;
const getGetActiveFeatures1QueryKey = (userId) => {
    return [`/users/${userId}/subscriptions/active/features`];
};
exports.getGetActiveFeatures1QueryKey = getGetActiveFeatures1QueryKey;
const getGetActiveFeatures1QueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetActiveFeatures1QueryKey)(userId);
    const queryFn = ({ signal }) => (0, exports.getActiveFeatures1)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getGetActiveFeatures1QueryOptions = getGetActiveFeatures1QueryOptions;
function useGetActiveFeatures1(userId, options, queryClient) {
    const queryOptions = (0, exports.getGetActiveFeatures1QueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Deletes a specific alert owned by the user
 * @summary Delete an alert
 */
const deleteAlert1 = (userId, alertId) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/alerts/${alertId}`,
        method: "DELETE",
    });
};
exports.deleteAlert1 = deleteAlert1;
const getDeleteAlert1MutationOptions = (options) => {
    const mutationKey = ["deleteAlert1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, alertId } = props ?? {};
        return (0, exports.deleteAlert1)(userId, alertId);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getDeleteAlert1MutationOptions = getDeleteAlert1MutationOptions;
/**
 * @summary Delete an alert
 */
const useDeleteAlert1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getDeleteAlert1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useDeleteAlert1 = useDeleteAlert1;
/**
 * Retrieves the results for a specific alert
 * @summary Get alert results
 */
const getAlertResult1 = (userId, alertId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/alerts/${alertId}/result`,
        method: "GET",
        signal,
    });
};
exports.getAlertResult1 = getAlertResult1;
const getGetAlertResult1QueryKey = (userId, alertId) => {
    return [`/users/${userId}/alerts/${alertId}/result`];
};
exports.getGetAlertResult1QueryKey = getGetAlertResult1QueryKey;
const getGetAlertResult1QueryOptions = (userId, alertId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetAlertResult1QueryKey)(userId, alertId);
    const queryFn = ({ signal, }) => (0, exports.getAlertResult1)(userId, alertId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && alertId),
        ...queryOptions,
    };
};
exports.getGetAlertResult1QueryOptions = getGetAlertResult1QueryOptions;
/**
 * @summary Get alert results
 */
function useGetAlertResult1(userId, alertId, options, queryClient) {
    const queryOptions = (0, exports.getGetAlertResult1QueryOptions)(userId, alertId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Returns all alerts associated with the specified user ID
 * @summary Get all alerts for a user
 */
const getByUser2 = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/alerts`,
        method: "GET",
        signal,
    });
};
exports.getByUser2 = getByUser2;
const getGetByUser2QueryKey = (userId) => {
    return [`/users/${userId}/alerts`];
};
exports.getGetByUser2QueryKey = getGetByUser2QueryKey;
const getGetByUser2QueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetByUser2QueryKey)(userId);
    const queryFn = ({ signal, }) => (0, exports.getByUser2)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getGetByUser2QueryOptions = getGetByUser2QueryOptions;
/**
 * @summary Get all alerts for a user
 */
function useGetByUser2(userId, options, queryClient) {
    const queryOptions = (0, exports.getGetByUser2QueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Creates a new alert for the specified user
 * @summary Create a new alert
 */
const saveAlert1 = (userId, alert, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/alerts`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: alert,
        signal,
    });
};
exports.saveAlert1 = saveAlert1;
const getSaveAlert1MutationOptions = (options) => {
    const mutationKey = ["saveAlert1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, data } = props ?? {};
        return (0, exports.saveAlert1)(userId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSaveAlert1MutationOptions = getSaveAlert1MutationOptions;
/**
 * @summary Create a new alert
 */
const useSaveAlert1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSaveAlert1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSaveAlert1 = useSaveAlert1;
/**
 * Retrieves all newsletters that the specified user has subscribed to
 * @summary Get newsletters subscribed to
 */
const newsletterAlerts1 = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/alerts/newsletter-alerts`,
        method: "GET",
        signal,
    });
};
exports.newsletterAlerts1 = newsletterAlerts1;
const getNewsletterAlerts1QueryKey = (userId) => {
    return [`/users/${userId}/alerts/newsletter-alerts`];
};
exports.getNewsletterAlerts1QueryKey = getNewsletterAlerts1QueryKey;
const getNewsletterAlerts1QueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getNewsletterAlerts1QueryKey)(userId);
    const queryFn = ({ signal }) => (0, exports.newsletterAlerts1)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getNewsletterAlerts1QueryOptions = getNewsletterAlerts1QueryOptions;
/**
 * @summary Get newsletters subscribed to
 */
function useNewsletterAlerts1(userId, options, queryClient) {
    const queryOptions = (0, exports.getNewsletterAlerts1QueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves all subscribers to newsletters owned by the specified user
 * @summary Get newsletter subscribers
 */
const newsletterSubscribers1 = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/alerts/newsletter-subscribers`,
        method: "GET",
        signal,
    });
};
exports.newsletterSubscribers1 = newsletterSubscribers1;
const getNewsletterSubscribers1QueryKey = (userId) => {
    return [`/users/${userId}/alerts/newsletter-subscribers`];
};
exports.getNewsletterSubscribers1QueryKey = getNewsletterSubscribers1QueryKey;
const getNewsletterSubscribers1QueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getNewsletterSubscribers1QueryKey)(userId);
    const queryFn = ({ signal }) => (0, exports.newsletterSubscribers1)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getNewsletterSubscribers1QueryOptions = getNewsletterSubscribers1QueryOptions;
/**
 * @summary Get newsletter subscribers
 */
function useNewsletterSubscribers1(userId, options, queryClient) {
    const queryOptions = (0, exports.getNewsletterSubscribers1QueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Triggers the sending of customized property alerts to users
 * @summary Send customized property alerts
 */
const sendAlert = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/alerts/send-alert`,
        method: "POST",
        signal,
    });
};
exports.sendAlert = sendAlert;
const getSendAlertMutationOptions = (options) => {
    const mutationKey = ["sendAlert"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId } = props ?? {};
        return (0, exports.sendAlert)(userId);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSendAlertMutationOptions = getSendAlertMutationOptions;
/**
 * @summary Send customized property alerts
 */
const useSendAlert = (options, queryClient) => {
    const mutationOptions = (0, exports.getSendAlertMutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSendAlert = useSendAlert;
/**
 * Returns a list of all available brokerages in the system
 * @summary Retrieve all brokerages
 */
const retrieve1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/brokerages`,
        method: "GET",
        signal,
    });
};
exports.retrieve1 = retrieve1;
const getRetrieve1QueryKey = () => {
    return [`/brokerages`];
};
exports.getRetrieve1QueryKey = getRetrieve1QueryKey;
const getRetrieve1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getRetrieve1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.retrieve1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getRetrieve1QueryOptions = getRetrieve1QueryOptions;
/**
 * @summary Retrieve all brokerages
 */
function useRetrieve1(options, queryClient) {
    const queryOptions = (0, exports.getRetrieve1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Gets all endorsements for a specified user. Can be filtered by endorser ID.
 * @summary Retrieve endorsements for a user
 */
const retrieveEndorsementsByUser1 = (userId, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/endorsements`,
        method: "GET",
        params,
        signal,
    });
};
exports.retrieveEndorsementsByUser1 = retrieveEndorsementsByUser1;
const getRetrieveEndorsementsByUser1QueryKey = (userId, params) => {
    return [
        `/users/${userId}/endorsements`,
        ...(params ? [params] : []),
    ];
};
exports.getRetrieveEndorsementsByUser1QueryKey = getRetrieveEndorsementsByUser1QueryKey;
const getRetrieveEndorsementsByUser1QueryOptions = (userId, params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ??
        (0, exports.getRetrieveEndorsementsByUser1QueryKey)(userId, params);
    const queryFn = ({ signal }) => (0, exports.retrieveEndorsementsByUser1)(userId, params, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getRetrieveEndorsementsByUser1QueryOptions = getRetrieveEndorsementsByUser1QueryOptions;
/**
 * @summary Retrieve endorsements for a user
 */
function useRetrieveEndorsementsByUser1(userId, params, options, queryClient) {
    const queryOptions = (0, exports.getRetrieveEndorsementsByUser1QueryOptions)(userId, params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves all favorites for a specific user
 * @summary Get user favorites
 */
const getByUser = (userId, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/favorites`,
        method: "GET",
        params,
        signal,
    });
};
exports.getByUser = getByUser;
const getGetByUserQueryKey = (userId, params) => {
    return [`/users/${userId}/favorites`, ...(params ? [params] : [])];
};
exports.getGetByUserQueryKey = getGetByUserQueryKey;
const getGetByUserQueryOptions = (userId, params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetByUserQueryKey)(userId, params);
    const queryFn = ({ signal, }) => (0, exports.getByUser)(userId, params, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getGetByUserQueryOptions = getGetByUserQueryOptions;
/**
 * @summary Get user favorites
 */
function useGetByUser(userId, params, options, queryClient) {
    const queryOptions = (0, exports.getGetByUserQueryOptions)(userId, params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Adds a new favorite item for a specific user
 * @summary Add a favorite
 */
const postUserFavorite1 = (userId, favorite, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/favorites`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: favorite,
        signal,
    });
};
exports.postUserFavorite1 = postUserFavorite1;
const getPostUserFavorite1MutationOptions = (options) => {
    const mutationKey = ["postUserFavorite1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, data } = props ?? {};
        return (0, exports.postUserFavorite1)(userId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getPostUserFavorite1MutationOptions = getPostUserFavorite1MutationOptions;
/**
 * @summary Add a favorite
 */
const usePostUserFavorite1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getPostUserFavorite1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.usePostUserFavorite1 = usePostUserFavorite1;
/**
 * Removes a specific favorite from a user's favorites list
 * @summary Remove a favorite
 */
const removeUserFavorite1 = (userId, favoriteId) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/favorites/${favoriteId}`,
        method: "DELETE",
    });
};
exports.removeUserFavorite1 = removeUserFavorite1;
const getRemoveUserFavorite1MutationOptions = (options) => {
    const mutationKey = ["removeUserFavorite1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, favoriteId } = props ?? {};
        return (0, exports.removeUserFavorite1)(userId, favoriteId);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getRemoveUserFavorite1MutationOptions = getRemoveUserFavorite1MutationOptions;
/**
 * @summary Remove a favorite
 */
const useRemoveUserFavorite1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getRemoveUserFavorite1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useRemoveUserFavorite1 = useRemoveUserFavorite1;
/**
 * Searches for users within a specific group matching the specified filter criteria
 * @summary Search users within a specified group
 */
const searchGroupUsers1 = (groupId, userFilterRequest, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/groups/${groupId}/users/search`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: userFilterRequest,
        signal,
    });
};
exports.searchGroupUsers1 = searchGroupUsers1;
const getSearchGroupUsers1MutationOptions = (options) => {
    const mutationKey = ["searchGroupUsers1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { groupId, data } = props ?? {};
        return (0, exports.searchGroupUsers1)(groupId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSearchGroupUsers1MutationOptions = getSearchGroupUsers1MutationOptions;
/**
 * @summary Search users within a specified group
 */
const useSearchGroupUsers1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSearchGroupUsers1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSearchGroupUsers1 = useSearchGroupUsers1;
/**
 * Returns a list of all available user skills in the system
 * @summary Retrieve all user skills
 */
const retrieveUserSkills2 = (signal) => {
    return (0, custom_instance_1.customInstance)({ url: `/skills`, method: "GET", signal });
};
exports.retrieveUserSkills2 = retrieveUserSkills2;
const getRetrieveUserSkills2QueryKey = () => {
    return [`/skills`];
};
exports.getRetrieveUserSkills2QueryKey = getRetrieveUserSkills2QueryKey;
const getRetrieveUserSkills2QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getRetrieveUserSkills2QueryKey)();
    const queryFn = ({ signal }) => (0, exports.retrieveUserSkills2)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getRetrieveUserSkills2QueryOptions = getRetrieveUserSkills2QueryOptions;
/**
 * @summary Retrieve all user skills
 */
function useRetrieveUserSkills2(options, queryClient) {
    const queryOptions = (0, exports.getRetrieveUserSkills2QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Returns all available user types in the system
 * @summary Get user types
 */
const getUserTypes1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/user-types`,
        method: "GET",
        signal,
    });
};
exports.getUserTypes1 = getUserTypes1;
const getGetUserTypes1QueryKey = () => {
    return [`/user-types`];
};
exports.getGetUserTypes1QueryKey = getGetUserTypes1QueryKey;
const getGetUserTypes1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getGetUserTypes1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.getUserTypes1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getGetUserTypes1QueryOptions = getGetUserTypes1QueryOptions;
/**
 * @summary Get user types
 */
function useGetUserTypes1(options, queryClient) {
    const queryOptions = (0, exports.getGetUserTypes1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Activates a user account using the activation key sent to their email
 * @summary Activate the account of specified user
 */
const activateUser1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/activate-user`,
        method: "GET",
        signal,
    });
};
exports.activateUser1 = activateUser1;
const getActivateUser1QueryKey = () => {
    return [`/users/activate-user`];
};
exports.getActivateUser1QueryKey = getActivateUser1QueryKey;
const getActivateUser1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getActivateUser1QueryKey)();
    const queryFn = ({ signal, }) => (0, exports.activateUser1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getActivateUser1QueryOptions = getActivateUser1QueryOptions;
/**
 * @summary Activate the account of specified user
 */
function useActivateUser1(options, queryClient) {
    const queryOptions = (0, exports.getActivateUser1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Verifies the code that was sent to the user's phone
 * @summary Verify the phone code sent to user
 */
const checkPhoneVerificationCodeCommand1 = (userId, phoneCodeCheckResource, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/phone-code-check`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: phoneCodeCheckResource,
        signal,
    });
};
exports.checkPhoneVerificationCodeCommand1 = checkPhoneVerificationCodeCommand1;
const getCheckPhoneVerificationCodeCommand1MutationOptions = (options) => {
    const mutationKey = ["checkPhoneVerificationCodeCommand1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, data } = props ?? {};
        return (0, exports.checkPhoneVerificationCodeCommand1)(userId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getCheckPhoneVerificationCodeCommand1MutationOptions = getCheckPhoneVerificationCodeCommand1MutationOptions;
/**
 * @summary Verify the phone code sent to user
 */
const useCheckPhoneVerificationCodeCommand1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getCheckPhoneVerificationCodeCommand1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useCheckPhoneVerificationCodeCommand1 = useCheckPhoneVerificationCodeCommand1;
/**
 * Retrieves a random selection of users based on specified criteria
 * @summary Fetch random list of users, with basic data
 */
const fetchRandomUsers1 = (userListRequest, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/fetch-random`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: userListRequest,
        signal,
    });
};
exports.fetchRandomUsers1 = fetchRandomUsers1;
const getFetchRandomUsers1MutationOptions = (options) => {
    const mutationKey = ["fetchRandomUsers1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.fetchRandomUsers1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getFetchRandomUsers1MutationOptions = getFetchRandomUsers1MutationOptions;
/**
 * @summary Fetch random list of users, with basic data
 */
const useFetchRandomUsers1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getFetchRandomUsers1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useFetchRandomUsers1 = useFetchRandomUsers1;
/**
 * Gets detailed user information by user ID
 * @summary Fetch user detail according to its id
 */
const find = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}`,
        method: "GET",
        signal,
    });
};
exports.find = find;
const getFindQueryKey = (userId) => {
    return [`/users/${userId}`];
};
exports.getFindQueryKey = getFindQueryKey;
const getFindQueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindQueryKey)(userId);
    const queryFn = ({ signal, }) => (0, exports.find)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getFindQueryOptions = getFindQueryOptions;
/**
 * @summary Fetch user detail according to its id
 */
function useFind(userId, options, queryClient) {
    const queryOptions = (0, exports.getFindQueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Gets user information by their unique profile name
 * @summary Fetch user detail according to its profile name
 */
const find1 = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users`,
        method: "GET",
        params,
        signal,
    });
};
exports.find1 = find1;
const getFind1QueryKey = (params) => {
    return [`/users`, ...(params ? [params] : [])];
};
exports.getFind1QueryKey = getFind1QueryKey;
const getFind1QueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFind1QueryKey)(params);
    const queryFn = ({ signal, }) => (0, exports.find1)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getFind1QueryOptions = getFind1QueryOptions;
/**
 * @summary Fetch user detail according to its profile name
 */
function useFind1(params, options, queryClient) {
    const queryOptions = (0, exports.getFind1QueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Updates user profile information in the system
 * @summary Save the data of user in the system
 */
const save = (skilledUser, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: skilledUser,
        signal,
    });
};
exports.save = save;
const getSaveMutationOptions = (options) => {
    const mutationKey = ["save"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.save)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSaveMutationOptions = getSaveMutationOptions;
/**
 * @summary Save the data of user in the system
 */
const useSave = (options, queryClient) => {
    const mutationOptions = (0, exports.getSaveMutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSave = useSave;
/**
 * Gets detailed information for multiple users by their IDs
 * @summary Fetch multiple user detail according to its ids
 */
const findList1 = (userIds, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/list/${userIds}`,
        method: "GET",
        signal,
    });
};
exports.findList1 = findList1;
const getFindList1QueryKey = (userIds) => {
    return [`/users/list/${userIds}`];
};
exports.getFindList1QueryKey = getFindList1QueryKey;
const getFindList1QueryOptions = (userIds, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindList1QueryKey)(userIds);
    const queryFn = ({ signal, }) => (0, exports.findList1)(userIds, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userIds,
        ...queryOptions,
    };
};
exports.getFindList1QueryOptions = getFindList1QueryOptions;
/**
 * @summary Fetch multiple user detail according to its ids
 */
function useFindList1(userIds, options, queryClient) {
    const queryOptions = (0, exports.getFindList1QueryOptions)(userIds, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves the list of connections for a specific user
 * @summary Get a user connections
 */
const findUserConnections = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/connections`,
        method: "GET",
        signal,
    });
};
exports.findUserConnections = findUserConnections;
const getFindUserConnectionsQueryKey = (userId) => {
    return [`/users/${userId}/connections`];
};
exports.getFindUserConnectionsQueryKey = getFindUserConnectionsQueryKey;
const getFindUserConnectionsQueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getFindUserConnectionsQueryKey)(userId);
    const queryFn = ({ signal }) => (0, exports.findUserConnections)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getFindUserConnectionsQueryOptions = getFindUserConnectionsQueryOptions;
/**
 * @summary Get a user connections
 */
function useFindUserConnections(userId, options, queryClient) {
    const queryOptions = (0, exports.getFindUserConnectionsQueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Retrieves all users who have subscribed to the specified subscription plan
 * @summary Gets the users subscribed to a subscription plan name like Professional
 */
const getSubscribedUsers1 = (subscriptionPlanName, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/subscribed-users/${subscriptionPlanName}`,
        method: "GET",
        signal,
    });
};
exports.getSubscribedUsers1 = getSubscribedUsers1;
const getGetSubscribedUsers1QueryKey = (subscriptionPlanName) => {
    return [`/users/subscribed-users/${subscriptionPlanName}`];
};
exports.getGetSubscribedUsers1QueryKey = getGetSubscribedUsers1QueryKey;
const getGetSubscribedUsers1QueryOptions = (subscriptionPlanName, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ??
        (0, exports.getGetSubscribedUsers1QueryKey)(subscriptionPlanName);
    const queryFn = ({ signal }) => (0, exports.getSubscribedUsers1)(subscriptionPlanName, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!subscriptionPlanName,
        ...queryOptions,
    };
};
exports.getGetSubscribedUsers1QueryOptions = getGetSubscribedUsers1QueryOptions;
/**
 * @summary Gets the users subscribed to a subscription plan name like Professional
 */
function useGetSubscribedUsers1(subscriptionPlanName, options, queryClient) {
    const queryOptions = (0, exports.getGetSubscribedUsers1QueryOptions)(subscriptionPlanName, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Generates an HTML preview of a user profile for sharing purposes
 * @summary Get HTML preview of a user profile
 */
const previewProperty = (params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/previews`,
        method: "GET",
        params,
        signal,
    });
};
exports.previewProperty = previewProperty;
const getPreviewPropertyQueryKey = (params) => {
    return [`/users/previews`, ...(params ? [params] : [])];
};
exports.getPreviewPropertyQueryKey = getPreviewPropertyQueryKey;
const getPreviewPropertyQueryOptions = (params, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getPreviewPropertyQueryKey)(params);
    const queryFn = ({ signal, }) => (0, exports.previewProperty)(params, signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getPreviewPropertyQueryOptions = getPreviewPropertyQueryOptions;
/**
 * @summary Get HTML preview of a user profile
 */
function usePreviewProperty(params, options, queryClient) {
    const queryOptions = (0, exports.getPreviewPropertyQueryOptions)(params, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Creates a new user account in the system
 * @summary Register new user in the system
 */
const register1 = (skilledUser, params, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/register`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: skilledUser,
        params,
        signal,
    });
};
exports.register1 = register1;
const getRegister1MutationOptions = (options) => {
    const mutationKey = ["register1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data, params } = props ?? {};
        return (0, exports.register1)(data, params);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getRegister1MutationOptions = getRegister1MutationOptions;
/**
 * @summary Register new user in the system
 */
const useRegister1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getRegister1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useRegister1 = useRegister1;
/**
 * Sends an activation link to the user's email for account verification
 * @summary Request activation link
 */
const requestActivationLink1 = (requestActivationLink1Body, signal) => {
    const formUrlEncoded = new URLSearchParams();
    if (requestActivationLink1Body.email !== undefined) {
        formUrlEncoded.append(`email`, requestActivationLink1Body.email);
    }
    if (requestActivationLink1Body.password !== undefined) {
        formUrlEncoded.append(`password`, requestActivationLink1Body.password);
    }
    return (0, custom_instance_1.customInstance)({
        url: `/users/activation_link_request`,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: formUrlEncoded,
        signal,
    });
};
exports.requestActivationLink1 = requestActivationLink1;
const getRequestActivationLink1MutationOptions = (options) => {
    const mutationKey = ["requestActivationLink1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.requestActivationLink1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getRequestActivationLink1MutationOptions = getRequestActivationLink1MutationOptions;
/**
 * @summary Request activation link
 */
const useRequestActivationLink1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getRequestActivationLink1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useRequestActivationLink1 = useRequestActivationLink1;
/**
 * Searches for users matching the specified filter criteria
 * @summary Search users with specified filters
 */
const searchUsers1 = (userFilterRequest, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/search`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: userFilterRequest,
        signal,
    });
};
exports.searchUsers1 = searchUsers1;
const getSearchUsers1MutationOptions = (options) => {
    const mutationKey = ["searchUsers1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { data } = props ?? {};
        return (0, exports.searchUsers1)(data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSearchUsers1MutationOptions = getSearchUsers1MutationOptions;
/**
 * @summary Search users with specified filters
 */
const useSearchUsers1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSearchUsers1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSearchUsers1 = useSearchUsers1;
const sendPayedSusbscribersAlert1 = (signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/weekly-payed-subscribers-alert`,
        method: "GET",
        signal,
    });
};
exports.sendPayedSusbscribersAlert1 = sendPayedSusbscribersAlert1;
const getSendPayedSusbscribersAlert1QueryKey = () => {
    return [`/users/weekly-payed-subscribers-alert`];
};
exports.getSendPayedSusbscribersAlert1QueryKey = getSendPayedSusbscribersAlert1QueryKey;
const getSendPayedSusbscribersAlert1QueryOptions = (options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getSendPayedSusbscribersAlert1QueryKey)();
    const queryFn = ({ signal }) => (0, exports.sendPayedSusbscribersAlert1)(signal);
    return { queryKey, queryFn, ...queryOptions };
};
exports.getSendPayedSusbscribersAlert1QueryOptions = getSendPayedSusbscribersAlert1QueryOptions;
function useSendPayedSusbscribersAlert1(options, queryClient) {
    const queryOptions = (0, exports.getSendPayedSusbscribersAlert1QueryOptions)(options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Sends a verification code to the user's phone number for verification purposes
 * @summary Send a code to the previously saved phone number of the user
 */
const sendPhoneVerificationCodeCommand1 = (userId, phoneCodeRequestResource, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/phone-code-request`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: phoneCodeRequestResource,
        signal,
    });
};
exports.sendPhoneVerificationCodeCommand1 = sendPhoneVerificationCodeCommand1;
const getSendPhoneVerificationCodeCommand1MutationOptions = (options) => {
    const mutationKey = ["sendPhoneVerificationCodeCommand1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, data } = props ?? {};
        return (0, exports.sendPhoneVerificationCodeCommand1)(userId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getSendPhoneVerificationCodeCommand1MutationOptions = getSendPhoneVerificationCodeCommand1MutationOptions;
/**
 * @summary Send a code to the previously saved phone number of the user
 */
const useSendPhoneVerificationCodeCommand1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getSendPhoneVerificationCodeCommand1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useSendPhoneVerificationCodeCommand1 = useSendPhoneVerificationCodeCommand1;
/**
 * Returns all skills associated with a user
 * @summary Retrieve user skills
 */
const retrieveUserSkills = (userId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/skills`,
        method: "GET",
        signal,
    });
};
exports.retrieveUserSkills = retrieveUserSkills;
const getRetrieveUserSkillsQueryKey = (userId) => {
    return [`/users/${userId}/skills`];
};
exports.getRetrieveUserSkillsQueryKey = getRetrieveUserSkillsQueryKey;
const getRetrieveUserSkillsQueryOptions = (userId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? (0, exports.getRetrieveUserSkillsQueryKey)(userId);
    const queryFn = ({ signal }) => (0, exports.retrieveUserSkills)(userId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!userId,
        ...queryOptions,
    };
};
exports.getRetrieveUserSkillsQueryOptions = getRetrieveUserSkillsQueryOptions;
/**
 * @summary Retrieve user skills
 */
function useRetrieveUserSkills(userId, options, queryClient) {
    const queryOptions = (0, exports.getRetrieveUserSkillsQueryOptions)(userId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * This endpoint is not supported. Use save user profile to update skills instead.
 * @summary Add user skills
 */
const addUserSkills1 = (userId, userSkill, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/skills`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: userSkill,
        signal,
    });
};
exports.addUserSkills1 = addUserSkills1;
const getAddUserSkills1MutationOptions = (options) => {
    const mutationKey = ["addUserSkills1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, data } = props ?? {};
        return (0, exports.addUserSkills1)(userId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getAddUserSkills1MutationOptions = getAddUserSkills1MutationOptions;
/**
 * @summary Add user skills
 */
const useAddUserSkills1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getAddUserSkills1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useAddUserSkills1 = useAddUserSkills1;
/**
 * Returns all endorsements for a specific user skill
 * @summary Retrieve skill endorsements
 */
const retrieveSkillEndorsements1 = (userId, skillId, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/skills/${skillId}/endorsements`,
        method: "GET",
        signal,
    });
};
exports.retrieveSkillEndorsements1 = retrieveSkillEndorsements1;
const getRetrieveSkillEndorsements1QueryKey = (userId, skillId) => {
    return [`/users/${userId}/skills/${skillId}/endorsements`];
};
exports.getRetrieveSkillEndorsements1QueryKey = getRetrieveSkillEndorsements1QueryKey;
const getRetrieveSkillEndorsements1QueryOptions = (userId, skillId, options) => {
    const { query: queryOptions } = options ?? {};
    const queryKey = queryOptions?.queryKey ??
        (0, exports.getRetrieveSkillEndorsements1QueryKey)(userId, skillId);
    const queryFn = ({ signal }) => (0, exports.retrieveSkillEndorsements1)(userId, skillId, signal);
    return {
        queryKey,
        queryFn,
        enabled: !!(userId && skillId),
        ...queryOptions,
    };
};
exports.getRetrieveSkillEndorsements1QueryOptions = getRetrieveSkillEndorsements1QueryOptions;
/**
 * @summary Retrieve skill endorsements
 */
function useRetrieveSkillEndorsements1(userId, skillId, options, queryClient) {
    const queryOptions = (0, exports.getRetrieveSkillEndorsements1QueryOptions)(userId, skillId, options);
    const query = (0, react_query_1.useQuery)(queryOptions, queryClient);
    query.queryKey = queryOptions.queryKey;
    return query;
}
/**
 * Allows a user to endorse another user's skill
 * @summary Endorse a user skill
 */
const endorseUserSkill1 = (userId, skillId, skillEndorsement, signal) => {
    return (0, custom_instance_1.customInstance)({
        url: `/users/${userId}/skills/${skillId}/endorsements`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: skillEndorsement,
        signal,
    });
};
exports.endorseUserSkill1 = endorseUserSkill1;
const getEndorseUserSkill1MutationOptions = (options) => {
    const mutationKey = ["endorseUserSkill1"];
    const { mutation: mutationOptions } = options
        ? options.mutation &&
            "mutationKey" in options.mutation &&
            options.mutation.mutationKey
            ? options
            : { ...options, mutation: { ...options.mutation, mutationKey } }
        : { mutation: { mutationKey } };
    const mutationFn = (props) => {
        const { userId, skillId, data } = props ?? {};
        return (0, exports.endorseUserSkill1)(userId, skillId, data);
    };
    return { mutationFn, ...mutationOptions };
};
exports.getEndorseUserSkill1MutationOptions = getEndorseUserSkill1MutationOptions;
/**
 * @summary Endorse a user skill
 */
const useEndorseUserSkill1 = (options, queryClient) => {
    const mutationOptions = (0, exports.getEndorseUserSkill1MutationOptions)(options);
    return (0, react_query_1.useMutation)(mutationOptions, queryClient);
};
exports.useEndorseUserSkill1 = useEndorseUserSkill1;
