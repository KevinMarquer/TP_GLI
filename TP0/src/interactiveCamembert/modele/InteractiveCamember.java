package interactiveCamembert.modele;

import java.util.ArrayList;

public class InteractiveCamember implements InterfaceCamembert{

	String titre;
	
	ArrayList<Item> listeItem;
	
	int total;
	
	public InteractiveCamember(String titre) {
		this.titre=titre;
		this.listeItem = new ArrayList<Item>();
		this.total = 0;
	}
	
	public void addItem(String titre, String desc, float val) {
		Item it = new Item(titre, desc, val);
		this.listeItem.add(it);
		this.total += val;
	}
	
	public void addItem(Item item) {
		this.listeItem.add(item);
		this.total += item.valeur;
	}
	
	public void removeItem(Item item) {
		this.listeItem.remove(item);
		this.total -= item.valeur;
	}
	
	
	public class Item{
		String intitule;
		
		String description;
		
		float valeur;
		
		public Item(String intitule, String description, float valeur) {
			
			this.intitule=intitule;
			this.description=description;
			this.valeur=valeur;
		}
		
		public String getIntitule() {
			return this.intitule;
		}
		public String getDescription() {
			return this.description;
		}
		public float getValeurItem() {
			return this.valeur;
		}
	}
	
	
	public int size() {
		// TODO Auto-generated method stub
		return this.listeItem.size();
	}

	public int getValues(int i) {
		// TODO Auto-generated method stub
		return (int)this.listeItem.get(i).getValeurItem();
	}

	public int total() {
		// TODO Auto-generated method stub
		return this.total;
	}
	
	public String getTitle() {
		// TODO Auto-generated method stub
		return this.titre;
	}

	public String getTitle(int i) {
		// TODO Auto-generated method stub
		return this.listeItem.get(i).getIntitule();
	}

	public String getUnit() {
		// TODO Auto-generated method stub
		return null;
	}

	public String getDescription(int i) {
		// TODO Auto-generated method stub
		return this.listeItem.get(i).getDescription();
	}
	
}
