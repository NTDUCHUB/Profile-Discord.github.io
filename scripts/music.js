<script>
function HongLamStart() {
        audio.play();
      }
      const HongLam_List = [
  "//files.catbox.moe/773rdi.mp3", // Em biet anh khong yeu em
  "//files.catbox.moe/mvfj0k.mp3", // Mot duong no hoa
  "//files.catbox.moe/typrw7.mp3", // My love free beat lofi
];
//Random music
let index = Math.floor(Math.random() * HongLam_List.length);
const audio = new Audio(HongLam_List[index]);
function HongLamAudio() {
  audio.play();
}
document.addEventListener("click", HongLamAudio);
audio.addEventListener("ended", function() {
  index = (index + 1) % HongLam_List.length;
  audio.src = HongLam_List[index];
  audio.play();
});
</script>
