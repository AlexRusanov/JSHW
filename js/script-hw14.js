const $tabs = $(".tabs-title");
let $activeTabTitle,
    $activeTabsContent;

$tabs.click(function (event) {
    if ($activeTabTitle && $activeTabTitle.hasClass('active')) {
        $activeTabTitle.removeClass('active');
    }

    let $eventTarget= $(event.target);
    $eventTarget.addClass('active');
    $activeTabTitle = $eventTarget;

    let indexOfTabTitle = $tabs.index(this);

    const $tabsContentList = $(".tabs-content>li");
    $tabsContentList.each(function (i) {
        if (i === indexOfTabTitle) {
            if ($activeTabsContent) {
                $activeTabsContent.hide();
            }

            $(this).show();
            $activeTabsContent = $(this);
        }
    });
});