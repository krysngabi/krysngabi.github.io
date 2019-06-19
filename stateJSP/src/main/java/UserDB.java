import java.util.ArrayList;
import java.util.List;

public class UserDB {
    List<UserModel> user = new ArrayList<>();
    UserModel us=new UserModel();

    public UserDB() {
        us=new UserModel("cyanne","password0");
        user.add(us);
        us=new UserModel("leanne","password1");
        user.add(us);
    }
    public List<UserModel> getUserDBS(){
        return user;
    }
}
