struct GetNewsRes {
  1: i32 code,
  2: string msg,
  3: list<NewInfo> data
}

struct NewInfo {
  1: string title,
  2: string content,
}

struct AddNewRes {
  1: i32 code,
  2: string msg,
  3: NewInfo data
}


service SaveList{
   // 保存新闻
   AddNewRes addNew(1:string title, 2:string content),

   // 获取新闻列表
   GetNewsRes getNews()
}
