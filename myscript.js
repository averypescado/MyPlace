video=document.getElementById("loader")
message=document.getElementById("loader_mes")
video.addEventListener('ended', function() {
  // hide video
    video.style.display = "none"
    message.style.display = "none"

  })
