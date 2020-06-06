export const validateAccess = history => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("로그인 후 이용해주세요.");
    history.replace("/sign-in")
  }
};

export const errorHandling = (error, history) => {
  if (error.response) {
    alert("에러가 발생했습니다..");
    console.log(error.response);
    history.replace("/");
  }
}
