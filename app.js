const form=document.getElementById("quizForm");
const startPanel=document.getElementById("startPanel");
const resultPanel=document.getElementById("resultPanel");
const scoreText=document.getElementById("scoreText");
const review=document.getElementById("review");
const reward=document.getElementById("reward");

function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function start(){
  startPanel.classList.add("hidden"); resultPanel.classList.add("hidden"); form.classList.remove("hidden");
  const qs=shuffle(window.QUESTION_BANK).slice(0,10);
  form.dataset.ids=JSON.stringify(qs.map(q=>q.id));
  form.innerHTML=qs.map((q,i)=>`
    <section class="question">
      <div class="meta">${q.topic} · ${i+1}/10</div>
      <h3>${q.q}</h3>
      ${q.options.map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}
    </section>`).join("")+`<button type="submit">交卷</button>`;
  window.scrollTo({top:0,behavior:"smooth"});
}
form.addEventListener("submit",e=>{
  e.preventDefault();
  const ids=JSON.parse(form.dataset.ids);
  let score=0, html="";
  ids.forEach((id,i)=>{
    const q=window.QUESTION_BANK.find(x=>x.id===id);
    const picked=form.querySelector(`input[name="q${i}"]:checked`);
    const val=picked?Number(picked.value):-1;
    const ok=val===q.answer; if(ok) score++;
    html+=`<section class="question">
      <div class="${ok?"correct":"wrong"}">${ok?"✓ Correct":"✗ Review"}</div>
      <h3>${q.q}</h3>
      ${!ok?`<p>正确答案：<strong>${q.options[q.answer]}</strong></p>`:""}
      <div class="explain">${q.explain}</div>
    </section>`;
  });
  form.classList.add("hidden"); resultPanel.classList.remove("hidden");
  scoreText.textContent=`${score} / 10`;
  reward.textContent=score===10?"PIC privilege unlocked ♥":"Keep flying ✈️";
  review.innerHTML=html;
  window.scrollTo({top:0,behavior:"smooth"});
});
document.getElementById("startBtn").addEventListener("click",start);
document.getElementById("retryBtn").addEventListener("click",()=>{resultPanel.classList.add("hidden");startPanel.classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"})});
