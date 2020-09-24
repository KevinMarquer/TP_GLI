# TP0 GLI


Kévin MARQUER

L'objectif de ce TP est de réalisé un camembert interactif.

On dispose de plusieure classes :
- Interface du camembert (le modèle)
- Controleur (pour l'interaction du camembert)
- View (pour l'affichage)
- Adaptateur (un observable pour la notification des changements du camembert)



# 1. Création du modèle (InteractiveCamember)

le modèle est tous simple, il demande :
- un titre
- une liste d'Item (que l'on va créer)
- un total (le total des valeur des Items dans le camembert)

Un Item est composé :
- d'un intitulé
- d'une description
- d'une valeur

on met dans la classe juste les Get et Set.
Et on créer pour cette classe une interface InterfaceCamembert (pour l'adaptateur)


# 2. Création de l'Adaptateur

L'adaptateur aura comme seul élément l'interface InterfaceCamembert

Et possèdera les mêmes fonctions que pour le modèle.
Mais pour ce qui est de l'ajout et de retirer les Items, il faut faire des rajouts pour la mise à jour.

'''java

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
'''


# 3. La view

Pour la view, un squelette est fournis ce qui fait qu'on à pas grand chose à faire.
Il faut cependant ajouter dans *CambertView* en paramètre l'Adaptateur et rajouté dedans MouseListener (pour obtenir les coordonnées).


Dans le main à la fin, on doit créer le modèle(et son adaptateur) avec des données, ainsi que le view et le controleur.

'''java

		InteractiveCamember model = new InteractiveCamember("Test");
		
		// Maybe put some data in the model
		model.addItem("test1", "desc du premier", 50);
		model.addItem("test2", "desc du second", 40);
		model.addItem("numero3", "desc du second", 60);
		
		model.addItem("4eme", "something about 4", 100);
		model.addItem("porte", "une porte", 5);
		
		// Create the controller and the view and link all together
		Adaptateur adap = new Adaptateur(model);
		//Item item = new Item("test", "description", 10);
		//adap.addItem(test);
		CamembertView view = new CamembertView(adap);
		
		controller = new ControleurIC("Test",adap ,view);	
		
		view.buildGraphics();
'''


# 4. Le controleur

Le controleur aura pour attributs :
- Adaptateur
- La view;
- int actuelItem (le numéro du tableau de l'item affiché)
- boolean itemSelect (si un item est sélectionné dans le camembert alors true sinon false)

Le controleur aura les fonctions qui serviront à faire intéragir le camembert.
Par exemple, les fonctions *nextPie* et *previousPie* activé par les flèches de l'image, permètte de changé de morceaux de camemberts et d'affiché son contenue.

'''java

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

'''


Malheureusement je n'ai pas pu faire le dernière partie concernant l'ajout d'un tableau interactif a côté du camembert.
Je vois bien que pour l'interaction il suffit d'ajouter lors du contrôle avant l'appel de la fonction *selectPie* les cordonnées de ces lignes.
