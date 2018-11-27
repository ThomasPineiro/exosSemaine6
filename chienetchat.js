function chienetchat(humanYears) {
	i = 1;
	catYears = 0;
	dogYears = 0;
	while(i <= humanYears)
	{
		catYears = catYears + 4;
		dogYears = dogYears + 5;
		if (i == 2) 
		{
			catYears = catYears + 5;
			dogYears = dogYears + 4;
		}
		if (i == 1) 
		{
			catYears = catYears + 11;
			dogYears = dogYears + 10;
		}
		i = i +1;
	}
	console.log("Chient et chat : Human years :"+humanYears + "catYears :" +  catYears + "dogYears :" + dogYears);
}
chienetchat(10);