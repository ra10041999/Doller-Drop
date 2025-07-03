// ব্যালেন্স আপডেট ফাংশন
function updateBalance(amount) {
  document.getElementById('current-balance').textContent = amount.toFixed(2);
}

// রেফারেল লিংক কপি বাটন
document.querySelector('.btn-copy').addEventListener('click', function() {
  const referralInput = document.getElementById('referral-link');
  referralInput.select();
  document.execCommand('copy');
  alert('লিংক কপি করা হয়েছে!');
});
