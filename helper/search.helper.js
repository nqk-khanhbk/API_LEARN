module.exports = (query) => {
    // tạo 1 object từ khóa tìm kiếm
    let objectSearch = {
      keyword: "",
    };
    if (query.keyword) {
      objectSearch.keyword = query.keyword;
      const regex = new RegExp(objectSearch.keyword, "i");
      objectSearch.regex = regex;
    }
    return objectSearch;
  };