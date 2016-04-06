package presentie_informatiesysteem;


public class Course {
	private String name;
	private String code;
	
	public Course (String name, String code){
		this.name = name;
		this.code = code;
	}
	
	public boolean equals(Object obj){
		boolean equalObjects = false;
		if (obj instanceof Course) {
			Course otherCourse = (Course)obj;
			if (this.name.equals(otherCourse.name) && (this.code.equals(otherCourse.code))){
				equalObjects = true;
			}
		}
		return equalObjects;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
}