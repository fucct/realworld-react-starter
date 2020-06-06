function validateAccess(props) {
  const { token } = props.location.state;
  if (!token) {
    alert("로그인 후 이용해주세요.");
    props.history.replace("/sign-in")
  }
}

export default validateAccess;