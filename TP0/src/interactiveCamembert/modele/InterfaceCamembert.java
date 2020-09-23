package interactiveCamembert.modele;

import interactiveCamembert.modele.InteractiveCamember.Item;

public interface InterfaceCamembert {

	public void addItem(String titre, String desc, float val);
	
	public void addItem(Item item);
	
	public void removeItem(Item item);
	
	public int size();
	
	public int getValues(int i);
	
	public int total();
	
	public String getTitle();
	
	public String getTitle(int i);
	
	public String getUnit();
	
	public String getDescription(int i);
}
