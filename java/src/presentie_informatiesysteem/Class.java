package presentie_informatiesysteem;

import java.util.ArrayList;

public class Class {
	private String name;
	private ArrayList<Student> students = new ArrayList<Student>();
	
	public boolean equals(Object obj){
		boolean equalObjects = false;
		if (obj instanceof Class) {
			Class otherClass = (Class)obj;
			if (this.name.equals(otherClass.name)){
				equalObjects = true;
			}
		}
		return equalObjects;
	}
	
}
