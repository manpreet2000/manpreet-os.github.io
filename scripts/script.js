$(".search-bar").focus((e)=>{
    // console.log($(".search-bar").text());
    $(".search-bar").text("");
})
$(".search-bar").blur((e)=>{
    $(".search-bar").text("Type here to search")
});

let fileOpenCounter=0;

let aboutmeWindow=
`
<div class="about-me-modal">
<div class="pc-content">
    <div class="pc-header">
        <img class="fileExplore" src="https://img.icons8.com/fluent/25/000000/windows-explorer.png"/>
        <img class="file1" src="https://img.icons8.com/officexs/20/000000/send-file.png"/>
        <img class="file2" src="https://img.icons8.com/android/20/000000/file.png"/>
        <h4 class="text2">File Explorer</h4>
        
        <img class="min" style="cursor:default" src="https://img.icons8.com/android/15/000000/minus.png"/>
        <img class="max" style="cursor:default" src="https://img.icons8.com/fluent-systems-regular/15/000000/rounded-rectangle.png"/>
        <img class="close" style="cursor:default" src="https://img.icons8.com/fluent-systems-filled/15/000000/x.png"/>
    
    </div>
    <div class="pc-nav">
        <div class="file selected">File</div>
        <div class="home">Home</div>
        <div class="share">Share</div>
        <div class="view">View</div>
    </div>
    <div class="pc-search-nav">
        <div class="icons-pc">
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/left.png"/>
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/right.png"/>
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/expand-arrow--v2.png"/>
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/up.png"/>
        
        </div>
        <div id="query-bar"><img src="https://img.icons8.com/windows/32/000000/forward.png"/>Quick access</div>
        <div id="search-pc" contenteditable="true"><img src="https://img.icons8.com/windows/32/000000/search.png"/></div>
    </div>
    <div class="pc-body-container">
        <div class="pc-shortcut">
            <div class="quick-access">
                <div class="quick-access-bar quick-selected">Quick access</div>
                <div class="quick-access-divs">
                    <div class="quick-divs">
                        <img src="https://img.icons8.com/color/50/000000/desktop-mac.png"/>
                        <p>Desktop</p>
                    </div>
                    <div class="quick-divs">
                        <img src="https://img.icons8.com/color/48/000000/download--v1.png"/>
                        <p>Downloads</p>
                    </div> <div class="quick-divs">
                        <img src="https://img.icons8.com/color/48/000000/document--v1.png"/>
                        <p>Documents</p>
                    </div> <div class="quick-divs">
                        <img src="https://img.icons8.com/color/48/000000/image.png"/>
                        <p>Pictures</p>
                    </div> <div class="quick-divs">
                        <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                        <p>AI in medical</p>
                    </div> <div class="quick-divs">
                        <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                        <p>Automation</p>
                    </div> <div class="quick-divs">
                        <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                        <p>Brain Tumor Seg..</p>
                    </div> <div class="quick-divs">
                        <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                        <p>Excel Clone</p>
                    </div>
                </div>
            </div>
            <div class="one-drive outside">
                <img src="https://img.icons8.com/color/48/000000/microsoft-onedrive-2019.png"/>
                <p>OneDrive</p>
            </div>
            <div class="this-pc outside">
                <img src="./images/myComputer.png">
                <p>This PC</p>
            </div>
            <div class="network outside">
                <img src="https://img.icons8.com/color/48/000000/network.png"/>
                <p>network</p>
            </div>
        </div>
        <div class="pc-body">
            <div class="first-row">
                <div class="name">Name</div>
                <div class="date-modified">Date modified</div>
                <div class="type">Type</div>
                <div class="size">Size</div>
            </div>
            <div class="rows">
                <div class="row-div">
                    <div class="img-div">

                        <img class="img" src="https://img.icons8.com/bubbles/50/000000/happy-man.png"/>
                    </div>
                    <div class="row-div-body">
                        <p class="row-body-div-name">Manpreet Singh</p>
                        <p class="row-body-div-date">09-09-2000</p>
                        <p class="row-body-div-type">Male</p>
                        <p class="row-body-div-size">shhh!!</p>
                    </div>
                </div>
                <div class="row-div">
                    <div class="img-div">

                        <img class="img" style="zoom:0.55" src="https://img.icons8.com/dotty/80/000000/tuition.png"/>
                    </div>
                    <div class="row-div-body">
                        <p class="row-body-div-name">GTBIT</p>
                        <p class="row-body-div-date">2017-2021</p>
                        <p class="row-body-div-type">ECE</p>
                        <p class="row-body-div-size">8.2 CGPA</p>
                    </div>
                </div>
                <div class="row-div">
                    <div class="img-div">

                        <img class="img" src="https://img.icons8.com/offices/30/000000/in-love.png"/>
                    </div>
                    <div class="row-div-body">
                        <p class="row-body-div-name">Software Development</p>
                        <p class="row-body-div-date">09-09-2000</p>
                        <p class="row-body-div-type">Male</p>
                        <p class="row-body-div-size">shhh!!</p>
                    </div>
                </div>

                <div class="row-div">
                    <div class="img-div">
                        <img class="img" src="https://img.icons8.com/officel/36/000000/pushups.png"/>
                    </div>
                    <div class="row-div-body">
                        <p class="row-body-div-name">Workout</p>
                        <p class="row-body-div-date">6am-8am</p>
                        <p class="row-body-div-type">Heavy weight</p>
                        <p class="row-body-div-size">mon-sat</p>
                    </div>
                </div>  
            </div>
            
        </div>
    </div>
</div>
</div>
`

