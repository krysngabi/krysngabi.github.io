import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.sendRedirect("login.jsp");
        //resp.sendRedirect("http://www.google.com");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        UserDB userDB = new UserDB();
        HttpSession oldSession = req.getSession(false);

        if (oldSession != null) {
            oldSession.invalidate();
        }

        HttpSession newSession = req.getSession(true);
        String username = req.getParameter("uname");
        String password = req.getParameter("psw");
        String checkbox=req.getParameter("remember");


        System.out.println("###########################"+checkbox);

        int isSaved=(int)userDB.getUserDBS().stream().filter(e->e.getUsername().equals(username)&&e.getPassword().equals(password)).count();


        if (isSaved==1) {
            newSession.setAttribute("usersession", username);
            Cookie cookie=new Cookie("mycookie",username);
            Cookie cookiemoney=new Cookie("promo","100$");
            if(checkbox!=null){
                System.out.println("Create cookie");

                cookie.setMaxAge(30*24*60*60);
                cookiemoney.setMaxAge(30*24*60*60);
            }else{
                cookie.setMaxAge(0);
                cookiemoney.setMaxAge(0);
                cookie.setValue("");
            }
            resp.addCookie(cookie);
            resp.addCookie(cookiemoney);
            resp.sendRedirect("welcome.jsp");
        } else {

            resp.sendRedirect("login.jsp");
        }


    }
}
