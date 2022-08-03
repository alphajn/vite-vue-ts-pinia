// export const useTestStore = defineStore('text', {
//     state: () => ({
//         name: 'test-pinia',
//         size: '10px',
//     }),
//     getters: {

//     },
//     actions: {

//     },
// });

export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: null as UserInfo | null,
    }),
    actions: {},
    getters: {
        isLogin: (state: { userInfo: UserInfo; }) => !!state.userInfo,
    },
});
