const tabs = document.querySelector(".tabs");
let activeTabTitle,
    activeTabsContent;

tabs.onclick = function (event) {
    if (activeTabTitle && activeTabTitle.classList.contains('active')) {
        activeTabTitle.classList.remove('active');
    }

    event.target.classList.add('active');
    activeTabTitle = event.target;

    let indexOfTabTitle;
    let tabTitleList = this.children;
    for (let i = 0; i < tabTitleList.length; i++) {
        if (tabTitleList[i].classList.contains('active')) {
            indexOfTabTitle = i;
        }
    }

    const tabsContentList = document.querySelectorAll(".tabs-content>li");
    for (let i = 0; i < tabsContentList.length; i++) {
        if (i === indexOfTabTitle) {
            if (activeTabsContent) {
                activeTabsContent.style.display = "";
            }

            tabsContentList[i].style.display = "block";
            activeTabsContent = tabsContentList[i];
        }
    }
};