let projectModal=
`
<div id="projectModal" class="pc-content-container">
<div class="pc-content">
    <div class="pc-header">
        <img class="fileExplore" src="https://img.icons8.com/fluent/25/000000/windows-explorer.png"/>
        <img class="file1" src="https://img.icons8.com/officexs/20/000000/send-file.png"/>
        <img class="file2" src="https://img.icons8.com/android/20/000000/file.png"/>
        <h4 class="text2">File Explorer</h4>
        
        <img class="min" style="cursor:default" src="https://img.icons8.com/android/15/000000/minus.png"/>
        <img class="max" style="cursor:default" src="https://img.icons8.com/fluent-systems-regular/15/000000/rounded-rectangle.png"/>
        <img class="close" style="cursor:default" src="https://img.icons8.com/fluent-systems-filled/15/000000/x.png"/>
    </div>
    <div class="pc-nav">
        <div class="file selected">File</div>
        <div class="home">Home</div>
        <div class="share">Share</div>
        <div class="view">View</div>
    </div>
    <div class="pc-search-nav">
        <div class="icons-pc">
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/left.png"/>
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/right.png"/>
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/expand-arrow--v2.png"/>
            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/up.png"/>
        
        </div>
        <div id="query-bar"><img src="https://img.icons8.com/windows/32/000000/forward.png"/>Quick access</div>
        <div id="search-pc" contenteditable="true"><img src="https://img.icons8.com/windows/32/000000/search.png"/></div>
    </div>
    <div class="pc-body-container">
        <div class="pc-shortcut">
                <div class="quick-access">
                    <div class="quick-access-bar">Quick access</div>
                    <div class="quick-access-divs">
                        <div class="quick-divs">
                            <img src="https://img.icons8.com/color/50/000000/desktop-mac.png"/>
                            <p>Desktop</p>
                        </div>
                        <div class="quick-divs">
                            <img src="https://img.icons8.com/color/48/000000/download--v1.png"/>
                            <p>Downloads</p>
                        </div> <div class="quick-divs">
                            <img src="https://img.icons8.com/color/48/000000/document--v1.png"/>
                            <p>Documents</p>
                        </div> <div class="quick-divs">
                            <img src="https://img.icons8.com/color/48/000000/image.png"/>
                            <p>Pictures</p>
                        </div> <div class="quick-divs quick-selected">
                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                            <p>AI in medical</p>
                        </div> <div class="quick-divs">
                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                            <p>Automation</p>
                        </div> <div class="quick-divs">
                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                            <p>Brain Tumor Seg..</p>
                        </div> <div class="quick-divs">
                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                            <p>Excel Clone</p>
                        </div>
                    </div>
                </div>
                <div class="one-drive outside">
                    <img src="https://img.icons8.com/color/48/000000/microsoft-onedrive-2019.png"/>
                    <p>OneDrive</p>
                </div>
                <div class="this-pc outside">
                    <img src="./images/myComputer.png">
                    <p>This PC</p>
                </div>
                <div class="network outside">
                    <img src="https://img.icons8.com/color/48/000000/network.png"/>
                    <p>network</p>
                </div>
            
        </div>
        <div class="pc-body">
            <div class="frequent-folders">
                <p>Frequent folders (5)</p>
                <hr>
            </div>
            <div class="my-divs">
                <div id="aboutme" class="resume">
                    
                    <img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/user-folder.png"/>
                    <!-- <img  src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                    <div  class="my-divs-body">
                        <h2>About Me</h2>
                        <p>My intro</p>
                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                    </div>
                </div>
                <div class="resume">
                <a href="./resume/Manpreet Singh.pdf" target="_blank"><img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/resume.png"/></a>
                    <!-- <img class="my-divs-icon" src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                    <div class="my-divs-body">
                        <h2>Resume</h2>
                        <p>My resume</p>
                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                    </div>
                </div><div id="projects" class="resume quick-selected">
                    <img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/assault-rifle.png"/>
                    <!-- <img class="my-divs-icon" src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                    <div class="my-divs-body">
                        <h2>Projects</h2>
                        <p>Click me</p>
                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                    </div>
                </div><div id="exp" class="resume">
                    <img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/hard-working.png"/>
                    <!-- <img class="my-divs-icon" src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                    <div class="my-divs-body">
                        <h2>Experience</h2>
                        <p>Work boot</p>
                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                    </div>
                </div>
            </div>
            <div class="frequent-folders">
                <p>Projects (7)</p>
                <hr>
            </div>
            <div class="recent-items first-recent">
                <div class="recent-icon">
                    <img src="https://img.icons8.com/doodle/48/000000/medical-heart.png"/>
                    <!-- <img src="https://img.icons8.com/windows/32/000000/flushed.png"/>  -->
                    </div>
                <div class="recent-body">
                    <h5>AI in Medical</h5>
                    <a href="https://arcane-garden-82331.herokuapp.com/" target="_blank"><div class="path">github.com/manpreet2000/Medical-AI</div></a>
                </div>
            </div>
            <div class="recent-items">
                <div class="recent-icon"><img src="https://img.icons8.com/offices/30/000000/camera-automation.png"/></div>
                <div class="recent-body">
                    <h5>Automation</h5>
                    <a href="https://github.com/manpreet2000/Hackerearth-automation" target="_blank"><div class="path">https://github.com/manpreet2000/Hackerearth-automation</div></a>
                </div>
            </div>
            <div class="recent-items">
                <div class="recent-icon">
                    <img src="https://img.icons8.com/dusk/64/000000/artificial-intelligence.png"/>
                    <!-- <img src="https://img.icons8.com/windows/32/000000/flushed.png"/> -->
                </div>
                <div class="recent-body">
                    <h5>DashNet</h5>
                    <a href="https://github.com/manpreet2000/DashNet" target="_blank">
                        <div class="path">https://github.com/manpreet2000/DashNet</div>
                    </a></div>
            </div>
            <div class="recent-items">
                <div class="recent-icon"><img src="https://img.icons8.com/clouds/100/000000/ms-excel.png"/></div>
                <div class="recent-body">
                    <h5>Excel clone</h5>
                    <a href="https://github.com/manpreet2000/Excel-clone" target="_blank"><div class="path">https://github.com/manpreet2000/Excel-clone</div>
                    </a></div>
            </div>
            <div class="recent-items">
                <div class="recent-icon"><img src="https://img.icons8.com/clouds/100/000000/dog.png"/></div>
                <div class="recent-body">
                    <h5>Tin dog</h5>
                    <a href="https://manpreet2000.github.io/TinDog/" target="_blank"><div class="path">https://github.com/manpreet2000/TinDog</div>
                    </a></div>
            </div>
            <div class="recent-items">
                <div class="recent-icon"><img src="https://img.icons8.com/emoji/48/000000/video-game.png"/></div>
                <div class="recent-body">
                    <h5>Game Control</h5>
                    <a href="https://github.com/manpreet2000/game-controller" target="_blank"><div class="path">https://github.com/manpreet2000/game-controller</div>
                    </a></div>
            </div>
            <div class="recent-items">
                <div class="recent-icon"><img src="https://img.icons8.com/officexs/16/000000/recursion.png"/></div>
                <div class="recent-body">
                    <h5>Recursion</h5>
                    <a href="https://manpreet2000.github.io/manpreet-os.github.io/"><div class="path">https://github.com/manpreet2000/manpreet-os.github.io</div>
                    </a></div>
            </div>
            
        </div>
    </div>
    
</div>
</div>
 
`;

