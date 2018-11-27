function expendedform(nb)
{
	var i = 1;
	while(nb > 10)
	{
		if (nb%10 != 0) {
			console.log(nb % 10 +"x" + i );
		}
			nb = nb - (nb % 10);
			nb = nb / 10;
			i = i *10;
	}
	console.log("Expended Form : " + nb % 10 +"x" + i );
}
expendedform(15068);