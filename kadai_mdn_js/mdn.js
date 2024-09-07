const date = new Date();

const ymd = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const formattedDate = date.toLocaleDateString('ja-JP', ymd);
console.log(formattedDate);