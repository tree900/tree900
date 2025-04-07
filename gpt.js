const templates = {
  compare_review: `1. 문제 제기 (예: 어떤 \${keyword} 브랜드를 선택해야 할까?)
2. 비교 기준 설정 (예: 가격, 기술력, 후기 만족도)
3. 브랜드 A vs 브랜드 B 비교
4. 실제 내가 선택한 브랜드 후기
5. 시술 과정 설명
6. 시술 후 변화와 느낌
7. 최종 추천
8. 상담/문의 행동 유도`,

  info_review_compare: `1. 주제 소개 및 기본 정보 설명 (예: \${keyword}란?)
2. 필요성 설명
3. 여러 브랜드/업체 비교 분석
4. 체험 및 후기 작성
5. 시술 전후 변화 설명
6. 주의사항 또는 관리 방법
7. 결론 및 추천
8. 상담/문의 행동 유도`,

  story_review: `1. 나의 고민 이야기 (예: \${keyword}로 인한 문제)
2. 해결 방법을 찾던 과정
3. 시술 결심 이유
4. 시술 경험 상세 기록
5. 시술 후 외모와 심리 변화
6. 주변 반응과 실제 후기
7. 현재 삶과 추천 메시지
8. 상담/문의 행동 유도`,

  authority_info: `1. 자기소개 및 경력/자격 소개
2. \${keyword}의 필요성 설명 (전문가 입장에서)
3. 과정 설명
4. 기술/서비스 차별성 설명
5. 고객 만족 후기 인용
6. 관리 방법과 주의사항 안내
7. 브랜드 신뢰 강조
8. 상담/문의 행동 유도`,

  experience_review_info: `1. 체험단 선정 이야기
2. 시술 전 상태 설명
3. 시술 과정 상세 기록
4. 시술 후 변화 및 실사용 후기
5. 장단점 솔직 정리
6. 추천 대상 설명
7. 최종 결론 및 소감
8. 상담/문의 행동 유도`
};

const form = document.getElementById('blogForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const combination = document.getElementById('combination').value;
  const keywordInput = document.getElementById('keyword').value.trim();
  if (!keywordInput) {
    output.textContent = '키워드를 입력해주세요.';
    return;
  }

  const template = templates[combination];
  const filledTemplate = template.replace(/\${keyword}/g, keywordInput);
  output.textContent = filledTemplate;
});
