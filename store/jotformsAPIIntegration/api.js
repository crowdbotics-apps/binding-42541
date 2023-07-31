import axios from "axios";
const jotformsAPIIntegration = axios.create({
  baseURL: "https://api.jotform.com/user",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function jotformsapiintegration_get_reports_read(payload) {
  return jotformsAPIIntegration.get(`/reports`, {
    params: {
      apiKey: payload.apiKey
    }
  });
}

function jotformsapiintegration_post_register_create(payload) {
  return jotformsAPIIntegration.post(`/register`, payload.data);
}

export const apiService = {
  jotformsapiintegration_get_reports_read,
  jotformsapiintegration_post_register_create
};