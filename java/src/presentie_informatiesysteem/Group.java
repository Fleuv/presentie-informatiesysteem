package presentie_informatiesysteem;

import java.util.ArrayList;

public class Group {
	private String name;
	private ArrayList<Student> students = new ArrayList<Student>();
	
	public Group (String name){
		this.name = name;
	}
	
	public void addStudent(Student student){
		if (!students.contains(student)){
			students.add(student);
		}
	}
	
	public void removeStudent(Student student){
		if (students.contains(student)){
			students.remove(student);
		}
	}
	
	public String getName(){
		return this.name;
	}
	
	@Override
	public boolean equals(Object obj){
		boolean equalObjects = false;
		if (obj instanceof Group) {
			Group otherGroup = (Group)obj;
			if (this.name.equals(otherGroup.name)){
				equalObjects = true;
			}
		}
		return equalObjects;
	}
	
}
