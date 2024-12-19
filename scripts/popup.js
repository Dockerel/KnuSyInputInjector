document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("../scripts/inject.js");
      if (!response.ok)
        throw new Error("스크립트 파일을 불러오는 데 실패했습니다.");

      const scriptContent = await response.text();
      await navigator.clipboard.writeText(scriptContent);

      alert(
        "스크립트가 클립보드에 복사되었습니다! F12를 눌러 콘솔을 열고 붙여넣은 뒤 Enter를 눌러 실행하세요."
      );
      window.close();
    } catch (error) {
      console.error("스크립트 복사 중 오류:", error);
      alert(
        "스크립트를 복사하는 데 실패했습니다. 자세한 내용은 콘솔에서 확인하세요."
      );
    }
  });
});
