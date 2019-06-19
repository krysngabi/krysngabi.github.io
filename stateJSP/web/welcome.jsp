<%--
  Created by IntelliJ IDEA.
  User: Zeu
  Date: 6/15/2019
  Time: 11:22 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
Welcome <% String userName=(String)session.getAttribute("usersession");%><%=userName%>
</body>
</html>
