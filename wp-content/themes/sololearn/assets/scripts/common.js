jQuery(document).ready(function (_$) {
    const app_link_items = ['logoAppStore', 'logoGooglePlay'];
    window.AF_SMART_SCRIPT_RESULT = {
        clickURL: 'https://sololearn.onelink.me/57b5?af_js_web=true&af_ss_ver=2_2_0&pid=web&c=web2app&af_channel=direct&cid=1&af_ss_ui=true&af_ss_gtm_ui=true'
    } // Todo temporary code
    app_link_items.map((value) => {
        if(window.AF_SMART_SCRIPT_RESULT){
            _$(`#${value}`)[0].href = window.AF_SMART_SCRIPT_RESULT.clickURL;
        }
    })

    const hamburger_menu_btn = _$('#hamburger_menu_btn');
    const navbar_content = _$('#navbar_content');

    function toggleMenu(removeListener = false){
        hamburger_menu_btn.toggleClass('active');
        navbar_content.toggleClass('active');

        if(removeListener){
            _$(document).unbind('click');
        } else {
            _$(document).on("click", documentClickListener);
        }
    }

    function documentClickListener(e){
        if(
            _$(e.target).closest("#navbar_content").length === 0 &&
            navbar_content.hasClass("active") &&
            _$(e.target).closest("#hamburger_menu_btn").length === 0
        ){
            toggleMenu(true)
        }
    }

    // Hamburger Menu click event
    hamburger_menu_btn.click(() => toggleMenu());
});