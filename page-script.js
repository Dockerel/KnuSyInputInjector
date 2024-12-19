// 이제 같은 window 객체에 접근할 수 있습니다.
if (window.scwin) {
  console.log("scwin 객체 접근 성공:", window.scwin);
  window.scwin.searchParamInput(); // 페이지의 scwin 객체에 접근하여 함수 실행
} else {
  console.log("scwin 객체를 찾을 수 없습니다.");
}
