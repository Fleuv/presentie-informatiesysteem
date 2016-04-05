package presentie_informatiesysteem;

import java.util.ArrayList;

public class Course {
	private String name;
	private ArrayList<Class> classes = new ArrayList<Class>();
	
	public boolean equals(Object obj){
		boolean equalObjects = false;
		if (obj instanceof Course) {
			Course otherCourse = (Course)obj;
			if (this.name.equals(otherCourse.name)){
				equalObjects = true;
			}
		}
		return equalObjects;
	}
}