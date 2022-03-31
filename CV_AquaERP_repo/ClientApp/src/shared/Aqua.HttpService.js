import http from "./http-common";

class AquaDataService{
    getAll(apiUrl)
    {
        return http.get(apiUrl)
    }
    get(apiUrl,id) {
        return http.get(`${apiUrl}/${id}`);
      }
      create(apiUrl,data) {
        return http.post(apiUrl, data);
      }
      update(apiUrl,id, data) {
        return http.put(`${apiUrl}/${id}`, data);
      }
      delete(apiUrl,id) {
        return http.delete(`${apiUrl}/${id}`);
      }
}

export default new AquaDataService();