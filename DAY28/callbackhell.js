// 콜백헬 만들기
class GetUserData {
    login(아이디, 비밀번호, 성공, 실패) {
        const data = userdb.find(user => user.id === 아이디 && user.pw === 비밀번호);
        if (data){
            성공(아이디);
        } else {
            실패(new Error('로그인 실패!'));
        }
    }
    getUserDataSet(이용자, 성공, 실패) {
        const data = userdb.find(user => user.id === 이용자);
        if (data) {
            성공({
                id : data.id,
                picture : data.picture,
                name : data.name,
                company : data.company,
                email : data.email,
                grade : data.grade
            });
        } else {
            실패(new Error('데이터 베이스 로드 실패!'));
        }
    }
}