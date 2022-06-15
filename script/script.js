
                // This variable stores the bandwidth
        // const bandWidth = navigator.connection.downlink;
        const screenWidth = window.screen.width;

        const video = document.querySelector('.video')

        const mql = window.matchMedia("(orientation: portrait)");

        if(mql.matches) {
          alert('12'
                            video.innerHTML = `<iframe src="https://player.vimeo.com/video/720551923?h=43d16fe513&amp;badge=0&amp;autoplay=1&amp;muted=1&amp;player_id=0&amp;app_id=58479&amp;background=1" width="600" height="1200" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="heiming_aben_commercial_#1 (Original)_1.mp4"></iframe>  `
        } else {
            if(screenWidth <= 543) {
                video.innerHTML = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/694808160?h=f391fa9f59&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GS_15SEC_REF.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
            } else if (screenWidth >= 544 && screenWidth <= 767) {
                video.innerHTML = `
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/711137996?h=ed6894bffb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="HELMET X1.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
            } else if (screenWidth >= 768 && screenWidth <= 991) {
                video.innerHTML = `
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/694808160?h=f391fa9f59&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GS_15SEC_REF.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
            } else if (screenWidth >= 992 && screenWidth <= 1169) {
                video.innerHTML = `
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/694808160?h=f391fa9f59&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GS_15SEC_REF.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>        `
            } else {
                video.innerHTML = `
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/711137996?h=ed6894bffb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="HELMET X1.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>        `
            }
        }
