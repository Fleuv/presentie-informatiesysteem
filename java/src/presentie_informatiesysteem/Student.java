package presentie_informatiesysteem;

import java.util.ArrayList;

public class Student extends User{
	private Group klas;
	private ArrayList<Attendance> myAttendance = new ArrayList<Attendance>();
	
	public Student(String first, String last, String email, String pass, int ID, Group klas) {
		super(first, last, email, pass, ID);
		this.klas = klas;
		klas.addStudent(this);
	}
	
	public Group getGroup(){
		return klas;
	}

	public ArrayList<Attendance> getMyAttendance() {
		return myAttendance;
	}

	public void addAttendance(Attendance attendance){
		if (!this.myAttendance.contains(attendance)){
			this.myAttendance.add(attendance);
		}
	}
}
