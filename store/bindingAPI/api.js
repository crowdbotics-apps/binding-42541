import axios from "axios"
const bindingAPI = axios.create({
  baseURL: "https://binding-42541.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return bindingAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return bindingAPI.post(`/api/v1/login/`, payload)
}
function api_v1_profile_list(payload) {
  return bindingAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return bindingAPI.post(`/api/v1/profile/`, payload)
}
function api_v1_profile_retrieve(payload) {
  return bindingAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return bindingAPI.put(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_partial_update(payload) {
  return bindingAPI.patch(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_destroy(payload) {
  return bindingAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return bindingAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return bindingAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return bindingAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return bindingAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return bindingAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return bindingAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return bindingAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return bindingAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return bindingAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return bindingAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return bindingAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return bindingAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_retrieve,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