$(".my-computer").dblclick(function(e){
    let pcWindow=
    `
    <div class="pc-content-container">
                                <div class="pc-content">
                                    <div class="pc-header">
                                        <img class="fileExplore" src="https://img.icons8.com/fluent/25/000000/windows-explorer.png"/>
                                        <img class="file1" src="https://img.icons8.com/officexs/20/000000/send-file.png"/>
                                        <img class="file2" src="https://img.icons8.com/android/20/000000/file.png"/>
                                        <h4 class="text2">File Explorer</h4>
                                        
                                        <img class="min" style="cursor:default" src="https://img.icons8.com/android/15/000000/minus.png"/>
                                        <img class="max" style="cursor:default" src="https://img.icons8.com/fluent-systems-regular/15/000000/rounded-rectangle.png"/>
                                        <img class="close" style="cursor:default" src="https://img.icons8.com/fluent-systems-filled/15/000000/x.png"/>
                                    </div>
                                    <div class="pc-nav">
                                        <div class="file selected">File</div>
                                        <div class="home">Home</div>
                                        <div class="share">Share</div>
                                        <div class="view">View</div>
                                    </div>
                                    <div class="pc-search-nav">
                                        <div class="icons-pc">
                                            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/left.png"/>
                                            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/right.png"/>
                                            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/expand-arrow--v2.png"/>
                                            <img class="icon-pc" src="https://img.icons8.com/windows/32/000000/up.png"/>
                                        
                                        </div>
                                        <div id="query-bar"><img src="https://img.icons8.com/windows/32/000000/forward.png"/>Quick access</div>
                                        <div id="search-pc" contenteditable="true"><img src="https://img.icons8.com/windows/32/000000/search.png"/></div>
                                    </div>
                                    <div class="pc-body-container">
                                        <div class="pc-shortcut">
                                                <div class="quick-access">
                                                    <div class="quick-access-bar quick-selected">Quick access</div>
                                                    <div class="quick-access-divs">
                                                        <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/50/000000/desktop-mac.png"/>
                                                            <p>Desktop</p>
                                                        </div>
                                                        <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/48/000000/download--v1.png"/>
                                                            <p>Downloads</p>
                                                        </div> <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/48/000000/document--v1.png"/>
                                                            <p>Documents</p>
                                                        </div> <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/48/000000/image.png"/>
                                                            <p>Pictures</p>
                                                        </div> <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                                                            <p>AI in medical</p>
                                                        </div> <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                                                            <p>Automation</p>
                                                        </div> <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                                                            <p>Brain Tumor Seg..</p>
                                                        </div> <div class="quick-divs">
                                                            <img src="https://img.icons8.com/color/48/000000/folder-invoices.png"/>
                                                            <p>Excel Clone</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="one-drive outside">
                                                    <img src="https://img.icons8.com/color/48/000000/microsoft-onedrive-2019.png"/>
                                                    <p>OneDrive</p>
                                                </div>
                                                <div class="this-pc outside">
                                                    <img src="./images/myComputer.png">
                                                    <p>This PC</p>
                                                </div>
                                                <div class="network outside">
                                                    <img src="https://img.icons8.com/color/48/000000/network.png"/>
                                                    <p>network</p>
                                                </div>
                                            
                                        </div>
                                        <div class="pc-body">
                                            <div class="frequent-folders">
                                                <p>Frequent folders (5)</p>
                                                <hr>
                                            </div>
                                            <div class="my-divs">
                                                <div id="aboutme" class="resume">
                                                    
                                                    <img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/user-folder.png"/>
                                                    <!-- <img  src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                                                    <div  class="my-divs-body">
                                                        <h2>About Me</h2>
                                                        <p>My intro</p>
                                                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                                                    </div>
                                                </div>
                                                <div class="resume">
                                                <a href="./resume/Manpreet Singh.pdf" target="_blank"><img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/resume.png"/></a>
                                                    <!-- <img class="my-divs-icon" src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                                                    <div class="my-divs-body">
                                                        <h2>Resume</h2>
                                                        <p>My resume</p>
                                                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                                                    </div>
                                                </div><div id="projects" class="resume">
                                                    <img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/assault-rifle.png"/>
                                                    <!-- <img class="my-divs-icon" src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                                                    <div class="my-divs-body">
                                                        <h2>Projects</h2>
                                                        <p>Click me</p>
                                                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                                                    </div>
                                                </div><div id="exp" class="resume">
                                                    <img class="my-divs-icon" src="https://img.icons8.com/color/48/000000/hard-working.png"/>
                                                    <!-- <img class="my-divs-icon" src="https://img.icons8.com/windows/32/000000/resume-template.png"/> -->
                                                    <div class="my-divs-body">
                                                        <h2>Experience</h2>
                                                        <p>Work boot</p>
                                                        <img src="https://img.icons8.com/windows/32/000000/pin3.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="frequent-folders">
                                                <p>Recent folders (20)</p>
                                                <hr>
                                            </div>
                                            <div class="recent-items first-recent">
                                                <div class="recent-icon">
                                                    <img src="https://img.icons8.com/color/48/000000/github-2.png"/>
                                                    <!-- <img src="https://img.icons8.com/windows/32/000000/flushed.png"/>  -->
                                                    </div>
                                                <div class="recent-body">
                                                    <h5>Github</h5>
                                                    <a href="https://github.com/manpreet2000" target="_blank"><div class="path">https://github.com/manpreet2000</div>
                                                </a></div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/code-fork--v1.png"/></div>
                                                <div class="recent-body">
                                                    <h5>Leetcode</h5>
                                                    <a href="https://leetcode.com/manpreet2000/" target="_blank"><div class="path">https://leetcode.com/manpreet2000/</div>
                                                </a></div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon">
                                                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                                                    <!-- <img src="https://img.icons8.com/windows/32/000000/flushed.png"/> -->
                                                </div>
                                                <div class="recent-body">
                                                    <h5>Linkedin</h5>
                                                    <a href="https://www.linkedin.com/in/manpreet-singh-901269157/" target="_blank"><div class="path">https://www.linkedin.com/in/manpreet-singh-901269157/</div>
                                                </a></div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></div>
                                                <div class="recent-body">
                                                    <h5>Java</h5>
                                                    <div class="path">C:\codes\static\Lovely\love.java</div>
                                                </div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/javascript.png"/></div>
                                                <div class="recent-body">
                                                    <h5>Javascript</h5>
                                                    <div class="path">C:\codes\WTH\scripts\seriously.js</div>
                                                </div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/python.png"/></div>
                                                <div class="recent-body">
                                                    <h5>Python</h5>
                                                    <div class="path">C:\codes\GODlanguage\app.py</div>
                                                </div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/bench-press--v1.png"/></div>
                                                <div class="recent-body">
                                                    <h5>Workout</h5>
                                                    <div class="path">E:\Hobbies\GYM\GetItDone.sh</div>
                                                </div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/internet.png"/></div>
                                                <div class="recent-body">
                                                    <h5>google</h5>
                                                    <div class="path">E:\chrome\history\"how to google to get into google"</div>
                                                </div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/kawaii-coffee.png"/></div>
                                                <div class="recent-body">
                                                    <h5>Coffee</h5>
                                                    <div class="path">E:\broke\buy-me-a-drink.okay</div>
                                                </div>
                                            </div>
                                            <div class="recent-items">
                                                <div class="recent-icon"><img src="https://img.icons8.com/color/48/000000/boombox.png"/></div>
                                                <div class="recent-body">
                                                    <h5>Songs</h5>
                                                    <div class="path">E:\codes\alexa\"play my songs"</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
`;

// $('.window-body').append(pcWindow);
fileOpenCounter++;
let icon=`<div class="appended-icon appended-icon-selected counter-${fileOpenCounter}">
<div class="fa-windows-div"><img style="width: 50%; margin-left: 20%;" src="https://img.icons8.com/color/48/000000/folder-invoices.png"/></span></div><span>
</div>`
$(".start-nav").append(icon);

addModal(pcWindow,$('.window-body'));


$(`.counter-${fileOpenCounter}`).dblclick(function(){
    $(this).addClass(`appended-icon-selected`);
    addModal(pcWindow,$('.window-body'));
});

});

