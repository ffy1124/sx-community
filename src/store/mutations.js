let mutations = {
    getUsername(state, data) {
        state.username = data;
    },
    change_loading(state, data) {
        state.loading = data;
    },
    update_meun(state, data) {
        state.menuData = data;
    },
    update_title(state, data) {
        state.title = data;
    },
    updated_imgArr(state) {
        state.imgArr.push({
            'delSpan': true
        })
    },
    delArr(state, data) {
        state.ind = data;
        state.imgArr.splice(state.ind, 1);
    },
    update_pagesData(state, data) {
        state.pagesData = data;
    },
    update_imgUrl(state, data) {
        state.imgUrl.push(data);
    }
};
export default mutations;