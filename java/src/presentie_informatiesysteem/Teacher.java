package presentie_informatiesysteem;

import java.util.ArrayList;

public class Teacher extends User {
	private ArrayList<Class> myClasses = new ArrayList<Class>();
	private ArrayList<Course> myCourses = new ArrayList<Course>();
	
	public Teacher(String first, String last, String email, String pass, String ID) {
		super(first, last, email, pass, ID);
		// TODO Auto-generated constructor stub
	}
	
	public void fillInAttendance(){
		
	}
	
	public void addClass(Class clas){
		if (!this.myClasses.contains(clas)){
			myClasses.add(clas);
		}
	}
	
	public void removeClass(Class clas){
		if (this.myClasses.contains(clas)){
			myClasses.remove(clas);
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
	
	public void contactSLBer(SLBer slb, Student student, String problem){
		String email = slb.getEmail();
	}

}
