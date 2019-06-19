import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request=(HttpServletRequest)servletRequest;
        HttpServletResponse response=(HttpServletResponse) servletResponse;

        if(request.getSession()!=null && request.getSession().getAttribute("usersession") !=null){
            filterChain.doFilter(servletRequest,servletResponse);
        }else{
            ((HttpServletRequest)request).getSession().setAttribute("usersession",null);
            ((HttpServletResponse) servletResponse).sendRedirect("login.jsp");
        }

    }

    @Override
    public void destroy() {

    }
}
