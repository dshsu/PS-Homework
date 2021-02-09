package hw1;
import java.util.Random;
public class HW1 {

	static  void getUp(boolean squawking, double currentHour) {
	
		if (squawking) {
			System.out.println("The parrot is yelling again at "+ currentHour+" o'clock");
			if(currentHour<=6 || currentHour>=22)
				System.out.println("Time to get up and deal with the parrot");
			else
				System.out.println("Polly wants a cracker but we don't care");
		}
		else
			System.out.println("It is "+ currentHour +" and all is well");
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random rd = new Random(); 
	     boolean squawk = (rd.nextBoolean()); 
		int time = (int)(Math.random()*23);
		getUp(squawk, time);
	}
}
//We have a parrot that likes to squawk at night in its 
//cage when it’s scared. Write a method named getUp that has 2 parameters
//1st parameter  should be a boolean and be named 
//squawking it represent the parrot.
//2nd parameter represents the hour of the day and is an 
//int named currentHour has a valid range of 0-23.
//We have to get up if the parrot is squawking before 6 
//or after 22 hours so in that case return true.
//All other cases will return false. If the currentHour 
//parameter is less than 0 or greater than 23 return false