function addModal(modal,win){
    win.append(modal);
    $(".close").click(function(){
        $(`.counter-${fileOpenCounter}`).remove();
        fileOpenCounter--;
        $(".pc-content-container").remove();
    });
    $(".max").click(function(){
        $(".pc-content").css({height:"93vh",width:"100%",position:"absolute",top:"0",left:"0"});
    });
    $(".min").click(function(){
        $(".pc-content-container").remove();
        $(`.counter-${fileOpenCounter}`).removeClass("appended-icon-selected");
    });
    
    $($(`.frequent-folders`)[0]).click(function(){
        $(`.my-divs`).animate({height:'toggle'});
    });

    $($(`.frequent-folders`)[1]).click(function(){
        $(`.recent-items`).animate({height:'toggle'});
    });

    $(".quick-access-bar").click(()=>{
        $(".quick-access-divs").animate({height:"toggle"});
    });

    $("#aboutme").click(()=>{
        win.append(aboutmeWindow);
        $(".close").click(function(){
            $(".about-me-modal").remove();
        });
        $(".max").click(function(){
            $(".about-me-modal .pc-content").css({height:"93vh",width:"100%",position:"fixed",top:"0",left:"0"});
        });
        $(".min").click(function(){
            $(".about-me-modal .pc-content").css({height:"30vh",width:"60%",position:"fixed",top:"0",left:"0"});
        });

    });
    $("#exp").click(()=>{
        swal({
            title: "Hire me",
            text: `Once hired, I will have experience to show!!`,
            icon: "info",
            buttons: true,
            dangerMode: true,
          }).then((e)=>{
              if(e){
                swal("Yaay! Redirecting you to my gmail.", {
                    icon: "success",
                  });
                  setTimeout(function(){
                    window.location.replace("mailto:manpreetsingh5772000@gmail.com");
                  },1000);
              }else{
                swal("WHY GOD WHY ??");
              }
          });
    })
    $("#projects").click(()=>{
        // $(`.counter-${fileOpenCounter}`).remove();
        // fileOpenCounter--;
        $(".pc-content-container").remove();
        win.append(projectModal);
        $(".close").click(function(){
            $(`.counter-${fileOpenCounter}`).remove();
            fileOpenCounter--;
            $(".pc-content-container").remove();
        });
        $(".max").click(function(){
            $(".pc-content").css({height:"93vh",width:"100%",position:"absolute",top:"0",left:"0"});
        });
        $(".min").click(function(){
            $(".pc-content-container").remove();
            $(`.counter-${fileOpenCounter}`).removeClass("appended-icon-selected");
        });
        
        $($(`.frequent-folders`)[0]).click(function(){
            $(`.my-divs`).animate({height:'toggle'});
        });
    
        $($(`.frequent-folders`)[1]).click(function(){
            $(`.recent-items`).animate({height:'toggle'});
        });
    
        $(".quick-access-bar").click(()=>{
            $(".quick-access-divs").animate({height:"toggle"});
        });
    
        $("#aboutme").click(()=>{
            win.append(aboutmeWindow);
            $(".close").click(function(){
                $(".about-me-modal").remove();
            });
            $(".max").click(function(){
                $(".about-me-modal .pc-content").css({height:"93vh",width:"100%",position:"fixed",top:"0",left:"0"});
            });
            $(".min").click(function(){
                $(".about-me-modal .pc-content").css({height:"30vh",width:"60%",position:"fixed",top:"0",left:"0"});
            });
    
        });
        $("#exp").click(()=>{
            
            swal({
                title: "Hire me",
                text: `Once hired, I will have experience to show!!`,
                icon: "info",
                buttons: true,
                dangerMode: true,
              }).then((e)=>{
                  if(e){
                    swal("Yaay! Redirecting you to my gmail.", {
                        icon: "success",
                      });
                      setTimeout(function(){
                        window.location.replace("mailto:manpreetsingh5772000@gmail.com");
                      },1000);
                  }else{
                    swal("WHY GOD WHY ??");
                  }
              });
        })
        
    })
    
}