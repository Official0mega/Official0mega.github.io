jQuery(document).ready(function ($) {
    function getItemFromStorage(key) {
        try {
            const item = window.localStorage.getItem(key);
            return item === null ? null : JSON.parse(item).data;
        } catch (e) {
            throw new Error(
                `StorageReadFault: ${e.message} D: ${e.description}`
            );
        }
    }

    const user = getItemFromStorage('user');

    if (user) {
        $('#user-profile').click(() => {
            location.href = `/profile/${user.id?.toString()}?settings=true`;
        })
        

        if (user.avatarUrl) {
            $('#user-avatar').attr('src', user.avatarUrl);
        }

        if (user.name) {
            $('#user-name').text(user.name);
        }

    }
});