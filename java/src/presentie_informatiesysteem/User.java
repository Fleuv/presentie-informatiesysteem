package presentie_informatiesysteem;

public class User {
	private String email;
	private String firstname;
	private String lastname;
	protected String password;
	private int userID;

	public User (String first, String last, String email, String pass, int ID){
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
	
	public boolean checkPassword(String password) {
		boolean result = false;
		
		if (password.equals(this.password)){
			result = true;
		}
		
		return result;
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
		s += "Naam: " + firstname + " " + lastname + "\nE-mailadres " + email + "\n IDNummer " + userID;
		return s;
	}

}