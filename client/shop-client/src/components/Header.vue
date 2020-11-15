<template>
<header>
  <nav>
		<div class="menu">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Login</a></li>			
			</ul>
		</div>
	</nav>
</header>
</template>

<script>
export default {  
  
}
</script>


<style scoped>

nav {
	height: auto;
	background-color: rgb(15, 16, 71);		
}

nav li{	
	display: inline;
	font-size: 15px;
	
}
nav .menu a{
	color: white;
	text-decoration: none;
	font-weight: bold;
	margin: 1em 0em 0em 1em;
	padding:30px 15px 15px 15px;

}
nav .menu a:hover{
	color: greenyellow;

}
nav .menu {
	height: 50px;
}
nav .menu ul{
	line-height: 50px;
}

</style>
