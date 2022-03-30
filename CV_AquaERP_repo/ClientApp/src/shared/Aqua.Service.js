import http from "./http-common";

class AquaDataService{
    getAll()
    {
        return http.get("/HrDepartmentMaster/GetHrDepartmentMaster")
    }
}

export default new AquaDataService();