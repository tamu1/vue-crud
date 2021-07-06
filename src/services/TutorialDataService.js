import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/read.php");
  }

  get(id) {
    return http.get(`/single_read.php?id=${id}`);
  }

  create(params) {
    console.log(params);
    return http.post("/create.php", params);
  }

  update(params) {
    return http.put(`/update.php`, params);
  }

  delete(id) {
    
    return http.delete(`/delete.php`,{data:{id}});
  }

}

export default new TutorialDataService();