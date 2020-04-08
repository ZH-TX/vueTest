<template>
    <div>
        <div class="item-angle">
            <div class="item"> 404 NOT FOUND</div>
        </div>
        <div height="120" width="150" align="center"><embed height="120" width="150"
                type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"
                src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_wh.swf" quality="high"
                autostart="1" wmode="transparent"></div>

        <object type="application/x-shockwave-flash" style="outline:none;"
            data="http://cdn.abowman.com/widgets/hamster/hamster.swf?" width="300" height="225">
            <param name="movie" value="http://cdn.abowman.com/widgets/hamster/hamster.swf?">

            <param name="AllowScriptAccess" value="always">

            <param name="wmode" value="opaque">

        </object>

        <!-- 静默虚空博客原版 -->
        <!-- <div className="sidebarMouse">
            <object type="application/x-shockwave-flash" style="outline:none;"
                data="https://files.cnblogs.com/files/jingmoxukong/mouse.swf?up_bodyColor=f0e9cc&amp;up_feetColor=D4C898&amp;up_eyeColor=000567&amp;up_wheelSpokeColor=DEDEDE&amp;up_wheelColor=FFFFFF&amp;up_waterColor=E0EFFF&amp;up_earColor=b0c4de&amp;up_wheelOuterColor=FF4D4D&amp;up_snoutColor=F7F4E9&amp;up_bgColor=F0E4E4&amp;up_foodColor=cba920&amp;up_wheelCenterColor=E4EB2F&amp;up_tailColor=E6DEBE&amp;"
                width="240" height="160">
                <param name="movie"
                    value="https://files.cnblogs.com/files/jingmoxukong/mouse.swf?up_bodyColor=f0e9cc&amp;up_feetColor=D4C898&amp;up_eyeColor=000567&amp;up_wheelSpokeColor=DEDEDE&amp;up_wheelColor=FFFFFF&amp;up_waterColor=E0EFFF&amp;up_earColor=b0c4de&amp;up_wheelOuterColor=FF4D4D&amp;up_snoutColor=F7F4E9&amp;up_bgColor=F0E4E4&amp;up_foodColor=cba920&amp;up_wheelCenterColor=E4EB2E&amp;up_tailColor=E6DEBE&amp;">
                <param name="AllowScriptAccess" value="always">
                <param name="wmode" value="opaque">
            </object>
        </div> -->
        <object type="application/x-shockwave-flash" style="outline:none;"
            data="https://files.cnblogs.com/files/taohuaya/mouse.swf?up_bodyColor=f0e9cc&amp;up_feetColor=D4C898&amp;up_eyeColor=000567&amp;up_wheelSpokeColor=DEDEDE&amp;up_wheelColor=FFFFFF&amp;up_waterColor=E0EFFF&amp;up_earColor=b0c4de&amp;up_wheelOuterColor=FF4D4D&amp;up_snoutColor=F7F4E9&amp;up_bgColor=F0E4E4&amp;up_foodColor=cba920&amp;up_wheelCenterColor=E4EB2F&amp;up_tailColor=E6DEBE&amp;"
            width="240" height="160">
            <param name="movie"
                value="https://files.cnblogs.com/files/taohuaya/mouse.swf?up_bodyColor=f0e9cc&amp;up_feetColor=D4C898&amp;up_eyeColor=000567&amp;up_wheelSpokeColor=DEDEDE&amp;up_wheelColor=FFFFFF&amp;up_waterColor=E0EFFF&amp;up_earColor=b0c4de&amp;up_wheelOuterColor=FF4D4D&amp;up_snoutColor=F7F4E9&amp;up_bgColor=F0E4E4&amp;up_foodColor=cba920&amp;up_wheelCenterColor=E4EB2E&amp;up_tailColor=E6DEBE&amp;">
            <param name="AllowScriptAccess" value="always">
            <param name="wmode" value="opaque">
        </object>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .item {
        width: 500px;
        height: 300px;
        background: rgba(235, 232, 232, 0.5);
        color: brown;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-angle {
        width: 500px;
        height: 300px;
        margin: auto;
        background: linear-gradient(#00faff, #00faff) left top,
            linear-gradient(#00faff, #00faff) left top,
            linear-gradient(#00faff, #00faff) right top,
            linear-gradient(#00faff, #00faff) right top,
            linear-gradient(#00faff, #00faff) left bottom,
            linear-gradient(#00faff, #00faff) left bottom,
            linear-gradient(#00faff, #00faff) right bottom,
            linear-gradient(#00faff, #00faff) right bottom;
        background-repeat: no-repeat;
        background-size: 5px 15px, 15px 5px;
    }
</style>