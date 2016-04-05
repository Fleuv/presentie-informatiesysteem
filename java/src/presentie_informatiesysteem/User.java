package presentie_informatiesysteem;

public class User {
	private String email;
	private String firstname;
	private String lastname;
	private String password;
	private String userID;

	public User (String first, String last, String email, String pass, String ID){
		this.email = email;
		this.firstname = first;
		this.lastname = last;
		this.password = pass;
		this.userID = ID;
	}
		
	public void Login (String email, String password){
	
	}

	public void Logout (String email){
	
	}

	public String getEmail (){
		return email;
	}

	public String getName(){
		return firstname + " " + lastname;
	}

	@Override
	public String toString(){
		String s = "";
		s += firstname + " " + lastname + " met e-mailadres " + email + " heeft ID nummer " + userID;
		return s;
	}

}