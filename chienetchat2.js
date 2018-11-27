function chienetchat(yearCat, yearDog)
{
ownedDog = 0;
ownedCat = 0;

	while(yearDog > 0)
	{
		yearDog = yearDog - 5;
		if (ownedDog == 2) 
		{
			yearDog = yearDog - 4;
		}
		if (ownedDog == 1) 
		{
			yearDog = yearDog - 10;
		}
		ownedDog = ownedDog +1;
	}
	while(yearCat > 0)
	{
		yearCat = yearCat - 4;
		if (ownedCat == 2) 
		{
			yearCat = yearCat - 5;
		}
		if (ownedCat == 1) 
		{
			yearCat = yearCat - 11;
		}
		ownedCat = ownedCat +1;
	}
var array = [ownedCat, ownedDog];
console.log("Chien et chat 2 :" +array);
}
chienetchat(644,157);