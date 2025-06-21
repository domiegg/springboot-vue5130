const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootm3h7l/",
            name: "springbootm3h7l",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootm3h7l/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线小说阅读平台"
        } 
    }
}
export default base
