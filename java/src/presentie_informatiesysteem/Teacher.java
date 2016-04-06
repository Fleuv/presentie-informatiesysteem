package presentie_informatiesysteem;

import java.util.ArrayList;

public class Teacher extends User {
	private ArrayList<Group> myGroups = new ArrayList<Group>();
	private ArrayList<Course> myCourses = new ArrayList<Course>();
	
	public Teacher(String first, String last, String email, String pass, int ID) {
		super(first, last, email, pass, ID);
		// TODO Auto-generated constructor stub
	}
	
	public void fillInAttendance(){
		
	}
	
	public void addGroup(Group group){
		if (!this.myGroups.contains(group)){
			myGroups.add(group);
		}
	}
	
	public void removeGroup(Group group){
		if (this.myGroups.contains(group)){
			myGroups.remove(group);
		}
	}
	
	public void addCourse(Course course){
		if (!this.myCourses.contains(course)){
			myCourses.add(course);
		}
	}
	
	public void removeCourse(Course course){
		if (this.myCourses.contains(course)){
			myCourses.remove(course);
		}
	}
	
	public ArrayList<Course> getCourses(){
		return this.myCourses;
	}
	
//	public void contactSLBer(SLBer slb, Student student, String problem){
//		String email = slb.getEmail();
//				
//	}
	
	public String toString(){
		String s = "";
		
		s += super.toString();
		s += "Cursussen: " + myCourses + "\nKlassen: " + myGroups;
		
		return s;
	}

}
