function Header(){
    return(
        <header>
		<img src={require('./Sections/Images/About.jpg')} class="profile-img" alt="Profile picture"/>
		<nav>
			<ul>
				<li><a href="#name">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</header>
    );
}
export default Header;