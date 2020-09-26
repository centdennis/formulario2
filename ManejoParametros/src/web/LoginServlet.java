package web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	
	//Sobreescribimos el método doPost
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		//Obtenemos los datos ingresados en el Formulario y los guardamos en sus
		//Respectivas variables
		String usuario = request.getParameter("usuario");
		String contrasena = request.getParameter("contrasena");
		
		//Mostramos los resultados
		PrintWriter out = response.getWriter();
		//out.print("<html>");
		//out.print("<body>");
		//out.print("El parámetro usuario es: " + usuario);
		//out.print("<br/>");
		//out.print("El parámetro contraseña es: " + contrasena);
		//out.print("</body>");
		//out.print("</html>");
		
		//Realizamos nuestra validación: Si el usuario ingresado en nuestra cajita de texto
		//es igual a mramosf y si la contraseña ingresada es igua a P@$$wd.
		if(usuario.equals("mramosf") && contrasena.equals("P@$$wd")) {
			//Nos redirecciona a la página panel.jsp
			response.sendRedirect("panel.jsp");
		}else {
			response.sendRedirect("error.jsp");
		}
		
	}

}
