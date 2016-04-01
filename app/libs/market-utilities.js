/**
 * Author: priecint
 */

let marketUtils = {
    isDescriptionMatch(market, keyword) {
        return market.description.toLowerCase().indexOf(keyword) >= 0;
    },

    isTagsMatch(market, keyword) {
        return (
            market.metadata &&
            market.metadata.tags && market.metadata.tags.length &&
            market.metadata.tags.some(function(tag) {
                return tag.toLowerCase().indexOf(keyword) >= 0;
            })
        );
    }
};

module.exports = marketUtils;