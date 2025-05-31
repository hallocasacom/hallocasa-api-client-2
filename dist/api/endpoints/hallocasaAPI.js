"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHallocasaAPI = void 0;
const custom_instance_1 = require("../custom-instance");
const getHallocasaAPI = () => {
    /**
     * @summary Post a attachment request
     */
    const createAttachment1 = (attachment) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/attachments`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: attachment,
        });
    };
    /**
     * @summary Get details to download a file
     */
    const retrieveAttachment1 = (fileId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/attachments/${fileId}`,
            method: "GET",
        });
    };
    /**
     * @summary Notify a new file has been loaded in S3
     */
    const updateAttachment1 = (fileId, notifyUploadRequest) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/attachments/${fileId}/notify-upload`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: notifyUploadRequest,
        });
    };
    /**
     * Retrieves the chat allowance settings between two users. User must be one of the involved parties.
     * @summary Get chat allowance for a user pair
     */
    const getChatAllowance1 = (userPair) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/allowance/${userPair}`,
            method: "GET",
        });
    };
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
    /**
     * Retrieves summaries of all chat conversations for a user
     * @summary Get the user chat summaries
     */
    const getChatSummaryByUser1 = (userId, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/user_summary/${userId}`,
            method: "GET",
            params,
        });
    };
    /**
     * Creates and returns a chat ticket that can be used to establish a chat connection
     * @summary Retrieve a chat ticket for the authenticated user
     */
    const retrieveUserTicket1 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/chat/ticket`, method: "GET" });
    };
    /**
     * @summary Get a user connections
     */
    const findUserConnections2 = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/users/${userId}/connections`,
            method: "GET",
        });
    };
    /**
     * @summary Get a user Contracts
     */
    const findUserContracts1 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/contract`, method: "GET" });
    };
    /**
     * @summary Save a user Contract
     */
    const save2 = (contract) => {
        return (0, custom_instance_1.customInstance)({
            url: `/contract`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: contract,
        });
    };
    /**
     * @summary Get a message by conversation
     */
    const getConversation1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/messages`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Post a message
     */
    const sendMessage1 = (message) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/messages`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: message,
        });
    };
    /**
     * Retrieves notifications for a specific user and notification type. Designed for autopilot integration.
     * @summary Get user notifications by type
     */
    const getByUserWithResult1 = (type, autopilotUser, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/notifications/${type}`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: autopilotUser,
            params,
        });
    };
    /**
     * @summary Retrieve a user chat
     */
    const retrieveChatUser1 = (id) => {
        return (0, custom_instance_1.customInstance)({ url: `/chat/user/${id}`, method: "GET" });
    };
    /**
     * @summary Retrieve a user chat status
     */
    const retrieveChatUserStatus1 = (id) => {
        return (0, custom_instance_1.customInstance)({
            url: `/chat/user/${id}/status`,
            method: "GET",
        });
    };
    /**
     * Retrieves a list of all available country phone prefixes with their details
     * @summary Returns all country-phone-prefixes list
     */
    const get2 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/country-phone-prefixes`,
            method: "GET",
        });
    };
    /**
     * @summary Method to find all the countries
     */
    const getAllCountries2 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/countries`, method: "GET" });
    };
    /**
     * @summary Method to find a country by the caller IP
     */
    const getCountryByIp1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/countries/current`,
            method: "GET",
        });
    };
    /**
     * @summary Retrieves the list of all exchange available in application
     */
    const getCurrencies1 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/currencies`, method: "GET" });
    };
    /**
     * Returns a map of currency exchange rates between different currencies
     * @summary Method to find all the exchange rates
     */
    const findExchangeRates1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/exchange-rates`,
            method: "GET",
        });
    };
    /**
     * Retrieves geolocation information based on various search criteria including coordinates, address text, or auto-complete suggestions
     * @summary Retrieves geolocation information
     */
    const getGeoLocationsByLatLng1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/geo-locations`,
            method: "GET",
            params,
        });
    };
    /**
     * Returns a list of all supported languages in the system
     * @summary Get all available languages
     */
    const getAllLanguages1 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/languages`, method: "GET" });
    };
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
    /**
     * Retrieves the complete list of available locales in the system
     * @summary Returns all language list locale entries
     */
    const find3 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/locales`, method: "GET" });
    };
    /**
     * Retrieves the locale translations in the specified language
     * @summary Returns locale language list
     */
    const getLanguages1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/locales/translations`,
            method: "GET",
            params,
        });
    };
    /**
     * Translate the provided text to the specified target language
     * @summary Get text translation to a target language
     */
    const translateText1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/text-translations`,
            method: "GET",
            params,
        });
    };
    /**
     * Initiates the process to export all property data in Kyero format to S3 storage. Requires admin privileges.
     * @summary Manually trigger Kyero exports to S3
     */
    const triggerKyeroExport1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-download/trigger-kyero-export`,
            method: "POST",
        });
    };
    /**
     * Generates and returns property data in XML format for a specific user and format type.
     * @summary Get property XML for specific user
     */
    const xml1 = (userId, xmlFormat) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-download/${userId}/${xmlFormat}.xml`,
            method: "GET",
        });
    };
    /**
     * Redirects to the XML file stored in S3 for a specific user and format. This endpoint is deprecated.
     * @deprecated
     * @summary Redirect to XML file (Deprecated)
     */
    const xmlRedirect1 = (userId, xmlFormat) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-download/${userId}/${xmlFormat}.xml.redirect`,
            method: "GET",
        });
    };
    /**
     * Get the list of supported file formats for bulk upload
     * @summary Get available formats
     */
    const getFormats1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-uploads/formats`,
            method: "GET",
        });
    };
    /**
     * Upload properties using Kyero format with XML content in the request body
     * @summary Upload Kyero properties with XML in request body
     */
    const uploadKyeroProperties2 = (uploadKyeroProperties2Body) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-uploads/in-body`,
            method: "POST",
            headers: { "Content-Type": "application/xml" },
            data: uploadKyeroProperties2Body,
        });
    };
    /**
     * Upload properties in Kyero format by providing a URL to an XML file
     * @summary Upload Kyero properties from URL
     */
    const uploadKyeroPropertiesFromUrl1 = (xmlUrl) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-uploads/in-url`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: xmlUrl,
        });
    };
    /**
     * Upload properties with XML content in the request body using the specified format
     * @summary Upload properties in specified format with XML in request body
     */
    const uploadProperties1 = (format, uploadProperties1Body) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-uploads/${format}/in-body`,
            method: "POST",
            headers: { "Content-Type": "application/xml" },
            data: uploadProperties1Body,
        });
    };
    /**
     * Upload properties in the specified format by providing a URL to an XML file
     * @summary Upload properties in specified format from URL
     */
    const uploadPropertiesFromUrl1 = (format, xmlUrl) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-bulk-uploads/${format}/in-url`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: xmlUrl,
        });
    };
    /**
     * Exports property data to Facebook Marketplace format within the specified date range
     * @summary Export properties to Facebook Marketplace
     */
    const uploadKyeroProperties = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/facebook-properties`,
            method: "GET",
            params,
        });
    };
    /**
     * For Group Owners, this list will return removed, left, invited and requested members as well
     * @summary Show all members of Group
     */
    const getGroupMembers1 = (groupId, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/members`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Accept Group Invitation
     */
    const groupInvite2 = (groupId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/accept-invite`,
            method: "POST",
        });
    };
    /**
     * @summary Request Invitation to Group
     */
    const groupInvite = (groupId, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/invite`,
            method: "POST",
            params,
        });
    };
    /**
     * @summary Leave Group
     */
    const groupLeave1 = (groupId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/leave`,
            method: "POST",
        });
    };
    /**
     * @summary Request Admission to Group
     */
    const groupRequest1 = (groupId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/request`,
            method: "POST",
        });
    };
    /**
     * Acceptable Status values are:  ACCEPTED, REJECTED, REMOVED
     * @summary Update the group member status from groupId supplied
     */
    const updateGroupMembershipStatus1 = (groupId, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/member-status`,
            method: "POST",
            params,
        });
    };
    /**
     * This process is reversible
     * @summary Archive the group with id supplied
     */
    const archiveGroup1 = (id) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${id}/archive`,
            method: "POST",
        });
    };
    /**
     * This process is reversible
     * @summary Deactivate the group with id supplied
     */
    const deactivateGroup1 = (id) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${id}/deactivate`,
            method: "POST",
        });
    };
    /**
     * This process is not reversible
     * @summary Delete the group with id supplied
     */
    const deleteGroup1 = (id) => {
        return (0, custom_instance_1.customInstance)({ url: `/groups/${id}`, method: "DELETE" });
    };
    /**
     * @summary Return the groups list with specified user id that user has archived
     */
    const findArchivedGroupsByUser1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/archived`,
            method: "GET",
            params,
        });
    };
    /**
     * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
     * @summary Return the group with specified id
     */
    const findGroup1 = (groupId) => {
        return (0, custom_instance_1.customInstance)({ url: `/groups/${groupId}`, method: "GET" });
    };
    /**
     * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
     * @summary Return the group with specified id
     */
    const findGroupProperties1 = (groupId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/properties`,
            method: "GET",
        });
    };
    /**
     * Filter the groups existing in system with specified id. Returns empty if none group match the id and user is not member/owner of it
     * @summary Return the group with specified id
     */
    const findGroupPropertiesSearch1 = (groupId, propertyFilterCriteria) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/properties/search`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: propertyFilterCriteria,
        });
    };
    /**
     * This will return both owned Groups and Groups the user is a member of
     * @summary Return the groups list with specified user id
     */
    const findGroupsByUser1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups`,
            method: "GET",
            params,
        });
    };
    /**
     * Consider that only user can saveNew its groups
     * @summary Create or update the group supplied
     */
    const saveGroup1 = (group) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: group,
        });
    };
    /**
     * @summary Return the groups list with specified user id that are inactive
     */
    const findInactiveGroupsByUser1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/inactive`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Return the groups list with specified user id that user has invitations of
     */
    const findInvitedGroupsByUser1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/invited`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Return the groups list with specified user id that user has requested
     */
    const findRequestedGroupsByUser1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/requested`,
            method: "GET",
            params,
        });
    };
    /**
     * Retrieves the list of property fields that will be showed when selecting the type, proposal, location, and country specified. All the property keys are required, otherwise system generate a bad request, because without all the parameters, it is not posible filter the property fields
     * @summary Retrieves property fields filtered by key
     */
    const getPropertyFilters2 = (propertyKey) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-fields/filter-by-key`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: propertyKey,
        });
    };
    /**
     * Retrieves options for a specific property filter based on submitted filters
     * @summary Get property field options
     */
    const getPropertyFieldOptions1 = (filterId, propertyFilterSubmission) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property_filters/options/${filterId}`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: propertyFilterSubmission,
        });
    };
    /**
     * Retrieves a list of property filters, optionally filtered by filter nature IDs
     * @summary Get property filters
     */
    const getPropertyFilters = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/property_filters`,
            method: "GET",
            params,
        });
    };
    /**
     * Retrieves a list of all available property locations
     * @summary Method to find all the property locations
     */
    const getAllCountries = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-locations`,
            method: "GET",
        });
    };
    /**
     * @summary Method to find all the property proposals
     */
    const getAllPropertyProposals1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-proposals`,
            method: "GET",
        });
    };
    /**
     * @summary Publication state update
     */
    const changePublicationStatus2 = (propertyId, changePublicationStatus2Body) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/${propertyId}/publication-state`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: changePublicationStatus2Body,
        });
    };
    /**
     * This process is not reversible
     * @summary Delete the property with id supplied
     */
    const deleteProperty1 = (id) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/${id}`,
            method: "DELETE",
        });
    };
    /**
     * Returns a randomized list of properties with the specified count limit
     * @summary Fetch random list of properties, with basic data
     */
    const fetchRandomProperties2 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/fetch-random`,
            method: "GET",
        });
    };
    /**
     * @summary Fetch random list of properties related to a given property
     */
    const fetchRandomProperties = (propertyId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/${propertyId}/related-properties`,
            method: "GET",
        });
    };
    /**
     * @summary Search properties with specified filters
     */
    const findProperties1 = (propertyFilterCriteria) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/search`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: propertyFilterCriteria,
        });
    };
    /**
     * @deprecated
     * @summary Return the property list with specified user id
     */
    const findPropertiesByLocationRange1 = (range) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/by_location_range/${range}`,
            method: "GET",
        });
    };
    /**
     * Filter the properties existing in system with specified id. Returns empty if none property match the id
     * @summary Return the property with specified id
     */
    const findProperty1 = (propertyId, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/${propertyId}`,
            method: "GET",
            params,
        });
    };
    /**
     * Filter the properties existing in system with specified id. Returns empty if none property match the id
     * @summary Return the property with specified id
     */
    const findPropertyOldUrl1 = (id) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/detail/${id}`,
            method: "GET",
        });
    };
    /**
     * @summary Password Protected Property for Signed in User
     */
    const getDraftsProperties1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/drafts`,
            method: "GET",
        });
    };
    /**
     * @summary Get recently created properties within specified minutes (default 60)
     */
    const getRecentProperties1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/recent`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Password Protected Property for Signed in User
     */
    const getSecuredProperties1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/password-protected`,
            method: "GET",
        });
    };
    /**
     * Returns HTML preview for sharing a property on social media or messaging apps
     * @summary Get HTML preview for a property
     */
    const previewProperty2 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/previews`,
            method: "GET",
            params,
        });
    };
    /**
     * Consider that only user can saveNew its properties
     * @summary Create or update the property supplied
     */
    const saveProperty1 = (property) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: property,
        });
    };
    const sendAlert2 = (weeklyAlertRange) => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/weekly-alert`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: weeklyAlertRange,
        });
    };
    const sendGroupAlert1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/properties/weekly-group-alert`,
            method: "POST",
        });
    };
    /**
     * Retrieves a list of all property types available in the system, including their IDs, names, language keys, active status, and associated property type groups.
     * @summary Get all property types
     */
    const getAllPropertyTypes1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/property-types`,
            method: "GET",
        });
    };
    /**
     * @summary Publication state update
     */
    const changePublicationStatus = (testimonialId, publicationState) => {
        return (0, custom_instance_1.customInstance)({
            url: `/testimonial/${testimonialId}/publication-state/${publicationState}`,
            method: "POST",
        });
    };
    /**
     * @summary Fetch User Posted list of testimonials
     */
    const fetchPublishedTestimonials1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/testimonial/published`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Fetch User Received list of testimonials
     */
    const fetchReceivedTestimonials1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/testimonial`,
            method: "GET",
            params,
        });
    };
    /**
     * Consider that only user can save new testimonials
     * @summary Create or update the Testimonial supplied
     */
    const saveTestimonial1 = (testimonial) => {
        return (0, custom_instance_1.customInstance)({
            url: `/testimonial`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: testimonial,
        });
    };
    /**
     * @summary Return the testimonial with specified id, it needs to be published
     */
    const findTestimonial1 = (testimonialId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/testimonial/${testimonialId}`,
            method: "GET",
        });
    };
    /**
     * @summary Return the testimonial Requests a user Created
     */
    const findTestimonialRequests1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/testimonial/requested`,
            method: "GET",
        });
    };
    /**
     * @summary Return the testimonial Requests a user Received
     */
    const findTestimonialRequestsReceived1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/testimonial/request-received`,
            method: "GET",
        });
    };
    /**
     * @summary Return the property list with specified user id
     */
    const findPropertiesByUser1 = (id, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${id}/properties`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Return the testimonials list with specified user id
     */
    const findTestimonialsByUser1 = (id, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${id}/testimonials`,
            method: "GET",
            params,
        });
    };
    /**
     * @summary Request testimonial from specified user id
     */
    const requestTestimonialFromUser1 = (id) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${id}/request-testimonial`,
            method: "POST",
        });
    };
    const saveLog1 = (logEntry) => {
        return (0, custom_instance_1.customInstance)({
            url: `/log`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: logEntry,
        });
    };
    /**
     * In this email it will be contained all process information to change password and recover access
     * @summary Send an email to user that has forgotted his/her password
     */
    const sendEmail1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/password_recovery/send_email`,
            method: "GET",
        });
    };
    /**
     * @summary Update the password user, finishing the recovery password process
     */
    const updatePassword1 = (passwordRecoveryRequest) => {
        return (0, custom_instance_1.customInstance)({
            url: `/password_recovery/update_password`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: passwordRecoveryRequest,
        });
    };
    /**
     * @summary Validate that password recovery token supplied was valid and current
     */
    const validateToken1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/password_recovery/validate_token`,
            method: "GET",
        });
    };
    /**
     * Generates an authorization code to be used with the token endpoint
     * @summary Authorize client application
     */
    const authorize1 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/security/auth`, method: "GET" });
    };
    /**
     * Exchanges the provided authorization code, username, and password for a token through which private application resources can be accessed. Note that the token expires in 15 minutes. When this happens, you must invoke this service again with the previously described parameters.
     * @summary Exchange authorization code for access token
     */
    const requestToken1 = (requestToken1Body) => {
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
        });
    };
    /**
     * @summary Create checkout-session
     */
    const createCheckoutSession2 = (checkoutSessionDto) => {
        return (0, custom_instance_1.customInstance)({
            url: `/checkout-sessions`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: checkoutSessionDto,
        });
    };
    /**
     * @summary Create checkout-session
     */
    const createCheckoutSession = (customerSessionDto) => {
        return (0, custom_instance_1.customInstance)({
            url: `/customer-sessions`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: customerSessionDto,
        });
    };
    /**
     * @summary Notify user subscription change
     */
    const postUserSubscriptionChange1 = (stripeEvent) => {
        return (0, custom_instance_1.customInstance)({
            url: `/stripe-webhooks/user-subscription-update`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: stripeEvent,
        });
    };
    /**
     * @summary Return the active and available subscription plans
     */
    const getAll1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/subscription-plans`,
            method: "GET",
            params,
        });
    };
    const get = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/subscriptions`,
            method: "GET",
        });
    };
    const getActiveFeatures1 = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/subscriptions/active/features`,
            method: "GET",
        });
    };
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
    /**
     * Retrieves the results for a specific alert
     * @summary Get alert results
     */
    const getAlertResult1 = (userId, alertId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/alerts/${alertId}/result`,
            method: "GET",
        });
    };
    /**
     * Returns all alerts associated with the specified user ID
     * @summary Get all alerts for a user
     */
    const getByUser2 = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/alerts`,
            method: "GET",
        });
    };
    /**
     * Creates a new alert for the specified user
     * @summary Create a new alert
     */
    const saveAlert1 = (userId, alert) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/alerts`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: alert,
        });
    };
    /**
     * Retrieves all newsletters that the specified user has subscribed to
     * @summary Get newsletters subscribed to
     */
    const newsletterAlerts1 = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/alerts/newsletter-alerts`,
            method: "GET",
        });
    };
    /**
     * Retrieves all subscribers to newsletters owned by the specified user
     * @summary Get newsletter subscribers
     */
    const newsletterSubscribers1 = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/alerts/newsletter-subscribers`,
            method: "GET",
        });
    };
    /**
     * Triggers the sending of customized property alerts to users
     * @summary Send customized property alerts
     */
    const sendAlert = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/alerts/send-alert`,
            method: "POST",
        });
    };
    /**
     * Returns a list of all available brokerages in the system
     * @summary Retrieve all brokerages
     */
    const retrieve1 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/brokerages`, method: "GET" });
    };
    /**
     * Gets all endorsements for a specified user. Can be filtered by endorser ID.
     * @summary Retrieve endorsements for a user
     */
    const retrieveEndorsementsByUser1 = (userId, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/endorsements`,
            method: "GET",
            params,
        });
    };
    /**
     * Retrieves all favorites for a specific user
     * @summary Get user favorites
     */
    const getByUser = (userId, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/favorites`,
            method: "GET",
            params,
        });
    };
    /**
     * Adds a new favorite item for a specific user
     * @summary Add a favorite
     */
    const postUserFavorite1 = (userId, favorite) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/favorites`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: favorite,
        });
    };
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
    /**
     * Searches for users within a specific group matching the specified filter criteria
     * @summary Search users within a specified group
     */
    const searchGroupUsers1 = (groupId, userFilterRequest) => {
        return (0, custom_instance_1.customInstance)({
            url: `/groups/${groupId}/users/search`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: userFilterRequest,
        });
    };
    /**
     * Returns a list of all available user skills in the system
     * @summary Retrieve all user skills
     */
    const retrieveUserSkills2 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/skills`, method: "GET" });
    };
    /**
     * Returns all available user types in the system
     * @summary Get user types
     */
    const getUserTypes1 = () => {
        return (0, custom_instance_1.customInstance)({ url: `/user-types`, method: "GET" });
    };
    /**
     * Activates a user account using the activation key sent to their email
     * @summary Activate the account of specified user
     */
    const activateUser1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/activate-user`,
            method: "GET",
        });
    };
    /**
     * Verifies the code that was sent to the user's phone
     * @summary Verify the phone code sent to user
     */
    const checkPhoneVerificationCodeCommand1 = (userId, phoneCodeCheckResource) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/phone-code-check`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: phoneCodeCheckResource,
        });
    };
    /**
     * Retrieves a random selection of users based on specified criteria
     * @summary Fetch random list of users, with basic data
     */
    const fetchRandomUsers1 = (userListRequest) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/fetch-random`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: userListRequest,
        });
    };
    /**
     * Gets detailed user information by user ID
     * @summary Fetch user detail according to its id
     */
    const find = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}`,
            method: "GET",
        });
    };
    /**
     * Gets user information by their unique profile name
     * @summary Fetch user detail according to its profile name
     */
    const find1 = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users`,
            method: "GET",
            params,
        });
    };
    /**
     * Updates user profile information in the system
     * @summary Save the data of user in the system
     */
    const save = (skilledUser) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: skilledUser,
        });
    };
    /**
     * Gets detailed information for multiple users by their IDs
     * @summary Fetch multiple user detail according to its ids
     */
    const findList1 = (userIds) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/list/${userIds}`,
            method: "GET",
        });
    };
    /**
     * Retrieves the list of connections for a specific user
     * @summary Get a user connections
     */
    const findUserConnections = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/connections`,
            method: "GET",
        });
    };
    /**
     * Retrieves all users who have subscribed to the specified subscription plan
     * @summary Gets the users subscribed to a subscription plan name like Professional
     */
    const getSubscribedUsers1 = (subscriptionPlanName) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/subscribed-users/${subscriptionPlanName}`,
            method: "GET",
        });
    };
    /**
     * Generates an HTML preview of a user profile for sharing purposes
     * @summary Get HTML preview of a user profile
     */
    const previewProperty = (params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/previews`,
            method: "GET",
            params,
        });
    };
    /**
     * Creates a new user account in the system
     * @summary Register new user in the system
     */
    const register1 = (skilledUser, params) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/register`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: skilledUser,
            params,
        });
    };
    /**
     * Sends an activation link to the user's email for account verification
     * @summary Request activation link
     */
    const requestActivationLink1 = (requestActivationLink1Body) => {
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
        });
    };
    /**
     * Searches for users matching the specified filter criteria
     * @summary Search users with specified filters
     */
    const searchUsers1 = (userFilterRequest) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/search`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: userFilterRequest,
        });
    };
    const sendPayedSusbscribersAlert1 = () => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/weekly-payed-subscribers-alert`,
            method: "GET",
        });
    };
    /**
     * Sends a verification code to the user's phone number for verification purposes
     * @summary Send a code to the previously saved phone number of the user
     */
    const sendPhoneVerificationCodeCommand1 = (userId, phoneCodeRequestResource) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/phone-code-request`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: phoneCodeRequestResource,
        });
    };
    /**
     * Returns all skills associated with a user
     * @summary Retrieve user skills
     */
    const retrieveUserSkills = (userId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/skills`,
            method: "GET",
        });
    };
    /**
     * This endpoint is not supported. Use save user profile to update skills instead.
     * @summary Add user skills
     */
    const addUserSkills1 = (userId, userSkill) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/skills`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: userSkill,
        });
    };
    /**
     * Returns all endorsements for a specific user skill
     * @summary Retrieve skill endorsements
     */
    const retrieveSkillEndorsements1 = (userId, skillId) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/skills/${skillId}/endorsements`,
            method: "GET",
        });
    };
    /**
     * Allows a user to endorse another user's skill
     * @summary Endorse a user skill
     */
    const endorseUserSkill1 = (userId, skillId, skillEndorsement) => {
        return (0, custom_instance_1.customInstance)({
            url: `/users/${userId}/skills/${skillId}/endorsements`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: skillEndorsement,
        });
    };
    return {
        createAttachment1,
        retrieveAttachment1,
        updateAttachment1,
        getChatAllowance1,
        updateChatAllowance1,
        getChatSummaryByUser1,
        retrieveUserTicket1,
        findUserConnections2,
        findUserContracts1,
        save2,
        getConversation1,
        sendMessage1,
        getByUserWithResult1,
        retrieveChatUser1,
        retrieveChatUserStatus1,
        get2,
        getAllCountries2,
        getCountryByIp1,
        getCurrencies1,
        findExchangeRates1,
        getGeoLocationsByLatLng1,
        getAllLanguages1,
        delete1,
        find3,
        getLanguages1,
        translateText1,
        triggerKyeroExport1,
        xml1,
        xmlRedirect1,
        getFormats1,
        uploadKyeroProperties2,
        uploadKyeroPropertiesFromUrl1,
        uploadProperties1,
        uploadPropertiesFromUrl1,
        uploadKyeroProperties,
        getGroupMembers1,
        groupInvite2,
        groupInvite,
        groupLeave1,
        groupRequest1,
        updateGroupMembershipStatus1,
        archiveGroup1,
        deactivateGroup1,
        deleteGroup1,
        findArchivedGroupsByUser1,
        findGroup1,
        findGroupProperties1,
        findGroupPropertiesSearch1,
        findGroupsByUser1,
        saveGroup1,
        findInactiveGroupsByUser1,
        findInvitedGroupsByUser1,
        findRequestedGroupsByUser1,
        getPropertyFilters2,
        getPropertyFieldOptions1,
        getPropertyFilters,
        getAllCountries,
        getAllPropertyProposals1,
        changePublicationStatus2,
        deleteProperty1,
        fetchRandomProperties2,
        fetchRandomProperties,
        findProperties1,
        findPropertiesByLocationRange1,
        findProperty1,
        findPropertyOldUrl1,
        getDraftsProperties1,
        getRecentProperties1,
        getSecuredProperties1,
        previewProperty2,
        saveProperty1,
        sendAlert2,
        sendGroupAlert1,
        getAllPropertyTypes1,
        changePublicationStatus,
        fetchPublishedTestimonials1,
        fetchReceivedTestimonials1,
        saveTestimonial1,
        findTestimonial1,
        findTestimonialRequests1,
        findTestimonialRequestsReceived1,
        findPropertiesByUser1,
        findTestimonialsByUser1,
        requestTestimonialFromUser1,
        saveLog1,
        sendEmail1,
        updatePassword1,
        validateToken1,
        authorize1,
        requestToken1,
        createCheckoutSession2,
        createCheckoutSession,
        postUserSubscriptionChange1,
        getAll1,
        get,
        getActiveFeatures1,
        deleteAlert1,
        getAlertResult1,
        getByUser2,
        saveAlert1,
        newsletterAlerts1,
        newsletterSubscribers1,
        sendAlert,
        retrieve1,
        retrieveEndorsementsByUser1,
        getByUser,
        postUserFavorite1,
        removeUserFavorite1,
        searchGroupUsers1,
        retrieveUserSkills2,
        getUserTypes1,
        activateUser1,
        checkPhoneVerificationCodeCommand1,
        fetchRandomUsers1,
        find,
        find1,
        save,
        findList1,
        findUserConnections,
        getSubscribedUsers1,
        previewProperty,
        register1,
        requestActivationLink1,
        searchUsers1,
        sendPayedSusbscribersAlert1,
        sendPhoneVerificationCodeCommand1,
        retrieveUserSkills,
        addUserSkills1,
        retrieveSkillEndorsements1,
        endorseUserSkill1,
    };
};
exports.getHallocasaAPI = getHallocasaAPI;
