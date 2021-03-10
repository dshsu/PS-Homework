package week1hw2;

import java.util.*;

public class HW2 {
//	Write a Java program to copy one array list into another
	
//	public static void main(String[] args) {
//		List <String> fruits = new ArrayList<String>();
//		fruits.add("mango");
//		fruits.add("grapes");
//		fruits.add("avocado");
//		List<String> vegetables = new ArrayList<String>();
//		vegetables.add("celery");
//		vegetables.add("spinach");
//		vegetables.add("cucumber");
//		
//		Collections.copy(vegetables, fruits);
//		System.out.println(vegetables);
//	}
	
//	 Write a Java program to extract a portion of a array list

//	public static void main(String[] args) {
//		List <String> fruits = new ArrayList<String>();
//		fruits.add("mango");
//		fruits.add("grapes");
//		fruits.add("avocado");
//		fruits.add("durian");
//		fruits.add("plum");
//		System.out.println("Here are all the fruits" + fruits);
//		List<String> goodFruits = fruits.subList (0,3);
//		System.out.println("Here are the fruits I like: "+ goodFruits);
//	}
	
//	Write a Java program of swap two elements in an array list
	
//	public static void main(String[] args) {
//		List <String> fruits = new ArrayList<String>();
//		fruits.add("mango");
//		fruits.add("grapes");
//		fruits.add("avocado");
//		fruits.add("durian");
//		fruits.add("plum");
//		System.out.println("This is the original array: " + fruits);
//		Collections.swap (fruits, 1, 4);
//		System.out.println("This is the swapped list: "+ fruits);
//	}

//	Write a Java program to test an array list is empty or not
	
//	public static void main(String[] args) {
//		ArrayList<String> newList = new ArrayList<>();
//		System.out.println("Is this string empty? Answer: "+newList.isEmpty());
//		newList.add("Puppy!");
//		System.out.println("Is the string empty now? Answer: "+newList.isEmpty()+". Here's the new list: "+ newList);
//	}

//	Write a Java program to replace the second element of a ArrayList with the specified element.

//	public static void main(String[] args) {
//		ArrayList<String> sisters = new ArrayList<String>();
//		sisters.add("Angelica");
//		sisters.add("Mariah");
//		sisters.add("and Peggy");
//		System.out.println("Fix the trio: "+sisters);
//		Scanner input = new Scanner (System.in);
//		String andPeggy= input.nextLine();
//		sisters.set(1,andPeggy);
//		System.out.println("The Schuyler Sisters! "+ sisters);
//	}

//	Write a Java program to trim the capacity of an array list the current list size

//	public static void main(String[] args) {
//		ArrayList<String> diamonds = new ArrayList<String>();
//		diamonds.add("white");
//		diamonds.add("blue");
//		diamonds.add("yellow");
//		diamonds.trimToSize();
//		System.out.println("The capacity of this array is now "+diamonds.size());
//	}

//	 Write a Java program to test a hash set is empty or not.

//	public static void main(String[] args) {
//		HashSet<String> collection = new HashSet<String>();
//		System.out.println("It is "+ collection.isEmpty() + " that the set is empty."); 
//		collection.add("stuff!");
//		System.out.println("It is now "+ collection.isEmpty() + " that the set is empty.");
//	}

//	Write a Java program to get the number of elements in a hash set
	
//	public static void main(String[] args) {
//		HashSet<String> blob = new HashSet<String>();
//		blob.add("stuff!");
//		blob.add("things");
//		blob.add("Thingamajigs");
//		System.out.println("Blob is "+ blob.size() + " items long."); 
//		}
	
//	Write a Java program to iterate through all elements in a hash list.
	
//	public static void main(String[] args) {
//		
//		HashSet<String> rainbowSet = new HashSet<String>();
//		rainbowSet.add("Red");
//		rainbowSet.add("orange");
//		rainbowSet.add("yellow");
//		rainbowSet.add("green");
//		rainbowSet.add("blue");
//		rainbowSet.add("indigo");
//		rainbowSet.add("violet");
//		
//		Iterator<String> c = rainbowSet.iterator();
//		while(c.hasNext()) {
//			System.out.println(c.next());
//		}
//	}
	
//	Write a Java program to convert a hash set to an array.
	
//	public static void main(String[] args) {
//		Set<String> crystalGems = new HashSet<String>();
//		crystalGems.add("Garnet");
//		crystalGems.add("Amethyst");
//		crystalGems.add("Pearl");
//		crystalGems.add("Steven");
//		
//		String[] stringGems = crystalGems.toArray(new String[crystalGems.size()]);
//		System.out.println(Arrays.toString(stringGems));
//	}
	
//	Write a Java program to compare two sets and retain elements which are same 
	//on both sets.
	
	public static void main(String[] args) {
		HashSet<String> hash1 = new HashSet<String>();
		hash1.add("kittens");
		hash1.add("puppies");
		hash1.add("octopi");
		hash1.add("eight");
		hash1.add("aquamarine");
		HashSet<String> hash2 = new HashSet<String>();
		hash2.add("birbs");
		hash2.add("kittens");
		hash2.add("nine");
		hash2.add("aquamarine");
		
		hash1.retainAll(hash2);
		System.out.println(hash1);
		
	}

}
