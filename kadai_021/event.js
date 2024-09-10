// btnとtextというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときのイベントリスナーを設定
btn.addEventListener('click', () => {
  // ここでsetTimeoutを使用し、2秒後にテキスト変更の処理を行う
  setTimeout(() => {
    // 作成したtext要素のテキストを変更する
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});