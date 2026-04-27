import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class GradeServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        int marks = Integer.parseInt(request.getParameter("marks"));
        String grade;

        if (marks >= 90) {
            grade = "A+";
        } else if (marks >= 75) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 50) {
            grade = "C";
        } else {
            grade = "Fail";
        }

      out.println("<html>");
      out.println("<head>");
	out.println("<meta charset='UTF-8'>");
	out.println("<link rel='stylesheet' href='/GradeApp/style.css'>");
	out.println("</head>");
	out.println("<body>");
	out.println("<div class='container'>");

	out.println("<h2>Your Marks: " + marks + "</h2>");
	out.println("<h2>Your Grade: " + grade + "</h2>");

	out.println("<footer>");
	out.println("© 2401A05E4. All rights reserved.");
	out.println("</footer>");

	out.println("</div>");
	out.println("</body></html>");
    }
}