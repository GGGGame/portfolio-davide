export const linksManager = () => {

    const openLink = (link) => {
        const newTab = window.open(link, "_blank");
        if (newTab) {
            newTab.opener = null;
        } else {
            window.location.href = link;
        }
    };

    return openLink;
}