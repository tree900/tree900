const form = document.getElementById('blogForm');
const output = document.getElementById('output');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const combination = document.getElementById('combination').value;
  const keywordInput = document.getElementById('keyword').value.trim();
  if (!keywordInput) {
    output.textContent = '키워드를 입력해주세요.';
    return;
  }

  // GPT에게 보낼 프롬프트 구성
  const prompt = `당신은 블로그 글 전문 작가입니다.
선택된 조합은 "${combination}"이고, 주제 키워드는 "${keywordInput}"입니다.
아래 조건에 따라 글을 작성해주세요:

- 분량: 4000자 이상
- 구성: 제목, 소주제1 + 본문, ... 소주제5 + 본문, 마무리
- 자연스럽고 풍부하게
- 문단마다 한 줄에 40자 이내로 자동 줄바꿈 고려

이 조건에 맞게 글을 작성해주세요.`;

  output.textContent = "GPT에게 요청 중입니다...";

  try {
    const response = await fetch("https://your-vercel-app.vercel.app/api/gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    if (data.choices && data.choices[0]?.message?.content) {
      output.textContent = data.choices[0].message.content;
    } else {
      output.textContent = "GPT 응답을 받지 못했습니다.";
    }
  } catch (error) {
    console.error("에러:", error);
    output.textContent = "요청 중 오류가 발생했습니다.";
  }
});
