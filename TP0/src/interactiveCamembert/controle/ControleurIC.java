package interactiveCamembert.controle;

import java.io.Serializable;

import interactiveCamembert.adaptateur.Adaptateur;
import interactiveCamembert.modele.InteractiveCamember;
import interactiveCamembert.view.CamembertView;


public class ControleurIC extends InteractiveCamember implements Serializable{

	Adaptateur model;
	CamembertView view;
	
	int actuelItem;
	boolean itemSelect;
	
	public ControleurIC(String titre, Adaptateur a, CamembertView view) {
		super(titre);
		this.model = a;
		this.view = view;
	}
	
	public void addItem(Item item) {
		this.model.addItem(item);
		
	}

	public void setSelected(boolean b) {
		// TODO Auto-generated method stub
		this.itemSelect = b;
	}

	public int getSelectedPie() {
		// TODO Auto-generated method stub
		return actuelItem;
	}

	public boolean isSelected() {
		// TODO Auto-generated method stub
		return itemSelect;
	}
	
	
	public CamembertView getView() {
		return this.view;
	}

	public void nextPie() {
		if(actuelItem == model.size()-1) {
			actuelItem = 0;
		}
		else {
			actuelItem+=1;
		}
	}

	public void previousPie() {
		if(actuelItem == 0) {
			actuelItem = model.size()-1;
		}
		else {
			actuelItem-=1;
		}
	
	}

	public void selectPie(int i) {
		// TODO Auto-generated method stub
		this.actuelItem = i;
		itemSelect =true;
		
	}

	public void deSelect() {
		// TODO Auto-generated method stub
		itemSelect = false;
	}
	
	
	public void setSelectedPie(int i) {
		this.actuelItem = i;
		itemSelect =true;
	}
	
}
