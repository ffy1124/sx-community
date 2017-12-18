import axios from '../http/axios';
let actions = {
    update_pagesData({ commit }, val){
        axios.post('/admin/community/page', {
            pageSize: val,
            count: 10
        }).then((res) => {
            commit('update_pagesData', res.data);
        })
    }
};
export default actions;