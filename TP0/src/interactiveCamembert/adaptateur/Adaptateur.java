package interactiveCamembert.adaptateur;

import java.util.Observable;
import java.util.Observer;

import interactiveCamembert.modele.InteractiveCamember;
import interactiveCamembert.modele.InteractiveCamember.Item;
import interactiveCamembert.modele.InterfaceCamembert;


public class Adaptateur extends Observable {

	InterfaceCamembert model;
	//ajout InteractiveView
	
	public Adaptateur(InterfaceCamembert model) {
		this.model= model;
		
	}
	
	
	
	
	@SuppressWarnings("deprecation")
	public void addItem(Item item) {
		this.model.addItem(item);
		setChanged();
		notifyObservers(item);
	}
	
	@SuppressWarnings("deprecation")
	public void removeItem(Item item) {
		this.model.removeItem(item);
		setChanged();
		notifyObservers(item);
	}

	public int size() {
		return model.size();
	}

	public int getValues(int i) {
		return model.getValues(i);
	}

	public int total() {
		return model.total();
	}
	
	public String getTitle() {
		return model.getTitle();
	}

	public String getTitle(int i) {
		return model.getTitle(i);
	}

	
	
	public String getUnit() {
		return model.getUnit();
	}

	public String getDescription(int i) {
		return model.getDescription(i);
	}
	
	
	
	
	
}
